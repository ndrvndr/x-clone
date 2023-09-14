import { footerLinks } from "@/constants";
import Link from "next/link";
import { RiMoreFill, RiSearchLine } from "react-icons/ri";
import Box from "../Elements/Box";

export default function RightSidebar() {
  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex items-center bg-dark-2 p-4 rounded-full gap-4'>
        <RiSearchLine color='white' size={20} />
        <input type='text' placeholder='Search' className='w-full bg-dark-2' />
      </div>

      <Box heading='Subscribe to Premium'>
        <p className='text-light-1 font-semibold'>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className='w-fit px-5 py-2 rounded-full bg-primary-500 text-white font-bold'>
          Subscribe
        </button>
      </Box>

      <Box heading='Trends for you'></Box>

      <Box heading='Who to follow'></Box>

      <footer className='text-[#565A5F] text-subtle-medium flex'>
        <ul className='flex flex-wrap gap-x-3'>
          {footerLinks.map((link) => {
            return (
              <li key={link.label} className='hover:underline'>
                <Link href={link.route}>{link.label}</Link>
              </li>
            );
          })}
          <button className='flex items-center gap-x-1 hover:underline'>
            More
            <RiMoreFill />
          </button>
          <li>&copy; 2023 X Corp.</li>
        </ul>
      </footer>
    </section>
  );
}
