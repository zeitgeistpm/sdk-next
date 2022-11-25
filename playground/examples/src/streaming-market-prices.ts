import { batterystation, create, PoolAssetPricesAtBlock } from '@zeitgeistpm/sdk'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'
import { Observable } from 'rxjs'
import { filter, switchMap, withLatestFrom } from 'rxjs/operators'

async function main(marketId: number) {
  const sdk = await create(batterystation())

  /**
   * Fetch market and saturate it with metadata if the market is fetched from rpc.
   * Saturate will fetch ipfs data and conform the market to same type as returned from indexer.
   */
  const market$ = sdk.model.markets.get
    .$({ marketId })
    .pipe(switchMap(market => market.saturate().unwrap()))

  /**
   * Fetch pool prices stream for market.
   * Will produce prices for every hour of the last 24 hours, then tail at every block.
   */
  const poolPrices$: Observable<PoolAssetPricesAtBlock> = sdk.model.swaps.getPool
    .$({ marketId })
    .pipe(
      filter(isNotNull),
      switchMap(pool =>
        sdk.model.swaps.poolPrices.$({
          pool: pool.poolId,
          from: '-24 hour',
          resolution: '1 hour',
        }),
      ),
    )

  /**
   * Subscribe to pool prices and latest market storage.
   * Log prices with ticker metadata from the corresponding asset|category index.
   */
  poolPrices$.pipe(withLatestFrom(market$)).subscribe(([prices, market]) => {
    market.categories?.map((category, index) => {
      const [block, price] = prices[index]
      console.log(
        `Market ${market.marketId} token(${category?.ticker})` +
          `at block ${block}, price ${price.toNumber() / 10 ** 10} ZTG`,
      )
      if (market.status === 'Closed') {
        console.log('Market has closed.')
        process.exit()
      }
    })
  })
}

main(367)
