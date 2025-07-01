"use client";
import { delete_ad, edit_ad, reload_ad, share_ad } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const OwnerActions = () => {
  const router = useRouter();
  const deleteFunc = () => {};
  const editFunc = () => {
    router.replace("/add-ads");
  };
  const shareFunc = () => {
    const link = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
  };
  const reShareFunc = () => {};
  const buttons = [
    {
      icon: delete_ad,
      func: deleteFunc,
    },
    {
      icon: edit_ad,
      func: editFunc,
    },
    {
      icon: share_ad,
      func: shareFunc,
    },
    {
      icon: reload_ad,
      func: reShareFunc,
    },
  ];
  return (
    <div className="flex flex-row-reverse items-center justify-evenly gap-3 xl:gap-8">
      {buttons.map((btn, idx) => (
        <button
          type="button"
          key={idx}
          className="relative h-[35px] w-[35px] md:w-5 md:h-5 xl:w-[35px] xl:h-[35px]"
          onClick={btn.func}
        >
          <Image
            src={btn.icon}
            alt="Icon"
            fill
            priority
            sizes="(max-width: 768px) 20px, (max-width: 1280px) 20px, 35px"
            className="object-contain"
          />
        </button>
      ))}
    </div>
  );
};

export default OwnerActions;
