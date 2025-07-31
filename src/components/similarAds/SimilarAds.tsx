import React from "react";
import HeadComponent from "../headComponent/HeadComponent";
import { adsData } from "@/utils/data";
import AdsCard from "../adsCard/AdsCard";
import { useAppSelector } from "@/rtk/hooks";

const SimilarAds = () => {
  const { data, loading } = useAppSelector((state) => state.similarAds);
  return (
    <section className="mt-6 md:mt-10 pt-8 md:pt-14 bg-white">
      <div className="container">
        {loading ? (
          <div className="animate-pulse">
            <div className="flex items-center justify-between ">
              <div>
                <div className="h-6 md:h-8 bg-gray-300 rounded w-40 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-64"></div>
              </div>

              <div className="min-w-fit border border-gray-300 rounded px-3 md:px-4 py-[8px] md:py-[11px] flex items-center gap-2">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-8">
              {Array(4)
                .fill("")
                .map((_, idx) => (
                  <div key={idx}>
                    <div className="min-w-[118px] h-[157px] md:min-w-[240px] md:h-[136px] rounded-md bg-gray-200" />
                    <div className="rounded-md bg-gray-200 h-3 mt-1 w-3/4"></div>
                    <div className=" rounded-md bg-gray-200 h-2 mt-1 w-1/2"></div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <>
            {data && data.ads.length !== 0 && (
              <>
                <HeadComponent
                  title="Similar ads"
                  description="Latest featured ads added"
                  href="/all-ads"
                />
                <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-8">
                  {data.ads.slice(0, 4).map((ads) => (
                    <AdsCard ad={ads} key={ads._id} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SimilarAds;
