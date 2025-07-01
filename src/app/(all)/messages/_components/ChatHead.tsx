import { useAppDispatch } from "@/rtk/hooks";
import { setFalse } from "@/rtk/slices/openChatSlice";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
interface Props {
  name: string;
  adName: string;
}

const ChatHead = ({ name, adName }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="px-4 pt-2 pb-6 bg-[#F8F8F8] flex items-center justify-between">
      <div>
        <h3 className="text-main">{name}</h3>
        <p className="desc-color mt-1">{adName}</p>
      </div>
      <button
        type="button"
        className="flex-c desc-color"
        onClick={() => dispatch(setFalse())}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default ChatHead;
