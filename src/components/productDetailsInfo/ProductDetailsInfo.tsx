"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import ProductFeature from "./ProductFeature";
import ProductReviews from "./productReviews/ProductReviews";

const ProductDetailsInfo = () => {
  const t = useTranslations();
  const [type, setType] = useState("Product features");
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
        {type === "Product features" && <ProductFeature />}
        {type === "Product Reviews" && <ProductReviews />}
      </div>
    </section>
  );
};

export default ProductDetailsInfo;
