import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  date: string;
  owner: boolean;
}

const Msg = ({ text, date, owner }: Props) => {
  return (
    <div className={cn("w-fit", owner ? "self-start" : "self-end")}>
      <div
        className={cn(
          "px-[42px] pt-[9px] pb-[13px] w-fit max-w-[400px]",
          owner
            ? "bg-main text-white rounded-e-[32px] rounded-br-xl"
            : "bg-[#E3E9ED] title-color rounded-s-[32px] rounded-bl-xl"
        )}
      >
        <p>{text}</p>
      </div>
      <div
        className={cn(
          "text-xs text-[#5A7184] mt-2",
          owner ? "text-start" : "text-end"
        )}
      >
        {date}
      </div>
    </div>
  );
};

export default Msg;
