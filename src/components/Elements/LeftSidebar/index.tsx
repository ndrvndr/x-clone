import Logo from "../Logo";
import Profile from "./Profile";
import SidebarLinks from "./SidebarLinks";

export default function LeftSidebar() {
  return (
    <section className='custom-scrollbar leftsidebar'>
      <Logo />
      <SidebarLinks />
      <Profile />
    </section>
  );
}
