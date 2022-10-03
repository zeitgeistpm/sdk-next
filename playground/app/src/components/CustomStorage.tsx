import { web3FromAddress } from '@polkadot/extension-dapp'
import { create, MetadataStorage, ZeitgeistIpfs } from '@zeitgeistpm/sdk'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import { FC, useEffect } from 'react'

type CustomMetadata = CustomMarketMetadata | CustomMarketCommentMetadata

type CustomMarketMetadata = {
  __meta: 'market'
  foo: number
}

type CustomMarketCommentMetadata = {
  __meta: 'market_comment'
  bar: number
}

export const CustomStorage = (): MetadataStorage<CustomMetadata> => {
  const storage = IPFS.storage<CustomMetadata>({
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
    markets: storage as Storage<CustomMarketMetadata>,
    marketComments: storage as Storage<CustomMarketCommentMetadata>,
  }
}

export const CustomStorageComponents: FC<{}> = props => {
  useEffect(() => {
    create({
      provider: '',
      storage: CustomStorage(),
    }).then(async sdk => {
      const address = 'dE2cVL9QAgh3MZEK3ZhPG5S2YSqZET8V1Qa36epaU4pQG4pd8'
      const { signer } = await web3FromAddress(address)

      const baseWeight = (1 / 2) * 10 * 10 ** 10

      const market = await sdk.model.markets.get({
        marketId: 1,
      })

      const expanded = (await market.expand()).unrightOr(throws)

      sdk.model.markets.create({
        signer: {
          address,
          signer,
        },
        disputeMechanism: { Authorized: address },
        marketType: { Scalar: [1, 2] },
        oracle: address,
        period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
        metadata: {},
        pool: {
          amount: `${300 * 10 ** 10}`,
          swapFee: `${1000}`,
          weights: [`${baseWeight}`, `${baseWeight}`],
        },
      })
    })
  })

  return <></>
}
