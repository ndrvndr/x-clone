import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Logo from "../Logo";

export default function Topbar() {
  return (
    <nav className='topbar md:hidden'>
      <div>
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
      <div className='flex-1 flex justify-center'>
        <Logo paddingX='px-0' marginBottom='mb-0' width={20} height={20} />
      </div>
    </nav>
  );
}
