import Modal from "@/components/modal/Modal";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { useAppDispatch } from "@/rtk/hooks";
import { Comment } from "@/utils/dtos";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { deleteComment } from "@/rtk/features/getRecentComments";
interface Props {
  setState: (value: boolean) => void;
  comment: Comment;
}

const DeleteComment = ({ setState, comment }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const handelClickOut = () => {
    setState(false);
  };
  const ref = useClickOutside<HTMLFormElement>(handelClickOut);
  const onsubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/comments/${comment._id}`);
      const res = response.data;
      if (!res.success) {
        toast.error(res.message || "فشل في إرسال التعليق");
        return;
      }
      dispatch(deleteComment(comment._id));
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
      className="fixed h-screen w-full top-0 start-0 bg-[#0000008c] z-20 flex-c px-5"
    >
      <form
        onSubmit={onsubmit}
        ref={ref}
        className="w-full md:w-[400px] p-6 rounded-xl bg-white"
      >
        <p className="md:text-xl text-center">
          {t("you want delete your comment")}
        </p>
        <div className="flex items-center gap-4 mt-6">
          <button
            type="button"
            className="border border-main-color rounded py-2 text-main grow"
            onClick={() => setState(false)}
          >
            {t("cancel")}
          </button>
          <button
            type="submit"
            className="bg-main py-2 text-white rounded grow"
          >
            {t("confirmm")}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default DeleteComment;
