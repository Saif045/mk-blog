"use client";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CommentForm({
  postId,
  parentId,
  onClose,
}: {
  postId: number;
  parentId?: string;
  onClose?: (value: boolean) => void;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added disabled state
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Disable the submit button while the form is being submitted
    setIsSubmitting(true);

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
      router.refresh();
    } else {
      toast.dismiss(loading);
      toast.error(result.message);
    }

    // Enable the submit button after form submission is complete
    setIsSubmitting(false);
  };

  return (
    <section className="container mx-auto  max-w-[600px]">
      <h1 className="text-xl xs:text-2xl pb-2 border-b border-b-slate-300 dark:border-b-gray-600  ">
        Add your Thoughts:
      </h1>
      <form
        className="flex flex-col gap-4 justify-center pt-2"
        onSubmit={handleSubmit}
        ref={formRef}>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="author">Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              className=" p-4 h-10 rounded-md text-black bg-gray-200 dark:bg-white"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="authorEmail">Email:</label>
            <input
              type="email"
              id="authorEmail"
              name="authorEmail"
              className=" p-4 h-10 rounded-md text-black bg-gray-200 dark:bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content">Message:</label>
          <textarea
            name="content"
            id="content"
            className="p-4 h-20 sm:h-32 rounded-md text-black bg-gray-200 dark:bg-white"></textarea>
        </div>

        <input type="hidden" name="postId" id="postId" value={postId} />
        <div className="flex justify-center items-center ">
          <button
            type="submit"
            disabled={isSubmitting} // Add disabled state based on isSubmitting value
            className="bg-black text-white dark:text-black dark:bg-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:hover:bg-gray-200 dark:focus:ring-white py-2 px-8 rounded text-lg font-semibold">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
