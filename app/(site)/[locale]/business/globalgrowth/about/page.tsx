import Image from "next/image";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default async function GlobalGrowthAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);
  const d = dict.business.globalGrowthAbout;
  const consultPath = `/${locale}/business/globalgrowth/consult`;

  return (
    <div className="py-10 md:py-20">
      <Container>

        {/* ─── Slide 1 ─── */}
        <section>
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-orange-500 shrink-0" />
            {d.s1.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-lg md:text-xl font-bold text-teal-500">{d.s1.leadTitle}</p>
              <div className="mt-4 rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 md:px-5 md:py-4 text-stone-700 leading-relaxed text-sm">
                {d.s1.leadDesc}
              </div>
              <ul className="mt-6 space-y-4">
                {d.s1.issues.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-xs font-bold">
                      ✕
                    </span>
                    <span className="text-stone-800 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-about-1.png"
                alt={d.s1.imgAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Slide 2 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-orange-500 shrink-0" />
            {d.s2.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:gap-10 md:grid-cols-2 md:items-center">
            <div className="text-center">
              <p className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-orange-500 leading-none">
                Check
              </p>
              <p className="mt-4 text-stone-600">{d.s2.checkSub}</p>
            </div>

            <div>
              <p className="text-lg md:text-xl font-bold text-teal-500">{d.s2.searchTitle}</p>
              <p className="mt-1 font-semibold text-orange-500">Google Maps → Instagram</p>
              <p className="mt-4 text-stone-700 leading-relaxed">{d.s2.searchDesc}</p>
              <p className="mt-3 text-stone-800 font-medium">{d.s2.searchNote}</p>
            </div>
          </div>
        </section>

        {/* ─── Slide 3 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-orange-500 shrink-0" />
            {d.s3.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-6 md:grid-cols-2">
            <div>
              <div className="rounded-2xl border border-stone-200 bg-white p-5 md:p-7">
                <p className="text-lg font-bold text-teal-500">{d.s3.gap1Title}</p>
                <p className="mt-3 text-stone-700 leading-relaxed">{d.s3.gap1Desc}</p>
              </div>
              <div className="mt-4 rounded-xl border-2 border-red-300 bg-red-50 px-5 py-3 text-center">
                <p className="font-bold text-red-600">{d.s3.gap1Result}</p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-stone-200 bg-white p-5 md:p-7">
                <p className="text-lg font-bold text-teal-500">{d.s3.gap2Title}</p>
                <p className="mt-3 text-stone-700 leading-relaxed">{d.s3.gap2Desc}</p>
              </div>
              <div className="mt-4 rounded-xl border-2 border-orange-300 bg-orange-50 px-5 py-3 text-center">
                <p className="font-bold text-orange-700">{d.s3.gap2Result}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Slide 4 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-orange-500 shrink-0" />
            {d.s4.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-lg md:text-xl font-bold text-teal-500">{d.s4.leadTitle}</p>
              <p className="mt-3 text-stone-700 leading-relaxed">{d.s4.leadDesc}</p>
              <ul className="mt-6 space-y-3">
                {d.s4.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span className="text-stone-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-about-2.png"
                alt={d.s4.imgAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Slide 5 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-orange-500 shrink-0" />
            {d.s5.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {d.s5.pillars.map((col) => (
              <div
                key={col.title}
                className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8 text-center"
              >
                <p className="text-4xl">{col.icon}</p>
                <p className="mt-4 text-lg font-bold text-teal-500">{col.title}</p>
                <p className="mt-3 text-stone-700 leading-relaxed text-sm">{col.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Slide 6 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-orange-500 shrink-0" />
            {d.s6.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-lg md:text-xl font-bold text-teal-500">{d.s6.leadTitle}</p>
              <p className="mt-4 text-stone-700 leading-relaxed">{d.s6.body1}</p>
              <p className="mt-3 text-stone-700 leading-relaxed">{d.s6.body2}</p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-about-3.png"
                alt={d.s6.imgAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Slide 7 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-orange-500 shrink-0" />
            {d.s7.title}
          </h2>

          <div className="mt-8 md:mt-12 space-y-5 md:space-y-6">
            {d.s7.items.map((item) => (
              <div key={item.label} className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl shrink-0 w-8 text-center">{item.icon}</span>
                <div>
                  <span className="font-bold text-stone-900">{item.label}：</span>
                  <span className="text-stone-700">{item.body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-3xl bg-stone-900 p-7 sm:p-10 md:p-14 text-white text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{d.cta.title}</h2>
            <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base">{d.cta.lead}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={consultPath} variant="solid">{d.cta.ctaPrimary}</Button>
              <Button href={`/${locale}/business/globalgrowth/service`} variant="outline">
                {d.cta.ctaSecondary}
              </Button>
            </div>
          </div>
        </section>

      </Container>
    </div>
  );
}
