import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/posts";

export default function FeaturedImage({
  post,
  CategoryName,
  index,
}: {
  post: Post;
  CategoryName?: string;
  index: Number;
}) {
  let img = {
    src: `/hero.webp`,

    width: 300,
    height: 200,
  };

  if (post.featuredImage) {
    let size = post?.featuredImage?.node?.mediaDetails.sizes[0];
    if (size) {
      img = {
        src: size?.sourceUrl,
        width: size?.width,
        height: size?.height,
      };
    }
  }

  return (
    <Link href={`/${CategoryName}/${post.slug}`}>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={post.title}
        priority={index === 0 ? true : false}
        className="h-[200px] w-[300px]  object-cover shadow-lg rounded-xl "
      />
    </Link>
  );
}
