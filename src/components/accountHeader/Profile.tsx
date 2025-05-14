import { profile } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Profile = () => {
  const t = useTranslations();
  return (
    <div className="flex items-center gap-2 ">
      <div className="w-10 h-10 rounded-full overflow-hidden relative">
        <Image
          src={profile}
          alt="profile image"
          fill
          loading="lazy"
          className="object-cover"
          sizes="40px"
        />
      </div>
      <div>
        <span className="text-gray text-sm">{t("account")}</span>
        <p className="title-color">{"محمد عبدالجليل"}</p>
      </div>
    </div>
  );
};

export default Profile;
