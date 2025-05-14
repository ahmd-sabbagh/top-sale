import { discount_bg, discount_bg_phone } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discounts = () => {
  const t = useTranslations();
  return (
    <section className="py-10 md:py-[90px] relative min-h-[500px] md:flex items-center justify-center">
      <Image
        src={discount_bg}
        alt="image-ads"
        loading="lazy"
        fill
        className="object-cover z-[-1] hidden md:block ltr:-scale-x-100"
      />
      <Image
        src={discount_bg_phone}
        alt="image-ads"
        loading="lazy"
        fill
        className="object-cover z-[-1] md:hidden"
      />
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div className="text-white">
            <h2 className="font-bold text-5xl text-center md:text-start">
              {t("Discounts")}
            </h2>
            <p className="mt-4 max-w-[463px] text-center md:text-start text-sm md:text-base">
              {t("Discounts desc")}
            </p>
            <Link
              href={""}
              className="mt-6 md:mt-8 bg-main rounded py-4 flex-c w-[150px] md:w-[200px] mx-auto md:mx-0 transition hover:scale-110"
            >
              {t("Find out more")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
