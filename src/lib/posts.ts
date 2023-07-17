import graphqlRequest from "./graphqlRequest";

interface MediaSize {
  sourceUrl: string;
  width: number;
  height: number;
}

interface MediaDetails {
  file: string;
  sizes: MediaSize[];
}

interface FeaturedImageNode {
  mediaDetails: MediaDetails;
}

interface CategoryNode {
  name: string;
  slug: string;
}

export interface Post {
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    node: FeaturedImageNode | null;
  };
  categories: {
    nodes: CategoryNode[];
  };
}

export interface PostWithContent extends Post {
  content: string;
  modified: string;
  databaseId: number;
}

export async function getPostList(value?: string) {
  let condition = ` first: 5, where: {orderby: {field: DATE, order: DESC}}`;

  if (value) {
    condition = ` first: 5, where: {orderby: {field: DATE, order: DESC}, categoryName: "${value}"}`;
  }

  const query = {
    query: `query getAllPosts {
            posts(${condition}) {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts.nodes;

  return allPosts as Post[];
}

export async function getSinglePost(slug: string) {
  const query = {
    query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }`,
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;

  return singlePost as PostWithContent;
}

interface PostSlugs {
  slug: string;
}

export async function getPostSlugs(categoryName: string) {
  const query = {
    query: `query getPostSlugs {
      posts(where: { categoryName: "${categoryName}" }) {
        nodes {
          slug
        }
      }
          }`,
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.posts.nodes;
  return slugs as PostSlugs[];
}

interface CategoryDetails {
  count: number;
  name: string;
  slug: string;
}

export async function getCategoryDetails(categoryName: string) {
  const query = {
    query: `query getCategoryDetails {
      category(id: "${categoryName}", idType: SLUG) {
        count
        name
        slug
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const categoryDetails = resJson.data.category;

  return categoryDetails as CategoryDetails;
}
