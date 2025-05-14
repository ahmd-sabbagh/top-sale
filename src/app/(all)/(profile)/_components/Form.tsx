"use client";
import { BottomSheet, List } from "@/components";
import { useClickOutside } from "@/hooks/useOutsideClick";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import EditPasswordForm from "./EditPasswordFormSheet";

const Form = () => {
  const t = useTranslations();
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpenMenu(false);
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="mt-4">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="title-color">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t("name")}
              className="px-4 h-[50px] rounded border border-color"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="title-color">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t("email")}
              className="px-4 h-[50px] rounded border border-color"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="phone" className="title-color">
              {t("phone")}
            </label>
            <input
              type="number"
              id="phone"
              placeholder={t("phone")}
              className="px-4 h-[50px] rounded border border-color"
            />
          </div>
          <button
            type="submit"
            className="h-[50px] md:h-14 bg-main flex-c font-medium text-white rounded"
          >
            {t("save")}
          </button>
          {/* Edit Password */}
          <div className="md:hidden">
            <div className="title-color">{t("password")}</div>
            <button
              type="button"
              className="p-[14px] ps-4  bg-[#B027701A] flex w-full justify-between items-center rounded mt-3"
              onClick={() => setOpenMenu(true)}
            >
              <span className="text-main text-sm">{t("edit password")}</span>
              <span className="block ltr:rotate-180 text-main">
                <IoIosArrowBack />
              </span>
            </button>
          </div>
          {/* Delete Account */}
          <button
            type="button"
            className="block w-fit mx-auto text-red text-sm"
          >
            {t("delete account")}
          </button>
        </form>
      </div>
      {/* Edit Password */}
      <BottomSheet open={openMenu} Ref={ref} height="h-[455px]">
        <EditPasswordForm setState={setOpenMenu} />
      </BottomSheet>
    </>
  );
};

export default Form;
