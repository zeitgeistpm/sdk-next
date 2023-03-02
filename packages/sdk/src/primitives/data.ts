import type { Codec } from '@polkadot/types/types'
import { isCodec } from '@polkadot/util'
import { MetadataStorage } from '../meta'
import { FullContext, IndexerContext, RpcContext } from '../context'

/**
 * Data type where the data can be either a rpc or indexer data type.
 * This data type prefers indexer data over rpc data.
 *
 * Meaning that when the context is Indexer|Full context, the indexer data type is used.
 */
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

export const isRpcData = <R extends Codec, I extends IndexedData>(
  object?: R | I,
): object is R => Boolean(object && isCodec(object))

export const isIndexedData = <R extends Codec, I extends IndexedData>(
  object?: R | I,
): object is I => Boolean(object && !isRpcData(object))
