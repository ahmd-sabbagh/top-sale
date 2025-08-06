import { useStarRating } from "@/hooks/useStarRating";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";
import axios from "@/lib/axios";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { toast } from "sonner";
import { SnipperButton } from "@/components";
import { addCommentToList } from "@/rtk/features/getRecentComments";

const AddComment = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { data } = useAppSelector((state) => state.adsDetails);

  const { renderStars } = useStarRating();
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!comment) return toast.warning(t("please_write_something"));
    if (!data?.id) return toast.warning("please reloade page");
    setLoading(true);
    try {
      const response = await axios.post(`/api/comments`, {
        ad: data?._id,
        text: comment,
      });
      const res = response.data;
      if (!res.success) {
        toast.error(res.message || "فشل في إرسال التعليق");
        return;
      }
      dispatch(addCommentToList(res?.data?.comment));
      setComment("");
      setLoading(false);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="border border-color rounded p-4 h-fit">
      <div className="p-4 rounded bg-[#F8F8F8B2] text-center">
        <div className="text-xl font-medium title-color">{"4.5 من 5"}</div>
        <div className="flex items-center gap-1 justify-center mt-2">
          {renderStars(4)}
        </div>
        <p className="desc-color text-sm mt-2">{"60 تقييم على المنتج"}</p>
      </div>
      {/* Form */}
      <form onSubmit={onSubmit} className="mt-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="comment" className="font-medium title-color text-sm">
            {t("Add your comment")}
          </label>
          <textarea
            value={comment}
            id="comment"
            rows={4}
            className="rounded border border-color px-4 py-[14px]"
            placeholder={t("Please add your comment")}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="block w-full h-14 rounded text-white bg-main mt-4 font-medium"
        >
          {loading ? <SnipperButton /> : t("Post your comment")}
        </button>
      </form>
    </div>
  );
};

export default AddComment;
