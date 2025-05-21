import { add_ad } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddAdsBtn = () => {
  const t = useTranslations();
  return (
    <section className="sticky bottom-[100px] z-50 w-fit px-[15px] md:hidden">
      <Link
        href={"/add-ads"}
        className=" bg-main rounded-[6px] px-[3px] py-[6px] flex flex-col justify-center items-center "
      >
        <div className="relative w-6 h-6">
          <Image
            src={add_ad}
            alt="Image Icon"
            fill
            className="object-contain"
            sizes="24px"
          />
        </div>
        <p className="font-medium text-sm text-center text-white">
          {t("To advertise")}
        </p>
      </Link>
    </section>
  );
};

export default AddAdsBtn;
