"use client";

import { CarAd } from "@/utils/dtos";
import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";
import OwnerActions from "./ownerActions/OwnerActions";
import { useAuth } from "@/app/context/AuthContext";
interface Props {
  ad: CarAd;
  status?: boolean;
}

const AdsCard = ({ ad, status = false }: Props) => {
  const { token } = useAuth();
  return (
    <div className="relative transition hover:scale-105">
      <div
        className={`flex ${
          status ? "flex-row items-center" : "flex-col"
        } rounded overflow-hidden border border-color bg-white`}
      >
        {/* Image */}
        <Link
          href={`/all-ads/${ad._id}`}
          className={`relative ${
            status
              ? "min-w-[118px] h-[157px] md:min-w-[240px] md:h-[136px]"
              : "h-[212px] md:h-[228px]"
          }`}
        >
          <Image
            src={ad.photos[0].thumb600}
            alt="ads-image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
        {/* Body */}
        <div className="p-2 md:p-4 mt-1 md:mt-0 flex flex-col md:flex-row md:items-end md:justify-between gap-6 grow">
          <div>
            {/* <p className="text-main text-sm">{type}</p> */}
            <h4 className="title-color font-medium mt-1">{ad.title}</h4>
            <div className="flex items-center gap-1 md:gap-[6px] mt-1">
              <strong className="text-red font-medium text-lg">
                {ad.price + " " + "$"}
              </strong>
              {/* {oldPrice && <del className="text-gray text-sm">{oldPrice}</del>} */}
            </div>
          </div>
          {/* {ad.user && <OwnerActions />} */}
        </div>
      </div>
      {token && <FavoriteButton fav={ad.isFavourite} />}
    </div>
  );
};

export default AdsCard;
