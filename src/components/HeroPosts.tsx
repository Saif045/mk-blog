"use client";
import React from "react";
import Date from "@/components/Date";
import FeaturedImage from "@/components/FeaturedImage";
import TruncatedExcerptPreview from "@/components/TruncatedExcerptPreview";
import { motion } from "framer-motion";
import Link from "next/link";
import { Post } from "@/lib/posts";

type Props = {
  post: Post;
  index: Number;
};

const HeroPosts = ({ post, index }: Props) => {
  let CategoryName =
    post.categories.nodes[0].slug == "projects" ? "projects" : "blog";

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.38 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      key={post.slug}
      className="flex flex-col  justify-center  mb-2 p-4 gap-4 w-full h-full max-w-[300px]">
      <FeaturedImage post={post} CategoryName={CategoryName} index={index} />

      <div className=" w-[94%] ">
        <h2>
          <Link
            href={`/${CategoryName}/${post.slug}`}
            className=" text-2xl  font-semibold">
            {post.title}
          </Link>
        </h2>
        <div className="py-2 text-sm">
          Published on <Date dateString={post.date} />
        </div>
        <Link href={`/${CategoryName}/${post.slug}`}>
          <TruncatedExcerptPreview excerpt={post.excerpt} />
        </Link>
      </div>
    </motion.li>
  );
};

export default HeroPosts;
