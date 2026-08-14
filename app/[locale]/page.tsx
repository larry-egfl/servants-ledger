import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Feather, KeyRound, Languages, SearchCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { GuideCard } from "@/components/guide-card";
import { getAllGuides } from "@/lib/content";
import { getMessages } from "@/lib/i18n";
import { isLocale, siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = locale === "en" ? "Servant of the Lake Walkthrough & Puzzle Guide" : "Servant of the Lake 攻略、谜题答案与流程指南";
  const description = locale === "en" ? siteConfig.description : "《Servant of the Lake》首发攻略：第一天流程、画像密码、燕麦粥、吊灯谜题及平台信息。";
  return {
    title,
    description,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", "zh-CN": "/zh" } },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);
  const guides = getAllGuides(locale);
  const featured = guides.filter((guide) => guide.featured).slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-lede">{t.heroBody}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={`/${locale}/guides`}>{t.browse}<ArrowRight /></Link>
              <Link className="button button-ghost" href={`/${locale}/guides/day-one-walkthrough`}>{t.launchGuide}</Link>
            </div>
            <div className="trust-row">
              <span><SearchCheck />{locale === "en" ? "Source-checked" : "来源可核验"}</span>
              <span><Languages />EN / 中文</span>
              <span><CalendarDays />13 AUG 2026</span>
            </div>
          </div>
          <div className="estate-illustration" aria-label="An illustrated entrance to the Vanderboom estate">
            <div className="moon" />
            <div className="tree tree-left"><i /><i /><i /></div>
            <div className="tree tree-right"><i /><i /></div>
            <div className="house">
              <span className="chimney" />
              <div className="roof" />
              <div className="house-face">
                <span className="window window-a" /><span className="window window-b" />
                <span className="door"><b>13</b></span>
              </div>
            </div>
            <div className="path" />
            <p><Feather /> THE VANDERBOOM ESTATE <small>ONE WEEKEND · MANY DUTIES</small></p>
          </div>
        </div>
      </section>

      <section className="quick-strip">
        <div className="shell quick-grid">
          <div className="quick-label"><KeyRound /><span>{t.quickTitle}<small>LAUNCH-DAY NOTE 01</small></span></div>
          <p>{t.quickBody}</p>
          <Link href={`/${locale}/guides/release-date-platforms`}>{locale === "en" ? "Platform details" : "查看平台详情"}<ArrowRight /></Link>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="kicker">01 / PRIORITY NOTES</p><h2>{t.latest}</h2><p>{t.latestBody}</p></div>
          <Link href={`/${locale}/guides`}>{t.allGuides}<ArrowRight /></Link>
        </div>
        <div className="guide-grid featured-grid">
          {featured.map((guide, index) => <GuideCard key={guide.slug} guide={guide} locale={locale} index={index} />)}
        </div>
      </section>

      <section className="method-band">
        <div className="shell method-grid">
          <div><p className="kicker">02 / OUR METHOD</p><h2>{locale === "en" ? "Answers with a paper trail." : "每个答案，都留有证据链。"}</h2></div>
          <div className="method-steps">
            <article><span>1</span><h3>{locale === "en" ? "Find the exact question" : "只做真实问题"}</h3><p>{locale === "en" ? "One search need, one focused page." : "一个搜索需求，对应一个聚焦页面。"}</p></article>
            <article><span>2</span><h3>{locale === "en" ? "Check the source" : "交叉核验来源"}</h3><p>{locale === "en" ? "Official facts first; tested walkthroughs for puzzles." : "事实优先官方，谜题参考实测攻略。"}</p></article>
            <article><span>3</span><h3>{locale === "en" ? "Label uncertainty" : "诚实标注未知"}</h3><p>{locale === "en" ? "Unknown means unknown—not an AI guess." : "不知道就明确说，不用 AI 猜答案。"}</p></article>
          </div>
          <Link className="text-link" href={`/${locale}/methodology`}><CheckCircle2 />{t.navMethod}<ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
