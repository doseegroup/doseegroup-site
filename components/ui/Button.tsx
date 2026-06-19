import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outlineLight" | "text";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 sm:py-2.5 text-sm transition";
  const solid = "bg-stone-900 text-white hover:bg-stone-800";
  const outline =
    "border border-stone-300 text-stone-800 hover:bg-stone-100";
  // 暗い画像の上に重ねる用：白枠＋白文字
  const outlineLight =
    "border border-white/70 text-white hover:bg-white/10";

  // 追加：テキストリンク風（既存に影響しない）
  const text =
    "inline-flex items-center gap-1 text-sm font-medium text-stone-900 hover:underline underline-offset-4";

  const variantClass =
    variant === "solid"
      ? solid
      : variant === "outlineLight"
        ? outlineLight
        : outline;

  const cls = variant === "text" ? text : `${base} ${variantClass}`;

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}