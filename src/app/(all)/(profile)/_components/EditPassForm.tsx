"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { CgLock } from "react-icons/cg";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";

const EditPassForm = () => {
  const t = useTranslations();
  const [showPass, setShowPass] = useState({
    pass: false,
    newPass: false,
    confirmNewPass: false,
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {/* new password */}
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="title-color">
            {t("password")}
          </label>
          <div className="h-[50px] border border-color rounded flex items-center gap-[3px] px-[13px]">
            <span className="text-gray block w-5 h-5 flex-c">
              <CgLock />
            </span>
            <input
              id="password"
              type={showPass.pass ? "text" : "password"}
              placeholder={t("password")}
              className="flex-grow"
            />
            <button
              type="button"
              className="text-xl text-[#9E9E9E]"
              onClick={() =>
                setShowPass((prev) => ({
                  ...prev,
                  pass: !prev.pass,
                }))
              }
            >
              {showPass.pass ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        {/* new password */}
        <div className="flex flex-col gap-3">
          <label htmlFor="newPassword" className="title-color">
            {t("new password")}
          </label>
          <div className="h-[50px] border border-color rounded flex items-center gap-[3px] px-[13px]">
            <span className="text-gray block w-5 h-5 flex-c">
              <CgLock />
            </span>
            <input
              id="newPassword"
              type={showPass.newPass ? "text" : "password"}
              placeholder={t("new password")}
              className="flex-grow"
            />
            <button
              type="button"
              className="text-xl text-[#9E9E9E]"
              onClick={() =>
                setShowPass((prev) => ({
                  ...prev,
                  newPass: !prev.newPass,
                }))
              }
            >
              {showPass.newPass ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        {/* confirm new password */}
        <div className="flex flex-col gap-3">
          <label htmlFor="confirmNewPassword" className="title-color">
            {t("confirm new password")}
          </label>
          <div className="h-[50px] border border-color rounded flex items-center gap-[3px] px-[13px]">
            <span className="text-gray block w-5 h-5 flex-c">
              <CgLock />
            </span>
            <input
              id="confirmNewPassword"
              type={showPass.confirmNewPass ? "text" : "password"}
              placeholder={t("confirm new password")}
              className="flex-grow"
            />
            <button
              type="button"
              className="text-xl text-[#9E9E9E]"
              onClick={() =>
                setShowPass((prev) => ({
                  ...prev,
                  confirmNewPass: !prev.confirmNewPass,
                }))
              }
            >
              {showPass.confirmNewPass ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
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

export default EditPassForm;
