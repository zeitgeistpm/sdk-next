import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Storage } from '@zeitgeistpm/web3.storage'
import { CID } from 'ipfs-http-client'
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
  of<K extends keyof this>(key: K): Storage<StorageTypeOf<this[K]>, StorageIdTypeOf<this[K]>>
}

/**
 * Create a tagged metadata storage object type.
 * @generic T extends keyof MetadataStorage
 */
export type TaggedMetadata<T extends keyof MetadataStorage> = { __meta: T }

/**
 * Create a tagged metadata storage object id.
 * @generic T extends keyof MetadataStorage
 */
export type TaggedID<T extends keyof MetadataStorage> = { __meta: T; cid: CID }

/**
 * Type helper to extract the storage type at a given key in a MetadataStorage
 *
 * @generic MS extends MetadataStorage,
 * @generic K extends keyof MSS>
 */
export type StorageTypeOf<S> = S extends Storage<infer T, infer ID> ? T : never

/**
 * Type helper to extract the storage id at a given key in a MetadataStorage
 *
 * @generic MS extends MetadataStorage,
 * @generic K extends keyof MSS>
 */
export type StorageIdTypeOf<S> = S extends Storage<infer T, infer ID> ? ID : never

/**
 * Unpack the inner type of market storage.
 * @generic MS extends MetadataStorage
 */
export type MarketTypeOf<MS extends MetadataStorage> = StorageTypeOf<MS['markets']>

/**
 * Unpack the inner type of market id.
 * @generic MS extends MetadataStorage
 */
export type MarketIdTypeOf<MS extends MetadataStorage> = StorageIdTypeOf<MS['markets']>

/**
 * Utility for creating typed and tagged metadata storage.
 *
 * @generic M extends TaggedMetadata<'markets'> = MarketMetadata - market metadata
 * @generic C extends TaggedMetadata<'comments'> = CommentMetadata - comment metadata
 * @param storage Storage<any, any>
 * @returns
 */
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

/**
 * Utility to create a tagged metadata storage.
 *
 * @param key keyof MetadataStorage
 * @param storage Storage<T, CID>
 * @returns Storage<any, TaggedID<any>>
 */
export const tagged = <T extends TaggedMetadata<any>>(
  key: keyof MetadataStorage,
  storage: Storage<T, CID>,
) =>
  ({
    get: ({ cid }: TaggedID<any>) => storage.get(cid),
    del: ({ cid }: TaggedID<any>) => storage.del(cid),
    put: Te.from<TaggedID<any>, Error, [any]>(async data => {
      const cid = await storage.put(data)
      return {
        __meta: key,
        cid: cid.unwrap(),
      }
    }),
  } as Storage<any, TaggedID<any>>)
