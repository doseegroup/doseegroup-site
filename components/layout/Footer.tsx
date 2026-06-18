import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  const menu = [
    { href: `/${locale}/philosophy`, label: "Philosophy" },
    { href: `/${locale}/business`, label: "Business" },
    { href: `/${locale}/company`, label: "Company" },
    { href: `/${locale}/news`, label: "News" },
    { href: `/${locale}/contact`, label: "Contact" },
  ];

  const social = [
    { href: siteConfig.instagram.wellness, label: "Instagram（DoSee Wellness）" },
    { href: siteConfig.instagram.globalGrowth, label: "Instagram（DoSee Global Growth）" },
    { href: siteConfig.tiktok.globalGrowth, label: "TikTok（DoSee Global Growth）" },
  ];

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto w-[min(1100px,92vw)] py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:pr-6">
            <h3 className="text-base font-semibold tracking-tight text-stone-900">
              DoSee Group
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              Do it first.
              <br />
              See the results.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Menu
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-stone-600">
              {menu.map((it) => (
                <li key={it.href}>
                  <Link className="hover:text-stone-900 transition" href={it.href}>
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand link */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Brand
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-stone-600">
              <li>
                <a
                  className="hover:text-stone-900 transition"
                  href={siteConfig.wellnessUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  DoSee Wellness
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-stone-900 transition"
                  href={`/${locale}/business/globalgrowth`}
                >
                  DoSee Global Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Follow
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-stone-600">
              {social.map((it) => (
                <li key={it.href}>
                  <a
                    className="hover:text-stone-900 transition"
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-xs text-stone-500">
          © {year} {siteConfig.legalName}
        </div>
      </div>
    </footer>
  );
}
