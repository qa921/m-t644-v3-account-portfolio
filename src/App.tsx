import { useMemo, useState } from 'react';
import { ACCOUNTS, PORTFOLIO_SUMMARY, SOURCES } from './data/portfolio';
import { AccountRecord, MatchStatus } from './types';
import { AccountDetail } from './components/AccountDetail';

const STATUS_LABEL: Record<MatchStatus, string> = {
  confirmed: '確定 (CRM照合済み)',
  ambiguous: '曖昧照合 (要手動解決)',
  'crm-unregistered': 'CRM未登録',
};

const STATUS_ORDER: MatchStatus[] = ['confirmed', 'ambiguous', 'crm-unregistered'];

const fmt = (n: number) => '$' + n.toLocaleString('en-US');

/** Portfolio screen: executive summary first, then accounts grouped by match status. */
export function App() {
  const [sponsorFilter, setSponsorFilter] = useState<string>('all');
  const [selected, setSelected] = useState<AccountRecord | null>(null);
  const s = PORTFOLIO_SUMMARY;

  const sponsors = useMemo(() => Array.from(new Set(ACCOUNTS.map(a => a.executiveSponsor))), []);
  const visible = useMemo(
    () => ACCOUNTS.filter(a => sponsorFilter === 'all' || a.executiveSponsor === sponsorFilter),
    [sponsorFilter],
  );

  return (
    <main className="portfolio">
      {/* ===== 経営向けサマリ (確定Salesforceデータのみ) ===== */}
      <header>
        <h1>アカウント・ポートフォリオ — 経営レビュー</h1>
        <p>基準日: {s.asOf} ／ 対象スコープ: {s.scopeCount}社 ／ 出典: {SOURCES.crm}</p>
      </header>

      <section aria-label="executive-summary" className="summary">
        <div><strong>{s.confirmedAccounts}</strong><span>確定アカウント</span></div>
        <div><strong>{s.openOpportunityCount}</strong><span>オープン商談</span></div>
        <div><strong>{fmt(s.openPipelineAmount)}</strong><span>オープン・パイプライン</span></div>
      </section>
      <p className="summary-note">
        集計は確定照合のみ。商談なし {s.noOpportunityCount}社(金額0)、曖昧照合 {s.ambiguousCount}社、
        CRM未登録 {s.crmUnregisteredCount}社は件数・金額に含めません。
        参考(別枠): Closed Won {fmt(s.closedWonAmount)} / Closed Lost {fmt(s.closedLostAmount)}。
      </p>

      {/* ===== 担当者向けフィルタ ===== */}
      <label>
        エグゼクティブ・スポンサー:{' '}
        <select value={sponsorFilter} onChange={e => setSponsorFilter(e.target.value)}>
          <option value="all">全員</option>
          {sponsors.map(sp => <option key={sp} value={sp}>{sp}</option>)}
        </select>
      </label>

      {/* ===== ステータス別アカウント一覧 ===== */}
      {STATUS_ORDER.map(status => {
        const rows = visible.filter(a => a.matchStatus === status);
        if (rows.length === 0) return null;
        return (
          <section key={status} aria-label={status}>
            <h2>{STATUS_LABEL[status]} ({rows.length})</h2>
            <table>
              <thead>
                <tr><th>ID</th><th>アカウント</th><th>セグメント</th><th>優先度</th><th>スポンサー</th><th>商談</th><th>金額</th></tr>
              </thead>
              <tbody>
                {rows.map(a => (
                  <tr key={a.scopeId} onClick={() => setSelected(a)}>
                    <td>{a.scopeId}</td>
                    <td>{a.name}</td>
                    <td>{a.segment}</td>
                    <td>{a.priority}</td>
                    <td>{a.executiveSponsor}</td>
                    <td>{a.noOpportunity ? '商談なし' : a.opportunity ? a.opportunity.stage : '—'}</td>
                    <td>{a.matchStatus === 'confirmed' && a.opportunity ? fmt(a.opportunity.amount) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      })}

      {selected && <AccountDetail account={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
