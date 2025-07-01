import { not_found_img } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Props {
  image?: string;
  alt?: string;
  className?: string;
}

const SafeImage = ({ image, alt = "product-image", className = "" }: Props) => {
  const validImage = image && image.trim() !== "" ? image : not_found_img.src;
  const [imgSrc, setImgSrc] = useState(validImage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(validImage);
    setIsLoading(true);
  }, [validImage]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 z-0 rounded" />
      )}

      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 80px, 104px"
        className={`object-contain transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onError={() => {
          setImgSrc(not_found_img.src);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default SafeImage;
