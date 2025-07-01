import { empty_ads_icon } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const EmptyFilterAds = () => {
    const t = useTranslations()
  return (
    <div className="flex flex-col items-center py-8">
      <div className="w-[135px]">
        <Image src={empty_ads_icon} alt="empty-icon" loading="lazy" />
      </div>
      <div className="text-center mt-4">
        <p className="font-medium text-xl title-color">{t("There are no ads yet")}</p>
        <p className="text-gray mt-2">{t("Your search did not match any ads")}</p>
      </div>
    </div>
  );
};

export default EmptyFilterAds;
