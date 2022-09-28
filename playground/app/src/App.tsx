import { web3Enable } from '@polkadot/extension-dapp'
import {
  batterystation,
  mainnet,
  builder,
  Context,
  isIndexedSdk,
  isRpcSdk,
  Sdk,
} from '@zeitgeistpm/sdk'
import { blockDate, dateBlock, time } from '@zeitgeistpm/sdk/dist/model/time'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { useEffect, useState } from 'react'
import {
  FullMarket,
  isAugmentedRpcMarket,
  Market,
  AugmentedRpcMarket,
} from '@zeitgeistpm/sdk/dist/model/types'

const App: React.FC = () => {
  const [sdk, setSdk] = useState<Partial<Sdk<Context>>>()
  const [markets, setMarkets] = useState<Market[]>([])

  const load = async (sdk: Sdk<Context>) => {
    const { items } = await sdk.model.markets.list()
    setMarkets(items.sort((a, b) => (a.marketId > b.marketId ? -1 : 1)).slice(200))
  }

  useEffect(() => {
    web3Enable('sdkv2')
    builder(mainnet()).subscribe(sdk => {
      setSdk(sdk)
    })
  }, [])

  useEffect(() => {
    if (isRpcSdk(sdk)) {
      ;(async () => {
        const head = await sdk.api.rpc.chain.getHeader()
        const t = await time(sdk)
        console.log(blockDate(t, head.number.toNumber()))
        console.log(dateBlock(t, new Date()))
      })()
    }
  }, [sdk])

  useEffect(() => {
    if (isRpcSdk(sdk) || isIndexedSdk(sdk)) {
      load(sdk)
    }
  }, [sdk])

  return (
    <div style={{ display: 'grid', columnGap: '50px' }}>
      {markets.map(market => (
        <MarketComponent key={market.marketId} market={market} />
      ))}
    </div>
  )
}

const MarketComponent = (props: { market: Market }) => {
  const [market, setMarket] = useState(props.market)

  useEffect(() => {
    if (isAugmentedRpcMarket(props.market)) {
      props.market
        .expand()
        .then(market => {
          setMarket(market.unrightOr(throws))
        })
        .catch(() => console.debug(`Missing metadata for market: ${market.marketId}`))
    } else {
      setMarket(props.market)
    }
  }, [props.market])

  return (
    <div style={{ padding: 8, gridColumnStart: 1, gridColumnEnd: 3 }}>
      {isAugmentedRpcMarket(market) ? (
        <AugmentedRpcMarketComponent market={market} />
      ) : (
        <FullMarketComponent market={market} />
      )}
    </div>
  )
}

const AugmentedRpcMarketComponent = (props: { market: AugmentedRpcMarket }) => {
  return <div>{props.market.marketId}: ...</div>
}

const FullMarketComponent = (props: { market: FullMarket }) => {
  return (
    <div>
      {props.market.marketId}: {props.market.question}
    </div>
  )
}

export default App

// ------------------------------------------------------------
// const createMarket = async () => {
//   if (!isRpcSdk(sdk)) return

//   const address = 'dE2cVL9QAgh3MZEK3ZhPG5S2YSqZET8V1Qa36epaU4pQG4pd8'
//   const { signer } = await web3FromAddress(address)

//   const baseWeight = (1 / 2) * 10 * 10 ** 10

//   const params: CreateMarketWithPoolParams = {
//     signer: {
//       address,
//       signer,
//     },
//     disputeMechanism: { Authorized: address },
//     marketType: { Scalar: [1, 2] },
//     oracle: address,
//     period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
//     metadata: {
//       question: 'Testing Jørn',
//       description: 'just a test market, can be removed',
//       slug: 'yornaath_test',
//       categories: [
//         {
//           name: 'yes',
//           ticker: 'Y',
//         },
//         {
//           name: 'no',
//           ticker: 'N',
//         },
//       ],
//     },
//     pool: {
//       amount: `${300 * 10 ** 10}`,
//       swapFee: `${1000}`,
//       weights: [`${baseWeight}`, `${baseWeight}`],
//     },
//   }

//   const result = await sdk.model.markets.create(params)

//   const {
//     market: [marketId, market],
//     pool: [poolId, pool],
//   } = result.extract().unrightOr(throws)

//   console.log(`created: market ${marketId}`, market.toHuman())
//   console.log(`created: pool ${poolId}`, pool.toHuman())
// }
