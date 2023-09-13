import { footerLinks } from "@/constants";
import Link from "next/link";
import { RiMoreFill } from "react-icons/ri";

export default function Footer() {
  return (
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
  );
}
