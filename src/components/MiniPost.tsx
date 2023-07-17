import { Post } from "@/lib/posts";
import Link from "next/link";
import React from "react";
import Date from "./Date";
import FeaturedImage from "./FeaturedImage";
import TruncatedExcerptPreview from "./TruncatedExcerptPreview";

type Props = {
  posts: Post[];
  CategoryName: string;
};

const MiniPost = ({ posts, CategoryName }: Props) => {
  return (
    <main>
      <section className="post-list mt-4">
        <div className="container mx-auto lg:max-w-5xl">
          <ul>
            {posts?.map((post) => (
              <li
                key={post.slug}
                className="flex flex-col sm:flex-row justify-center items-center mb-8 p-4 gap-4 sm:h-[200px]">
                <div className="  sm:w-1/3">
                  <FeaturedImage post={post} CategoryName={CategoryName} />
                </div>

                <div className=" max-w-[300px] sm:max-w-5xl xs:w-2/3 ">
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
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MiniPost;
