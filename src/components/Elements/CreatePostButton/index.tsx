import Link from "next/link";
import { GiFeather } from "react-icons/gi";

interface CreatePostButtonProps {
  displayMd: string;
  position?: string;
}

export default function CreatePostButton(props: CreatePostButtonProps) {
  const { displayMd, position } = props;
  return (
    <Link
      href='/create-tweet'
      className={`${position} w-fit bg-primary-500 font-bold text-center text-white p-3 rounded-full mt-4 block md:${displayMd} lg:w-full`}
    >
      <GiFeather size={24} className='lg:hidden' />
      <span className='hidden lg:inline'>Post</span>
    </Link>
  );
}
