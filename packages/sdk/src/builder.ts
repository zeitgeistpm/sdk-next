import { assign } from '@zeitgeistpm/utility/dist/observable/operators'
import { MarketMetadata } from 'meta/market'
import { from, merge, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { createIndexerContext, createRpcContext } from './create'
import * as Model from './model'
import { FullConfig, FullContext, Sdk, Context } from './types'

/**
 * Initialize the indexer and rpc concurrently and emit partially applied intances of the Sdk.
 *
 * @param config FullConfig
 * @returns Observable<Partial<Sdk<FullContext>>>
 */
export const builder = <M = MarketMetadata>(config: FullConfig<M>) => {
  const context$ = merge(from(createIndexerContext(config)), from(createRpcContext(config)))

  const sdk$: Observable<Partial<Sdk<FullContext<M>, M>>> = context$.pipe(
    assign(),
    map(context => ({
      ...context,
      model: Model.model(context),
    })),
  )

  return sdk$
}
