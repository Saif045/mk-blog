"use client";
import { navData } from "../../assets/data";
import Link from "next/link";
import Switcher from "@/utils/Switcher";
import ClientOnly from "@/utils/ClientOnly";
import SearchPopup from "../SearchPopup";
import { motion } from "framer-motion";
import { useState } from "react";

export const DesktopHeader = () => {
  let [activeTab, setActiveTab] = useState(navData[0].name);

  return (
    <div className="  hidden sm:flex justify-between px-4 md:px-10 xl:px-20  w-full fixed top-0 left-0 h-14  items-center z-[50] text-black  dark:text-white bg-white dark:bg-black">
      <div className="flex  gap-2">
        {navData.map((element, i) => (
          <Link
            aria-label={`link to ` + element.name}
            href={element.to}
            key={i}
            onClick={() => setActiveTab(element.name)}
            className={`${
              activeTab === element.name
                ? ""
                : " hover:text-black/60 dark:hover:text-white/60"
            } relative  px-3 py-1.5 font-black dark:font-semibold text-[16px] outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}>
            {activeTab === element.name && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 border-white mix-blend-difference"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {element.name}
          </Link>
        ))}
      </div>
      <div className="flex  gap-3  items-center">
        <ClientOnly>
          <div>
            <Switcher hideText />
          </div>
        </ClientOnly>
        <div>
          <SearchPopup />
        </div>
      </div>
    </div>
  );
};
