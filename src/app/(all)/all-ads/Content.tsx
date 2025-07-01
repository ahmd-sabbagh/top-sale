"use client";
import { EmptyFilterAds, Filter } from "@/components";
import AdsCard from "@/components/adsCard/AdsCard";
import { fetchAdsData } from "@/rtk/features/getAdsData";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { adsData } from "@/utils/data";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Content = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || undefined;
  const filterStatus = useAppSelector((state) => state.filterStatus.value);
  const sort = useAppSelector((state) => state.sort.value);
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.adsData);
  useEffect(() => {
    dispatch(
      fetchAdsData({
        category
      })
    );
  }, [category]);
  return (
    <section className="mt-10">
      <div className="container">
        <div
          className={`${
            filterStatus ? "lg:grid lg:gap-6 lg:grid-cols-4" : ""
          } `}
        >
          {filterStatus && <Filter />}
          <div className=" md:col-span-3 h-fit">
            {loading ? (
              <div
                className={`${
                  sort ? "flex flex-col" : "grid"
                } gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 ${
                  filterStatus ? "lg:grid-cols-3" : "lg:grid-cols-4"
                }`}
              >
                {Array(8)
                  .fill("")
                  .map((_, idx) => (
                    <div key={idx}>
                      <div className="min-w-[118px] h-[157px] md:min-w-[240px] md:h-[136px] animate-pulse rounded-md bg-gray-200" />
                      <div className="animate-pulse rounded-md bg-gray-200 h-3 mt-1 w-3/4"></div>
                      <div className="animate-pulse rounded-md bg-gray-200 h-2 mt-1 w-1/2"></div>
                    </div>
                  ))}
              </div>
            ) : data.length === 0 ? (
              <EmptyFilterAds />
            ) : (
              <div
                className={`${
                  sort ? "flex flex-col" : "grid"
                } gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 ${
                  filterStatus ? "lg:grid-cols-3" : "lg:grid-cols-4"
                }`}
              >
               
                {data.map((ad) => (
                  <AdsCard status={sort} ad={ad} key={ad._id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
