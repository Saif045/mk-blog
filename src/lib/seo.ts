import graphqlRequest from "./graphqlRequest";

export async function getSeo(slug: string) {
  const query = {
    query: `query getSeo {
      post(id: "${slug}", idType: SLUG) {
           seo {
             opengraphModifiedTime
             opengraphPublishedTime
             title
             metaDesc
             readingTime
           }
         }
       }`,
  };

  const response = await graphqlRequest(query);
  const seoData: seo = response.data["post"].seo;
  return seoData;
}

type seo = {
  opengraphModifiedTime: string;
  opengraphPublishedTime: string;
  title: string;
  metaDesc: string;
  readingTime: string;
};
