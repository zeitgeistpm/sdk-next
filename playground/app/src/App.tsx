import { web3Enable } from '@polkadot/extension-dapp'
import {
  Context,
  isIndexedSdk,
  isRpcSdk,
  Sdk,
  mainnetRpc,
  create,
  batterystation,
} from '@zeitgeistpm/sdk'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { useEffect, useState } from 'react'
import {
  IndexedMarket,
  isAugmentedRpcMarket,
  Market,
  AugmentedRpcMarket,
} from '@zeitgeistpm/sdk/dist/model/types'
import { MarketList } from './components/MarketList'
import { MarketComponent } from './components/Market'

const App: React.FC = () => {
  const [sdk, setSdk] = useState<Partial<Sdk<Context>>>()
  const [markets, setMarkets] = useState<Market<Context>[]>([])

  const load = async (sdk: Sdk<Context>) => {
    const { items } = await sdk.model.markets.list()
    setMarkets(items.sort((a, b) => (a.marketId > b.marketId ? -1 : 1)).slice(200))
  }

  useEffect(() => {
    web3Enable('sdkv2')
    create(batterystation()).then(setSdk)
    // builder(mainnetRpc()).subscribe(sdk => {
    //   setSdk(sdk)
    // })
  }, [])

  // useEffect(() => {
  //   if (isRpcSdk(sdk)) {
  //     sdk.model.assets.poolPrices
  //       .$({
  //         pool: 22,
  //         tail: new Date(Date.now() - 12 * 1000 * 10),
  //       })
  //       .subscribe(assetPrices => {
  //         assetPrices.forEach(prices => {
  //           prices.forEach(([block, price]) => {
  //             console.log(block, price.toNumber() / 10 ** 10)
  //           })
  //         })
  //       })
  //   }
  // }, [sdk])

  useEffect(() => {
    if (isRpcSdk(sdk) || isIndexedSdk(sdk)) {
      load(sdk)
    }
  }, [sdk])

  return (
    <div style={{ display: 'grid', columnGap: '50px' }}>
      {sdk && (
        <>
          <MarketComponent sdk={sdk} marketId={467} />
          <MarketList sdk={sdk} />
        </>
      )}
    </div>
  )
}
export default App
