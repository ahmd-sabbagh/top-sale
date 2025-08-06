"use client";
import { searchIcon } from "@/assets";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { useAppSelector } from "@/rtk/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import AdsCard from "../adsCard/AdsCard";
import { toast } from "sonner";
import axios from "@/lib/axios";
import SnipperButton from "../sniperBtn/SniperBtn";
import { AdsData, CarAd, SearchAds } from "@/utils/dtos";


const Search = () => {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyword, setKeyWord] = useState<string>();
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [data, setData] = useState<CarAd[]>([]);
  const clickOutHandler = () => {
    setIsModalOpen(false);
  };
  const ref = useClickOutside<HTMLDivElement>(clickOutHandler);
  const onsubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!keyword) return toast.warning(t("please_write_something"));
    setSearchLoading(true);
    try {
      const response = await axios.get(`/api/ads?keyword=${keyword}`);
      const res: SearchAds = response.data;
      if(res.success){
        setData(res.data.ads)
      }
    } catch (error) {
    } finally {
      setSearchLoading(false);
    }
  };
  return (
    <>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="fixed min-h-screen w-full top-0 start-0 bg-[#0000008c] z-20 flex-c"
        >
          <div className="container" ref={ref}>
            <div className="bg-white p-3 md:p-10 rounded-xl">
              {/* Form */}
              <form onSubmit={onsubmit} className="max-w-[600px] mx-auto">
                <div className="flex gap-1 items-center">
                  <div className=" grow px-4 h-[54px] rounded-[50px] md:rounded border border-[#EEEEEE] bg-[#EFEFEF] md:bg-transparent flex-c">
                    <input
                      type="text"
                      className="w-full"
                      placeholder={t("Find what you want")}
                      onChange={(e) => setKeyWord(e.target.value)}
                    />
                  </div>
                  <div className="w-16 flex-c bg-main h-[54px] rounded-[50px] md:rounded">
                    <button type="submit" className="text-white text-xl">
                      {searchLoading ? <SnipperButton /> : <CiSearch />}
                    </button>
                  </div>
                </div>
              </form>
              {/* Ads */}
              <div
                className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-16 h-[400px] rounded-xl p-3 md:p-5 overflow-scroll h-scroll"
                style={{ boxShadow: "0 0 20px 0px #00000038" }}
              >
                {searchLoading
                  ? Array(8)
                      .fill("")
                      .map((_, idx) => (
                        <div key={idx}>
                          <div className="min-w-[118px] h-[157px] md:min-w-[240px] md:h-[136px] animate-pulse rounded-md bg-gray-200" />
                          <div className="animate-pulse rounded-md bg-gray-200 h-3 mt-1 w-3/4"></div>
                          <div className="animate-pulse rounded-md bg-gray-200 h-2 mt-1 w-1/2"></div>
                        </div>
                      ))
                  : data.length > 0 ? data?.map((ad) => <AdsCard ad={ad} key={ad.id} />) : <div className="col-span-4 text-center text-xl">{t("no_search_results")}</div> }
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {/* search icon */}
      <div className="flex gap-1 items-center px-4 py-[14px] md:py-[10px] lg:py-[14px] rounded-[50px] md:rounded border border-[#EEEEEE] bg-[#EFEFEF] md:bg-transparent">
        <div className="grow">
          <input
            onFocus={() => setIsModalOpen(true)}
            type="text"
            className="w-full"
            placeholder={t("Find what you want")}
          />
        </div>
        <div className="w-4 h-4 relative">
          <Image
            src={searchIcon}
            alt="search-icon"
            priority
            fill
            sizes="16px"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
