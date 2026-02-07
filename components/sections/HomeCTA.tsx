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
    <section className="py-16 md:py-20">
      <Container>
        <div className="rounded-3xl bg-stone-900 text-white p-10 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
          <p className="mt-4 text-stone-200 leading-relaxed whitespace-pre-line max-w-2xl">
            {body}
          </p>
          <div className="mt-8">
            <Button href={`/${locale}/contact`} variant="outline">
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}