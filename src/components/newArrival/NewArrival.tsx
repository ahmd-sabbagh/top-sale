import React from "react";
import HeadComponent from "../headComponent/HeadComponent";
import { adsData } from "@/utils/data";
import AdsCard from "../adsCard/AdsCard";

const NewArrival = () => {
  return (
    <section className="py-12 md:py-14 bg-white">
      <div className="container">
        <HeadComponent
          title="New arrival"
          description="New arrival desc"
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

export default NewArrival;
