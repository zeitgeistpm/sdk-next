import { Button } from '@chakra-ui/react'
import { web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { batterystation, create, MetadataStorage, RpcConfig, RpcContext, Sdk } from '@zeitgeistpm/sdk'
import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import { useEffect, useState } from 'react'

type CustomMarketMetadata = {
  foo: `foo ${string}`
}

type CustomComment = {
  comment: 'text'
}

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export function CustomStorageProvider<
  MS extends MetadataStorage<CustomMarketMetadata, CustomComment>,
>(): M {
  const storage = IPFS.storage<any>({
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
      ;(async () => {
        const csdk = await create({
          provider: 'ws://127.0.0.1:9944',
          storage: CustomStorageProvider(),
        })

        const conf: RpcConfig<MetadataStorage<CustomMarketMetadata, CustomComment>> = {
          provider: 'ws://127.0.0.1:9944',
          storage: CustomStorageProvider(),
        }

        const bsdk = await create(conf)
      })()
    }
  }, [sdk])

  useEffect(() => {
    if (sdk) {
      sdk.model.markets.get({ marketId: 1 }).then(market => {
        console.log(market)
        market.expand().then(m => {
          const market = m.unright().unwrap()
          console.log(market.foo)
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
        foo: 'foo something or other',
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
