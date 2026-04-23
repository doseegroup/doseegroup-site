import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { siteConfig } from "@/lib/siteConfig";
import { pageMeta } from "@/lib/pageMeta";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/sections/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const meta = pageMeta.contact[locale];
  const path = `/${locale}/contact`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
      languages: { ja: `${siteConfig.url}/ja/contact`, en: `${siteConfig.url}/en/contact` },
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeader title={dict.contact.title} subtitle={dict.contact.body} />
        <ContactForm form={dict.contact.form} />
      </Container>
    </section>
  );
}
