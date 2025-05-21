"use client";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

type SectionType = {
  ad_type: string;
  types: {
    name: string;
  }[];
};

interface Props {
  name: string;
  sections: SectionType[];
}

const AllDepartments = ({ name, sections }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [submenu, setSubmenu] = useState<{ name: string }[]>([]);
  const [openMenu, setOpenMenu] = useState(false);
  const onMouseEnterHandlr = (item: SectionType) => {
    setIsHovered(true);
    setSubmenu(item.types);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
    setSubmenu([]);
  };

  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(false);
  });
  return (
    <button
      className="nav-section relative flex items-center gap-[6px] text-white cursor-pointer py-[11px] min-w-fit"
      onClick={() => {
        setOpenMenu(!openMenu);
      }}
    >
      <p>{name}</p>
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
            {sections.map((item, idx) => (
              <div
                key={idx}
                className="department w-full flex item-center justify-between p-4 border-b border-color ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
                onMouseEnter={() => onMouseEnterHandlr(item)}
              >
                <span className="title-color">{item.ad_type}</span>
                <span className="text-main text-xl ltr:rotate-180">
                  <MdOutlineKeyboardArrowLeft />
                </span>
              </div>
            ))}
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
            {submenu.map((item, idx) => (
              <Link
                href={""}
                key={idx}
                className="w-full flex item-center justify-between p-4 border-b border-color ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
              >
                <span className="title-color">{item.name}</span>
                <span className="text-main text-xl ltr:rotate-180">
                  <MdOutlineKeyboardArrowLeft />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default AllDepartments;
