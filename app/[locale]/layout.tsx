import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";
import { baseMetadata } from "@/lib/metadata";
import { isLocale, locales } from "@/lib/site";
import "../globals.css";

export const metadata = baseMetadata;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body><SiteHeader locale={locale} /><main>{children}</main><SiteFooter locale={locale} /><Analytics /></body>
    </html>
  );
}
