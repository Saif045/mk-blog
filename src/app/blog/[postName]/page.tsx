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
  const postSlugs = await getPostSlugs("posts");
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
  const post = await getSeo(postName);

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.opengraphPublishedTime,
    dateModified: post.opengraphModifiedTime,
    articleBody: postData.excerpt,
    author: {
      "@type": "Person",
      name: "Mohamed Khaled",
      url: "https://mk-blog-45.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Mohamed Khaled",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mk-blog-45.vercel.app/blog/${postData.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Post postData={postData} />
      <div className="p-4">
        <div className="container mx-auto lg:max-w-4xl">
          <h1 className="text-xl py-2 my-4 border-l-4 border-l-lime-300 pl-4">
            {commentCount ? commentCount : "No"} comments on this post so far:
          </h1>
          <CommentForm postId={postData?.databaseId} />
        </div>
        {comments && (
          <Comments comments={comments} postId={postData?.databaseId} />
        )}
      </div>
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
      canonical: `/blog/${postName}`,
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
      site: `https://mk-blog-45.vercel.app/blog/${postName}`,
      images: [`https://mk-blog-45.vercel.app/api/og?title=${post.title}`],
    },
  };
}

{
  /** const featuredImage = post?.featuredImage
    ? post?.featuredImage?.node?.mediaDetails?.sizes[0]?.sourceUrl
    : "https://deepbluembedded.com/wp-content/uploads/2021/04/DeepBlue-Website-Hero-Background-e1618552512933.jpg"; */
}
