"use client";
import { PostsWpageInfo } from "@/lib/posts";
import Link from "next/link";
import React, { useState } from "react";
import Date from "../utils/Date";
import FeaturedImage from "./FeaturedImage";
import TruncatedExcerptPreview from "../utils/TruncatedExcerptPreview";
import LoadMore from "./LoadMore";
import { motion } from "framer-motion";

type Props = {
  postss: PostsWpageInfo;
  CategoryName: string;
};

const MiniPost = ({ postss, CategoryName }: Props) => {
  const [posts, setPosts] = useState<PostsWpageInfo>(postss);

  return (
    <main>
      <section className="post-list mt-4">
        <div className="container mx-auto lg:max-w-5xl">
          <ul>
            {posts?.nodes?.map((post, index) => (
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                key={post.slug}
                className="flex flex-col sm:flex-row justify-center items-center mb-8 p-4 gap-4 sm:h-[200px]">
                <div className="  sm:w-1/3">
                  <FeaturedImage
                    index={index}
                    post={post}
                    CategoryName={CategoryName}
                  />
                </div>

                <div className=" max-w-[300px] sm:max-w-5xl xs:w-2/3 ">
                  <h2>
                    <Link
                      aria-label={`link to ` + post.title + " post"}
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
            ))}
          </ul>
        </div>
      </section>
      <div className="py-4 text-center">
        <LoadMore
          posts={posts}
          setPosts={setPosts}
          CategoryName={CategoryName}
        />
      </div>
    </main>
  );
};

export default MiniPost;
