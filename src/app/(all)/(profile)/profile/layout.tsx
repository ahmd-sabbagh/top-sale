import { useTranslations } from "next-intl";
import SideBar from "./sidebar/SideBar";
import { SubLinks } from "@/components";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("my_profile"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <section className="pt-2 md:pt-10">
        <div className="container">
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
            <SideBar />
            <div className="md:col-span-2 xl:col-span-3">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default layout;
