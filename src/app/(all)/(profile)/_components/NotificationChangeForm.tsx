"use client";

import { CheckBox } from "@/components";
import { toggleBooleanString } from "@/utils/toggleBooleanString";
import { useTranslations } from "next-intl";
import { useState } from "react";

const NotificationChangeForm = () => {
  const [noti, setNoti] = useState<string | boolean>(true);
  const t = useTranslations();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = toggleBooleanString(event.target.value);
    setNoti(value);
  };
  return (
    <form className="flex flex-col gap-4">
      <div className="py-4 border-b border-color pe-4">
        <CheckBox
          lang={toggleBooleanString(noti)}
          title={t("activation")}
          item="true"
          onChange={onChange}
        />
      </div>
      <div className="py-4 border-b border-color pe-4">
        <CheckBox
          lang={toggleBooleanString(noti)}
          title={t("stoped")}
          item="false"
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="h-[50px] md:h-14 bg-main flex-c font-medium text-white rounded"
      >
        {t("save")}
      </button>
    </form>
  );
};

export default NotificationChangeForm;
