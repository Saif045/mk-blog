import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ",
  openGraph: {
    images: [
      {
        url: "https://mk-blog-45.vercel.app/api/og?title=About Page",
      },
    ],
  },
};
export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full w-full overflow-x-hidden">{children}</div>;
}
