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
 * @generic M extends MetadataStorage,
 * @generic K extends keyof M>
 */
export type StorageTypeOf<M extends MetadataStorage, K extends keyof M> = M[K] extends Storage<
  infer T
>
  ? T
  : never

/**
 * A saturatable metadata storage.
 * @note For internal usage only to keep strict typing when putting into metadata storage.
 *
 * @generic M extends MetadataStorage
 */
export interface SaturatedMetadataStorage<M extends MetadataStorage> {
  as<K extends keyof M, T = M[K] extends Storage<infer T> ? T : never>(key: K): Storage<T, CID>
}

/**
 * Create a sturatable metadata storage.
 *
 * @generic M extends MetadataStorage
 * @param storage M
 * @returns M & SaturatedMetadataStorage<M>
 */
export const saturate = <M extends MetadataStorage>(storage: M): M & SaturatedMetadataStorage<M> => ({
  ...storage,
  as: key => storage[key] as any,
})
