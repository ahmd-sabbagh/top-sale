import { SubLinks } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import NotificationChangeForm from "../_components/NotificationChangeForm";

const NotificationEditPage = () => {
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
      name: t("notification"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <section>
        <div className="container">
          <NotificationChangeForm />
        </div>
      </section>
    </>
  );
};

export default NotificationEditPage;
