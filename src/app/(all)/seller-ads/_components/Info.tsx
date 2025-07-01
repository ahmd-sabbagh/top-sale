import React from "react";
import { useTranslations } from "use-intl";

const Info = () => {
  const t = useTranslations();
  const data = {
    adsNum: 215,
  };
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-center">
        <p className="text-gray">{t("Advertisements")}</p>
        <p className="title-color">{data.adsNum}</p>
      </div>
      <div className="text-sm text-center">
        <p className="text-gray">{t("Followers")}</p>
        <p className="title-color">{data.adsNum}</p>
      </div>
      <div className="text-sm text-center">
        <p className="text-gray">{t("What he follows")}</p>
        <p className="title-color">{data.adsNum}</p>
      </div>
    </div>
  );
};

export default Info;
