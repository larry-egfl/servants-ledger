import Link from "next/link";
import { BookOpenText, ExternalLink } from "lucide-react";
import type { Locale } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { getMessages } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href={`/${locale}`}>
          <span className="brand-mark"><BookOpenText aria-hidden="true" /></span>
          <span><b>{siteConfig.shortName}</b><small>EST. 1891 / REOPENED 2026</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href={`/${locale}/guides`}>{t.navGuides}</Link>
          <Link href={`/${locale}/methodology`}>{t.navMethod}</Link>
          <a className="official-link" href={siteConfig.officialGameUrl} target="_blank" rel="noreferrer">
            {t.official}<ExternalLink aria-hidden="true" />
          </a>
          <LanguageSwitch locale={locale} />
        </nav>
      </div>
    </header>
  );
}
