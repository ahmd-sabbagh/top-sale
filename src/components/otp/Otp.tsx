"use client";
import React from "react";
import { useOtpForm } from "@/hooks/useOtpForm";
import SnipperButton from "@/components/sniperBtn/SniperBtn";
import { useTranslations } from "next-intl";

const Otp = ({
  phone,
  onSuccess,
}: {
  phone: string;
  onSuccess?: () => void;
}) => {
  const t = useTranslations();
  const {
    otp,
    loading,
    error,
    inputRef,
    activeOTPIndex,
    handleChange,
    handleKeyDown,
    onSubmit,
  } = useOtpForm({ phone, onSuccess });

  return (
    <form onSubmit={onSubmit} className="verify-otp mt-4">
      <div className="grid grid-cols-4 items-center gap-6 justify-between" dir="ltr">
        {otp.map((val, index) => (
          <input
            key={index}
            ref={index === activeOTPIndex ? inputRef : null}
            type="number"
            value={val}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`text-center !w-auto ${error ? "valdiation-error" : ""}`}
          />
        ))}
      </div>
      <button
        type="submit"
        className="py-[17px] bg-main block w-full text-sm text-white rounded mt-4"
      >
        {loading ? <SnipperButton /> : t("Login")}
      </button>
    </form>
  );
};

export default Otp;
