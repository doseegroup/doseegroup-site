import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export type NewsPostMeta = Omit<NewsPost, "content">;

function newsDir(locale: string) {
  return path.join(process.cwd(), "content/news", locale);
}

export function getAllNewsPosts(locale: string): NewsPostMeta[] {
  const dir = newsDir(locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, filename), "utf8"));
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getNewsPost(
  locale: string,
  slug: string
): Promise<NewsPost | null> {
  const fullPath = path.join(newsDir(locale), `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    content: processed.toString(),
  };
}
