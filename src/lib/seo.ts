import graphqlRequest from "./graphqlRequest";

export async function getSeo(slug: string) {
  const query = {
    query: `
      query GetCombinedData {
        getSeo: post(id: "${slug}", idType: SLUG) {
          seo {
            opengraphModifiedTime
            opengraphPublishedTime
            title
            metaDesc
            readingTime
          }
        }
        getSinglePost: post(id: "${slug}", idType: SLUG) {
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
        }
      }
    `,
  };

  const response = await graphqlRequest(query);
  console.log(response)
  const seoData: seo = {
    featuredImage: response?.data?.getSinglePost?.featuredImage,
    opengraphModifiedTime: response?.data?.getSeo?.seo?.opengraphModifiedTime,
    opengraphPublishedTime: response?.data?.getSeo?.seo?.opengraphPublishedTime,
    title: response?.data?.getSeo?.seo?.title,
    metaDesc: response?.data?.getSeo?.seo?.metaDesc,
    readingTime: response?.data?.getSeo?.seo?.readingTime,
  };
  console.log(seoData);
  return seoData;
}

type seo = {
  featuredImage: {
    node: {
      mediaDetails: {
        sizes: {
          sourceUrl: string;
          width: number;
          height: number;
        }[];
      };
    };
  };
  opengraphModifiedTime: string;
  opengraphPublishedTime: string;
  title: string;
  metaDesc: string;
  readingTime: string;
};
