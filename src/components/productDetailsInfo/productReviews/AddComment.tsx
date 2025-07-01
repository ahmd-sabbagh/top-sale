import { useStarRating } from "@/hooks/useStarRating";
import { useTranslations } from "next-intl";
import React, { FormEvent } from "react";

const AddComment = () => {
  const t = useTranslations();
  const { renderStars } = useStarRating();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
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
          <label htmlFor="comment" className="font-medium title-color text-sm">{t("Add your comment")}</label>
          <textarea
            id="comment"
            rows={4}
            className="rounded border border-color px-4 py-[14px]"
            placeholder={t("Please add your comment")}
            
          ></textarea>
        </div>
        <button type="submit" className="block w-full h-14 rounded text-white bg-main mt-4 font-medium">{t("Post your comment")}</button>
      </form>
    </div>
  );
};

export default AddComment;
