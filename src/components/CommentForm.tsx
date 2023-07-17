"use client";
import { FormEvent, useRef } from "react";
import { toast } from "react-hot-toast";

export default function CommentForm({ postId }: { postId: number }) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loading = toast.loading("Your comment is being submitted...");

    const formData = new FormData(event.currentTarget);

    const data = {
      author: formData.get("author"),
      authorEmail: formData.get("authorEmail"),
      content: formData.get("content")?.toString().replace(/\n/g, "\\n"),
      postId: formData.get("postId"),
    };

    const jsonData = JSON.stringify(data);

    const response = await fetch("/api/comment", {
      method: "POST",
      body: jsonData,
    });

    const result = await response?.json();

    console.log(result);

    if (response.ok) {
      toast.dismiss(loading);
      toast.success(result.message);
      formRef.current?.reset(); // Reset the form
    } else {
      toast.dismiss(loading);
      toast.error(result.message);
    }
  };

  return (
    <>
      <h3 className="text-2xl pb-4 mb-4 border-b">Add your Thoughts:</h3>
      <form
        className="flex flex-col gap-4 justify-center "
        onSubmit={handleSubmit}
        ref={formRef}>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="author">Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              className="h-10 rounded-md text-black bg-gray-200 dark:bg-white"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="authorEmail">Email:</label>
            <input
              type="email"
              id="authorEmail"
              name="authorEmail"
              className="h-10 rounded-md text-black bg-gray-200 dark:bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content">Message:</label>
          <textarea
            name="content"
            id="content"
            className="h-32 rounded-md text-black bg-gray-200 dark:bg-white"></textarea>
        </div>

        <input type="hidden" name="postId" id="postId" value={postId} />
        <div className="flex justify-center items-center mb-10">
          <button
            type="submit"
            className=" text-white  dark:text-black bg-black dark:bg-white border-0 py-2 px-8 focus:outline-none rounded text-lg font-semibold">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
