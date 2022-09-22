import { Observable, from, merge } from 'rxjs'
import { map } from 'rxjs/operators'
import { Sdk, Context, FullConfig } from './types'
import { createIndexerContext, createRpcContext } from './create'
import * as Model from './model'
import { assign } from '@zeitgeistpm/utility/dist/observable/operators'

/**
 * Initialize the indexer and rpc concurrently and emit partially applied intances of the Sdk.
 *
 * @param config FullConfig
 * @returns Observable<Partial<Sdk<Context>>>
 */
export const builder = (config: FullConfig) => {
  const context$ = merge(from(createIndexerContext(config)), from(createRpcContext(config)))

  const sdk$: Observable<Partial<Sdk<Context>>> = context$.pipe(
    assign(),
    map(context => {
      const model = Model.model(context)
      return {
        ...context,
        model,
      }
    }),
  )

  return sdk$
}
