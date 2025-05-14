import React from "react";
import "./style.css";
import AllDepartmentsSection from "./AllDepartmentsSection";

const Sections = () => {
  const data = [
    "كل الاقسام",
    "إلكترونيات",
    "موبايلات",
    "كاميرات مراقبة",
    "سماعات رقمية",
    "كاميرات رقمية",
    "أكسسوارات",
    "شاشات كمبيوتر",
    "إلكترونيات",
    "سماعات",
  ];
    const dataLinks = [
    "العقارات و احتياجات السكن",
    "المركبات و قطع الغيار",
    "العقارات و احتياجات السكن",
    "الاحتياجات الشخصية",
    "الوظائف",
  ];
  return (
    <div className="bg-[#1D1F1F] hidden md:block">
      <div className="container">
        <div className="flex items-center gap-6">
          {data.slice(0, 5).map((section, idx) => (
          <AllDepartmentsSection data={dataLinks} name={section} key={idx}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sections;
