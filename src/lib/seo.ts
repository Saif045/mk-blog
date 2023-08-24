import graphqlRequest from "./graphqlRequest";

export async function getSeo(slug: string) {
  const query = {
    query: `query getSeo {
         post(id: "${slug}", idType: SLUG) {
              seo {
                opengraphImage {
                  mediaItemUrl
                }
                opengraphModifiedTime
                opengraphPublishedTime
                title
                metaDesc
                readingTime
              }
            }
          }`,
  };

  const getSeo = await graphqlRequest(query);
  const seoData: seo = getSeo.data["post"].seo;
  if (!seoData) return;
  console.log(seoData?.opengraphImage.mediaItemUrl);
  return seoData;
}

type seo = {
  opengraphImage: {
    mediaItemUrl: string;
  };
  opengraphModifiedTime: string;
  opengraphPublishedTime: string;
  title: string;
  metaDesc: string;
  readingTime: string;
};
