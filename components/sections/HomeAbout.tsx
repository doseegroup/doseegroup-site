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
    <section className="relative py-16 md:py-20">
      {/* セクション背景：少しだけ色味を変えて区切る */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/70 via-white/60 to-white/70" />

      <Container>
        <div className="relative">
          {/* 左寄せ */}
          <SectionHeader title={title} />

          {/* 読ませる面（左寄せのまま） */}
          <div className="mt-8 max-w-3xl rounded-3xl border border-stone-200/70 bg-white/70 backdrop-blur p-8 md:p-10">
            <div className="text-stone-700 leading-relaxed whitespace-pre-line">
              {body}
            </div>

            <div className="mt-8">
              <Button href={`/${locale}/philosophy`} variant="text">
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}