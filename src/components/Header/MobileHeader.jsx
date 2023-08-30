"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import { navData, navsocials } from "../../assets/data";
import { useWindowSize } from "usehooks-ts";
import Link from "next/link";
import Switcher from "@/utils/Switcher";
import ClientOnly from "@/utils/ClientOnly";
import SearchPopup from "../SearchPopup";

export const MobileHeader = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const { width, height } = useWindowSize();
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && open) {
        cycleOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && open) {
        cycleOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open, cycleOpen]);

  return (
    <div className=" absolute h-14 z-[80] sm:hidden w-full flex justify-between items-center  ">
      <Link aria-label="link to home page" href="/">
        <div className="  text-3xl ml-4  logo  ">Home</div>
      </Link>

      <ClientOnly>
        <main className="z-[100]  ">
          <AnimatePresence>
            {open && (
              <motion.aside
                className="z-[100] h-full min-h-screen  rounded-l-3xl fixed flex flex-col justify-center items-center right-0 top-0   text-white  dark:text-black bg-black dark:bg-white "
                ref={menuRef}
                initial={{ width: 0 }}
                animate={{
                  width:
                    Number(width) < 280
                      ? Number(width)
                      : Number(width) > 360
                      ? Number(width) / 2
                      : Number(width) / 1.4,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}>
                <motion.button
                  variants={itemVariants}
                  className="z-[100] absolute  right-0 top-0"
                  onClick={cycleOpen}>
                  <FontAwesomeIcon
                    aria-label="menu close"
                    icon={faClose}
                    className="mr-3 mt-5  "
                    size="2x"
                  />
                </motion.button>

                <motion.div
                  className="flex flex-col text-center justify-between font-bold text-xl w-full "
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}>
                  {navData?.map((element, i) => (
                    <motion.div
                      className="my-2"
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      onClick={cycleOpen}
                      key={i}>
                      <Link
                        aria-label={`link to ` + element.name}
                        href={element.to}>
                        {element.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-row justify-center gap-1 my-2">
                    <Switcher />
                  </motion.div>

                  <motion.div variants={itemVariants} className="my-2">
                    <SearchPopup label="Search" />
                  </motion.div>

                  <div className="flex items-center justify-center">
                    {navsocials.map((element, i) => (
                      <motion.div
                        className="my-2"
                        whileHover={{ scale: 1.1 }}
                        variants={itemVariants}
                        onClick={cycleOpen}
                        key={i}>
                        <a
                          aria-label={element.name + `social icon link`}
                          href={element.to}
                          target="_blank">
                          <FontAwesomeIcon
                            icon={element.icon}
                            className="mr-3"
                          />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </main>
      </ClientOnly>

      <button
        aria-label="menu open"
        className="z-[90] sm:hidden mr-4 "
        onClick={cycleOpen}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
    </div>
  );
};
