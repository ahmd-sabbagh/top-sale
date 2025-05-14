import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Share from "./Share";
import Info from "./Info";

interface Props {
  image: StaticImageData | string;
  name: string;
  adsNum: number;
  followers: number;
  WhatHeFollows: number;
}

const SellerAdProfile = ({ image, name }: Props) => {
  const t = useTranslations();
  return (
    <div className="mb-6 md:mb-8">
      <div className="md:py-4 md:px-3 md:bg-[#FAF0F6] md:rounded-t-lg flex justify-between items-center">
        {/* Image */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <Image
              src={image}
              alt="profile-image"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <span className="text-sm text-gray">{t("account")}</span>
            <h3 className="title-color">{name}</h3>
          </div>
        </div>
        {/* Info */}
        <div className="grow max-w-[364px] hidden md:block">
          <Info />
        </div>
        {/* Share */}
        <Share />
      </div>
      <div className="md:hidden p-4 bg-[#F7E9F1AD] rounded mt-4">
        <Info />
      </div>
    </div>
  );
};

export default SellerAdProfile;
