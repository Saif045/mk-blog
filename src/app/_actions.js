"use server";

import { getPostList } from "@/lib/posts";

export async function getMorePosts(cateName, endCursor) {
  const morePosts = await getPostList(cateName, endCursor);

  return morePosts
}
