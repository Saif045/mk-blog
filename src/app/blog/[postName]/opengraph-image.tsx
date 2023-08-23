import { getSinglePost } from "@/lib/posts";
import { ImageResponse } from "next/server";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

interface Props {
  params: {
    postName: string;
  };
}

export default async function og({ params: { postName } }: Props) {
  const post = await getSinglePost(postName);

  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center">
        <img
          src={post?.featuredImage.node?.mediaDetails.sizes[0].sourceUrl}
          alt={post?.title}
        />
        <div tw="absolute flex bg-black opacity-50 inset-0 " />
        <div tw="absolute flex items-center top-2 w-full ">
          <p tw="text-white text-4xl flex font-bold m-5">{post?.title}</p>
          <p tw="text-indigo-200 text-xl flex font-bold m-5">Mohamed Khaled</p>
          <p tw="text-purple-200 text-xl flex font-bold m-5">
            {post?.modified}
          </p>
        </div>
      </div>
    ),
    size
  );
}
