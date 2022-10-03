import { Button } from '@chakra-ui/react'
import { web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { create, RpcContext, Sdk } from '@zeitgeistpm/sdk'
import { MetadataStorage } from '@zeitgeistpm/sdk'
import { CreateMarketParams } from '@zeitgeistpm/sdk/dist/model/types'
import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import { useEffect, useState } from 'react'
import { MarketComponent } from './Market'

type CustomMarketMetadata = {
  foo: 'bar'
}

type CustomComment = {
  comment: 'text'
}

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export const CustomStorageProvider = <M = CustomMarketMetadata, C = CustomComment>(): MetadataStorage<
  M,
  C
> => {
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

const CustomStorage: React.FC = () => {
  web3Enable('sdkv2-test-app')

  const [sdk, setSdk] =
    useState<
      Sdk<
        RpcContext<MetadataStorage<CustomMarketMetadata, CustomComment>>,
        MetadataStorage<CustomMarketMetadata, CustomComment>
      >
    >()

  useEffect(() => {
    if (!sdk) {
      create({
        provider: 'ws://127.0.0.1:9944',
        storage: CustomStorageProvider(),
      }).then(setSdk)
    }
  }, [sdk])

  useEffect(() => {
    if (sdk) {
      sdk.model.markets.get({ marketId: 0 }).then(market => {
        console.log(market)
        market.expand().then(m => {
          const market = m.unright().unwrap()
        })
      })
    }
  }, [sdk])

  const onClick = async () => {
    if (!sdk) return

    const address = 'dE2cVL9QAgh3MZEK3ZhPG5S2YSqZET8V1Qa36epaU4pQG4pd8'
    const { signer } = await web3FromAddress(address)

    const baseWeight = (1 / 2) * 10 * 10 ** 10

    const params = {
      signer: {
        address,
        signer,
      },
      disputeMechanism: { Authorized: address },
      marketType: { Scalar: [1, 2] as [number, number] },
      oracle: address,
      period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] as [number, number] },
      pool: {
        amount: `${300 * 10 ** 10}`,
        swapFee: `${1000}`,
        weights: [`${baseWeight}`, `${baseWeight}`],
      },
    }

    const a = await sdk.model.markets.create({
      ...params,
      metadata: {
        foo: 'bar',
      },
    })

    const { market } = a.extract().unright().unwrap()

    console.log('created market', market[0])
    console.log(market[1].toHuman())
  }

  return (
    <>
      <Button onClick={onClick}>Create Market With Custom Metadata</Button>
    </>
  )
}
export default CustomStorage