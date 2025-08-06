"use client";

import { useAppSelector } from "@/rtk/hooks";
import Search from "./Search";

const SearchCont = () => {
  const { data, loading } = useAppSelector((state) => state.home);
  return (
    <>
      <Search ads={data?.ads || []} loading={loading} />
    </>
  );
};

export default SearchCont;
