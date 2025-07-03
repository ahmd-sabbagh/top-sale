import { AdsCard, EmptyFilterAds } from "@/components";
import { adsDataFav } from "@/utils/data";
import React from "react";

const MyAdsPage = () => {
  return (
    <div className="hidden md:block">
      {adsDataFav.length !== 0 ? (
        <EmptyFilterAds />
      ) : (
        <div
          className={`flex flex-col gap-6`}
        >
          {/* {adsDataFav.map((ads, idx) => (
            <AdsCard {...ads} status={true} owner={true} key={idx} />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default MyAdsPage;
