import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import Container from "@/components/ui/Container";

export default function HomeGrowth({
  eyebrow,
  title,
  locale,
}: {
  eyebrow: string;
  title: string;
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden py-0">
      {/*
        ─────────────────────────────────────────
        右半分の背景画像エリア（Desktop）
        画像ファイルを /public/images/bg/growth-bg.png に配置してください。
        bg-contain で画像全体を表示、bg-right-bottom で右下に寄せています。
        ─────────────────────────────────────────
      */}
      <div
        className="hidden md:block absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/growth-bg.png')" }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[280px] md:min-h-[480px] items-center">
          {/* 左カラム：テキスト（クリックで business/globalgrowth へ遷移） */}
          <Link
            href={`/${locale}/business/globalgrowth`}
            className="group py-10 sm:py-16 md:py-32 pl-4 sm:pl-8 md:pl-32 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 rounded-sm"
          >
            <p className="text-stone-500 tracking-[0.25em] text-sm mb-4 md:mb-5 md:ml-30 transition-colors group-hover:text-stone-700">
              {eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-stone-900 leading-snug transition-colors group-hover:text-stone-600">
              {title}
            </h2>
            <span className="mt-4 md:mt-5 inline-flex items-center gap-2 text-sm text-stone-500 transition-all group-hover:text-stone-800 group-hover:gap-3">
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
            </span>
          </Link>

          {/* 右カラム：Desktop では画像エリアのスペーサー */}
          <div className="hidden md:block" aria-hidden="true" />
        </div>
      </Container>

      {/* モバイル用画像エリア */}
      <div
        className="md:hidden h-48 sm:h-56 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg/growth-bg.png')" }}
        aria-hidden="true"
      />
    </section>
  );
}
