import { getPostSlugs } from "@/lib/posts";
import { getSeo } from "@/lib/seo";

export default async function sitemap() {
  const baseUrl = "https://mk-blog-45.vercel.app";

  ///
  const posts = await getPostSlugs("posts");
  let postModifiedTime: string;
  for (const post of posts) {
    const seo = await getSeo(post.slug);
    postModifiedTime = seo.opengraphModifiedTime;
  }
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: postModifiedTime,
  }));

  ///
  const projects = await getPostSlugs("projects");
  let projectModifiedTime: string;
  for (const project of projects) {
    const seo = await getSeo(project.slug);
    projectModifiedTime = seo.opengraphModifiedTime;
  }
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: projectModifiedTime,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/projects`, lastModified: new Date().toISOString() },

    ...postUrls,
    ...projectUrls,
  ];
}
