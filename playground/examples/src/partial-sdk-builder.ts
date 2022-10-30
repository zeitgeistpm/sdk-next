import {
  create$,
  isFullSdk,
  isIndexedSdk,
  isRpcData,
  isRpcSdk,
  mainnet,
} from '@zeitgeistpm/sdk'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'
import { delay } from '@zeitgeistpm/utility/dist/async'
import { from, of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'

async function main(marketId: number) {
  /**
   * Here we are creating an observable Zeitgeist SDK.
   * It will load indexer and rpc connection seperatly and emit an sdk instance when either and both are ready.
   */
  const sdk$ = create$(mainnet())

  const sub1 = sdk$.subscribe(sdk => {
    console.log('1 got sdk')
    if (isRpcSdk(sdk)) {
      sdk.context.provider.on('disconnected', () => console.log('disconeccted'))
    }
  })

  await delay(5000)

  const sub2 = sdk$.subscribe(() => {
    console.log('2 got sdk')
  })

  sub1.unsubscribe()
  sub2.unsubscribe()

  /**
   * We are consuming sdk and fetchin a market by its id.
   * The market can be either fethed from indexer(prefered) or rpc according to the state of the sdk instance.
   * If the market is from rpc we saturate it with metadata.
   */
  // const market$ = sdk$.pipe(
  //   switchMap(sdk =>
  //     from(
  //       isRpcSdk(sdk)
  //         ? sdk.model.markets.get.$({ marketId })
  //         : sdk.model.markets.get({ marketId }),
  //     ),
  //   ),
  //   filter(isNotNull),
  //   switchMap(market => from(isRpcData(market) ? market.saturate().unwrap() : of(market))),
  // )

  // sdk$.subscribe(async sdk => {
  //   if (isFullSdk(sdk)) {
  //     const market = await sdk.model.markets.get({ marketId })
  //   }
  // })

  // /**
  //  * Since market is either indexed or saturated with metadata the question,
  //  * description and etc metadata is available on it.
  //  */
  // market$.subscribe(market => {
  //   console.log(
  //     `id: ${market.id}\n` +
  //       `question: ${market.question}\n` +
  //       `description:\n` +
  //       `------------------------------------\n` +
  //       `${market.description}\n` +
  //       `-----------------------------------\n`,
  //   )
  // })
}

main(42)
