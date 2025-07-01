import {
  SubLinks,
} from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import PageClone from "./PageClone";

const AdsDetailPage = () => {
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
    {
      name: t("ads details"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <PageClone />
    </>
  );
};

export default AdsDetailPage;
