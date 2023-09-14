import Logo from "../Elements/Logo";
import ProfileButton from "../Elements/ProfileButton";

export default function Topbar() {
  return (
    <nav className='topbar md:hidden'>
      <div>
        <ProfileButton
          userButtonBox='flex flex-row-reverse'
          avatarBox='w-10 h-10'
          showName={true}
        />
      </div>
      <div className='flex-1 flex justify-center'>
        <Logo paddingX='px-0' marginBottom='mb-0' width={20} height={20} />
      </div>
    </nav>
  );
}
