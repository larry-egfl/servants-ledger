const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const siteConfig = {
  name: "The Servant's Ledger",
  shortName: "Servant's Ledger",
  description:
    "A source-checked, spoiler-aware Servant of the Lake walkthrough and puzzle guide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000"),
  officialGameUrl: "https://store.steampowered.com/app/3636770/Servant_of_the_Lake/",
  updated: "2026-08-13",
};

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
