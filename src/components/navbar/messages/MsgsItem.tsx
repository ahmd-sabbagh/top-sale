import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface Props {
  setState: (value: boolean) => void;
}

const MsgsItem = ({ setState }: Props) => {
  const msgData = [
    {
      name: "ahmed mohamed",
      msg: "السلام عليكم ورحمة الله",
    },
    {
      name: "ahmed mohamed",
      msg: "السلام عليكم ورحمة الله",
    },
    {
      name: "ahmed mohamed",
      msg: "السلام عليكم ورحمة الله",
    },
    {
      name: "ahmed mohamed",
      msg: "السلام عليكم ورحمة الله",
    },
    {
      name: "ahmed mohamed",
      msg: "السلام عليكم ورحمة الله",
    },
    {
      name: "ahmed mohamed",
      msg: "السلام عليكم ورحمة الله",
    },
  ];
  return (
    <div className="max-h-[300px] overflow-y-scroll h-scroll">
      {msgData.map((msg, idx) => (
        <Link
          href="/messages"
          key={idx}
          className="flex items-center gap-3 justify-between py-3 first:pt-0 border-color border-b last:border-b-0 ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
          onClick={() => setState(false)}
        >
          <div>
            <span className="text-main text-sm">{msg.name}</span>
            <p className="desc-color line-clamp-1 text-xs">{msg.msg}</p>
          </div>
          <span className="text-main text-xl ltr:rotate-180">
            <MdOutlineKeyboardArrowLeft />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default MsgsItem;
