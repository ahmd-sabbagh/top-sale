"use client";
import { user } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Menu from "../../menu/Menu";
import MenuLinks from "./MenuLinks";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const User = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const { token } = useAuth();
  const router = useRouter()

  // ref
  const userButtonRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const menuUserHandler = (e: any) => {
      if (
        !userButtonRef?.current?.contains(e.target) &&
        !userMenuRef?.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", menuUserHandler);

    return () => {
      document.removeEventListener("mousedown", menuUserHandler);
    };
  }, []);
  // open Menu
  const openMenuHandler = () => {
    if (token) {
      setOpen(!open);
    }else{
      router.replace('/login')
    }
  };
  return (
    <div className="hidden md:flex items-center gap-2 relative">
      <div className="flex-c w-10 h-10 rounded-full bg-[#ABABAB21]">
        <Image src={user} alt="notification-icon" loading="lazy" />
      </div>
      <div>
        <p className="text-sm text-gray">{t("welcom")}</p>
        <button
          type="button"
          className="flex items-end gap-1"
          ref={userButtonRef}
          onClick={openMenuHandler}
        >
          <p className="title-color text-sm lg:text-base">
            {token ? t("my_profile") : t("login")}
          </p>
          <div className={`transition ${open ? "rotate-180" : ""}`}>
            <IoIosArrowUp />
          </div>
        </button>
      </div>
      {open && (
        <Menu ref={userMenuRef} style="w-[311px]">
          <MenuLinks setState={setOpen} />
        </Menu>
      )}
    </div>
  );
};

export default User;
