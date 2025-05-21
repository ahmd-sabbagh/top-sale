import { AddAdsBtn, Footer, MobileFooter, Subscription } from "@/components";
import Sections from "@/components/navbar/sections/Sections";
import { getLocale } from "next-intl/server";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const layout = async ({ children }: Props) => {
  const locale = await getLocale();
  return (
    <>
      <Sections />
      <main className="min-h-[403px] main_main mb-[123px] md:mb-0">
        {children}
        <Subscription />
        <AddAdsBtn />
      </main>
      <Footer />
      <MobileFooter lang={locale} />
    </>
  );
};

export default layout;
