import {
  Discounts,
  FeaturedAds,
  Herosection,
  NewArrival,
  OurPrivacy,
  CustomerOpinions,
  DepartmentsAds,
} from "@/components";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <Herosection />
      <DepartmentsAds />
      <FeaturedAds />
      {/* <NewArrival /> */}
      <Discounts />
      <OurPrivacy />
      <CustomerOpinions />
    </section>
  );
};

export default HomePage;
