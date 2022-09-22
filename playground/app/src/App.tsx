import { web3Enable } from '@polkadot/extension-dapp'
import { batterystation, builder, Context, isIndexedSdk, isRpcSdk, Sdk } from '@zeitgeistpm/sdk'
import { useEffect, useState } from 'react'

import { IndexedMarket, isRpcMarket, RpcMarket } from '@zeitgeistpm/sdk/dist/model/types'
import './App.css'

const App: React.FC = () => {
  const [sdk, setSdk] = useState<Partial<Sdk<Context>>>()
  const [markets, setMarkets] = useState<Array<RpcMarket | IndexedMarket>>([])

  const load = async (sdk: Sdk<Context>) => {
    const markets = await sdk.model.markets.list()
    setMarkets(markets)
  }

  useEffect(() => {
    web3Enable('sdkv2')
    builder(batterystation()).subscribe(sdk => {
      setSdk(sdk)
    })
  }, [])

  useEffect(() => {
    if (isRpcSdk(sdk) || isIndexedSdk(sdk)) {
      load(sdk)
    }
  }, [sdk])

  return (
    <div style={{ display: 'grid', columnGap: '50px' }}>
      {markets.map((market, index) => (
        <Market key={index} market={market} />
      ))}
    </div>
  )
}

const Market = (props: { market: RpcMarket | IndexedMarket }) => {
  return (
    <div style={{ padding: 8, gridColumnStart: 1, gridColumnEnd: 3 }}>
      {isRpcMarket(props.market) ? (
        <div>rpc: {props.market.marketId.toHuman()}</div>
      ) : (
        <div>indexer: {props.market.marketId}</div>
      )}
    </div>
  )
}

export default App

//   const createMarket = async () => {
//     if (!isRpcSdk(sdk)) return

//     const address = 'dE2cVL9QAgh3MZEK3ZhPG5S2YSqZET8V1Qa36epaU4pQG4pd8'
//     const { signer } = await web3FromAddress(address)

//     const baseWeight = (1 / 2) * 10 * 10 ** 10

//     const params: CreateMarketWithPoolParams = {
//       signer: {
//         address,
//         signer,
//       },
//       disputeMechanism: { Authorized: address },
//       marketType: { Scalar: [1, 2] },
//       oracle: address,
//       period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
//       metadata: {
//         question: 'Testing Jørn',
//         description: 'just a test market, can be removed',
//         slug: 'yornaath_test',
//         categories: [
//           {
//             name: 'yes',
//             ticker: 'Y',
//           },
//           {
//             name: 'no',
//             ticker: 'N',
//           },
//         ],
//       },
//       pool: {
//         amount: `${300 * 10 ** 10}`,
//         swapFee: `${1000}`,
//         weights: [`${baseWeight}`, `${baseWeight}`],
//       },
//     }

//     const result = await sdk.model.markets.create(params)

//     const {
//       market: [marketId, market],
//       pool: [poolId, pool],
//     } = result.extract().unrightOr(throws)

//     console.log(`created: market ${marketId}`, market.toHuman())
//     console.log(`created: pool ${poolId}`, pool.toHuman())
//   }

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={createMarket}>test creating market without pool</button>
//       </div>
//     </div>
//   )
// }

// export default App
