"use client";
import React, { useState } from "react";
import FilterSection from "./FilterSection";
import { filterData } from "@/utils/data";
import PriceRange from "./PriceRange";
import { IoClose } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/rtk/hooks";
import { toggle } from "@/rtk/slices/filterStatusSlice";

const Filter = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const [categorie, setCategorie] = useState("الكل");
  const [type, setType] = useState("الكل");
  const [color, setColor] = useState("الكل");
  const [rating, setRating] = useState("الكل");

  return (
    <section className="fixed top-0 start-0 w-full lg:relative bg-[#000000B2] lg:bg-transparent h-screen lg:h-fit overflow-x-hidden overflow-y-scroll h-scroll lg:overflow-visible z-[2000] lg:z-0">
      <div className="p-4 lg:rounded border border-color bg-white w-[80%] lg:w-full">
        <div className="lg:hidden pb-4 mb-4 border-b border-color relative">
          <p className="font-medium title-color">{t("Filter products")}</p>
          <button
            type="button"
            className="w-[36px] h-[36px] flex-c text-white bg-[#F55157] absolute top-0 end-[-53px] rtl:rounded-bl-[20px] rtl:rounded-tl-[20px] ltr:rounded-tr-[20px] ltr:rounded-br-[20px]"
          onClick={() => dispatch(toggle())}
          >
            <IoClose />
          </button>
        </div>
        <FilterSection
          state={categorie}
          setState={setCategorie}
          radiodoData={filterData[0]}
        />
        <FilterSection
          state={type}
          setState={setType}
          radiodoData={filterData[1]}
        />
        <FilterSection
          state={color}
          setState={setColor}
          radiodoData={filterData[2]}
        />
        <PriceRange />
        <FilterSection
          state={rating}
          setState={setRating}
          radiodoData={filterData[3]}
        />
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="rounded bg-main py-[10px] text-white w-full block"
          >
            {t("confirm")}
          </button>
          <button
            type="button"
            className="border border-[#333333] rounded py-[10px] min-w-[42px] flex-c block text-gray"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
