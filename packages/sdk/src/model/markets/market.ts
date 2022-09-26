import { ApiPromise } from '@polkadot/api'
import { Option, StorageKey, u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import { isCodec } from '@polkadot/util'
import { FullMarketFragment } from '@zeitgeistpm/indexer'
import { delay } from '@zeitgeistpm/utility/dist/async/delay'
import { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import CID from 'cids'
import { RpcContext } from '../../context'
import { MarketMetadata } from './meta/types'

export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Union type for Indexed and Rpc Markets.
 */
export type Market = FullMarket | RpcMarket

/**
 * Concrete Market type for a indexed market.
 */
export type FullMarket = FullMarketFragment

/**
 * Concrete Market type for a rpc market.
 */
export type RpcMarket = ZeitgeistPrimitivesMarket & {
  /**
   * Market id/index. Set for conformity and convenince when fetching markets from rpc.
   */
  marketId: number
  /**
   * Fetch metadata from external storage(default IPFS).
   */
  external: () => Promise<EitherInterface<Error, MarketMetadata>>
  /**
   * Conform a rpc market to a indexed market type by fetching metadata, poolid and decoding data.
   */
  conformed: () => Promise<EitherInterface<Error, FullMarket>>
}

/**
 * Typeguard for rpc markets.
 *
 * @param market unknown
 * @returns market is RpcMarket
 */
export const isRpcMarket = (market: unknown): market is RpcMarket =>
  typeof market === 'object' && market !== null && isCodec(market) && 'marketId' in market

/**
 * Create a RpcMarket from a on chain storage entry.
 *
 * @param context RpcContext
 * @param entry [StorageKey<[u128]>, Option<ZeitgeistPrimitivesMarket>]
 * @returns RpcMarket
 */
export const fromEntry = (
  context: RpcContext,
  [
    {
      args: [marketId],
    },
    market,
  ]: [StorageKey<[u128]>, Option<ZeitgeistPrimitivesMarket>],
): RpcMarket => {
  const rpcMarket = market.unwrap() as RpcMarket

  rpcMarket.marketId = marketId.toNumber()

  rpcMarket.external = async () => {
    const hex = rpcMarket.metadata.toHex()
    return context.storage.get(new CID('f0155' + hex.slice(2)) as any)
  }

  rpcMarket.conformed = Te.from<FullMarket>(async () => {
    const [metadata, poolId, end] = await Promise.all([
      rpcMarket.external().then(m => m.unrightOr(throws)),
      context.api.query.marketCommons.marketPool(marketId),
      projectEndTimestamp(context.api, rpcMarket),
    ])

    return {
      marketId: Number(marketId.toHuman()),
      creation: rpcMarket.creation.type,
      creator: rpcMarket.creator.toHuman(),
      oracle: rpcMarket.oracle.toHuman(),
      end: end,
      creatorFee: rpcMarket.creatorFee.toNumber(),
      poolId: poolId.isSome ? poolId.unwrap().toNumber() : undefined,
      scoringRule: rpcMarket.scoringRule.type,
      status: rpcMarket.status.toHuman() as FullMarket['status'],
      period: rpcMarket.period.toHuman() as FullMarket['period'],
      marketType: rpcMarket.marketType.toHuman() as FullMarket['marketType'],
      disputeMechanism: rpcMarket.disputeMechanism.toHuman() as FullMarket['disputeMechanism'],
      report: rpcMarket.report.toHuman() as FullMarket['report'],
      resolvedOutcome: rpcMarket.resolvedOutcome.toHuman() as FullMarket['resolvedOutcome'],
      ...metadata,
    }
  })

  return rpcMarket
}

/**
 * Get the projected end timestamp for a market.
 *
 * @note If market has period as timestamps will use that directly and if its set to a block end date
 * it will project a approximate end timestamp based on the on chain current block and block time.
 *
 * @param context RpcContext
 * @param market RpcMarket
 * @returns Promise<number>
 */
export const projectEndTimestamp = async (api: ApiPromise, market: RpcMarket): Promise<number> => {
  if (market.period.isTimestamp) {
    return Number(market.period.asTimestamp[1].toHuman())
  } else {
    const endBlock = Number(market.period.asBlock[1].toHuman())
    const now = +(await api.query.timestamp.now()).toString()
    const head = await api.rpc.chain.getHeader()
    const blockNum = head.number.toNumber()
    const diffInMs = +api.consts.timestamp.minimumPeriod.toString() * (endBlock - blockNum)
    return Number(now + diffInMs)
  }
}
