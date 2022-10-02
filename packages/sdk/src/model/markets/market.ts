import { ApiPromise } from '@polkadot/api'
import { Option, StorageKey, u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import { isCodec, isNumber } from '@polkadot/util'
import { FullMarketFragment } from '@zeitgeistpm/indexer'
import { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import CID from 'cids'
import { Metadata } from 'meta/types'
import { Context, RpcContext } from '../../context'
import { MarketMetadata } from '../../meta/market'
import { Data } from '../../primitives'

export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Union type for Indexed and Rpc Markets.
 */
export type Market<C extends Context<M>, M = Metadata> = Data<C, RpcMarket<M>, IndexedMarket, M>

/**
 * Concrete Market type for a indexed market.
 */
export type IndexedMarket = FullMarketFragment

/**
 * Concrete Market type for a rpc market.
 */
export type RpcMarket<M = Metadata> = ZeitgeistPrimitivesMarket & {
  /**
   * Market id/index. Set for conformity and convenince when fetching markets from rpc.
   */
  marketId: number
  /**
   * Fetch metadata from external storage(default IPFS).
   */
  fetchMetadata: () => Promise<EitherInterface<Error, M>>
  /**
   * Conform a rpc market to a indexed market type by fetching metadata, poolid from external storage(default IPFS) and decoding data.
   */
  expand: () => Promise<EitherInterface<Error, ExpandedMarket<M>>>
}

/**
 * Expanded market with assigned metadata. If the metadata type
 * is the official zeitgeist metadata it will be the same as the indexed data type.
 *
 * @generic M = Metadata
 */
export type ExpandedMarket<M = Metadata> = M extends MarketMetadata
  ? IndexedMarket
  : Omit<IndexedMarket, keyof MarketMetadata> & M

/**
 * Typeguard for rpc markets.
 *
 * @param market unknown
 * @returns market is AugmentedRpcMarket
 */
export const isAugmentedRpcMarket = (market: unknown): market is RpcMarket =>
  typeof market === 'object' && market !== null && isCodec(market) && 'marketId' in market

/**
 * Augment a market primitive with id and data expanding utility functions.
 *
 * @param context RpcContext
 * @param id u128
 * @param market ZeitgeistPrimitivesMarket
 * @returns AugmentedAugmentedRpcMarket
 */
export const augment = <M = Metadata>(
  context: RpcContext<M>,
  id: u128 | number,
  market: ZeitgeistPrimitivesMarket,
): RpcMarket<M> => {
  let augmented = market as RpcMarket<M>

  augmented.marketId = isNumber(id) ? id : id.toNumber()

  augmented.fetchMetadata = async () => {
    const hex = augmented.metadata.toHex()
    return context.storage.get(new CID('f0155' + hex.slice(2)) as any)
  }

  augmented.expand = Te.from<ExpandedMarket<M>>(async () => {
    const [metadata, poolId, end] = await Promise.all([
      augmented.fetchMetadata().then(m => m.unrightOr(throws)),
      context.api.query.marketCommons.marketPool(id),
      projectEndTimestamp(context.api, augmented),
    ])

    return {
      id: `${isNumber(id) ? id : id.toNumber()}`,
      marketId: isNumber(id) ? id : id.toNumber(),
      creation: market.creation.type,
      creator: market.creator.toHuman(),
      oracle: market.oracle.toHuman(),
      end: end,
      creatorFee: market.creatorFee.toNumber(),
      poolId: poolId.isSome ? poolId.unwrap().toNumber() : undefined,
      scoringRule: market.scoringRule.type,
      status: market.status.toHuman() as IndexedMarket['status'],
      period: market.period.toHuman() as IndexedMarket['period'],
      marketType: market.marketType.toHuman() as IndexedMarket['marketType'],
      disputeMechanism: market.disputeMechanism.toHuman() as IndexedMarket['disputeMechanism'],
      report: market.report.toHuman() as IndexedMarket['report'],
      resolvedOutcome: market.resolvedOutcome.toHuman() as IndexedMarket['resolvedOutcome'],
      ...metadata,
    } as ExpandedMarket<M>
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
export const fromEntry = <M = Metadata>(
  context: RpcContext<M>,
  [
    {
      args: [marketId],
    },
    market,
  ]: [StorageKey<[u128]>, Option<ZeitgeistPrimitivesMarket>],
): RpcMarket<M> => {
  return augment<M>(context, marketId, market.unwrap())
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
export const projectEndTimestamp = async <M = Metadata>(
  api: ApiPromise,
  market: RpcMarket<M>,
): Promise<number> => {
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
