import { getCategoryDetails, getPostList } from "@/lib/posts";
import MiniPost from "@/components/MiniPost";
import CategoryDetails from "@/components/CategoryDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Projects",
  },
  description:
    "Explore a diverse collection of my projects, exemplifying creativity and expertise across various domains. A testament to innovation and dedication.",
  openGraph: {
    images: [
      {
        url: "https://mk-blog-45.vercel.app/api/og?title=Projects",
      },
    ],
  },
};
export default async function page() {
  const CategoryName = "projects";
  const categoryPosts = await getPostList(CategoryName);
  const categoryDetails = await getCategoryDetails(CategoryName);

  return (
    <>
      {categoryDetails && (
        <CategoryDetails
          count={categoryDetails?.count}
          name={categoryDetails?.name}
        />
      )}
      <MiniPost postss={categoryPosts} CategoryName={"projects"} />
    </>
  );
}
