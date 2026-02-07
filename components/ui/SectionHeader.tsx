export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-stone-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}