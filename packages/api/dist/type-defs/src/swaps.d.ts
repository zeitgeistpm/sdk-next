declare const _default: {
  rpc: {}
  types: {
    Pool: {
      assets: string
      baseAsset: string
      marketId: string
      poolStatus: string
      scoringRule: string
      swapFee: string
      totalSubsidy: string
      totalWeight: string
      weights: string
    }
    CommonPoolEventParams: {
      poolId: string
      who: string
    }
    PoolAssetEvent: {
      asset: string
      bound: string
      cpep: string
      transferred: string
    }
    PoolAssetsEvent: {
      assets: string
      bounds: string
      cpep: string
      transferred: string
    }
    PoolId: string
    PoolStatus: {
      _enum: string[]
    }
    SubsidyUntil: {
      marketId: string
      period: string
    }
    SwapEvent: {
      assetAmountIn: string
      assetAmountOut: string
      assetBound: string
      assetIn: string
      assetOut: string
      cpep: string
      maxPrice: string
    }
  }
}
export default _default
