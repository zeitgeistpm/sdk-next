import { Codec } from '@polkadot/types/types'
import { isCodec } from '@polkadot/util'
import { Metadata, TaggedMetadata } from 'meta/types'
import { FullContext, IndexerContext, RpcContext } from '../context'

/**
 * Data type that differentiates between rpc and indexer context.
 *
 * @gemeric C extends RpcContext<M> | IndexerContext | FullContext<M>,
 * @gemeric R extends Codec,
 * @gemeric I extends IndexedData,
 * @gemeric M extends TaggedMetadata = Metadata,
 */
export declare type Data<
  C extends RpcContext<M> | IndexerContext | FullContext<M>,
  R extends Codec,
  I extends IndexedData,
  M extends TaggedMetadata = Metadata,
> = C extends IndexerContext ? I : R

/**
 * Type interface to narrow down to indexed data
 */
export type IndexedData = {
  __typename?: string
  id: string
}

/**
 * Typeguard for rpc data.
 *
 * @generic R extends Codec - the rpc data type
 * @generic I extends IndexedData - the indexed data type
 * @param object R | I
 * @returns object is R
 */
export const isRpcData = <R extends Codec, I extends IndexedData>(object?: R | I): object is R =>
  Boolean(object && isCodec(object))

/**
 * Typeguard for indexed data.
 *
 * @generic R extends Codec - the rpc data type
 * @generic I extends IndexedData - the indexed data type
 * @param object R | I
 * @returns object is I
 */
export const isIndexedData = <R extends Codec, I extends IndexedData>(object?: R | I): object is I =>
  Boolean(object && !isRpcData(object))
