"use client";
import { createTweet } from "@/lib/actions/tweet.action";
import { TweetValidation } from "@/lib/validations/tweet";
import { UserButton, useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RiCloseLine } from "react-icons/ri";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

interface TweetModalProp {
  userId: string;
}

export default function TweetModal(prop: TweetModalProp) {
  const { userId } = prop;

  const router = useRouter();
  const pathname = usePathname();

  const { organization } = useOrganization();

  const form = useForm<z.infer<typeof TweetValidation>>({
    resolver: zodResolver(TweetValidation),
    defaultValues: {
      tweet: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof TweetValidation>) => {
    await createTweet({
      text: values.tweet,
      author: userId,
      communityId: organization ? organization.id : null,
      path: pathname,
    });
    form.setValue("tweet", "");
    router.push("/");
  };
  return (
    <>
      <div className='fixed inset-0 z-50'>
        <div className='bg-dark-1 w-full h-screen p-3'>
          <Form {...form}>
            <form
              className='flex flex-col justify-start gap-10'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className='flex justify-between'>
                <button>
                  <RiCloseLine color='white' size={28} />
                </button>

                <Button
                  type='submit'
                  className='bg-primary-500 text-subtle-medium text-white rounded-full px-5 py-0'
                >
                  Post
                </Button>
              </div>
              <FormField
                control={form.control}
                name='tweet'
                render={({ field }) => (
                  <FormItem className='flex w-full gap-3'>
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "mt-1.5",
                        },
                      }}
                    />
                    <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                      <Textarea
                        rows={15}
                        {...field}
                        placeholder="What's happening?"
                        className='bg-dark-1 border-none resize-none placeholder:text-light-2 p-0'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
