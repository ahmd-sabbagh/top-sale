"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import ProductFeature from "./ProductFeature";
import ProductReviews from "./productReviews/ProductReviews";
import { useAppSelector } from "@/rtk/hooks";

export const normalizeCategory = (categoryEn?: string): string => {
  if (!categoryEn) return "";
  const normalized = categoryEn.trim().toLowerCase();
  const map: Record<string, string> = {
    cars: "cars",
    properties: "properties",
    lands: "lands",
    motorcycles: "motorcycles",
    "heavy equipment": "heavy_equipment",
  };

  return map[normalized] || "";
};

const ProductDetailsInfo = () => {
  const t = useTranslations();
  const [type, setType] = useState("Product features");
  const { data, loading } = useAppSelector((state) => state.adsDetails);
  return (
    <section className="mt-8 md:mt-12">
      <div className="container">
        {/* Actions */}
        <div className="flex items-center border-b-2 border-main-color font-medium">
          <button
            type="button"
            className={`w-1/2 md:w-[156px] h-[56px] flex-c ${
              type === "Product features"
                ? "text-main md:!text-white bg-[#B027701A] md:!bg-[#B02770]"
                : "desc-color"
            }`}
            onClick={() => setType("Product features")}
          >
            {t("Product features")}
          </button>
          <button
            type="button"
            className={`w-1/2 md:w-[156px] h-[56px] flex-c ${
              type === "Product Reviews"
                ? "text-main md:!text-white bg-[#B027701A] md:!bg-[#B02770]"
                : "desc-color"
            }`}
            onClick={() => setType("Product Reviews")}
          >
            {t("Product Reviews")}
          </button>
        </div>
        {/* Product Feature */}
        {type === "Product features" && data?.category.title.en && (
          <ProductFeature
            data={data}
            category={normalizeCategory(data?.category.title.en)}
          />
        )}
        {type === "Product Reviews" && <ProductReviews />}
      </div>
    </section>
  );
};

export default ProductDetailsInfo;
