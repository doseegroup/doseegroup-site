import Image from "next/image";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default async function PhilosophyPage({
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
        {/* Page Title */}
        <SectionHeader title={dict.philosophy.title} />

        {/* Hero */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900">
            {dict.philosophy.hero.title}
          </h2>
          <p className="mt-4 text-stone-700 leading-relaxed whitespace-pre-line">
            {dict.philosophy.hero.lead}
          </p>
        </div>

        {/* THE DOSEE CYCLE (insert only) */}
        <div className="mt-12">
          <Image
            src="/images/philosophy/dosee-cycle.svg"
            alt={dict.philosophy.images?.cycleAlt ?? "The DoSee Cycle diagram"}
            width={1600}
            height={900}
            priority
          />
        </div>

        {/* One Sentence */}
        <div className="mt-16 max-w-3xl">
          <h3 className="text-sm font-semibold tracking-wide text-stone-500 uppercase">
            {dict.philosophy.oneSentence.title}
          </h3>
          <p className="mt-4 text-stone-700 leading-relaxed whitespace-pre-line">
            {dict.philosophy.oneSentence.body}
          </p>
        </div>

        {/* Three Principles */}
        <div className="mt-20 grid gap-12 max-w-4xl">
          {dict.philosophy.principles.map((p) => (
            <div key={p.title}>
              <h4 className="text-lg font-semibold text-stone-900">{p.title}</h4>
              <p className="mt-3 text-stone-700 leading-relaxed whitespace-pre-line">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Our Practice */}
        <div className="mt-20 max-w-3xl">
          <h3 className="text-sm font-semibold tracking-wide text-stone-500 uppercase">
            {dict.philosophy.practice.title}
          </h3>
          <p className="mt-4 text-stone-700 leading-relaxed whitespace-pre-line">
            {dict.philosophy.practice.body}
          </p>
        </div>

        {/* PRACTICE DIAGRAM (insert only) */}
        <div className="mt-12">
          <Image
            src="/images/philosophy/dosee-practice.svg"
            alt={
              dict.philosophy.images?.practiceAlt ??
              "DoSee Philosophy in Practice diagram"
            }
            width={1600}
            height={900}
          />
        </div>
      </Container>
    </section>
  );
}