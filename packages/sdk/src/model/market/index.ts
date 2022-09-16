import {
  ZeitgeistPrimitivesMarketMarketPeriod,
  ZeitgeistPrimitivesMarketMarketType,
  ZeitgeistPrimitivesMarketMarketDisputeMechanism,
} from '@polkadot/types/lookup'
import { Context, isRpcContext, RpcContext } from '../../context'
import { list } from './functions/list'
import { create } from './functions/create'
import {
  Markets,
  MarketsListQuery,
  CreateMarketParams,
  MarketsRpc,
  MarketsShared,
} from './types'

/**
 * Create top level enriched zeitgeist Markets model.
 *
 * @generic C - Context
 * @param context C
 * @returns Markets<C>
 */
export const markets = <C extends Context>(context: C): Markets<C> => {
  let base: MarketsShared<C> = {
    list: (query: MarketsListQuery<C>) => list(context, query),
  }

  const rpc: MarketsRpc<RpcContext> | null = isRpcContext(context)
    ? {
        create: <P extends CreateMarketParams>(params: P) =>
          create(context, params),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Markets<C>
}
