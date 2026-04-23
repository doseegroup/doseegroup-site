import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { siteConfig } from "@/lib/siteConfig";
import { pageMeta } from "@/lib/pageMeta";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

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

        <form className="mt-8 grid gap-4 max-w-xl">
          <input
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3"
            placeholder={dict.contact.form.name}
          />
          <input
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3"
            placeholder={dict.contact.form.email}
          />
          <input
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3"
            placeholder={dict.contact.form.subject}
          />
          <textarea
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3 min-h-[160px]"
            placeholder={dict.contact.form.message}
          />
          <button
            type="button"
            className="rounded-full bg-stone-900 text-white px-5 py-2.5 text-sm hover:bg-stone-800 transition w-fit"
          >
            {dict.contact.form.submit}
          </button>

          <p className="text-xs text-stone-500">
            {locale === "ja"
              ? "※ 送信処理は次のステップで実装（Resend / SendGrid / Formspree 等）"
              : "Submission handling will be implemented next (Resend / SendGrid / Formspree, etc.)."}
          </p>
        </form>
      </Container>
    </section>
  );
}