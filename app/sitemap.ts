import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/content";
import { locales, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = locales.flatMap((locale) => ["", "/guides", "/methodology"].map((route) => ({
    url: `${siteConfig.url}/${locale}${route}`,
    lastModified: new Date(siteConfig.updated),
    changeFrequency: route === "/guides" ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  })));
  const guidePages = locales.flatMap((locale) => getAllGuides(locale).map((guide) => ({
    url: `${siteConfig.url}/${locale}/guides/${guide.slug}`,
    lastModified: new Date(guide.updated),
    changeFrequency: "daily" as const,
    priority: guide.featured ? 0.9 : 0.7,
  })));
  return [...staticPages, ...guidePages];
}
