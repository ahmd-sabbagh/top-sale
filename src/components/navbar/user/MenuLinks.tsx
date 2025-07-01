import { useAuth } from "@/app/context/AuthContext";
import { deleteCookie } from "cookies-next/client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface Props {
  setState: (value: boolean) => void;
}

const MenuLinks = ({ setState }: Props) => {
  const t = useTranslations();
  const router = useRouter()
  const { token } = useAuth();
  const { setToken } = useAuth();

  const links = [
    {
      name: t("my_profile"),
      href: "/profile",
    },
    {
      name: t("Edit profile"),
      href: "/profile",
    },
    {
      name: t("my_adds"),
      href: "/profile/my-ads",
    },
    {
      name: t("fav"),
      href: "/favorites",
    },
    {
      name: t("notification"),
      href: "/profile/notification",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {links.map((link, idx) => (
        <Link
          href={link.href}
          className="flex item-center justify-between p-4 border-b border-color ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
          key={idx}
          onClick={() => setState(false)}
        >
          <span className="title-color">{link.name}</span>
          <span className="text-main text-xl ltr:rotate-180">
            <MdOutlineKeyboardArrowLeft />
          </span>
        </Link>
      ))}
      {token ? (
        <button
          className="block w-full px-4 py-[10px] text-[#CA4146] text-start"
          onClick={() => {
            deleteCookie("token");
            router.refresh();
            setToken(null)
            setState(false)
          }}
        >
          {t("logout")}
        </button>
      ) : (
        <Link
          href={"/login"}
          className="block w-full px-4 py-[10px] text-[#CA4146] text-start"
          onClick={() => setState(false)}
        >
          {t("login")}
        </Link>
      )}
    </div>
  );
};

export default MenuLinks;
