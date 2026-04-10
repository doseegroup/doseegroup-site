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
                  src="/images/business/instagram-grid.png"
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
        <section className="mt-12 md:mt-20">
          {/* eyebrow：左上に配置 */}
          <p className="text-xs tracking-widest text-stone-500 uppercase mb-4 md:mb-6">
            {lp.intro.eyebrow}
          </p>
          <div className="grid gap-6 md:gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/business/globalgrowth-globe.png"
                alt={locale === "ja" ? "グローバル展開イメージ" : "Global expansion image"}
                fill
                className="object-contain"
              />
            </div>
            {/* 右側：3ブロック・中央揃え */}
            <div className="text-center space-y-6 md:space-y-8">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-stone-900 leading-snug whitespace-pre-line">
                {lp.intro.lead}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-stone-700 leading-relaxed whitespace-pre-line">
                {lp.intro.body}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-stone-900 leading-snug whitespace-pre-line">
                {lp.intro.closing}
              </p>
            </div>
          </div>
        </section>

        {/* ─── Slide 2: Full-width Image ─── */}
        {/*
          画像ファイルを /public/images/business/globalgrowth-phone.jpg に配置してください
        */}
        <section className="mt-16">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/business/globalgrowth-phone.png"
              alt={locale === "ja" ? "インバウンド向けSNS運用イメージ" : "Inbound SNS marketing image"}
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* ─── Slide 3: Inbound SNS ─── */}
        <section className="mt-12 md:mt-16 py-6 md:py-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight">
            {lp.mission.title}
          </h2>
          <p className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-stone-800 leading-loose whitespace-pre-line transition-all duration-300 hover:-translate-y-1 hover:text-stone-950 hover:font-medium">
            {lp.mission.body}
          </p>

          {/* CTA → about ページへ */}
          <Link
            href={`/${locale}/business/globalgrowth/about`}
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-all duration-300 hover:text-stone-950 hover:-translate-y-1 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded-sm"
          >
            詳しく見る
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </section>

        {/* ─── Slide 4: SEO ─── */}
        {/*
          画像ファイルを /public/images/business/globalgrowth-seo.png に配置してください
        */}
        <section className="mt-16">
          {/* 画像 + テキストオーバーレイ */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/business/globalgrowth-seo.png"
              alt={locale === "ja" ? "SEO対策" : "SEO strategy"}
              fill
              className="object-cover"
            />
            {/* 左側テキストオーバーレイ */}
            <div className="absolute inset-0 flex items-center">
              <p className="pl-5 sm:pl-10 md:pl-16 text-3xl sm:text-4xl md:text-6xl font-bold text-stone-900">
                SEO対策
              </p>
            </div>
          </div>

          {/* テキストセクション */}
          <div className="mt-6 md:mt-10 rounded-3xl bg-stone-100 px-5 py-8 sm:px-8 sm:py-12 md:px-20 md:py-20 text-center space-y-6 md:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl font-black text-stone-800 leading-relaxed">
              訪日外国人の検索行動に特化したSEO対策を提供します。
            </p>
            <p className="text-base sm:text-lg md:text-xl font-black text-stone-700 leading-loose whitespace-pre-line">
              {`海外ユーザーの検索意図をベースに、\n多言語キーワード設計・コンテンツ構築・内部SEOを最適化。`}
            </p>
            <p className="text-base sm:text-lg md:text-xl font-black text-stone-700 leading-loose whitespace-pre-line">
              {`単なるアクセス増加ではなく、\n「来店・予約につながる検索流入」を獲得するための設計を行います。`}
            </p>
          </div>
        </section>

        {/* ─── Slide 5: MEO ─── */}
        {/*
          画像ファイルを /public/images/business/globalgrowth-meo.png に配置してください
        */}
        <section className="mt-10">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image
              src="/images/business/globalgrowth-meo.png"
              alt={locale === "ja" ? "MEO対策" : "MEO strategy"}
              fill
              className="object-cover"
            />
            {/* 右下テキストオーバーレイ */}
            <div className="absolute inset-0 flex items-end justify-end">
              <p className="pr-5 pb-4 sm:pr-10 sm:pb-8 md:pr-16 md:pb-12 text-3xl sm:text-4xl md:text-6xl font-bold text-stone-900">
                MEO対策
              </p>
            </div>
          </div>

          {/* テキストセクション */}
          <div className="mt-6 md:mt-10 rounded-3xl bg-stone-100 px-5 py-8 sm:px-8 sm:py-12 md:px-20 md:py-20 text-center space-y-6 md:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl font-black text-stone-800 leading-relaxed">
              訪日外国人の来店獲得に特化したMEO対策を提供します。
            </p>
            <p className="text-base sm:text-lg md:text-xl font-black text-stone-700 leading-loose whitespace-pre-line">
              {`Googleマップ上での露出最大化に加え、\n英語対応・レビュー設計・写真最適化まで一体化。`}
            </p>
            <p className="text-base sm:text-lg md:text-xl font-black text-stone-700 leading-loose whitespace-pre-line">
              {`「見つかる」だけでなく「比較されて選ばれる」状態を構築し、\n検索から来店までの転換率を高めます。`}
            </p>
          </div>
        </section>

        {/* Consult CTA */}
        <section className="mt-12 md:mt-16">
          <div className="rounded-3xl bg-gradient-to-br from-stone-800 to-stone-950 p-6 sm:p-10 md:p-16 text-white">
            <p className="text-xs tracking-widest text-stone-400 uppercase">Free Consult</p>
            <h2 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              {lp.consult.title}
            </h2>
            <p className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed whitespace-pre-line">
              {lp.consult.lead}
            </p>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">
              {lp.consult.assures.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-stone-600 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm text-stone-300"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <a
                href={consultPath}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100 text-center"
              >
                {lp.consult.cta}
              </a>
              <a
                href={`/${locale}/business/globalgrowth/service`}
                className="rounded-full border border-stone-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-stone-300 text-center"
              >
                {lp.hero.ctaSecondary}
              </a>
            </div>

            <p className="mt-5 md:mt-6 text-xs text-stone-500 whitespace-pre-line">
              {lp.consult.footnote}
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

            <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-7">
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
          <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-5 md:p-8">
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

      </Container>
    </div>
  );
}