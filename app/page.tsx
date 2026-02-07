import { redirect } from "next/navigation";
import { isLocale } from "@/lib/i18n";

export default async function RootRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 不正な locale の場合は ja にフォールバック
  const targetLocale = isLocale(locale) ? locale : "ja";

  redirect(`/${targetLocale}`);
}