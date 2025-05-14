import { SubLinks } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import FormWeb from "./_components/FormWeb";

const AddAdsPage = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("add adds"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <section className="md:py-10">
        <div className="container">
          <FormWeb />
        </div>
      </section>
    </>
  );
};

export default AddAdsPage;
