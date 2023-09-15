import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

interface ProfileButtonProps {
  userButtonBox?: string;
  avatarBox?: string;
  showName: boolean;
}

export default function ProfileButton(props: ProfileButtonProps) {
  const { userButtonBox, avatarBox, showName } = props;

  return (
    <div className='flex flex-row-reverse items-center gap-0'>
      <OrganizationSwitcher
        appearance={{
          baseTheme: dark,
          elements: {
            organizationSwitcherTriggerIcon: "m-0",
            userPreviewTextContainer: "hidden",
            userPreviewAvatarContainer: "hidden",
            organizationSwitcherTrigger: "p-0 m-0 gap-0",
          },
        }}
      />

      <div>
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            baseTheme: dark,
            elements: {
              userButtonBox: userButtonBox,
              avatarBox: avatarBox,
            },
          }}
          showName={showName}
        />
      </div>
    </div>
  );
}
