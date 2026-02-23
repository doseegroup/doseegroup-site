import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default async function CompanyPage({
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
        <SectionHeader title={dict.company.title} />
        <div className="rounded-3xl border border-stone-200 bg-white overflow-hidden">
          <div className="divide-y divide-stone-200">
            {dict.company.items.map((it) => (
              <div
                key={it.label}
                className="grid md:grid-cols-[220px_1fr] gap-2 p-6"
              >
                <div className="text-sm text-stone-500">{it.label}</div>
                <div className="text-stone-800">{it.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}