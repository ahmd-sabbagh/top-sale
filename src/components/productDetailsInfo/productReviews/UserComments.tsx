import SortBy from "@/components/sortBy/SortBy";
import { usersCommentsData } from "@/utils/data";
import { useTranslations } from "next-intl";
import React from "react";
import UserCommentCard from "./UserCommentCard";

const UserComments = () => {
  const t = useTranslations();
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-between p-4 rounded border border-color">
        <p className="font-medium title-color">{t("User Comments")}</p>
        <SortBy />
      </div>
      {/* Comments */}
      <div className="mt-4">
        {usersCommentsData.map((comment, idx) => (
          <UserCommentCard data={comment} key={idx} />
        ))}
      </div>
      <button
        type="button"
        className="mt-6 h-14 border rounded border-color block w-full title-color font-medium"
      >
        {t("view more")}
      </button>
    </div>
  );
};

export default UserComments;
