import { Storage } from '@zeitgeistpm/web3.storage'
import { CID } from 'ipfs-http-client'
import { Comment } from './comment'
import { MarketMetadata } from './market'

/**
 * Generic metadata storage type.
 *
 * @generic M = MarketMetadata
 * @generic C = Comment
 */
export interface MetadataStorage<M = MarketMetadata, C = Comment> {
  /**
   * Storage for Market metadata.
   */
  readonly markets: Storage<M, CID>
  /**
   * Storage for Market comments.
   * @notes not in use, just testing type narrowing.
   */
  readonly comments: Storage<C, CID>
}

/**
 * Type helper to extract the storage type at a given key in a MetadataStorage
 *
 * @generic MS extends MetadataStorage,
 * @generic K extends keyof MSS>
 */
export type StorageTypeOf<MS extends MetadataStorage, K extends keyof MS> = MS[K] extends Storage<
  infer T
>
  ? T
  : never

/**
 * A saturatable metadata storage.
 * @note For internal usage only to keep strict typing when putting into metadata storage.
 *
 * @generic MS extends MetadataStorage
 */
export interface SaturatedMetadataStorage<MS extends MetadataStorage> {
  as<K extends keyof MS, T = MS[K] extends Storage<infer T> ? T : never>(key: K): Storage<T, CID>
}

/**
 * Create a sturatable metadata storage.
 *
 * @generic MS extends MetadataStorage
 * @param storage M
 * @returns M & SaturatedMetadataStorage<MS>
 */
export const saturate = <MS extends MetadataStorage>(
  storage: MS,
): MS & SaturatedMetadataStorage<MS> => ({
  ...storage,
  as: key => storage[key] as any,
})
