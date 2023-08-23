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

const inter = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mk-blog-45.vercel.app"),
  title: {
    default: "Mohamed Khaled",
    template: `%s | Mohamed Khaled`,
  },
  description:
    "Computer engineering student who is interested in both hardware and software development. Fond of whatever related to the industry of Embedded Systems and electronic design. Interested in Electronics, Software developing and Embedded systems.",
  // verification: {
  //  google: "google-site-verification=878787878",
  //},
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
        <ScrollToTop />
        <ToasterProvider />
        <Header />
        <div className="pt-14" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
