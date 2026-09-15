# M-T644-V3 Account Portfolio — アカウント・ポータル

経営レビューと担当者確認の両方に使えるアカウント・ポータル。対象24社を Salesforce と照合し、確定データのみで経営向け件数・金額を集計します。

## 画面

- **ポートフォリオ概要 (先頭)**: 確定アカウント数、オープン商談件数・金額。商談なし / 曖昧照合 / CRM未登録は明確に分離し集計外。
- **アカウント一覧**: 照合ステータス別 (確定 / 曖昧 / CRM未登録)、スポンサーフィルタ付き。
- **個別詳細**: CRM記録 (Account ID, オーナー, 商談ID/ステージ/金額/クローズ日, 最終更新)、導入予定 (承認カレンダーの配信専用フィールドのみ)、出典、戦略的評価 (仮説として明示)。

## データ出典

- 対象一覧・承認カレンダー: Google Sheet `M-T644-V3 Account Source Register & Approved Onboarding Calendar` (カレンダー リビジョン `CAL-2026-09-11-r3`)
- 戦略: Google Doc `M-T644-V3 Account Portfolio Strategy Brief` (rev 2026-09-10)
- CRM: Salesforce Accounts/Opportunities (2026-09-15 照会)
- 照合結果の確定記録: `docs/reconciliation-2026-09-15.md`

`data/legacy-portfolio-snapshot.json` は陳腐化した参照専用スナップショットであり、集計の根拠にしません。

## リリース規約

feature ブランチ → PR → 検証 → GitHub Release。初回リリース: `v1.0.0`。
