# M-T644-V3 Account Portfolio — アカウント・ポータル

経営レビューと担当者確認の両方に使えるアカウント・ポータル。対象24社を Salesforce と照合し、確定データのみで経営向け件数・金額を集計します。

**ライブ (GitHub Pages):** https://qa921.github.io/m-t644-v3-account-portfolio/

## 画面

- **ポートフォリオ概要 (先頭)**: 確定アカウント数、オープン商談件数・金額。商談なし / 曖昧照合 / CRM未登録は明確に分離し集計外。
- **アカウント一覧**: 照合ステータス別 (確定 / 曖昧 / CRM未登録)。
- **個別詳細**: CRM記録 (Account ID, 商談ID/ステージ/金額/クローズ日, 最終更新)、導入予定 (承認カレンダーの配信専用フィールドのみ)、出典、戦略的評価 (仮説として明示)。

## 構成

- `index.html` — GitHub Pages で配信する静的ポータル (main / ルートから配信)
- `src/` — React 参照実装 (`App.tsx`, `components/AccountDetail.tsx`, `data/portfolio.ts`)
- `docs/reconciliation-2026-09-15.md` — 24社の照合確定記録
- `docs/operations.md` — 運用手順 (カレンダー改訂取り込み / Salesforce再照会 / 再集計 / パッチリリース)

## データ出典

- 対象一覧・承認カレンダー: Google Sheet `M-T644-V3 Account Source Register & Approved Onboarding Calendar` (カレンダー リビジョン `CAL-2026-09-11-r3`)
- 戦略: Google Doc `M-T644-V3 Account Portfolio Strategy Brief` (rev 2026-09-10)
- CRM: Salesforce Accounts/Opportunities (2026-09-15 照会)

`data/legacy-portfolio-snapshot.json` は陳腐化した参照専用スナップショットであり、集計の根拠にしません。

## リリース規約

feature ブランチ → PR → 検証 → GitHub Release。現行リリース: `v1.0.1`。
