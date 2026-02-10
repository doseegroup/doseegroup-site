import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export default async function GlobalGrowthConsultPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  const isJa = locale === "ja";

  // ====== Copy (仮) ======
  const hero = {
    title: isJa ? "無料相談（30分）" : "Free Consultation (30 min)",
    lead: isJa
      ? "インバウンド集客のSNS運用を、撮影なし・日英対応で設計します。\n※飲食店限定"
      : "We design inbound-focused social media operations without on-site shooting, in Japanese & English.\nRestaurant businesses only.",
    cta: isJa ? "無料相談を予約する" : "Book a free consultation",
  };

  const what = {
    title: isJa ? "この相談でやること" : "What we do in this call",
    bullets: isJa
      ? [
          "現状ヒアリング（客層 / 導線 / 投稿状況）",
          "伸びない原因の切り分け（言語 / 導線 / 頻度 / DM）",
          "1週間でやること（最短アクション）提示",
          "必要なら、プラン提案（無理な営業はしません）",
        ]
      : [
          "Quick audit (audience / path to visit / current posting)",
          "Identify bottlenecks (language / funnel / cadence / DMs)",
          "A 7-day action plan (shortest path to results)",
          "Optional plan suggestion (no pushy sales)",
        ],
    placeholderNote: isJa
      ? "※後で相談イメージ画像に差し替え（今はプレースホルダ）"
      : "Placeholder (replace with a consultation visual later)",
  };

  const recommended = {
    title: isJa ? "こんな方におすすめ" : "Recommended for",
    items: isJa
      ? [
          "外国人が来るのに、英語導線が弱い",
          "投稿が止まっている / 続かない",
          "DM対応できない（英語が不安）",
          "メニュー / 予約導線が整っていない",
          "現場が忙しくて撮影まで手が回らない",
        ]
      : [
          "You get international guests, but your English funnel is weak",
          "Posting has stopped / is hard to sustain",
          "You can’t handle DMs (especially in English)",
          "Menu / booking pathway isn’t clear",
          "You’re too busy on-site to create content",
        ],
  };

  const assures = {
    title: isJa ? "安心して相談できる理由" : "Why it’s safe to talk to us",
    items: isJa
      ? [
          "売り込みはしません（必要なら提案）",
          "相談だけでOK",
          "準備不要（URLがあれば十分）",
          "日英対応（必要な範囲で）",
        ]
      : [
          "No pushy sales (we suggest only if needed)",
          "Consultation-only is totally fine",
          "No prep needed (a URL is enough)",
          "Japanese & English support",
        ],
  };

  const booking = {
    title: isJa ? "予約する" : "Book now",
    lead: isJa
      ? "予約ページから日時を選ぶだけです。"
      : "Pick a time slot from the booking page.",
    note: isJa
      ? "※予約後、自動で Google Meet が発行されます（日本語OK）"
      : "A Google Meet link will be generated automatically (Japanese OK).",
    cta: isJa ? "予約ページへ（Google）" : "Open booking (Google)",
  };

  return (
    <div className="py-14 md:py-20">
      <Container>
        {/* 1) Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
              DoSee Global Growth
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-stone-900 leading-tight">
              {hero.title}
            </h1>

            <p className="mt-4 text-stone-700 leading-relaxed whitespace-pre-line">
              {hero.lead}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={siteConfig.consultationUrl} external variant="solid">
                {hero.cta}
              </Button>

              {/* Aページへ戻る導線（任意）：消してもOK */}
              <Button
                href={`/${locale}/business/globalgrowth`}
                variant="outline"
              >
                {isJa ? "サービスページに戻る" : "Back to service"}
              </Button>
            </div>
          </div>
        </section>

        {/* 2) What happens */}
        <section className="mt-16">
          <SectionHeader title={what.title} />

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-stretch">
            {/* Left bullets */}
            <div className="rounded-3xl border border-stone-200 bg-white p-7">
              <ul className="space-y-3 text-stone-800">
                {what.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right placeholder */}
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7">
              <div className="h-48 md:h-full rounded-2xl border border-dashed border-stone-300 bg-white/60" />
              <p className="mt-3 text-xs text-stone-500">{what.placeholderNote}</p>
            </div>
          </div>
        </section>

        {/* 3) Recommended */}
        <section className="mt-16">
          <SectionHeader title={recommended.title} />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recommended.items.map((t) => (
              <div
                key={t}
                className="rounded-3xl border border-stone-200 bg-white p-6"
              >
                <p className="text-stone-800 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4) Assurance */}
        <section className="mt-16">
          <SectionHeader title={assures.title} />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {assures.items.map((t) => (
              <div
                key={t}
                className="rounded-3xl border border-stone-200 bg-white p-6"
              >
                <p className="text-stone-800 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5) Booking block (most important) */}
        <section className="mt-16">
          <div className="rounded-3xl border border-stone-200 bg-stone-900 p-8 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">{booking.title}</h2>
            <p className="mt-3 text-white/80 leading-relaxed whitespace-pre-line">
              {booking.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={siteConfig.consultationUrl} external variant="solid">
                {booking.cta}
              </Button>

              <span className="inline-flex items-center text-sm text-white/70">
                {booking.note}
              </span>
            </div>
          </div>
        </section>

        {/* 6) Bottom CTA repeat */}
        <section className="mt-10">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-semibold text-stone-900">
              {isJa ? "無料相談（30分）" : "Free Consultation (30 min)"}
            </h3>
            <p className="mt-3 text-stone-700 leading-relaxed whitespace-pre-line">
              {isJa
                ? "まずは状況を見て、最短で効く手を一緒に決めます。\n※飲食店限定"
                : "We’ll review your situation and decide the shortest, effective next steps.\nRestaurant businesses only."}
            </p>

            <div className="mt-6">
              <Button href={siteConfig.consultationUrl} external variant="solid">
                {isJa ? "無料相談を予約する" : "Book a free consultation"}
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}