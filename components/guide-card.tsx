import Link from "next/link";
import { ArrowUpRight, BookMarked, Clock3, KeyRound, ScrollText, Sparkles } from "lucide-react";
import type { GuideSummary } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { getMessages } from "@/lib/i18n";

const categoryIcon = {
  Walkthrough: ScrollText,
  Puzzle: KeyRound,
  Essentials: BookMarked,
  Lore: Sparkles,
  Completion: BookMarked,
};

export function GuideCard({ guide, locale, index = 0 }: { guide: GuideSummary; locale: Locale; index?: number }) {
  const t = getMessages(locale);
  const Icon = categoryIcon[guide.category];
  return (
    <article className={`guide-card tone-${index % 4}`}>
      <div className="card-topline">
        <span className="category"><Icon aria-hidden="true" />{guide.category}</span>
        <span className="read-time"><Clock3 aria-hidden="true" />{guide.readingTime} {t.minutes}</span>
      </div>
      <h3><Link href={`/${locale}/guides/${guide.slug}`}>{guide.title}</Link></h3>
      <p>{guide.description}</p>
      <div className="card-footer">
        <span>{t.spoiler}: {guide.spoiler}</span>
        <Link aria-label={`${t.read}: ${guide.title}`} href={`/${locale}/guides/${guide.slug}`}><ArrowUpRight /></Link>
      </div>
    </article>
  );
}
