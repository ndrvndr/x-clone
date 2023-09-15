import Image from "next/image";
import Link from "next/link";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
}

export default function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}: Props) {
  return (
    <div className='flex w-full flex-col justify-start'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center gap-3'>
          <div className='relative -left-1 h-14 w-14 object-cover'>
            <Image
              src={imgUrl}
              alt='logo'
              fill
              className='rounded-full object-cover shadow-2xl'
            />
          </div>

          <div className='flex-1'>
            <h2 className='text-left text-heading4-medium font-bold text-light-1'>
              {name}
            </h2>
            <p className='text-small-medium text-gray-1'>@{username}</p>
          </div>
        </div>
        {accountId === authUserId && type !== "Community" && (
          <Link href='/profile/edit'>
            <div className='cursor-pointer rounded-full bg-dark-1 border border-solid border-light-3 px-4 py-2 text-subtle-medium'>
              <p className='text-light-2'>Edit profile</p>
            </div>
          </Link>
        )}
      </div>

      <p className='mt-5 max-w-lg text-base-regular text-light-2'>{bio}</p>
    </div>
  );
}
