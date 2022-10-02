import { MetadataStorage } from '@zeitgeistpm/web3.storage'
import type { CID } from 'ipfs-http-client'
import { Infer, union } from 'superstruct'
import { IOMarketMetadata, MarketMetadata } from './market'

/**
 * Union type for the official zeitgeist.pm metadata super type.
 */
export type Metadata = Infer<typeof IOMetadata>

/**
 * Union IO type for the official zeitgeist.pm metadata super type.
 */
export const IOMetadata = union([IOMarketMetadata])

export abstract class Metadataa<MMD = MarketMetadata> {
  protected abstract markets: MetadataStorage<MMD, CID>
}
