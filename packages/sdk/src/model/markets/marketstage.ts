export type MarketStage =
  | { type: Proposed; remainingTime: null; totalTime: null }
  | { type: Trading; remainingTime: number; totalTime: number }
  | { type: GracePeriod; remainingTime: number; totalTime: number }
  | { type: OracleReportWaiting; remainingTime: number; totalTime: number }
  | { type: OracleReportCooldown; remainingTime: number; totalTime: number }
  | { type: OpenReportWaiting; remainingTime: null; totalTime: null }
  | { type: OpenReportCooldown; remainingTime: number; totalTime: number }
  | { type: Disputed; remainingTime: null; totalTime: null }
  | { type: AuthorizedReport; remainingTime: number; totalTime: number }
  | { type: AuthorizedReport; remainingTime: 0; totalTime: 0 }
  | { type: Resolved; remainingTime: 0; totalTime: 0 }

export type MarketStageType =
  | Proposed
  | Trading
  | GracePeriod
  | OracleReportWaiting
  | OracleReportCooldown
  | OpenReportWaiting
  | OpenReportCooldown
  | Disputed
  | AuthorizedReport
  | Resolved

export type Proposed = 'Proposed'
export type Trading = 'Trading'
export type GracePeriod = 'GracePeriod'
export type OracleReportWaiting = 'OracleReportWaiting'
export type OracleReportCooldown = 'OracleReportCooldown'
export type OpenReportWaiting = 'OpenReportWaiting'
export type OpenReportCooldown = 'OpenReportCooldown'
export type Disputed = 'Disputed'
export type AuthorizedReport = 'AuthorizedReport'
export type Resolved = 'Resolved'
