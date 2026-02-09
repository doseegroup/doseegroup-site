import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export default async function WellnessBusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const dict = getDictionary(locale);

  const body =
    locale === "ja"
      ? "DoSee Wellnessは、日本茶を中心としたウェルネスプロダクトを展開するブランドです。\n\n忙しい日常の中でも無理なく続けられること。\n身体だけでなく、心にも余白を生むこと。\n\n素材選びからデザイン、体験設計に至るまで、日本的な美意識を大切にしています。"
      : "DoSee Wellness is a brand that builds wellness products inspired by Japanese tea.\n\nDesigned to be easy to continue in busy everyday life—creating space not only for the body, but also for the mind.\n\nFrom ingredients to design and experience, we value Japanese aesthetics.";

  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionHeader title={dict.business.wellnessName} />
        <div className="max-w-3xl text-stone-700 leading-relaxed whitespace-pre-line">
          {body}
        </div>
        <div className="mt-8">
          <Button href={siteConfig.wellnessUrl} external>
            {dict.business.wellnessCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}