import SortBy from "@/components/sortBy/SortBy";
import { useTranslations } from "next-intl";
import React from "react";
import UserCommentCard from "./UserCommentCard";
import { useAppSelector } from "@/rtk/hooks";

const UserComments = () => {
  const t = useTranslations();
  const { data, loading } = useAppSelector((state) => state.recentComments);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-between p-4 rounded border border-color">
        <p className="font-medium title-color">{t("User Comments")}</p>
        <SortBy />
      </div>
      {/* Comments */}
      {loading ? (
        <div className=" space-y-4 mt-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              className="not-first:pt-4 not-first:mt-4 not-first:border-t border-color animate-pulse"
              key={idx}
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-300"></div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="flex items-center gap-[2px]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="w-3 h-3 bg-gray-300 rounded"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-3 w-12 bg-gray-300 rounded"></div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      ) : data?.comments.length !== 0 ? (
        <>
          <div className="mt-4">
            {data?.comments.map((comment) => (
              <UserCommentCard data={comment} key={comment._id} />
            ))}
          </div>
          {data?.comments && data?.comments.length > 10 && (
            <button
              type="button"
              className="mt-6 h-14 border rounded border-color block w-full title-color font-medium"
            >
              {t("view more")}
            </button>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500 my-6">{t("no_comments")}</p>
      )}
    </div>
  );
};

export default UserComments;
