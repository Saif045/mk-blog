import { CommentNode } from "@/lib/comments";
import Image from "next/image";
import React from "react";
import CommentForm from "./CommentForm";
import Date from "./Date";
import CommentModal from "./Modals/CommentModal";

type Props = {
  comments: CommentNode[];
  postId: number;
};

const Comments = ({ comments, postId }: Props) => {
  return (
    <div className="container mx-auto lg:max-w-4xl mb-10">
      <section>
        <ul>
          {comments?.map((comment) => (
            <li
              key={comment.id}
              className="py-6 border-b border-b-slate-300 dark:border-b-gray-600 ">
              <div className="  w-full ">
                <Comment comment={comment} />
                {/* on click open form modal to collect comment and add to it a parent id of current comment id as props  */}
                <CommentModal>
                  <CommentForm postId={postId} parentId={comment.id} />
                </CommentModal>
              </div>

              {comment.replies && comment.replies?.nodes.length > 0 && (
                <ul className="pl-[26px]  xs:pl-[40px] sm:pl-[66px]">
                  {comment.replies.nodes.map((reply) => (
                    <li key={reply.id} className="">
                      <Comment comment={reply} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Comments;

type CommentProps = {
  comment: CommentNode;
};

const Comment = ({ comment }: CommentProps) => {
  return (
    <div>
      <div className="flex justify-start items-center">
        <div className="py-4">
          <Image
            src={comment?.author?.node?.avatar?.url as string}
            width={comment?.author?.node?.avatar?.width}
            height={comment?.author?.node?.avatar?.height}
            className="rounded-full max-w-[50px] mr-4"
            alt={comment?.author?.node?.name as string}
          />
        </div>
        <div>
          <div className="font-bold">{comment?.author?.node?.name}</div>
          <div className="text-sm">
            <Date dateString={comment.date} />
          </div>
        </div>
      </div>
      <div className="pl-[66px]">
        <div
          className="w-full overflow-hidden"
          dangerouslySetInnerHTML={{ __html: comment.content }}></div>
      </div>
    </div>
  );
};
