import Container from "@/components/ui/Container";

export default function NewsDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="text-sm text-stone-500">News</div>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          {params.slug}
        </h1>
        <p className="mt-6 text-stone-700">
          （ここは後でMDXやCMSで差し替え予定）
        </p>
      </Container>
    </section>
  );
}