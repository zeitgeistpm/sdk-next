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
export type Market<M = MarketMetadata> = FullMarket | AugmentedRpcMarket<M>

/**
 * Concrete Market type for a indexed market.
 */
export type FullMarket = FullMarketFragment

/**
 * Concrete Market type for a rpc market.
 */
export type AugmentedRpcMarket<M = MarketMetadata> = ZeitgeistPrimitivesMarket & {
  /**
   * Market id/index. Set for conformity and convenince when fetching markets from rpc.
   */
  marketId: number
  /**
   * Fetch metadata from external storage(default IPFS).
   */
  fetchMetadata: () => Promise<EitherInterface<Error, M>>
  /**
   * Conform a rpc market to a indexed market type by fetching metadata, poolid and decoding data.
   */
  expand: () => Promise<EitherInterface<Error, FullMarket>>
}

/**
 * Typeguard for rpc markets.
 *
 * @param market unknown
 * @returns market is AugmentedRpcMarket
 */
export const isAugmentedRpcMarket = (market: unknown): market is AugmentedRpcMarket =>
  typeof market === 'object' && market !== null && isCodec(market) && 'marketId' in market

/**
 * Augment a market primitive with id and data expanding utility functions.
 *
 * @param context RpcContext
 * @param id u128
 * @param market ZeitgeistPrimitivesMarket
 * @returns AugmentedAugmentedRpcMarket
 */
export const augment = (
  context: RpcContext,
  id: u128,
  market: ZeitgeistPrimitivesMarket,
): AugmentedRpcMarket => {
  let augmented = market as AugmentedRpcMarket

  augmented.marketId = id.toNumber()

  augmented.fetchMetadata = async () => {
    const hex = augmented.metadata.toHex()
    return context.storage.get(new CID('f0155' + hex.slice(2)) as any)
  }

  augmented.expand = Te.from<FullMarket>(async () => {
    const [metadata, poolId, end] = await Promise.all([
      augmented.fetchMetadata().then(m => m.unrightOr(throws)),
      context.api.query.marketCommons.marketPool(id),
      projectEndTimestamp(context.api, augmented),
    ])

    return {
      marketId: Number(id.toHuman()),
      creation: market.creation.type,
      creator: market.creator.toHuman(),
      oracle: market.oracle.toHuman(),
      end: end,
      creatorFee: market.creatorFee.toNumber(),
      poolId: poolId.isSome ? poolId.unwrap().toNumber() : undefined,
      scoringRule: market.scoringRule.type,
      status: market.status.toHuman() as FullMarket['status'],
      period: market.period.toHuman() as FullMarket['period'],
      marketType: market.marketType.toHuman() as FullMarket['marketType'],
      disputeMechanism: market.disputeMechanism.toHuman() as FullMarket['disputeMechanism'],
      report: market.report.toHuman() as FullMarket['report'],
      resolvedOutcome: market.resolvedOutcome.toHuman() as FullMarket['resolvedOutcome'],
      ...metadata,
    }
  })

  return augmented
}

/**
 * Create a AugmentedRpcMarket from a on chain storage entry.
 *
 * @param context RpcContext
 * @param entry [StorageKey<[u128]>, Option<ZeitgeistPrimitivesMarket>]
 * @returns AugmentedAugmentedRpcMarketRpcMarket
 */
export const fromEntry = (
  context: RpcContext,
  [
    {
      args: [marketId],
    },
    market,
  ]: [StorageKey<[u128]>, Option<ZeitgeistPrimitivesMarket>],
): AugmentedRpcMarket => {
  return augment(context, marketId, market.unwrap())
}

/**
 * Get the projected end timestamp for a market.
 *
 * @note If market has period as timestamps will use that directly and if its set to a block end date
 * it will project a approximate end timestamp based on the on chain current block and block time.
 *
 * @param context RpcContext
 * @param market AugmentedRpcMarket
 * @returns Promise<number>
 */
export const projectEndTimestamp = async (api: ApiPromise, market: AugmentedRpcMarket): Promise<number> => {
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
