import Image from "next/image";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";

export default async function GlobalGrowthMeoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);
  const d = dict.business.globalGrowthMeo;
  const consultPath = `/${locale}/business/globalgrowth/consult`;

  return (
    <div className="py-10 md:py-20">
      <Container>

        {/* ─── Hero ─── */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
            {d.hero.title}
            <br />
            <span className="text-blue-600">{d.hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-500">{d.hero.sub}</p>
        </section>

        {/* ─── Slide 1 ─── */}
        <section className="mt-8 md:mt-12">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            {d.s1.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-6 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-lg md:text-xl font-bold text-stone-800 mb-4">{d.s1.oldTitle}</p>
              <ul className="space-y-3 text-stone-600">
                {d.s1.oldItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-stone-400">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50 p-6">
              <p className="text-sm font-bold text-stone-700 mb-3">{d.s1.newTitle}</p>
              <ul className="space-y-3 text-stone-700">
                {d.s1.newItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <span className="mt-1 text-stone-400">・</span>
                    <span>
                      <span className="text-blue-600 font-semibold">{item.label}</span>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Slide 2 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            {d.s2.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {d.s2.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7">
                <p className="text-3xl mb-4">{card.icon}</p>
                <p className="text-lg font-bold text-stone-900 mb-3">{card.title}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Slide 3 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            {d.s3.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="text-center">
              <p className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-blue-600 leading-none">
                {d.s3.stat}
              </p>
              <p className="mt-4 text-stone-700 font-medium">{d.s3.statSub}</p>
              <p className="mt-4 text-xs text-stone-400">{d.s3.statSource}</p>
            </div>

            <div>
              <p className="text-lg md:text-xl font-bold text-stone-900 mb-2">{d.s3.keyTitle}</p>
              <p className="text-stone-600 mb-5">{d.s3.keyDesc}</p>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-stone-400">・</span>
                  <span>
                    <span className="text-blue-600 font-semibold">{d.s3.b1Highlight}</span>
                    {d.s3.b1Suffix}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-stone-400">・</span>
                  <span>
                    <span className="text-blue-600 font-semibold">{d.s3.b2Highlight}</span>
                    {d.s3.b2Suffix}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-stone-400">・</span>
                  <span>
                    {d.s3.b3Prefix}
                    <span className="text-amber-500 font-semibold">{d.s3.b3Highlight}</span>
                    {d.s3.b3Suffix}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Slide 4 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            {d.s4.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-7">
              {d.s4.points.map((item) => (
                <div key={item.label}>
                  <p className={`font-bold text-base md:text-lg ${item.color} mb-1`}>{item.label}</p>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-meo-ai.jpg"
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
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            {d.s5.title}
          </h2>

          <div className="mt-8 md:mt-12 overflow-x-auto">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 md:px-6 font-semibold rounded-tl-xl">{d.s5.headers[0]}</th>
                  <th className="text-left px-4 py-3 md:px-6 font-semibold">{d.s5.headers[1]}</th>
                  <th className="text-left px-4 py-3 md:px-6 font-semibold rounded-tr-xl">{d.s5.headers[2]}</th>
                </tr>
              </thead>
              <tbody>
                {d.s5.rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 md:px-6 font-semibold text-amber-500">{row.label}</td>
                    <td className="px-4 py-3 md:px-6 text-stone-600">{row.old}</td>
                    <td className="px-4 py-3 md:px-6 text-stone-800">{row.now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Slide 6 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            {d.s6.title}
          </h2>

          <div className="mt-8 md:mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {d.s6.steps.map((card, i) => (
              <div key={i} className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
                <div className="relative h-40 bg-stone-100">
                  <Image
                    src={`/images/business/globalgrowth-meo-step${i + 1}.jpg`}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 text-center">
                  <p className="text-base md:text-lg font-bold text-stone-900 mb-3">{card.step}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Slide 7 ─── */}
        <section className="mt-16 md:mt-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-snug whitespace-pre-line">
                {d.s7.title}
              </h2>
              <p className="mt-6 text-stone-600 leading-relaxed whitespace-pre-line">{d.s7.body1}</p>
              <p className="mt-4 text-stone-600 leading-relaxed">{d.s7.body2}</p>
              <p className="mt-6 text-blue-600 font-bold text-lg">{d.s7.result}</p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-meo-restaurant.jpg"
                alt={d.s7.imgAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-3xl bg-gradient-to-br from-stone-800 to-stone-950 p-7 sm:p-10 md:p-16 text-white text-center">
            <p className="text-xs tracking-widest text-stone-400 uppercase mb-4">Free Consult</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{d.cta.title}</h2>
            <p className="mt-4 text-stone-300 leading-relaxed text-sm md:text-base">{d.cta.lead}</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={consultPath}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100 text-center"
              >
                {d.cta.ctaPrimary}
              </a>
              <a
                href={`/${locale}/business/globalgrowth`}
                className="rounded-full border border-stone-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-stone-300 text-center"
              >
                {d.cta.ctaSecondary}
              </a>
            </div>
            <p className="mt-5 text-xs text-stone-500">{d.cta.note}</p>
          </div>
        </section>

      </Container>
    </div>
  );
}
