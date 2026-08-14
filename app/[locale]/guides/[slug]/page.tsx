import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { getAllGuides, getGuide } from "@/lib/content";
import { getMessages } from "@/lib/i18n";
import { isLocale, locales, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) => getAllGuides(locale).map((guide) => ({ locale, slug: guide.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const guide = await getGuide(locale, slug);
  if (!guide) return {};
  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    alternates: { canonical: `/${locale}/guides/${slug}`, languages: { en: `/en/guides/${slug}`, "zh-CN": `/zh/guides/${slug}` } },
    openGraph: { title: guide.frontmatter.title, description: guide.frontmatter.description, type: "article", modifiedTime: guide.frontmatter.updated },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const guide = await getGuide(locale, slug);
  if (!guide) notFound();
  const t = getMessages(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.frontmatter.title,
    description: guide.frontmatter.description,
    dateModified: guide.frontmatter.updated,
    inLanguage: locale === "en" ? "en" : "zh-CN",
    author: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/${locale}/guides/${slug}`,
  };
  return (
    <div className="article-wrap shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link className="back-link" href={`/${locale}/guides`}><ArrowLeft />{t.allGuides}</Link>
      <header className="article-header">
        <div className="article-category">{guide.frontmatter.category}</div>
        <h1>{guide.frontmatter.title}</h1>
        <p>{guide.frontmatter.description}</p>
        <div className="article-meta">
          <span><CalendarDays />{t.updated} {guide.frontmatter.updated}</span>
          <span><Clock3 />{guide.frontmatter.readingTime} {t.minutes}</span>
          <span><ShieldCheck />{t.spoiler}: {guide.frontmatter.spoiler}</span>
        </div>
      </header>
      <div className="article-layout">
        <article className="prose">{guide.content}</article>
        <aside className="article-aside">
          <span className="aside-number">FIELD NOTE</span>
          <p>{locale === "en" ? "We separate verified facts, tested puzzle answers, and unknowns. Source links sit beside the claims they support." : "本站区分官方事实、实测谜题答案和暂未确认信息；来源链接紧跟对应结论。"}</p>
          <Link href={`/${locale}/methodology`}>{t.navMethod}</Link>
        </aside>
      </div>
    </div>
  );
}
