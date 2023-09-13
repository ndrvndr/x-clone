import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Profile() {
  return (
    <div className='px-6'>
      <UserButton
        afterSignOutUrl='/'
        appearance={{
          baseTheme: dark,
          elements: {
            userButtonBox: "flex flex-row-reverse",
            avatarBox: "w-10 h-10",
          },
        }}
        showName={true}
      />
    </div>
  );
}
