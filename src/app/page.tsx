import AnimateText from "@/components/AnimateText";
import HeroPosts from "@/components/HeroPosts";
import HomeHero from "@/components/HomeHero";
import { getPostList } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await getPostList();

  return (
    <div>
      <HomeHero />
      <div className=" flex flex-col gap-4 my-14 ">
        <div className="text-3xl font-bold w-full text-center">
          Recent Posts
        </div>
        <ul className="w-full flex flex-row flex-wrap  justify-center items-center sm:items-start  container mx-auto max-w-5xl">
          {posts?.nodes?.map((post, index) => (
            <HeroPosts post={post} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

{
  /**
          <AnimateText
            text="Computer engineering student who is interested in both hardware and
          software development. Fond of whatever related to the industry of
          Embedded Systems and electronic design. Interested in Electronics,
          Software developing and Embedded systems."
          /> */
}
