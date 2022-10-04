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
  M extends object = MarketMetadata,
  C extends object = CommentMetadata,
> {
  /**
   * Storage for Market metadata.
   */
  readonly markets: Storage<M, CID>
  /**
   * Storage for Market comments.
   * @notes not in use, just testing type narrowing.
   */
  readonly comments: Storage<C, CID>
  /**
   * Use storage narrowed to a sub storage type.
   *
   * @note for internal usage.
   *
   * @generic K extends keyof this
   * @param key K
   */
  of<K extends keyof this, T extends object = this[K] extends Storage<infer T> ? T : never>(
    key: K,
  ): Storage<T, CID>
}

/**
 * Type helper to extract the storage type at a given key in a MetadataStorage
 *
 * @generic MS extends MetadataStorage,
 * @generic K extends keyof MSS>
 */
export type StorageTypeOf<S extends Storage<any>> = S extends Storage<infer T> ? T : never

/**
 * Unpack the inner type of market storage.
 * @generic MS extends MetadataStorage
 */
export type MarketTypeOf<MS extends MetadataStorage<any, any>> = StorageTypeOf<MS['markets']>

/**
 * Unpack the inner type of comment storage.
 * @generic MS extends MetadataStorage
 */
export type CommentTypeOf<MS extends MetadataStorage<any, any>> = StorageTypeOf<MS['comments']>

export const createStorage = <M extends object = MarketMetadata, C extends object = CommentMetadata>(
  storage: Storage<any>,
): MetadataStorage<M, C> =>
  saturate<MetadataStorage<M, C>>({
    markets: storage,
    comments: storage,
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
