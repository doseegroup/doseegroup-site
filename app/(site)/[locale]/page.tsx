import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import HomeHero from "@/components/sections/HomeHero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeBusiness from "@/components/sections/HomeBusiness";
import HomeCTA from "@/components/sections/HomeCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  return (
    <>
      <HomeHero
        locale={locale}
        title={dict.home.heroTitle}
        sub={dict.home.heroSub}
      />

      <HomeAbout
        locale={locale}
        title={dict.sections.aboutTitle}
        body={dict.sections.aboutBody}
        ctaLabel={dict.sections.aboutCta}
      />

      <HomeBusiness
        locale={locale}
        title={dict.sections.businessTitle}
        wellnessName={dict.business.wellnessName}
        wellnessDesc={dict.business.wellnessDesc}
        wellnessCta={dict.business.wellnessCta}
      />

      <HomeCTA
        locale={locale}
        title={dict.sections.ctaTitle}
        body={dict.sections.ctaBody}
        buttonText={dict.sections.ctaButton}
      />
    </>
  );
}