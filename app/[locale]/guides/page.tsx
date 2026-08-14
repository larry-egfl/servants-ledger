import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideExplorer } from "@/components/guide-explorer";
import { getAllGuides } from "@/lib/content";
import { getMessages } from "@/lib/i18n";
import { isLocale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "全部攻略" : "All Guides", description: locale === "zh" ? "搜索全部 Servant of the Lake 攻略和谜题答案。" : "Search every Servant of the Lake walkthrough, puzzle answer, and launch guide." };
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);
  const guides = getAllGuides(locale);
  return (
    <section className="page-hero shell">
      <p className="kicker">THE INDEX / {guides.length.toString().padStart(2, "0")} NOTES</p>
      <h1>{t.allGuides}</h1>
      <p>{t.allGuidesBody}</p>
      <GuideExplorer guides={guides} locale={locale} />
    </section>
  );
}
