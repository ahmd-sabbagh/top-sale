import { star_rate } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  radiodoData: {
    title: string;
    data: {
      name?: string | number;
      count: string;
      value: string;
    }[];
  };
  state: string;
  setState: (value: string) => void;
}

const FilterSection = ({ radiodoData, state, setState }: Props) => {
  const t = useTranslations();
  const [openMenu, setOpenMenu] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll
    ? radiodoData.data
    : radiodoData.data.slice(0, 5);

  // Stars
  const renderStars = (avg: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Image
        key={index}
        src={star_rate}
        alt="star-icon"
        priority
        className={`${
          index < avg ? "opacity-100" : "opacity-30"
        } w-[13px] md:w-[16px]`}
      />
    ));
  };
  return (
    <div className="pt-4 mt-4 border-t border-color nth-of-type-[2]:mt-0 nth-of-type-[2]:pt-0 nth-of-type-[2]:border-0 ">
      {/* Head */}
      <div className="flex items-center justify-between pb-4">
        <p className="font-medium title-color">{radiodoData.title}</p>
        <button
          type="button"
          className={`transition ${openMenu ? "rotate-180" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <IoIosArrowDown />
        </button>
      </div>
      {/* Body */}
      <div
        className={`flex flex-col h-scroll ${
          radiodoData.data.length >= 6
            ? "overflow-y-scroll"
            : "overflow-y-hidden"
        } overflow-x-hidden duration-500 ${openMenu ? "h-[208px]" : "h-0"}`}
      >
        {visibleItems.map((item, idx) => (
          <button
            type="button"
            className="py-2 flex items-center justify-between gap-3"
            key={idx}
            onClick={() => setState(String(item.name))}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-[18px] h-[18px] rounded-full border flex-c ${
                  item.name == state ? "border-main-color" : "border-color"
                }`}
              >
                <div
                  className={`w-[10px] h-[10px] rounded-full bg-main duration-500 ${
                    item.name == state ? "scale-100" : "scale-0"
                  }`}
                ></div>
              </div>
              {typeof item.name === "number" ? (
                <div className="stars flex items-center gap-1 mt-[2px] md:mt-1">
                  {renderStars(Number(item.value))}
                </div>
              ) : (
                <span
                  className={`${
                    item.name === state ? "title-color" : "desc-color"
                  } text-sm`}
                >
                  {item.name}
                </span>
              )}
            </div>
            <div className="desc-color text-sm">{`(${item.count})`}</div>
          </button>
        ))}
        {radiodoData.data.length > 5 && (
          <button
            type="button"
            className="w-fit mt-[6px] text-sm text-main"
            onClick={() => setShowAll(true)}
          >
            {t("view more")}
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
