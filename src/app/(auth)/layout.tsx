import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth / X Clone",
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
        <body
          className={`${inter.className} bg-dark-1 flex items-center justify-center h-screen`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
