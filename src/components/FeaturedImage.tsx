import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/posts";

export default function FeaturedImage({
  post,
  CategoryName,
}: {
  post: Post;
  CategoryName?: string;
}) {
  let img = {
    src: "https://wp.abhinavr.com/wp-content/uploads/2022/12/travel_icy-polar_022K.jpg",
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
        className="h-[200px] w-[300px]  object-cover rounded-xl"
      />
    </Link>
  );
}
