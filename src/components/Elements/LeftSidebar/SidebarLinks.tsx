"use client";
import { sidebarLinks } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreatePostButton from "./CreatePostButton";

export default function SidebarLinks() {
  const pathname = usePathname();
  const { userId } = useAuth();
  return (
    <div className='flex w-full flex-1 flex-col gap-1 px-6'>
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        if (link.route === "/profile") link.route = `${link.route}/${userId}`;

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`leftsidebar_link `}
          >
            {isActive ? link.iconFill : link.icon}
            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
          </Link>
        );
      })}
      <div className='pl-2'>
        <CreatePostButton />
      </div>
    </div>
  );
}
