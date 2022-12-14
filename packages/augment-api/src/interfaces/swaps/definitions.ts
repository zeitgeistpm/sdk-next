export default {
  types: {
    SwapsAsset: {
      _enum: {
        CategoricalOutcome: '(u128,u16)',
        ScalarOutcome: '(u128,ScalarPosition)',
        CombinatorialOutcome: 'Null',
        PoolShare: 'u128',
        Ztg: 'Null',
      },
    },
    ScalarPosition: {
      _enum: ['long', 'short'],
    },
  },
  rpc: {
    poolAccountId: {
      description: 'Get account id for a pool.',
      params: [
        {
          name: 'poolId',
          type: 'u128',
        },
      ],
      type: 'AccountId',
    },
    getSpotPrices: {
      description: 'get spot prices',
      params: [
        {
          name: 'poolId',
          type: 'u128',
        },
        {
          name: 'assetIn',
          type: 'SwapsAsset',
        },
        {
          name: 'assetOut',
          type: 'SwapsAsset',
        },
        {
          name: 'blocks',
          type: 'Vec<u128>',
        },
      ],
      type: 'Vec<u128>',
    },
    getSpotPrice: {
      description: 'get spot price',
      params: [
        {
          name: 'poolId',
          type: 'u128',
        },
        {
          name: 'assetIn',
          type: 'SwapsAsset',
        },
        {
          name: 'assetOut',
          type: 'SwapsAsset',
        },
        {
          name: 'at',
          type: 'Option<BlockHash>',
        },
        {
          name: 'withFees',
          type: 'bool',
        },
      ],
      type: 'u128',
    },
  },
}
