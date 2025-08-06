import React from "react";
import SafeImage from "./SafeImage";
import Link from "next/link";
import { useLocalizedField } from "@/hooks/useLocalizedField";

interface Props {
  _id: string;
  image: string;
  title: {
    ar: string;
    en: string;
  };
}

const LinkItem = ({ _id, image, title }: Props) => {
  const name = useLocalizedField(title);
  return (
    <Link
      href={`/all-ads?category=${_id}`}
      className="AdsLinksLink after:z-[-1] md:min-w-[187px] relative z-[2] px-3"
    >
      <SafeImage image={image} className="h-[71px] w-[104px]" />

      <h4 className="md:text-lg font-medium title-color pb-2 line-clamp-1 relative z-[2]">
        {name}
      </h4>
    </Link>
  );
};

export default LinkItem;
