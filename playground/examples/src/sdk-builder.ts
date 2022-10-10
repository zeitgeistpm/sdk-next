import {} from '@polkadot/util'
import { batterystation, builder, isRpcData } from '@zeitgeistpm/sdk'
import { from, scan, of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'

async function main() {
  /**
   * Here we are creating an observable Zeitgeist SDK.
   * It will load indexer and rpc connection seperatly and emit an sdk instance when either and both are ready.
   */
  const sdk$ = builder(batterystation())

  /**
   * We are consuming sdk and fetchin a market by its id.
   * The market can be either fethed from indexer(prefered) or rpc according to the state of the sdk instance.
   * If the market is from rpc we saturate it with metadata.
   */
  const market$ = sdk$.pipe(
    switchMap(sdk => from(sdk.model.markets.get({ marketId: 0 }))),
    filter(<T>(value: T | null): value is T => value !== null),
    switchMap(market =>
      from(isRpcData(market) ? market.saturate().then(m => m.unwrap()) : of(market)),
    ),
  )

  /**
   * Since market is either indexed or saturated with metadata the question,
   * description and etc metadata is available on it.
   */
  market$.subscribe(market => {
    console.log(`
      ${market.id}
      ${market.question}
      ------------------
      ${market.description}
    `)
  })
}
