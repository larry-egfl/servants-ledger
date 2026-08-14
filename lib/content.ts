import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Locale } from "@/lib/site";
import { MdxLink, Note, QuickAnswer, Spoiler } from "@/components/mdx-components";

export type GuideFrontmatter = {
  title: string;
  description: string;
  category: "Walkthrough" | "Puzzle" | "Essentials" | "Lore" | "Completion";
  updated: string;
  readingTime: string;
  spoiler: "None" | "Light" | "Puzzle answers" | "Story spoilers";
  featured?: boolean;
};

export type GuideSummary = GuideFrontmatter & { slug: string };

const contentRoot = path.join(process.cwd(), "content", "guides");

function getFilePath(locale: Locale, slug: string) {
  return path.join(contentRoot, locale, `${slug}.mdx`);
}

function parseFrontmatter(source: string): GuideFrontmatter {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) throw new Error("Guide is missing frontmatter");

  const values: Record<string, string | boolean> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const raw = line.slice(separator + 1).trim().replace(/^['\"]|['\"]$/g, "");
    values[key] = raw === "true" ? true : raw === "false" ? false : raw;
  }
  return values as unknown as GuideFrontmatter;
}

export const getAllGuides = cache((locale: Locale): GuideSummary[] => {
  const directory = path.join(contentRoot, locale);
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      return { slug, ...parseFrontmatter(source) };
    })
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.updated.localeCompare(a.updated));
});

export const getGuide = cache(async (locale: Locale, slug: string) => {
  const filePath = getFilePath(locale, slug);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const result = await compileMDX<GuideFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: {
      a: MdxLink,
      QuickAnswer,
      Note,
      Spoiler,
    },
  });
  return { ...result, slug };
});
