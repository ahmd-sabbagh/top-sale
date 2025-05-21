"use client";

import { AdsCardType } from "@/utils/dtos";
import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import OwnerActions from "./ownerActions/OwnerActions";

const AdsCard = ({
  image,
  name,
  type,
  price,
  oldPrice,
  fav,
  status,
  owner,
}: AdsCardType) => {
  return (
    <div className="relative transition hover:scale-105">
      <div
        className={`flex ${
          status ? "flex-row items-center" : "flex-col"
        } rounded overflow-hidden border border-color bg-white`}
      >
        {/* Image */}
        <Link
          href={"/all-ads/1"}
          className={`relative ${
            status
              ? "min-w-[118px] h-[157px] md:min-w-[240px] md:h-[136px]"
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
        </Link>
        {/* Body */}
        <div className="p-2 md:p-4 mt-1 md:mt-0 flex flex-col md:flex-row md:items-end md:justify-between gap-6 grow">
          <div>
            <p className="text-main text-sm">{type}</p>
            <h4 className="title-color font-medium mt-1">{name}</h4>
            <div className="flex items-center gap-1 md:gap-[6px] mt-1">
              <strong className="text-red font-medium text-lg">{price}</strong>
              {oldPrice && <del className="text-gray text-sm">{oldPrice}</del>}
            </div>
          </div>
          {owner && <OwnerActions />}
        </div>
      </div>
      {!owner && <FavoriteButton fav={fav} />}
    </div>
  );
};

export default AdsCard;
