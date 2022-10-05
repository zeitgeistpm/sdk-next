import { Button } from '@chakra-ui/react'
import { web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { create, createStorage } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'
import React, { useEffect } from 'react'

type CustomMarketMetadata = { __meta: 'markets'; description: string }

const storage = createStorage<CustomMarketMetadata>(
  IPFS.storage({
    node: { url: 'http://ipfs.zeitgeist.pm:5001', pin: false },
  }),
)

const CustomStorage: React.FC = () => {
  useEffect(() => {
    web3Enable('sdkv2-test-app')
  }, [])

  const onClick = async () => {
    const sdk = await create({
      provider: 'ws://127.0.0.1:9944',
      storage: storage,
    })

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

    const response = await sdk.model.markets.create({
      ...params,
      metadata: {
        __meta: 'markets',
        description: 'foo bar description',
      },
    })

    const { market } = response.saturate().unright().unwrap()
    const saturated = (await market.saturate()).unwrap()

    console.log('created market', saturated)

    const b = await sdk.storage.markets.get({ cid: market.metadata as any, __meta: 'markets' })

    console.log(b.unwrap())
  }

  return (
    <>
      <Button onClick={onClick}>Create Market With Custom Metadata</Button>
    </>
  )
}
export default CustomStorage
