"use client";
import {
  sort_grid,
  sort_grid_white,
  sort_list,
  sort_list_white,
} from "@/assets";
import { AdsCard, EmptyFilterAds, SortActions } from "@/components";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { setFalse, setTrue } from "@/rtk/slices/profileFavoritList";
import { adsDataFav } from "@/utils/data";


const PageClone = () => {
  const dispatch = useAppDispatch();
  const isGrid = useAppSelector((state) => state.profileFavList.value);
  return (
    <div className="hidden md:block">
      <SortActions
        isGrid={isGrid}
        onGridClick={() => dispatch(setFalse())}
        onListClick={() => dispatch(setTrue())} 
        icons={{
          gridActive: sort_grid,
          gridInactive: sort_grid_white,
          listActive: sort_list_white,
          listInactive: sort_list,
        }}
      />
      <div className=" mt-8">
        {adsDataFav.length !== 0 ? (
          <EmptyFilterAds />
        ) : (
          <div
            className={`${
              isGrid ? "flex flex-col" : "grid"
            } gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3`}
          >
            {/* {adsDataFav.map((ads, idx) => (
              <AdsCard {...ads} status={isGrid} key={idx} />
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageClone;
