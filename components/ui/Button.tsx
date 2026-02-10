import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "text";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition";
  const solid = "bg-stone-900 text-white hover:bg-stone-800";
  const outline =
    "border border-stone-300 text-stone-800 hover:bg-stone-100";

  // 追加：テキストリンク風（既存に影響しない）
  const text =
    "inline-flex items-center gap-1 text-sm font-medium text-stone-900 hover:underline underline-offset-4";

  const cls =
    variant === "text"
      ? text
      : `${base} ${variant === "solid" ? solid : outline}`;

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