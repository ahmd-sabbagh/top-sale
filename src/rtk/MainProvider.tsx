"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import { fetchAdsLinks } from "./features/getCategoriesGroupd";

interface Props {
  children: React.ReactNode;
  lang: string;
}

const DataFetcher = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAdsLinks());
  }, []);

  return null;
};

const MainProvider = ({ children, lang }: Props) => {
  return (
    <Provider store={store}>
      <DataFetcher />
      {children}
    </Provider>
  );
};

export default MainProvider;
