import { Filter, Sort, SubLinks } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import Content from "./Content";

const AllAdsPage = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("all ads"),
      href: "/",
    },
  ];
  return (
    <section>
      <SubLinks links={sublinks} />
      <Sort />
      <Content />
    </section>
  );
};

export default AllAdsPage;
