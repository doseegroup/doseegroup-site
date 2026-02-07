// components/seo/JsonLd.tsx
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";

type Props = {
  locale: Locale;
};

export default function JsonLd({ locale }: Props) {
  const urlBase = siteConfig.url.replace(/\/$/, "");
  const siteUrl = `${urlBase}/${locale}`;
  const orgId = `${urlBase}/#organization`;
  const websiteId = `${urlBase}/#website`;

  const isJa = locale === "ja";

  // ※ 会社名・住所などは、いま確定している範囲だけ入れる
  //   （未登記なら設立日は入れない/入れても "foundingDate" は避けるのが無難）
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: "DoSee Group",
    legalName: "株式会社DoSee Group",
    url: urlBase,
    logo: `${urlBase}/images/logo.png`, 
    image: siteConfig.ogImage?.startsWith("http") ? siteConfig.ogImage : `${urlBase}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C",
      addressLocality: "渋谷区",
      addressRegion: "東京都",
      postalCode: "150-0043",
      addressCountry: "JP",
    },
    // 代表者を載せたい場合（任意）
    // founder: { "@type": "Person", name: "若杉 悠斗" },

    sameAs: [
      // SNSが確定したら追加
      // "https://www.instagram.com/xxxxx",
      // "https://www.linkedin.com/company/xxxxx",
    ].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: "DoSee Group",
    inLanguage: isJa ? "ja" : "en",
    publisher: { "@id": orgId },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}