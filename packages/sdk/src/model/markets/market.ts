import { ApiPromise } from '@polkadot/api'
import { Option, StorageKey, u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import { isNumber } from '@polkadot/util'
import { FullMarketFragment } from '@zeitgeistpm/indexer'
import { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import CID from 'cids'
import { MarketTypeOf, MetadataStorage } from 'meta'
import { Context, RpcContext } from '../../context'
import { MarketMetadata } from '../../meta/market'
import { Data } from '../../primitives'

export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Union type for Indexed and Rpc Markets.
 */
export type Market<C extends Context<MS>, MS extends MetadataStorage = MetadataStorage> = Data<
  C,
  RpcMarket<MS>,
  IndexedMarket,
  MS
>

/**
 * Concrete Market type for a indexed market.
 */
export type IndexedMarket = FullMarketFragment

/**
 * Concrete Market type for a rpc market.
 */
export type RpcMarket<MS extends MetadataStorage<any, any>> = ZeitgeistPrimitivesMarket & {
  /**
   * Market id/index. Set for conformity and convenince when fetching markets from rpc.
   */
  marketId: number
  /**
   * Fetch metadata from external storage(default IPFS).
   */
  fetchMetadata: () => Promise<EitherInterface<Error, MarketTypeOf<MS>>>
  /**
   * Conform a rpc market to a indexed market type by fetching metadata, poolid from external storage(default IPFS) and decoding data.
   */
  expand: () => Promise<EitherInterface<Error, IndexedBase & MarketTypeOf<MS>>>
}

/**
 * The base type of indexed data that also can be deduced from the rpc data.
 */
export type IndexedBase = Omit<IndexedMarket, keyof MarketMetadata>

/**
 * Augment a market primitive with id and data expanding utility functions.
 *
 * @param context RpcContext
 * @param id u128
 * @param market ZeitgeistPrimitivesMarket
 * @returns AugmentedAugmentedRpcMarket
 */
export const augment = <MS extends MetadataStorage<any, any>>(
  context: RpcContext<MS>,
  id: u128 | number,
  market: ZeitgeistPrimitivesMarket,
): RpcMarket<MS> => {
  let augmented = market as RpcMarket<MS>

  augmented.marketId = isNumber(id) ? id : id.toNumber()

  augmented.fetchMetadata = async () => {
    const hex = augmented.metadata.toHex()
    const cid = new CID('f0155' + hex.slice(2)) as any
    return context.storage.of('markets').get(cid)
  }

  augmented.expand = Te.from(async () => {
    const [metadata, poolId, end] = await Promise.all([
      augmented.fetchMetadata(),
      context.api.query.marketCommons.marketPool(id),
      projectEndTimestamp(context.api, augmented),
    ])

    const base: IndexedBase = {
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

    return {
      ...base,
      ...metadata.unright().unwrap(),
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
export const fromEntry = <MS extends MetadataStorage>(
  context: RpcContext<MS>,
  [
    {
      args: [marketId],
    },
    market,
  ]: [StorageKey<[u128]>, Option<ZeitgeistPrimitivesMarket>],
): RpcMarket<MS> => {
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
export const projectEndTimestamp = async <MS extends MetadataStorage>(
  api: ApiPromise,
  market: RpcMarket<MS>,
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
