"use client";
import React from "react";
import ChatHead from "./ChatHead";
import Msg from "./Msg";
import SendMsg from "./SendMsg";
import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";
import { useAppSelector } from "@/rtk/hooks";

const ChatContainer = () => {
  const open = useAppSelector((state) => state.openChat.value);
  const msgData = [
    {
      text: "السلام عليكم و رحمة الله",
      date: "منذ 3 دقائق",
      owner: true,
    },
    {
      text: "السلام عليكم و رحمة الله",
      date: "منذ 3 دقائق",
      owner: false,
    },
  ];
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(
        "bg-white",
        isMobile &&
          `absolute w-full top-0 start-0 z-[100] pb-2 transition-transform duration-500 ${
            open ? " translate-x-0" : "translate-x-full"
          }`
      )}
    >
      <ChatHead
        name="محمد عبدالجليل"
        adName="موبايل ابل ايفون 14 (128 جيجابايت) "
      />
      <div className="flex flex-col gap-4 pt-8 h-[389px] md:h-[537px] overflow-y-scroll h-scroll px-4 md:px-0">
        {msgData.map((msg, idx) => (
          <Msg {...msg} key={idx} />
        ))}
      </div>
      <SendMsg />
    </div>
  );
};

export default ChatContainer;
