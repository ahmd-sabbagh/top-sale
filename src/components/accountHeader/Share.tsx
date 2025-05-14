import { share } from "@/assets";
import Image from "next/image";
import React from "react";

const Share = () => {
  return (
    <button
      type="button"
      className="bg-[#F8F8F8] flex-c w-[43px] h-[43px] rounded-full border border-color"
    >
      <Image src={share} alt="share-icon" loading="lazy" />
    </button>
  );
};

export default Share;
