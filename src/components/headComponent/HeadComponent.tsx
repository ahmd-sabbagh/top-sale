import { HeadCompnent } from "@/utils/dtos";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const HeadComponent = ({ title, description, href }: HeadCompnent) => {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold md:font-medium md:text-2xl title-color">
          {t(title)}
        </h3>
        <p className="desc-color ">{t(description)}</p>
      </div>
      {href && (
        <Link
          href={href}
          className="min-w-fit border border-main-color rounded px-3 md:px-4 py-[8px] md:py-[11px] text-main flex items-center gap-2 transition hover:!bg-[#B02770] hover:!text-white"
        >
          <span className="text-sm mb-1">{t("view all")}</span>
          <span className="ltr:rotate-180">
            <IoIosArrowBack />
          </span>
        </Link>
      )}
    </div>
  );
};

export default HeadComponent;
