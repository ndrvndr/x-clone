# X App Clone

This is a project for developing a clone application of X formerly Twitter, although the end result may not be entirely identical to the X application. However, this application still provides a similar experience to X, where users can create accounts, log in, create tweets, interact with other users' tweets, and also create communities.

Please note that in using the third-party authentication solution Clerk that I am using, there is a limitation on the maximum number of members that can be in a community, which is only three members.

**Note:** The left sidebar display at tablet size is still not optimal in terms of layout.

## Run Locally

Clone the project

```bash
  git clone https://github.com/ndrvndr/x-clone.git
```

Go to the project directory

```bash
  cd x-clone
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`

`NEXT_CLERK_WEBHOOK_SECRET`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

`MONGODB_URL`

`UPLOADTHING_SECRET`

## Documentation

[Clerk-Next.js](https://clerk.com/docs/quickstarts/nextjs)

[UploadThing?](https://docs.uploadthing.com/)

[MongoDB Atlas](https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/)

## Tech Stack

Next.js

TailwindCSS

TypeScript

MongoDB Atlas

## Feedback

If you have any feedback, please reach out to me at andreavindra37@gmail.com
