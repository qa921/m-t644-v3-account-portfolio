# 運用手順 — アカウント・ポータル (v1.0.1)

## 1. 承認済み導入カレンダーの改訂取り込み

1. Source Register スプレッドシートの `Approved Onboarding` タブで **Source revision** を確認 (現行: `CAL-2026-09-11-r3`)。リビジョンが変わっていたら改訂あり。
2. 取り込むのは **配信専用フィールドのみ**: アカウント名 / Onboarding milestone / Planned date / Implementation owner / Source revision。`Internal notes` 列・連絡先は **取り込まない** (Strategy Brief rev 2026-09-10 の運用ガイダンス)。
3. `Approval status = Approved` の行のみ採用。
4. 反映先: `src/data/portfolio.ts` の各 `onboarding` と `index.html` の `A[].onb`。リビジョン表記 (`REV` 定数 / ヘッダ) も更新する。

## 2. Salesforce 再照会と照合ルール

1. アカウント照会 (対象24社名で照合):
   `SELECT Id, Name, Industry, LastModifiedDate, Owner.Name FROM Account WHERE Name IN (<24社名>) OR Name LIKE '%Northstar%'`
2. 商談照会 (確定アカウントIDで):
   `SELECT Id, Name, AccountId, StageName, Amount, CloseDate, IsClosed, IsWon, LastModifiedDate FROM Opportunity WHERE AccountId IN (<確定ID一覧>)`
3. ステータス判定:
   - **確定**: 対象名と完全一致するCRMアカウントが1件のみ。
   - **曖昧**: 候補が複数。候補を統合・推定選択せず全集計から除外。
   - **CRM未登録**: 一致なし。類似名・他案件ラベル付きレコードは使わない。

### T19 Northstar の扱い
- 候補: `Northstar Health Group` (001gK00001Tc4PrQAJ) / `Northstar Health Partners` (001gK00001Tc4PsQAJ)。**手動選定が完了するまで候補を統合しない**。
- 選定後も T20 `Northstar Health Partners` (別スコープ・確定済み) との重複計上に注意。
- 承認カレンダーの導入プレースホルダ (2026-11-19) は CRM 選定完了まで配布不可。

### 未登録4社 (T21 HarborWorks / T22 Meridian Learning Collective / T23 Solace Housing Alliance / T24 Tidemark Public Media)
- レコード作成・名寄せは **集計の外** で実施。CRM側で作成・確定した後の次回再照会で初めて「確定」に昇格させる。
- 昇格までは件数・金額とも一切集計に含めない。

## 3. 再集計ルール

- 経営ロールアップは **確定照合のみ**: 確定アカウント数 / オープン商談件数 / オープン pipeline 金額。
- `IsClosed = true` (Closed Won / Closed Lost) はオープン pipeline に含めず別枠で参考表示。
- 確定だが商談なしのアカウントは金額 0 として明示 (件数には含める)。
- 曖昧・CRM未登録は件数・金額から除外。
- レガシースナップショット (`data/legacy-portfolio-snapshot.json`, 2026-08-14) は集計の根拠にしない。

## 4. 再集計 → PR → パッチリリース手順

1. feature ブランチ作成 (例: `feat/reagg-YYYYMMDD`)。
2. `src/data/portfolio.ts`・`index.html` のデータを更新し、`docs/reconciliation-YYYYMMDD.md` を新規作成 (照合記録・合計の手計算を残す)。
3. PR 作成 → 検証 (照合記録とSalesforce照会結果の一致、オープン pipeline 合計の再計算一致) → squash マージ。
4. パッチリリース発行: `v1.0.x` (データ/ドキュメント更新は patch、画面構造変更は minor)。
5. GitHub Pages (main ブランチ / ルート) が自動再デプロイ → ライブURL <https://qa921.github.io/m-t644-v3-account-portfolio/> の応答を確認して完了。
