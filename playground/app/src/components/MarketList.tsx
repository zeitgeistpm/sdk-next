import {
  Context,
  IndexerContext,
  isIndexedSdk,
  isRpcData,
  isRpcSdk,
  RpcContext,
  Sdk,
} from '@zeitgeistpm/sdk'
import { IndexedMarket, Market } from '@zeitgeistpm/sdk/dist/model/types'
import { useEffect, useState } from 'react'

export const MarketList: React.FC<{ sdk: Partial<Sdk<Context>> }> = ({ sdk }) => {
  const [markets, setMarkets] = useState<Market<Context>[]>([])

  const load = async (sdk: Sdk<Context>) => {
    /**
     * Context is RpcContext | IndexedContext | FullContext
     * So markets will Market<RpcContext | IndexedContext | FullContext>
     */
    const { items } = await sdk.model.markets.list()
    setMarkets(items)
  }

  useEffect(() => {
    /**
     * As soon as sdk is ready in any capacity we load markets.
     */
    if (isRpcSdk(sdk) || isIndexedSdk(sdk)) {
      load(sdk)
    }
  }, [sdk])

  return (
    <div>
      {markets.map(market => (
        <MarketComponent key={market.marketId} market={market} />
      ))}
    </div>
  )
}

const MarketComponent = (props: { market: Market<Context> }) => {
  const [market, setMarket] = useState(props.market)

  useEffect(() => {
    /**
     * If market loaded is RpcMarket then we expand it.
     * Expanding it will fetch from ipfs and update local state.
     */
    if (isRpcData(props.market)) {
      props.market
        .expand()
        .then(market => {
          /**
           * If fetching and unwrapping is a success, the local market state will conform to the indexed state
           * and the <IndexedMarketComponent /> will be rendered.
           */
          setMarket(market.unwrap())
        })
        .catch(() => console.debug(`Missing metadata for market: ${market.marketId}`))
    } else {
      setMarket(props.market)
    }
  }, [props.market])

  return (
    <div>
      {isRpcData(market) ? (
        <RpcMarketComponent market={market} />
      ) : (
        <IndexedMarketComponent market={market} />
      )}
    </div>
  )
}

const RpcMarketComponent = (props: { market: Market<RpcContext> }) => {
  return <div>{props.market.marketId}: ...</div>
}

const IndexedMarketComponent = (props: { market: Market<IndexerContext> }) => {
  return (
    <div>
      {props.market.marketId}: {props.market.question}
    </div>
  )
}
