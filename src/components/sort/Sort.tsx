"use client";
import {
  filter_icon,
  sort_grid,
  sort_grid_white,
  sort_list,
  sort_list_white,
} from "@/assets";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { setFalse, setTrue } from "@/rtk/slices/sortSlice";
import Image from "next/image";
import React from "react";
import SortBy from "../sortBy/SortBy";
import { toggle } from "@/rtk/slices/filterStatusSlice";
import Skilton from "./Skilton";

const Sort = () => {
  const status = useAppSelector((state) => state.sort.value);
  const filterStatus = useAppSelector((state) => state.filterStatus.value);
  const dispatch = useAppDispatch();
  const sortGeidIcon = status ? sort_grid : sort_grid_white;
  const sortListIcon = status ? sort_list_white : sort_list;

  const { loading } = useAppSelector((state) => state.adsLinks);

  return (
    <>
      {loading ? (
        <Skilton />
      ) : (
        <section>
          <div className="container">
            <div className="p-4 rounded border border-color flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {/* grid */}
                <button type="button" onClick={() => dispatch(setFalse())}>
                  <div
                    className={`w-[34px] h-[34px] flex-c rounded ${
                      !status ? "bg-main" : "border border-color"
                    }`}
                  >
                    <Image src={sortGeidIcon} alt="icon" priority />
                  </div>
                </button>
                {/* List */}
                <button type="button" onClick={() => dispatch(setTrue())}>
                  <div
                    className={`w-[34px] h-[34px] flex-c rounded ${
                      status ? "bg-main" : "border border-color"
                    }`}
                  >
                    <Image src={sortListIcon} alt="icon" priority />
                  </div>
                </button>
                {/* Filter */}
                <button type="button" onClick={() => dispatch(toggle())}>
                  <div
                    className={`w-[34px] h-[34px] flex-c rounded ${
                      filterStatus ? "bg-main" : "border border-color"
                    }`}
                  >
                    <Image src={filter_icon} alt="icon" priority />
                  </div>
                </button>
              </div>
              {/* sort */}
              <SortBy />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Sort;
