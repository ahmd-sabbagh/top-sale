"use client"
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Menu from "../menu/Menu";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { sortData } from "@/utils/data";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const SortBy = () => {
  const t = useTranslations();
  const [sort, setSort] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(false);
  });
  return (
    <div className="relative flex items-end gap-1 md:gap-3">
      <div className="text-sm flex items-center gap-1">
        <p className="text-gray min-w-fit">{t("Sort by")}</p>
        <span className="title-color line-clamp-1">{sort ? sort : t("chose")}</span>
      </div>
      <button
        type="button"
        className="flex-c desc-color text-sm"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <IoIosArrowDown />
      </button>
      {openMenu && (
        <Menu ref={ref} style="min-w-[250px]">
          {sortData.map((item, idx) => (
            <button
              className="flex w-full item-center justify-between p-4 border-b last:border-b-0 border-color ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
              type="button"
              key={idx}
              onClick={() => setSort(item)}
            >
              <span className="title-color text-sm">{item}</span>
              <span className="text-main text-xl ltr:rotate-180">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </button>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default SortBy;
