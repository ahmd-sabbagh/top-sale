"use client";
import { fav_icon, fav_icon_color } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  fav: boolean;
}

const FavoriteButton = ({ fav }: Props) => {
  const [status, setStatus] = useState(fav);
  const icon = status ? fav_icon_color : fav_icon;
  return (
    <button
      type="button"
      className={`absolute top-[14px] end-[14px] w-[35px] h-[35px] rounded-full flex-c z-[1] ${
        status ? "bg-red" : "bg-[#F8F8F8] border border-color"
      }`}
      onClick={() => setStatus(!status)}
    >
      <Image src={icon} alt="heart-icon" loading="lazy" />
    </button>
  );
};

export default FavoriteButton;
