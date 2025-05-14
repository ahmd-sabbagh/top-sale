import { adsDataTitle } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Departments = () => {
  return (
    <div className="mt-4 md:mt-8 flex flex-col gap-8">
      {adsDataTitle.map((item, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-bold title-color">{item.title}</h3>
          <div className="mt-3 grid grid-cols-2 md:flex items-center flex-wrap gap-5">
            {item.departs.map((depart, idx) => (
              <Link
                href={""}
                key={idx}
                className="AdsLinksLink after:z-[-1] md:min-w-[187px] relative z-[2] px-3"
              >
                <div className="h-[71px] w-[104px] relative">
                  <Image
                    src={depart.image}
                    alt="product-image"
                    fill
                    sizes="(max-width: 768px) 80px, 104px"
                    className="object-contain"
                  />
                </div>
                <h4 className="md:text-lg font-medium title-color pb-2 line-clamp-1 relative z-[2]">
                  {depart.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Departments;
