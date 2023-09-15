import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

interface ProfileButtonProps {
  showName: boolean;
}

export default function ProfileButton(props: ProfileButtonProps) {
  const { showName } = props;

  return (
    <div className='flex flex-row-reverse'>
      <OrganizationSwitcher
        appearance={{
          baseTheme: dark,
        }}
      />

      <div>
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            baseTheme: dark,
          }}
          showName={showName}
        />
      </div>
    </div>
  );
}
