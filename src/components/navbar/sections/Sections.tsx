import React from "react";
import "./style.css";
import AllDepartmentsSection from "./AllDepartmentsSection";
import AllDepartments from "./AllDepartments";

const Sections = () => {
  const all_departments = {
    name: "كل الاقسام",
    sections: [
      {
        ad_type: "المركبات و قطع الغيار",
        types: [
          {
            name: "السيارات",
          },
          {
            name: "سيارات من امريكا",
          },
          {
            name: "الدراجات",
          },
          {
            name: "معدات ثقيلة",
          },
          {
            name: "مستلزمات البحر",
          },
          {
            name: "قطع غيار",
          },
        ],
      },
      {
        ad_type: "العقارات و احتياجات السكن",
        types: [
          {
            name: "عقارات و ممتلكات",
          },
          {
            name: "اراضي",
          },
          {
            name: "اثاث و المطبخ",
          },
          {
            name: "مشاريع للبيع",
          },
        ],
      },
      {
        ad_type: "الاحتياجات الشخصية",
        types: [
          {
            name: "للرجال",
          },
          {
            name: "للنساء",
          },
          {
            name: "للأطفال",
          },
          {
            name: "الطبخ و المواد الغذائية",
          },
          {
            name: "المجوهرات",
          },
        ],
      },
      {
        ad_type: "الوظائف",
        types: [
          {
            name: "وظائف شاغرة",
          },
          {
            name: "الباحثين عن عمل",
          },
        ],
      },
      {
        ad_type: "الرياضة و الصحة",
        types: [
          {
            name: "الصحة",
          },
          {
            name: "رياضة",
          },
          {
            name: "دراجات هوائية",
          },
        ],
      },
      {
        ad_type: "المركبات و قطع الغيار",
        types: [
          {
            name: "السيارات",
          },
          {
            name: "سيارات من امريكا",
          },
          {
            name: "الدراجات",
          },
          {
            name: "معدات ثقيلة",
          },
          {
            name: "مستلزمات البحر",
          },
          {
            name: "قطع غيار",
          },
        ],
      },
      {
        ad_type: "العقارات و احتياجات السكن",
        types: [
          {
            name: "عقارات و ممتلكات",
          },
          {
            name: "اراضي",
          },
          {
            name: "اثاث و المطبخ",
          },
          {
            name: "مشاريع للبيع",
          },
        ],
      },
      {
        ad_type: "الاحتياجات الشخصية",
        types: [
          {
            name: "للرجال",
          },
          {
            name: "للنساء",
          },
          {
            name: "للأطفال",
          },
          {
            name: "الطبخ و المواد الغذائية",
          },
          {
            name: "المجوهرات",
          },
        ],
      },
      {
        ad_type: "الوظائف",
        types: [
          {
            name: "وظائف شاغرة",
          },
          {
            name: "الباحثين عن عمل",
          },
        ],
      },
      {
        ad_type: "الرياضة و الصحة",
        types: [
          {
            name: "الصحة",
          },
          {
            name: "رياضة",
          },
          {
            name: "دراجات هوائية",
          },
        ],
      },
    ],
  };
  const data = [
    "المركبات و قطع الغيار",
    "العقارات و احتياجات السكن",
    "الاحتياجات الشخصية",
    "الوظائف",
    "الرياضة و الصحة",
    "السياحة و مستلزمات الرحلات",
    "حيوانات",
    "ارقام و لوحات",
    "مصانع و منتجات اخري",
  ];
  const dataLinks = [
    "العقارات و احتياجات السكن",
    "المركبات و قطع الغيار",
    "العقارات و احتياجات السكن",
    "الاحتياجات الشخصية",
    "الوظائف",
  ];
  return (
    <section className="bg-[#1D1F1F] hidden md:block">
      <div className="container">
        <div className="flex items-center gap-6">
          <AllDepartments {...all_departments} />
          {data.slice(0, 4).map((section, idx) => (
            <AllDepartmentsSection data={dataLinks} name={section} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
