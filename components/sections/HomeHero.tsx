import type { Locale } from "@/lib/i18n";
import Container from "@/components/ui/Container";

export default function HomeHero({
  locale,
  title,
  sub,
}: {
  locale: Locale;
  title: string;
  sub: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* 背景トーン（粒子の上に薄いグラデで“空気”を作る） */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/75" />

      <Container>
        <div className="relative py-20 md:py-28">
          {/* 中央寄せの“面” */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight whitespace-pre-line">
              {title}
            </h1>

            <p className="mt-6 mx-auto max-w-2xl text-stone-700 leading-relaxed whitespace-pre-line">
              {sub}
            </p>
          </div>

          {/* うっすら下に境界（メリハリ用） */}
          <div className="mt-14 mx-auto h-px w-24 bg-stone-200/70" />
        </div>
      </Container>
    </section>
  );
}