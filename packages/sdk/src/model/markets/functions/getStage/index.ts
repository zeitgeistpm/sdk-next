import { infinity } from '@zeitgeistpm/utility/dist/infinity'
import { blockDate, ChainTime, toMs } from '@zeitgeistpm/utility/dist/time'
import { MarketStage } from '../../marketstage'
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

/**
 * Get the market stage for a market.
 * The market stage contains information about the current stage of the market lifecycle
 * and the total time of current the stage + estimated time remaining for the current stage.
 *
 * @param ctx Context
 * @param market Market<Context>
 * @param time ChainTime | undefined
 * @returns Promise<MarketStage>
 */
export const getStage = async (
  ctx: RpcContext,
  market: Market<Context>,
  time?: ChainTime,
): Promise<MarketStage> => {
  time = time ?? (await now(ctx))

  const status = getStatus(market)
  const deadlines = getDeadlines(market)
  const { start, end } = getPeriod(market, time)

  const graceDuration = toMs(time, { start: 0, end: deadlines.gracePeriod })
  const oracleDuration = toMs(time, { start: 0, end: deadlines.oracleDuration })
  const disputeDuration = toMs(time, { start: 0, end: deadlines.disputeDuration })

  if (status === 'Proposed') {
    return { type: 'Proposed', remainingTime: infinity, totalTime: infinity }
  }

  if (status === 'Active') {
    return { type: 'Trading', remainingTime: end - time.now, totalTime: end - start }
  }

  if (status === 'Closed') {
    const oraclePeriodStarts = end + graceDuration
    const oracleReportingEnds = oraclePeriodStarts + oracleDuration

    //TODO: if market period is in blocks, use blocks to determine actual stage, time remainng and total time can still be calculated.

    if (time.now < oraclePeriodStarts) {
      return {
        type: 'GracePeriod',
        totalTime: graceDuration,
        remainingTime: oraclePeriodStarts - time.now,
      }
    }

    if (time.now < oracleReportingEnds) {
      return {
        type: 'OracleReportingPeriod',
        remainingTime: oracleDuration - (time.now - oraclePeriodStarts),
        totalTime: oracleDuration,
      }
    } else {
      return {
        type: 'OpenReportingPeriod',
        remainingTime: infinity,
        totalTime: infinity,
      }
    }
  }

  if (status === 'Reported') {
    const reportedAtBlock = getReportedAt(market).unwrapOr(0)
    const reportedAtTimestamp = blockDate(time, reportedAtBlock).getTime()
    const remainingTime = disputeDuration - (time.now - reportedAtTimestamp)

    return { type: 'Reported', remainingTime, totalTime: disputeDuration }
  }

  if (status === 'Disputed') {
    const report = await ctx.api.query.authorized.authorizedOutcomeReports(market.marketId)

    if (!report.isEmpty) {
      const block = await ctx.api.rpc.chain.getBlock(report.createdAtHash)
      const reportedAtBlock = block.block.header.number.toNumber()
      const reportedAtTimestamp = blockDate(time, reportedAtBlock).getTime()
      const correctionDuration = 24 * 60 * 60 * 1000 // TODO: get from chain when governance of const is in place.
      const remainingTime = correctionDuration - (time.now - reportedAtTimestamp)

      return { type: 'AuthorizedReport', remainingTime, totalTime: correctionDuration }
    }

    return { type: 'Disputed', remainingTime: infinity, totalTime: infinity }
  }

  if (status === 'Resolved') {
    return { type: 'Resolved', remainingTime: infinity, totalTime: infinity }
  }

  throw new Error(`Couldn't determine market stage by status ${status}`)
}