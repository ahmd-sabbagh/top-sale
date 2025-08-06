"use client";
import { ProductDetails, ProductDetailsInfo, SimilarAds } from "@/components";
import { featchAdsDetails } from "@/rtk/features/getAdsDetails";
import { featchRecentComments } from "@/rtk/features/getRecentComments";
import { featchSimilarAds } from "@/rtk/features/getSimilarAds";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const PageClone = () => {
  const params = useParams();
  const id = params.id?.toString();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data: adDetailsData } = useAppSelector((state) => state.adsDetails);
  const { data: recentCommentsData } = useAppSelector(
    (state) => state.recentComments
  );
  const { data: similarAdsData } = useAppSelector((state) => state.similarAds);

  useEffect(() => {
    if (!id) {
      router.push("/all-ads");
      return;
    }

    if (!adDetailsData || adDetailsData.id !== id) {
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
