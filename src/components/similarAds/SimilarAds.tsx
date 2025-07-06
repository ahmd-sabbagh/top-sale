import React from "react";
import HeadComponent from "../headComponent/HeadComponent";
import { adsData } from "@/utils/data";
import AdsCard from "../adsCard/AdsCard";

const SimilarAds = () => {
  return (
    <section className="mt-6 md:mt-10 pt-8 md:pt-14 bg-white">
      <div className="container">
        <HeadComponent
          title="Similar ads"
          description="Latest featured ads added"
          href="/all-ads"
        />
        {/* <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-8">
          {adsData.slice(0, 4).map((ads, idx) => (
            <AdsCard {...ads} key={idx} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default SimilarAds;
