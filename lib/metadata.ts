import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — Servant of the Lake Guide`, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Servant of the Lake Guide`,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
};
