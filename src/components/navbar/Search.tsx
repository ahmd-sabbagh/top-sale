import { searchIcon } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Search = () => {
  const t = useTranslations();
  return (
    <div className="flex gap-1 items-center px-4 py-[14px] md:py-[10px] lg:py-[14px] rounded-[50px] md:rounded border border-[#EEEEEE] bg-[#EFEFEF] md:bg-transparent">
      <div className="grow">
        <input
          type="text"
          className="w-full"
          placeholder={t("Find what you want")}
        />
      </div>
      <div className="w-4">
        <Image src={searchIcon} alt="search-icon" loading="lazy" />
      </div>
    </div>
  );
};

export default Search;
