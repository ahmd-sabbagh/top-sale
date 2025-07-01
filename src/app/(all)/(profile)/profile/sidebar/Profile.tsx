import { profile } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Logout from "./Logout";

const Profile = () => {
  const t = useTranslations();
  return (
    <div className="flex md:block items-center justify-between pb-4 border-b border-color">
      <div className="flex items-center gap-2 ">
        <div className="w-10 h-10 rounded-full overflow-hidden relative">
          <Image
            src={profile}
            alt="profile image"
            fill
            loading="lazy"
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <span className="text-gray text-sm">{t("account")}</span>
          <p className="title-color">{"محمد عبدالجليل"}</p>
        </div>
      </div>
      <div className="md:hidden">
        <Logout />
      </div>
    </div>
  );
};

export default Profile;
