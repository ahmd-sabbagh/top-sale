"use client";
import { mobile } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SnipperButton } from "@/components";
import { usePhoneForm } from "@/hooks/usePhoneForm";

const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    t,
    loading,
  } = usePhoneForm({
    onSuccess: (phone) => {
      router.replace(`/verify?phone=${phone}`);
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div
        dir="ltr"
        className={cn(
          "flex items-center gap-3 rounded bg-[#F4F4F4] px-4 py-[17px]",
          errors.phone && "border border-red-700"
        )}
      >
        <div className="w-5 h-5 relative">
          <Image
            src={mobile}
            alt="phone-icon"
            fill
            className="object-contain"
            sizes="20px"
            priority
          />
        </div>
        <div className="grow flex items-center gap-1">
          <p className="text-sm text-gray-500">+974</p>
          <input
            type="tel"
            maxLength={8}
            {...register("phone")}
            placeholder={t("mobile_num")}
            className={cn("grow")}
          />
        </div>
      </div>

      {errors.phone && (
        <p className="text-sm mt-1 text-red-700">{errors.phone.message}</p>
      )}

      <button
        type="submit"
        className="py-[17px] bg-main block w-full text-sm text-white rounded mt-4"
      >
        {loading ? <SnipperButton /> : t("Login")}
      </button>
    </form>
  );
};

export default Form;
