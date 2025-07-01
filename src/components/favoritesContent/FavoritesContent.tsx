"use client";
import {
  filter_icon,
  sort_grid,
  sort_grid_white,
  sort_list,
  sort_list_white,
} from "@/assets";
import { EmptyFilterAds, Filter, SortActions } from "@/components";
import AdsCard from "@/components/adsCard/AdsCard";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { adsDataFav } from "@/utils/data";
import { setFalse, setTrue } from "@/rtk/slices/favoriteListSlice";
import { toggle } from "@/rtk/slices/filterStatusSlice";
import { cn } from "@/lib/utils";

const FavoritesContent = () => {
  const dispatch = useAppDispatch();
  const isGrid = useAppSelector((state) => state.favoriteListSlice.value);
  const isFilter = useAppSelector((state) => state.filterStatus.value);
  return (
    <div className={`${isFilter ? "lg:grid lg:gap-6 lg:grid-cols-4" : ""} `}>
      {isFilter && <Filter />}
      <div className=" md:col-span-3 h-fit">
        <SortActions
          isGrid={isGrid}
          onGridClick={() => dispatch(setFalse())}
          onFilterClick={() => dispatch(toggle())}
          onListClick={() => dispatch(setTrue())}
          isFilterActive={isFilter}
          icons={{
            gridActive: sort_grid,
            gridInactive: sort_grid_white,
            listActive: sort_list_white,
            listInactive: sort_list,
            filter: filter_icon,
          }}
        />
        {adsDataFav.length === 0 ? (
          <EmptyFilterAds />
        ) : (
          <div
            className={cn(
              "gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 mt-6",
              isGrid ? "flex flex-col" : "grid",
              isFilter ? "lg:grid-cols-3" : "lg:grid-cols-4"
            )}
          >
            {adsDataFav.map((ads, idx) => (
              <AdsCard status={isGrid} {...ads} key={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesContent;
