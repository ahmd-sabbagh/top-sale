import { not_found_img } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface SafeImageProps {
  image?: string;
  alt?: string;
  className?: string;
  sizes?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  blurDataURL?: string;
  rounded?: boolean;
}

const SaftyImage = ({
  image,
  alt = "image",
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectFit = "contain",
  priority = false,
  blurDataURL,
  rounded = true,
}: SafeImageProps) => {
  const fallbackSrc = not_found_img.src;
  const [imgSrc, setImgSrc] = useState(fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (image && image.trim() !== "") {
      setImgSrc(image);
    } else {
      setImgSrc(fallbackSrc);
    }
    setIsLoading(true);
  }, [image]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div
          className={`absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 z-0 ${
            rounded ? "rounded" : ""
          }`}
        />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        className={`object-${objectFit} transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${rounded ? "rounded" : ""}`}
        onError={() => {
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
            setIsLoading(true);
          } else {
            setIsLoading(false);
          }
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default SaftyImage;
