import { GiFeather } from "react-icons/gi";

export default function CreatePostButton() {
  return (
    <button className='w-fit bg-primary-500 font-bold text-white p-3 rounded-full mt-4 hidden md:block lg:w-full'>
      <GiFeather size={24} className='lg:hidden' />
      <span className='hidden lg:inline'>Post</span>
    </button>
  );
}
