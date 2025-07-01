import { chat_mail, whatsapp } from "@/assets";
import { OwnerAds } from "@/utils/dtos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Follow from "./Follow";

interface Props {
  data?: OwnerAds;
}

const Owner = ({ data }: Props) => {
  const t = useTranslations();
  return (
    <>
      {data && (
        <div className="mt-7">
          {/* Owner */}
          <div className="px-4 py-[22px] rounded border border-color flex items-center justify-between">
            <Link href={"/seller-ads"} className="flex items-center gap-3">
              {/* image */}
              <div className="w-[43px] h-[43px] overflow-hidden rounded-full relative">
                <Image
                  src={data.image}
                  alt="profile"
                  fill
                  className="object-cover"
                  sizes="43px"
                  loading="lazy"
                />
              </div>
              {/* name */}
              <div>
                <h3 className="font-medium title-color">{data.name}</h3>
                <p className="text-gray text-sm">{data.time}</p>
              </div>
            </Link>
            {/* Follow */}
            <Follow />
          </div>
          {/* Social */}
          <div className="flex items-center gap-6 mt-5 md:mt-6">
            {data?.whatsApp && (
              <Link
                href={`https://wa.me/${data.whatsApp}`}
                className="flex items-center gap-2 justify-center rounded grow py-3 md:py-4 bg-main"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <Image src={whatsapp} alt="whatsapp icon" loading="lazy" />
                </span>
                <span className="font-medium text-white">{t("whatsaap")}</span>
              </Link>
            )}

            <Link
              href={`/messages`}
              className="flex items-center gap-2 justify-center rounded grow py-3 md:py-4 bg-main"
            >
              <span>
                <Image src={chat_mail} alt="whatsapp icon" loading="lazy" />
              </span>
              <span className="font-medium text-white">{t("chat")}</span>
            </Link>

            {data?.mobile && (
              <Link
                href={`tel:${data.whatsApp}`}
                className="flex items-center gap-2 justify-center rounded grow py-3 md:py-4 bg-main"
              >
                <span>
                  <Image src={whatsapp} alt="whatsapp icon" loading="lazy" />
                </span>
                <span className="font-medium text-white">{t("calling")}</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Owner;
