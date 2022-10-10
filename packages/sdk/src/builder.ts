import { assign } from '@zeitgeistpm/utility/dist/observable/operators'
import { from, merge, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { createIndexerContext, createRpcContext } from './create'
import { MetadataStorage } from './meta'
import * as Model from './model'
import { Context, FullConfig, Sdk, FullContext, IndexerContext } from './types'

/**
 * Initialize the indexer and rpc concurrently and emit partially applied intances of the Sdk.
 *
 * @param config FullConfig
 * @returns Observable<Partial<Sdk<FullContext>>>
 */
export const builder = <MS extends MetadataStorage = MetadataStorage>(config: FullConfig<MS>) => {
  const context$ = merge(from(createIndexerContext(config)), from(createRpcContext(config)))

  const sdk$: Observable<Sdk<Context<MS>, MS>> = context$.pipe(
    assign(),
    map(context => ({
      ...context,
      context,
      model: Model.model<Context<MS>, MS>(context as Context<MS>),
    })),
  )

  return sdk$
}
