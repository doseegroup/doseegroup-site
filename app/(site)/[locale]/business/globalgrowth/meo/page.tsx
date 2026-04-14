import Image from "next/image";
import { isLocale, type Locale } from "@/lib/i18n";
import Container from "@/components/ui/Container";

export default async function GlobalGrowthMeoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const consultPath = `/${locale}/business/globalgrowth/consult`;

  return (
    <div className="py-10 md:py-20">
      <Container>

        {/* ─── Hero ─── */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
            Meo対策で実現させる
            <br />
            <span className="text-blue-600">「究極の来店導線」</span>の作り方
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-500">
            グルメサイトに頼らない、令和のSNS×Googleマップ集客術
          </p>
        </section>

        {/* ─── Slide 1: 今、お客様はどこで店を探すか？ ─── */}
        <section className="mt-8 md:mt-12">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            今、お客様はどこで店を探すか？
          </h2>

          <div className="mt-8 md:mt-12 grid gap-6 md:grid-cols-2 md:items-start">
            {/* Left: かつての常識 */}
            <div>
              <p className="text-lg md:text-xl font-bold text-stone-800 mb-4">
                かつての常識（点数主義）
              </p>
              <ul className="space-y-3 text-stone-600">
                {[
                  "グルメサイトの「点数」で選ぶ",
                  "上位表示のために高額な広告費",
                  "予約手数料で利益が削られる",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-stone-400">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: 現在の新常識 */}
            <div className="rounded-2xl border-2 border-blue-300 bg-blue-50 p-6">
              <p className="text-sm font-bold text-stone-700 mb-3">
                現在の新常識（リアル主義）
              </p>
              <ul className="space-y-3 text-stone-700">
                {[
                  { label: "SNS", text: "で「雰囲気」を直感的に発見" },
                  { label: "Googleマップ", text: "で「現在地・評判」を確認" },
                  { label: "生の声（口コミ）", text: "で最終判断" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <span className="mt-1 text-stone-400">・</span>
                    <span>
                      <span className="text-blue-600 font-semibold">{item.label}</span>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Slide 2: もったいない失敗 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            「もったいない失敗」をしていませんか？
          </h2>

          <div className="mt-8 md:mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: "📷",
                title: "SNSだけ運用",
                body: "投稿は綺麗でも、詳しい場所や評判が分からず「離脱」してしまう。",
              },
              {
                icon: "🗺️",
                title: "マップを放置",
                body: "営業時間が古い、写真が美味しくない。検索されても「候補落ち」する。",
              },
              {
                icon: "💬",
                title: "口コミ無視",
                body: "悪い口コミが放置され、店主の顔が見えない。「不安」で来店を控える。",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7">
                <p className="text-3xl mb-4">{card.icon}</p>
                <p className="text-lg font-bold text-stone-900 mb-3">{card.title}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Slide 3: 口コミ対応の圧倒的な影響力 ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            口コミ対応の圧倒的な影響力
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left: 90% */}
            <div className="text-center">
              <p className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-blue-600 leading-none">
                90%
              </p>
              <p className="mt-4 text-stone-700 font-medium">のユーザーが口コミで来店を決定</p>
            </div>

            {/* Right: 説明 */}
            <div>
              <p className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                「量・質・返信」が鍵
              </p>
              <p className="text-stone-600 mb-5">ただ口コミがあるだけでは足りません。</p>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-stone-400">・</span>
                  <span>
                    <span className="text-blue-600 font-semibold">最新の口コミ数</span>が安心感を与える
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-stone-400">・</span>
                  <span>
                    <span className="text-blue-600 font-semibold">丁寧な返信</span>が「おもてなし」を伝える
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-stone-400">・</span>
                  <span>
                    これらが揃って初めて<span className="text-amber-500 font-semibold">集客率</span>が跳ね上がります。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Slide 4: AI時代のMEO ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            AI時代のMEO：検索から「提案」へ
          </h2>

          <div className="mt-8 md:mt-12 grid gap-8 md:grid-cols-2 md:items-start">
            {/* Left: 3ポイント */}
            <div className="space-y-7">
              {[
                {
                  color: "text-amber-500",
                  label: "AIコンシェルジュへの進化",
                  body: "Googleマップは「お店のリスト」から、Geminiによる「最適な提案」へと変貌しました。",
                },
                {
                  color: "text-green-500",
                  label: "文脈（コンテキスト）の重視",
                  body: "キーワード一致ではなく、「利用シーン」や「解決したい悩み」の理解が優先されます。",
                },
                {
                  color: "text-blue-500",
                  label: "ゼロクリック検索の普及",
                  body: "ユーザーは検索画面内で意思決定を完結させるため、AIの「回答」に選ばれることが必須です。",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className={`font-bold text-base md:text-lg ${item.color} mb-1`}>{item.label}</p>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Right: image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-meo-ai.jpg"
                alt="AI時代のGoogleマップ検索イメージ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── Slide 5: 新旧比較テーブル ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            飲食店MEO：新旧比較と実践戦略
          </h2>

          <div className="mt-8 md:mt-12 overflow-x-auto">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 md:px-6 font-semibold rounded-tl-xl">対策項目</th>
                  <th className="text-left px-4 py-3 md:px-6 font-semibold">従来のMEO（キーワード中心）</th>
                  <th className="text-left px-4 py-3 md:px-6 font-semibold rounded-tr-xl">今のMEO（AI・文脈中心）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "キーワード", old: "特定単語を詰め込む", now: "利用シーンや解決できる悩みを記述" },
                  { label: "口コミ", old: "件数と星評価を重視", now: "具体的エピソードを含む長文を促進" },
                  { label: "写真・動画", old: "枚数を増やす", now: "AIが属性を抽出できる高品質素材" },
                  { label: "運用", old: "基本情報の維持", now: "リアルタイムの在庫・混雑・週次更新" },
                  { label: "外部・技術", old: "NAP（店名・住所）の統一", now: "構造化データ(JSON-LD)の実装" },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 md:px-6 font-semibold text-amber-500">{row.label}</td>
                    <td className="px-4 py-3 md:px-6 text-stone-600">{row.old}</td>
                    <td className="px-4 py-3 md:px-6 text-stone-800">{row.now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Slide 6: 選ばれる店になる仕組み ─── */}
        <section className="mt-16 md:mt-24">
          <h2 className="flex items-center gap-3 text-xl sm:text-2xl md:text-4xl font-bold text-stone-900">
            <span className="w-1.5 h-7 md:h-8 rounded-full bg-blue-500 shrink-0" />
            「選ばれる店」になる仕組み
          </h2>

          <div className="mt-8 md:mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                step: "1. SNSで「認知」",
                body: "インスタ等で魅力を発信し「ここ行ってみたい！」を作る。",
                img: "/images/business/globalgrowth-meo-step1.jpg",
                alt: "SNSで認知",
              },
              {
                step: "2. マップで「確信」",
                body: "Googleマップで詳細を確認。高評価と丁寧な返信で「安心」へ。",
                img: "/images/business/globalgrowth-meo-step2.jpg",
                alt: "マップで確信",
              },
              {
                step: "3. スムーズな「来店」",
                body: "経路案内で迷わず到着。ファンになり、また新しい口コミが生まれる。",
                img: "/images/business/globalgrowth-meo-step3.jpg",
                alt: "スムーズな来店",
              },
            ].map((card) => (
              <div key={card.step} className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
                <div className="relative h-40 bg-stone-100">
                  <Image src={card.img} alt={card.alt} fill className="object-cover" />
                </div>
                <div className="p-5 md:p-6 text-center">
                  <p className="text-base md:text-lg font-bold text-stone-900 mb-3">{card.step}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Slide 7: 丸投げ ─── */}
        <section className="mt-16 md:mt-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-snug">
                「丸投げ」だから、<br />本業に専念できる。
              </h2>
              <p className="mt-6 text-stone-600 leading-relaxed">
                オーナー様の大切な時間は、料理や接客、<br className="hidden md:block" />
                お店の改善に使ってください。
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed">
                月額30,000円でMeo対策の面倒なSNSの画像編集や、Googleマップのキーワード調整などこれらはすべて私たちプロにお任せください
              </p>
              <p className="mt-6 text-blue-600 font-bold text-lg">
                運用負担ゼロ。でも、成果は最大。
              </p>
            </div>

            {/* Right: image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/business/globalgrowth-meo-restaurant.jpg"
                alt="レストランイメージ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="mt-16 md:mt-24">
          <div className="rounded-3xl bg-gradient-to-br from-stone-800 to-stone-950 p-7 sm:p-10 md:p-16 text-white text-center">
            <p className="text-xs tracking-widest text-stone-400 uppercase mb-4">Free Consult</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              MEO対策で来店を仕組み化する。
            </h2>
            <p className="mt-4 text-stone-300 leading-relaxed text-sm md:text-base">
              まずは30分の無料相談で、現状の整理と方向性の確認だけ行います。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={consultPath}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100 text-center"
              >
                無料相談を予約する
              </a>
              <a
                href={`/${locale}/business/globalgrowth`}
                className="rounded-full border border-stone-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-stone-300 text-center"
              >
                サービス一覧へ戻る
              </a>
            </div>
            <p className="mt-5 text-xs text-stone-500">
              ※料金や契約は、必要な場合のみ後日ご案内します。
            </p>
          </div>
        </section>

      </Container>
    </div>
  );
}
