"use client";

import { share } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ShareAds = () => {
  const t = useTranslations();

  const handleFacebookShare = () => {
    const link = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${link}`;

    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleFacebookShare}
      className="flex items-center gap-2 desc-color text-sm"
    >
      <span className="w-4 h-4 relative flex items-center justify-center">
        <Image src={share} alt="share-icon" fill className="object-contain" />
      </span>
      <span>{t("Share an ad")}</span>
    </button>
  );
};

export default ShareAds;
