"use client";
import { bottombarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Bottombar() {
  const pathname = usePathname();

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {bottombarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link hover:bg-dark-2`}
            >
              {isActive ? link.iconFill : link.icon}

              <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
