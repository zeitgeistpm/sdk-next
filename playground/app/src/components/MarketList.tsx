import { Context, isIndexedSdk, isRpcSdk, Sdk } from '@zeitgeistpm/sdk'
import {
  AugmentedRpcMarket,
  IndexedMarket,
  isAugmentedRpcMarket,
  Market,
} from '@zeitgeistpm/sdk/dist/model/types'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { useEffect, useState } from 'react'

export const MarketList: React.FC<{ sdk: Partial<Sdk<Context>> }> = ({ sdk }) => {
  const [markets, setMarkets] = useState<Market[]>([])

  const load = async (sdk: Sdk<Context>) => {
    const { items } = await sdk.model.markets.list()
    setMarkets(items.sort((a, b) => (a.marketId > b.marketId ? -1 : 1)).slice(200))
  }

  useEffect(() => {
    if (isRpcSdk(sdk)) {
      load(sdk)
      sdk.model.markets.create({
        metadata: {},
      })
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

const FullMarketComponent = (props: { market: IndexedMarket }) => {
  return (
    <div>
      {props.market.marketId}: {props.market.question}
    </div>
  )
}
