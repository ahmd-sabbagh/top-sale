import { useTranslations } from "next-intl";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const Logout = () => {
  const t = useTranslations();
  return (
    <button className="block md:w-full md:text-start md:p-4 md:mt-4 text-red">
      <span className="hidden md:block">{t("logout")}</span>
      <span className="md:hidden text-2xl block rtl:rotate-180">
        <HiOutlineLogout />
      </span>
    </button>
  );
};

export default Logout;
