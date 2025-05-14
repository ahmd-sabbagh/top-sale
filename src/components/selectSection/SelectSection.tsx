"use client";
import { searchIcon } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import SearchInput from "../searchInput/SearchInput";
import { adsDataTitle } from "@/utils/data";

const SelectSection = () => {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-white rounded-xl p-4 md:py-8  md:px-[30px]">
      <SearchInput
        placeholder={t("Find the section")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSearch={() => console.log("Searching for:", searchTerm)}

      />
      <div className="mt-4 flex flex-col gap-8 h-[600px] overflow-y-scroll h-scroll max-w-[878px]">
        {adsDataTitle.slice(0, 1).map((item, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold title-color">{item.title}</h3>
            <div className="mt-3 grid grid-cols-2 md:flex items-center flex-wrap gap-5">
              {item.departs.slice(0, 4).map((depart, idx) => (
                <button
                  type="button"
                  key={idx}
                  className="AdsLinksLink md:min-w-[187px] relative px-3"
                >
                  <div className="h-[71px] w-[104px] relative z-[2]">
                    <Image
                      src={depart.image}
                      alt="product-image"
                      fill
                      sizes="(max-width: 768px) 80px, 104px"
                      className="object-contain"
                    />
                  </div>
                  <h4 className="md:text-lg font-medium title-color pb-2 line-clamp-1 relative z-[2]">
                    {depart.name}
                  </h4>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectSection;
