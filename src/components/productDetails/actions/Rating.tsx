import { star_rate } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Props {
  rateCount: string;
  rateRange: string;
}

const Rating = ({ rateCount, rateRange }: Props) => {
  const t = useTranslations();
  const renderStars = (avg: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Image
        key={index}
        src={star_rate}
        alt="star-icon"
        priority
        className={`${index < avg ? "opacity-100" : "opacity-30"} w-[13px]`}
      />
    ));
  };
  return (
    <div className="flex items-center gap-2 pe-4 border-e border-color">
      <div className="flex items-center gap-[2px]">
        {renderStars(Number(rateCount))}
      </div>
      <p className="text-sm desc-color">{`(${rateRange}) ${t("Reviews")}`}</p>
    </div>
  );
};

export default Rating;
