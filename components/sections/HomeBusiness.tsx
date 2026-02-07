import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export default function HomeBusiness({
  locale,
}: {
  locale: Locale;
}) {
  const dict = getDictionary(locale);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeader title="Our Business" subtitle={dict.business.lead} />

        <div className="grid gap-6 md:grid-cols-3">
          {/* DoSee Wellness */}
          <div className="rounded-3xl border border-stone-200 p-8 bg-white">
            <h3 className="text-xl font-semibold">
              {dict.business.wellnessName}
            </h3>
            <p className="mt-3 text-stone-700 leading-relaxed">
              {dict.business.wellnessDesc}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`/${locale}/business/wellness`} variant="solid">
                View Details
              </Button>
              <Button
                href={siteConfig.wellnessUrl}
                variant="outline"
                external
              >
                {dict.business.wellnessCta}
              </Button>
            </div>
          </div>

          {/* DoSee Global Growth */}
          <div className="rounded-3xl border border-stone-200 p-8 bg-white">
            <h3 className="text-xl font-semibold">
              {dict.business.globalGrowthTitle}
            </h3>
            <p className="mt-3 text-stone-700 leading-relaxed">
              {dict.business.globalGrowthDesc}
            </p>

            <div className="mt-6">
              <Button
                href={`/${locale}/business/globalgrowth`}
                variant="solid"
              >
                View Details
              </Button>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="rounded-3xl border border-dashed border-stone-300 p-8 bg-stone-50">
            <h3 className="text-xl font-semibold text-stone-500">
              Coming Soon
            </h3>
            <p className="mt-3 text-stone-500 leading-relaxed">
              {dict.business.comingSoon}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}