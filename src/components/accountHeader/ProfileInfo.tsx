import { useTranslations } from "next-intl";
import React from "react";

const ProfileInfo = () => {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between md:grow md:justify-around bg-[#FAF0F6] md:bg-transparent">
      <div className="text-sm text-center">
        <p className="text-gray">{t("Advertisements")}</p>
        <div className="title-color">{"214"}</div>
      </div>
      <div className="text-sm text-center">
        <p className="text-gray">{t("Followers")}</p>
        <div className="title-color">{"214"}</div>
      </div>
      <div className="text-sm text-center">
        <p className="text-gray">{t("What he follows")}</p>
        <div className="title-color">{"214"}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
