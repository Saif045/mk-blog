import { CommentNode } from "@/lib/comments";
import React from "react";
import Date from "./Date";

type Props = { comments: CommentNode[] };

const Comments = ({ comments }: Props) => {
  return (
    <div className="container mx-auto lg:max-w-4xl mb-10">
      <section>
        <ul>
          {comments?.map((comment) => (
            <li key={comment.id} className="pb-4 border-b  border-b-slate-300 dark:border-b-gray-600 ">
              <div className=" flex justify-start items-center">
                <div className="py-4">
                  <img
                    src={comment?.author?.node?.avatar?.url}
                    width={comment?.author?.node?.avatar?.width}
                    height={comment?.author?.node?.avatar?.height}
                    className="rounded-full max-w-[50px] mr-4"
                  />
                </div>
                <div>
                  <div className="font-bold">{comment?.author?.node?.name}</div>
                  <div className="text-sm">
                    <Date dateString={comment.date} />
                  </div>
                </div>
              </div>
              <div className=" pl-[66px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: comment.content,
                  }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Comments;
