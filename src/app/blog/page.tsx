import { getCategoryDetails, getPostList } from "@/lib/posts";
import MiniPost from "@/components/MiniPost";
import CategoryDetails from "@/components/CategoryDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
  description:
    "Engaging and informative blog posts covering a range of topics. Gain insights, learn, and stay updated with thought-provoking content.",
};
export default async function page() {
  const CategoryName = "posts";
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
      <MiniPost postss={categoryPosts} CategoryName={"blog"} />
    </>
  );
}
