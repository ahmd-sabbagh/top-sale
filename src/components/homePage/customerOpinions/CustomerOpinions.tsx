import HeadComponent from "@/components/headComponent/HeadComponent";
import React from "react";
import Slick from "./Slick";

const CustomerOpinions = () => {
    
  return (
    <section className="py-12 md:py-14">
      <div className="container">
        <HeadComponent title="Customer opinions" description="Customer opinions desc" />
        <Slick />
      </div>
    </section>
  );
};

export default CustomerOpinions;
