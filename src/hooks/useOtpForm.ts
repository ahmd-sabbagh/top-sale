import { useEffect, useRef, useState, ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { verifyOtp } from "@/rtk/features/otpSlice";
import { setCookie } from "cookies-next";
import { useAuth } from "@/app/context/AuthContext";

let currentOTPIndex = 0;

type UseOtpFormProps = {
  phone: string;
  onSuccess?: () => void;
};

export const useOtpForm = ({ phone, onSuccess }: UseOtpFormProps) => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setToken } = useAuth();
  const { loading, error } = useAppSelector((state) => state.otp);

  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[currentOTPIndex] = value.slice(-1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    setOtp(newOtp);
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(index - 1);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpStr = otp.join("");
    try {
      const result = await dispatch(
        verifyOtp({ code: otpStr, mobile: "+974" + phone })
      );

      if (verifyOtp.fulfilled.match(result)) {
        const token = result.payload.data.token;
        setCookie("token", token, { maxAge: 60 * 60 * 24 * 7 });
        setToken(token);
        toast.success(t("phone_sent_success"));
        setOtp(new Array(4).fill(""));
        onSuccess ? onSuccess() : router.replace("/");
      } else {
        toast.error(result.payload as string);
      }
    } catch {
      toast.error(t("Something went wrong"));
    }
  };

  return {
    otp,
    loading,
    error,
    inputRef,
    activeOTPIndex,
    handleChange,
    handleKeyDown,
    onSubmit,
  };
};
