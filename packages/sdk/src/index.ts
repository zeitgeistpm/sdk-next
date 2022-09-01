import { Context, isApiContext, isFullContext, isIndexerContext } from './context'

export const sdk = async (context: Context): Promise<Context> => {
  ensure(
    isFullContext(context) || isApiContext(context) || isIndexerContext(context),
    () =>
      new Error(
        `@zeitgeistpm/sdk: Initialization error. Config needs to specify at least a valid indexer option or api rpc option.`,
      ),
  )

  return { ...context }
}

const ensure = (expression: boolean, onError: () => Error) => {
  if (!expression) throw onError()
}
