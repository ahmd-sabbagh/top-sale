import { fav_icon } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AddFavDesktop = () => {
  const t = useTranslations();
  return (
    <button
      type="button"
      className="md:flex items-center gap-2 desc-color text-sm pe-4 border-e border-color hidden"
    >
      <span>
        <Image src={fav_icon} alt="fav-icon" loading="lazy" />
      </span>
      <span>{t("Add to favorites")}</span>
    </button>
  );
};

export default AddFavDesktop;
