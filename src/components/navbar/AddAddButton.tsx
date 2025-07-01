import { useTranslations } from "next-intl";
import Link from "next/link";

import { GoPlus } from "react-icons/go";

const AddAddButton = () => {
  const t = useTranslations();
  return (
    <Link
      href={"/add-ads"}
      className="hidden md:flex items-center gap-2 md:px-2 lg:px-3 xl:px-4 py-[10px] rounded bg-main text-white"
    >
      <span>
        <GoPlus />
      </span>
      <p className="text-xs lg:text-sm">{t("add adds")}</p>
    </Link>
  );
};

export default AddAddButton;
