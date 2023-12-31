export default async function graphqlRequest(query) {
  const url = "https://mk-45.000webhostapp.com/graphql";
  const headers = { "Content-Type": "application/json" };
  if (process.env.WORDPRESS_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.WORDPRESS_REFRESH_TOKEN}`;
  }
  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
    next: { revalidate: 1000 },
  });
  if (!res) return;

  const resJson = await res.json();
  return resJson;
}
