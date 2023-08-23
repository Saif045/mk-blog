"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimateText = ({ text }: { text: string }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.019,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="h-full w-[90%] flex gap-1 flex-wrap px-4  max-w-[400px] text-white">
      {" "}
      {text.split(" ").map((a, i) => (
        <div key={i}>
          {a === " "
            ? "\u00A0"
            : a.split("").map((char, b) => (
                <motion.span variants={item} key={b}>
                  <span>{char}</span>
                </motion.span>
              ))}
        </div>
      ))}
    </motion.div>
  );
};

export default AnimateText;
