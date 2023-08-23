import { ImageResponse } from "next/server";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

export default async function og() {
  return new ImageResponse(
    (
      <div tw="relative w-full h-full flex items-center justify-center">
        <div tw="absolute flex bg-black opacity-50 inset-0 " />
        <p tw="text-white text-4xl flex text-center font-bold m-5">
          Blog Posts
        </p>
      </div>
    ),
    size
  );
}
