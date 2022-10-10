import { builder, isRpcData, isRpcSdk, mainnet } from '@zeitgeistpm/sdk'
import { from, of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'

async function main(marketId: number) {
  /**
   * Here we are creating an observable Zeitgeist SDK.
   * It will load indexer and rpc connection seperatly and emit an sdk instance when either and both are ready.
   */
  const sdk$ = builder(mainnet())

  /**
   * We are consuming sdk and fetchin a market by its id.
   * The market can be either fethed from indexer(prefered) or rpc according to the state of the sdk instance.
   * If the market is from rpc we saturate it with metadata.
   */
  const market$ = sdk$.pipe(
    switchMap(sdk =>
      from(
        isRpcSdk(sdk) ? sdk.model.markets.get.$({ marketId }) : sdk.model.markets.get({ marketId }),
      ),
    ),
    filter(<T>(value: T | null): value is T => value !== null),
    switchMap(market => from(isRpcData(market) ? market.saturateAndUnwrap() : of(market))),
  )

  /**
   * Since market is either indexed or saturated with metadata the question,
   * description and etc metadata is available on it.
   */
  market$.subscribe(market => {
    console.log(
      `id: ${market.id}\n` +
        `question: ${market.question}\n` +
        `description:\n` +
        `------------------------------------\n` +
        `${market.description}\n` +
        `-----------------------------------\n`,
    )
  })
}

main(42)
