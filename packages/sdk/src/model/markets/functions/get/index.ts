import { MetadataStorage } from 'meta'
import { Observable } from 'rxjs'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { augment } from '../../market'
import { IndexedMarket, Market } from '../../types'
import { MarketGetQuery } from './types'

/**
 * Fetch a market by its market id
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query inb
 * @param query MarketQuery
 * @returns Promise<Market<C>>
 */
export const get = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Promise<Market<C, MS>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await getFromIndexer(context, query)
      : await getFromRpc(context, query)

  return data as Market<C, MS>
}

/**
 * Concrete get function for indexer context
 * @private
 */
const getFromIndexer = async (
  context: IndexerContext,
  query: MarketGetQuery,
): Promise<IndexedMarket> => {
  const {
    markets: [market],
  } = await context.indexer.markets({ where: { marketId_eq: query.marketId } })
  return market
}

/**
 * Concrete get function for rpc context
 * @private
 */
const getFromRpc = async <MS extends MetadataStorage>(
  context: RpcContext<MS>,
  query: MarketGetQuery,
): Promise<Market<RpcContext<MS>, MS> | null> => {
  const market = await context.api.query.marketCommons.markets(query.marketId)
  if (!market.isSome) return null
  return augment<MS>(context, query.marketId, market.unwrap())
}

/**
 * Fetch market and stream changes from rpc.
 *
 * @param context RpcContext<MS>
 * @param query MarketGetQuery
 * @returns Observable<Market<RpcContext, MS>>
 */
export const get$ = <MS extends MetadataStorage>(
  context: RpcContext<MS>,
  query: MarketGetQuery,
): Observable<Market<RpcContext<MS>, MS>> => {
  return new Observable(subscription => {
    const unsub = context.api.query.marketCommons.markets(query.marketId, market => {
      if (!market.isSome) {
        return subscription.unsubscribe()
      }
      subscription.next(augment<MS>(context, query.marketId, market.unwrap()))
    })

    return async () => {
      subscription.unsubscribe()
      unsub.then(unsub => unsub())
    }
  })
}
