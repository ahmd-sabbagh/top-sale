import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/rtk/hooks";
import { setTrue } from "@/rtk/slices/openChatSlice";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface Props {
  image: StaticImageData | string;
  name: string;
  date: string;
  msg: string;
  id: string;
  onClick: (id: string) => void;
  state?: string;
}

const NameItem = ({ image, name, date, msg, id, state, onClick }: Props) => {
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();
  const clickHandler = (id: string) => {
    if (isMobile) {
      dispatch(setTrue());
    } else {
      onClick(id);
    }
  };
  return (
    <button
      type="button"
      className={cn(
        "w-full flex items-center justify-between gap-4 p-4",
        !isMobile && state === id
          ? "bg-[#FAF0F6] rounded-lg transition-colors duration-500"
          : "border-b border-color"
      )}
      onClick={() => clickHandler(id)}
    >
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={`Profile picture of ${name}`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <h3 className="line-clamp-1 title-color">{name}</h3>
          <p className="line-clamp-1 text-sm text-gray">{msg}</p>
        </div>
      </div>
      <span className="text-xs text-gray">{date}</span>
    </button>
  );
};

export default NameItem;
