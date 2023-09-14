import CreatePostButton from "@/components/Elements/CreatePostButton";
import Bottombar from "@/components/fragments/Bottombar";
import LeftSidebar from "@/components/fragments/LeftSidebar";
import RightSidebar from "@/components/fragments/RightSidebar";
import Topbar from "@/components/fragments/Topbar";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import TweetModal from "@/components/fragments/TweetModal";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home / X Clone",
  description: "A Next.js 13 X App Clone Formerly Twitter",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          <TweetModal userId={userInfo._id.toString()} />

          <Topbar />

          <main className='flex flex-row max-w-7xl m-auto'>
            <LeftSidebar />

            <section className='main-container relative'>
              <div className='absolute bottom-24 right-4'>
                <CreatePostButton displayMd='hidden' />
              </div>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>

            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
