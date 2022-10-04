import { Codec } from '@polkadot/types/types'
import { isCodec } from '@polkadot/util'
import { FullContext, IndexerContext, RpcContext } from '../context'
import { MetadataStorage } from '../meta'

export declare type Data<
  C extends RpcContext<MS> | IndexerContext | FullContext<MS>,
  R extends Codec,
  I extends IndexedData,
  MS extends MetadataStorage,
> = C extends IndexerContext ? I : R

export type IndexedData = {
  __typename?: string
  id: string
}

export const isRpcData = <R extends Codec, I extends IndexedData>(object?: R | I): object is R =>
  Boolean(object && isCodec(object))

export const isIndexedData = <R extends Codec, I extends IndexedData>(object?: R | I): object is I =>
  Boolean(object && !isRpcData(object))
