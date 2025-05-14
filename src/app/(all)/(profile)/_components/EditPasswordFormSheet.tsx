"use client";

import { useTranslations } from "next-intl";
import { IoClose } from "react-icons/io5";
import EditPassForm from "./EditPassForm";
interface Props {
  setState: (value: boolean) => void;
}

const EditPasswordForm = ({ setState }: Props) => {
  const t = useTranslations();
  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-color">
        <p className="title-color">{t("Modify password")}</p>
        <button
          type="button"
          className="text-xl flex-c text-main"
          onClick={() => setState(false)}
        >
          <IoClose />
        </button>
      </div>
      <div className="p-4">
        <EditPassForm />
      </div>
    </>
  );
};

export default EditPasswordForm;
