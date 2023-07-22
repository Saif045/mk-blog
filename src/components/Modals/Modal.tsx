"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  children: React.ReactNode;
  topLeft?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  topLeft,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClose(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            className={` z-[1111] fixed inset-0 flex overflow-y-auto  ${
              topLeft
                ? " mt-4 sm:mt-10 items-center justify-center sm:items-start sm:justify-end bg-opacity-5"
                : "items-center justify-center bg-opacity-25"
            }  p4 sm:p-10    bg-black `}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`fixed bg-black  inset-0
                `}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`text-black  dark:text-white bg-white dark:bg-black   p-4 sm:p-10 rounded-lg  z-[150] relative h-auto  w-[90%]  max-w-[500px] `}
              ref={modalRef}>
              <Close onClose={() => onClose(false)} />
              {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement<any>, {
                  onClose,
                })
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;

const Close = ({ onClose }: { onClose: (value: boolean) => void }) => {
  return (
    <button
      type="button"
      className="
     absolute top-1 right-1
       rounded-md 
      
       focus:outline-none 
       focus:ring-2 
       focus:ring-indigo-500 
       focus:ring-offset-2
     "
      onClick={() => onClose(false)}>
      <span className="sr-only">Close</span>
      <IoClose className="h-10 w-10" aria-hidden="true" />
    </button>
  );
};
