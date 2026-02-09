import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export default function HomeBusiness({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeader title="Our Business" subtitle={dict.business.lead} />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* DoSee Wellness (card links to internal details) */}
          <div className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white">
            <Link
              href={`/${locale}/business/wellness`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: "url('/images/bg/wellcha-bg.jpg')" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

              {/* Content */}
              <div className="relative p-8">
                <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-900">
                  DoSee Wellness
                </span>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {dict.business.wellnessName}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  {dict.business.wellnessDesc}
                </p>
              </div>
            </Link>

            {/* Buttons (optional) */}
            <div className="relative px-8 pb-8">
              <div className="flex flex-wrap gap-3">
                <Button href={`/${locale}/business/wellness`} variant="solid">
                  View Details
                </Button>
                <Button href={siteConfig.wellnessUrl} variant="outline" external>
                  {dict.business.wellnessCta}
                </Button>
              </div>
            </div>
          </div>

          {/* DoSee Global Growth */}
          <div className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white">
            <Link
              href={`/${locale}/business/globalgrowth`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: "url('/images/bg/dosee-bg.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

              <div className="relative p-8">
                <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-900">
                  DoSee Global Growth
                </span>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {dict.business.globalGrowthTitle}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  {dict.business.globalGrowthDesc}
                </p>
              </div>
            </Link>

            <div className="relative px-8 pb-8">
              <Button href={`/${locale}/business/globalgrowth`} variant="solid">
                View Details
              </Button>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="group relative overflow-hidden rounded-3xl border border-dashed border-stone-300 bg-stone-50">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url('/images/bg/comingsoon-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-white/70" />

            <div className="relative p-8">
              <span className="inline-flex items-center rounded-full bg-stone-900/5 px-3 py-1 text-xs font-semibold text-stone-700">
                Coming Soon
              </span>

              <h3 className="mt-4 text-xl font-semibold text-stone-700">
                Coming Soon
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {dict.business.comingSoon}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}