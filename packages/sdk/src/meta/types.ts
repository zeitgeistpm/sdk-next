import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import type { CID } from 'ipfs-http-client'
import { Infer, union } from 'superstruct'
import { IOMarketMetadata, MarketMetadata } from './market'

export interface MetadataStorage<
  M extends TaggedMarketMetadata,
  MC extends TaggedMarketCommentMetadata,
> {
  readonly markets: Storage<M, CID>
  readonly marketComments: Storage<MC, CID>
}

/**
 * Union type for the official zeitgeist.pm metadata super type.
 */
export type Metadata = TaggedMetadata & Infer<typeof IOMetadata>

/**
 * Union IO type for the official zeitgeist.pm metadata super type.
 */
export const IOMetadata = union([IOMarketMetadata])

export type TaggedMetadata = TaggedMarketMetadata | TaggedMarketCommentMetadata
export type TaggedMarketMetadata = { __meta: 'market' }
export type TaggedMarketCommentMetadata = { __meta: 'market_comment' }
