import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/Elements/Topbar";
import LeftSidebar from "@/components/Elements/LeftSidebar";
import RightSidebar from "@/components/Elements/RightSidebar";
import Bottombar from "@/components/Elements/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home / X Clone",
  description: "A Next.js 13 X App Clone Formerly Twitter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          <Topbar />
          <main className='flex flex-row max-w-7xl m-auto'>
            <LeftSidebar />
            <section className='main-container'>
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
