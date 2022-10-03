import { ApiPromise } from '@polkadot/api'
import { Option, StorageKey, u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import { isCodec, isNumber } from '@polkadot/util'
import { FullMarketFragment } from '@zeitgeistpm/indexer'
import { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import CID from 'cids'
import { Metadata, TaggedMetadata } from 'meta/types'
import { Context, RpcContext, StorageTypeOf } from '../../context'
import { MarketMetadata } from '../../meta/market'
import { Data } from '../../primitives'

export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Union type for Indexed and Rpc Markets.
 */
export type Market<C extends Context<M>, M extends TaggedMetadata = Metadata> = Data<
  C,
  RpcMarket<RpcContext<M>, M>,
  IndexedMarket,
  M
>

/**
 * Concrete Market type for a indexed market.
 */
export type IndexedMarket = FullMarketFragment

/**
 * Concrete Market type for a rpc market.
 */
export type RpcMarket<
  C extends RpcContext<M>,
  M extends TaggedMetadata,
> = ZeitgeistPrimitivesMarket & {
  /**
   * Market id/index. Set for conformity and convenince when fetching markets from rpc.
   */
  marketId: number
  /**
   * Fetch metadata from external storage(default IPFS).
   */
  fetchMetadata: () => Promise<EitherInterface<Error, StorageTypeOf<C, 'markets', M>>>
  /**
   * Conform a rpc market to a indexed market type by fetching metadata, poolid from external storage(default IPFS) and decoding data.
   */
  expand: () => Promise<EitherInterface<Error, IndexedMarketBase & StorageTypeOf<C, 'markets', M>>>
}

export type IndexedMarketBase = Omit<IndexedMarket, keyof MarketMetadata>

/**
 * Typeguard for rpc markets.
 *
 * @param market unknown
 * @returns market is AugmentedRpcMarket
 */
export const isAugmentedRpcMarket = <C extends RpcContext<M>, M extends TaggedMetadata>(
  market: unknown,
): market is RpcMarket<C, M> =>
  typeof market === 'object' && market !== null && isCodec(market) && 'marketId' in market

/**
 * Augment a market primitive with id and data expanding utility functions.
 *
 * @param context RpcContext
 * @param id u128
 * @param market ZeitgeistPrimitivesMarket
 * @returns AugmentedAugmentedRpcMarket
 */
export const augment = <C extends RpcContext<M>, M extends TaggedMetadata>(
  context: RpcContext<M>,
  id: u128 | number,
  market: ZeitgeistPrimitivesMarket,
): RpcMarket<C, M> => {
  let augmented = market as RpcMarket<C, M>

  augmented.marketId = isNumber(id) ? id : id.toNumber()

  augmented.fetchMetadata = Te.from(async () => {
    const hex = augmented.metadata.toHex()
    const metadata = await context.storage.markets.get(new CID('f0155' + hex.slice(2)) as any)
    return metadata.unright().unwrap()
  })

  augmented.expand = Te.from(async () => {
    const [metadata, poolId, end] = await Promise.all([
      augmented.fetchMetadata().then(m => m.unrightOr(throws)),
      context.api.query.marketCommons.marketPool(id),
      projectEndTimestamp(context.api, augmented),
    ])

    const baseIndexedFields: IndexedMarketBase = {
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
    }

    const expanded: IndexedMarketBase & StorageTypeOf<C, 'markets', M> = {
      ...baseIndexedFields,
      ...metadata,
    }

    return expanded
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
export const fromEntry = <C extends RpcContext<M>, M extends TaggedMetadata>(
  context: RpcContext<M>,
  [
    {
      args: [marketId],
    },
    market,
  ]: [StorageKey<[u128]>, Option<ZeitgeistPrimitivesMarket>],
): RpcMarket<C, M> => {
  return augment<C, M>(context, marketId, market.unwrap())
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
export const projectEndTimestamp = async <C extends RpcContext<M>, M extends TaggedMetadata>(
  api: ApiPromise,
  market: RpcMarket<C, M>,
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
