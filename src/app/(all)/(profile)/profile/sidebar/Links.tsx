"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Links = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const links = [
    {
      name: t("Edit profile"),
      href: isMobile ? "/profile-edit" : "/profile",
    },
    {
      name: t("Modify password"),
      href: "/profile/edit-password",
    },
    {
      name: t("my_adds"),
      href: isMobile ? "/my-ads" : "/profile/my-ads",
    },
    {
      name: t("fav"),
      href: isMobile ? "/favorites" : "/profile/favorites",
    },
    {
      name: t("notification"),
      href: "/profile/notification",
    },
  ];
  return (
    <div className="flex flex-col">
      {links.map((link, idx) => (
        <Link
          href={link.href}
          key={idx}
          className={`mt-4 p-4  justify-between items-center duration-500 border-color hover:bg-[#FAF0F6] rtl:hover:-translate-x-1 ltr:hover:translate-x-1 ${
            pathname === link.href
              ? "md:bg-[#FAF0F6] md:rounded-lg border-b md:border-b-0"
              : "border-b"
          } ${
            link.href === "/profile/notification" ||
            link.href === "/profile/edit-password"
              ? "hidden md:flex"
              : "flex"
          } `}
        >
          <span className="title-color">{link.name}</span>
          <span className="block ltr:rotate-180 text-main">
            <IoIosArrowBack />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Links;
