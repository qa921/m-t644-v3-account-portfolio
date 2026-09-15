import { AccountRecord, PortfolioSummary } from '../types';

/**
 * Reconciled portfolio data — revision 2026-09-15.
 * Evidence rules (Strategy Brief, rev 2026-09-10):
 *  - Executive rollups count ONLY confirmed account-name matches.
 *  - Ambiguous matches, CRM-unregistered targets and no-opportunity accounts
 *    contribute ZERO to counts/amounts.
 *  - Onboarding data is delivery-only: name, milestone, planned date,
 *    implementation owner, source revision. Internal notes are never imported.
 */
export const SF_BASE_URL = 'https://orgfarm-af8e6fe1d6-dev-ed.develop.my.salesforce.com';

export const SOURCES = {
  register: 'M-T644-V3 Account Source Register & Approved Onboarding Calendar — Targets tab (scope authority)',
  calendarRevision: 'CAL-2026-09-11-r3',
  strategyBrief: 'M-T644-V3 Account Portfolio Strategy Brief — rev 2026-09-10 (approved source input)',
  crm: 'Salesforce Accounts/Opportunities (queried 2026-09-15)',
};

const CRM_TS = '2026-09-15T09:44:48.000+0000';
const CAL_REV = SOURCES.calendarRevision;

export const PORTFOLIO_SUMMARY: PortfolioSummary = {
  asOf: '2026-09-15',
  scopeCount: 24,
  confirmedAccounts: 19,
  openOpportunityCount: 12,
  openPipelineAmount: 2037000,
  closedWonAmount: 154000,
  closedLostAmount: 88000,
  noOpportunityCount: 5,
  ambiguousCount: 1,
  crmUnregisteredCount: 4,
};

export const ACCOUNTS: AccountRecord[] = [
  {
    scopeId: 'T01', name: 'Asteron Cloud', segment: 'Enterprise', priority: 'P1',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PZQAZ', crmOwner: 'QA Agent51', crmIndustry: 'Technology', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bJQAT', name: 'Asteron Cloud — Platform Expansion', stage: 'Proposal/Price Quote', amount: 185000, closeDate: '2026-10-30', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Security handoff', plannedDate: '2026-11-12', implementationOwner: 'Morgan Lee', sourceRevision: CAL_REV }],
    strategicSignal: 'Expansion sponsor engaged', registerUpdated: '2026-09-10', notes: 'Security review pending',
  },
  {
    scopeId: 'T02', name: 'Beacon Retail Group', segment: 'Mid-market', priority: 'P2',
    executiveSponsor: 'Daniel Reed', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PaQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Retail', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bKQAT', name: 'Beacon Retail Group — Store Analytics', stage: 'Qualification', amount: 92000, closeDate: '2026-11-15', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Multi-site rollout candidate', registerUpdated: '2026-09-08', notes: 'Discovery workshop',
  },
  {
    scopeId: 'T03', name: 'Cedar & Finch', segment: 'Enterprise', priority: 'P1',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PbQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Financial Services', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bLQAT', name: 'Cedar & Finch — Renewal', stage: 'Negotiation/Review', amount: 240000, closeDate: '2026-10-12', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Renewal transition', plannedDate: '2026-10-20', implementationOwner: 'Morgan Lee', sourceRevision: CAL_REV }],
    strategicSignal: 'Renewal at executive attention', registerUpdated: '2026-09-09', notes: 'Legal path',
  },
  {
    scopeId: 'T04', name: 'Delta Forge Manufacturing', segment: 'Commercial', priority: 'P2',
    executiveSponsor: 'Priya Nair', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PcQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Manufacturing', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bMQAT', name: 'Delta Forge Manufacturing — Plant Rollout', stage: 'Needs Analysis', amount: 128000, closeDate: '2026-12-20', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Implementation complexity high', registerUpdated: '2026-09-06', notes: 'Plant stakeholders',
  },
  {
    scopeId: 'T05', name: 'Ember Health Systems', segment: 'Enterprise', priority: 'P1',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PdQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Healthcare', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bNQAT', name: 'Ember Health Systems — Care Operations', stage: 'Value Proposition', amount: 310000, closeDate: '2027-01-18', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Technical discovery', plannedDate: '2027-01-27', implementationOwner: 'Ravi Shah', sourceRevision: CAL_REV }],
    strategicSignal: 'Strategic health-system logo', registerUpdated: '2026-09-10', notes: 'Data governance',
  },
  {
    scopeId: 'T06', name: 'Fjord Logistics', segment: 'Commercial', priority: 'P2',
    executiveSponsor: 'Daniel Reed', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PeQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Transportation', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bOQAT', name: 'Fjord Logistics — Fleet Visibility', stage: 'Prospecting', amount: 76000, closeDate: '2026-12-05', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Early fleet transformation', registerUpdated: '2026-09-05', notes: 'Intro incomplete',
  },
  {
    scopeId: 'T07', name: 'Granite Civic Labs', segment: 'Public sector', priority: 'P1',
    executiveSponsor: 'Priya Nair', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PfQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Government', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bPQAT', name: 'Granite Civic Labs — Service Portal', stage: 'Closed Won', amount: 154000, closeDate: '2026-09-01', isClosed: true, isWon: true, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [],
    onboarding: [
      { milestone: 'Discovery kickoff', plannedDate: '2026-09-22', implementationOwner: 'Avery Chen', sourceRevision: CAL_REV },
      { milestone: 'Data access complete', plannedDate: '2026-10-06', implementationOwner: 'Avery Chen', sourceRevision: CAL_REV },
    ],
    strategicSignal: 'Won; onboarding risk', registerUpdated: '2026-09-11', notes: 'Milestone required',
  },
  {
    scopeId: 'T08', name: 'Helio Energy Partners', segment: 'Enterprise', priority: 'P1',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PgQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Energy', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bQQAT', name: 'Helio Energy Partners — Grid Data', stage: 'Proposal/Price Quote', amount: 205000, closeDate: '2026-11-28', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Implementation planning', plannedDate: '2026-12-04', implementationOwner: 'Avery Chen', sourceRevision: CAL_REV }],
    strategicSignal: 'Pricing decision approaching', registerUpdated: '2026-09-10', notes: 'Executive pricing',
  },
  {
    scopeId: 'T09', name: 'Ivybridge Education', segment: 'Commercial', priority: 'P2',
    executiveSponsor: 'Daniel Reed', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PhQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Education', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bRQAT', name: 'Ivybridge Education — Campus Rollout', stage: 'Id. Decision Makers', amount: 118000, closeDate: '2027-02-10', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Campus readiness', plannedDate: '2027-02-18', implementationOwner: 'Ravi Shah', sourceRevision: CAL_REV }],
    strategicSignal: 'Committee map incomplete', registerUpdated: '2026-09-07', notes: 'Campus rollout',
  },
  {
    scopeId: 'T10', name: 'Juniper Foods', segment: 'Commercial', priority: 'P3',
    executiveSponsor: 'Priya Nair', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PiQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Consumer Goods', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bSQAT', name: 'Juniper Foods — Demand Planning', stage: 'Closed Lost', amount: 88000, closeDate: '2026-08-28', isClosed: true, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Loss lessons for re-entry', registerUpdated: '2026-08-29', notes: 'Do not count in open pipeline',
  },
  {
    scopeId: 'T11', name: 'Keystone Insurance', segment: 'Enterprise', priority: 'P1',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PjQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Financial Services', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bTQAT', name: 'Keystone Insurance — Claims Automation', stage: 'Negotiation/Review', amount: 275000, closeDate: '2026-10-25', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Procurement risk', registerUpdated: '2026-09-10', notes: 'Claims use case',
  },
  {
    scopeId: 'T12', name: 'Lumen Hospitality', segment: 'Mid-market', priority: 'P2',
    executiveSponsor: 'Daniel Reed', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PkQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Hospitality', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bUQAT', name: 'Lumen Hospitality — Guest Insights', stage: 'Qualification', amount: 64000, closeDate: '2026-11-08', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Discovery readiness', plannedDate: '2026-11-19', implementationOwner: 'Morgan Lee', sourceRevision: CAL_REV }],
    strategicSignal: 'Use case discovery', registerUpdated: '2026-09-09', notes: 'Guest insights',
  },
  {
    scopeId: 'T13', name: 'Mosaic Media Network', segment: 'Commercial', priority: 'P2',
    executiveSponsor: 'Priya Nair', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PlQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Media', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bVQAT', name: 'Mosaic Media Network — Audience Platform', stage: 'Perception Analysis', amount: 146000, closeDate: '2026-12-16', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Champion enablement needed', registerUpdated: '2026-09-04', notes: 'Audience platform',
  },
  {
    scopeId: 'T14', name: 'Nimbus Bioanalytics', segment: 'Enterprise', priority: 'P1',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PmQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Healthcare', crmLastModified: CRM_TS,
    opportunity: { id: '006gK00000OG4bWQAT', name: 'Nimbus Bioanalytics — Research Workspace', stage: 'Needs Analysis', amount: 198000, closeDate: '2027-01-08', isClosed: false, isWon: false, lastModified: CRM_TS },
    noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Data architecture dependency', registerUpdated: '2026-09-11', notes: 'Research workspace',
  },
  {
    scopeId: 'T15', name: 'Orchard Mobility', segment: 'Commercial', priority: 'P2',
    executiveSponsor: 'Daniel Reed', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PnQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Transportation', crmLastModified: CRM_TS,
    opportunity: null, noOpportunity: true, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Confirmed account; no opportunity', registerUpdated: '2026-09-03', notes: 'No active deal',
  },
  {
    scopeId: 'T16', name: 'Pillar Financial', segment: 'Enterprise', priority: 'P2',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PoQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Financial Services', crmLastModified: CRM_TS,
    opportunity: null, noOpportunity: true, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Executive alignment', plannedDate: '2026-10-31', implementationOwner: 'Ravi Shah', sourceRevision: CAL_REV }],
    strategicSignal: 'Confirmed account; no opportunity', registerUpdated: '2026-09-02', notes: 'No active deal',
  },
  {
    scopeId: 'T17', name: 'QuarryWorks', segment: 'Commercial', priority: 'P3',
    executiveSponsor: 'Priya Nair', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PpQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Manufacturing', crmLastModified: CRM_TS,
    opportunity: null, noOpportunity: true, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Confirmed account; no opportunity', registerUpdated: '2026-09-01', notes: 'No active deal',
  },
  {
    scopeId: 'T18', name: 'Riverbend Telecom', segment: 'Enterprise', priority: 'P2',
    executiveSponsor: 'Daniel Reed', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PqQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Telecommunications', crmLastModified: CRM_TS,
    opportunity: null, noOpportunity: true, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Confirmed account; no opportunity', registerUpdated: '2026-09-08', notes: 'No active deal',
  },
  {
    scopeId: 'T19', name: 'Northstar', segment: 'Enterprise', priority: 'P1',
    executiveSponsor: 'Mika Sato', matchStatus: 'ambiguous',
    crmAccountId: null, crmOwner: null, crmIndustry: null, crmLastModified: null,
    opportunity: null, noOpportunity: false,
    ambiguousCandidates: [
      { accountId: '001gK00001Tc4PrQAJ', name: 'Northstar Health Group', industry: 'Healthcare' },
      { accountId: '001gK00001Tc4PsQAJ', name: 'Northstar Health Partners', industry: 'Healthcare' },
    ],
    onboarding: [{ milestone: 'Onboarding placeholder', plannedDate: '2026-11-19', implementationOwner: 'Morgan Lee', sourceRevision: CAL_REV, distributionHold: 'Do not distribute until CRM selection' }],
    strategicSignal: 'Needs manual CRM selection', registerUpdated: '2026-09-10', notes: 'Two healthcare candidates — excluded from ALL rollups until manually resolved',
  },
  {
    scopeId: 'T20', name: 'Northstar Health Partners', segment: 'Enterprise', priority: 'P2',
    executiveSponsor: 'Mika Sato', matchStatus: 'confirmed',
    crmAccountId: '001gK00001Tc4PsQAJ', crmOwner: 'QA Agent51', crmIndustry: 'Healthcare', crmLastModified: CRM_TS,
    opportunity: null, noOpportunity: true, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Confirmed account; no opportunity', registerUpdated: '2026-09-09', notes: 'Separate from Northstar ambiguity',
  },
  {
    scopeId: 'T21', name: 'HarborWorks', segment: 'Commercial', priority: 'P2',
    executiveSponsor: 'Priya Nair', matchStatus: 'crm-unregistered',
    crmAccountId: null, crmOwner: null, crmIndustry: null, crmLastModified: null,
    opportunity: null, noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Pilot readiness', plannedDate: '2026-10-14', implementationOwner: 'Avery Chen', sourceRevision: CAL_REV }],
    strategicSignal: 'High strategic fit claimed', registerUpdated: '2026-09-07', notes: 'Create or resolve outside aggregation',
  },
  {
    scopeId: 'T22', name: 'Meridian Learning Collective', segment: 'Education', priority: 'P2',
    executiveSponsor: 'Daniel Reed', matchStatus: 'crm-unregistered',
    crmAccountId: null, crmOwner: null, crmIndustry: null, crmLastModified: null,
    opportunity: null, noOpportunity: false, ambiguousCandidates: [],
    onboarding: [{ milestone: 'Implementation briefing', plannedDate: '2026-10-29', implementationOwner: 'Ravi Shah', sourceRevision: CAL_REV }],
    strategicSignal: 'Implementation candidate', registerUpdated: '2026-09-06', notes: 'No CRM record',
  },
  {
    scopeId: 'T23', name: 'Solace Housing Alliance', segment: 'Public sector', priority: 'P3',
    executiveSponsor: 'Priya Nair', matchStatus: 'crm-unregistered',
    crmAccountId: null, crmOwner: null, crmIndustry: null, crmLastModified: null,
    opportunity: null, noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Research only', registerUpdated: '2026-09-05', notes: 'No CRM record',
  },
  {
    scopeId: 'T24', name: 'Tidemark Public Media', segment: 'Commercial', priority: 'P3',
    executiveSponsor: 'Daniel Reed', matchStatus: 'crm-unregistered',
    crmAccountId: null, crmOwner: null, crmIndustry: null, crmLastModified: null,
    opportunity: null, noOpportunity: false, ambiguousCandidates: [], onboarding: [],
    strategicSignal: 'Monitor; no verified pipeline', registerUpdated: '2026-09-04', notes: 'No CRM record',
  },
];
