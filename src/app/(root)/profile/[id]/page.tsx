import ProfileHeader from "@/components/fragments/ProfileHeader";
import TweetsTab from "@/components/fragments/TweetsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile / X Clone",
  description: "A Next.js 13 X App Clone Formerly Twitter",
};

export default async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(params.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <section className='mt-[56px] md:mt-0'>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className='mt-5'>
        <Tabs defaultValue='tweets' className='w-full'>
          <TabsList className='tab'>
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className='tab'>
                {tab.icon}
                <p className='max-sm:hidden'>{tab.label}</p>

                {tab.label === "Tweets" && (
                  <p className='ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2'>
                    {userInfo.tweets.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          {profileTabs.map((tab) => (
            <TabsContent
              key={`content-${tab.label}`}
              value={tab.value}
              className='w-full text-light-1'
            >
              <TweetsTab
                currentUserId={user.id}
                accountId={userInfo.id}
                accountType='User'
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
