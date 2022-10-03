import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import type { CID } from 'ipfs-http-client'
import {
  Metadata,
  MetadataStorage,
  TaggedMarketCommentMetadata,
  TaggedMarketMetadata,
  TaggedMetadata,
} from 'meta'
import { MarketMetadata } from '../../meta/market'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export const ZeitgeistIpfs = <M extends TaggedMetadata = Metadata>(): MetadataStorage<M> => {
  const storage = IPFS.storage<M>({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
    cluster: {
      url: 'https://ipfs-cluster.zeitgeist.pm',
      auth: {
        username: 'zeitgeist',
        password: '5ZpmQl*rWn%Z',
      },
    },
  })

  return {
    markets: storage as Storage<M & TaggedMarketMetadata, CID>,
    marketComments: storage as Storage<M & TaggedMarketCommentMetadata, CID>,
  }
}
