import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import { Comment } from 'meta/comment'
import { MetadataStorage } from 'meta/types'
import { MarketMetadata } from '../../meta/market'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export const ZeitgeistIpfs = <M extends MetadataStorage<MarketMetadata, Comment>>() => {
  const storage = IPFS.storage({
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
    markets: storage,
    comments: storage,
  } as M
}
