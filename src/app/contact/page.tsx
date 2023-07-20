"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_zc10ydk",
          "template_w58nqzb",
          form.current,
          "fvHAVGH5cph6P-EK4"
        )
        .then(
          () => {
            alert("Message successfully sent!");
            router.push("/");
          },
          () => {
            alert("Failed to send the message, please try again");
          }
        );
    }

    if (e.target instanceof HTMLFormElement) {
      e.target.reset();
    }
  };

  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "easeIn",

        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className=""
      id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="container px-5 pt-10 sm:pt-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-4 justify-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font ">
              Contact Me
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full text-black bg-gray-100 dark:bg-white font-medium rounded border border-gray-300 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full text-black bg-gray-100 dark:bg-white font-medium rounded border border-gray-300 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full text-black bg-gray-100 dark:bg-white font-medium rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full mb-10">
                <button className="flex mx-auto  bg-black text-white dark:text-black dark:bg-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:hover:bg-gray-200 dark:focus:ring-white py-2 px-8 rounded text-lg font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
