import { assert } from '@zeitgeistpm/utility'
import { Context, isApiContext, isFullContext, isIndexerContext } from './context'

export * from './context'

export const create = <C extends Context>(context: C): C => {
  assert(
    isFullContext(context) || isApiContext(context) || isIndexerContext(context),
    () =>
      new Error(
        `@zeitgeistpm/sdk: Initialization error. Config needs to specify at least a valid indexer option or api rpc option.`,
      ),
  )

  return { ...context }
}
