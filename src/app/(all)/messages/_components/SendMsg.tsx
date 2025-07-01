import { chat_cam, sent_msg } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SendMsg = () => {
  const t = useTranslations();
  return (
    <div className="px-4 md:p-0">
      <div className="flex items-center gap-3 px-[13px] py-[10px] rounded-[50px] bg-[#F8F8F8] border border-color mt-6">
        <div className="w-6 flex-c">
          <Image src={chat_cam} alt="camera-icon" priority />
        </div>
        <input type="text" placeholder={t("write message")} className="grow" />
        <div className="w-[36px] h-[36px] flex-c bg-main rounded-full">
          <Image src={sent_msg} alt="camera-icon" priority />
        </div>
      </div>
    </div>
  );
};

export default SendMsg;
