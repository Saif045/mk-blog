import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/utils/ScrollToTop";
import Footer from "@/components/Footer";
import ToasterProvider from "@/utils/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "text-black  dark:text-white bg-white dark:bg-black "
        }>
        <ScrollToTop />
        <ToasterProvider />
        <Header />
        <div className="pt-20" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
