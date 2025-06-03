import type { Metadata } from "next";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import { Navbar } from "@/components";
import MainProvider from "@/rtk/MainProvider";

const din_next = localFont({
  src: [
    { path: "../fonts/ArbFONTS-DINNextLTArabic-Black-4.woff", weight: "900" },
    { path: "../fonts/ArbFONTS-DINNextLTArabic-Heavy2-2.woff", weight: "800" },
    { path: "../fonts/ArbFONTS-DINNextLTArabic-Bold-4.woff", weight: "700" },
    { path: "../fonts/ArbFONTS-DINNextLTArabic-Medium-4.woff", weight: "500" },
    { path: "../fonts/ArbFONTS-DINNextLTArabic-Regular-4.woff", weight: "400" },
    { path: "../fonts/ArbFONTS-DINNEXTLTARABIC-LIGHT-2-2.woff", weight: "300" },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-UltraLight-4.woff",
      weight: "200",
    },
  ],
});

export const metadata: Metadata = {
  title: "Top Seal",
  description:
    "A classified ads platform that allows you to easily and securely buy and sell everything you need, from cars and real estate to electronics and various products, with the ability for direct communication between the buyer and seller.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* iOS splash screen setup */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Top Seal" />
        {/* أيقونة التطبيق لـ iOS */}
        <link rel="apple-touch-icon" href="/icons/512.png" />
      </head>
      <body className={`${din_next.className} antialiased relative`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <MainProvider lang={locale}>{children}</MainProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
