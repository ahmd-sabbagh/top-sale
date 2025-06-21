import { getPhoneSchema, PhoneSchemaType } from "@/schema/phoneSchema";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { sendPhoneNumber } from "@/rtk/features/phoneSlice";

type UsePhoneFormProps = {
  onSuccess?: (phone: string, message: string) => void;
};

export const usePhoneForm = ({ onSuccess }: UsePhoneFormProps = {}) => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const phoneSchema = getPhoneSchema(t);

  const form = useForm<PhoneSchemaType>({
    resolver: zodResolver(phoneSchema),
  });

  const { loading, error, message } = useAppSelector((state) => state.phone);
  const { reset } = form;

  const onSubmit = async (data: { phone: string }) => {
    try {
      const resultAction = await dispatch(sendPhoneNumber(data.phone));

      if (sendPhoneNumber.fulfilled.match(resultAction)) {
        const payload = resultAction.payload as { message: string };
        toast.success(payload.message);
        reset();

        if (onSuccess) {
          onSuccess(data.phone, payload.message);
        }
      } else {
        toast.error(resultAction.payload as string);
      }
    } catch (err) {
      toast.error(t("Something went wrong"));
    }
  };

  return {
    ...form,
    onSubmit,
    loading,
    error,
    message,
    t,
  };
};
