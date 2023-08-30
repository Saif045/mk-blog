"use client";
import { getMorePosts } from "@/app/_actions";
import { PostsWpageInfo } from "@/lib/posts";
import { motion } from "framer-motion";
import { useTransition } from "react";

export default function LoadMore({
  posts,
  CategoryName,
  setPosts,
}: {
  posts: PostsWpageInfo | undefined;
  CategoryName?: string;
  setPosts: React.Dispatch<React.SetStateAction<PostsWpageInfo>>;
}) {
  let [isPending, startTransition] = useTransition();

  const cateName = CategoryName == "blog" ? "posts" : "projects";
  let bT = posts?.pageInfo?.hasNextPage
    ? "Load more posts"
    : "No more posts to load";

  async function getMore() {
    const morePosts: PostsWpageInfo = await getMorePosts(
      cateName,
      posts?.pageInfo?.endCursor
    );

    if (morePosts) {
      const updatedPosts: PostsWpageInfo = {
        nodes: [],
        pageInfo: {},
      };

      updatedPosts.pageInfo = morePosts.pageInfo;

      // Use optional chaining and nullish coalescing to handle possible null/undefined values
      const existingNodes = posts?.nodes ?? [];
      updatedPosts.nodes = existingNodes.concat(morePosts.nodes);

      setPosts(updatedPosts);
    }
  }
  return (
    <motion.form
      action={() => startTransition(() => getMore())}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.38 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}>
      <button
        className="inline-flex space-x-2 items-center justify-center bg-black text-white dark:text-black dark:bg-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:hover:bg-gray-200 dark:focus:ring-white py-2 px-8 rounded text-lg font-semibold"
        type="submit"
        disabled={!posts?.pageInfo?.hasNextPage}>
        {isPending ? (
          <>
            <div className="w-6 h-6 border-t-4 border-r-4  border-gray-200 dark:border-gray-600  rounded-full animate-spin" />
            <span>Loading ...</span>
          </>
        ) : (
          <span>{bT}</span>
        )}
      </button>
    </motion.form>
  );
}
