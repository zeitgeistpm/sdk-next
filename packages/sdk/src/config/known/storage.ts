import { IPFS } from '@zeitgeistpm/web3.storage'
import { MarketMetadata } from '../../model/market/meta/types'

export const zeitgeistIpfs = {
  markets: IPFS.storage<MarketMetadata>({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
    cluster: {
      url: 'https://ipfs-cluster.zeitgeist.pm',
      auth: {
        username: 'zeitgeist',
        password: '5ZpmQl*rWn%Z',
      },
    },
  }),
}
