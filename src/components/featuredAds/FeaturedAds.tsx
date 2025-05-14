import React from "react";
import { adsData } from "@/utils/data";
import AdsCard from "../adsCard/AdsCard";
import HeadComponent from "../headComponent/HeadComponent";

const FeaturedAds = () => {
  return (
    <section className="py-12 md:py-14 bg-[#F8F8F8]">
      <div className="container">
        <HeadComponent
          title="FeaturedAds"
          description="FeaturedAds desc"
          href="/all-ads"
        />
        <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-8">
          {adsData.map((ads, idx) => (
            <AdsCard {...ads} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAds;
