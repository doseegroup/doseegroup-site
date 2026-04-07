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
          {/* eyebrow：左上に配置 */}
          <p className="text-xs tracking-widest text-stone-500 uppercase mb-6">
            {lp.intro.eyebrow}
          </p>
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
            {/* 右側：3ブロック・中央揃え */}
            <div className="text-center space-y-8">
              <p className="text-xl md:text-2xl font-bold text-stone-900 leading-snug whitespace-pre-line">
                {lp.intro.lead}
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed whitespace-pre-line">
                {lp.intro.body}
              </p>
              <p className="text-xl md:text-2xl font-bold text-stone-900 leading-snug whitespace-pre-line">
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
        <section className="mt-16 py-10">
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight">
            {lp.mission.title}
          </h2>
          <p className="mt-10 text-lg md:text-xl text-stone-800 leading-loose whitespace-pre-line">
            {lp.mission.body}
          </p>

          {/* CTA → about ページへ */}
          <Link
            href={`/${locale}/business/globalgrowth/about`}
            className="group mt-10 inline-flex items-center gap-2 text-sm text-stone-500 transition-all hover:text-stone-800 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded-sm"
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
              className="transition-transform group-hover:translate-x-1"
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
              <p className="pl-10 md:pl-16 text-4xl md:text-6xl font-bold text-stone-900">
                SEO対策
              </p>
            </div>
          </div>

          {/* テキストセクション */}
          <div className="mt-10 rounded-3xl bg-stone-100 px-8 py-14 md:px-20 md:py-20 text-center space-y-8">
            <p className="text-lg md:text-xl text-stone-800 leading-relaxed">
              訪日外国人の検索行動に特化したSEO対策を提供します。
            </p>
            <p className="text-base md:text-lg text-stone-700 leading-loose whitespace-pre-line">
              {`海外ユーザーの検索意図をベースに、\n多言語キーワード設計・コンテンツ構築・内部SEOを最適化。`}
            </p>
            <p className="text-base md:text-lg text-stone-700 leading-loose whitespace-pre-line">
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
              <p className="pr-10 pb-8 md:pr-16 md:pb-12 text-4xl md:text-6xl font-bold text-stone-900">
                MEO対策
              </p>
            </div>
          </div>

          {/* テキストセクション */}
          <div className="mt-10 rounded-3xl bg-stone-100 px-8 py-14 md:px-20 md:py-20 text-center space-y-8">
            <p className="text-lg md:text-xl text-stone-800 leading-relaxed">
              訪日外国人の来店獲得に特化したMEO対策を提供します。
            </p>
            <p className="text-base md:text-lg text-stone-700 leading-loose whitespace-pre-line">
              {`Googleマップ上での露出最大化に加え、\n英語対応・レビュー設計・写真最適化まで一体化。`}
            </p>
            <p className="text-base md:text-lg text-stone-700 leading-loose whitespace-pre-line">
              {`「見つかる」だけでなく「比較されて選ばれる」状態を構築し、\n検索から来店までの転換率を高めます。`}
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