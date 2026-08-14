import type { Locale } from "@/lib/site";

const messages = {
  en: {
    navGuides: "All guides",
    navMethod: "How we verify",
    official: "Official game",
    eyebrow: "Independent field guide · Updated launch day",
    heroTitle: "Every clue. No cold porridge.",
    heroBody:
      "Fast, spoiler-aware answers for Servant of the Lake, checked against the game, official posts, and clearly linked walkthrough sources.",
    browse: "Browse the ledger",
    launchGuide: "Start with Day One",
    quickTitle: "The quick answer",
    quickBody:
      "Servant of the Lake launched August 13, 2026 on Steam, itch.io, iOS, and Android. If a code from the demo no longer works, use the full-game version shown in our guide.",
    latest: "Fresh from the estate",
    latestBody: "Launch-day answers to the questions players are asking first.",
    allGuides: "All field notes",
    allGuidesBody: "Search by puzzle, task, platform, or story question.",
    search: "Search guides…",
    noResults: "No notes match that search yet.",
    read: "Open guide",
    updated: "Updated",
    minutes: "min read",
    sourceNote: "Independent fan guide. Not affiliated with Rusty Lake.",
    spoiler: "Spoiler level",
    categories: "Browse by need",
    footerTagline: "A careful record for an unusual weekend.",
  },
  zh: {
    navGuides: "全部攻略",
    navMethod: "核验方法",
    official: "游戏官方页",
    eyebrow: "非官方资料站 · 首发日更新",
    heroTitle: "每条线索，都不让粥凉掉。",
    heroBody:
      "《Servant of the Lake》快速、分级防剧透攻略。事实以官方资料为准，谜题解法标明核验来源。",
    browse: "浏览全部攻略",
    launchGuide: "从第一天开始",
    quickTitle: "先说答案",
    quickBody:
      "《Servant of the Lake》已于 2026 年 8 月 13 日登陆 Steam、itch.io、iOS 与 Android。试玩版与正式版部分密码不同，请以本站标注的正式版答案为准。",
    latest: "庄园最新记录",
    latestBody: "优先回答首发当天玩家最常卡住的问题。",
    allGuides: "全部调查笔记",
    allGuidesBody: "按谜题、任务、平台或剧情问题搜索。",
    search: "搜索攻略……",
    noResults: "暂时没有匹配的笔记。",
    read: "打开攻略",
    updated: "更新于",
    minutes: "分钟阅读",
    sourceNote: "非官方玩家攻略，与 Rusty Lake 无隶属关系。",
    spoiler: "剧透等级",
    categories: "按需求浏览",
    footerTagline: "为这个不寻常的周末，留一份可靠记录。",
  },
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
