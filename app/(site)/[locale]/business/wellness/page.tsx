import type { Metadata } from "next";
import Image from "next/image";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { pageMeta } from "@/lib/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const meta = pageMeta.wellness[locale];
  const path = `/${locale}/business/wellness`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
      languages: { ja: `${siteConfig.url}/ja/business/wellness`, en: `${siteConfig.url}/en/business/wellness` },
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

export default async function WellnessBusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);
  const page = dict.business.wellnessPage;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg/wellcha-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        <Container>
          <div className="relative py-24 md:py-32 max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-900">
              {dict.business.wellnessName}
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              DoSee Wellness
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/90 whitespace-pre-line">
              {page.heroTagline}
            </p>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="max-w-3xl text-stone-700 leading-relaxed whitespace-pre-line">
            {page.intro}
          </div>
        </Container>
      </section>

      {/* VALUES: Mind / Body / Skin */}
      <section className="py-14 md:py-20 bg-stone-50">
        <Container>
          <SectionHeader title={page.valuesTitle} subtitle={page.valuesLead} />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {page.values.map((v) => (
              <div
                key={v.name}
                className="rounded-3xl border border-stone-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold tracking-tight text-stone-900">
                  {v.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 whitespace-pre-line">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCTS: WellCha */}
      <section className="py-14 md:py-20">
        <Container>
          <SectionHeader title={page.productsTitle} subtitle={page.productsLead} />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {page.products.map((p) => (
              <a
                key={p.slug}
                href={`${siteConfig.wellnessUrl}/shop/${p.slug}`}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border border-stone-200 bg-white transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-stone-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {p.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-stone-900 group-hover:underline underline-offset-4">
                    {page.productCta} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <Container>
          <Button href={siteConfig.wellnessUrl} external>
            {dict.business.wellnessCta}
          </Button>
        </Container>
      </section>
    </>
  );
}
