import {} from '@polkadot/util'
import { batterystation, builder, isRpcData } from '@zeitgeistpm/sdk'
import { from, scan, of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'

async function main() {
  const sdk = builder(batterystation())

  const market$ = sdk.pipe(
    switchMap(sdk => from(sdk.model.markets.get({ marketId: 0 }))),
    filter(isNotNull),
    switchMap(market =>
      from(isRpcData(market) ? market.saturate().then(m => m.unwrap()) : of(market)),
    ),
  )

  market$.subscribe(market => {
    console.log(market.question)
  })
}

const isNotNull = <T>(value: T | null): value is T => value !== null
