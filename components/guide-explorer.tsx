"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { GuideSummary } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { getMessages } from "@/lib/i18n";
import { GuideCard } from "@/components/guide-card";

export function GuideExplorer({ guides, locale }: { guides: GuideSummary[]; locale: Locale }) {
  const t = getMessages(locale);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(guides.map((guide) => guide.category)))];
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return guides.filter((guide) =>
      (category === "All" || guide.category === category) &&
      (!needle || `${guide.title} ${guide.description} ${guide.category}`.toLowerCase().includes(needle)),
    );
  }, [category, guides, query]);

  return (
    <div>
      <div className="explorer-tools">
        <label className="search-field">
          <Search aria-hidden="true" />
          <span className="sr-only">{t.search}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} />
        </label>
        <div className="category-pills" aria-label={t.categories}>
          {categories.map((item) => (
            <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="guide-grid">
          {filtered.map((guide, index) => <GuideCard key={guide.slug} guide={guide} locale={locale} index={index} />)}
        </div>
      ) : <p className="empty-state">{t.noResults}</p>}
    </div>
  );
}
