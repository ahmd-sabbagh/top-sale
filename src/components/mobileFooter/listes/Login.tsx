import { mobile } from "@/assets";
import SnipperButton from "@/components/sniperBtn/SniperBtn";
import { usePhoneForm } from "@/hooks/usePhoneForm";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

type Props = {
  handleOpenList: (
    listName: "userMenu" | "language" | "login" | "verify"
  ) => void;
};

const Login = ({ handleOpenList }: Props) => {
  const pathname = usePathname();
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
      handleOpenList("verify");
      router.replace(`${pathname}?phone=${phone}`);
      router.refresh()
    },
  });
  return (
    <div>
      {/* Head */}
      <div className="flex justify-between items-center p-4 border-b border-color">
        <h4 className="title-color text-base">{t("Login")}</h4>
        <button
          type="button"
          className="text-main text-lg"
          onClick={() => handleOpenList("login")}
        >
          <IoClose />
        </button>
      </div>
      {/* body */}
      <div className="p-4">
        <p className="title-color text-sm">{t("login desc")}</p>
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
                fill
                loading="lazy"
                className="object-contain"
                sizes="20px"
              />
            </div>
            <input
              type="number"
              {...register("phone")}
              placeholder={t("mobile_num")}
              className="grow"
            />
          </div>
          <button
            type="submit"
            className="py-[17px] bg-main block w-full text-sm text-white rounded mt-4"
          >
            {loading ? <SnipperButton /> : t("Login")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
