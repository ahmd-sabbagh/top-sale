import { logo } from "@/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:col-span-2">
      <div className="w-[109px]">
        <Image src={logo} alt="logo" priority />
      </div>
      <p className="mt-4 text-[#666666] text-sm lg:text-base pe-4">
        {
          "توب سيل من افضل الاعلانات التى تقوم ببيع المنتجات الرقمية بأفضل الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم واستمتع بأفضل العروض والخصومات"
        }
      </p>
    </div>
  );
};

export default About;
