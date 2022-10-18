import BigNumber from 'bignumber.js'
import { CategoryMetadata } from '../../../../meta'
import { AssetId } from '../../../../primitives'

export type AssetIndex = {
  [poolId: number]: {
    liquidity: BigNumber
    assets: Array<{
      amount: BigNumber
      assetId: AssetId
      percentage: number
      price: BigNumber
      category: {
        ticker?: string | null | undefined
        name?: string | null | undefined
        color?: string | null | undefined
      }
    }>
  }
}
