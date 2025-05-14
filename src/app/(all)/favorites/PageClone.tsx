

import { FavoritesContent, SubLinks } from "@/components";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { setFalse, setTrue } from "@/rtk/slices/favoriteListSlice";
import { toggle } from "@/rtk/slices/filterStatusSlice";
import { useTranslations } from "next-intl";
import React from "react";

const PageClone = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("Favorites"),
      href: "/",
    },
  ];

  return (
    <>
      <SubLinks links={sublinks} />
      <section className="md:mt-10">
        <div className="container">
          <FavoritesContent />
        </div>
      </section>
    </>
  );
};

export default PageClone;
