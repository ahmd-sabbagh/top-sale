"use client";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { Category } from "@/utils/dtos";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
interface Props {
  name: string;
  data: Category[];
}

const AllDepartmentsSection = ({ name, data }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(false);
  });
  return (
    <button
      className="nav-section relative flex items-center gap-[6px] text-white cursor-pointer py-[11px] min-w-fit"
    >
      <p>{name}</p>
      <div className={`arrow transition ${openMenu ? "rotate-180" : ""}`}>
        <MdKeyboardArrowDown />
      </div>
      {/* Menu */}
      <div className="p-[10px] menuCont absolute z-[5000]">
        <div
          className={`section-menu w-[300px] max-h-[300px] overflow-y-scroll h-scroll   ${
            openMenu ? "" : "hidden"
          }`}
          ref={ref}
        >
          {data.map((item) => (
            <Link
              href={`/all-ads?category=${item._id}`}
              key={item._id}
              className="w-full flex item-center justify-between p-4 border-b border-color ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
            >
              <span className="title-color">{item.title.ar}</span>
              <span className="text-main text-xl ltr:rotate-180">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </button>
  );
};

export default AllDepartmentsSection;
