import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { siteConfig } from "@/lib/siteConfig";
import { pageMeta } from "@/lib/pageMeta";
import { getAllNewsPosts } from "@/lib/news";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const meta = pageMeta.news[locale];
  const path = `/${locale}/news`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
      languages: { ja: `${siteConfig.url}/ja/news`, en: `${siteConfig.url}/en/news` },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteConfig.url}${path}`,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);
  const posts = getAllNewsPosts(locale);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeader title={dict.news.title} />

        {posts.length === 0 ? (
          <div className="rounded-3xl border border-stone-200 bg-white p-6 md:p-10 text-stone-600">
            {dict.news.comingSoon}
          </div>
        ) : (
          <div className="mt-10 divide-y divide-stone-200">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/news/${post.slug}`}
                className="group flex flex-col gap-1 py-6 transition-colors hover:text-stone-950"
              >
                <time className="text-xs text-stone-400">
                  {new Date(post.date).toLocaleDateString(
                    locale === "ja" ? "ja-JP" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </time>
                <h2 className="text-base md:text-lg font-medium text-stone-900 group-hover:underline underline-offset-4">
                  {post.title}
                </h2>
                <p className="text-sm text-stone-500 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
