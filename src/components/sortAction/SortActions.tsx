
"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import SortBy from "../sortBy/SortBy";

type Props = {
  isGrid: boolean;
  onGridClick: () => void;
  onListClick: () => void;
  isFilterActive?: boolean;
  onFilterClick?: () => void;
  icons: {
    gridActive: StaticImageData;
    gridInactive: StaticImageData;
    listActive: StaticImageData;
    listInactive: StaticImageData;
    filter?: StaticImageData;
  };
};

const SortActions = ({
  isGrid,
  onGridClick,
  onListClick,
  isFilterActive,
  onFilterClick,
  icons,
}: Props) => {
  const sortGridIcon = isGrid ? icons.gridActive : icons.gridInactive;
  const sortListIcon = !isGrid ? icons.listInactive : icons.listActive;

  return (
    <div className="p-4 rounded border border-color flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        {/* Grid */}
        <button type="button" onClick={onGridClick}>
          <div
            className={`w-[34px] h-[34px] flex-c rounded ${
              !isGrid ? "bg-main" : "border border-color"
            }`}
          >
            <Image src={sortGridIcon} alt="grid-icon" priority />
          </div>
        </button>
        {/* List */}
        <button type="button" onClick={onListClick}>
          <div
            className={`w-[34px] h-[34px] flex-c rounded ${
              isGrid ? "bg-main" : "border border-color"
            }`}
          >
            <Image src={sortListIcon} alt="list-icon" priority />
          </div>
        </button>
        {/* Filter */}
        {onFilterClick && icons.filter &&  (
          <button type="button" onClick={onFilterClick}>
            <div
              className={`w-[34px] h-[34px] flex-c rounded ${
                isFilterActive ? "bg-main" : "border border-color"
              }`}
            >
              <Image src={icons.filter} alt="filter-icon" priority />
            </div>
          </button>
        )}
      </div>

      <SortBy />
    </div>
  );
};

export default SortActions;
