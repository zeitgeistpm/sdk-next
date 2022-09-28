import { Context, isIndexedSdk, isRpcSdk, Sdk } from '@zeitgeistpm/sdk'
import { isAugmentedRpcMarket, Market } from '@zeitgeistpm/sdk/dist/model/types'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { useEffect, useState } from 'react'

export const MarketComponent: React.FC<{ marketId: number; sdk: Partial<Sdk<Context>> }> = ({
  sdk,
  marketId,
}) => {
  const [market, setMarket] = useState<Market<Context>>()

  useEffect(() => {
    if (isRpcSdk(sdk) || isIndexedSdk(sdk)) {
      sdk.model.markets.get({ marketId }).then(setMarket)
    }
  }, [sdk])

  useEffect(() => {
    if (isAugmentedRpcMarket(market)) {
      market
        .expand()
        .then(market => {
          setMarket(market.unrightOr(throws))
        })
        .catch(() => console.debug(`Missing metadata for market: ${market.marketId}`))
    } else {
      setMarket(market)
    }
  }, [market])

  useEffect(() => {
    if (sdk && market) {
      sdk.model?.swaps
        .listPools({
          where: {
            marketId_eq: marketId,
          },
        })
        .then(a => {})
    }
  }, [sdk, market])

  return (
    <div style={{ display: 'grid', columnGap: '50px' }}>
      {!isAugmentedRpcMarket(market) && (
        <>
          <h2>{market?.question}</h2>
        </>
      )}
    </div>
  )
}
