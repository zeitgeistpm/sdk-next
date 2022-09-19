import { useEffect, useState } from 'react'
import ZDK, { Sdk, FullContext } from '@zeitgeistpm/sdk'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { batterystation } from '@zeitgeistpm/sdk'

import './App.css'
import reactLogo from './assets/react.svg'
import {
  CreateMarketParams,
  CreateMarketWithPoolParams,
  CreateStandaloneMarketParams,
} from '@zeitgeistpm/sdk/dist/model/types'

function App() {
  const [sdk, setSdk] = useState<Sdk<FullContext>>()

  useEffect(() => {
    web3Enable('sdkv2-test')
    ;(async () => {
      const full = await ZDK({
        ...batterystation(),
        provider: 'ws://127.0.0.1:9944',
      })
      setSdk(full)
    })()
  }, [])

  const createMarket = async () => {
    if (!sdk) return

    const address = 'dE2cVL9QAgh3MZEK3ZhPG5S2YSqZET8V1Qa36epaU4pQG4pd8'
    const { signer } = await web3FromAddress(address)

    const baseWeight = (1 / 2) * 10 * 10 ** 10

    const params: CreateMarketWithPoolParams = {
      signer: {
        address,
        signer,
      },
      disputeMechanism: { Authorized: address },
      marketType: { Scalar: [1, 2] },
      oracle: address,
      period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
      metadata: {
        question: 'Testing Jørn',
        description: 'just a test market, can be removed',
        slug: 'yornaath_test',
        categories: [
          {
            name: 'yes',
            ticker: 'Y',
          },
          {
            name: 'no',
            ticker: 'N',
          },
        ],
      },
      pool: {
        amount: `${300 * 10 ** 10}`,
        swapFee: `${1000}`,
        weights: [`${baseWeight}`, `${baseWeight}`],
      },
    }

    const result = await sdk.model.markets.create(params)

    const {
      market: [marketId, market],
      pool: [poolId, pool],
    } = result.extract().unrightOr(throws)

    console.log(`created: market ${marketId}`, market.toHuman())
    console.log(`created: pool ${poolId}`, pool.toHuman())
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={createMarket}>test creating market without pool</button>
      </div>
    </div>
  )
}

export default App
