"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinksProps {
  links: {
    icon: JSX.Element;
    iconFill: JSX.Element;
    label: string;
    route: string;
  }[];
  linkClassName: string;
  pClassName: string;
}

export default function NavigationLinks(props: NavigationLinksProps) {
  const { links, linkClassName, pClassName } = props;

  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <>
      {links.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        if (link.route === "/profile") link.route = `${link.route}/${userId}`;

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`${linkClassName} w-fit`}
          >
            {isActive ? link.iconFill : link.icon}
            <p className={pClassName}>{link.label}</p>
          </Link>
        );
      })}
    </>
  );
}
