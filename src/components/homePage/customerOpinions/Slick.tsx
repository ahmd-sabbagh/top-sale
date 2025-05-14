"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getCookie } from "cookies-next";
import { customerData } from "@/utils/data";
import OpinionsCard from "./OpinionsCard";
const Slick = () => {
  const lang = getCookie("NEXT_LOCALE");
  const [dir, setDir] = useState("");
  const [key, setKey] = useState(0);
  useEffect(() => {
    if (lang === "ar") {
      setDir("rtl");
      setKey((prev) => prev + 1);
    } else if (lang === "en") {
      setDir("ltr");
      setKey((prev) => prev + 1);
    } else {
      setDir("ltr");
      setKey((prev) => prev + 1);
    }
  }, [lang]);
  return (
    <div className="h-full relative mt-6 md:mt-8">
      <Swiper
        key={key}
        className="h-full"
        slidesPerView={1}
        navigation={false}
        pagination={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        centeredSlidesBounds={true}
        centeredSlides={true}
        centerInsufficientSlides={true}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {customerData.map((opinions, idx) => (
          <SwiperSlide key={idx}>
            <OpinionsCard {...opinions} key={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slick;
