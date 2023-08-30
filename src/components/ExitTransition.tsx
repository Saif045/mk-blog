"use client";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ExitTransition() {
  const pathname = usePathname();
  const isPresent = useIsPresent();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div
          key={pathname + "in"}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="slide-in bg-black dark:bg-white"
        />
        <motion.div
          key={pathname + "out"}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="slide-in bg-black dark:bg-white"
        />
      </motion.div>
    </AnimatePresence>
  );
}
