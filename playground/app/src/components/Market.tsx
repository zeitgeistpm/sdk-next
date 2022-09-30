import { Context, isIndexedData, isIndexedSdk, isRpcData, isRpcSdk, Sdk } from '@zeitgeistpm/sdk'
import { PoolAssetPricesAtBlock } from '@zeitgeistpm/sdk/dist/model/swaps'
import { Pool } from '@zeitgeistpm/sdk/dist/model/swaps/pool'
import { Market } from '@zeitgeistpm/sdk/dist/model/types'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { from } from 'rxjs'
import { map, mergeWith, switchMap, withLatestFrom, scan } from 'rxjs/operators'
import ms from 'ms'
import { useEffect, useState } from 'react'
import { useToast, Box, Heading, Text } from '@chakra-ui/react'
import { last } from 'lodash'

export const MarketComponent: React.FC<{ marketId: number; sdk: Partial<Sdk<Context>> }> = ({
  sdk,
  marketId,
}) => {
  const [market, setMarket] = useState<Market<Context>>()
  const [pool, setPool] = useState<Pool<Context>>()
  const [prices, setPrices] = useState<PoolAssetPricesAtBlock>([])

  const toast = useToast()

  // useEffect(() => {
  //   if (isRpcSdk(sdk)) {
  //     const marketsub = sdk.model.markets.get
  //       .$({ marketId })
  //       .pipe(switchMap(m => from(m.expand().then(market => market.unrightOr(throws)))))
  //       .subscribe({
  //         next: setMarket,
  //         error: error => {
  //           toast({
  //             title: 'Fetching ipfs data for market failed.',
  //             status: 'warning',
  //           })
  //         },
  //       })
  //     const poolsub = sdk.model.swaps.getPool.$({ marketId }).subscribe(setPool)
  //     return () => {
  //       marketsub.unsubscribe()
  //       poolsub.unsubscribe()
  //     }
  //   }
  // }, [sdk])

  // useEffect(() => {
  //   if (isRpcData(market)) {
  //     market
  //       .expand()
  //       .then(market => market.unrightOr(throws))
  //       .then(setMarket)
  //       .catch(() => console.debug(`Missing metadata for market: ${market.marketId}`))
  //   } else {
  //     setMarket(market)
  //   }
  // }, [market])

  useEffect(() => {
    if (isRpcSdk(sdk)) {
      const marketId = 190

      const market$ = sdk.model.markets.get
        .$({ marketId })
        .pipe(
          switchMap(market =>
            from(
              isRpcData(market) ? market.expand().then(market => market.unrightOr(throws)) : market,
            ),
          ),
        )

      const poolPrices$ = sdk.model.swaps.getPool.$({ marketId }).pipe(
        switchMap(pool =>
          sdk.model.swaps.poolPrices.$({
            pool: pool.poolId,
            tail: '-24 hour',
            resolution: '1 hour',
          }),
        ),
      )

      poolPrices$.pipe(withLatestFrom(market$)).subscribe(([prices, market]) => {
        market.categories?.map((category, index) => {
          const [block, price] = prices[index]
          console.log(
            `Market ${market.marketId} token(${category?.ticker}) at price ${
              price.toNumber() / 10 ** 10
            } ZTG at block ${block}`,
          )

          if (market.status === 'Closed') {
            console.log('Market has closed.')
            process.exit()
          }
        })
      })

      // const pricecessub = sdk.model.assets.poolPrices
      //   .$({
      //     pool: pool.poolId,
      //     tail: '-30 day',
      //     resolution: '1 day',
      //   })
      //   .subscribe(setPrices)

      // const market$ = sdk.model.markets.get
      //   .$({ marketId })
      //   .pipe(switchMap(m => from(m.expand().then(market => market.unrightOr(throws)))))

      // const poolPrices$ = sdk.model.assets.poolPrices.$({
      //   pool: pool.poolId,
      //   tail: '-24 hour',
      //   resolution: '1 hour',
      // })

      // poolPrices$.pipe(withLatestFrom(market$)).subscribe(([prices, market]) => {
      //   market.categories?.map((category, index) => {
      //     const [block, price] = prices[index]
      //     console.log(
      //       `Market ${market.marketId} token(${category?.ticker}) at price ${
      //         price.toNumber() / 10 ** 10
      //       } ZTG at block ${block}`,
      //     )
      //   })
      // })

      // return () => pricecessub.unsubscribe()
    }
  }, [sdk, pool, market])

  console.log(prices)

  return (
    <Box>
      {isIndexedData(market) && (
        <>
          <Heading>{market.question}</Heading>
          <Text>{market.description}</Text>
          {market.categories?.map((category, index) => {
            return (
              <Box key={index}>
                {category?.ticker}
                {': '}
                {(prices[index]?.[1].toNumber() ?? 0) / 10 ** 10}
              </Box>
            )
          })}
        </>
      )}
    </Box>
  )
}
