import { Context, isIndexedData, isRpcData, isRpcSdk, Sdk } from '@zeitgeistpm/sdk'
import { RpcPoolPrices } from '@zeitgeistpm/sdk/dist/model/assets'
import { Pool } from '@zeitgeistpm/sdk/dist/model/swaps/pool'
import { Market } from '@zeitgeistpm/sdk/dist/model/types'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { useEffect, useState } from 'react'
import ms from 'ms'

export const MarketComponent: React.FC<{ marketId: number; sdk: Partial<Sdk<Context>> }> = ({
  sdk,
  marketId,
}) => {
  const [market, setMarket] = useState<Market<Context>>()
  const [pool, setPool] = useState<Pool<Context>>()
  const [prices, setPrices] = useState<RpcPoolPrices>([])

  useEffect(() => {
    if (isRpcSdk(sdk)) {
      const marketsub = sdk.model.markets.get.$({ marketId }).subscribe(setMarket)
      const poolsub = sdk.model.swaps.getPool.$({ marketId }).subscribe(setPool)
      return () => {
        marketsub.unsubscribe()
        poolsub.unsubscribe()
      }
    }
  }, [sdk])

  useEffect(() => {
    if (isRpcData(market)) {
      market
        .expand()
        .then(market => market.unrightOr(throws))
        .then(setMarket)
        .catch(() => console.debug(`Missing metadata for market: ${market.marketId}`))
    } else {
      setMarket(market)
    }
  }, [market])

  useEffect(() => {
    if (pool && isRpcSdk(sdk)) {
      const pricecessub = sdk.model.assets.poolPrices
        .$({
          pool: pool.poolId,
          tail: new Date(Date.now() - ms('24 hours')),
        })
        .subscribe(setPrices)
      return () => pricecessub.unsubscribe()
    }
  }, [market])

  return (
    <div>
      {/* 
        Market and Pool can be either rpc data or indexed data.
        Render accordingly.
      */}
    </div>
  )
}
