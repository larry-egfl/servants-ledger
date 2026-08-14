import Link from "next/link";
import type { Locale } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { getMessages } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">{siteConfig.shortName}</div>
          <p>{t.footerTagline}</p>
        </div>
        <div className="footer-links">
          <Link href={`/${locale}/guides`}>{t.navGuides}</Link>
          <Link href={`/${locale}/methodology`}>{t.navMethod}</Link>
          <a href={siteConfig.officialGameUrl}>Steam</a>
        </div>
        <p className="fine-print">{t.sourceNote}<br />Servant of the Lake and related marks belong to Rusty Lake.</p>
      </div>
    </footer>
  );
}
