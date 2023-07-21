import { getCategoryDetails, getPostList } from "@/lib/posts";
import MiniPost from "@/components/MiniPost";
import CategoryDetails from "@/components/CategoryDetails";

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
