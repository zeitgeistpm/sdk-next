import { Codec } from '@polkadot/types/types'
import { isCodec } from '@polkadot/util'
import { IndexerContext, RpcContext } from '../context'

export declare type Data<
  C extends RpcContext | IndexerContext,
  R extends Codec,
  I extends IndexedData,
> = C extends RpcContext ? R : I

export type IndexedData = {
  __typename?: string
  id: string
}

export const isRpcData = <R extends Codec, I extends IndexedData>(object: R | I): object is R =>
  isCodec(object)

export const isIndexedData = <R extends Codec, I extends IndexedData>(object: R | I): object is I =>
  !isCodec(object)
