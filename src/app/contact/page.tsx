import React from "react";
import { Metadata } from "next";
import ContactClient from "./contactClient";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    images: [
      {
        url: "https://mk-blog-45.vercel.app/api/og?title=Contact",
      },
    ],
  },
};

export default function Contact() {
  return <ContactClient />;
}
