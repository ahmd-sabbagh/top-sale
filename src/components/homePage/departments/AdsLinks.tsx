"use client";
import Link from "next/link";
import React from "react";
import "./style.css";
import { useAppSelector } from "@/rtk/hooks";
import SafeImage from "./SafeImage";
import HomeCategoriesSkeleton from "./HomeCategoriesSkeleton";
import AdsLinkItem from "./AdsLinkItem";

const AdsLinks = () => {
  const { data, loading, error } = useAppSelector((state) => state.adsLinks);
  if (error) return;
  return (
    <div className="mt-8 flex flex-col gap-8">
      {loading ? (
        <HomeCategoriesSkeleton />
      ) : (
        data.map((item) => (
          // <div key={item._id}>
          //   <h3 className="text-xl font-bold title-color">{item.title.ar}</h3>
          //   <div className="mt-3 grid grid-cols-2 md:flex items-center flex-wrap gap-5">
          //     {item.categories.map((cat) => (
          //       <Link
          //         href={`/all-ads?category=${cat._id}`}
          //         key={cat._id}
          //         className="AdsLinksLink after:z-[-1] md:min-w-[187px] relative z-[2] px-3"
          //       >
          //         <SafeImage image={cat.image} className="h-[71px] w-[104px]" />

          //         <h4 className="md:text-lg font-medium title-color pb-2 line-clamp-1 relative z-[2]">
          //           {cat.title.ar}
          //         </h4>
          //       </Link>
          //     ))}
          //   </div>
          // </div>
          <AdsLinkItem {...item} key={item._id} />
        ))
      )}
    </div>
  );
};

export default AdsLinks;
