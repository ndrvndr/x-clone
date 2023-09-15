"use client";
import { deleteTweet } from "@/lib/actions/tweet.actions";
import { usePathname, useRouter } from "next/navigation";
import { RiDeleteBin7Fill } from "react-icons/ri";

interface Props {
  tweetId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

export default function DeleteTweet({
  tweetId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  if (currentUserId !== authorId || pathname === "/") return null;

  return (
    <>
      <RiDeleteBin7Fill
        color='red'
        size={18}
        onClick={async () => {
          await deleteTweet(JSON.parse(tweetId), pathname);
          if (!parentId || !isComment) {
            router.push("/");
          }
        }}
        className='cursor-pointer'
      />
    </>
  );
}
