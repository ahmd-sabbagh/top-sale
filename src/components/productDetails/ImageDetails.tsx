"use client";
import { image_details, mobile, scale } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FavoriteButton from "../adsCard/FavoriteButton";
import { useAppSelector } from "@/rtk/hooks";
import ImageSkilton from "./ImageSkilton";
import { useAuth } from "@/app/context/AuthContext";

const ImageDetails = () => {
  const { data, loading } = useAppSelector((state) => state.adsDetails);
  const [image, setImage] = useState<{ id: string; image: string }>({
    id: "",
    image: "",
  });
  const { token } = useAuth();
  useEffect(() => {
    if (data?.photos && data.photos.length > 0) {
      setImage({ id: data.photos[0]._id, image: data.photos[0].org });
    }
  }, [data]);
  return (
    <>
      <div
        className={`ImageDetails costom-arrow overflow-hidden flex flex-col-reverse md:flex-row gap-4 `}
      >
        {loading ? (
          <ImageSkilton />
        ) : (
          <>
            {/* vertical swiper */}
            {/* <div className="relative overflow-hidden md:w-[130px] md:h-[651px] hidden md:block">
              <Swiper
                direction="vertical"
                slidesPerView={5}
                navigation={false}
                pagination={false}
                autoplay={false}
                loop={false}
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={12}
                className="h-full"
              >
                {arr.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`img-fit relative h-[80px] md:h-[119px] rounded overflow-hidden border cursor-pointer ${
                        image.id == item.id
                          ? "opacity-100 border-main-color"
                          : "opacity-40 border-color"
                      }`}
                      onClick={() => setImage(item)}
                    >
                      <Image
                        src={item.image}
                        alt="product-image"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 119px, 80px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
            {/* Hiorizental swiper */}
            {/* <div className="relative overflow-hidden md:w-[130px] md:h-[651px] md:hidden">
              <Swiper
                direction="horizontal"
                slidesPerView={5}
                navigation={false}
                pagination={false}
                autoplay={false}
                loop={false}
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={8}
                className="h-full"
              >
                {arr.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`img-fit relative h-[80px] rounded overflow-hidden border cursor-pointer ${
                        image.id == item.id
                          ? "opacity-100 border-main-color"
                          : "opacity-40 border-color"
                      }`}
                      onClick={() => setImage(item)}
                    >
                      <Image
                        src={item.image}
                        alt="product-image"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 119px, 80px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
            {/* main image */}
            <div className="main-image img-fit relative min-h-[397px] md:h-[651px] rounded border border-color overflow-hidden flex-1 w-full">
              {data && token && (
                <FavoriteButton fav={data?.isFavourite} id={data?._id} />
              )}
              {image.image && (
                <Image
                  src={image.image}
                  alt="product"
                  fill
                  className="object-cover z-0"
                  sizes="(min-width: 768px) 651px, 397px"
                  priority
                />
              )}
              <button
                type="button"
                className="absolute bottom-[15px] end-[15px] rounded border border-color w-10 h-10 flex-c"
              >
                <Image src={scale} alt="scale-icon" loading="lazy" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ImageDetails;
