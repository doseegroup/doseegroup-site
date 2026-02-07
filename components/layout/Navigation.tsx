"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { otherLocale } from "@/lib/i18n";

type Dict = {
  nav: Record<string, string>;
};

function replaceLocaleInPath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  // ["", "ja", "xxx"...]
  if (parts.length >= 2 && (parts[1] === "ja" || parts[1] === "en")) {
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }
  return `/${nextLocale}`;
}

export default function Navigation({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  const pathname = usePathname();
  const toLocale = otherLocale(locale);
  const switchHref = replaceLocaleInPath(pathname, toLocale);

  const items = [
    { href: `/${locale}/philosophy`, label: dict.nav.philosophy },
    { href: `/${locale}/business`, label: dict.nav.business },
    { href: `/${locale}/company`, label: dict.nav.company },
    { href: `/${locale}/news`, label: dict.nav.news },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-stone-50/80 border-b border-stone-200">
      <div className="mx-auto w-[min(1100px,92vw)] py-4 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-semibold tracking-tight text-stone-900"
        >
          DoSee Group
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-stone-700">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="hover:text-stone-900 transition"
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            className="text-xs px-3 py-1.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 transition"
            aria-label="Switch language"
          >
            {toLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}