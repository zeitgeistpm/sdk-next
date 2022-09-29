import {
  Context,
  isIndexedSdk,
  isRpcData,
  isIndexedData,
  isRpcSdk,
  Sdk,
  RpcContext,
  IndexerContext,
} from '@zeitgeistpm/sdk'
import { Pool } from '@zeitgeistpm/sdk/dist/model/swaps/pool'
import { isAugmentedRpcMarket, Market } from '@zeitgeistpm/sdk/dist/model/types'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { useEffect, useState } from 'react'

export const MarketComponent: React.FC<{ marketId: number; sdk: Partial<Sdk<Context>> }> = ({
  sdk,
  marketId,
}) => {
  const [market, setMarket] = useState<Market<Context>>()
  const [pool, setPool] = useState<Pool<Context>>()

  useEffect(() => {
    if (isRpcSdk(sdk)) {
      sdk.model.markets.get.$({ marketId }).subscribe(setMarket)
      sdk.model.swaps.getPool.$({ marketId }).subscribe(setPool)
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

  if (pool && isRpcData(pool)) {
    pool
  }

  if (pool && isIndexedData(pool)) {
    pool
  }

  return (
    <div style={{ display: 'grid', columnGap: '50px' }}>
      {!isAugmentedRpcMarket(market) && (
        <>
          <h2>{market?.question}</h2>
          {pool && isRpcObject(pool) && <>{pool.poolStatus}</>}
        </>
      )}
    </div>
  )
}
