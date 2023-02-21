import { batterystationRpc, create, RpcContext, Sdk } from '@zeitgeistpm/sdk'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import { mapget } from '@zeitgeistpm/utility/dist/btreemap'

const sdk: Sdk<RpcContext> = await create(batterystationRpc())

const pool = await sdk.api.query.swaps.pools(100).then(pool => pool.unwrap())

const assets = pool.assets

const weights = pool.weights.unwrap()

const assetA = assets.at(0)!
const assetB = sdk.api.createType('ZeitgeistPrimitivesAsset', {
  categoricalOutcome: [411, 1],
})

const weightA = mapget(weights, assetA)!
const weightB = mapget(weights, assetB)!

assert(weightA.eq(weightB), () => {
  throw new Error('Weights are not equal')
})

console.log('mapget works for objects and codecs.')

process.exit(0)
