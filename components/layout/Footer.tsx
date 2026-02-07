import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto w-[min(1100px,92vw)] py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-sm text-stone-600">
            © {new Date().getFullYear()} {siteConfig.legalName}
          </div>

          <div className="flex items-center gap-5 text-sm text-stone-700">
            <Link className="hover:text-stone-900" href={`/${locale}/company`}>
              {locale === "ja" ? "Company" : "Company"}
            </Link>
            <Link className="hover:text-stone-900" href={`/${locale}/contact`}>
              {locale === "ja" ? "Contact" : "Contact"}
            </Link>
            <a
              className="hover:text-stone-900"
              href={siteConfig.wellnessUrl}
              target="_blank"
              rel="noreferrer"
            >
              DoSee Wellness
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}