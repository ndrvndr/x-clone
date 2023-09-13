import { BiGroup, BiSolidGroup } from "react-icons/bi";
import {
  RiHeartFill,
  RiHeartLine,
  RiHome7Fill,
  RiHome7Line,
  RiSearchFill,
  RiSearchLine,
  RiUserFill,
  RiUserLine,
} from "react-icons/ri";

export const sidebarLinks = [
  {
    icon: <RiHome7Line color='white' size={24} />,
    iconFill: <RiHome7Fill color='white' size={24} />,
    route: "/",
    label: "Home",
  },
  {
    icon: <RiSearchLine color='white' size={24} />,
    iconFill: <RiSearchFill color='white' size={24} />,
    route: "/search",
    label: "Explore",
  },
  {
    icon: <RiHeartLine color='white' size={24} />,
    iconFill: <RiHeartFill color='white' size={24} />,
    route: "/activity",
    label: "Activity",
  },
  {
    icon: <BiGroup color='white' size={24} />,
    iconFill: <BiSolidGroup color='white' size={24} />,
    route: "/communities",
    label: "Communities",
  },
  {
    icon: <RiUserLine color='white' size={24} />,
    iconFill: <RiUserFill color='white' size={24} />,
    route: "/profile",
    label: "Profile",
  },
];

export const bottombarLinks = [
  {
    icon: <RiHome7Line color='white' size={24} />,
    iconFill: <RiHome7Fill color='white' size={24} />,
    route: "/",
    label: "Home",
  },
  {
    icon: <RiSearchLine color='white' size={24} />,
    iconFill: <RiSearchFill color='white' size={24} />,
    route: "/search",
    label: "Explore",
  },
  {
    icon: <RiHeartLine color='white' size={24} />,
    iconFill: <RiHeartFill color='white' size={24} />,
    route: "/activity",
    label: "Activity",
  },
  {
    icon: <BiGroup color='white' size={24} />,
    iconFill: <BiSolidGroup color='white' size={24} />,
    route: "/communities",
    label: "Communities",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];

export const footerLinks = [
  {
    label: "Terms of Service",
    route: "/",
  },
  {
    label: "Privacy Policy",
    route: "/",
  },
  {
    label: "Cookie Policy",
    route: "/",
  },
  {
    label: "Accessbility",
    route: "/",
  },
  {
    label: "Ads info",
    route: "/",
  },
];
