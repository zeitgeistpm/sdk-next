import { blockDate, ChainTime, toMs } from '@zeitgeistpm/utility/dist/time'
import { MarketStage, MarketStageType } from '../../marketstage'
import { now } from '../../../time/functions/now'
import { Context, RpcContext } from '../../../../context'
import {
  getDeadlines,
  getPeriod,
  getReportedAt,
  getReporter,
  getStatus,
  Market,
} from '../../market'

export const getStage = async (
  ctx: RpcContext,
  market: Market<Context>,
  time?: ChainTime,
): Promise<MarketStage> => {
  time = time ?? (await now(ctx))

  const status = getStatus(market)
  const deadlines = getDeadlines(market)
  const reporter = getReporter(market).unwrap()
  const { start, end } = getPeriod(market, time)

  const graceDuration = toMs(time, { start: 0, end: deadlines.gracePeriod })
  const oracleDuration = toMs(time, { start: 0, end: deadlines.oracleDuration })
  const disputeDuration = toMs(time, { start: 0, end: deadlines.disputeDuration })
  const correctionDuration = 24 * 60 * 60 * 1000 // TODO: get from chain when governance of const is in place.

  if (status === 'Proposed') {
    return { type: 'Proposed', remainingTime: null, totalTime: null }
  }

  if (status === 'Active') {
    return { type: 'Trading', remainingTime: end - time.now, totalTime: end - start }
  }

  if (status === 'Closed') {
    const oraclePeriodStarts = end + graceDuration
    const oracleReportingEnds = oraclePeriodStarts + oracleDuration

    if (time.now < oraclePeriodStarts) {
      return {
        type: 'GracePeriod',
        totalTime: graceDuration,
        remainingTime: oraclePeriodStarts - time.now,
      }
    }

    if (time.now > oracleReportingEnds) {
      return { type: 'OpenReportWaiting', remainingTime: null, totalTime: null }
    } else {
      return {
        type: 'OracleReportWaiting',
        remainingTime: oracleDuration - (time.now - oraclePeriodStarts),
        totalTime: oracleDuration,
      }
    }
  }

  if (status === 'Reported') {
    const type: MarketStageType =
      market.oracle === reporter ? 'OracleReportCooldown' : 'OpenReportCooldown'

    const reportedAtBlock = getReportedAt(market).unwrapOr(0)
    const reportedAtTimestamp = blockDate(time, reportedAtBlock).getTime()
    const remainingTime = disputeDuration - (time.now - reportedAtTimestamp)

    return { type, remainingTime, totalTime: disputeDuration }
  }

  if (status === 'Disputed') {
    const report = await ctx.api.query.authorized.authorizedOutcomeReports(market.marketId)

    if (!report.isEmpty) {
      const block = await ctx.api.rpc.chain.getBlock(report.createdAtHash)
      const reportedAtBlock = block.block.header.number.toNumber()
      const reportedAtTimestamp = blockDate(time, reportedAtBlock).getTime()
      const remainingTime = correctionDuration - (time.now - reportedAtTimestamp)

      return { type: 'AuthorizedReport', remainingTime, totalTime: correctionDuration }
    }

    return { type: 'Disputed', remainingTime: null, totalTime: null }
  }

  if (status === 'Resolved') {
    return { type: 'Resolved', remainingTime: 0, totalTime: 0 }
  }

  throw new Error(`Couldn't determine market stage by status ${status}`)
}
