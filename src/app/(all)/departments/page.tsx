import { SubLinks } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import Departments from "./Departments";
import HeadComponent from "@/components/headComponent/HeadComponent";

const DepartMentsPage = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("departments"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <section>
        <div className="container">
          <HeadComponent
            title="Shop by categories"
            description="Shop by categories desc"
          />
          <Departments />
        </div>
      </section>
    </>
  );
};

export default DepartMentsPage;
