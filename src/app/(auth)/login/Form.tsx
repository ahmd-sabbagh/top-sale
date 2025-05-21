"use client";
import { logo, mobile } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const Form = () => {
  const t = useTranslations();
  const router = useRouter();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.replace("/verify");
  };
  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="flex items-center gap-3 rounded bg-[#F4F4F4] px-4 py-[17px]">
        <div>
          <Image src={mobile} alt="phone-icon" loading="lazy" />
        </div>
        <input type="number" placeholder={t("mobile_num")} className="grow" />
      </div>
      <button
        type="submit"
        className="py-[17px] bg-main block w-full text-sm text-white rounded mt-4"
      >
        {t("Login")}
      </button>
    </form>
  );
};

export default Form;
