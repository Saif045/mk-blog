import { getPostSlugs } from "@/lib/posts";
import { getSeo } from "@/lib/seo";

export default async function sitemap() {
  const baseUrl = "https://mk-blog-45.vercel.app";

  ///
  const posts = await getPostSlugs("posts");

  const postUrls = await Promise.all(
    posts.map(async (post) => {
      const seo = await getSeo(post.slug);
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: seo.opengraphModifiedTime,
      };
    })
  );

  ///
  const projects = await getPostSlugs("projects");

  const projectUrls = await Promise.all(
    projects.map(async (post) => {
      const seo = await getSeo(post.slug);
      return {
        url: `${baseUrl}/projects/${post.slug}`,
        lastModified: seo.opengraphModifiedTime,
      };
    })
  );

  const routes = ["", "/about", "/blog", "/contact", "/projects"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...postUrls, ...projectUrls];
}
