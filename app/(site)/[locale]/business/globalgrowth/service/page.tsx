import { siteConfig } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

export default function GlobalGrowthPlans() {
  return (
    <section className="mt-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-stone-900">
          プラン・料金
        </h2>
        <p className="mt-3 text-stone-600">
          店舗の状況に合わせて、無理のない形で設計します
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* ================= Basic ================= */}
        <div className="rounded-3xl border border-stone-200 bg-white p-8 flex flex-col">
          <h3 className="text-xl font-semibold">Basic</h3>
          <p className="mt-2 text-sm text-stone-600">
            まずは最低限から
          </p>

          <p className="mt-6 text-3xl font-semibold">
            ¥50,000<span className="text-sm font-normal text-stone-500"> / 月〜</span>
          </p>

          <ul className="mt-6 space-y-3 text-sm text-stone-700">
            <li>・定型DM対応（営業時間・アクセス等）</li>
            <li>・英語対応（定型文のみ）</li>
            <li>・基本的な投稿設計</li>
            <li>・食事制限の可否表記（事前指定）</li>
          </ul>

          <div className="mt-auto pt-8">
            <Button
              href={siteConfig.consultationUrl}
              variant="outline"
              external
              className="w-full"
            >
              無料相談で確認する
            </Button>
          </div>
        </div>

        {/* ================= Standard ================= */}
        <div className="relative rounded-3xl border-2 border-stone-900 bg-white p-8 flex flex-col">
          {/* Recommended badge */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-stone-900 px-4 py-1 text-xs text-white">
            Recommended
          </span>

          <h3 className="text-xl font-semibold">Standard</h3>
          <p className="mt-2 text-sm text-stone-600">
            いちばん選ばれている
          </p>

          <p className="mt-6 text-3xl font-semibold">
            ¥80,000<span className="text-sm font-normal text-stone-500"> / 月〜</span>
          </p>

          <ul className="mt-6 space-y-3 text-sm text-stone-700">
            <li>・自然な英語DM対応</li>
            <li>・インバウンド向け投稿運用</li>
            <li>・食事制限・宗教配慮の明確化</li>
            <li>・誤解を防ぐ表記設計</li>
          </ul>

          <div className="mt-auto pt-8">
            <Button
              href={siteConfig.consultationUrl}
              variant="solid"
              external
              className="w-full"
            >
              無料相談を予約する
            </Button>
          </div>
        </div>

        {/* ================= Premium ================= */}
        <div className="rounded-3xl border border-stone-200 bg-white p-8 flex flex-col">
          <h3 className="text-xl font-semibold">Premium</h3>
          <p className="mt-2 text-sm text-stone-600">
            安心と信頼まで設計
          </p>

          <p className="mt-6 text-3xl font-semibold">
            ¥120,000<span className="text-sm font-normal text-stone-500"> / 月〜</span>
          </p>

          <ul className="mt-6 space-y-3 text-sm text-stone-700">
            <li>・高度な食事制限・宗教配慮対応</li>
            <li>・誤解・クレームの一次切り分け</li>
            <li>・ブランド視点での投稿設計</li>
            <li>・NG表現・表記ルール管理</li>
          </ul>

          <div className="mt-auto pt-8">
            <Button
              href={siteConfig.consultationUrl}
              variant="outline"
              external
              className="w-full"
            >
              無料相談で確認する
            </Button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-stone-500">
        ※ 料金は目安です。対応範囲・ボリュームにより、無料相談後に確定します。
      </p>
    </section>
  );
}