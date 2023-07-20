"use client";
import { useState } from "react";
import Modal from "./Modal";

const CommentModal = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className=" w-full flex  justify-end items-center mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className=" font-semibold px-4 py-2 rounded-md bg-black text-white dark:text-black dark:bg-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:hover:bg-gray-200 dark:focus:ring-white">
          Leave a reply
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {children}
      </Modal>
    </>
  );
};
export default CommentModal;
