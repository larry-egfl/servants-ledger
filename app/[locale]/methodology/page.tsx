import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";

export const metadata: Metadata = { title: "How We Verify Guides" };

export default async function MethodologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const zh = locale === "zh";
  return (
    <div className="article-wrap shell static-page">
      <header className="article-header">
        <div className="article-category">EDITORIAL STANDARD</div>
        <h1>{zh ? "我们如何核验攻略" : "How we verify every note"}</h1>
        <p>{zh ? "AI 可以帮助整理，但不能替玩家发明答案。" : "AI can organize evidence. It cannot invent what happened in the game."}</p>
      </header>
      <article className="prose">
        <h2>{zh ? "来源等级" : "Source order"}</h2>
        <ol>
          <li>{zh ? "发行日期、平台、语言和配置：以 Rusty Lake 官方博客与商店页为准。" : "Release, platforms, languages, and requirements come from Rusty Lake or the game’s store pages."}</li>
          <li>{zh ? "谜题答案：必须来自实机流程、带画面的攻略或两处独立玩家记录。" : "Puzzle answers require a played walkthrough, visual evidence, or two independent player reports."}</li>
          <li>{zh ? "剧情解释：明确区分游戏明示、合理推断与玩家理论。" : "Lore notes separate what the game states, what we infer, and what remains fan theory."}</li>
        </ol>
        <h2>{zh ? "试玩版与正式版" : "Demo versus full release"}</h2>
        <p>{zh ? "正式版会改动流程和密码。本站在同一页面并列版本答案，不把旧试玩答案冒充正式版答案。" : "The full release changes some sequences and codes. We keep version-specific answers side by side instead of presenting an old demo solution as current."}</p>
        <h2>{zh ? "更新规则" : "Update policy"}</h2>
        <p>{zh ? "页面显示最后核验日期。无法确认的内容会标成“待确认”，不会为了抢首发流量补齐猜测。" : "Each page shows its last verification date. Unconfirmed details are labeled unknown; launch-day speed never justifies filling gaps with guesses."}</p>
        <h2>{zh ? "版权与独立性" : "Independence"}</h2>
        <p>{zh ? "本站是独立玩家资料站，与 Rusty Lake 无隶属关系。我们只使用自己制作的页面视觉，并链接而非搬运原攻略截图。" : "This is an independent fan resource with no affiliation to Rusty Lake. The visual identity is original, and we link to walkthrough evidence rather than republishing its screenshots."}</p>
      </article>
    </div>
  );
}
