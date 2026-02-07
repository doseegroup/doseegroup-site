import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { siteConfig } from "@/lib/siteConfig";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "ja" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  return {
    title: siteConfig.name,
    description: siteConfig.description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        ja: `${siteConfig.url}/ja`,
        en: `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      locale: locale === "ja" ? "ja_JP" : "en_US",
      url: `${siteConfig.url}/${locale}`,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      siteName: siteConfig.name,
      type: "website",
    },
    other: {
      "x-site-locale": locale,
      "x-site-nav": JSON.stringify(dict.nav),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  return (
    <div className="min-h-dvh flex flex-col">
      <Navigation locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}