"use client";

import { CheckBox, SearchInput } from "@/components";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
interface Props {
  ref?: React.RefObject<HTMLDivElement | null>;
}

const PanicSection = ({ ref }: Props) => {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState("");
  const [itemSelect, setItem] = useState("1");
  const arr = [
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
  ];
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  return (
    <div
      ref={ref}
      className="bg-white w-full rounded-lg overflow-hidden absolute top-[calc(100%+10px)] start-0 z-40 bx-shadow"
    >
      {/* Head */}
      <div className="flex items-center justify-between p-4 border-b border-color">
        <span className="title-color">{t("Select the subsection")}</span>
        <span className="text-main">
          <IoIosArrowUp />
        </span>
      </div>
      {/* Body */}
      <div className="p-4">
        {/* search */}
        <SearchInput
          placeholder={t("Find the section")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={() => console.log("Searching for:", searchTerm)}
   
        />
        {/* body */}
        <div className="mt-4 h-[300px] overflow-y-scroll h-scroll">
          {arr.map((item, idx) => (
            <div className="py-4 pe-4 border-b border-color" key={idx}>
              <CheckBox
                lang={itemSelect}
                title={item}
                item={String(idx)}
                onChange={onChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanicSection;
