import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const ContactUs = () => {
  const t = useTranslations();
  return (
    <div>
      <h3 className="title-color text-lg font-medium">{t("contact_us")}</h3>
      <div className="flex flex-col gap-2 mt-4">
        <Link
          href="https://wa.me/201094201538"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A5A5A5] flex items-start gap-1 hover:text-[#B02770] hover:-translate-x-1 transition"
        >
          <div className="ltr:rotate-180 mt-2">
            <MdKeyboardDoubleArrowLeft />
          </div>
          <div>
            <div>{t("whatsapp")}</div>
            <p className="text-[#666666] ">00201094201538</p>
          </div>
        </Link>
        <Link
          href="tel:201094201538"
          className="text-[#A5A5A5] flex items-start gap-1 hover:text-[#B02770] hover:-translate-x-1 transition"
        >
          <div className="ltr:rotate-180 mt-2">
            <MdKeyboardDoubleArrowLeft />
          </div>
          <div>
            <div>{t("mobile")}</div>
            <p className="text-[#666666] ">00201094201538</p>
          </div>
        </Link>
        <Link
          href="mailto:example@email.com"
          className="text-[#A5A5A5] flex items-start gap-1 hover:!text-[#B02770] hover:-translate-x-1 transition"
        >
          <div className="ltr:rotate-180 mt-2">
            <MdKeyboardDoubleArrowLeft />
          </div>
          <div>
            <div>{t("mail")}</div>
            <p className="text-[#666666]">example@email.com</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
