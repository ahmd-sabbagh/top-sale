import React from "react";
import ImageDetails from "./ImageDetails";
import ProductDetailsText from "./productDetailsText";
import { ProductDetailsData } from "@/utils/data";

const ProductDetails = () => {
  return (
    <section className="md:mt-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <ImageDetails />
          <ProductDetailsText dataa={ProductDetailsData} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
