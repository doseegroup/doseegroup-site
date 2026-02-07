import type { Locale } from "@/lib/i18n";
import Button from "@/components/ui/Button";
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
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-50" />
      <Container>
        <div className="relative py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight whitespace-pre-line">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-stone-700 leading-relaxed whitespace-pre-line">
            {sub}
          </p>
        </div>
      </Container>
    </section>
  );
}