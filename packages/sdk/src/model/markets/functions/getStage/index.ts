import { infinity } from '@zeitgeistpm/utility/dist/infinity'
import * as O from '@zeitgeistpm/utility/dist/option'
import * as Time from '@zeitgeistpm/utility/dist/time'
import { Context, RpcContext } from '../../../../context'
import { now } from '../../../time/functions/now'
import { getDeadlines, getReportedAt, getStatus, Market, timespanOf } from '../../market'
import { MarketStage } from '../../marketstage'

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
  providedTime?: Time.ChainTime,
): Promise<MarketStage> => {
  const time = providedTime ?? (await now(ctx))
  const status = getStatus(market)
  const deadlines = getDeadlines(market)
  const timespan = timespanOf(market, time)

  const start = timespan.start.getTime()
  const end = timespan.end.getTime()

  if (status === 'Proposed') {
    return { type: 'Proposed', remainingTime: infinity, totalTime: infinity }
  }

  if (status === 'Active') {
    return { type: 'Trading', remainingTime: end - time.now, totalTime: end - start }
  }

  if (status === 'Closed') {
    const graceDuration = Time.toMs(time, { start: 0, end: deadlines.gracePeriod })
    const oracleDuration = Time.toMs(time, { start: 0, end: deadlines.oracleDuration })
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
    const disputeDuration = Time.toMs(time, { start: 0, end: deadlines.disputeDuration })
    const reportedAtBlock = getReportedAt(market).unwrapOr(0)
    const reportedAtTimestamp = Time.blockDate(time, reportedAtBlock).getTime()
    const remainingTime = disputeDuration - (time.now - reportedAtTimestamp)

    return { type: 'Reported', remainingTime, totalTime: disputeDuration }
  }

  if (status === 'Disputed') {
    const report = await ctx.api.query.authorized.authorizedOutcomeReports(market.marketId)

    if (!report.isEmpty) {
      const block = await ctx.api.rpc.chain.getBlock(report.createdAtHash)
      const reportedAtBlock = block.block.header.number.toNumber()
      const reportedAtTimestamp = Time.blockDate(time, reportedAtBlock).getTime()

      const correctionPeriod = O.tryCatch(
        () => (ctx.api.consts.authorized as any)['correctionPeriod'].toNumber() as number,
      ).unwrapOr(7200)

      const correctionDuration = Time.toMs(time, { start: 0, end: correctionPeriod })
      const remainingTime = correctionDuration - (time.now - reportedAtTimestamp)

      return { type: 'AuthorizedReport', remainingTime, totalTime: correctionDuration }
    }

    return { type: 'Disputed', remainingTime: infinity, totalTime: infinity }
  }

  if (status === 'Resolved') {
    return { type: 'Resolved', remainingTime: infinity, totalTime: infinity }
  }

  if (status === 'Destroyed') {
    return { type: 'Destroyed', remainingTime: infinity, totalTime: infinity }
  }

  throw new Error(`Couldn't determine market stage by status ${status}`)
}
