import { login_bg, logo } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const Cont = ({ children }: Props) => {
  const t = useTranslations();
  return (
    <section
      className="min-h-[calc(100vh-118px)] bg-cover bg-center flex-c px-4"
      style={{ backgroundImage: `url(${login_bg.src})` }}
    >
      <div className="bg-white rounded max-w-[428px]">
        <div className="relative w-[200px] h-[38px] mx-auto mt-8">
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-contain"
            sizes="200px"
            priority
          />
        </div>
        <h4 className=" p-4 text-xl text-center title-color">{t("Login")}</h4>
        <div className="p-4 border-t border-color">
          <p className="title-color text-sm">{t("login desc")}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Cont;
