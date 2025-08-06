"use client";
import SnipperButton from "@/components/sniperBtn/SniperBtn";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/rtk/hooks";
import { Category, MainCategory } from "@/utils/dtos";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import DepartmentItem from "./DepartmentItem";
import SectionLink from "./SectionLink";

const AllDepartments = () => {
  const { data, loading, error } = useAppSelector((state) => state.adsLinks);
  const [isHovered, setIsHovered] = useState(false);
  const [submenu, setSubmenu] = useState<Category[]>([]);
  const [openMenu, setOpenMenu] = useState(false);
  const t = useTranslations();

  const onMouseEnterHandlr = (item: MainCategory) => {
    setIsHovered(true);
    setSubmenu(item.categories);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    setSubmenu([]);
  };

  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(false);
  });

  return (
    <div className="nav-section relative flex items-center gap-[6px] text-white cursor-pointer py-[11px] min-w-fit">
      <p>{t("all_departments")}</p>
      <div className={`arrow transition ${openMenu ? "rotate-180" : ""}`}>
        <MdKeyboardArrowDown />
      </div>
      {/* Menu */}
      <div
        className="p-[10px] menuCont absolute z-[5000]"
        onMouseLeave={onMouseLeave}
      >
        <div className="relative">
          <div
            className={`section-menu de w-[300px] max-h-[300px] overflow-y-scroll h-scroll   ${
              openMenu ? "" : "hidden"
            }`}
            ref={ref}
          >
            {loading ? (
              <div className="flex-c h-[200px]">
                <SnipperButton className="!text-black" />
              </div>
            ) : (
              data.map((item) => {
                return (
                  <DepartmentItem
                    item={item}
                    onMouseEnter={onMouseEnterHandlr}
                    title={item.title}
                    key={item._id}
                  />
                );
              })
            )}
          </div>
        </div>
        {/* Submenu */}
        {isHovered && (
          <div
            className={cn(
              "submenu absolute w-[300px] min-h-[300px] max-h-[300px] overflow-y-scroll h-scroll bg-red-200 top-[10px] start-[310px]"
            )}
            style={{ minHeight: "300px" }}
            onMouseLeave={onMouseLeave}
          >
            {submenu.map((item) => (
              <SectionLink {...item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDepartments;
