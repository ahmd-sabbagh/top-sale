"use client";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

let currentOTPIndex: number = 0;
const Otp: FC = () => {
  const t = useTranslations();
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const [error, setError] = useState(false);

  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOtp);
  };
  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);
  // Time
  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };
  useEffect(() => {
    //interval
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    //interval
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);
  // submit
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace("/")
  };
  return (
    <>
      <form onSubmit={onSubmit} className="verify-otp mt-4">
        <div className="grid grid-cols-5 items-center gap-6 justify-between">
          {otp.map((_, index) => {
            return (
              <input
                key={index}
                ref={index === activeOTPIndex ? inputRef : null}
                type="number"
                onChange={handleChange}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                className={`text-center !w-auto  ${
                  error ? "valdiation-error" : ""
                }`}
                // className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                value={otp[index]}
              />
            );
          })}
        </div>
        <button
          type="submit"
          className="py-[17px] bg-main block w-full text-sm text-white rounded mt-4"
        >
          {t("Login")}
        </button>
      </form>
    </>
  );
};

export default Otp;
