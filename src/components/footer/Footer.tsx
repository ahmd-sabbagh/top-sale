import React from "react";
import About from "./About";
import { useTranslations } from "next-intl";
import Links from "./Links";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";

const Footer = () => {
  const t = useTranslations();
  const profileData = {
    title: t("my_profile"),
    links: [
      {
        name: t("my_profile"),
        herf: "/profile",
      },
      {
        name: t("my_adds"),
        herf: "/profile/my-ads",
      },
      {
        name: t("fav"),
        herf: "/favorites",
      },
    ],
  };
  const importantLinks = {
    title: t("Important links"),
    links: [
      {
        name: t("Who we are"),
        herf: "/about-us",
      },
      {
        name: t("privacy policy"),
        herf: "/privacy-policy",
      },
      {
        name: t("Terms and Conditions"),
        herf: "privacy-policy",
      },
      {
        name: t("technical support"),
        herf: "privacy-policy",
      },
    ],
  };
  return (
    <section className="hidden md:block">
      <div className="container">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 py-12">
          <About />
          <Links data={profileData} />
          <Links data={importantLinks} />
          <ContactUs />
          <FollowUs />
        </div>
      </div>
      <div className="p-4 bg-[#1D1F1F]">
        <p className="text-white text-sm text-center">{"الحقوق محفوظة لتوب سيل © 2025"}</p>
      </div>
    </section>
  );
};

export default Footer;
