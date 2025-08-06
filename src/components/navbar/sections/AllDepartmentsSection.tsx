"use client";
import { useLocalizedField } from "@/hooks/useLocalizedField";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { Category } from "@/utils/dtos";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import SectionLink from "./SectionLink";
interface Props {
  name: {
    ar: string;
    en: string;
  };
  data: Category[];
}

const AllDepartmentsSection = ({ name, data }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(false);
  });
  const title = useLocalizedField(name);
  return (
    <button className="nav-section relative flex items-center gap-[6px] text-white cursor-pointer py-[11px] min-w-fit">
      <p>{title}</p>
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
            <SectionLink {...item} key={item._id} />
          ))}
        </div>
      </div>
    </button>
  );
};

export default AllDepartmentsSection;
