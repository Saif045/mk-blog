"use client";
import Experience from "@/components/Experience";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className=" min-h-screen h-full w-full flex flex-col justify-center items-center">
        <div className="w-full  h-full  flex flex-wrap  gap-4 xl:gap-10 justify-center items-center">
          <motion.div
            initial={{ opacity: 0.7, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{
              ease: [0.68, -0.6, 0.32, 1.6],
              duration: 1,
              delay: 1,
            }}
            className="max-w-[600px] md:max-w-[400px] p-4  flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">About Me</h1>
            <p className="text-neutral-800 dark:text-neutral-400">
              Hello! I'm Mohamed Khaled, a computer engineering student deeply
              passionate about the crossroads of hardware and software
              development. My heart beats for embedded systems and electronic
              design, where innovation takes center stage.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [1.1, 1] }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              ease: [0.68, -0.6, 0.32, 1.6],
              duration: 1,
              delay: 1,
            }}
            src="/mk-photo.jpg"
            width={200}
            height={200}
            alt="Mohamed Khaled"
            className="rounded-lg w-[190px] xl:w-[260px] h-[190px] xl:h-[260px] justify-self-center"
          />
          <motion.div
            initial={{ opacity: 0.7, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{
              ease: [0.68, -0.6, 0.32, 1.6],
              duration: 1,
              delay: 1,
            }}
            className="max-w-[600px] lg:max-w-[400px] p-4  flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">More Than Tech</h1>
            <p className="text-neutral-800 dark:text-neutral-400">
              Beyond my love for technology, you might catch me on a hiking
              trail, engrossed in a novel, or on the hunt for the perfect cup of
              coffee. I believe that diverse interests fuel creativity,
              enhancing my problem-solving skills as an engineer.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.7, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 1, delay: 1 }}
          className="w-full  mt-6 pb-20 flex justify-center">
          <div className=" max-w-[600px] p-4 flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Passion Meets Purpose</h1>
            <p className="text-neutral-800 dark:text-neutral-400">
              As I pursue my computer engineering studies, I find myself drawn
              to the world of Embedded Systems and electronic design. From
              crafting code to building circuits, I'm in my element when I'm
              exploring the synergy between hardware and software. I'm driven by
              a thirst for knowledge and a commitment to pushing boundaries.
            </p>
          </div>
        </motion.div>
      </section>
      <Experience />

      <div className="w-full  p-4  mb-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 1 }}
          className="w-full max-w-[400px]  p-4  flex flex-col gap-4">
          <h1 className="text-4xl font-semibold ">Let's Connect</h1>
          <p className="text-neutral-800 dark:text-neutral-400 ">
            I'm always excited to connect with fellow enthusiasts, potential
            collaborators, and industry professionals. Whether it's a discussion
            about cutting-edge tech trends or brainstorming innovative ideas,
            I'm here to embark on this exciting journey together.{" "}
            <button className="w-full h-full mt-4 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white  px-4 py-2 transition duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white">
              <Link href={"/contact"}>Contact Me</Link>
            </button>
          </p>
        </motion.div>
        <motion.div
          className="hidden sm:flex"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 1 }}>
          <Image
            src="/mk-photo.jpg"
            width={200}
            height={200}
            alt="Mohamed Khaled"
            className="rounded-full justify-self-center "
          />
        </motion.div>
      </div>
    </>
  );
}
