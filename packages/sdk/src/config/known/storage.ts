import { IPFS } from '@zeitgeistpm/web3.storage'
import { Metadata } from '../../meta/market'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export const ZeitgeistIpfs = IPFS.storage<Metadata>({
  node: { url: 'http://ipfs.zeitgeist.pm:5001' },
  cluster: {
    url: 'https://ipfs-cluster.zeitgeist.pm',
    auth: {
      username: 'zeitgeist',
      password: '5ZpmQl*rWn%Z',
    },
  },
})
