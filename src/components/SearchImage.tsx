"use client";
import Image from "next/image";

export default function SearchImage({
  imgSrc,
}: {
  imgSrc?: string | undefined;
}) {
  let img = {
    src: "https://wp.abhinavr.com/wp-content/uploads/2022/12/travel_icy-polar_022K.jpg",
    width: 40,
    height: 40,
  };

  if (imgSrc) {
    img = {
      src: imgSrc,
      width: 40,
      height: 40,
    };
  }

  return (
    <Image
      src={img.src}
      width={img.width}
      height={img.height}
      alt="search reust img"
      className="h-[40px] w-[40px]  object-cover rounded-full"
    />
  );
}
