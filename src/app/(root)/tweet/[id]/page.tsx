import Reply from "@/components/fragments/Reply";
import TweetCard from "@/components/fragments/TweetCard";
import { fetchTweetById } from "@/lib/actions/tweet.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Tweets / X Clone",
  description: "A Next.js 13 X App Clone Formerly Twitter",
};

export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const tweet = await fetchTweetById(params.id);

  return (
    <section className='relative mt-[56px] md:mt-0'>
      <div>
        <TweetCard
          id={tweet._id}
          currentUserId={user.id}
          parentId={tweet.parentId}
          content={tweet.text}
          author={tweet.author}
          community={tweet.community}
          createdAt={tweet.createdAt}
          comments={tweet.children}
        />
      </div>

      <div className='mt-7'>
        <Reply
          tweetId={params.id}
          currentUserImg={user.imageUrl}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className='mt-10'>
        {tweet.children.map((childItem: any) => (
          <TweetCard
            key={childItem._id}
            id={childItem._id}
            currentUserId={user.id}
            parentId={childItem.parentId}
            content={childItem.text}
            author={childItem.author}
            community={childItem.community}
            createdAt={childItem.createdAt}
            comments={childItem.children}
            isComment
          />
        ))}
      </div>
    </section>
  );
}
