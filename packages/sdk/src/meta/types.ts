import { Storage } from '@zeitgeistpm/web3.storage'
import { CID } from 'ipfs-http-client'
import { Comment } from './comment'
import { MarketMetadata } from './market'

export type MetadataStorage<M = MarketMetadata, C = Comment> = {
  markets: Storage<unknown, CID>
  comments: Storage<unknown, CID>
}
