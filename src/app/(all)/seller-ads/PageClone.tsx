"use client";
import {
  filter_icon,
  profile,
  sort_grid,
  sort_grid_white,
  sort_list,
  sort_list_white,
} from "@/assets";
import {
  AdsCard,
  EmptyFilterAds,
  Filter,
  SortActions,
  SubLinks,
} from "@/components";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { setFalse, setTrue } from "@/rtk/slices/sellerAdsListSlice";
import { adsData } from "@/utils/data";
import SellerAdProfile from "./_components/SellerAdProfile";
import { toggle } from "@/rtk/slices/filterStatusSlice";
import { useTranslations } from "next-intl";

const PageClone = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("Seller Ads"),
      href: "/",
    },
  ];
  const dispatch = useAppDispatch();
  const isGrid = useAppSelector((state) => state.sellerAdsListSlice.value);
  const isFilter = useAppSelector((state) => state.filterStatus.value);
  const profileData = {
    image: profile,
    name: "محمد عبدالجليل",
    adsNum: 215,
    followers: 215,
    WhatHeFollows: 215,
  };
  return (
    <>
      <SubLinks links={sublinks} />
      <section className="mt-4 md:mt-10">
        <div className="container">
          <div
            className={`${isFilter ? "lg:grid lg:gap-6 lg:grid-cols-4" : ""} `}
          >
            {isFilter && <Filter />}
            <div className="md:col-span-3 h-fit">
              <SellerAdProfile {...profileData} />
              <SortActions
                isGrid={isGrid}
                onGridClick={() => dispatch(setFalse())}
                onFilterClick={() => dispatch(toggle())}
                onListClick={() => dispatch(setTrue())}
                isFilterActive={isFilter}
                icons={{
                  gridActive: sort_grid,
                  gridInactive: sort_grid_white,
                  listActive: sort_list_white,
                  listInactive: sort_list,
                  filter: filter_icon,
                }}
              />

              {adsData.length === 0 ? (
                <EmptyFilterAds />
              ) : (
                <div
                  className={cn(
                    "gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 mt-6",
                    isGrid ? "flex flex-col" : "grid",
                    isFilter ? "lg:grid-cols-3" : "lg:grid-cols-4"
                  )}
                >
                  {adsData.map((ads, idx) => (
                    <AdsCard status={isGrid} {...ads} key={idx} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageClone;
