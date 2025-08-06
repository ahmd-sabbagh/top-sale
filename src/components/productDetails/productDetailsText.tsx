import { ProductDetailsTextType } from "@/utils/dtos";
import React from "react";
import ShareAds from "./actions/ShareAds";
import Rating from "./actions/Rating";
import Links from "./actions/Links";
import Owner from "./actions/Owner";
import ThisOwner from "./actions/ThisOwner";
import DescriptionSection from "./DescriptionSection ";
import { useAppSelector } from "@/rtk/hooks";

interface Props {
  dataa: ProductDetailsTextType;
}

const ProductDetailsText = ({ dataa }: Props) => {
  const { data, loading } = useAppSelector((state) => state.adsDetails);
  return (
    <>
      {loading ? (
        <div className="h-full w-full mx-auto animate-pulse">
          <div className="h-16 bg-gray-300 rounded"></div>
          <div className="space-y-4 mt-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
          <div className="h-48 bg-gray-300 rounded mt-4"></div>
          <div className="h-16 bg-gray-300 rounded mt-4"></div>
        </div>
      ) : (
        <div>
          <h3 className="title-color text-2xl font-medium md:font-bold">
            {data?.title}
          </h3>
          <h4 className="title-color text-2xl font-medium md:font-bold mt-4">
            {`${data?.price} QAR`}
          </h4>
          {/* Actions */}
          <div className="mt-4 flex items-center gap-4">
            <Rating rateCount={dataa.rateCount} rateRange={dataa.rateRange} />
            <ShareAds />
          </div>
          {/* description */}
          <DescriptionSection description={data?.details} />
          {/* Links */}
          <Links />
          {/* Owner */}
          {data?.user ? <Owner data={data.user} /> : <ThisOwner />}
        </div>
      )}
    </>
  );
};

export default ProductDetailsText;
