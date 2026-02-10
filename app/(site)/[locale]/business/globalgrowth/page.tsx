import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default async function GlobalGrowthPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  const lp = dict.business.globalGrowthLP;

  // ✅ Bページ（無料相談ページ）への導線
  const consultPath = `/${locale}/business/globalgrowth/consult`;

  return (
    <div className="py-14 md:py-20">
      <Container>
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
                {lp.hero.eyebrow}
              </p>

              <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-stone-900 leading-tight">
                {lp.hero.title}
              </h1>

              <p className="mt-4 text-stone-700 leading-relaxed whitespace-pre-line">
                {lp.hero.sub}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {/* ✅ Primary CTA：無料相談ページへ遷移（B前提） */}
                <Button href={consultPath} variant="solid">
                  {lp.hero.ctaPrimary}
                </Button>

                <Button
                  href={`/${locale}/business/globalgrowth/service`}
                  variant="outline"
                >
                  {lp.hero.ctaSecondary}
                </Button>
              </div>
            </div>

            {/* Instagram profile-ish 9-grid */}
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-stone-200 to-stone-100"
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-stone-500">
                {locale === "ja"
                  ? "※仮のグリッド（後で実画像に差し替え）"
                  : "Placeholder grid (replace with real visuals later)"}
              </p>
            </div>
          </div>
        </section>

        {/* Who / What */}
        <section className="mt-16">
          <SectionHeader title={lp.who.title} />
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start">
            <div className="text-stone-700 leading-relaxed">
              <p className="whitespace-pre-line">{lp.who.lead}</p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7">
              <ul className="space-y-3 text-stone-800">
                {lp.who.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pains */}
        <section className="mt-16">
          <SectionHeader title={lp.pains.title} />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {lp.pains.items.map((t) => (
              <div
                key={t}
                className="rounded-3xl border border-stone-200 bg-white p-6"
              >
                <p className="text-stone-800 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section id="service" className="mt-16">
          <SectionHeader title={lp.solution.title} />
          <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-8">
            <ul className="grid gap-3 md:grid-cols-2 text-stone-800">
              {lp.solution.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-stone-500">{lp.solution.note}</p>
          </div>
        </section>

        {/* Consult CTA */}
        <section className="mt-16">
          <div className="rounded-3xl border border-stone-200 bg-stone-900 p-8 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {lp.consult.title}
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed whitespace-pre-line">
              {lp.consult.lead}
            </p>

            <ul className="mt-6 grid gap-2 md:grid-cols-3 text-sm text-white/85">
              {lp.consult.assures.map((a) => (
                <li key={a} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* ✅ 下部CTA：無料相談ページへ遷移（B前提） */}
              <Button href={consultPath} variant="solid">
                {lp.consult.cta}
              </Button>

              <Button
                href={`/${locale}/business/globalgrowth/service`}
                variant="outline"
              >
                {lp.hero.ctaSecondary}
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/60 whitespace-pre-line">
              {lp.consult.footnote}
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}