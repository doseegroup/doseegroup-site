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
    <section className="relative py-14 md:py-20">
      {/* 背景トーン：ここで一段“落ち着かせる” */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-stone-50/60 to-white/60" />

      <Container>
        <div className="relative">
          {/* 中央タイトルにしたいので、SectionHeaderを中央寄せするラッパー */}
          <div className="text-center">
            <SectionHeader title="Our Business" subtitle={dict.business.lead} />
          </div>

          {/* カード全体も“面”に載せる（余白と影でメリハリ） */}
          <div className="mt-10 rounded-[2rem] border border-stone-200/70 bg-white/65 backdrop-blur p-6 md:p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3">
              {/* DoSee Wellness */}
              <div className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white">
                <Link
                  href={`/${locale}/business/wellness`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: "url('/images/bg/wellcha-bg.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

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
          </div>

          {/* 下に薄い区切り */}
          <div className="mt-14 mx-auto h-px w-24 bg-stone-200/70" />
        </div>
      </Container>
    </section>
  );
}