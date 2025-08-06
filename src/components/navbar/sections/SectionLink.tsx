import { useLocalizedField } from "@/hooks/useLocalizedField";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
interface Props {
  _id: string;
  title: {
    ar: string;
    en: string;
  };
}

const SectionLink = ({ _id, title }: Props) => {
    const name= useLocalizedField(title)
  return (
    <Link
      href={`/all-ads?category=${_id}`}
      className="w-full flex item-center justify-between p-4 border-b border-color ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
    >
      <span className="title-color">{name}</span>
      <span className="text-main text-xl ltr:rotate-180">
        <MdOutlineKeyboardArrowLeft />
      </span>
    </Link>
  );
};

export default SectionLink;
