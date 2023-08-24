import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import Post from "@/components/Post";
import { getComments } from "@/lib/comments";
import { getPostSlugs, getSinglePost } from "@/lib/posts";
import { getSeo } from "@/lib/seo";
import { Metadata } from "next";
import React from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const postSlugs = await getPostSlugs("projects");
  return postSlugs.map((s) => ({ postName: s.slug }));
}

export default async function page({
  params: { postName },
}: {
  params: {
    postName: string;
  };
}) {
  const postData = await getSinglePost(postName);
  const { comments, commentCount } = await getComments(postName);

  let featuredImageUrl =
    "https://wp.abhinavr.com/wp-content/uploads/2022/12/travel_icy-polar_022K.jpg";

  if (postData.featuredImage) {
    featuredImageUrl = postData?.featuredImage?.node?.mediaDetails.sizes[0]
      .sourceUrl as string;
  }
  return (
    <>
      <Post postData={postData} img={featuredImageUrl} />
      <>
        <div className="container mx-auto lg:max-w-4xl">
          <h3 className="text-xl py-2 my-4 border-l-4 border-l-lime-300 pl-4">
            {commentCount ? commentCount : "No"} comments on this post so far:
          </h3>
          <CommentForm postId={postData?.databaseId} />
        </div>
        {comments && (
          <Comments comments={comments} postId={postData?.databaseId} />
        )}
      </>
    </>
  );
}


export async function generateMetadata({
  params: { postName },
}: {
  params: {
    postName: string;
  };
}): Promise<Metadata> {
  const post = await getSeo(postName);
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: post.title,
    description: post.metaDesc,
    alternates: {
      canonical: `/projects/${postName}`,
    },
    openGraph: {
      images: [
        {
          url: `https://mk-blog-45.vercel.app/api/og?title=${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDesc,
      site: `https://mk-blog-45.vercel.app/projects/${postName}`,
      images: [`https://mk-blog-45.vercel.app/api/og?title=${post.title}`],
    },
  };
}
