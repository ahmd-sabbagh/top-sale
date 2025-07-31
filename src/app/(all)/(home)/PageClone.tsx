"use client";

import { fetchDataHome } from "@/rtk/features/homeData";
import { useAppDispatch } from "@/rtk/hooks";
import { useEffect } from "react";
import {
  Discounts,
  FeaturedAds,
  Herosection,
  NewArrival,
  OurPrivacy,
  CustomerOpinions,
  DepartmentsAds,
} from "@/components";

const PageClone = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDataHome());
  }, []);
  return (
    <>
      <Herosection />
      <DepartmentsAds />
      <FeaturedAds />
      {/* <NewArrival /> */}
      <Discounts />
      <OurPrivacy />
      <CustomerOpinions />
    </>
  );
};

export default PageClone;
