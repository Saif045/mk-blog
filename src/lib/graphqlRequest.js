export default async function graphqlRequest(query) {
  const url = "https://mk-blog-45.000webhostapp.com/graphql";
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
    next: { revalidate: 10 }
  });

  const resJson = await res.json();
  return resJson;
}
