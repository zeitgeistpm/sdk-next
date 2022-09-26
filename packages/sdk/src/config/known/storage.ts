import { IPFS } from '@zeitgeistpm/web3.storage'
import { MarketMetadata } from '../../model/markets/meta/types'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export const zeitgeistIpfs = IPFS.storage<MarketMetadata>({
  node: { url: 'http://ipfs.zeitgeist.pm:5001' },
  cluster: {
    url: 'https://ipfs-cluster.zeitgeist.pm',
    auth: {
      username: 'zeitgeist',
      password: '5ZpmQl*rWn%Z',
    },
  },
})
