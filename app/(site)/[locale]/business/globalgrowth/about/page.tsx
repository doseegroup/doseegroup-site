import Image from "next/image";
import { isLocale, type Locale } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export default async function GlobalGrowthAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const consultPath = `/${locale}/business/globalgrowth/consult`;

  return (
    <div className="py-14 md:py-20">
      <Container>

        {/* ─── Slide 1: 市場の課題 ─── */}
        <section>
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-8 rounded-full bg-orange-500 shrink-0" />
            市場の課題：インバウンドの「機会損失」
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left */}
            <div>
              <p className="text-xl font-bold text-teal-500">
                外国人が「不安」で離脱している
              </p>
              <div className="mt-4 rounded-xl border border-stone-300 bg-stone-50 px-5 py-4 text-stone-700 leading-relaxed text-sm">
                観光客は雰囲気だけで店を選びません。具体的情報が欠けていると、たとえ興味を持たれても最後の一歩で離脱します。
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  "Instagramが日本語中心",
                  "予約方法が不明",
                  "入店ルールがわからない",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-xs font-bold">
                      ✕
                    </span>
                    <span className="text-stone-800 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image */}
            {/*
              画像ファイルを /public/images/business/globalgrowth-about-1.jpg に配置してください
            */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-about-1.jpg"
                alt="外国人観光客が飲食店を楽しむ様子"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Slide 2: 店選びの現実 ─── */}
        <section className="mt-24">
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-8 rounded-full bg-orange-500 shrink-0" />
            店選びの現実：必要なのは「納得」
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left: Check */}
            <div className="text-center">
              <p className="text-7xl md:text-9xl font-extrabold text-orange-500 leading-none">
                Check
              </p>
              <p className="mt-4 text-stone-600">情報の充実度が来店を左右する</p>
            </div>

            {/* Right: 検索行動 */}
            <div>
              <p className="text-xl font-bold text-teal-500">検索行動の黄金ルート</p>
              <p className="mt-1 font-semibold text-orange-500">
                Google Maps → Instagram
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                事前に「何の料理か」「価格」「予約可否」「アレルギー対応」をスマホで徹底的に確認する。
              </p>
              <p className="mt-3 text-stone-800 font-medium">
                この情報の有無が勝負の分かれ目です。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Slide 3: 2つの欠落 ─── */}
        <section className="mt-24">
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-8 rounded-full bg-orange-500 shrink-0" />
            飲食店が抱える「2つの欠落」
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* 1. 説明の欠落 */}
            <div>
              <div className="rounded-2xl border border-stone-200 bg-white p-7">
                <p className="text-lg font-bold text-teal-500">1. 説明の欠落</p>
                <p className="mt-3 text-stone-700 leading-relaxed">
                  味は良いのに「何の店か」を英語で説明できていない。初見の外国人が安心して入れる設計がない。
                </p>
              </div>
              <div className="mt-4 rounded-xl border-2 border-red-300 bg-red-50 px-5 py-3 text-center">
                <p className="font-bold text-red-600">外国人が「不安」で離脱する</p>
              </div>
            </div>

            {/* 2. リソースの欠落 */}
            <div>
              <div className="rounded-2xl border border-stone-200 bg-white p-7">
                <p className="text-lg font-bold text-teal-500">2. リソースの欠落</p>
                <p className="mt-3 text-stone-700 leading-relaxed">
                  忙しくてSNS更新が続かない。英語対応できるスタッフがいない、撮影する余裕もない。
                </p>
              </div>
              <div className="mt-4 rounded-xl border-2 border-orange-300 bg-orange-50 px-5 py-3 text-center">
                <p className="font-bold text-orange-700">
                  撮影なしでも回る"継続運用"を、外国人視点で設計できる代行が必要
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Slide 4: 解決策 ─── */}
        <section className="mt-24">
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-8 rounded-full bg-orange-500 shrink-0" />
            解決策：インバウンド特化SNS運用
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left */}
            <div>
              <p className="text-xl font-bold text-teal-500">SNSは「入口」から「導線」へ</p>
              <p className="mt-3 text-stone-700 leading-relaxed">
                単なる投稿制作ではなく、プロフィール・ハイライト・DM対応まで一貫して設計。「行動しやすい状態」を維持します。
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "英語プロフィール＆ハイライト整備",
                  "日英キャプション作成",
                  "予約導線/DMテンプレ設計",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span className="text-stone-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image */}
            {/*
              画像ファイルを /public/images/business/globalgrowth-about-4.jpg に配置してください
            */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-about-4.jpg"
                alt="インバウンド向けSNS運用画面"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Slide 5: 3つの柱 ─── */}
        <section className="mt-24">
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-8 rounded-full bg-orange-500 shrink-0" />
            成果を支える3つの柱
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🚪",
                title: "入口の整備",
                body: "ハイライト等でMenu / How to / Accessを瞬時に理解させる。",
              },
              {
                icon: "🛡️",
                title: "不安の解消",
                body: "価格帯、アレルギー、入店ルールを明示し、心理的ハードルを下げる。",
              },
              {
                icon: "🗺️",
                title: "行動導線",
                body: "SNSからGoogle Mapsや予約サイトへ迷わず誘導する。",
              },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 text-center"
              >
                <p className="text-4xl">{col.icon}</p>
                <p className="mt-4 text-lg font-bold text-teal-500">{col.title}</p>
                <p className="mt-3 text-stone-700 leading-relaxed text-sm">{col.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Slide 6: 撮影なし運用モデル ─── */}
        <section className="mt-24">
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-8 rounded-full bg-orange-500 shrink-0" />
            「撮影なし」運用モデル
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div>
              <p className="text-xl font-bold text-teal-500">素材を活かし、効率を最大化</p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                店舗が保有する既存の写真・動画を活用し、クリエイティブを量産します。
              </p>
              <p className="mt-3 text-stone-700 leading-relaxed">
                撮影コストを削ることで、低価格かつ継続可能なストック型運用を実現しました。
              </p>
            </div>

            {/* Right: image */}
            {/*
              画像ファイルを /public/images/business/globalgrowth-about-6.jpg に配置してください
            */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-about-6.jpg"
                alt="スマホで料理写真を撮影する様子"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Slide 7: 運用のスタンス ─── */}
        <section className="mt-24">
          <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-8 rounded-full bg-orange-500 shrink-0" />
            運用のスタンス：現場に効く改善
          </h2>

          <div className="mt-12 space-y-6">
            {[
              {
                icon: "⚡",
                label: "正解を待たずに即実装",
                body: "まず動かし、変化を見て改善する。",
              },
              {
                icon: "🔍",
                label: "反応を可視化",
                body: "保存数、DM数、来店の声から手応えを探る。",
              },
              {
                icon: "🔄",
                label: "継続的な導線強化",
                body: "見せ方や誘導リンクを月単位でブラッシュアップ。",
              },
              {
                icon: "✓",
                label: "海外飲食の実務知見",
                body: "20年以上の海外経験・飲食店運営経験者がAI出力を精査。",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl shrink-0 w-8 text-center">{item.icon}</span>
                <div>
                  <span className="font-bold text-stone-900">{item.label}：</span>
                  <span className="text-stone-700">{item.body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="mt-24">
          <div className="rounded-3xl bg-stone-900 p-10 md:p-14 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              インバウンド集客を、仕組みでつくる。
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              まずは30分の無料相談で、現状の整理と方向性の確認だけ行います。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={consultPath} variant="solid">
                無料相談を予約する
              </Button>
              <Button
                href={`/${locale}/business/globalgrowth/service`}
                variant="outline"
              >
                料金・プランを見る
              </Button>
            </div>
          </div>
        </section>

      </Container>
    </div>
  );
}
