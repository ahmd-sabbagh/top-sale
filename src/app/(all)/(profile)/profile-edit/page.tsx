import React from "react";
import ProfileImage from "../_components/ProfileImage";
import Form from "../_components/Form";
import { useTranslations } from "next-intl";
import { SubLinks } from "@/components";

const EditProfilePage = () => {
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
      name: t("Profile"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <section>
        <div className="container">
          <ProfileImage />
          <Form />
        </div>
      </section>
    </>
  );
};

export default EditProfilePage;
