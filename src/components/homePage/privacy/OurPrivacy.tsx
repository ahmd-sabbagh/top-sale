import { credit, delivery, Return } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./style.css"

const OurPrivacy = () => {
  const t = useTranslations();
  const dataPrivacy = [
    {
      icon: credit,
      title: t("Secure payments"),
      description: t("Secure payments desc"),
    },
    {
      icon: Return,
      title: t("Various ads"),
      description: t("Various ads desc"),
    },
    {
      icon: delivery,
      title: t("Guaranteed sellers"),
      description: t("Guaranteed sellers desc"),
    },
  ];
  return (
    <section className="py-12 md:py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 border border-color rounded">
          {dataPrivacy.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-8 cardP">
              <div className="w-10 h-10">
                <Image src={item.icon} alt="icon" loading="lazy" />
              </div>
              <div className="text grow">
                <h3 className="font-medium text-xl">{item.title}</h3>
                <p className="desc-color">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrivacy;
