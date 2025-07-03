import { AdsCard, EmptyFilterAds, SubLinks } from "@/components";
import { adsDataFav } from "@/utils/data";
import { useTranslations } from "next-intl";
import React from "react";

const MyAdsPage = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("more"),
      href: "/profile",
    },
    {
      name: t("my_adds"),
      href: "/",
    },
  ];
  return (
    <>
      <section className="md:hidden">
        <SubLinks links={sublinks} />
        <div className="container">
          {adsDataFav.length !== 0 ? (
            <EmptyFilterAds />
          ) : (
            <div className={`flex flex-col gap-6`}>
              {/* {adsDataFav.map((ads, idx) => (
                <AdsCard {...ads} status={true} owner key={idx} />
              ))} */}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyAdsPage;
