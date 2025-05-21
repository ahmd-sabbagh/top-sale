"use client";
import { EmptyFilterAds, Filter } from "@/components";
import AdsCard from "@/components/adsCard/AdsCard";
import { useAppSelector } from "@/rtk/hooks";
import { adsData } from "@/utils/data";
import React from "react";

const Content = () => {
  const filterStatus = useAppSelector((state) => state.filterStatus.value);
  const sort = useAppSelector((state) => state.sort.value);

  return (
    <section className="mt-10">
      <div className="container">
        <div
          className={`${
            filterStatus ? "lg:grid lg:gap-6 lg:grid-cols-4" : ""
          } `}
        >
          <div className=" md:col-span-3 h-fit">
            {adsData.length === 0 ? (
              <EmptyFilterAds />
            ) : (
              <div
                className={`${
                  sort ? "flex flex-col" : "grid"
                } gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 ${
                  filterStatus ? "lg:grid-cols-3" : "lg:grid-cols-4"
                }`}
              >
                {adsData.map((ads, idx) => (
                  <AdsCard status={sort} {...ads} key={idx} />
                ))}
              </div>
            )}
          </div>
          {filterStatus && <Filter />}
        </div>
      </div>
    </section>
  );
};

export default Content;
