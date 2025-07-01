import HeadComponent from "@/components/headComponent/HeadComponent";
import React from "react";
import AdsLinks from "./AdsLinks";

const DepartmentsAds = () => {
  return (
    <section className="py-12 md:py-14">
      <div className="container">
        <HeadComponent
          title="Shop by categories"
          description="Shop by categories desc"
          // href="/departments"
        />
        <AdsLinks />
      </div>
    </section>
  );
};

export default DepartmentsAds;
