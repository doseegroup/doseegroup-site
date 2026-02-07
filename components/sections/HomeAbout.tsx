import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";

export default function HomeAbout({
  title,
  body,
  ctaLabel,
  locale,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  locale: Locale;
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionHeader title={title} />

        <div className="max-w-3xl text-stone-700 leading-relaxed whitespace-pre-line">
          {body}
        </div>

        <div className="mt-8">
          <Button href={`/${locale}/philosophy`} variant="text">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}