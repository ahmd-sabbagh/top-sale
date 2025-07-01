import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";
import { RiSnapchatFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

const FollowUs = () => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="title-color text-lg font-medium">{t("Follow us on")}</h3>
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        <Link href={""} className="flex-c rounded-full h-8 w-8 border border-[#EEEEEE] text-[#A5A5A5] hover:text-[#B02770] hover:border-[#B02770] transition">
          <TiSocialFacebook />
        </Link>
        <Link href={""} className="flex-c rounded-full h-8 w-8 border border-[#EEEEEE] text-[#A5A5A5] hover:text-[#B02770] hover:border-[#B02770] transition">
          <FaXTwitter />
        </Link>
        <Link href={""} className="flex-c rounded-full h-8 w-8 border border-[#EEEEEE] text-[#A5A5A5] hover:text-[#B02770] hover:border-[#B02770] transition">
          <PiInstagramLogo />
        </Link>
        <Link href={""} className="flex-c rounded-full h-8 w-8 border border-[#EEEEEE] text-[#A5A5A5] hover:text-[#B02770] hover:border-[#B02770] transition">
          <RiSnapchatFill />
        </Link>
      </div>
    </div>
  );
};

export default FollowUs;
