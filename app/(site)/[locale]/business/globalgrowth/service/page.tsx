import { siteConfig } from "@/lib/siteConfig";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

type PlanKey = "basic" | "standard" | "premium";

type Plan = {
  key: PlanKey;
  name: string;
  tagline: string;
  price: string;
  note?: string;
  highlighted?: boolean;
  ctaLabel: string;

  // ✅ 追加：プラン別に表示したい内容
  includesNote?: string; // Standard/Premium だけ
  highlights: string[]; // 箇条書き
  recommendedFor: string; // 「こんな店舗におすすめ」
};

type FeatureRow = {
  label: string;
  basic: string;
  standard: string;
  premium: string;
  note?: string;
};

type FeatureSection = {
  title: string;
  description?: string;
  rows: FeatureRow[];
};

const plans: Plan[] = [
  {
    key: "basic",
    name: "Basic",
    tagline: "まず最低限、外国人対応を整える",
    price: "¥50,000",
    note: "/ 月〜",
    ctaLabel: "無料相談で確認する",
    highlights: [
      "定型英語DM対応（営業時間・アクセス・予約方法など）",
      "メニュー／価格帯の基本案内",
      "月8投稿（週2）｜フィード中心",
      "簡易リール（月2まで）",
      "ストーリー週3（テンプレ運用）",
      "日英キャプション（短く・誤解しない表現）",
      "月1レポート（反応＋改善点）",
    ],
    recommendedFor: "初めて外注する／まず最低限整えたい小規模店",
  },
  {
    key: "standard",
    name: "Standard",
    tagline: "来店につなげる、実務レベルの運用",
    price: "¥80,000",
    note: "/ 月〜",
    highlighted: true,
    ctaLabel: "無料相談を予約する",
    includesNote: "※ Basic の全内容を含みます",
    highlights: [
      "英語DM：自然文対応",
      "予約前の案内・来店誘導",
      "観光客向け利用説明（決済・マナー）",
      "月12投稿（週3）｜リール月4まで",
      "ストーリー週5（導線強化）",
      "英語キャプション最適化",
      "月1回MTG（30分）",
    ],
    recommendedFor: "観光エリア／費用対効果を重視したい店舗",
  },
  {
    key: "premium",
    name: "Premium",
    tagline: "DMを、集客と改善に使う",
    price: "¥120,000",
    note: "/ 月〜",
    ctaLabel: "無料相談で確認する",
    includesNote: "※ Standard の全内容を含みます",
    highlights: [
      "食事制限・宗教配慮の詳細説明",
      "誤解が起きやすい点の事前補足",
      "クレーム一次受付（切り分けのみ）",
      "DM内容の傾向分析・改善提案",
      "優先返信・繁忙期対応（上限あり）",
      "月16投稿（週4）｜リール月5まで",
      "ストーリー毎日（イベント対応含む）",
    ],
    recommendedFor:
      "高単価／ブランド重視／外国人対応で失敗したくない店舗",
  },
];

const featureSections: FeatureSection[] = [
  {
    title: "DM対応",
    description: "来店前の不安を潰す。DMを“接客”として運用します。",
    rows: [
      {
        label: "英語DM",
        basic: "定型文のみ",
        standard: "自然文対応",
        premium: "自然文＋優先対応",
      },
      {
        label: "基本案内（範囲）",
        basic: "営業時間/アクセス/予約方法案内/価格帯/TA/店内",
        standard: "Basic＋拡張",
        premium: "Standard＋高度対応",
      },
      {
        label: "予約前の案内・誘導",
        basic: "—",
        standard: "◯（導線を作る）",
        premium: "◯（優先）",
      },
      {
        label: "観光客向け案内（決済/マナー）",
        basic: "—",
        standard: "◯",
        premium: "◯",
      },
      {
        label: "団体・貸切の条件案内",
        basic: "—",
        standard: "◯（条件がある場合）",
        premium: "◯",
      },
      {
        label: "FAQテンプレ対応",
        basic: "◯",
        standard: "◯",
        premium: "◯（改善提案あり）",
      },
      {
        label: "食事制限・宗教配慮（詳細説明）",
        basic: "—",
        standard: "—",
        premium: "◯",
      },
      {
        label: "食事制限関連クレーム一次受付",
        basic: "—",
        standard: "—",
        premium: "◯（切り分けのみ）",
      },
      {
        label: "繁忙期の柔軟対応",
        basic: "—",
        standard: "—",
        premium: "◯（上限あり）",
      },
      {
        label: "DM分析・改善提案",
        basic: "—",
        standard: "—",
        premium: "◯（傾向分析）",
      },
    ],
  },
  {
    title: "Feed投稿",
    description: "投稿の量より“導線”。来店・予約につながる設計にします。",
    rows: [
      {
        label: "フィード投稿数",
        basic: "月8（週2）",
        standard: "月12（週3）",
        premium: "月16（週4）",
      },
      {
        label: "リール（上限）",
        basic: "月2（簡易）",
        standard: "月4",
        premium: "月5",
      },
      {
        label: "ストーリー頻度",
        basic: "週3（テンプレ運用）",
        standard: "週5（導線設計）",
        premium: "毎日（イベント対応含む）",
      },
      {
        label: "日英キャプション",
        basic: "英語は短い定型（誤解しない）",
        standard: "読まれる形に最適化",
        premium: "最適化＋表記ルール管理",
      },
      {
        label: "月次レポート",
        basic: "月1（反応＋次月改善）",
        standard: "月1（改善前提）",
        premium: "月1（深め）",
      },
      {
        label: "月次MTG（30分）",
        basic: "—",
        standard: "月1",
        premium: "必要に応じて",
      },
      {
        label: "ブランド視点の投稿設計",
        basic: "—",
        standard: "—",
        premium: "◯",
      },
    ],
  },
  {
    title: "食事制限・宗教配慮",
    description: "誤解・不安・炎上リスクを減らすための“表記設計”です。",
    rows: [
      {
        label: "表記方針の設定",
        basic: "可否を表記（事前指定）",
        standard: "明確化＋誤解を防ぐ表記設計",
        premium: "詳細説明＋補足（優先情報として扱う）",
      },
      {
        label: "事前に誤解を防ぐ補足",
        basic: "—",
        standard: "◯",
        premium: "◯（丁寧に）",
      },
      {
        label: "NG表現・表記ルール管理",
        basic: "—",
        standard: "—",
        premium: "◯（NGワード含む）",
      },
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={[
        "relative rounded-3xl bg-white p-8 flex flex-col",
        plan.highlighted
          ? "border-2 border-stone-900"
          : "border border-stone-200",
      ].join(" ")}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-stone-900 px-4 py-1 text-xs text-white">
          Recommended
        </span>
      )}

      <h3 className="text-xl font-semibold text-stone-900">{plan.name}</h3>
      <p className="mt-2 text-sm text-stone-600">{plan.tagline}</p>

      <p className="mt-6 text-3xl font-semibold text-stone-900">
        {plan.price}
        {plan.note && (
          <span className="text-sm font-normal text-stone-500"> {plan.note}</span>
        )}
      </p>

      {/* ✅ Standard/Premium のみ表示 */}
      {plan.includesNote && (
        <p className="mt-3 text-xs text-stone-500">{plan.includesNote}</p>
      )}

      {/* ✅ プラン別：箇条書き */}
      <ul className="mt-6 space-y-2 text-sm text-stone-700">
        {plan.highlights.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900" />
            <span className="leading-relaxed">{t}</span>
          </li>
        ))}
      </ul>

      {/* ✅ プラン別：おすすめ */}
      <div className="mt-6 rounded-2xl bg-stone-50 p-4">
        <p className="text-xs font-semibold text-stone-700">こんな店舗におすすめ</p>
        <p className="mt-2 text-sm text-stone-700 leading-relaxed">
          {plan.recommendedFor}
        </p>
      </div>

      <div className="mt-8">
        {/* ButtonにclassNameを渡さず、ラッパー側で幅を制御 */}
        <div className="w-full">
          <Button
            href={siteConfig.consultationUrl}
            variant={plan.highlighted ? "solid" : "outline"}
            external
          >
            {plan.ctaLabel}
          </Button>
        </div>
      </div>

      {/* ✅ 注意書き（現状維持） */}
      <p className="mt-4 text-xs text-stone-500">
        ※ Standard は Basic の全内容を含みます / Premium は Standard の全内容を含みます
      </p>
      <p className="mt-2 text-xs text-stone-500">
        ※ 予約確定・変更・キャンセル対応は含みません
      </p>
    </div>
  );
}

function CompareTable({ section }: { section: FeatureSection }) {
  return (
    <div className="mt-10 rounded-3xl border border-stone-200 bg-white overflow-hidden">
      <div className="p-6 md:p-8 border-b border-stone-200">
        <h3 className="text-lg md:text-xl font-semibold text-stone-900">
          {section.title}
        </h3>
        {section.description && (
          <p className="mt-2 text-sm text-stone-600">{section.description}</p>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4">
          <div className="p-4 text-sm font-semibold text-stone-700 bg-stone-50 border-b border-stone-200">
            機能
          </div>
          <div className="p-4 text-sm font-semibold text-stone-700 bg-stone-50 border-b border-stone-200">
            Basic
          </div>
          <div className="p-4 text-sm font-semibold text-stone-900 bg-stone-50 border-b border-stone-200">
            Standard
          </div>
          <div className="p-4 text-sm font-semibold text-stone-700 bg-stone-50 border-b border-stone-200">
            Premium
          </div>

          {section.rows.map((r) => (
            <div key={r.label} className="contents">
              <div className="p-4 text-sm text-stone-700 border-b border-stone-100">
                {r.label}
              </div>
              <div className="p-4 text-sm text-stone-800 border-b border-stone-100">
                {r.basic}
              </div>
              <div className="p-4 text-sm text-stone-900 border-b border-stone-100">
                {r.standard}
              </div>
              <div className="p-4 text-sm text-stone-800 border-b border-stone-100">
                {r.premium}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden p-4 space-y-4">
        {section.rows.map((r) => (
          <div
            key={r.label}
            className="rounded-2xl border border-stone-200 overflow-hidden"
          >
            <div className="px-4 py-3 bg-stone-50">
              <p className="text-sm font-semibold text-stone-800">{r.label}</p>
            </div>
            <div className="px-4 py-3 space-y-3">
              <div>
                <p className="text-xs text-stone-500">Basic</p>
                <p className="text-sm text-stone-800">{r.basic}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Standard</p>
                <p className="text-sm text-stone-900">{r.standard}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500">Premium</p>
                <p className="text-sm text-stone-800">{r.premium}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalGrowthPlansPage() {
  return (
    <div className="py-14 md:py-20">
      <Container>
        <SectionHeader
          title="プラン・料金"
          subtitle="比較しやすい形で、対応範囲を明確にします"
        />

        {/* Top: 3 plan cards */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.key} plan={p} />
          ))}
        </section>

        <p className="mt-6 text-center text-xs text-stone-500 whitespace-pre-line">
          ※ 料金は目安です。対応範囲・ボリュームにより、無料相談後に確定します。
          {"\n"}
          ※ 予約の確定・変更・キャンセル管理は含まれません。
        </p>

        {/* Comparison tables (DM → Feed → Dietary/Religious) */}
        <section className="mt-16">
          {featureSections.map((s) => (
            <CompareTable key={s.title} section={s} />
          ))}
        </section>

        {/* Initial settings note */}
        <section className="mt-16">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8">
            <h3 className="text-lg font-semibold text-stone-900">
              初期設定について
            </h3>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed whitespace-pre-line">
              相談で多い内容を「初期設定」として組み込んでいます。
              {"\n"}
              個別調整が必要な場合のみ、無料相談で確認・微調整します。
            </p>

            <div className="mt-6">
              <Button href={siteConfig.consultationUrl} variant="solid" external>
                無料相談を予約する
              </Button>
            </div>

            <p className="mt-3 text-xs text-stone-500">
              ※ 自動で Google Meet が発行されます / 日本語OK
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}