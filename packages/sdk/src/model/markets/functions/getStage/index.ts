import { infinity } from '@zeitgeistpm/utility/dist/infinity'
import * as O from '@zeitgeistpm/utility/dist/option'
import * as Time from '@zeitgeistpm/utility/dist/time'
import { Context, RpcContext } from '../../../../context'
import { now } from '../../../time/functions/now'
import {
  getDeadlines,
  getDisputeMechanism,
  getReportedAt,
  getStatus,
  Market,
  timespanOf,
} from '../../market'
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
    const disputeMechanism = getDisputeMechanism(market).unwrap()

    const reportedAtBlock = getReportedAt(market).unwrapOr(0)
    const reportedAtTimestamp = Time.blockDate(time, reportedAtBlock).getTime()

    if (disputeMechanism === 'Authorized') {
      const report = await ctx.api.query.authorized.authorizedOutcomeReports(
        market.marketId,
      )

      if (!report.isEmpty) {
        const resolvesAtBlock = report.unwrap().resolveAt // use this
        const resolvesAtTimeStamp = Time.blockDate(
          time,
          resolvesAtBlock.toNumber(),
        ).getTime()

        const totalTime = resolvesAtTimeStamp - reportedAtTimestamp
        const remainingTime = resolvesAtTimeStamp - time.now

        return { type: 'AuthorizedReport', remainingTime, totalTime }
      }
    }

    if (disputeMechanism === 'Court') {
      // TODO: implement granular court life cycle?
      // vote period, vote period court constant
      // aggregation period.
      // appeal period.
      //   no appeal -> resolved
      //   appeal -> back to vote period
      const courtId = await ctx.api.query.court.marketIdToCourtId(market.marketId)
      const court = await ctx.api.query.court.courts(courtId.unwrap())
      const appealEndsBlock = court.unwrap().roundEnds.appeal.toNumber()
      const appealEndsTimeStamp = Time.blockDate(time, appealEndsBlock).getTime()
      const totalTime = appealEndsTimeStamp - reportedAtTimestamp
      const remainingTime = appealEndsTimeStamp - time.now
      return { type: 'Court', remainingTime, totalTime }
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
