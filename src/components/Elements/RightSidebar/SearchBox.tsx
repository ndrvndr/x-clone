import { RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
  return (
    <div className='flex items-center bg-dark-2 p-4 rounded-full gap-4'>
      <RiSearchLine color='white' size={20} />
      <input type='text' placeholder='Search' className='w-full bg-dark-2' />
    </div>
  );
}
