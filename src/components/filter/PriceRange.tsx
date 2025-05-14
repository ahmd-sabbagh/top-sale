import React, { useState } from "react";
import Slider from "rc-slider";
import "./style.css";
import "rc-slider/assets/index.css";
import { IoIosArrowDown } from "react-icons/io";

const PriceRange = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [value, setValue] = useState<number[]>([20, 80]);

  const handleChange = (val: number | number[]) => {
    if (Array.isArray(val)) {
      setValue(val);
    }
  };
  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value) || 0;
    setValue(([_, max]) => [Math.min(newMin, max), max]);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value) || 0;
    setValue(([min, _]) => [min, Math.max(newMax, min)]);
  };

  return (
    <div className="pt-4 mt-4 border-t border-color first:mt-0 first:pt-0 first:border-0">
      {/* Head */}
      <div className="flex items-center justify-between pb-4">
        <p className="font-medium">{"السعر"}</p>
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
        className={` duration-500 overflow-hidden ${
          openMenu ? "h-[109px]" : "h-0"
        }`}
      >
        <div className="py-4">
          <Slider
            range
            min={0}
            max={100}
            value={value}
            onChange={handleChange}
            className="custom-slider"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex flex-col gap-1 grow">
            <label htmlFor="min" className="title-color text-sm">
              {"من"}
            </label>
            <input
              id="min"
              type="number"
              className="p-2 rounded border border-color w-full"
              value={value[0]}
              onChange={handleMinInputChange}
            />
          </div>
          <div className="flex flex-col gap-1 grow">
            <label htmlFor="max" className="title-color text-sm">
              {"الى"}
            </label>
            <input
              id="max"
              type="number"
              className="p-2 rounded border border-color w-full"
              value={value[1]}
              onChange={handleMaxInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
