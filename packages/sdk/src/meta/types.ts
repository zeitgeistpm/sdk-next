import { Storage } from '@zeitgeistpm/web3.storage'
import { CID } from 'ipfs-http-client'
import { Comment } from './comment'
import { MarketMetadata } from './market'

export type MetadataStorage<M = MarketMetadata, C = Comment> = {
  readonly markets: Storage<M, CID>
  readonly comments: Storage<C, CID>
}

export type StorageTypeOf<S extends MetadataStorage, K extends keyof S> = S[K] extends Storage<
  infer T
>
  ? T
  : never
