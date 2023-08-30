import { PostWithContent } from "@/lib/posts";
import React from "react";
import Date from "./Date";

type Props = { postData: PostWithContent };

const Post = ({ postData }: Props) => {
  return (
    <article className={` font-light`}>
      <section className=" h-[16rem] relative">
        <div className="absolute inset-0  opacity-40" />

        <div className="container mx-auto h-full flex flex-col justify-center items-center lg:max-w-4xl">
          <h1
            aria-label={postData.title}
            className={` text-3xl xs:text-4xl font-semibold  relative z-10 `}>
            {postData.title}
          </h1>

          <div
            aria-label={"post author - publisher Mohamed Khaled"}
            className="pb-4  z-10 flex flex-col xs:flex-row">
            Posted by Mohamed Khaled{" "}
            <span
              className="pl-2"
              aria-label={"date where post was last updated "}>
            
              last updated on <Date dateString={postData.modified} />
            </span>
          </div>
        </div>
      </section>
      <section className="content-area py-8 px-4">
        <div
          dangerouslySetInnerHTML={{ __html: postData.content }}
          className="post-content container lg:max-w-4xl mx-auto"
        />
      </section>
    </article>
  );
};

export default Post;
