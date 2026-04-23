import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { siteConfig } from "@/lib/siteConfig";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

type PlanData = {
  key: string;
  name: string;
  tagline: string;
  price: string;
  note?: string | null;
  highlighted?: boolean;
  ctaLabel: string;
  includesNote?: string | null;
  highlights: readonly string[];
  recommendedFor: string;
};

type FeatureRowData = {
  label: string;
  basic: string;
  standard: string;
  premium: string;
};

type FeatureSectionData = {
  title: string;
  description?: string;
  rows: readonly FeatureRowData[];
};

function PlanCard({
  plan,
  recommendedLabel,
  recommendedForLabel,
  planNotes,
}: {
  plan: PlanData;
  recommendedLabel: string;
  recommendedForLabel: string;
  planNotes: readonly string[];
}) {
  return (
    <div
      className={[
        "relative rounded-3xl bg-white p-8 flex flex-col",
        plan.highlighted
          ? "border-2 border-stone-900"
          : "border border-stone-200",
      ].join(" ")}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-stone-900 px-4 py-1 text-xs text-white">
          {recommendedLabel}
        </span>
      )}

      <h3 className="text-xl font-semibold text-stone-900">{plan.name}</h3>
      <p className="mt-2 text-sm text-stone-600">{plan.tagline}</p>

      <p className="mt-6 text-3xl font-semibold text-stone-900">
        {plan.price}
        {plan.note && (
          <span className="text-sm font-normal text-stone-500"> {plan.note}</span>
        )}
      </p>

      {plan.includesNote && (
        <p className="mt-3 text-xs text-stone-500">{plan.includesNote}</p>
      )}

      <ul className="mt-6 space-y-2 text-sm text-stone-700">
        {plan.highlights.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900" />
            <span className="leading-relaxed">{t}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl bg-stone-50 p-4">
        <p className="text-xs font-semibold text-stone-700">{recommendedForLabel}</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">{plan.recommendedFor}</p>
      </div>

      <div className="mt-8">
        <div className="w-full">
          <Button
            href={siteConfig.consultationUrl}
            variant={plan.highlighted ? "solid" : "outline"}
            external
          >
            {plan.ctaLabel}
          </Button>
        </div>
      </div>

      {planNotes.map((note) => (
        <p key={note} className="mt-2 first:mt-4 text-xs text-stone-500">{note}</p>
      ))}
    </div>
  );
}

function CompareTable({
  section,
  featureLabel,
}: {
  section: FeatureSectionData;
  featureLabel: string;
}) {
  return (
    <div className="mt-10 rounded-3xl border border-stone-200 bg-white overflow-hidden">
      <div className="p-6 md:p-8 border-b border-stone-200">
        <h3 className="text-lg md:text-xl font-semibold text-stone-900">{section.title}</h3>
        {section.description && (
          <p className="mt-2 text-sm text-stone-600">{section.description}</p>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4">
          <div className="p-4 text-sm font-semibold text-stone-700 bg-stone-50 border-b border-stone-200">
            {featureLabel}
          </div>
          <div className="p-4 text-sm font-semibold text-stone-700 bg-stone-50 border-b border-stone-200">Basic</div>
          <div className="p-4 text-sm font-semibold text-stone-900 bg-stone-50 border-b border-stone-200">Standard</div>
          <div className="p-4 text-sm font-semibold text-stone-700 bg-stone-50 border-b border-stone-200">Premium</div>

          {section.rows.map((r) => (
            <div key={r.label} className="contents">
              <div className="p-4 text-sm text-stone-700 border-b border-stone-100">{r.label}</div>
              <div className="p-4 text-sm text-stone-800 border-b border-stone-100">{r.basic}</div>
              <div className="p-4 text-sm text-stone-900 border-b border-stone-100">{r.standard}</div>
              <div className="p-4 text-sm text-stone-800 border-b border-stone-100">{r.premium}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden p-4 space-y-4">
        {section.rows.map((r) => (
          <div key={r.label} className="rounded-2xl border border-stone-200 overflow-hidden">
            <div className="px-4 py-3 bg-stone-50">
              <p className="text-sm font-semibold text-stone-800">{r.label}</p>
            </div>
            <div className="px-4 py-3 space-y-3">
              <div>
                <p className="text-xs text-stone-500">Basic</p>
                <p className="text-sm text-stone-800">{r.basic}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Standard</p>
                <p className="text-sm text-stone-900">{r.standard}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Premium</p>
                <p className="text-sm text-stone-800">{r.premium}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function GlobalGrowthPlansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);
  const d = dict.business.globalGrowthService;

  return (
    <div className="py-14 md:py-20">
      <Container>
        <SectionHeader title={d.pageTitle} subtitle={d.pageSubtitle} />

        {/* Plan cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {d.plans.map((p) => (
            <PlanCard
              key={p.key}
              plan={p}
              recommendedLabel={d.recommendedLabel}
              recommendedForLabel={d.recommendedForLabel}
              planNotes={d.planNotes}
            />
          ))}
        </section>

        <p className="mt-6 text-center text-xs text-stone-500 whitespace-pre-line">
          {d.pricingNote}
        </p>

        {/* Comparison tables */}
        <section className="mt-16">
          {d.featureSections.map((s) => (
            <CompareTable key={s.title} section={s} featureLabel={d.featureLabel} />
          ))}
        </section>

        {/* Initial setup note */}
        <section className="mt-16">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8">
            <h3 className="text-lg font-semibold text-stone-900">{d.initialSetupTitle}</h3>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed whitespace-pre-line">
              {d.initialSetupDesc}
            </p>
            <div className="mt-6">
              <Button href={siteConfig.consultationUrl} variant="solid" external>
                {d.consultCta}
              </Button>
            </div>
            <p className="mt-3 text-xs text-stone-500">{d.initialSetupNote}</p>
          </div>
        </section>
      </Container>
    </div>
  );
}
