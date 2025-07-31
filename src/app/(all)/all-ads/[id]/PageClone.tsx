"use client";
import { ProductDetails, ProductDetailsInfo, SimilarAds } from "@/components";
import { featchAdsDetails } from "@/rtk/features/getAdsDetails";
import { featchRecentComments } from "@/rtk/features/getRecentComments";
import { featchSimilarAds } from "@/rtk/features/getSimilarAds";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const PageClone = () => {
  const params = useParams();
  const id = params.id?.toString();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(featchAdsDetails(id));
      dispatch(featchSimilarAds(id));
      dispatch(featchRecentComments(id));
    }
  }, [id]);
  const { error } = useAppSelector((state) => state.adsDetails);
  if (error) return <div>{error}</div>;
  return (
    <>
      <ProductDetails />
      <ProductDetailsInfo />
      <SimilarAds />
    </>
  );
};

export default PageClone;
