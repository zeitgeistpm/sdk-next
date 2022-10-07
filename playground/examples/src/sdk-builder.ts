import { batterystation, builder, isIndexedSdk, isRpcSdk } from '@zeitgeistpm/sdk'

async function main() {
  const sdk = builder(batterystation())
  sdk.subscribe(sdk => {
    if (isRpcSdk(sdk)) {
      sdk.model.markets.get({ marketId: 0 }).then(market => {})
    }

    if (isIndexedSdk(sdk)) {
      sdk.model.markets.get({ marketId: 0 }).then(market => {})
    }
  })
}
