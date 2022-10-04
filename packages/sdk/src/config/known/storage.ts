import { IPFS } from '@zeitgeistpm/web3.storage'
import { CommentMetadata } from 'meta/comment'
import memoize from 'lodash.memoize'
import { MetadataStorage } from 'meta/types'
import { MarketMetadata } from '../../meta/market'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export const ZeitgeistIpfs = <MS extends MetadataStorage<MarketMetadata, CommentMetadata>>(): MS => {
  const memoizedstorage = memoize(<T>() =>
    IPFS.storage<T>({
      node: { url: 'http://ipfs.zeitgeist.pm:5001' },
      cluster: {
        url: 'https://ipfs-cluster.zeitgeist.pm',
        auth: {
          username: 'zeitgeist',
          password: '5ZpmQl*rWn%Z',
        },
      },
    }),
  )

  const storage = {
    markets: memoizedstorage<MarketMetadata>(),
    comments: memoizedstorage<CommentMetadata>(),
  } as MS

  return storage
}
