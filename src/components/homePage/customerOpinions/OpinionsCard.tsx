import { fasla, star_rate } from "@/assets";
import { OpinionsCards } from "@/utils/dtos";
import Image from "next/image";
import React from "react";

const OpinionsCard = ({
  starLength,
  description,
  name,
  image,
  jop,
}: OpinionsCards) => {
  const renderStars = (avg: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Image
        key={index}
        src={star_rate}
        alt="star-icon"
        priority
        className={`${
          index < avg ? "opacity-100" : "opacity-30"
        } w-[13px] md:w-[16px]`}
      />
    ));
  };
  return (
    <div className="p-6 border border-color rounded">
      <div className="flex items-center justify-between">
        <div className="stars flex items-center gap-1 mt-[2px] md:mt-1">
          {renderStars(starLength)}
        </div>
        <div>
          <Image src={fasla} alt="fasla-icon" priority />
        </div>
      </div>
      <p className="desc-color mt-4 line-clamp-4 h-[100px]">{description}</p>
      <div className="flex items-center gap-2 mt-4">
        <div className="h-12 w-12 rounded-full overflow-hidden relative">
          <Image
            src={image}
            alt="profile-image"
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="title-color font-medium text-lg">{name}</h4>
          <p className="desc-color text-sm">{jop}</p>
        </div>
      </div>
    </div>
  );
};

export default OpinionsCard;
