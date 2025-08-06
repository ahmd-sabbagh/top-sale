import { useClickOutside } from "@/hooks/useOutsideClick";
import { Comment } from "@/utils/dtos";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { useAppDispatch } from "@/rtk/hooks";
import { updateComment } from "@/rtk/features/getRecentComments";
import { SnipperButton } from "@/components";

interface Props {
  setState: (value: boolean) => void;
  comment: Comment;
}

const EditComment = ({ setState, comment }: Props) => {
  const [commentEdit, setCommentEdit] = useState<string>(comment.text);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const handelClickOut = () => {
    setState(false);
  };
  const ref = useClickOutside<HTMLFormElement>(handelClickOut);

  const onsubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (commentEdit === comment.text)
      return toast.warning("plaese add somthing");
    setLoading(true);
    try {
      const response = await axios.put(`/api/comments/${comment._id}`, {
        text: commentEdit,
      });
      const res = response.data;
      if (!res.success) {
        toast.error(res.message || "فشل في إرسال التعليق");
        return;
      }
      dispatch(updateComment(res?.data?.comment));
      setState(false);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="fixed h-screen w-full top-0 start-0 bg-[#0000008c] z-20 flex-c"
    >
      <form onSubmit={onsubmit} ref={ref} className="w-full md:w-[400px] px-4">
        <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 30, 0, 20, 0, 10, 0] }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          value={commentEdit || ""}
          onChange={(e) => setCommentEdit(e.target.value)}
          className="bg-white outline-0 px-3 py-2 rounded-xl w-full h-[200px] text-xl"
        ></motion.textarea>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: "easeInOut",
          }}
          type="submit"
          className="flex-c w-full h-[50px] bg-main rounded-xl text-white font-medium text-sm mt-2"
        >
          {loading ? <SnipperButton /> : t("update")}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default EditComment;
