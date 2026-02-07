import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default async function GlobalGrowthPage({
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
        <SectionHeader
          title={dict.business.globalGrowthTitle ?? "DoSee Global Growth"}
          subtitle={dict.business.globalGrowthDesc}
        />

        <div className="mt-10 max-w-3xl text-stone-700 leading-relaxed whitespace-pre-line">
          {dict.business.globalGrowthBody}
        </div>
      </Container>
    </section>
  );
}