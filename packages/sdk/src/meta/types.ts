import { Storage } from '@zeitgeistpm/web3.storage'
import { CID } from 'ipfs-http-client'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { CommentMetadata } from './comment'
import { MarketMetadata } from './market'

/**
 * Generic metadata storage type.
 *
 * @generic M = MarketMetadata
 * @generic C = Comment
 */
export interface MetadataStorage<
  M extends TaggedMetadata<'markets'> = MarketMetadata,
  C extends TaggedMetadata<'comments'> = CommentMetadata,
> {
  /**
   * Storage for Market metadata.
   */
  readonly markets: Storage<M, TaggedID<'markets'>>
  /**
   * Storage for Market comments.
   * @notes not in use, just testing type narrowing.
   */
  readonly comments: Storage<C, TaggedID<'comments'>>
  /**
   * Use storage narrowed to a sub storage type.
   *
   * @note for internal usage.
   *
   * @generic K extends keyof this
   * @param key K
   */
  of<K extends keyof this>(
    key: K,
  ): this[K] extends Storage<infer T, infer ID> ? Storage<T, ID> : never
}

export type TaggedID<T extends keyof MetadataStorage> = { __meta: T; cid: CID }
export type TaggedMetadata<T extends keyof MetadataStorage> = { __meta: T }

/**
 * Type helper to extract the storage type at a given key in a MetadataStorage
 *
 * @generic MS extends MetadataStorage,
 * @generic K extends keyof MSS>
 */
export type StorageTypeOf<S> = S extends Storage<infer T, infer ID> ? T : never

/**
 * Unpack the inner type of market storage.
 * @generic MS extends MetadataStorage
 */
export type MarketTypeOf<MS extends MetadataStorage> = StorageTypeOf<MS['markets']>

/**
 * Unpack the inner type of comment storage.
 * @generic MS extends MetadataStorage
 */
export type CommentTypeOf<MS extends MetadataStorage> = StorageTypeOf<MS['comments']>

export const createStorage = <
  M extends TaggedMetadata<'markets'> = MarketMetadata,
  C extends TaggedMetadata<'comments'> = CommentMetadata,
>(
  storage: Storage<any, any>,
): MetadataStorage<M, C> =>
  saturate<MetadataStorage<M, C>>({
    markets: tagged('markets', storage),
    comments: tagged('comments', storage),
  } as MetadataStorage<M, C>)

export const tagged = <T extends TaggedMetadata<any>>(
  key: keyof MetadataStorage,
  storage: Storage<T, CID>,
) => {
  return {
    get: ({ cid }: TaggedID<any>) => storage.get(cid),
    del: ({ cid }: TaggedID<any>) => storage.del(cid),
    put: Te.from<TaggedID<any>, [any]>(async data => {
      const cid = await storage.put(data)
      return {
        __meta: key,
        cid: cid.unwrap(),
      }
    }),
  } as Storage<any, TaggedID<any>>
}

/**
 * Create a sturatable metadata storage.
 *
 * @generic MS extends MetadataStorage
 * @param storage M
 * @returns M & SaturatedMetadataStorage<MS>
 */
export const saturate = <MS extends MetadataStorage<any, any>>(storage: MS): MS => ({
  ...storage,
  of: key => storage[key] as any,
})
