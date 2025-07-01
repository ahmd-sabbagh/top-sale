"use client";
import React from "react";
import { adsData } from "@/utils/data";
import AdsCard from "../adsCard/AdsCard";
import HeadComponent from "../headComponent/HeadComponent";
import { useAppSelector } from "@/rtk/hooks";

const FeaturedAds = () => {
  const { data, loading } = useAppSelector((state) => state.home);
  return (
    <section className="py-12 md:py-14 bg-[#F8F8F8]">
      <div className="container">
        <HeadComponent
          title="FeaturedAds"
          description="FeaturedAds desc"
          href="/all-ads"
        />
        <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-8">
          {loading
            ? Array(8)
                .fill("")
                .map((_, idx) => (
                  <div key={idx}>
                    <div className="min-w-[118px] h-[157px] md:min-w-[240px] md:h-[136px] animate-pulse rounded-md bg-gray-200" />
                    <div className="animate-pulse rounded-md bg-gray-200 h-3 mt-1 w-3/4"></div>
                    <div className="animate-pulse rounded-md bg-gray-200 h-2 mt-1 w-1/2"></div>
                  </div>
                ))
            : data?.ads.map((ad) => <AdsCard ad={ad} key={ad.id} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAds;
