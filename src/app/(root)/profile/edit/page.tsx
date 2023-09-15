import AccountProfileForm from "@/components/fragments/AccountProfileForm";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Profile / X Clone",
  description: "A Next.js 13 X App Clone Formerly Twitter",
};

export default async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <>
      <h1 className='head-text mt-[56px] md:mt-0'>Edit Profile</h1>

      <section className='mt-6'>
        <AccountProfileForm user={userData} btnTitle='Continue' />
      </section>
    </>
  );
}
