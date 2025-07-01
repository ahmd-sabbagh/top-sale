"use client";
import { useAuth } from "@/app/context/AuthContext";
import {
  language_menu,
  logout,
  note,
  notification_menu,
  profile,
  star,
  user_color,
  user_menu,
} from "@/assets";
import { deleteCookie } from "cookies-next/client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowUp } from "react-icons/io";
type MoreMenuProps = {
  handleOpenList: (
    listName: "userMenu" | "language" | "login" | "verify"
  ) => void;
};

const MoreMenue = ({ handleOpenList }: MoreMenuProps) => {
  const t = useTranslations();
  const { token } = useAuth();
  const { setToken } = useAuth();
  const router = useRouter()
  return (
    <div>
      {/* Head */}
      <div className="flex justify-between items-center p-4 border-b border-color">
        <div className="flex items-center gap-2">
          {token ? (
            <div className="w-10 h-10 rounded-full overflow-hidden relative">
              <Image
                src={user_color}
                alt="profile-image"
                loading="lazy"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full flex-c bg-[#EEEEEE]">
              <Image
                src={user_color}
                alt="profile-icon"
                loading="lazy"
                sizes="40px"
              />
            </div>
          )}

          <div className="text-sm">
            <p className="text-gray">{t("welcom")}</p>
            <p className="title-color">
              {token ? t("my_profile") : t("visitor")}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex-c w-6 h-6 text-main text-lg rotate-180"
          onClick={() => handleOpenList("userMenu")}
        >
          <IoIosArrowUp />
        </button>
      </div>
      {/* Links */}
      <div>
        {/* profile */}
        {token && (
          <Link
            href={"/profile"}
            className="flex items-center gap-2 p-4"
            onClick={() => handleOpenList("userMenu")}
          >
            <div>
              <Image src={user_menu} alt="user-icon" loading="lazy" />
            </div>
            <p className="title-color">{t("my_profile")}</p>
          </Link>
        )}
        {/* language */}
        <button
          type="button"
          className="w-full flex items-center gap-2 p-4"
          onClick={() => handleOpenList("language")}
        >
          <div>
            <Image src={language_menu} alt="user-icon" loading="lazy" />
          </div>
          <p className="title-color">{t("language")}</p>
        </button>
        {/* notification */}
        <Link
          href={"/notification"}
          className="flex items-center gap-2 p-4"
          onClick={() => handleOpenList("userMenu")}
        >
          <div>
            <Image src={notification_menu} alt="user-icon" loading="lazy" />
          </div>
          <p className="title-color">{t("notification")}</p>
        </Link>
        {/* who we are */}
        <Link
          href={"/about-us"}
          className="flex items-center gap-2 p-4"
          onClick={() => handleOpenList("userMenu")}
        >
          <div>
            <Image src={star} alt="user-icon" loading="lazy" />
          </div>
          <p className="title-color">{t("who_we_are")}</p>
        </Link>
        {/* privacy policy */}
        <Link
          href={"/privacy-policy"}
          className="flex items-center gap-2 p-4"
          onClick={() => handleOpenList("userMenu")}
        >
          <div>
            <Image src={note} alt="user-icon" loading="lazy" />
          </div>
          <p className="title-color">{t("privacy policy")}</p>
        </Link>
        {/* logout */}
        {token && (
          <button
            className="w-full flex items-center gap-2 p-4"
            onClick={() => {
              deleteCookie("token");
              router.refresh();
              setToken(null);
              handleOpenList("userMenu")
            }}
          >
            <div className="w-4 h-4 relative">
              <Image
                src={logout}
                alt="user-icon"
                fill
                loading="lazy"
                className="object-contain"
                sizes="16px"
              />
            </div>
            <p className="text-[#F55157]">{t("logout")}</p>
          </button>
        )}
        {/* Login */}
        {!token && (
          <div className="px-4 pb-4">
            <button
              type="button"
              className="py-[10px] border border-main-color block w-full text-sm text-main rounded"
              onClick={() => handleOpenList("login")}
            >
              {t("register")}
            </button>
            <button
              type="button"
              className="py-[10px] bg-main block w-full text-sm text-white rounded mt-4"
              onClick={() => handleOpenList("login")}
            >
              {t("login")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreMenue;
