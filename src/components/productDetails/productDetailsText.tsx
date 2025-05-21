
import { ProductDetailsTextType } from "@/utils/dtos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import AddFavDesktop from "./actions/AddFavDesktop";
import ShareAds from "./actions/ShareAds";
import Rating from "./actions/Rating";
import Links from "./actions/Links";
import Owner from "./actions/Owner";
import ThisOwner from "./actions/ThisOwner";
import DescriptionSection from "./DescriptionSection ";

interface Props {
  data: ProductDetailsTextType;
}

const ProductDetailsText = ({ data }: Props) => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="title-color text-2xl font-medium md:font-bold">
        {data.name}
      </h3>
      <h4 className="title-color text-2xl font-medium md:font-bold mt-4">
        {data.price}
      </h4>
      {/* Actions */}
      <div className="mt-4 flex items-center gap-4">
        <Rating rateCount={data.rateCount} rateRange={data.rateRange} />
        <AddFavDesktop />
        <ShareAds />
      </div>
      {/* description */}
      <DescriptionSection description={data.description} />
      {/* Links */}
      <Links />
      {/* Owner */}
      {data?.owner ? <Owner data={data.owner} /> : <ThisOwner />}
    </div>
  );
};

export default ProductDetailsText;
