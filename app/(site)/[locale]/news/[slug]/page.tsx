import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";
import { getAllNewsPosts, getNewsPost } from "@/lib/news";
import Container from "@/components/ui/Container";

export async function generateStaticParams() {
  const locales = ["ja", "en"] as const;
  return locales.flatMap((locale) =>
    getAllNewsPosts(locale).map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const post = await getNewsPost(locale, slug);
  if (!post) return {};

  const path = `/${locale}/news/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
      languages: {
        ja: `${siteConfig.url}/ja/news/${slug}`,
        en: `${siteConfig.url}/en/news/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}${path}`,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const post = await getNewsPost(locale, slug);

  if (!post) notFound();

  const backLabel = locale === "ja" ? "← ニュース一覧" : "← News";

  return (
    <section className="py-14 md:py-20">
      <Container>
        <Link
          href={`/${locale}/news`}
          className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
        >
          {backLabel}
        </Link>

        <div className="mt-6 max-w-2xl">
          <time className="text-xs text-stone-400">
            {new Date(post.date).toLocaleDateString(
              locale === "ja" ? "ja-JP" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </time>
          <h1 className="mt-3 text-2xl md:text-4xl font-semibold text-stone-900 leading-snug">
            {post.title}
          </h1>

          <div
            className="mt-10 prose prose-stone max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Container>
    </section>
  );
}
