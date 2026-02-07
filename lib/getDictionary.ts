import type { Locale } from "@/lib/i18n";
import { ja } from "@/lib/dictionaries/ja";
import { en } from "@/lib/dictionaries/en";

export function getDictionary(locale: Locale) {
  return locale === "ja" ? ja : en;
}