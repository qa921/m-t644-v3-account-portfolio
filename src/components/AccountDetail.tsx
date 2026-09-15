import { AccountRecord } from '../types';
import { SF_BASE_URL, SOURCES } from '../data/portfolio';

const fmt = (n: number) => '$' + n.toLocaleString('en-US');

type Props = { account: AccountRecord; onClose: () => void };

/**
 * Individual account detail: CRM record facts, onboarding plan, and source citations.
 * CRM facts keep Account ID, owner, opportunity ID, stage, amount, close date,
 * and last-modified. Analyst interpretation is labelled "strategic assessment".
 */
export function AccountDetail({ account: a, onClose }: Props) {
  const copyCrmLink = () => {
    if (a.crmAccountId) navigator.clipboard.writeText(`${SF_BASE_URL}/${a.crmAccountId}`);
  };

  return (
    <aside className="account-detail" role="dialog" aria-label={`detail-${a.scopeId}`}>
      <button onClick={onClose}>閉じる</button>
      <h2>{a.scopeId} — {a.name}</h2>
      <p>{a.segment} / {a.priority} / スポンサー: {a.executiveSponsor}</p>

      {/* CRM record facts */}
      <section aria-label="crm-facts">
        <h3>CRM記録 (Salesforce)</h3>
        {a.matchStatus === 'confirmed' && a.crmAccountId ? (
          <dl>
            <dt>Account ID</dt><dd>{a.crmAccountId}</dd>
            <dt>CRMオーナー</dt><dd>{a.crmOwner}</dd>
            <dt>業種</dt><dd>{a.crmIndustry ?? '—'}</dd>
            <dt>最終更新</dt><dd>{a.crmLastModified}</dd>
          </dl>
        ) : a.matchStatus === 'ambiguous' ? (
          <div>
            <p>曖昧照合 — 手動解決まで候補を統合しません。全集計から除外。</p>
            <ul>
              {a.ambiguousCandidates.map(c => (
                <li key={c.accountId}>{c.name} ({c.accountId}, {c.industry ?? '業種不明'})</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>CRM未登録 — 集計外。レコード作成・解決は集計の外で行います。</p>
        )}
        {a.crmAccountId && <button onClick={copyCrmLink}>CRMリンクをコピー</button>}
      </section>

      {/* Opportunity drill-through */}
      <section aria-label="opportunity">
        <h3>商談</h3>
        {a.opportunity ? (
          <dl>
            <dt>Opportunity ID</dt><dd>{a.opportunity.id}</dd>
            <dt>商談名</dt><dd>{a.opportunity.name}</dd>
            <dt>ステージ</dt><dd>{a.opportunity.stage}</dd>
            <dt>金額</dt><dd>{fmt(a.opportunity.amount)}</dd>
            <dt>クローズ予定日</dt><dd>{a.opportunity.closeDate}</dd>
            <dt>最終更新</dt><dd>{a.opportunity.lastModified}</dd>
          </dl>
        ) : a.noOpportunity ? (
          <p>確定アカウント・商談なし(金額0として明示。パイプラインに含めません)</p>
        ) : (
          <p>—</p>
        )}
      </section>

      {/* Onboarding plan (delivery-only fields) */}
      <section aria-label="onboarding">
        <h3>導入予定 (承認カレンダー {SOURCES.calendarRevision})</h3>
        {a.onboarding.length > 0 ? (
          <ul>
            {a.onboarding.map((m, i) => (
              <li key={i}>
                {m.plannedDate} — {m.milestone} (担当: {m.implementationOwner}, リビジョン: {m.sourceRevision})
                {m.distributionHold && <strong> ⚠ {m.distributionHold}</strong>}
              </li>
            ))}
          </ul>
        ) : (
          <p>承認済みマイルストーンなし</p>
        )}
      </section>

      {/* Sources & analyst interpretation */}
      <section aria-label="sources">
        <h3>出典</h3>
        <ul>
          <li>{SOURCES.register} (更新: {a.registerUpdated})</li>
          <li>{SOURCES.strategyBrief}</li>
          <li>{SOURCES.crm}</li>
        </ul>
        <h3>戦略的評価 (アナリスト解釈 — CRMファクトではありません)</h3>
        <p>{a.strategicSignal}</p>
        <p>備考: {a.notes}</p>
      </section>
    </aside>
  );
}
