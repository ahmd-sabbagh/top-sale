import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline.html",
  },
});

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {};

export default withNextIntl(withPWA(nextConfig));
