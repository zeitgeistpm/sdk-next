import { Context, RpcContext } from '../../context'

export * from './asset'

/**
 * Zeitgeist Assets Model
 */
export type Assets<C extends Context> = AssetsShared<C> & AssetsRpc<C>

export type AssetsShared<C extends Context> = {}

export type AssetsRpc<C extends Context> = C extends RpcContext ? {} : {}
