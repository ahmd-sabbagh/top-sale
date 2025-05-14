import { SubLinks } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";
import Names from "./_components/Names";
import ChatContainer from "./_components/ChatContainer";

const MessagesPage = () => {
  const t = useTranslations();
  const sublinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("messages"),
      href: "/",
    },
  ];
  return (
    <>
      <SubLinks links={sublinks} />
      <section className="pt-2 md:pt-10">
        <div className="container relative overflow-hidden">
          <div className="grid md:grid-cols-3 md:gap-6 lg:gap-[57px]">
            <Names />
            <div className="md:col-span-2">
              <ChatContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessagesPage;
