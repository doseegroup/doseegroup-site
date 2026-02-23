"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // メニュー開閉時にbodyスクロールを制御
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

        {/* デスクトップナビ */}
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

          {/* ハンバーガーボタン（モバイルのみ） */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-stone-700 hover:text-stone-900 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              // ✕ アイコン
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              // ☰ アイコン
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50/95 backdrop-blur">
          <nav className="mx-auto w-[min(1100px,92vw)] py-4 flex flex-col gap-0">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="py-3.5 text-sm text-stone-700 hover:text-stone-900 border-b border-stone-100 last:border-b-0 transition"
                onClick={() => setMenuOpen(false)}
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}