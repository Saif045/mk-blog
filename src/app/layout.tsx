import "./globals.css";
import type { Metadata } from "next";
import {
  Inter,
  Inconsolata,
  Fira_Code,
  Roboto_Mono,
  JetBrains_Mono,
  Cabin,
} from "next/font/google";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/utils/ScrollToTop";
import Footer from "@/components/Footer";
import ToasterProvider from "@/utils/ToasterProvider";
import ExitTransition from "@/utils/ExitTransition";

const inter = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mk-blog-45.vercel.app"),
  applicationName: "Mohamed Khaled",
  publisher: "Mohamed Khaled",
  creator: "Mohamed Khaled",
  authors: [{ name: "Mohamed Khaled", url: "https://mk-blog-45.vercel.app" }],
  title: {
    default: "Mohamed Khaled",
    template: `%s | Mohamed Khaled`,
  },
  keywords: [],
  description:
    "Computer engineering student who is interested in both hardware and software development. Fond of whatever related to the industry of Embedded Systems and electronic design. Interested in Electronics, Software developing and Embedded systems.",
  verification: {
    google: "AnKIUrVQeMso_NMBhy6o6eIdwZXwU6dcMQAzyWNApJ0",
  },
  openGraph: {
    type: "website",
    url: "https://mk-blog-45.vercel.app",
    images: [
      {
        url: "https://mk-blog-45.vercel.app/api/og?title=Mohamed Khaled",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Khaled",
    description:
      "Computer engineering student who is interested in both hardware and software development. Fond of whatever related to the industry of Embedded Systems and electronic design. Interested in Electronics, Software developing and Embedded systems.",
    creator: "Mohamed Khaled",
    creatorId: "@mk45",
    site: "https://mk-blog-45.vercel.app",
    images: ["https://mk-blog-45.vercel.app/api/og?title=Mohamed Khaled"],
  },
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Mohamed Khaled",
  url: "https://mk-blog-45.vercel.app",
  sameAs: ["https://www.linkedin.com/in/mkh384/", "https://github.com/MK384"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-black  dark:text-white bg-white dark:bg-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <ToasterProvider />
        <Header />
        <ExitTransition />
        <div className="pt-14" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
