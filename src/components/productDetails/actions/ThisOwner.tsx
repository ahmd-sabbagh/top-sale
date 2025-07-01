import { edit } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosClose } from "react-icons/io";

const ThisOwner = () => {
  const t = useTranslations();
  return (
    <div className="mt-6 flex gap-4 md:gap-6">
      <Link
        href={"/add-ads"}
        type="button"
        className="flex items-center justify-center gap-2 rounded bg-main w-full md:w-[186px] h-[56px]"
      >
        <span>
          <Image src={edit} alt="edit-icon" loading="lazy" />
        </span>
        <span className="text-white font-medium">{t("edit")}</span>
      </Link>
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded bg-[#CA41461A] text-red  w-full md:w-[186px] h-[56px] border border-main-color"
      >
        <span className="text-2xl">
          <IoIosClose />
        </span>
        <span className="font-medium">{t("delete")}</span>
      </button>
    </div>
  );
};

export default ThisOwner;
