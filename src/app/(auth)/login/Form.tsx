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
  // const t = useTranslations();
  // const phoneSchema = getPhoneSchema(t);
  // const router = useRouter();
  // const dispatch = useAppDispatch();
  // const { loading, error, message } = useAppSelector((state) => state.phone);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<PhoneSchemaType>({
  //   resolver: zodResolver(phoneSchema),
  // });

  // const onSubmit = async (data: { phone: string }) => {
  //   try {
  //     const resultAction = await dispatch(sendPhoneNumber(data.phone));

  //     if (sendPhoneNumber.fulfilled.match(resultAction)) {
  //       const payload = resultAction.payload as { message: string };
  //       toast.success(payload.message);
  //       router.replace(`/verify?phone=${data.phone}`);
  //     } else {
  //       toast.error(
  //         (resultAction.payload as string) || t("Something went wrong")
  //       );
  //     }
  //   } catch (err) {
  //     toast.error(t("Something went wrong"));
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div
        className={cn(
          "flex items-center gap-3 rounded bg-[#F4F4F4] px-4 py-[17px]",
          errors.phone && "border border-red-700"
        )}
      >
        <div className="w-5 h-5 relative">
          <Image
            src={mobile}
            alt="phone-icon"
            loading="lazy"
            fill
            className="object-contain"
            sizes="20px"
          />
        </div>
        <input
          type="number"
          {...register("phone")}
          placeholder={t("mobile_num")}
          className={cn("grow")}
        />
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
