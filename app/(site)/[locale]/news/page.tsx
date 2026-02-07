import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NewsPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "ja";
  const dict = getDictionary(locale);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeader title={dict.news.title} subtitle={dict.news.body} />
        <div className="rounded-3xl border border-stone-200 bg-white p-10 text-stone-600">
          {dict.news.comingSoon}
        </div>
      </Container>
    </section>
  );
}