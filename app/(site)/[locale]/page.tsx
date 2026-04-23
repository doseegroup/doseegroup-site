import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { siteConfig } from "@/lib/siteConfig";
import { pageMeta } from "@/lib/pageMeta";
import HomeHero from "@/components/sections/HomeHero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeGrowth from "@/components/sections/HomeGrowth";
import HomeBusiness from "@/components/sections/HomeBusiness";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const meta = pageMeta.home[locale];
  const path = `/${locale}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
      languages: { ja: `${siteConfig.url}/ja`, en: `${siteConfig.url}/en` },
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  return (
    <>
      <HomeHero
        locale={locale}
        title={dict.home.heroTitle}
        sub={dict.home.heroSub}
      />

      <HomeAbout
        locale={locale}
        title={dict.sections.aboutTitle}
        body={dict.sections.aboutBody}
        ctaLabel={dict.sections.aboutCta}
      />

      <HomeGrowth
        locale={locale}
        eyebrow={dict.sections.growthEyebrow}
        title={dict.sections.growthTitle}
      />

      <HomeBusiness locale={locale} />
    </>
  );
}