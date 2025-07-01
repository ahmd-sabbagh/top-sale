import { email } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Subscrip = () => {
  const t = useTranslations();
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full flex-c bg-[#B027701A]">
        <Image src={email} alt="email-icon" priority />
      </div>
      <div>
        <h4 className="text-xl title-color">
          {t("Subscribe to the newsletter")}
        </h4>
        <p className="desc-color text-sm">
          {t("Subscribe to the newsletter desc")}
        </p>
      </div>
    </div>
  );
};

export default Subscrip;
