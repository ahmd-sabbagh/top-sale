import { mobile } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FormEvent } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  handleOpenList: (listName: "userMenu" | "language" | "login" | "verify") => void;
};

const Login = ({ handleOpenList }: Props) => {
  const t = useTranslations();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleOpenList("verify")
  };
  return (
    <div>
      {/* Head */}
      <div className="flex justify-between items-center p-4 border-b border-color">
        <h4 className="title-color text-base">{t("Login")}</h4>
        <button
          type="button"
          className="text-main text-lg"
          onClick={() => handleOpenList("login")}
        >
          <IoClose />
        </button>
      </div>
      {/* body */}
      <div className="p-4">
        <p className="title-color text-sm">{t("login desc")}</p>
        <form onSubmit={onSubmit} className="mt-4">
          <div className="flex items-center gap-3 rounded bg-[#F4F4F4] px-4 py-[17px]">
            <div>
              <Image src={mobile} alt="phone-icon" loading="lazy" />
            </div>
            <input
              type="number"
              placeholder={t("mobile_num")}
              className="grow"
            />
          </div>
          <button
            type="submit"
            className="py-[17px] bg-main block w-full text-sm text-white rounded mt-4"
          >
            {t("Login")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
