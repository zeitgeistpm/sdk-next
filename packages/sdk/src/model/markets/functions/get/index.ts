import { Observable } from 'rxjs'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { rpcMarket } from '../../market'
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
): Promise<Market<C, MS> | null> => {
  const data =
    isFullContext<MS>(context) || isIndexerContext<MS>(context)
      ? await getFromIndexer<typeof context, MS>(context, query)
      : isRpcContext<MS>(context)
      ? await getFromRpc<typeof context, MS>(context, query)
      : null

  return data
}

/**
 * Concrete get function for indexer context
 * @private
 */
const getFromIndexer = async <C extends IndexerContext, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Promise<Market<C, MS> | null> => {
  const {
    markets: [market],
  } = await context.indexer.markets({ where: { marketId_eq: query.marketId } })
  return market as Market<C, MS>
}

/**
 * Concrete get function for rpc context
 * @private
 */
const getFromRpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Promise<Market<C, MS> | null> => {
  const market = await context.api.query.marketCommons.markets(query.marketId)
  if (!market.isSome) return null
  return rpcMarket<C, MS>(context, query.marketId, market.unwrap())
}

/**
 * Fetch market and stream changes from rpc.
 *
 * @param context RpcContext<MS>
 * @param query MarketGetQuery
 * @returns Observable<Market<RpcContext, MS>>
 */
export const get$ = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Observable<Market<C, MS>> => {
  return new Observable(subscription => {
    const unsub = context.api.query.marketCommons.markets(query.marketId, market => {
      if (!market.isSome) {
        return subscription.unsubscribe()
      }
      subscription.next(rpcMarket<C, MS>(context, query.marketId, market.unwrap()))
    })

    return async () => {
      subscription.unsubscribe()
      unsub.then(unsub => unsub())
    }
  })
}
