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
  runtimeCaching: [
    {
      urlPattern: /^\/$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 24 * 60 * 60,
        },
        networkTimeoutSeconds: 20,
      },
    },
  ],
});

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {};

export default withNextIntl(withPWA(nextConfig));
