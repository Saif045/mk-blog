"use client";
import { FormEvent, useRef } from "react";
import { toast } from "react-hot-toast";

export default function CommentForm({
  postId,
  parentId,
  onClose,
}: {
  postId: number;
  parentId?: String;
  onClose?: (value: boolean) => void;
}) {
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
      parentId: parentId ? parentId : "",
    };

    const jsonData = JSON.stringify(data);

    const response = await fetch("/api/comment", {
      method: "POST",
      body: jsonData,
    });

    const result = await response?.json();

    if (response.ok) {
      toast.dismiss(loading);
      toast.success(result.message);
      formRef.current?.reset(); // Reset the form
      onClose && onClose(false);
    } else {
      toast.dismiss(loading);
      toast.error(result.message);
    }
  };

  return (
    <section className="container mx-auto  max-w-[600px]">
      <h3 className="text-xl xs:text-2xl pb-2 border-b border-b-slate-300 dark:border-b-gray-600  ">Add your Thoughts:</h3>
      <form
        className="  flex flex-col gap-4 justify-center pt-2  "
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
            className=" h-20 sm:h-32 rounded-md text-black bg-gray-200 dark:bg-white"></textarea>
        </div>

        <input type="hidden" name="postId" id="postId" value={postId} />
        <div className="flex justify-center items-center ">
          <button
            type="submit"
            className="  bg-black text-white dark:text-black dark:bg-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:hover:bg-gray-200 dark:focus:ring-white py-2 px-8 rounded text-lg font-semibold">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
