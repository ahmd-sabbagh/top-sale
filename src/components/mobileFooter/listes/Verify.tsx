import Otp from "@/components/otp/Otp";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { IoClose } from "react-icons/io5";

type Props = {
  handleOpenList: (
    listName: "userMenu" | "language" | "login" | "verify"
  ) => void;
};

const Verify = ({ handleOpenList }: Props) => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";
  const router = useRouter();

  return (
    <div>
      {/* Head */}
      <div className="flex justify-between items-center p-4 border-b border-color">
        <h4 className="title-color text-base">{t("Login")}</h4>
        <button
          type="button"
          className="text-main text-lg"
          onClick={() => handleOpenList("verify")}
        >
          <IoClose />
        </button>
      </div>
      {/* Body */}
      <div className="p-4">
        <div className="title-color text-sm flex flex-col gap-1">
          <p>{t("verify desc")}</p>
          <p>{phone}</p>
        </div>
        <Otp
          phone={phone}
          onSuccess={() => {
            handleOpenList("verify");
          }}
        />
      </div>
    </div>
  );
};

export default Verify;
