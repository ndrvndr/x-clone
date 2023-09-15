import PostTweet from "@/components/fragments/PostTweet";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Compose Tweet / X Clone",
  description: "A Next.js 13 X App Clone Formerly Twitter",
};

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return <PostTweet userId={userInfo._id.toString()} />;
}

export default Page;
