import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import { Comment } from 'meta/comment'
import { MetadataStorage } from 'meta/types'
import { MarketMetadata } from '../../meta/market'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export const ZeitgeistIpfs = <M = MarketMetadata, C = Comment>(): MetadataStorage<M, C> => {
  const storage = IPFS.storage<M | C>({
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
    markets: storage as Storage<M>,
    comments: storage as Storage<C>,
  }
}
