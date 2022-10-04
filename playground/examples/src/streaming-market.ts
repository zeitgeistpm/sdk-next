import { batterystation, create, isRpcData } from '@zeitgeistpm/sdk'
import { from } from 'rxjs'
import { switchMap, withLatestFrom } from 'rxjs/operators'

export const main = async (marketId: number) => {
  const sdk = await create(batterystation())
  /**
   * Fetch market and saturate it with metadata if the market is fetched from rpc.
   * Saturate will fetch ipfs data and conform the market to same type as returned from indexer.
   */
  const market$ = sdk.model.markets.get
    .$({ marketId })
    .pipe(
      switchMap(market =>
        from(!isRpcData(market) ? market : market.saturate().then(market => market.unwrap())),
      ),
    )

  /**
   * Fetch pool prices stream for market.
   * Will produce prices for every hour of the last 24 hours, then tail at every block.
   */
  const poolPrices$ = sdk.model.swaps.getPool.$({ marketId }).pipe(
    switchMap(pool =>
      sdk.model.swaps.poolPrices.$({
        pool: pool.poolId,
        tail: '-24 hour',
        resolution: '1 hour',
      }),
    ),
  )

  /**
   * Subscribe to pool prices and log corespondingly to market and asset token.
   */
  poolPrices$.pipe(withLatestFrom(market$)).subscribe(([prices, market]) => {
    market.categories?.map((category, index) => {
      const [block, price] = prices[index]
      console.log(
        `Market ${market.marketId} token(${category?.ticker}) at block ${block} 
       at price ${price.toNumber() / 10 ** 10} ZTG`,
      )
      if (market.status === 'Closed') {
        console.log('Market has closed.')
        process.exit()
      }
    })
  })
}
