"use client";
import React from "react";
import "./style.css";
import AllDepartmentsSection from "./AllDepartmentsSection";
import AllDepartments from "./AllDepartments";
import { useAppSelector } from "@/rtk/hooks";

const Sections = () => {
  const { data, loading, error } = useAppSelector((state) => state.adsLinks);
  return (
    <section className="bg-[#1D1F1F] hidden md:block">
      {loading ? (
      <div className="bg-gray-300 animate-pulse h-[46px] w-full"></div>
      ) : (
        <div className="container">
          <div className="flex items-center gap-6">
            <AllDepartments />
            {data &&
              !loading &&
              data
                .slice(0, 4)
                .map((section) => (
                  <AllDepartmentsSection
                    data={section.categories}
                    name={section.title}
                    key={section._id}
                  />
                ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Sections;
