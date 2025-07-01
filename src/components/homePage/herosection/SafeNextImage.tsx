"use client";
import Image, { StaticImageData } from "next/image";
import { not_found_img } from "@/assets";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  image: string | StaticImageData;
  alt?: string;
  className?: string;
}

const SafeNextImage = ({ image, alt = "image", className = "" }: Props) => {
  const initialSrc = typeof image === "string" ? image : image.src;
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={image}
      alt={alt}
      fill
      className={cn("object-cover transition-opacity duration-300", {
        "opacity-0": isLoading,
        "opacity-100": !isLoading,
      })}
      priority
      unoptimized
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={() =>
        setImgSrc(
          typeof not_found_img === "string" ? not_found_img : not_found_img.src
        )
      }
      onLoad={() => setIsLoading(false)}
    />
  );
};

export default SafeNextImage;
