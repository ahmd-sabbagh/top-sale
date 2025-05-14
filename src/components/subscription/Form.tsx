"use client"
import { useTranslations } from "next-intl";
import React, { FormEvent } from "react";

const Form = () => {
  const t = useTranslations();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="grow">
      <p className="title-color text-sm">
        {t("You can unsubscribe at any time")}
      </p>
      <form onSubmit={onSubmit} className="flex items-center gap-2 mt-4">
        <input
          type="email"
          placeholder={t("Enter your email")}
          className="px-4 py-3 bg-white rounded grow"
        />
        <button
          type="submit"
          className="py-[11px] px-[25px] bg-main text-white rounded text-sm font-medium block"
        >
          {t("subscription")}
        </button>
      </form>
    </div>
  );
};

export default Form;
