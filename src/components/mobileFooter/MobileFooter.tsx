"use client";
import {
  adds_icon,
  adds_icon_color,
  departments_icon,
  departments_icon_color,
  fav_icon,
  fav_icon_color,
  home_icon,
  home_icon_color,
  more_icon,
  red_heart,
} from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
import MoreMenue from "./listes/MoreMenue";
import List from "./listes/List";
import CheckBox from "../checkBox/CheckBox";
import Login from "./listes/Login";
import Verify from "./listes/Verify";
interface Props {
  lang: string;
}
const MobileFooter = ({ lang }: Props) => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const links = [
    {
      icon: home_icon,
      icon_color: home_icon_color,
      href: "/",
      name: t("home"),
      type: "link",
    },
    {
      icon: departments_icon,
      icon_color: departments_icon_color,
      href: "/departments",
      name: t("departments"),
      type: "link",
    },
    {
      icon: adds_icon,
      icon_color: adds_icon_color,
      href: "/my-ads",
      name: t("my_adds"),
      type: "link",
    },
    {
      icon: fav_icon,
      icon_color: red_heart,
      href: "/favorites",
      name: t("fav"),
      type: "link",
    },
    {
      icon: more_icon,
      icon_color: fav_icon_color,
      href: "/favorites",
      name: t("more"),
      type: "button",
    },
  ];
  const [listsState, setListsState] = useState({
    userMenu: false,
    language: false,
    login: false,
    verify: false,
  });
  const handleOpenList = (listName: keyof typeof listsState) => {
    setListsState((prev) => {
      const isCurrentlyOpen = prev[listName];

      if (isCurrentlyOpen) {
        return Object.fromEntries(
          Object.keys(prev).map((key) => [key, false])
        ) as typeof listsState;
      } else {
        const updatedState = Object.fromEntries(
          Object.keys(prev).map((key) => [key, false])
        ) as typeof listsState;
        return {
          ...updatedState,
          [listName]: true,
        };
      }
    });
  };
  // language change
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCookie("NEXT_LOCALE", event.target.value);
    setTimeout(() => {
      router.refresh();
    }, 50);
    handleOpenList("language");
  };
  // close menu
  const userMenu = useRef<HTMLDivElement>(null);
  const language = useRef<HTMLDivElement>(null);
  const login = useRef<HTMLDivElement>(null);
  const verify = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const menuUserHandler = (e: any) => {
      if (
        !userMenu?.current?.contains(e.target) &&
        !language?.current?.contains(e.target) &&
        !login?.current?.contains(e.target) &&
        !verify?.current?.contains(e.target)
      ) {
        setListsState({
          userMenu: false,
          language: false,
          login: false,
          verify: false,
        });
      }
    };
    document.addEventListener("mousedown", menuUserHandler);
    return () => {
      document.removeEventListener("mousedown", menuUserHandler);
    };
  }, []);
  return (
    <section
      className="md:hidden pt-[17px] pb-[25px] fixed bottom-0 start-0 w-full bg-white"
      style={{ boxShadow: "0px 0px 20px #00000026",zIndex:"1000" }}
    >
      <div className="container">
        <div className="flex justify-between items-center gap-2">
          {links.map((item, idx) =>
            item.type === "link" ? (
              <Link
                key={idx}
                href={item.href}
                className={`flex flex-col items-center text-sm gap-[7px] ${
                  pathname === item.href ? "text-main" : "text-gray"
                } `}
              >
                <div>
                  {pathname !== item.href ? (
                    <Image src={item.icon} alt="home-icon" priority />
                  ) : (
                    <Image src={item.icon_color} alt="home-icon" priority />
                  )}
                </div>
                <p className="line-clamp-1">{item.name}</p>
              </Link>
            ) : (
              <button
                key={idx}
                className="flex flex-col items-center text-sm gap-[7px] text-gray"
                onClick={() => handleOpenList("userMenu")}
              >
                <div>
                  <Image src={item.icon} alt="home-icon" priority />
                </div>
                <p className="line-clamp-1">{item.name}</p>
              </button>
            )
          )}
        </div>
      </div>
      {/* User Menu */}
      <List
        Ref={userMenu}
        hight="424"
        state={listsState.userMenu}
        onClose={() => setListsState((prev) => ({ ...prev, userMenu: false }))}
      >
        <MoreMenue handleOpenList={handleOpenList} />
      </List>
      {/* language */}
      <List
        Ref={language}
        hight="155"
        state={listsState.language}
        onClose={() => setListsState((prev) => ({ ...prev, language: false }))}
      >
        <div className="p-4">
          <div className="p-4 border-b border-color">
            <CheckBox
              lang={lang}
              title="العربية"
              item="ar"
              onChange={onChange}
            />
          </div>
          <div className="p-4">
            <CheckBox
              lang={lang}
              title="English"
              item="en"
              onChange={onChange}
            />
          </div>
        </div>
      </List>
      {/* Login */}
      <List
        Ref={login}
        hight="275"
        state={listsState.login}
        onClose={() => setListsState((prev) => ({ ...prev, login: false }))}
      >
        <Login handleOpenList={handleOpenList} />
      </List>
      {/* Verify */}
      <List
        Ref={verify}
        hight="275"
        state={listsState.verify}
        onClose={() => setListsState((prev) => ({ ...prev, verify: false }))}
      >
        <Verify handleOpenList={handleOpenList} />
      </List>
    </section>
  );
};

export default MobileFooter;