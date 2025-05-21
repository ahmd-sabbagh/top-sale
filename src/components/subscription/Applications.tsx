import { appStore } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Applications = () => {
  const t = useTranslations();
  return (
    <div>
      <p className="title-color text-sm font-medium">{t("Mobile applications")}</p>
      <div className="mt-4 flex items-center gap-2">
        <Link href={"https://apps.apple.com/app"}  target="_blank" className="block w-[134px] h-[43px] overflow-hidden">
          <Image src={appStore} alt="appStore-icon" priority />
        </Link>
        <Link href={"https://apps.apple.com/app"}  target="_blank" className="block w-[134px] h-[43px] overflow-hidden">
          <Image src={appStore} alt="appStore-icon" priority />
        </Link>
      </div>
    </div>
  );
};

export default Applications;
