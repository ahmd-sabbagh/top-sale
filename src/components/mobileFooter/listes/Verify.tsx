import { useTranslations } from "next-intl";
import { IoClose } from "react-icons/io5";
import Otp from "./Otp";

type Props = {
  handleOpenList: (
    listName: "userMenu" | "language" | "login" | "verify"
  ) => void;
};

const Verify = ({ handleOpenList }: Props) => {
  const t = useTranslations();
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
          <p>{"01094201538"}</p>
        </div>
        <Otp />
      </div>
    </div>
  );
};

export default Verify;
