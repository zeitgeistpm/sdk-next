import { Button } from '@chakra-ui/react'
import { web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import {
  batterystation,
  batterystationRpc,
  builder,
  CommentMetadata,
  Context,
  create,
  CreateMarketWithPoolParams,
  createStorage,
  isFullSdk,
  isIndexedData,
  isIndexedSdk,
  isRpcContext,
  isRpcData,
  isRpcSdk,
  MetadataStorage,
  Sdk,
} from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'
import React, { useEffect, useState } from 'react'

type CustomMarketMetadata = { __meta: 'markets'; description: string }

type CustomMetadataStorage = MetadataStorage<CustomMarketMetadata, CommentMetadata>

const storage = createStorage<CustomMarketMetadata, CommentMetadata>(
  IPFS.storage({
    node: { url: 'http://ipfs.zeitgeist.pm:5001', pin: false },
  }),
)

function useAsync<T>(fn: () => Promise<T>, deps?: Array<any>) {
  const [state, setState] = useState<T | undefined>()
  useEffect(() => {
    fn().then(setState)
  }, deps)
  return state
}

const CustomStorage: React.FC = () => {
  useEffect(() => {
    web3Enable('sdkv2-test-app')
  }, [])

  const sdk = useAsync(() => {
    return create({
      provider: 'ws://127.0.0.1:9944',
      storage: storage,
    })
  }, [])

  if (isRpcSdk(sdk)) {
    sdk.model.markets.get
  }

  if (isIndexedSdk(sdk)) {
    sdk.model.markets.get
  }

  builder(batterystation()).subscribe(sdk => {
    if (isRpcSdk(sdk)) {
      sdk.model.markets.get({ marketId: 0 }).then(market => {})
    }

    if (isIndexedSdk(sdk)) {
      sdk.model.markets.get({ marketId: 0 }).then(market => {})
    }
  })

  useEffect(() => {
    if (sdk) {
      sdk.model.swaps.getPool({ marketId: 0 }).then(pool => {})
      sdk.model.markets.get({ marketId: 0 }).then(market => {
        market
          .saturate()
          .then(market => {
            console.log(market.unwrap())
          })
          .catch(error => {
            console.error(error)
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
      deadlines: {
        disputeDuration: 2000,
        gracePeriod: 200,
        oracleDuration: 500,
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
    } as CreateMarketWithPoolParams<typeof sdk>

    const response = await sdk.model.markets.create({
      ...params,
      metadata: {
        __meta: 'markets',
        description: 'new market with description',
      },
    })

    const { market } = response.saturate().unright().unwrap()
    const saturated = (await market.saturate()).unwrap()

    console.log('created market', saturated)
  }

  return (
    <>
      <Button onClick={onClick}>Create Market With Custom Metadata</Button>
    </>
  )
}
export default CustomStorage
