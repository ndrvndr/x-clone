"use server";
import { revalidatePath } from "next/cache";
import Community from "../models/community.model";
import Tweet from "../models/tweet.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
  connectToDB();

  const skipAmount = (pageNumber - 1) * pageSize;

  const postsQuery = Tweet.find({ parentId: { $in: [null, undefined] } })
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({
      path: "author",
      model: User,
    })
    .populate({
      path: "community",
      model: Community,
    })
    .populate({
      path: "children",
      populate: {
        path: "author",
        model: User,
        select: "_id name parentId image",
      },
    });

  const totalPostsCount = await Tweet.countDocuments({
    parentId: { $in: [null, undefined] },
  });

  const posts = await postsQuery.exec();

  const isNext = totalPostsCount > skipAmount + posts.length;

  return { posts, isNext };
}

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createTweet({ text, author, communityId, path }: Params) {
  try {
    connectToDB();

    const communityIdObject = await Community.findOne(
      { id: communityId },
      { _id: 1 }
    );

    const createdTweet = await Tweet.create({
      text,
      author,
      community: communityIdObject,
    });

    await User.findByIdAndUpdate(author, {
      $push: { tweets: createdTweet._id },
    });

    if (communityIdObject) {
      await Community.findByIdAndUpdate(communityIdObject, {
        $push: { tweets: createdTweet._id },
      });
    }

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create tweet: ${error.message}`);
  }
}

async function fetchAllChildTweets(tweetId: string): Promise<any[]> {
  const childTweets = await Tweet.find({ parentId: tweetId });

  const descendantTweets = [];
  for (const childTweet of childTweets) {
    const descendants = await fetchAllChildTweets(childTweet._id);
    descendantTweets.push(childTweet, ...descendants);
  }

  return descendantTweets;
}

export async function deleteTweet(id: string, path: string): Promise<void> {
  try {
    connectToDB();

    const mainTweet = await Tweet.findById(id).populate("author community");

    if (!mainTweet) {
      throw new Error("Tweet not found");
    }

    const descendantTweets = await fetchAllChildTweets(id);

    const descendantTweetIds = [
      id,
      ...descendantTweets.map((tweet) => tweet._id),
    ];

    const uniqueAuthorIds = new Set(
      [
        ...descendantTweets.map((tweet) => tweet.author?._id?.toString()),
        mainTweet.author?._id?.toString(),
      ].filter((id) => id !== undefined)
    );

    const uniqueCommunityIds = new Set(
      [
        ...descendantTweets.map((tweet) => tweet.community?._id?.toString()),
        mainTweet.community?._id?.toString(),
      ].filter((id) => id !== undefined)
    );

    await Tweet.deleteMany({ _id: { $in: descendantTweetIds } });

    await User.updateMany(
      { _id: { $in: Array.from(uniqueAuthorIds) } },
      { $pull: { tweets: { $in: descendantTweetIds } } }
    );

    await Community.updateMany(
      { _id: { $in: Array.from(uniqueCommunityIds) } },
      { $pull: { tweets: { $in: descendantTweetIds } } }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to delete tweet: ${error.message}`);
  }
}

export async function fetchTweetById(tweetId: string) {
  connectToDB();

  try {
    const tweet = await Tweet.findById(tweetId)
      .populate({
        path: "author",
        model: User,
        select: "_id id name image",
      })
      .populate({
        path: "community",
        model: Community,
        select: "_id id name image",
      })
      .populate({
        path: "children",
        populate: [
          {
            path: "author",
            model: User,
            select: "_id id name parentId image",
          },
          {
            path: "children",
            model: Tweet,
            populate: {
              path: "author",
              model: User,
              select: "_id id name parentId image",
            },
          },
        ],
      })
      .exec();

    return tweet;
  } catch (err) {
    console.error("Error while fetching tweet:", err);
    throw new Error("Unable to fetch tweet");
  }
}

export async function addCommentToTweet(
  tweetId: string,
  commentText: string,
  userId: string,
  path: string
) {
  connectToDB();

  try {
    const originalTweet = await Tweet.findById(tweetId);

    if (!originalTweet) {
      throw new Error("Tweet not found");
    }

    const commentTweet = new Tweet({
      text: commentText,
      author: userId,
      parentId: tweetId,
    });

    const savedCommentTweet = await commentTweet.save();

    originalTweet.children.push(savedCommentTweet._id);

    await originalTweet.save();

    revalidatePath(path);
  } catch (err) {
    console.error("Error while adding comment:", err);
    throw new Error("Unable to add comment");
  }
}
