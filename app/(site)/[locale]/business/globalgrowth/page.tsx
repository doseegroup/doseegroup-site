import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Image from "next/image";

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
        <section className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-5 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
                {lp.hero.eyebrow}
              </p>

              <h1 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold text-stone-900 leading-tight">
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

            {/* Instagram grid image */}
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/business/instagram-grid.jpg"
                  alt="Instagram grid preview"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-xs text-stone-500">
                {locale === "ja" ? "イメージ写真" : "Sample Image"}
              </p>
            </div>
          </div>
        </section>

        {/* ─── Slide 1: Visual Intro ─── */}
        <section className="mt-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/*
              左側の画像エリア
              画像ファイルを /public/images/business/globalgrowth-globe.png に配置してください
            */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/business/globalgrowth-globe.png"
                alt={locale === "ja" ? "グローバル展開イメージ" : "Global expansion image"}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xs tracking-widest text-stone-500 uppercase">
                {lp.intro.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
                {lp.intro.title}
              </h2>
              <p className="mt-5 text-stone-600 leading-relaxed">{lp.intro.sub}</p>
            </div>
          </div>
        </section>

        {/* ─── Slide 2: 事業理念 Visual ─── */}
        <section className="mt-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/*
              左側の画像エリア
              画像ファイルを /public/images/business/globalgrowth-map.png に配置してください
            */}
            <div className="relative aspect-[4/3] pl-8 md:pl-16">
              <Image
                src="/images/business/globalgrowth-map.png"
                alt={locale === "ja" ? "日本地図・集客イメージ" : "Japan map illustration"}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                {lp.philosophyVisual.title}
              </h2>
            </div>
          </div>
        </section>

        {/* ─── Slide 3: Mission ─── */}
        <section className="mt-16 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-sky-100/70 to-indigo-50 p-10 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm tracking-widest text-stone-600">
                {lp.mission.tagline}
              </p>
              <p className="mt-8 text-stone-700 leading-loose whitespace-pre-line">
                {lp.mission.body}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
                {lp.mission.missionEyebrow}
              </p>
              <div className="mt-5">
                {(lp.mission.missionLines as readonly string[]).map((line) => (
                  <p key={line} className="text-4xl md:text-5xl font-bold text-stone-900 leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Slide 4: Tagline ─── */}
        <section className="mt-16 py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 leading-snug whitespace-pre-line">
              {lp.tagline.heading}
            </h2>
            <p className="mt-8 text-stone-700 leading-loose">
              {lp.tagline.body}
            </p>
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
          <div className="rounded-3xl border border-stone-200 bg-stone-900 p-5 md:p-10 text-white">
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