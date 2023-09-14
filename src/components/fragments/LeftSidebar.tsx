import { sidebarLinks } from "@/constants";
import CreatePostButton from "../Elements/CreatePostButton";
import Logo from "../Elements/Logo";
import NavigationLinks from "../Elements/NavigationLinks";
import ProfileButton from "../Elements/ProfileButton";

export default function LeftSidebar() {
  return (
    <section className='custom-scrollbar leftsidebar'>
      <Logo />
      <div className='flex w-full flex-1 flex-col gap-1 px-6'>
        <NavigationLinks
          links={sidebarLinks}
          linkClassName='leftsidebar_link'
          pClassName='text-light-1 max-lg:hidden'
        />
        <div className='pl-2'>
          <CreatePostButton />
        </div>
      </div>
      <div className='px-6'>
        <ProfileButton
          userButtonBox='flex flex-row-reverse'
          avatarBox='w-10 h-10'
          showName={false}
        />
      </div>
    </section>
  );
}
