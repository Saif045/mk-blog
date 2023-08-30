"use client";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const HomeHero = () => {
  return (
    <div
      className="mt-0 w-full h-full bg-cover bg-right bg-fixed min-h-[400px] flex items-center"
      style={{
        backgroundImage: "url(/hero.webp)",
      }}>
      <div className="flex flex-col w-full max-w-[600px] h-full p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.68, -0.6, 0.32, 1.6],
            duration: 0.7,
            delay: 1,
          }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8">
          Hello, I&apos;m Mohamed Khaled
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.68, -0.6, 0.32, 1.6],
            duration: 0.7,
            delay: 1.1,
          }}
          className="text-lg md:text-xl text-neutral-200 mb-4 md:mb-6">
          Exploring the Fusion of Hardware and Software
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.68, -0.6, 0.32, 1.6],
            duration: 0.7,
            delay: 1.2,
          }}
          className="w-[90%] text-sm text-neutral-400 mb-6 md:mb-8">
          I&apos;m driven by innovation and the desire to create meaningful
          solutions, I craft solutions that matter.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, x: -10, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.2, delay: 1.6 }}
          className="w-[140px] h-full bg-black text-white border border-white  px-4 py-2 transition duration-300 hover:bg-neutral-800 hover:text-white">
          <Link href="/contact">Let&apos;s Connect</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default HomeHero;
