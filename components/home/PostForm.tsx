"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { AppDispatch, RootState } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});

const NewForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-16">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Title"
                  {...field}
                  className="rounded-xl resize-none placeholder text-dark400_light700"
                />
              </FormControl>
              <FormMessage className="dark:text-red-400 text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Type your thoughts"
                  {...field}
                  className="rounded-xl resize-y placeholder text-dark400_light700"
                />
              </FormControl>
              <FormMessage className="dark:text-red-400 text-red-600" />
              <FormDescription className="text-dark100_light900 flex w-full justify-between">
                <div>Your Name - current time</div>
                <Input
                  id="media"
                  type="file"
                  placeholder="Add Media"
                  className="file:bg-slate-400 dark:file:bg-slate-800 file:text-dark100_light900 hover:file:bg-blue-100 file:border file:border-none border-none file:rounded-md w-auto"
                />
              </FormDescription>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          Create Post
        </Button>
      </form>
    </Form>
  );
};

const PostForm = () => {
  const postMode = useSelector((state: RootState) => state.createPost.postMode);
  const dispatch = useDispatch<AppDispatch>();

  return <>{postMode ? <NewForm /> : null}</>;
};

export default PostForm;
