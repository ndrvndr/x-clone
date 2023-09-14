import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

interface ProfileButtonProps {
  userButtonBox?: string;
  avatarBox?: string;
  showName: boolean;
}

export default function ProfileButton(props: ProfileButtonProps) {
  const { userButtonBox, avatarBox, showName } = props;

  return (
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
  );
}
