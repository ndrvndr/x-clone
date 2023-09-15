import { fetchCommunityPosts } from "@/lib/actions/community.actions";
import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import TweetCard from "./TweetCard";

interface Result {
  name: string;
  image: string;
  id: string;
  tweets: {
    _id: string;
    text: string;
    parentId: string | null;
    author: {
      name: string;
      image: string;
      id: string;
    };
    community: {
      id: string;
      name: string;
      image: string;
    } | null;
    createdAt: string;
    children: {
      author: {
        image: string;
      };
    }[];
  }[];
}

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

export default async function TweetsTab({
  currentUserId,
  accountId,
  accountType,
}: Props) {
  let result: Result;

  if (accountType === "Community") {
    result = await fetchCommunityPosts(accountId);
  } else {
    result = await fetchUserPosts(accountId);
  }

  if (!result) {
    redirect("/");
  }

  return (
    <section className='mt-9 flex flex-col gap-10'>
      {result.tweets.map((tweet) => (
        <TweetCard
          key={tweet._id}
          id={tweet._id}
          currentUserId={currentUserId}
          parentId={tweet.parentId}
          content={tweet.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: tweet.author.name,
                  image: tweet.author.image,
                  id: tweet.author.id,
                }
          }
          community={
            accountType === "Community"
              ? { name: result.name, id: result.id, image: result.image }
              : tweet.community
          }
          createdAt={tweet.createdAt}
          comments={tweet.children}
        />
      ))}
    </section>
  );
}
