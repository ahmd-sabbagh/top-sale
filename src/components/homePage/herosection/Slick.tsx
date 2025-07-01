"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import "./style.css";
import { getCookie } from "cookies-next";
import { useAppSelector } from "@/rtk/hooks";
import SafeNextImage from "./SafeNextImage";
const Slick = () => {
  const lang = getCookie("NEXT_LOCALE");
  const [dir, setDir] = useState("");
  const [key, setKey] = useState(0);
  const { data, loading } = useAppSelector((state) => state.home);
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
    <>
      {loading ? (
        <div className="w-full h-[139px] lg:h-[130px] animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md" />
      ) : (
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
            {data?.banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <Link
                  href={""}
                  className="overflow-hidden rounded-md md:rounded-lg lg:rounded-2xl bg-white flex items-center justify-center relative w-full h-[139px] lg:h-[130px]"
                >
                  <SafeNextImage image={banner.photo} />
                </Link>
              </SwiperSlide>
            ))}
            <div className="h-5 md:h-8"></div>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Slick;
