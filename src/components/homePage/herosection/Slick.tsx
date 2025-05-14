"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ads_2, ads_3, ads_4, ads_5, ads_6 } from "@/assets";
import "./style.css";
import { getCookie } from "cookies-next";
const Slick = () => {
  const images = [ads_2, ads_3, ads_4, ads_5, ads_6];
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
    <div className="AdsSlick h-full relative">
      <Swiper
        key={key}
        className="h-full"
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        centeredSlidesBounds={true}
        centeredSlides={true}
        centerInsufficientSlides={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {images.map((ads, idx) => (
          <SwiperSlide key={idx}>
            <Link
              href={""}
              className="overflow-hidden rounded-md md:rounded-lg lg:rounded-2xl bg-white flex items-center justify-center relative w-full h-[139px] lg:h-[130px]"
            >
              <Image
                src={ads}
                alt="ads-image"
                loading="lazy"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="h-5 md:h-8"></div>
      </Swiper>
    </div>
  );
};

export default Slick;
