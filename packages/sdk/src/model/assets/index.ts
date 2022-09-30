import { Context, isRpcContext, RpcContext } from '../../context'
import { Assets, AssetsRpc, AssetsShared } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Asset model.
 *
 * @generic C - Context
 * @param context C
 * @returns Assets<C>
 */
export const assets = <C extends Context>(ctx: C): Assets<C> => {
  let base: AssetsShared<C> = {}

  const rpc: AssetsRpc<RpcContext> | null = isRpcContext(ctx) ? {} : null

  return {
    ...base,
    ...rpc,
  } as Assets<C>
}
