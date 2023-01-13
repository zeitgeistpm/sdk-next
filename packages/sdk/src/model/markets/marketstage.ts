import { ZeitgeistPrimitivesMarketMarketStatus } from '@polkadot/types/lookup'
import { ChainTime, isDuration } from '@zeitgeistpm/utility/dist/time'
import { isRpcData } from 'primitives'
import { Context } from '../../context'
import { getDeadlines, getPeriod, getReporter, getStatus, Market } from './market'

export type MarketStageType =
  | 'Proposed'
  | 'Trading'
  | 'GracePeriod'
  | 'OracleReportWaiting'
  | 'OracleReportCooldown'
  | 'OpenReportWaiting'
  | 'OpenReportCooldown'
  | 'Disputed'
  | 'AuthorizedReport'
  | 'Resolved'

export const getMarketStage = (
  market: Market<Context>,
  time: ChainTime,
): MarketStageType => {
  const status = getStatus(market)
  market.report

  if (status === 'Proposed') {
    return 'Proposed'
  }

  if (status === 'Active') {
    return 'Trading'
  }

  if (status === 'Closed') {
    const { end } = getPeriod(market, time)
    const deadlines = getDeadlines(market)
    const oracleReportingEnds = end + deadlines.oracleDuration * time.period

    if (time.now > oracleReportingEnds) {
      return 'OpenReportWaiting'
    } else {
      return 'OracleReportWaiting'
    }
  }

  if (status === 'Reported') {
    if (market.oracle === getReporter(market).unwrap()) {
      return 'OracleReportCooldown'
    } else {
      return 'OpenReportCooldown'
    }
  }

  if (status === 'Disputed') {
    if (market) {
      return 'AuthorizedReport'
    }
    return 'Disputed'
  }

  if (status === 'Resolved') {
    return 'Resolved'
  }

  throw new Error(`Couldn't determine market stage by status ${status}`)
}
