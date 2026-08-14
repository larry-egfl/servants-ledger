"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === "en" ? "zh" : "en";
  const target = pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${other}`);
  return (
    <Link className="language-switch" href={target || `/${other}`} aria-label={locale === "en" ? "切换到中文" : "Switch to English"}>
      {locale === "en" ? "中文" : "EN"}
    </Link>
  );
}
