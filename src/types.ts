export type MatchStatus = 'confirmed' | 'ambiguous' | 'crm-unregistered';

export type OpportunityFact = {
  id: string;
  name: string;
  stage: string;
  amount: number;
  closeDate: string;
  isClosed: boolean;
  isWon: boolean;
  lastModified: string;
};

export type OnboardingMilestone = {
  milestone: string;
  plannedDate: string;
  implementationOwner: string;
  sourceRevision: string;
  /** true = approved calendar entry exists but must not be distributed yet */
  distributionHold?: string;
};

export type AmbiguousCandidate = {
  accountId: string;
  name: string;
  industry: string | null;
};

export type AccountRecord = {
  scopeId: string;
  name: string;
  segment: string;
  priority: 'P1' | 'P2' | 'P3';
  executiveSponsor: string;
  matchStatus: MatchStatus;
  crmAccountId: string | null;
  crmOwner: string | null;
  crmIndustry: string | null;
  crmLastModified: string | null;
  /** confirmed accounts with no CRM opportunity keep this null and noOpportunity=true */
  opportunity: OpportunityFact | null;
  noOpportunity: boolean;
  ambiguousCandidates: AmbiguousCandidate[];
  onboarding: OnboardingMilestone[];
  /** analyst interpretation — always rendered as "strategic assessment", never as CRM fact */
  strategicSignal: string;
  registerUpdated: string;
  notes: string;
};

export type PortfolioSummary = {
  asOf: string;
  scopeCount: number;
  confirmedAccounts: number;
  openOpportunityCount: number;
  openPipelineAmount: number;
  closedWonAmount: number;
  closedLostAmount: number;
  noOpportunityCount: number;
  ambiguousCount: number;
  crmUnregisteredCount: number;
};
