"use client";
import { fav_icon, fav_icon_color } from "@/assets";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

const AddFavDesktop = () => {
  const t = useTranslations();
  const [status, setStatus] = useState(false);
  const icon = status ? fav_icon_color : fav_icon;
  return (
    <button
      type="button"
      className={cn(
        "md:flex items-center gap-2 desc-color text-sm pe-4 border-e border-color hidden"
      )}
      onClick={() => setStatus(!status)}
    >
      <div
        className={cn(
          "min-w-6 min-h-6 flex-c rounded-full",
          status && "bg-red"
        )}
      >
        <span
          className={cn(
            "w-4 h-4 relative flex items-center justify-center"
          )}
        >
          <Image
            src={icon}
            alt="fav-icon"
            fill
            className="object-contain"
            loading="lazy"
            sizes="16px"
          />
        </span>
      </div>
      <span>{t("Add to favorites")}</span>
    </button>
  );
};

export default AddFavDesktop;
