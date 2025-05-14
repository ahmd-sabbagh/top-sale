import { share } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ShareAds = () => {
  const t = useTranslations();
  return (
    <button
      type="button"
      className="flex items-center gap-2 desc-color text-sm"
    >
      <span>
        <Image src={share} alt="fav-icon" loading="lazy" />
      </span>
      <span>{t("Share an ad")}</span>
    </button>
  );
};

export default ShareAds;
