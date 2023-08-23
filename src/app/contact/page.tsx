"use client";
import React from "react";
import { Metadata } from "next";
import ContactClient from "./contactClient";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactClient />;
}
