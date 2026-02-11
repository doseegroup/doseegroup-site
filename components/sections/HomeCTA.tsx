import type { Locale } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HomeCTA({
  locale,
  title,
  body,
  buttonText,
}: {
  locale: Locale;
  title: string;
  body: string;
  buttonText: string;
}) {
  return (
    <section className="relative py-16 md:py-20">
      {/* 少しだけ暗いトーンで“締め” */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/60" />

      <Container>
        <div className="relative rounded-3xl bg-stone-900/95 text-white p-10 md:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>

            <p className="mt-4 mx-auto max-w-2xl text-stone-200 leading-relaxed whitespace-pre-line">
              {body}
            </p>

            <div className="mt-8">
              <Button href={`/${locale}/contact`} variant="outline">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}