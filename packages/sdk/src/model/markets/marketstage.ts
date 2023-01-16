import { Infinity, isInfinity } from '@zeitgeistpm/utility/dist/infinity'
/**
 * Union type of all possible market stages.
 */
export type MarketStage =
  | Proposed
  | Trading
  | GracePeriod
  | ReportPeriod
  | Reported
  | Disputed
  | AuthorizedReport
  | Resolved

/**
 * The market has been proposed and is waiting to be approved.
 */
export type Proposed = InfiniteStage<'Proposed'>

/**
 * The market is active and trading.
 */
export type Trading = DynamicStage<'Trading'>

/**
 * The market has been closed and is in the grace period awaiting to go into its reporting stage.
 */
export type GracePeriod = DynamicStage<'GracePeriod'>

/**
 * The market is in its reporting stage.
 */
export type ReportPeriod =
  | (DynamicStage<'ReportPeriod'> & { access: 'oracle' })
  | (InfiniteStage<'ReportPeriod'> & { access: 'open' })

/**
 * The market has been reported and will be resolved if no dispute is raised.
 */
export type Reported = DynamicStage<'Reported'>

/**
 * The market has been disputed and is awaiting an authorized report.
 */
export type Disputed = InfiniteStage<'Disputed'>

/**
 * The market has an authorized report and is awaiting resolution after the CorrectionDuration has expired..
 */
export type AuthorizedReport = DynamicStage<'AuthorizedReport'>

/**
 * The market has been resolved.
 */
export type Resolved = InfiniteStage<'Resolved'>

/**
 * A stage with a dynamic remaining time.
 */
export type DynamicStage<T> = { type: T; remainingTime: number; totalTime: number }

/**
 * A stage with an infinite remaining time.
 */
export type InfiniteStage<T> = { type: T; remainingTime: Infinity; totalTime: Infinity }

/**
 * Check if a stage is a InfiniteStage.
 *
 * @param stage MarketStage
 * @returns stage is InfiniteStage<any>
 */
export const isInfinite = (stage: MarketStage): stage is InfiniteStage<any> =>
  isInfinity(stage.remainingTime) && isInfinity(stage.totalTime)
