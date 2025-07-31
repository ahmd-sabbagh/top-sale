"use client";
import { fav_icon, fav_icon_color } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import axios from "@/lib/axios";
import { toast } from "sonner";

interface Props {
  fav: boolean;
  id?: string;
}

const FavoriteButton = ({ fav, id }: Props) => {
  const [status, setStatus] = useState(fav);
  const icon = status ? fav_icon_color : fav_icon;
  const addFav = async () => {
    if (!id) return toast.warning("Missing ID for favorite toggle");
    try {
      const response = await axios.post(`/api/ads/${id}/toggle-favourite`, {});
      const favStatus = response.data?.data?.isFavourite;
      setStatus(favStatus);
    } catch (error) {
      console.error("Favorite toggle error:", error);
    }
  };

  return (
    <button
      type="button"
      className={`absolute top-[14px] end-[14px] w-[35px] h-[35px] rounded-full flex-c z-[1] ${
        status ? "bg-red" : "bg-[#F8F8F8] border border-color"
      }`}
      onClick={() => addFav()}
    >
      <Image src={icon} alt="heart-icon" loading="lazy" />
    </button>
  );
};

export default FavoriteButton;
