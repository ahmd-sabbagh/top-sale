import { useLocalizedField } from "@/hooks/useLocalizedField";
import { Category } from "@/utils/dtos";
import React from "react";
import LinkItem from "./LinkItem";
interface Props {
  title: {
    ar: string;
    en: string;
  };
  categories: Category[];
}

const AdsLinkItem = ({ title, categories }: Props) => {
  const name = useLocalizedField(title);
  return (
    <div>
      <h3 className="text-xl font-bold title-color">{name}</h3>
      <div className="mt-3 grid grid-cols-2 md:flex items-center flex-wrap gap-5">
        {categories.map((cat) => (
          <LinkItem {...cat} key={cat._id} />
        ))}
      </div>
    </div>
  );
};

export default AdsLinkItem;
