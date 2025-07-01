import { star_rate } from "@/assets";
import Image from "next/image";


export const useStarRating = () => {
  const renderStars = (avg: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Image
        key={index}
        src={star_rate}
        alt="star-icon"
        priority
        className={`${index < avg ? "opacity-100" : "opacity-30"} w-[13px]`}
      />
    ));
  };

  return { renderStars };
};
