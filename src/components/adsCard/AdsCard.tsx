"use client";

import { AdsCardType } from "@/utils/dtos";
import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

const AdsCard = ({
  image,
  name,
  type,
  price,
  oldPrice,
  fav,
  status,
}: AdsCardType) => {
  return (
    <div className="relative transition hover:scale-105">
      <Link
        href={"/all-ads/1"}
        className={`flex ${
          status ? "flex-row items-center" : "flex-col"
        } rounded overflow-hidden border border-color bg-white`}
      >
        {/* Image */}
        <div
          className={`relative ${
            status
              ? "w-[118px] h-[157px] md:w-[240px] md:h-[136px]"
              : "h-[212px] md:h-[228px]"
          }`}
        >
          <Image
            src={image}
            alt="ads-image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
        {/* Body */}
        <div className="p-2 md:p-4 mt-1 md:mt-0">
          <p className="text-main text-sm">{type}</p>
          <h4 className="title-color font-medium mt-1">{name}</h4>
          <div className="flex items-center gap-1 md:gap-[6px] mt-1">
            <strong className="text-red font-medium text-lg">{price}</strong>
            {oldPrice && <del className="text-gray text-sm">{oldPrice}</del>}
          </div>
        </div>
      </Link>
      <FavoriteButton fav={fav} />
    </div>
  );
};

export default AdsCard;
