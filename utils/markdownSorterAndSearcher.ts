import { Markdown, TechType } from "@/types/markdown";

export const markdownSorter = (markdown: Markdown[]) => {
  const sortedMd: Record<TechType, Markdown[]> = markdown.reduce((acc, md) => {
    acc[md.type] = acc[md.type] || [];
    acc[md.type].push(md);
    return acc;
  }, {} as Record<TechType, Markdown[]>);

  const keys = Object.keys(sortedMd) as unknown as TechType[];

  return { sortedMd, keys };
};

export const markdownSearcher = (markdown: Markdown[], searchText: string) =>
  markdown.filter((md) =>
    md.name.toLowerCase().includes(searchText.toLowerCase())
  );
