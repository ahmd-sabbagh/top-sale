import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useClickOutside } from "@/hooks/useOutsideClick";
import EditComment from "./EditComment";
import { Comment } from "@/utils/dtos";
import DeleteComment from "./DeleteComment";

interface Props {
  comment: Comment;
}

const CommentOptions = ({ comment }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [editComment, setEditComment] = useState<boolean>(false);
  const [deleteComment, setDeleteComment] = useState<boolean>(false);
  const handleClickOutside = () => {
    setOpen(false);
  };

  const ref = useClickOutside<HTMLDivElement>(handleClickOutside);
  return (
    <>
      {deleteComment && (
        <DeleteComment comment={comment} setState={setDeleteComment} />
      )}
      {editComment && (
        <EditComment setState={setEditComment} comment={comment} />
      )}
      <div className="flex justify-end relative min-w-fit" ref={ref}>
        <button
          type="button"
          className={cn("relative z-[2] p-1", open && "text-red-800")}
          onClick={() => setOpen(!open)}
        >
          {!open ? <HiDotsHorizontal /> : <IoMdClose />}
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{
              opacity: 1,
              scale: [1, 1.5, 1, 1.2, 1],
            }}
            transition={{
              duration: 0.5,

              ease: "easeInOut",
            }}
            className="w-[100px] h-[100px] absolute bottom-[-10px] end-[-20px] rounded-full bg-[#e2e2e2]"
          >
            <div className="relative h-full">
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.5, 1, 1.2, 1],
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  scale: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                  opacity: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                type="button"
                className="text-green-900 block p-[2px] rounded border border-green-800 text-sm absolute top-[10px] start-[45px]"
                onClick={() => setEditComment(true)}
              >
                <FiEdit />
              </motion.button>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.5, 1, 1.2, 1],
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  scale: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                  opacity: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                type="button"
                className="text-red-900 block p-[2px] rounded border border-red-800 text-sm absolute bottom-[45px] start-[10px]"
                onClick={() => setDeleteComment(true)}
              >
                <RiDeleteBin6Line />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default CommentOptions;
