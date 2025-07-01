import React from "react";

const Skilton = () => {
  return (
    <section>
      <div className="container">
        <div className="p-4 rounded border border-color flex items-center justify-between gap-3 animate-pulse">
          <div className="flex items-center gap-2">
            {/* Grid Skeleton */}
            <div className="w-[34px] h-[34px] rounded border border-color bg-gray-200"></div>

            {/* List Skeleton */}
            <div className="w-[34px] h-[34px] rounded border border-color bg-gray-200"></div>

            {/* Filter Skeleton */}
            <div className="w-[34px] h-[34px] rounded border border-color bg-gray-200"></div>
          </div>

          {/* SortBy Skeleton */}
          <div className="w-[150px] h-[34px] rounded border border-color bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Skilton;
