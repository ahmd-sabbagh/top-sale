import { AddAdsBtn, Footer, MobileFooter, Subscription } from "@/components";
import Sections from "@/components/navbar/sections/Sections";
import { getLocale } from "next-intl/server";
import React from "react";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
}
