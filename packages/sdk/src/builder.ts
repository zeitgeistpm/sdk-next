import { assign } from '@zeitgeistpm/utility/dist/observable/operators'
import { from, Observable, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { createIndexerContext, createRpcContext } from './create'
import { MetadataStorage } from './meta'
import {
  asIndexerConfig,
  asRpcConfig,
  Config,
  Context,
  isFullConfig,
  isIndexerConfig,
  Sdk,
  sdk,
} from './types'

/**
 * Initialize the indexer and rpc concurrently and emit partially applied intances of the Sdk.
 *
 * @param config FullConfig
 * @returns Observable<Partial<Sdk<FullContext>>>
 */
export const builder = <MS extends MetadataStorage = MetadataStorage>(config: Config<MS>) => {
  const config$ = isFullConfig(config) ? of(asIndexerConfig(config), asRpcConfig(config)) : of(config)

  const context$ = config$.pipe(
    switchMap(config => {
      if (isIndexerConfig(config)) {
        return from(createIndexerContext(config))
      }
      return from(createRpcContext(config))
    }),
  )

  const sdk$: Observable<Sdk<Context<MS>, MS>> = context$.pipe(
    assign(),
    map(context => sdk(context)),
  )

  return sdk$
}
