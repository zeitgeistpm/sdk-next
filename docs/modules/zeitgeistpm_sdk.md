[sdk-v2](../README.md) / [Modules](../modules.md) / @zeitgeistpm/sdk

# Module: @zeitgeistpm/sdk

## Table of contents

### Enumerations

- [KnownPresets](../enums/zeitgeistpm_sdk.KnownPresets.md)
- [SupportedParachain](../enums/zeitgeistpm_sdk.SupportedParachain.md)

### Interfaces

- [MetadataStorage](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)

### Type Aliases

- [AssetId](zeitgeistpm_sdk.md#assetid)
- [AssetPriceAtBlock](zeitgeistpm_sdk.md#assetpriceatblock)
- [AugmentedRpcMarketList](zeitgeistpm_sdk.md#augmentedrpcmarketlist)
- [AuthorizedReport](zeitgeistpm_sdk.md#authorizedreport)
- [BaseConfig](zeitgeistpm_sdk.md#baseconfig)
- [BigNumber](zeitgeistpm_sdk.md#bignumber)
- [BlockNumber](zeitgeistpm_sdk.md#blocknumber)
- [CategoricalAssetId](zeitgeistpm_sdk.md#categoricalassetid)
- [CategoricalIndex](zeitgeistpm_sdk.md#categoricalindex)
- [CategoryMetadata](zeitgeistpm_sdk.md#categorymetadata)
- [CommentMetadata](zeitgeistpm_sdk.md#commentmetadata)
- [Config](zeitgeistpm_sdk.md#config)
- [Context](zeitgeistpm_sdk.md#context)
- [CreateMarketBaseParams](zeitgeistpm_sdk.md#createmarketbaseparams)
- [CreateMarketData](zeitgeistpm_sdk.md#createmarketdata)
- [CreateMarketParams](zeitgeistpm_sdk.md#createmarketparams)
- [CreateMarketResult](zeitgeistpm_sdk.md#createmarketresult)
- [CreateMarketTransaction](zeitgeistpm_sdk.md#createmarkettransaction)
- [CreateMarketWithPoolParams](zeitgeistpm_sdk.md#createmarketwithpoolparams)
- [CreateStandaloneMarketParams](zeitgeistpm_sdk.md#createstandalonemarketparams)
- [Data](zeitgeistpm_sdk.md#data)
- [Destroyed](zeitgeistpm_sdk.md#destroyed)
- [Disputed](zeitgeistpm_sdk.md#disputed)
- [DynamicStage](zeitgeistpm_sdk.md#dynamicstage)
- [ExchangeFullSetParams](zeitgeistpm_sdk.md#exchangefullsetparams)
- [FullConfig](zeitgeistpm_sdk.md#fullconfig)
- [FullContext](zeitgeistpm_sdk.md#fullcontext)
- [FullMarketList](zeitgeistpm_sdk.md#fullmarketlist)
- [GracePeriod](zeitgeistpm_sdk.md#graceperiod)
- [IndexedBase](zeitgeistpm_sdk.md#indexedbase)
- [IndexedData](zeitgeistpm_sdk.md#indexeddata)
- [IndexedMarket](zeitgeistpm_sdk.md#indexedmarket)
- [IndexedPool](zeitgeistpm_sdk.md#indexedpool)
- [IndexerConfig](zeitgeistpm_sdk.md#indexerconfig)
- [IndexerContext](zeitgeistpm_sdk.md#indexercontext)
- [InfiniteStage](zeitgeistpm_sdk.md#infinitestage)
- [KnownPreset](zeitgeistpm_sdk.md#knownpreset)
- [Market](zeitgeistpm_sdk.md#market)
- [MarketDeadlines](zeitgeistpm_sdk.md#marketdeadlines)
- [MarketId](zeitgeistpm_sdk.md#marketid)
- [MarketIdTypeOf](zeitgeistpm_sdk.md#marketidtypeof)
- [MarketList](zeitgeistpm_sdk.md#marketlist)
- [MarketMetadata](zeitgeistpm_sdk.md#marketmetadata)
- [MarketMethods](zeitgeistpm_sdk.md#marketmethods)
- [MarketOutcomeAssetId](zeitgeistpm_sdk.md#marketoutcomeassetid)
- [MarketStage](zeitgeistpm_sdk.md#marketstage)
- [MarketStatus](zeitgeistpm_sdk.md#marketstatus)
- [MarketTypeOf](zeitgeistpm_sdk.md#markettypeof)
- [Markets](zeitgeistpm_sdk.md#markets)
- [MarketsIndexerQuery](zeitgeistpm_sdk.md#marketsindexerquery)
- [MarketsListQuery](zeitgeistpm_sdk.md#marketslistquery)
- [MarketsRpcQuery](zeitgeistpm_sdk.md#marketsrpcquery)
- [Model](zeitgeistpm_sdk.md#model)
- [NA](zeitgeistpm_sdk.md#na)
- [OpenReportingPeriod](zeitgeistpm_sdk.md#openreportingperiod)
- [OracleReportingPeriod](zeitgeistpm_sdk.md#oraclereportingperiod)
- [Pool](zeitgeistpm_sdk.md#pool)
- [PoolAssetPricesAtBlock](zeitgeistpm_sdk.md#poolassetpricesatblock)
- [PoolDeploymentParams](zeitgeistpm_sdk.md#pooldeploymentparams)
- [PoolExitParams](zeitgeistpm_sdk.md#poolexitparams)
- [PoolExitSubsidyParams](zeitgeistpm_sdk.md#poolexitsubsidyparams)
- [PoolExitWithExactAssetAmountParams](zeitgeistpm_sdk.md#poolexitwithexactassetamountparams)
- [PoolExitWithExactPoolAmountParams](zeitgeistpm_sdk.md#poolexitwithexactpoolamountparams)
- [PoolGetByIdQuery](zeitgeistpm_sdk.md#poolgetbyidquery)
- [PoolGetByMarketIdQuery](zeitgeistpm_sdk.md#poolgetbymarketidquery)
- [PoolGetQuery](zeitgeistpm_sdk.md#poolgetquery)
- [PoolJoinParams](zeitgeistpm_sdk.md#pooljoinparams)
- [PoolJoinWithExactAmountParams](zeitgeistpm_sdk.md#pooljoinwithexactamountparams)
- [PoolJoinWithExactPoolAmount](zeitgeistpm_sdk.md#pooljoinwithexactpoolamount)
- [PoolList](zeitgeistpm_sdk.md#poollist)
- [PoolMethods](zeitgeistpm_sdk.md#poolmethods)
- [PoolPrices](zeitgeistpm_sdk.md#poolprices)
- [PoolPricesQuery](zeitgeistpm_sdk.md#poolpricesquery)
- [PoolPricesStreamQuery](zeitgeistpm_sdk.md#poolpricesstreamquery)
- [PoolRpcOnlyMethods](zeitgeistpm_sdk.md#poolrpconlymethods)
- [PoolShareAssetId](zeitgeistpm_sdk.md#poolshareassetid)
- [PoolsIndexerQuery](zeitgeistpm_sdk.md#poolsindexerquery)
- [PoolsListQuery](zeitgeistpm_sdk.md#poolslistquery)
- [Proposed](zeitgeistpm_sdk.md#proposed)
- [Reported](zeitgeistpm_sdk.md#reported)
- [Resolved](zeitgeistpm_sdk.md#resolved)
- [RpcConfig](zeitgeistpm_sdk.md#rpcconfig)
- [RpcContext](zeitgeistpm_sdk.md#rpccontext)
- [RpcMarket](zeitgeistpm_sdk.md#rpcmarket)
- [RpcPool](zeitgeistpm_sdk.md#rpcpool)
- [SaturatedPoolEntry](zeitgeistpm_sdk.md#saturatedpoolentry)
- [SaturatedPoolEntryAsset](zeitgeistpm_sdk.md#saturatedpoolentryasset)
- [SaturatedPoolIndex](zeitgeistpm_sdk.md#saturatedpoolindex)
- [SaturatedRpcMarket](zeitgeistpm_sdk.md#saturatedrpcmarket)
- [ScalarAssetId](zeitgeistpm_sdk.md#scalarassetid)
- [ScalarIndex](zeitgeistpm_sdk.md#scalarindex)
- [ScalarPosition](zeitgeistpm_sdk.md#scalarposition)
- [ScalarRangeType](zeitgeistpm_sdk.md#scalarrangetype)
- [Sdk](zeitgeistpm_sdk.md#sdk)
- [SlippageType](zeitgeistpm_sdk.md#slippagetype)
- [StorageIdTypeOf](zeitgeistpm_sdk.md#storageidtypeof)
- [StorageTypeOf](zeitgeistpm_sdk.md#storagetypeof)
- [SwapExactAmountInParams](zeitgeistpm_sdk.md#swapexactamountinparams)
- [SwapExactAmountOutParams](zeitgeistpm_sdk.md#swapexactamountoutparams)
- [Swaps](zeitgeistpm_sdk.md#swaps)
- [TaggedID](zeitgeistpm_sdk.md#taggedid)
- [TaggedMetadata](zeitgeistpm_sdk.md#taggedmetadata)
- [Time](zeitgeistpm_sdk.md#time)
- [Trading](zeitgeistpm_sdk.md#trading)
- [ZtgAssetId](zeitgeistpm_sdk.md#ztgassetid)

### Variables

- [BASE](zeitgeistpm_sdk.md#base)
- [IOAssetId](zeitgeistpm_sdk.md#ioassetid)
- [IOBlockNumber](zeitgeistpm_sdk.md#ioblocknumber)
- [IOCategoricalAssetId](zeitgeistpm_sdk.md#iocategoricalassetid)
- [IOCategoricalIndex](zeitgeistpm_sdk.md#iocategoricalindex)
- [IOMarketCategoryMetadata](zeitgeistpm_sdk.md#iomarketcategorymetadata)
- [IOMarketId](zeitgeistpm_sdk.md#iomarketid)
- [IOMarketMetadata](zeitgeistpm_sdk.md#iomarketmetadata)
- [IOMarketOutcomeAssetId](zeitgeistpm_sdk.md#iomarketoutcomeassetid)
- [IOPoolShareAssetId](zeitgeistpm_sdk.md#iopoolshareassetid)
- [IOScalarAssetId](zeitgeistpm_sdk.md#ioscalarassetid)
- [IOScalarIndex](zeitgeistpm_sdk.md#ioscalarindex)
- [IOScalarPosition](zeitgeistpm_sdk.md#ioscalarposition)
- [IOZtgAssetId](zeitgeistpm_sdk.md#ioztgassetid)
- [MAX\_TOTAL\_OUTCOMES\_WEIGHT](zeitgeistpm_sdk.md#max_total_outcomes_weight)
- [MAX\_TOTAL\_WEIGHT](zeitgeistpm_sdk.md#max_total_weight)
- [NA](zeitgeistpm_sdk.md#na-1)
- [ZTG](zeitgeistpm_sdk.md#ztg)
- [indexers](zeitgeistpm_sdk.md#indexers)
- [rpcs](zeitgeistpm_sdk.md#rpcs)

### Functions

- [ZeitgeistIpfs](zeitgeistpm_sdk.md#zeitgeistipfs)
- [asIndexerConfig](zeitgeistpm_sdk.md#asindexerconfig)
- [asRpcConfig](zeitgeistpm_sdk.md#asrpcconfig)
- [attachMarketMethods](zeitgeistpm_sdk.md#attachmarketmethods)
- [attachPoolMethods](zeitgeistpm_sdk.md#attachpoolmethods)
- [attachPoolRcpOnlyMethods](zeitgeistpm_sdk.md#attachpoolrcponlymethods)
- [batterystation](zeitgeistpm_sdk.md#batterystation)
- [batterystationIndexer](zeitgeistpm_sdk.md#batterystationindexer)
- [batterystationRpc](zeitgeistpm_sdk.md#batterystationrpc)
- [calcInGivenOut](zeitgeistpm_sdk.md#calcingivenout)
- [calcOutGivenIn](zeitgeistpm_sdk.md#calcoutgivenin)
- [calcScalarResolvedPrices](zeitgeistpm_sdk.md#calcscalarresolvedprices)
- [calcScalarWinnings](zeitgeistpm_sdk.md#calcscalarwinnings)
- [calcSpotPrice](zeitgeistpm_sdk.md#calcspotprice)
- [create](zeitgeistpm_sdk.md#create)
- [create$](zeitgeistpm_sdk.md#create$)
- [createFullContext](zeitgeistpm_sdk.md#createfullcontext)
- [createIndexerContext](zeitgeistpm_sdk.md#createindexercontext)
- [createRpcContext](zeitgeistpm_sdk.md#createrpccontext)
- [createStorage](zeitgeistpm_sdk.md#createstorage)
- [evenWeights](zeitgeistpm_sdk.md#evenweights)
- [fromEntries](zeitgeistpm_sdk.md#fromentries)
- [fromPrimitive](zeitgeistpm_sdk.md#fromprimitive)
- [getAssetBalance](zeitgeistpm_sdk.md#getassetbalance)
- [getAssetIds](zeitgeistpm_sdk.md#getassetids)
- [getAssetWeight](zeitgeistpm_sdk.md#getassetweight)
- [getDeadlines](zeitgeistpm_sdk.md#getdeadlines)
- [getIndexOf](zeitgeistpm_sdk.md#getindexof)
- [getMarketIdOf](zeitgeistpm_sdk.md#getmarketidof)
- [getPoolId](zeitgeistpm_sdk.md#getpoolid)
- [getPrediction](zeitgeistpm_sdk.md#getprediction)
- [getReportedAt](zeitgeistpm_sdk.md#getreportedat)
- [getReporter](zeitgeistpm_sdk.md#getreporter)
- [getScalarBounds](zeitgeistpm_sdk.md#getscalarbounds)
- [getScalarIndexOf](zeitgeistpm_sdk.md#getscalarindexof)
- [getStatus](zeitgeistpm_sdk.md#getstatus)
- [getSwapFee](zeitgeistpm_sdk.md#getswapfee)
- [getTotalIssuance](zeitgeistpm_sdk.md#gettotalissuance)
- [hasMarketMethods](zeitgeistpm_sdk.md#hasmarketmethods)
- [hasPool](zeitgeistpm_sdk.md#haspool)
- [hasReport](zeitgeistpm_sdk.md#hasreport)
- [isAvailable](zeitgeistpm_sdk.md#isavailable)
- [isBlockNumber](zeitgeistpm_sdk.md#isblocknumber)
- [isFullConfig](zeitgeistpm_sdk.md#isfullconfig)
- [isFullContext](zeitgeistpm_sdk.md#isfullcontext)
- [isFullSdk](zeitgeistpm_sdk.md#isfullsdk)
- [isIndexedData](zeitgeistpm_sdk.md#isindexeddata)
- [isIndexedSdk](zeitgeistpm_sdk.md#isindexedsdk)
- [isIndexerConfig](zeitgeistpm_sdk.md#isindexerconfig)
- [isIndexerContext](zeitgeistpm_sdk.md#isindexercontext)
- [isInfinite](zeitgeistpm_sdk.md#isinfinite)
- [isKnownPreset](zeitgeistpm_sdk.md#isknownpreset)
- [isMarketId](zeitgeistpm_sdk.md#ismarketid)
- [isMarketIdQuery](zeitgeistpm_sdk.md#ismarketidquery)
- [isNA](zeitgeistpm_sdk.md#isna)
- [isPoolIdQuery](zeitgeistpm_sdk.md#ispoolidquery)
- [isRpcConfig](zeitgeistpm_sdk.md#isrpcconfig)
- [isRpcContext](zeitgeistpm_sdk.md#isrpccontext)
- [isRpcData](zeitgeistpm_sdk.md#isrpcdata)
- [isRpcSdk](zeitgeistpm_sdk.md#isrpcsdk)
- [isWithPool](zeitgeistpm_sdk.md#iswithpool)
- [localhostRpc](zeitgeistpm_sdk.md#localhostrpc)
- [mainnet](zeitgeistpm_sdk.md#mainnet)
- [mainnetIndexer](zeitgeistpm_sdk.md#mainnetindexer)
- [mainnetRpc](zeitgeistpm_sdk.md#mainnetrpc)
- [na](zeitgeistpm_sdk.md#na-2)
- [parseAssetId](zeitgeistpm_sdk.md#parseassetid)
- [projectEndTimestamp](zeitgeistpm_sdk.md#projectendtimestamp)
- [reasonOf](zeitgeistpm_sdk.md#reasonof)
- [rpcMarket](zeitgeistpm_sdk.md#rpcmarket-1)
- [rpcPool](zeitgeistpm_sdk.md#rpcpool-1)
- [saturate](zeitgeistpm_sdk.md#saturate)
- [sdk](zeitgeistpm_sdk.md#sdk-1)
- [slippageFromFloat](zeitgeistpm_sdk.md#slippagefromfloat)
- [swapFeeFromFloat](zeitgeistpm_sdk.md#swapfeefromfloat)
- [tagged](zeitgeistpm_sdk.md#tagged)
- [teardown](zeitgeistpm_sdk.md#teardown)
- [timespanOf](zeitgeistpm_sdk.md#timespanof)
- [weightsFromRelativeRatio](zeitgeistpm_sdk.md#weightsfromrelativeratio)

## Type Aliases

### AssetId

Ƭ **AssetId**: `Infer`<typeof [`IOAssetId`](zeitgeistpm_sdk.md#ioassetid)\>

AssetId.
This type delinieates an asset at an index in a market pool.

#### Defined in

[packages/sdk/src/primitives/assetid.ts:13](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L13)

___

### AssetPriceAtBlock

Ƭ **AssetPriceAtBlock**: [block: BlockNumber, price: Decimal]

Discrete price for a asset at a certain block.

#### Defined in

[packages/sdk/src/model/swaps/functions/poolPrices/types.ts:38](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/poolPrices/types.ts#L38)

___

### AugmentedRpcMarketList

Ƭ **AugmentedRpcMarketList**<`C`, `MS`\>: `Object`

Concrete MarketList for rpc context

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\>[] |

#### Defined in

[packages/sdk/src/model/markets/functions/list/types.ts:39](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/list/types.ts#L39)

___

### AuthorizedReport

Ƭ **AuthorizedReport**: [`DynamicStage`](zeitgeistpm_sdk.md#dynamicstage)<``"AuthorizedReport"``\>

The market has an authorized report and is awaiting resolution after the CorrectionDuration has expired..

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:56](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L56)

___

### BaseConfig

Ƭ **BaseConfig**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `connectionRetries?` | `number` | How many retries if connecting errors. |
| `debug?` | `boolean` | Enable verbose debugging of connection. |

#### Defined in

[packages/sdk/src/config/types.ts:13](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L13)

___

### BigNumber

Ƭ **BigNumber**: `string` \| `number` \| `Decimal`

#### Defined in

[packages/sdk/src/math/bignumber.ts:3](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/bignumber.ts#L3)

___

### BlockNumber

Ƭ **BlockNumber**: `number` & { `BlockNumber`: unique `symbol`  }

BlockNumber opaque(newtype)

#### Defined in

[packages/sdk/src/primitives/blocknumber.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/blocknumber.ts#L7)

___

### CategoricalAssetId

Ƭ **CategoricalAssetId**: `Infer`<typeof [`IOCategoricalAssetId`](zeitgeistpm_sdk.md#iocategoricalassetid)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L15)

___

### CategoricalIndex

Ƭ **CategoricalIndex**: `Infer`<typeof [`IOCategoricalIndex`](zeitgeistpm_sdk.md#iocategoricalindex)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:22](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L22)

___

### CategoryMetadata

Ƭ **CategoryMetadata**: `Infer`<typeof [`IOMarketCategoryMetadata`](zeitgeistpm_sdk.md#iomarketcategorymetadata)\>

#### Defined in

[packages/sdk/src/meta/market/types.ts:4](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/market/types.ts#L4)

___

### CommentMetadata

Ƭ **CommentMetadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__meta` | ``"comments"`` |
| `text` | `string` |

#### Defined in

[packages/sdk/src/meta/comment/types.ts:1](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/comment/types.ts#L1)

___

### Config

Ƭ **Config**<`MS`\>: [`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\> \| [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\> \| [`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

Union type of possible configurations.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/config/types.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L8)

___

### Context

Ƭ **Context**<`MS`\>: [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\>

Union type that can be either rpc, indexer or full context.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/context/types.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L8)

___

### CreateMarketBaseParams

Ƭ **CreateMarketBaseParams**<`C`, `MS`\>: `Object`

Base parameters for creating a market.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseAsset` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) | The base asset of the market. Can be ZTG or another |
| `deadlines` | { `disputeDuration`: `number` ; `gracePeriod`: `number` ; `oracleDuration`: `number`  } | - |
| `deadlines.disputeDuration` | `number` | The number of blocks to await possible disputes after market is resolved. |
| `deadlines.gracePeriod` | `number` | The number of blocks to wait after trading ends and before the oracle can resolve the market. |
| `deadlines.oracleDuration` | `number` | The number of blocks to wait for the oracle to resolve the market. If this period is exceeded, the market will go into open resolving where anyone can resolve the market. |
| `disputeMechanism` | `ZeitgeistPrimitivesMarketMarketDisputeMechanism` \| ``"Authorized"`` \| ``"Court"`` \| ``"SimpleDisputes"`` | Market dispute mechanism. **`Note`** Authorized is the only one available atm. |
| `marketType` | { `Categorical`: `number`  } \| { `Scalar`: [`number`, `number`]  } | Type of market, categorical or scalar |
| `metadata` | [`MarketTypeOf`](zeitgeistpm_sdk.md#markettypeof)<`MS`\> | Metadata to store in external storage alongside the market. |
| `oracle` | `string` | The resolver of the market outcome |
| `period` | { `Block`: [`number`, `number`]  } \| { `Timestamp`: [`number`, `number`]  } | The period of the market in tuple of timestamps or block numbers. |
| `signer` | `KeyringPairOrExtSigner` | The signer of the transaction. Can be a unlocked keyring pair or extension. |
| `waitForFinalization?` | `boolean` | If true, the extrinsic will wait for the market to be finalize in a block before resolving. Otherwise it will resolve immediately after inclusion. |

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:35](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L35)

___

### CreateMarketData

Ƭ **CreateMarketData**<`C`, `MS`, `P`\>: `Object`

The lazy data extracted from the market creation result.

**`Generic`**

P extends CreateMarketParams - Data will contain market and pool if params is with pool

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |
| `P` | extends [`CreateMarketParams`](zeitgeistpm_sdk.md#createmarketparams)<`C`, `MS`\> |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | [`Market`](zeitgeistpm_sdk.md#market)<`C`, `MS`\> | The market created by the extrinsic. |
| `pool` | `P` extends [`CreateMarketWithPoolParams`](zeitgeistpm_sdk.md#createmarketwithpoolparams)<`C`, `MS`\> ? [`Pool`](zeitgeistpm_sdk.md#pool)<`C`, `MS`\> : `undefined` | - |

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:180](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L180)

___

### CreateMarketParams

Ƭ **CreateMarketParams**<`C`, `MS`\>: [`CreateStandaloneMarketParams`](zeitgeistpm_sdk.md#createstandalonemarketparams)<`C`, `MS`\> \| [`CreateMarketWithPoolParams`](zeitgeistpm_sdk.md#createmarketwithpoolparams)<`C`, `MS`\> & `TransactionHooks`

Union type for creating a standalone market or permissionless cpmm market with pool.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L26)

___

### CreateMarketResult

Ƭ **CreateMarketResult**<`C`, `MS`, `P`\>: `ExtractableResult`<`IEither`<`Error`, [`CreateMarketData`](zeitgeistpm_sdk.md#createmarketdata)<`C`, `MS`, `P`\>\>\>

The result of creating a market.
Market and pool(if created) can be lazily extracted from events using the data function.

**`Generic`**

P extends CreateMarketParams - Data will contain market and pool if params is with pool

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |
| `P` | extends [`CreateMarketParams`](zeitgeistpm_sdk.md#createmarketparams)<`C`, `MS`\> = [`CreateMarketParams`](zeitgeistpm_sdk.md#createmarketparams)<`C`, `MS`\> |

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:169](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L169)

___

### CreateMarketTransaction

Ƭ **CreateMarketTransaction**: `Object`

A transaction object encapsulating the raw transaction and a rollback function
to remove metadata from storage if submission fails.

**`Note`**

its the consumers responsibility to call rollback if transaction fails.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rollbackMetadata` | `Te.TaskEither`<`Error`, `void`, []\> |
| `tx` | `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> |

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:198](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L198)

___

### CreateMarketWithPoolParams

Ƭ **CreateMarketWithPoolParams**<`C`, `MS`\>: [`CreateMarketBaseParams`](zeitgeistpm_sdk.md#createmarketbaseparams)<`C`, `MS`\> & { `pool`: { `amount`: `string` \| `u128` ; `swapFee`: `string` \| `u128` ; `weights`: (`string` \| `u128`)[]  }  }

Parameters for creating a market with a pool.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = `C`[``"storage"``] |

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:133](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L133)

___

### CreateStandaloneMarketParams

Ƭ **CreateStandaloneMarketParams**<`C`, `MS`\>: [`CreateMarketBaseParams`](zeitgeistpm_sdk.md#createmarketbaseparams)<`C`, `MS`\> & { `creationType`: `ZeitgeistPrimitivesMarketMarketCreation`[``"type"``] ; `scoringRule?`: `ZeitgeistPrimitivesPoolScoringRule`[``"type"``]  }

Parameters for creating a market without a pool

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = `C`[``"storage"``] |

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:113](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L113)

___

### Data

Ƭ **Data**<`C`, `R`, `I`, `MS`\>: `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? `I` : `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> \| [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> |
| `R` | extends `Codec` |
| `I` | extends [`IndexedData`](zeitgeistpm_sdk.md#indexeddata) |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/primitives/data.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/data.ts#L6)

___

### Destroyed

Ƭ **Destroyed**: [`InfiniteStage`](zeitgeistpm_sdk.md#infinitestage)<``"Destroyed"``\>

The market has been destroyed.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:66](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L66)

___

### Disputed

Ƭ **Disputed**: [`InfiniteStage`](zeitgeistpm_sdk.md#infinitestage)<``"Disputed"``\>

The market has been disputed and is awaiting an authorized report.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:51](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L51)

___

### DynamicStage

Ƭ **DynamicStage**<`T`\>: `Object`

A stage with a dynamic remaining time.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `remainingTime` | `number` |
| `totalTime` | `number` |
| `type` | `T` |

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:71](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L71)

___

### ExchangeFullSetParams

Ƭ **ExchangeFullSetParams**: `Object`

Params needed to exhange(buy or sell) a full set of assets for a pool.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `marketId` | `number` \| `u128` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:339](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L339)

___

### FullConfig

Ƭ **FullConfig**<`MS`\>: [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\> & [`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/config/types.ts:24](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L24)

___

### FullContext

Ƭ **FullContext**<`MS`\>: [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> & [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext)

Zeitgeist SDK context with both rpc and indexer features enabled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/context/types.ts:16](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L16)

___

### FullMarketList

Ƭ **FullMarketList**<`C`, `MS`\>: `Object`

Concrete MarketList for indexed context

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\>[] |

#### Defined in

[packages/sdk/src/model/markets/functions/list/types.ts:32](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/list/types.ts#L32)

___

### GracePeriod

Ƭ **GracePeriod**: [`DynamicStage`](zeitgeistpm_sdk.md#dynamicstage)<``"GracePeriod"``\>

The market has been closed and is in the grace period awaiting to go into its reporting stage.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:31](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L31)

___

### IndexedBase

Ƭ **IndexedBase**: `Omit`<`FullMarketFragment`, keyof [`MarketMetadata`](zeitgeistpm_sdk.md#marketmetadata)\>

The base type of indexed data that also can be infered from the rpc data.

#### Defined in

[packages/sdk/src/model/markets/market.ts:100](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L100)

___

### IndexedData

Ƭ **IndexedData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | `string` |
| `id` | `string` |

#### Defined in

[packages/sdk/src/primitives/data.ts:13](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/data.ts#L13)

___

### IndexedMarket

Ƭ **IndexedMarket**<`C`, `MS`\>: `FullMarketFragment` & `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`MarketMethods`](zeitgeistpm_sdk.md#marketmethods)<`C`, `MS`\> : {}

Concrete Market type for a indexed market.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/markets/market.ts:61](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L61)

___

### IndexedPool

Ƭ **IndexedPool**<`C`, `MS`\>: `Unpacked`<`PoolsQuery`[``"pools"``]\> & [`PoolMethods`](zeitgeistpm_sdk.md#poolmethods) & `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`PoolRpcOnlyMethods`](zeitgeistpm_sdk.md#poolrpconlymethods) : {}

Concrete Pool type for indexed Pool.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:52](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L52)

___

### IndexerConfig

Ƭ **IndexerConfig**: [`BaseConfig`](zeitgeistpm_sdk.md#baseconfig) & { `indexer`: `string`  }

#### Defined in

[packages/sdk/src/config/types.ts:37](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L37)

___

### IndexerContext

Ƭ **IndexerContext**: `Object`

Zeitgeist SDK context with indexer features enabled.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `indexer` | `ZeitgeistIndexer` | [ZeitgeistIndexer](zeitgeistpm_indexer.md#zeitgeistindexer) |

#### Defined in

[packages/sdk/src/context/types.ts:31](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L31)

___

### InfiniteStage

Ƭ **InfiniteStage**<`T`\>: `Object`

A stage with an infinite remaining time.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `remainingTime` | `Infinity` |
| `totalTime` | `Infinity` |
| `type` | `T` |

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:76](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L76)

___

### KnownPreset

Ƭ **KnownPreset**<`C`, `MS`\>: `C` & { `preset`: [`KnownPresets`](../enums/zeitgeistpm_sdk.KnownPresets.md)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Config`](zeitgeistpm_sdk.md#config)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/config/known/types.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/types.ts#L8)

___

### Market

Ƭ **Market**<`C`, `MS`\>: [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> \| [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\>

Union type for Indexed and Rpc Markets.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/markets/market.ts:48](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L48)

___

### MarketDeadlines

Ƭ **MarketDeadlines**: `Object`

Type for market deadlines as numbers.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disputeDuration` | `number` |
| `gracePeriod` | `number` |
| `oracleDuration` | `number` |

#### Defined in

[packages/sdk/src/model/markets/market.ts:257](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L257)

___

### MarketId

Ƭ **MarketId**: `number` & { `MarketId`: unique `symbol`  }

MarketId opaque(newtype)

#### Defined in

[packages/sdk/src/primitives/marketid.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/marketid.ts#L7)

___

### MarketIdTypeOf

Ƭ **MarketIdTypeOf**<`MS`\>: [`StorageIdTypeOf`](zeitgeistpm_sdk.md#storageidtypeof)<`MS`[``"markets"``]\>

Unpack the inner type of market id.

**`Generic`**

MS extends MetadataStorage

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/meta/types.ts:77](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L77)

___

### MarketList

Ƭ **MarketList**<`C`, `MS`\>: [`Market`](zeitgeistpm_sdk.md#market)<`C`, `MS`\>[]

List of Markets.
Will differentiate between indexer and rpc context

**`Generic`**

C Context - the context to fetch the marketlist for.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/markets/functions/list/types.ts:14](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/list/types.ts#L14)

___

### MarketMetadata

Ƭ **MarketMetadata**: `Infer`<typeof [`IOMarketMetadata`](zeitgeistpm_sdk.md#iomarketmetadata)\>

#### Defined in

[packages/sdk/src/meta/market/types.ts:3](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/market/types.ts#L3)

___

### MarketMethods

Ƭ **MarketMethods**<`C`, `MS`\>: `Object`

Interface on market with methods for deploying swap pools, buying and selling sets of assets..

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `adminCleanUpPool` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<ReportOutcomeParams, "marketId"\> & TransactionHooks]\> | Clean up the pool of a resolved market. **`Origin`** The root origin. **`Param`** Omit<ReportOutcomeParams, 'marketId'> |
| `adminDestroyMarket` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Object & TransactionHooks]\> | Destroy a market, including its outcome assets, market account and pool account. Must be called by `DestroyOrigin`. Bonds (unless already returned) are slashed without exception. Can currently only be used for destroying CPMM markets. **`Origin`** DestroyOrigin **`Param`** {signer: KeyringPairOrExtSigner} |
| `adminMoveMarketToClosed` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Object & TransactionHooks]\> | Immediately move an open market to closed. **`Origin`** CloseOrigin **`Param`** {signer: KeyringPairOrExtSigner} |
| `adminMoveMarketToResolved` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Object & TransactionHooks]\> | Immediately move a reported or disputed market to resolved. **`Origin`** ResolveOrigin **`Param`** {signer: KeyringPairOrExtSigner} |
| `approveMarket` | `Te.TaskEither`<`Error`, `ISubmittableResult`, [params: Object & TransactionHooks]\> | Approves a market that is waiting for approval from the advisory committee. **`Origin`** ApproveOrigin **`Param`** {signer: KeyringPairOrExtSigner} |
| `buyCompleteSet` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<ExchangeFullSetParams, "marketId"\> & TransactionHooks]\> | Buy a full set of market assets. **`Param`** Omit<ExchangeFullSetParams, 'marketId'> |
| `deploySwapPool` | `Te.TaskEither`<`TransactionError`, `ExtractableResult`<`E.IEither`<`Error`, [`RpcPool`](zeitgeistpm_sdk.md#rpcpool)\>\>, [params: Omit<PoolDeploymentParams, "marketId"\> & TransactionHooks]\> | Deploy a swap pool for the market. **`Param`** Omit<PoolDeploymentParams, 'marketId'> |
| `deploySwapPoolAndAdditionalLiquidity` | `Te.TaskEither`<`TransactionError`, `ExtractableResult`<`E.IEither`<`Error`, [`RpcPool`](zeitgeistpm_sdk.md#rpcpool)\>\>, [params: Omit<PoolDeploymentParams, "marketId"\> & TransactionHooks]\> | Deploy a swap pool for the market and add liquidity. **`Param`** Omit<PoolDeploymentParams, 'marketId'> |
| `disputeOutcome` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<ReportOutcomeParams, "marketId"\> & TransactionHooks]\> | Dispute the current market outcome with a proposed new outcome. **`Param`** Omit<ReportOutcomeParams, 'marketId'> |
| `redeemShares` | `Te.TaskEither`<`Error`, `ISubmittableResult`, [params: Object & TransactionHooks]\> | Redeem the shares for a market. **`Param`** { signer: KeyringPairOrExtSigner } & TransactionHooks |
| `reportOutcome` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<ReportOutcomeParams, "marketId"\> & TransactionHooks]\> | Report the outcome of a market. Can only be called by the markets oracle address. **`Param`** Omit<ReportOutcomeParams, 'marketId'> |
| `sellCompleteSet` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<ExchangeFullSetParams, "marketId"\> & TransactionHooks]\> | Sell a full set of market assets. **`Param`** Omit<ExchangeFullSetParams, 'marketId'> |

#### Defined in

[packages/sdk/src/model/markets/market.ts:105](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L105)

___

### MarketOutcomeAssetId

Ƭ **MarketOutcomeAssetId**: `Infer`<typeof [`IOMarketOutcomeAssetId`](zeitgeistpm_sdk.md#iomarketoutcomeassetid)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:19](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L19)

___

### MarketStage

Ƭ **MarketStage**: [`Proposed`](zeitgeistpm_sdk.md#proposed) \| [`Trading`](zeitgeistpm_sdk.md#trading) \| [`GracePeriod`](zeitgeistpm_sdk.md#graceperiod) \| [`OracleReportingPeriod`](zeitgeistpm_sdk.md#oraclereportingperiod) \| [`OpenReportingPeriod`](zeitgeistpm_sdk.md#openreportingperiod) \| [`Reported`](zeitgeistpm_sdk.md#reported) \| [`Disputed`](zeitgeistpm_sdk.md#disputed) \| [`AuthorizedReport`](zeitgeistpm_sdk.md#authorizedreport) \| [`Resolved`](zeitgeistpm_sdk.md#resolved) \| [`Destroyed`](zeitgeistpm_sdk.md#destroyed)

Union type of all possible market stages.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L6)

___

### MarketStatus

Ƭ **MarketStatus**: `ZeitgeistPrimitivesMarketMarketStatus`[``"type"``] \| ``"Destroyed"``

Union type of all market statuses as string.

#### Defined in

[packages/sdk/src/model/markets/market.ts:252](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L252)

___

### MarketTypeOf

Ƭ **MarketTypeOf**<`MS`\>: [`StorageTypeOf`](zeitgeistpm_sdk.md#storagetypeof)<`MS`[``"markets"``]\>

Unpack the inner type of market storage.

**`Generic`**

MS extends MetadataStorage

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/meta/types.ts:71](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L71)

___

### Markets

Ƭ **Markets**<`C`, `MS`\>: `Object`

Zeitgeist Markets model.
Query and create markets.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `create` | `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? <C, MS, P\>(`params`: `P`) => `Promise`<[`CreateMarketResult`](zeitgeistpm_sdk.md#createmarketresult)<`C`, `MS`, `P`\>\> : `never` | Create a market. Only available when connecting to rpc. |
| `get` | `PFunc`<(`query`: `MarketGetQuery`) => `Promise`<`IOption`<[`Market`](zeitgeistpm_sdk.md#market)<`C`, `MS`\>\>\>, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? { `$`: (`query`: `MarketGetQuery`) => `Observable`<[`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\>\>  } : {}\> | Get a market by its id. |
| `getStage` | `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? (`market`: [`Market`](zeitgeistpm_sdk.md#market)<[`Context`](zeitgeistpm_sdk.md#context)<`MS`\>, `MS`\>, `time?`: `ChainTime`) => `Promise`<[`MarketStage`](zeitgeistpm_sdk.md#marketstage)\> : `never` | Get the current stage of a market. **`Param`** Market<Context<MS>, MS> **`Param`** ChainTime \| undefined |
| `list` | (`query?`: [`MarketsListQuery`](zeitgeistpm_sdk.md#marketslistquery)<`C`\>) => `Promise`<[`MarketList`](zeitgeistpm_sdk.md#marketlist)<`C`, `MS`\>\> | List markets. Stronger quering is enabled when connecting to indexer. **`Note`** Pagination behaves differently between rcp and indexer environments. |

#### Defined in

[packages/sdk/src/model/markets/types.ts:24](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/types.ts#L24)

___

### MarketsIndexerQuery

Ƭ **MarketsIndexerQuery**: `Unpartial`<`PaginationQuery`\> & { `order?`: `MarketOrderByInput` ; `where?`: `MarketWhereInput`  }

Concrete markets Query for indexed context

#### Defined in

[packages/sdk/src/model/markets/functions/list/types.ts:51](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/list/types.ts#L51)

___

### MarketsListQuery

Ƭ **MarketsListQuery**<`C`\>: `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`MarketsIndexerQuery`](zeitgeistpm_sdk.md#marketsindexerquery) : [`MarketsRpcQuery`](zeitgeistpm_sdk.md#marketsrpcquery)

Markets list Query type
Will differentiate between indexer and rpc context

**`Generic`**

C Context - the context to query in.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context) |

#### Defined in

[packages/sdk/src/model/markets/functions/list/types.ts:25](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/list/types.ts#L25)

___

### MarketsRpcQuery

Ƭ **MarketsRpcQuery**: `Unpartial`<`PaginationQuery`\>

Concrete markets Query for rpc context

#### Defined in

[packages/sdk/src/model/markets/functions/list/types.ts:46](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/list/types.ts#L46)

___

### Model

Ƭ **Model**<`C`, `MS`\>: `Object`

High level model for interacting with the zeitgeist nodels like markets, assets, liquidity pools etc.
Features depends if the sdk is connected to rpc, indexer or both. Some features like submitting transactions
require a rpc connection while querying markets etc have more fine graned query filters and ordering when connected
to the indexer.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `markets` | [`Markets`](zeitgeistpm_sdk.md#markets)<`C`, `MS`\> | Model for interacting with zeitgeist markets. Will also handle metadata storage if configured to do so. If you connect to the zeitgeist main or testnet, this should be configured automatically over IPFS. |
| `swaps` | [`Swaps`](zeitgeistpm_sdk.md#swaps)<`C`, `MS`\> | Model for interacting with zeitgeist swaps module. Has functionality ti List liqudity pools, join pools with liquidity and swap assets in and out. |
| `time` | [`Time`](zeitgeistpm_sdk.md#time)<`C`, `MS`\> | Model for getting chain time data like block duration on chain timestamp etc. |

#### Defined in

[packages/sdk/src/model/types.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/types.ts#L17)

___

### NA

Ƭ **NA**: `Object`

Type representing values that are not available.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__type` | typeof `sym` |
| `reason` | `string` |
| `toString` | () => `string` |

#### Defined in

[packages/sdk/src/primitives/na.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L6)

[packages/sdk/src/primitives/na.ts:29](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L29)

___

### OpenReportingPeriod

Ƭ **OpenReportingPeriod**: [`InfiniteStage`](zeitgeistpm_sdk.md#infinitestage)<``"OpenReportingPeriod"``\>

The market is in its reporting stage where reports from anyone are accepted.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:41](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L41)

___

### OracleReportingPeriod

Ƭ **OracleReportingPeriod**: [`DynamicStage`](zeitgeistpm_sdk.md#dynamicstage)<``"OracleReportingPeriod"``\>

The market is in its reporting stage where oracle reports are accepted.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:36](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L36)

___

### Pool

Ƭ **Pool**<`C`, `MS`\>: [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\>

Union Pool type of indexed and rpc types.
Will differentiate between indexer and rpc context

**`Generic`**

C Context - the context to fetch the marketlist for.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:39](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L39)

___

### PoolAssetPricesAtBlock

Ƭ **PoolAssetPricesAtBlock**: [`AssetPriceAtBlock`](zeitgeistpm_sdk.md#assetpriceatblock)[]

Discrete prices for all assets by index in a pool at a certain block.

#### Defined in

[packages/sdk/src/model/swaps/functions/poolPrices/types.ts:33](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/poolPrices/types.ts#L33)

___

### PoolDeploymentParams

Ƭ **PoolDeploymentParams**: `Object`

Params needed to create a pool.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` \| `u128` |
| `marketId` | `number` \| `u128` |
| `signer` | `KeyringPairOrExtSigner` |
| `swapFee` | `string` \| `number` \| `u128` |
| `weights` | (`string` \| `number` \| `u128`)[] |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:328](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L328)

___

### PoolExitParams

Ƭ **PoolExitParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `minAssetsOut` | `Vec`<`u128`\> \| (`string` \| `u128` \| `number` \| `Uint8Array`)[] |
| `poolAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:388](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L388)

___

### PoolExitSubsidyParams

Ƭ **PoolExitSubsidyParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:395](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L395)

___

### PoolExitWithExactAssetAmountParams

Ƭ **PoolExitWithExactAssetAmountParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asset` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `assetAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `maxPoolAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:401](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L401)

___

### PoolExitWithExactPoolAmountParams

Ƭ **PoolExitWithExactPoolAmountParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asset` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `minAssetAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:409](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L409)

___

### PoolGetByIdQuery

Ƭ **PoolGetByIdQuery**: `Object`

Fetch a pool byt its id.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `poolId` | `number` |

#### Defined in

[packages/sdk/src/model/swaps/functions/getPool/types.ts:11](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/getPool/types.ts#L11)

___

### PoolGetByMarketIdQuery

Ƭ **PoolGetByMarketIdQuery**: `Object`

Fetch a pool by its associated market id.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `marketId` | `number` |

#### Defined in

[packages/sdk/src/model/swaps/functions/getPool/types.ts:18](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/getPool/types.ts#L18)

___

### PoolGetQuery

Ƭ **PoolGetQuery**: [`PoolGetByIdQuery`](zeitgeistpm_sdk.md#poolgetbyidquery) \| [`PoolGetByMarketIdQuery`](zeitgeistpm_sdk.md#poolgetbymarketidquery)

Get pool query, can fetch by either pool or market id.

#### Defined in

[packages/sdk/src/model/swaps/functions/getPool/types.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/getPool/types.ts#L6)

___

### PoolJoinParams

Ƭ **PoolJoinParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxAssetsIn` | `Vec`<`u128`\> \| (`string` \| `u128` \| `number` \| `Uint8Array`)[] |
| `poolAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:365](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L365)

___

### PoolJoinWithExactAmountParams

Ƭ **PoolJoinWithExactAmountParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `assetIn` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `minPoolAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:372](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L372)

___

### PoolJoinWithExactPoolAmount

Ƭ **PoolJoinWithExactPoolAmount**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asset` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `maxAssetAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolAmount` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:380](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L380)

___

### PoolList

Ƭ **PoolList**<`C`, `MS`\>: [`Pool`](zeitgeistpm_sdk.md#pool)<`C`, `MS`\>[]

List of Pools.
Will differentiate between indexer and rpc context

**`Generic`**

C Context - the context to fetch the marketlist for.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/swaps/poolslist.ts:11](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/poolslist.ts#L11)

___

### PoolMethods

Ƭ **PoolMethods**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAssetBalance` | `Te.TaskEither`<`Error`, `Decimal`, [assetId: AssetId]\> |
| `getAssetIds` | () => [`AssetId`](zeitgeistpm_sdk.md#assetid)[] |
| `getAssetWeight` | (`assetId`: [`AssetId`](zeitgeistpm_sdk.md#assetid)) => `O.IOption`<`Decimal`\> |
| `getSwapFee` | () => `Decimal` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:87](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L87)

___

### PoolPrices

Ƭ **PoolPrices**: [`PoolAssetPricesAtBlock`](zeitgeistpm_sdk.md#poolassetpricesatblock)[]

Time series of pool prices at a block for assets by index in a pool.

#### Defined in

[packages/sdk/src/model/swaps/functions/poolPrices/types.ts:28](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/poolPrices/types.ts#L28)

___

### PoolPricesQuery

Ƭ **PoolPricesQuery**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pool` | `number` | The pool to fetch prices for |
| `resolution?` | `Duration` | Projected space between blocks. **`Example`** ```ts // Will fetch all prices between the start and end with the stepping time between prices of 1 hour. sdk.model.assets.poolPrices({resolution: '1 hour', timespan: {start, end} marketId}) ``` |
| `timespan` | `Timespan` | The timespan to fetch prices for, can be either blocks or dates |

#### Defined in

[packages/sdk/src/model/swaps/functions/poolPrices/types.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/poolPrices/types.ts#L6)

___

### PoolPricesStreamQuery

Ƭ **PoolPricesStreamQuery**: `Object`

Streaming query paramaters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetIn?` | `SwapsAsset` \| { `CategoricalOutcome`: `any`  } \| { `ScalarOutcome`: `any`  } \| { `CombinatorialOutcome`: `any`  } \| { `PoolShare`: `any`  } \| { `Ztg`: `any`  } | The asset in to check prices for. Defaults to ZTG. |
| `from?` | [`BlockNumber`](zeitgeistpm_sdk.md#blocknumber) \| `Date` \| `Duration` | The blocknumber or date to tail prices from. |
| `pool` | `number` | The pool to fetch prices for |
| `resolution?` | `Duration` | Projected space between blocks. **`Example`** ```ts // Will stream price by the hour for the last day. Stream of 24 items. sdk.model.assets.poolPrices.$({tail: '-24 hour', resolution: '1 hour', marketId}) ``` |

#### Defined in

[packages/sdk/src/model/swaps/functions/poolPrices/types.ts:43](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/poolPrices/types.ts#L43)

___

### PoolRpcOnlyMethods

Ƭ **PoolRpcOnlyMethods**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `exit` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolExitParams, "poolId"\> & TransactionHooks]\> | - |
| `exitSubsidy` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolExitSubsidyParams, "poolId"\> & TransactionHooks]\> | - |
| `exitWithExactAssetAmount` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolExitWithExactAssetAmountParams, "poolId"\> & TransactionHooks]\> | - |
| `exitWithExactPoolAmount` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolExitWithExactPoolAmountParams, "poolId"\> & TransactionHooks]\> | - |
| `getAccountId` | `Te.TaskEither`<`Error`, `string`, []\> | Get the account id for the pool. |
| `getTotalIssuance` | `Te.TaskEither`<`Error`, `Decimal`, []\> | Get the total issuance of pool shares for the pool. |
| `join` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolJoinParams, "poolId"\> & TransactionHooks]\> | - |
| `joinSubsidy` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolJoinParams, "poolId" \| "maxAssetsIn"\> & TransactionHooks]\> | - |
| `joinWithExactAssetAmount` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolJoinWithExactAmountParams, "poolId"\> & TransactionHooks]\> | - |
| `joinWithExactPoolAmount` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<PoolJoinWithExactPoolAmount, "poolId"\> & TransactionHooks]\> | - |
| `swapExactAmountIn` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<SwapExactAmountInParams, "poolId"\> & TransactionHooks]\> | - |
| `swapExactAmountOut` | `Te.TaskEither`<`TransactionError`, `ISubmittableResult`, [params: Omit<SwapExactAmountOutParams, "poolId"\> & TransactionHooks]\> | - |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:111](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L111)

___

### PoolShareAssetId

Ƭ **PoolShareAssetId**: `Infer`<typeof [`IOPoolShareAssetId`](zeitgeistpm_sdk.md#iopoolshareassetid)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L17)

___

### PoolsIndexerQuery

Ƭ **PoolsIndexerQuery**: `Object`

Concrete pool Query for indexed context

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | `number` |
| `offset?` | `number` |
| `order?` | `PoolOrderByInput` |
| `where?` | `PoolWhereInput` |

#### Defined in

[packages/sdk/src/model/swaps/functions/listPools/types.ts:38](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/listPools/types.ts#L38)

___

### PoolsListQuery

Ƭ **PoolsListQuery**<`C`, `MS`\>: `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`PoolsIndexerQuery`](zeitgeistpm_sdk.md#poolsindexerquery) : `PoolsRpcQuery`

Pools list Query type
Will differentiate between indexer and rpc context

**`Generic`**

C Context - the context to query in.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/swaps/functions/listPools/types.ts:12](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/listPools/types.ts#L12)

___

### Proposed

Ƭ **Proposed**: [`InfiniteStage`](zeitgeistpm_sdk.md#infinitestage)<``"Proposed"``\>

The market has been proposed and is waiting to be approved.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:21](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L21)

___

### Reported

Ƭ **Reported**: [`DynamicStage`](zeitgeistpm_sdk.md#dynamicstage)<``"Reported"``\>

The market has been reported and will be resolved if no dispute is raised.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:46](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L46)

___

### Resolved

Ƭ **Resolved**: [`InfiniteStage`](zeitgeistpm_sdk.md#infinitestage)<``"Resolved"``\>

The market has been resolved.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:61](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L61)

___

### RpcConfig

Ƭ **RpcConfig**<`MS`\>: [`BaseConfig`](zeitgeistpm_sdk.md#baseconfig) & { `provider`: `string` \| `string`[] ; `storage`: `MS`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/config/types.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L26)

___

### RpcContext

Ƭ **RpcContext**<`MS`\>: `Object`

Zeitgeist SDK context with rpc and storage features enabled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `provider` | `WsProvider` |
| `storage` | `MS` |

#### Defined in

[packages/sdk/src/context/types.ts:22](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L22)

___

### RpcMarket

Ƭ **RpcMarket**<`C`, `MS`\>: `ZeitgeistPrimitivesMarket` & [`MarketMethods`](zeitgeistpm_sdk.md#marketmethods)<`C`, `MS`\> & { `fetchDisputes`: `Te.TaskEither`<`Error`, `ZeitgeistPrimitivesMarketMarketDispute`[], []\> ; `fetchMetadata`: `Te.TaskEither`<`Error`, [`MarketTypeOf`](zeitgeistpm_sdk.md#markettypeof)<`MS`\>, []\> ; `marketId`: `number` ; `saturate`: `Te.TaskEither`<`Error`, [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\>, []\>  }

Concrete Market type for a rpc market.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/markets/market.ts:69](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L69)

___

### RpcPool

Ƭ **RpcPool**: `ZeitgeistPrimitivesPool` & [`PoolMethods`](zeitgeistpm_sdk.md#poolmethods) & [`PoolRpcOnlyMethods`](zeitgeistpm_sdk.md#poolrpconlymethods) & { `poolId`: `number`  }

Concrete Pool type for rpc Pool.

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:62](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L62)

___

### SaturatedPoolEntry

Ƭ **SaturatedPoolEntry**<`C`, `MS`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `assets` | [`SaturatedPoolEntryAsset`](zeitgeistpm_sdk.md#saturatedpoolentryasset)[] | Pool assets expanded data. |
| `liquidity` | `Decimal` | Total pool liquidity in ZTG |
| `market` | `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never` | The market the pool belongs to. |

#### Defined in

[packages/sdk/src/model/swaps/functions/saturatedPoolsIndex/types.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/saturatedPoolsIndex/types.ts#L17)

___

### SaturatedPoolEntryAsset

Ƭ **SaturatedPoolEntryAsset**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `Decimal` | Amount of asset tokens in pool. |
| `assetId` | [`AssetId`](zeitgeistpm_sdk.md#assetid) | Asset id of the asset. |
| `category` | { `color?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `ticker?`: `string` \| ``null``  } | Category metadata relative to pool market metadata. |
| `category.color?` | `string` \| ``null`` | - |
| `category.name?` | `string` \| ``null`` | - |
| `category.ticker?` | `string` \| ``null`` | - |
| `percentage` | `number` | The percentage of the asset size relative to pool. |
| `price` | `Decimal` | The price of asset when fetched. |

#### Defined in

[packages/sdk/src/model/swaps/functions/saturatedPoolsIndex/types.ts:36](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/saturatedPoolsIndex/types.ts#L36)

___

### SaturatedPoolIndex

Ƭ **SaturatedPoolIndex**<`C`, `MS`\>: `Object`

An index by pool id for pool assets(prices, metadata categories, pool amounts etc) + total pool liquidity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Index signature

▪ [poolId: `number`]: [`SaturatedPoolEntry`](zeitgeistpm_sdk.md#saturatedpoolentry)<`C`, `MS`\>

#### Defined in

[packages/sdk/src/model/swaps/functions/saturatedPoolsIndex/types.ts:10](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/saturatedPoolsIndex/types.ts#L10)

___

### SaturatedRpcMarket

Ƭ **SaturatedRpcMarket**<`C`, `MS`\>: [`IndexedBase`](zeitgeistpm_sdk.md#indexedbase) & [`MarketTypeOf`](zeitgeistpm_sdk.md#markettypeof)<`MS`\> & [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/model/markets/market.ts:92](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L92)

___

### ScalarAssetId

Ƭ **ScalarAssetId**: `Infer`<typeof [`IOScalarAssetId`](zeitgeistpm_sdk.md#ioscalarassetid)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:14](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L14)

___

### ScalarIndex

Ƭ **ScalarIndex**: `Infer`<typeof [`IOScalarIndex`](zeitgeistpm_sdk.md#ioscalarindex)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:21](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L21)

___

### ScalarPosition

Ƭ **ScalarPosition**: `Infer`<typeof [`IOScalarPosition`](zeitgeistpm_sdk.md#ioscalarposition)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:23](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L23)

___

### ScalarRangeType

Ƭ **ScalarRangeType**: `Infer`<typeof `IOScalarRangeType`\>

#### Defined in

[packages/sdk/src/meta/market/types.ts:5](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/market/types.ts#L5)

___

### Sdk

Ƭ **Sdk**<`C`, `MS`\>: `C` & { `__context`: `C` ; `asRpc`: `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? () => [`Sdk`](zeitgeistpm_sdk.md#sdk)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\>, `MS`\> : `never` ; `model`: [`Model`](zeitgeistpm_sdk.md#model)<`C`, `MS`\>  }

Top level Zeitgeist SDK type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Defined in

[packages/sdk/src/types.ts:20](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/types.ts#L20)

___

### SlippageType

Ƭ **SlippageType**: ``"buying"`` \| ``"selling"``

#### Defined in

[packages/sdk/src/math/slippage.ts:3](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/slippage.ts#L3)

___

### StorageIdTypeOf

Ƭ **StorageIdTypeOf**<`S`\>: `S` extends `Storage`<infer T, infer ID\> ? `ID` : `never`

Type helper to extract the storage id at a given key in a MetadataStorage

**`Generic`**

MS extends MetadataStorage,

**`Generic`**

K extends keyof MSS>

#### Type parameters

| Name |
| :------ |
| `S` |

#### Defined in

[packages/sdk/src/meta/types.ts:65](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L65)

___

### StorageTypeOf

Ƭ **StorageTypeOf**<`S`\>: `S` extends `Storage`<infer T, infer ID\> ? `T` : `never`

Type helper to extract the storage type at a given key in a MetadataStorage

**`Generic`**

MS extends MetadataStorage,

**`Generic`**

K extends keyof MSS>

#### Type parameters

| Name |
| :------ |
| `S` |

#### Defined in

[packages/sdk/src/meta/types.ts:57](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L57)

___

### SwapExactAmountInParams

Ƭ **SwapExactAmountInParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetAmountIn` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `assetIn` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `assetOut` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `maxPrice?` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `minAssetAmountOut?` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:345](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L345)

___

### SwapExactAmountOutParams

Ƭ **SwapExactAmountOutParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetAmountOut` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `assetIn` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `assetOut` | `ZeitgeistPrimitivesAsset` \| [`AssetId`](zeitgeistpm_sdk.md#assetid) \| `Uint8Array` |
| `maxAssetAmountIn?` | `string` \| `u128` \| `number` \| `Uint8Array` \| ``null`` |
| `maxPrice?` | `string` \| `u128` \| `number` \| `Uint8Array` \| ``null`` |
| `poolId` | `string` \| `u128` \| `number` \| `Uint8Array` |
| `signer` | `KeyringPairOrExtSigner` |

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:355](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L355)

___

### Swaps

Ƭ **Swaps**<`C`, `MS`\>: `Object`

Zeitgeist Swaps model..

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `getPool` | `PFunc`<(`query`: [`PoolGetQuery`](zeitgeistpm_sdk.md#poolgetquery)) => `Promise`<`IOption`<[`Pool`](zeitgeistpm_sdk.md#pool)<`C`, `MS`\>\>\>, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? { `$`: (`query`: [`PoolGetQuery`](zeitgeistpm_sdk.md#poolgetquery)) => `Observable`<[`Pool`](zeitgeistpm_sdk.md#pool)<`C`, `MS`\>\>  } : {}\> | Get a pool by pool or market id. |
| `listPools` | (`query`: [`PoolsListQuery`](zeitgeistpm_sdk.md#poolslistquery)<`C`, `MS`\>) => `Promise`<[`PoolList`](zeitgeistpm_sdk.md#poollist)<`C`, `MS`\>\> | List liquidity pools. |
| `poolPrices` | `PFunc`<(`query`: [`PoolPricesQuery`](zeitgeistpm_sdk.md#poolpricesquery)) => `Promise`<[`PoolPrices`](zeitgeistpm_sdk.md#poolprices)\>, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? { `$`: (`query`: [`PoolPricesStreamQuery`](zeitgeistpm_sdk.md#poolpricesstreamquery)) => `Observable`<[`PoolAssetPricesAtBlock`](zeitgeistpm_sdk.md#poolassetpricesatblock)\>  } : {}\> | Get pool prices for a pool. |
| `saturatedPoolsIndex` | (`pools`: [`Pool`](zeitgeistpm_sdk.md#pool)<`C`, `MS`\>[]) => `Promise`<[`SaturatedPoolIndex`](zeitgeistpm_sdk.md#saturatedpoolindex)<`C`, `MS`\>\> | Fetch an index of assets + category and values like asset amounts, price and liquidity for a set of pools. |

#### Defined in

[packages/sdk/src/model/swaps/types.ts:25](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/types.ts#L25)

___

### TaggedID

Ƭ **TaggedID**<`T`\>: `Object`

Create a tagged metadata storage object id.

**`Generic`**

T extends keyof MetadataStorage

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__meta` | `T` |
| `cid` | `CID` |

#### Defined in

[packages/sdk/src/meta/types.ts:49](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L49)

___

### TaggedMetadata

Ƭ **TaggedMetadata**<`T`\>: `Object`

Create a tagged metadata storage object type.

**`Generic`**

T extends keyof MetadataStorage

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__meta` | `T` |

#### Defined in

[packages/sdk/src/meta/types.ts:43](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L43)

___

### Time

Ƭ **Time**<`C`, `MS`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `now` | `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? `PFunc`<() => `Promise`<`ChainTime`\>, { `$`: () => `Observable`<`ChainTime`\>  }\> : `never` |

#### Defined in

[packages/sdk/src/model/time/types.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/time/types.ts#L7)

___

### Trading

Ƭ **Trading**: [`DynamicStage`](zeitgeistpm_sdk.md#dynamicstage)<``"Trading"``\>

The market is active and trading.

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L26)

___

### ZtgAssetId

Ƭ **ZtgAssetId**: `Infer`<typeof [`IOZtgAssetId`](zeitgeistpm_sdk.md#ioztgassetid)\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:16](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L16)

## Variables

### BASE

• `Const` **BASE**: `Decimal`

#### Defined in

[packages/sdk/src/math/base.ts:3](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/base.ts#L3)

___

### IOAssetId

• `Const` **IOAssetId**: `Struct`<{ `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  }, ``null``\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:53](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L53)

___

### IOBlockNumber

• `Const` **IOBlockNumber**: `Struct`<[`BlockNumber`](zeitgeistpm_sdk.md#blocknumber), ``null``\>

Io type for validation of block numbers.

#### Defined in

[packages/sdk/src/primitives/blocknumber.ts:20](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/blocknumber.ts#L20)

___

### IOCategoricalAssetId

• `Const` **IOCategoricalAssetId**: `Struct`<{ `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex }, { `CategoricalOutcome`: `Struct`<[[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`], ``null``\> = IOCategoricalIndex }\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:35](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L35)

___

### IOCategoricalIndex

• `Const` **IOCategoricalIndex**: `Struct`<[[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`], ``null``\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:32](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L32)

___

### IOMarketCategoryMetadata

• `Const` **IOMarketCategoryMetadata**: `Struct`<{ `color`: `undefined` \| `string` ; `img`: `undefined` \| `string` ; `name`: `string` ; `ticker`: `undefined` \| `string`  }, { `color`: `Struct`<`undefined` \| `string`, ``null``\> ; `img`: `Struct`<`undefined` \| `string`, ``null``\> ; `name`: `Struct`<`string`, ``null``\> ; `ticker`: `Struct`<`undefined` \| `string`, ``null``\>  }\>

IO validation of Market Categories using superstruct

#### Defined in

[packages/sdk/src/meta/market/types.ts:10](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/market/types.ts#L10)

___

### IOMarketId

• `Const` **IOMarketId**: `Struct`<[`MarketId`](zeitgeistpm_sdk.md#marketid), ``null``\>

Io type for validation of market ids.

#### Defined in

[packages/sdk/src/primitives/marketid.ts:20](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/marketid.ts#L20)

___

### IOMarketMetadata

• `Const` **IOMarketMetadata**: `Struct`<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, { `__meta`: `Struct`<``"markets"``, ``"markets"``\> ; `categories`: `Struct`<`undefined` \| { `color`: `undefined` \| `string` ; `img`: `undefined` \| `string` ; `name`: `string` ; `ticker`: `undefined` \| `string`  }[], `Struct`<{ `color`: `undefined` \| `string` ; `img`: `undefined` \| `string` ; `name`: `string` ; `ticker`: `undefined` \| `string`  }, { `color`: `Struct`<`undefined` \| `string`, ``null``\> ; `img`: `Struct`<`undefined` \| `string`, ``null``\> ; `name`: `Struct`<`string`, ``null``\> ; `ticker`: `Struct`<`undefined` \| `string`, ``null``\>  }\>\> ; `confidentialId`: `Struct`<`undefined` \| `string`, ``null``\> ; `description`: `Struct`<`string`, ``null``\> ; `img`: `Struct`<`undefined` \| `string`, ``null``\> ; `question`: `Struct`<`string`, ``null``\> ; `scalarType`: `Struct`<`undefined` \| ``"number"`` \| ``"date"``, ``null``\> ; `slug`: `Struct`<`string`, ``null``\> ; `tags`: `Struct`<`undefined` \| `string`[], `Struct`<`string`, ``null``\>\>  }\>

IO validation of Market metadata object using superstruct

#### Defined in

[packages/sdk/src/meta/market/types.ts:25](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/market/types.ts#L25)

___

### IOMarketOutcomeAssetId

• `Const` **IOMarketOutcomeAssetId**: `Struct`<{ `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex }, ``null``\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:43](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L43)

___

### IOPoolShareAssetId

• `Const` **IOPoolShareAssetId**: `Struct`<{ `PoolShare`: `number`  }, { `PoolShare`: `Struct`<`number`, ``null``\>  }\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:49](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L49)

___

### IOScalarAssetId

• `Const` **IOScalarAssetId**: `Struct`<{ `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex }, { `ScalarOutcome`: `Struct`<[[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``], ``null``\> = IOScalarIndex }\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:39](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L39)

___

### IOScalarIndex

• `Const` **IOScalarIndex**: `Struct`<[[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``], ``null``\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:33](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L33)

___

### IOScalarPosition

• `Const` **IOScalarPosition**: `Struct`<``"Short"`` \| ``"Long"``, ``null``\>

Io types for the asset ids.
Usefull for decoding from a string or json object.

#### Defined in

[packages/sdk/src/primitives/assetid.ts:30](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L30)

___

### IOZtgAssetId

• `Const` **IOZtgAssetId**: `Struct`<{ `Ztg`: ``null``  }, { `Ztg`: `Struct`<``null``, ``null``\>  }\>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:45](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L45)

___

### MAX\_TOTAL\_OUTCOMES\_WEIGHT

• `Const` **MAX\_TOTAL\_OUTCOMES\_WEIGHT**: `Decimal`

#### Defined in

[packages/sdk/src/math/weights.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/weights.ts#L6)

___

### MAX\_TOTAL\_WEIGHT

• `Const` **MAX\_TOTAL\_WEIGHT**: `Decimal`

#### Defined in

[packages/sdk/src/math/weights.ts:4](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/weights.ts#L4)

___

### NA

• **NA**: [`NA`](zeitgeistpm_sdk.md#na-1)

Const symbold representing a not available value.

#### Defined in

[packages/sdk/src/primitives/na.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L6)

[packages/sdk/src/primitives/na.ts:29](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L29)

___

### ZTG

• `Const` **ZTG**: `Decimal`

#### Defined in

[packages/sdk/src/math/ztg.ts:3](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/ztg.ts#L3)

___

### indexers

• `Const` **indexers**: `Object`

Known indexer endpoints.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bsr` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.BSR; `uri`: `string` = 'https://processor.bsr.zeitgeist.pm/graphql' } |
| `bsr.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `bsr.uri` | `string` |
| `local` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.LOCAL; `uri`: `string` = 'http://localhost:4350/graphql' } |
| `local.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `local.uri` | `string` |
| `zeitgeist` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.KUSAMA; `uri`: `string` = 'https://processor.rpc-0.zeitgeist.pm/graphql' } |
| `zeitgeist.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `zeitgeist.uri` | `string` |

#### Defined in

[packages/sdk/src/config/known/index.ts:122](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L122)

___

### rpcs

• `Const` **rpcs**: `Object`

Known rpc endpoints.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bsr` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.BSR; `uri`: `string` = 'wss://bsr.zeitgeist.pm' } |
| `bsr.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `bsr.uri` | `string` |
| `dev` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.LOCAL; `uri`: `string` = 'ws://127.0.0.1:9944' } |
| `dev.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `dev.uri` | `string` |
| `dwellir` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.KUSAMA; `uri`: `string` = 'wss://zeitgeist-rpc.dwellir.com/' } |
| `dwellir.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `dwellir.uri` | `string` |
| `onfinality` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.KUSAMA; `uri`: `string` = 'wss://zeitgeist.api.onfinality.io/public-ws' } |
| `onfinality.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `onfinality.uri` | `string` |
| `zeitgeist` | { `parachain`: [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) = SupportedParachain.KUSAMA; `uri`: `string` = 'wss://rpc-0.zeitgeist.pm/' } |
| `zeitgeist.parachain` | [`SupportedParachain`](../enums/zeitgeistpm_sdk.SupportedParachain.md) |
| `zeitgeist.uri` | `string` |

#### Defined in

[packages/sdk/src/config/known/index.ts:96](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L96)

## Functions

### ZeitgeistIpfs

▸ **ZeitgeistIpfs**<`MS`\>(): `MS`

Default IPFS metadata storage for the zeitgeist ecosystem.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Returns

`MS`

MetadataStorage

#### Defined in

[packages/sdk/src/config/known/storage.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/storage.ts#L8)

___

### asIndexerConfig

▸ **asIndexerConfig**<`MS`\>(`config`): [`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

Force a config to indexer config.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\> | FullConfig<MS> |

#### Returns

[`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

IndexerConfig

#### Defined in

[packages/sdk/src/config/types.ts:50](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L50)

___

### asRpcConfig

▸ **asRpcConfig**<`MS`\>(`config`): [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

Force a config to rpc config.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\> | FullConfig<MS> |

#### Returns

[`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

RpcConfig<MS>

#### Defined in

[packages/sdk/src/config/types.ts:64](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L64)

___

### attachMarketMethods

▸ **attachMarketMethods**<`C`, `MS`\>(`context`, `market`): [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\>

Attach transaction interfaces for deploying pool etc to market.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | Context<MS> |
| `market` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\> | Market<C, MS> |

#### Returns

[`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\>

Market<C, MS>

#### Defined in

[packages/sdk/src/model/markets/market.ts:362](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L362)

___

### attachPoolMethods

▸ **attachPoolMethods**<`C`, `MS`\>(`ctx`, `primitive`): [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `C` |
| `primitive` | `ZeitgeistPrimitivesPool` \| { `__typename?`: ``"Pool"`` ; `accountId?`: ``null`` \| `string` ; `baseAsset`: `string` ; `createdAt`: `any` ; `id`: `string` ; `marketId`: `number` ; `poolId`: `number` ; `poolStatus`: `string` ; `scoringRule`: `string` ; `swapFee`: `string` ; `totalSubsidy`: `string` ; `totalWeight`: `string` ; `volume`: `any` ; `weights`: (``null`` \| { `__typename?`: ``"Weight"`` ; `assetId`: `string` ; `len`: `any`  })[] ; `ztgQty`: `any`  } |

#### Returns

[`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\>

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:94](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L94)

___

### attachPoolRcpOnlyMethods

▸ **attachPoolRcpOnlyMethods**(`ctx`, `primitive`): [`RpcPool`](zeitgeistpm_sdk.md#rpcpool)

Create new RpcPool with associated context, id and on chain primitive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | RpcContext |
| `primitive` | `ZeitgeistPrimitivesPool` \| { `__typename?`: ``"Pool"`` ; `accountId?`: ``null`` \| `string` ; `baseAsset`: `string` ; `createdAt`: `any` ; `id`: `string` ; `marketId`: `number` ; `poolId`: `number` ; `poolStatus`: `string` ; `scoringRule`: `string` ; `swapFee`: `string` ; `totalSubsidy`: `string` ; `totalWeight`: `string` ; `volume`: `any` ; `weights`: (``null`` \| { `__typename?`: ``"Weight"`` ; `assetId`: `string` ; `len`: `any`  })[] ; `ztgQty`: `any`  } | ZeitgeistPrimitivesPool |

#### Returns

[`RpcPool`](zeitgeistpm_sdk.md#rpcpool)

RpcPool

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:181](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L181)

___

### batterystation

▸ **batterystation**<`MS`\>(): [`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\>

Connect to the batterystation testnet rpc and indexer.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Returns

[`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\>

KnownPreset<FullConfig>

#### Defined in

[packages/sdk/src/config/known/index.ts:47](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L47)

___

### batterystationIndexer

▸ **batterystationIndexer**(): [`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

Connect to the batterystation indexer only

#### Returns

[`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

KnownPreset<IndexerConfig>

#### Defined in

[packages/sdk/src/config/known/index.ts:72](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L72)

___

### batterystationRpc

▸ **batterystationRpc**<`MS`\>(): [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

Connect to the batterystation rpc only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Returns

[`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

KnownPreset<RpcConfig>

#### Defined in

[packages/sdk/src/config/known/index.ts:61](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L61)

___

### calcInGivenOut

▸ **calcInGivenOut**(`tokenBalanceIn`, `tokenWeightIn`, `tokenBalanceOut`, `tokenWeightOut`, `tokenAmountOut`, `swapFee`): `Decimal`

Calculate the expected amount of asset X needed to put in to get a certain amount of asset Y out.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenBalanceIn` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - amount of 'in' asset in the pool |
| `tokenWeightIn` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - weight of 'in' asset on the pool |
| `tokenBalanceOut` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - amount of 'out' asset in the pool |
| `tokenWeightOut` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - weight of 'out' asset on the pool |
| `tokenAmountOut` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | - |
| `swapFee` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - swap fee |

#### Returns

`Decimal`

Decimal

#### Defined in

[packages/sdk/src/math/swaps.ts:85](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/swaps.ts#L85)

___

### calcOutGivenIn

▸ **calcOutGivenIn**(`tokenBalanceIn`, `tokenWeightIn`, `tokenBalanceOut`, `tokenWeightOut`, `tokenAmountIn`, `swapFee`): `Decimal`

Calculate the expected amount of asset X gotten out when swaping an asset Y into a pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenBalanceIn` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - amount of 'in' asset in the pool |
| `tokenWeightIn` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - weight of 'in' asset on the pool |
| `tokenBalanceOut` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - amount of 'out' asset in the pool |
| `tokenWeightOut` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - weight of 'out' asset on the pool |
| `tokenAmountIn` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - amount in for the swap |
| `swapFee` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - swap fee |

#### Returns

`Decimal`

Decimal

#### Defined in

[packages/sdk/src/math/swaps.ts:55](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/swaps.ts#L55)

___

### calcScalarResolvedPrices

▸ **calcScalarResolvedPrices**(`lowerBound`, `upperBound`, `resolvedNumber`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lowerBound` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the lower bound of the scalar market |
| `upperBound` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the upper bound of the scalar market |
| `resolvedNumber` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the resolved number of the scalar market |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `longTokenValue` | `Decimal` |
| `shortTokenValue` | `Decimal` |

#### Defined in

[packages/sdk/src/math/swaps.ts:137](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/swaps.ts#L137)

___

### calcScalarWinnings

▸ **calcScalarWinnings**(`lowerBound`, `upperBound`, `resolvedNumber`, `shortAssetAmount`, `longAssetAmount`): `Decimal`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lowerBound` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the lower bound of the scalar market |
| `upperBound` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the upper bound of the scalar market |
| `resolvedNumber` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the resolved number of the scalar market |
| `shortAssetAmount` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the amount of short tokens, usually the users balance for the short token |
| `longAssetAmount` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the amount of long tokens, usually the users balance for the long token |

#### Returns

`Decimal`

Decimal

#### Defined in

[packages/sdk/src/math/swaps.ts:112](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/swaps.ts#L112)

___

### calcSpotPrice

▸ **calcSpotPrice**(`tokenBalanceIn`, `tokenWeightIn`, `tokenBalanceOut`, `tokenWeightOut`, `swapFee`): `Decimal`

Calculate the spot price for an asset given the balance in and out and weights.
Usefull for clientside calculations when rpc calls are costly or not needed.

**`Note`**

Use sdk.context.api.rpc.swaps.getSpotPrice(s) for higher accuracy and verifiability.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenBalanceIn` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the balance of the asset swapped into the pool |
| `tokenWeightIn` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the weight of in asset |
| `tokenBalanceOut` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the balance of the asset swapped out of the pool |
| `tokenWeightOut` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the weight of out asset |
| `swapFee` | [`BigNumber`](zeitgeistpm_sdk.md#bignumber) | BigNumber - the fee of the swap |

#### Returns

`Decimal`

Decimal

#### Defined in

[packages/sdk/src/math/swaps.ts:29](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/swaps.ts#L29)

___

### create

▸ **create**<`MS`\>(`config`): `Promise`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\>, `MS`\>\>

Create an instance of the zeitgeist sdk with full features of both indexer and chain rpc.

**`Mode`**

full

**`Note`**

create with different config to enable indexer or rpc features.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`any`, `any`, `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\> | FullConfig - Rpc and indexer config |

#### Returns

`Promise`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\>, `MS`\>\>

Promise<Sdk<FullContext>>

#### Defined in

[packages/sdk/src/create.ts:35](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/create.ts#L35)

▸ **create**<`MS`\>(`config`): `Promise`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\>, `MS`\>\>

Create an instance of the zeitgeist sdk with only rpc features.

**`Mode`**

rpc

**`Note`**

create with different config to enable indexer or rpc features.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`any`, `any`, `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\> | RpcConfig - Config for the rpc node |

#### Returns

`Promise`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\>, `MS`\>\>

Promise<Sdk<RpcContext>>

#### Defined in

[packages/sdk/src/create.ts:46](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/create.ts#L46)

▸ **create**<`MS`\>(`config`): `Promise`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`IndexerContext`](zeitgeistpm_sdk.md#indexercontext), `MS`\>\>

Create an instance of the zeitgeist sdk with only indexer features.

**`Mode`**

indexer

**`Note`**

create with different config to enable indexer or rpc features.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`any`, `any`, `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig) | IndexerConfig - Config for the indexer |

#### Returns

`Promise`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`IndexerContext`](zeitgeistpm_sdk.md#indexercontext), `MS`\>\>

Promise<Sdk<IndexerContext>>

#### Defined in

[packages/sdk/src/create.ts:57](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/create.ts#L57)

___

### create$

▸ **create$**<`MS`\>(`config`): `Observable`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`Context`](zeitgeistpm_sdk.md#context)<`MS`\>, `MS`\>\>

Initialize the indexer and/or rpc concurrently and emit partially applied intances of the Sdk.
Useful when initializing in a UI context where displaying data from the indexer as
fast as possible is a priority.

Creates a shared observable that replays last emitted sdk instace to late subscribers,
and disconnectes the rpc provider when all subscribers unsubscribe.

**`Note`**

If config is indexer and rpc, indexer sdk will emit first.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`Config`](zeitgeistpm_sdk.md#config)<`MS`\> | FullConfig |

#### Returns

`Observable`<[`Sdk`](zeitgeistpm_sdk.md#sdk)<[`Context`](zeitgeistpm_sdk.md#context)<`MS`\>, `MS`\>\>

Observable<Sdk<Context<MS>, MS>>

#### Defined in

[packages/sdk/src/create.ts:106](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/create.ts#L106)

___

### createFullContext

▸ **createFullContext**<`MS`\>(`config`): `Promise`<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\>\>

Create a full context with both rpc and indexer capabilities.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`any`, `any`, `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\> | RpcConfig |

#### Returns

`Promise`<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\>\>

Promise<FullContext>

#### Defined in

[packages/sdk/src/create.ts:142](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/create.ts#L142)

___

### createIndexerContext

▸ **createIndexerContext**(`config`): `Promise`<[`IndexerContext`](zeitgeistpm_sdk.md#indexercontext)\>

Create an indexer context that only connects to the gql indexer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig) | IndexerConfig |

#### Returns

`Promise`<[`IndexerContext`](zeitgeistpm_sdk.md#indexercontext)\>

Promise<IndexerContext>

#### Defined in

[packages/sdk/src/create.ts:204](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/create.ts#L204)

___

### createRpcContext

▸ **createRpcContext**<`MS`\>(`config`): `Promise`<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\>\>

Create an indexer context that only connects to the rpc api.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`any`, `any`, `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\> | RpcConfig |

#### Returns

`Promise`<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\>\>

Promise<RpcContext>

#### Defined in

[packages/sdk/src/create.ts:161](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/create.ts#L161)

___

### createStorage

▸ **createStorage**<`M`, `C`\>(`storage`): [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`M`, `C`\>

Utility for creating typed and tagged metadata storage.

**`Generic`**

M extends TaggedMetadata<'markets'> = MarketMetadata - market metadata

**`Generic`**

C extends TaggedMetadata<'comments'> = CommentMetadata - comment metadata

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`TaggedMetadata`](zeitgeistpm_sdk.md#taggedmetadata)<``"markets"``\> = { `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  } |
| `C` | extends [`TaggedMetadata`](zeitgeistpm_sdk.md#taggedmetadata)<``"comments"``\> = [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storage` | `Storage`<`any`, `any`\> | Storage<any, any> |

#### Returns

[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`M`, `C`\>

#### Defined in

[packages/sdk/src/meta/types.ts:87](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L87)

___

### evenWeights

▸ **evenWeights**(`assets`): `string`[]

Helper to calculate an even weight distribution for a given number of assets

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assets` | `number` | number - the number of assets |

#### Returns

`string`[]

string[]

#### Defined in

[packages/sdk/src/math/weights.ts:25](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/weights.ts#L25)

___

### fromEntries

▸ **fromEntries**<`C`, `MS`\>(`ctx`, `entries`): [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\>[]

Map storage entries to rpc pools

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `C` | RpcContext<MS> |
| `entries` | [`StorageKey`<[`u128`]\>, `Option`<`ZeitgeistPrimitivesPool`\>][] | [StorageKey<[u128]>, Option<ZeitgeistPrimitivesPool>][] |

#### Returns

[`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\>[]

RpcPool[]

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:575](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L575)

___

### fromPrimitive

▸ **fromPrimitive**(`asset`): { `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `ZeitgeistPrimitivesAsset` |

#### Returns

{ `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  }

#### Defined in

[packages/sdk/src/primitives/assetid.ts:60](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L60)

___

### getAssetBalance

▸ **getAssetBalance**<`C`, `MS`\>(`ctx`, `pool`, `_assetId`): `Promise`<`Decimal`\>

Fetch the balance of an asset in a pool, prioritizing rpc data if the sdk is in full context mode.
Can be used for both pools outcome assets and the pool's native/base asset.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `C` | Context<MS> |
| `pool` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\> | Pool<C, MS> |
| `_assetId` | { `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  } | - |

#### Returns

`Promise`<`Decimal`\>

Decimal

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:514](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L514)

___

### getAssetIds

▸ **getAssetIds**<`C`, `MS`\>(`pool`): ({ `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  })[]

Get the assets in a pool.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pool` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\> | Pool<C, MS>, |

#### Returns

({ `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  })[]

AssetId[]

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:439](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L439)

___

### getAssetWeight

▸ **getAssetWeight**<`C`, `MS`\>(`pool`, `_assetId`): `IOption`<`Decimal`\>

Get the weight of an asset in a pool by its AssetId.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pool` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\> | Pool<C, MS>, |
| `_assetId` | { `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  } \| `ZeitgeistPrimitivesAsset` | - |

#### Returns

`IOption`<`Decimal`\>

O.IOption<Decimal>

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:459](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L459)

___

### getDeadlines

▸ **getDeadlines**(`market`): [`MarketDeadlines`](zeitgeistpm_sdk.md#marketdeadlines)

Get the market deadlines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<Context> |

#### Returns

[`MarketDeadlines`](zeitgeistpm_sdk.md#marketdeadlines)

MarketDeadlines

#### Defined in

[packages/sdk/src/model/markets/market.ts:584](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L584)

___

### getIndexOf

▸ **getIndexOf**(`assetId`): `number`

Get the asset index of an AssetId, will return index only for scalar and categorical assets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | { `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } | AssetId |

#### Returns

`number`

number | null

#### Defined in

[packages/sdk/src/primitives/assetid.ts:105](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L105)

___

### getMarketIdOf

▸ **getMarketIdOf**(`assetId`): [`MarketId`](zeitgeistpm_sdk.md#marketid)

Get the MarketId of a scalar or categorical asset id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | { `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } | ScalarAssetId \| CategoricalAssetId |

#### Returns

[`MarketId`](zeitgeistpm_sdk.md#marketid)

MarketId

#### Defined in

[packages/sdk/src/primitives/assetid.ts:87](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L87)

___

### getPoolId

▸ **getPoolId**<`C`, `MS`\>(`context`, `market`): `Promise`<`IOption`<`number`\>\>

Get the pool id of a market in a way to works for both indexed and rpc data.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | - |
| `market` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\> | Market<C, MS> |

#### Returns

`Promise`<`IOption`<`number`\>\>

Promise<O.IOption<number>>

#### Defined in

[packages/sdk/src/model/markets/market.ts:524](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L524)

___

### getPrediction

▸ **getPrediction**<`C`, `MS`\>(`ctx`, `market`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `C` | Context<MS> |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<C> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/sdk/src/model/markets/market.ts:731](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L731)

___

### getReportedAt

▸ **getReportedAt**(`market`): `IOption`<`number`\>

Get the market reported at block if market is reported.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<Context> |

#### Returns

`IOption`<`number`\>

O.IOption<number>

#### Defined in

[packages/sdk/src/model/markets/market.ts:652](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L652)

___

### getReporter

▸ **getReporter**(`market`): `IOption`<`string`\>

Get the market reporter address if market is reported.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<Context> |

#### Returns

`IOption`<`string`\>

O.IOption<string>

#### Defined in

[packages/sdk/src/model/markets/market.ts:640](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L640)

___

### getScalarBounds

▸ **getScalarBounds**(`market`): `IEither`<`Error`, [`Decimal`, `Decimal`]\>

Get scalar market bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<Context> |

#### Returns

`IEither`<`Error`, [`Decimal`, `Decimal`]\>

E.IEither<Error, [Decimal, Decimal]>

#### Defined in

[packages/sdk/src/model/markets/market.ts:703](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L703)

___

### getScalarIndexOf

▸ **getScalarIndexOf**(`scalarAssetId`): `number`

Get asset index of a scalar asset, short being 0 and long being 1

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scalarAssetId` | `Object` | `undefined` | ScalarAssetId |
| `scalarAssetId.ScalarOutcome` | [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] | `IOScalarIndex` | - |

#### Returns

`number`

number

#### Defined in

[packages/sdk/src/primitives/assetid.ts:96](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L96)

___

### getStatus

▸ **getStatus**(`market`): [`MarketStatus`](zeitgeistpm_sdk.md#marketstatus)

Get the market status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<Context> |

#### Returns

[`MarketStatus`](zeitgeistpm_sdk.md#marketstatus)

MarketStatus

#### Defined in

[packages/sdk/src/model/markets/market.ts:572](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L572)

___

### getSwapFee

▸ **getSwapFee**<`C`, `MS`\>(`pool`): `Decimal`

Get the swap fee of a pool.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pool` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\> | Pool<C, MS>, |

#### Returns

`Decimal`

Decimal

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:423](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L423)

___

### getTotalIssuance

▸ **getTotalIssuance**<`C`, `MS`\>(`ctx`, `pool`): `Promise`<`Decimal`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `C` |
| `pool` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcPool`](zeitgeistpm_sdk.md#rpcpool) : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) ? [`IndexedPool`](zeitgeistpm_sdk.md#indexedpool)<`C`, `MS`\> : `never`, `MS`\> |

#### Returns

`Promise`<`Decimal`\>

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:549](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L549)

___

### hasMarketMethods

▸ **hasMarketMethods**<`C`, `MS`\>(`market`): market is Data<C, C extends RpcContext<MS\> ? RpcMarket<C, MS\> \| SaturatedRpcMarket<C, MS\> : never, C extends IndexerContext \| FullContext<MS\> ? IndexedMarket<C, MS\> : never, MS\> & MarketMethods<C, MS\>

Typeguard to check if market has associated marketmethods.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\> | Market<C, MS> |

#### Returns

market is Data<C, C extends RpcContext<MS\> ? RpcMarket<C, MS\> \| SaturatedRpcMarket<C, MS\> : never, C extends IndexerContext \| FullContext<MS\> ? IndexedMarket<C, MS\> : never, MS\> & MarketMethods<C, MS\>

market is Market<C, MS> & MarketMethods

#### Defined in

[packages/sdk/src/model/markets/market.ts:269](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L269)

___

### hasPool

▸ **hasPool**<`C`, `MS`\>(`context`, `market`): `Promise`<`boolean`\>

Check if a rpc or indexed market has pool associated.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | - |
| `market` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\> | Market<C, MS> |

#### Returns

`Promise`<`boolean`\>

Promise<boolean>

#### Defined in

[packages/sdk/src/model/markets/market.ts:556](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L556)

___

### hasReport

▸ **hasReport**(`market`): `boolean`

Check if a market has a report.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<Context> |

#### Returns

`boolean`

boolean

#### Defined in

[packages/sdk/src/model/markets/market.ts:630](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L630)

___

### isAvailable

▸ **isAvailable**<`T`\>(`value`): value is T

Typeguard to check if a value is available

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`NA`](zeitgeistpm_sdk.md#na-1) \| `T` | T \| NA |

#### Returns

value is T

value is T

#### Defined in

[packages/sdk/src/primitives/na.ts:57](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L57)

___

### isBlockNumber

▸ **isBlockNumber**(`n`): n is BlockNumber

Typeguard for block nunbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `any` | any |

#### Returns

n is BlockNumber

n is BlockNumber

#### Defined in

[packages/sdk/src/primitives/blocknumber.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/blocknumber.ts#L15)

___

### isFullConfig

▸ **isFullConfig**<`MS`\>(`config`): config is FullConfig<MS\>

Typeguard for full configs.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`Config`](zeitgeistpm_sdk.md#config)<`MS`\> | Config<MS> |

#### Returns

config is FullConfig<MS\>

is FullConfig<MS>

#### Defined in

[packages/sdk/src/config/types.ts:79](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L79)

___

### isFullContext

▸ **isFullContext**<`MS`\>(`ctx?`): ctx is FullContext<MS\>

Typeguard for full context

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx?` | `unknown` | unknown |

#### Returns

ctx is FullContext<MS\>

config is FullContext

#### Defined in

[packages/sdk/src/context/types.ts:44](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L44)

___

### isFullSdk

▸ **isFullSdk**<`MS`\>(`sdk`): sdk is Sdk<FullContext<MS\>, MS\>

Typeguard for full sdk.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdk` | `unknown` |

#### Returns

sdk is Sdk<FullContext<MS\>, MS\>

sdk is Sdk<FullContext>

#### Defined in

[packages/sdk/src/types.ts:76](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/types.ts#L76)

___

### isIndexedData

▸ **isIndexedData**<`R`, `I`\>(`object?`): object is I

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Codec` |
| `I` | extends [`IndexedData`](zeitgeistpm_sdk.md#indexeddata) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object?` | `R` \| `I` |

#### Returns

object is I

#### Defined in

[packages/sdk/src/primitives/data.ts:22](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/data.ts#L22)

___

### isIndexedSdk

▸ **isIndexedSdk**<`MS`\>(`sdk`): sdk is Sdk<IndexerContext, MS\>

Typeguard for indexer sdk.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdk` | `any` |

#### Returns

sdk is Sdk<IndexerContext, MS\>

sdk is Sdk<IndexerContext>

#### Defined in

[packages/sdk/src/types.ts:86](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/types.ts#L86)

___

### isIndexerConfig

▸ **isIndexerConfig**<`MS`\>(`config?`): config is IndexerConfig

Typeguard for indexer configs.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`Config`](zeitgeistpm_sdk.md#config)<`MS`\> | Config<MS> |

#### Returns

config is IndexerConfig

is IndexerConfig<MS>

#### Defined in

[packages/sdk/src/config/types.ts:99](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L99)

___

### isIndexerContext

▸ **isIndexerContext**<`MS`\>(`ctx?`): ctx is IndexerContext

Typeguard for indexer context

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx?` | `unknown` | unknown |

#### Returns

ctx is IndexerContext

config is IndexerContext

#### Defined in

[packages/sdk/src/context/types.ts:65](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L65)

___

### isInfinite

▸ **isInfinite**(`stage`): stage is InfiniteStage<any\>

Check if a stage is a InfiniteStage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stage` | [`MarketStage`](zeitgeistpm_sdk.md#marketstage) | MarketStage |

#### Returns

stage is InfiniteStage<any\>

stage is InfiniteStage<any>

#### Defined in

[packages/sdk/src/model/markets/marketstage.ts:84](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/marketstage.ts#L84)

___

### isKnownPreset

▸ **isKnownPreset**<`C`, `MS`\>(`config`): config is KnownPreset<C, MS\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Config`](zeitgeistpm_sdk.md#config)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](zeitgeistpm_sdk.md#config)<`MS`\> |

#### Returns

config is KnownPreset<C, MS\>

#### Defined in

[packages/sdk/src/config/known/types.ts:12](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/types.ts#L12)

___

### isMarketId

▸ **isMarketId**(`n`): n is MarketId

Typeguard for market ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `any` | any |

#### Returns

n is MarketId

n is MarketId

#### Defined in

[packages/sdk/src/primitives/marketid.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/marketid.ts#L15)

___

### isMarketIdQuery

▸ **isMarketIdQuery**(`query`): query is PoolGetByMarketIdQuery

Typeguard for PoolGetByMarketIdQuery

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`PoolGetQuery`](zeitgeistpm_sdk.md#poolgetquery) | PoolGetQuery |

#### Returns

query is PoolGetByMarketIdQuery

query is PoolGetByMarketIdQuery

#### Defined in

[packages/sdk/src/model/swaps/functions/getPool/types.ts:37](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/getPool/types.ts#L37)

___

### isNA

▸ **isNA**(`value`): value is NA

Typeguard for NA values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | unknown |

#### Returns

value is NA

value is NA

#### Defined in

[packages/sdk/src/primitives/na.ts:45](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L45)

___

### isPoolIdQuery

▸ **isPoolIdQuery**(`query`): query is PoolGetByIdQuery

Typeguard for PoolGetByIdQuery

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`PoolGetQuery`](zeitgeistpm_sdk.md#poolgetquery) | PoolGetQuery |

#### Returns

query is PoolGetByIdQuery

query is PoolGetByIdQuery

#### Defined in

[packages/sdk/src/model/swaps/functions/getPool/types.ts:28](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/functions/getPool/types.ts#L28)

___

### isRpcConfig

▸ **isRpcConfig**<`MS`\>(`config?`): config is RpcConfig<MS\>

Typeguard for rpc configs.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`Config`](zeitgeistpm_sdk.md#config)<`MS`\> | Config<MS> |

#### Returns

config is RpcConfig<MS\>

is RpcConfig<MS>

#### Defined in

[packages/sdk/src/config/types.ts:89](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/types.ts#L89)

___

### isRpcContext

▸ **isRpcContext**<`MS`\>(`ctx?`): ctx is RpcContext<MS\>

Typeguard for rpc context

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx?` | `unknown` | unknown |

#### Returns

ctx is RpcContext<MS\>

config is RpcContext

#### Defined in

[packages/sdk/src/context/types.ts:54](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L54)

___

### isRpcData

▸ **isRpcData**<`R`, `I`\>(`object?`): object is R

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Codec` |
| `I` | extends [`IndexedData`](zeitgeistpm_sdk.md#indexeddata) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object?` | `R` \| `I` |

#### Returns

object is R

#### Defined in

[packages/sdk/src/primitives/data.ts:18](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/data.ts#L18)

___

### isRpcSdk

▸ **isRpcSdk**<`MS`\>(`sdk`): sdk is Sdk<RpcContext<MS\>, MS\>

Typeguard for rpc sdk.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sdk` | `any` |

#### Returns

sdk is Sdk<RpcContext<MS\>, MS\>

sdk is Sdk<RpcContext>

#### Defined in

[packages/sdk/src/types.ts:96](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/types.ts#L96)

___

### isWithPool

▸ **isWithPool**<`C`, `MS`\>(`params`): params is CreateMarketWithPoolParams<C, MS\>

Check if params is with pool

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CreateMarketParams`](zeitgeistpm_sdk.md#createmarketparams)<`C`, `MS`\> | CreateMarketParams |

#### Returns

params is CreateMarketWithPoolParams<C, MS\>

params is CreateMarketWithPoolParams

#### Defined in

[packages/sdk/src/model/markets/functions/create/types.ts:159](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/functions/create/types.ts#L159)

___

### localhostRpc

▸ **localhostRpc**<`MS`\>(): [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

Create a standard local rpc node config with local node and local ipfs standards.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Returns

[`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

RpcConfig<MS>

#### Defined in

[packages/sdk/src/config/known/index.ts:82](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L82)

___

### mainnet

▸ **mainnet**<`MS`\>(): [`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\>

Connect to the mainnet rpc and indexer

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Returns

[`FullConfig`](zeitgeistpm_sdk.md#fullconfig)<`MS`\>

KnownPreset<FullConfig>

#### Defined in

[packages/sdk/src/config/known/index.ts:14](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L14)

___

### mainnetIndexer

▸ **mainnetIndexer**(): [`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

Connect to the mainnet indexer only.

#### Returns

[`IndexerConfig`](zeitgeistpm_sdk.md#indexerconfig)

KnownPreset<IndexerConfig>

#### Defined in

[packages/sdk/src/config/known/index.ts:37](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L37)

___

### mainnetRpc

▸ **mainnetRpc**<`MS`\>(): [`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

Connect to the mainnet rpc only

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Returns

[`RpcConfig`](zeitgeistpm_sdk.md#rpcconfig)<`MS`\>

KnownPreset<RpcConfig>

#### Defined in

[packages/sdk/src/config/known/index.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/config/known/index.ts#L26)

___

### na

▸ **na**(`reason`): [`NA`](zeitgeistpm_sdk.md#na-1)

Create a NA value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | `string` | string |

#### Returns

[`NA`](zeitgeistpm_sdk.md#na-1)

NA

#### Defined in

[packages/sdk/src/primitives/na.ts:18](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L18)

___

### parseAssetId

▸ **parseAssetId**(`raw`): `IEither`<`SyntaxError`, { `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  }\>

Convert a indexer asset id string or object to an AssetId.

TODO: should return an Either since parsing can fail. Users expect parsing to work, not working is an exception.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `raw` | `string` \| `object` \| `ZeitgeistPrimitivesAsset` | object \| string |

#### Returns

`IEither`<`SyntaxError`, { `CategoricalOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), `number`] = IOCategoricalIndex } \| { `ScalarOutcome`: [[`MarketId`](zeitgeistpm_sdk.md#marketid), ``"Short"`` \| ``"Long"``] = IOScalarIndex } \| { `Ztg`: ``null``  } \| { `PoolShare`: `number`  }\>

O.IOption<AssetId>

#### Defined in

[packages/sdk/src/primitives/assetid.ts:122](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/assetid.ts#L122)

___

### projectEndTimestamp

▸ **projectEndTimestamp**<`C`, `MS`\>(`ctx`, `market`, `_now?`): `Promise`<`number` \| [`NA`](zeitgeistpm_sdk.md#na-1)\>

Get the projected end timestamp for a market.

**`Note`**

If market has period as timestamps will use that directly and if its set to a block end date
it will project a approximate end timestamp based on the on chain current block and block time.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `C` | - |
| `market` | [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\> | Market<C, MS> |
| `_now?` | `ChainTime` | - |

#### Returns

`Promise`<`number` \| [`NA`](zeitgeistpm_sdk.md#na-1)\>

Promise<number | NA>

#### Defined in

[packages/sdk/src/model/markets/market.ts:668](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L668)

___

### reasonOf

▸ **reasonOf**(`na`): `string`

Get the reason the value is not available.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `na` | [`NA`](zeitgeistpm_sdk.md#na-1) | NA |

#### Returns

`string`

string

#### Defined in

[packages/sdk/src/primitives/na.ts:37](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/primitives/na.ts#L37)

___

### rpcMarket

▸ **rpcMarket**<`C`, `MS`\>(`context`, `id`, `primitive`): [`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\>

Augment a market primitive with id and data expanding utility functions.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | RpcContext |
| `id` | `number` \| `u128` | u128 |
| `primitive` | `ZeitgeistPrimitivesMarket` | ZeitgeistPrimitivesMarket |

#### Returns

[`Data`](zeitgeistpm_sdk.md#data)<`C`, `C` extends [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<`MS`\> ? [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<`C`, `MS`\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<`C`, `MS`\> : `never`, `C` extends [`IndexerContext`](zeitgeistpm_sdk.md#indexercontext) \| [`FullContext`](zeitgeistpm_sdk.md#fullcontext)<`MS`\> ? [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<`C`, `MS`\> : `never`, `MS`\>

AugmentedAugmentedRpcMarket

#### Defined in

[packages/sdk/src/model/markets/market.ts:284](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L284)

___

### rpcPool

▸ **rpcPool**(`ctx`, `poolId`, `primitive`): [`RpcPool`](zeitgeistpm_sdk.md#rpcpool)

Create new RpcPool with associated context, id and on chain primitive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | [`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | RpcContext |
| `poolId` | `number` \| `u128` | number \| u128 |
| `primitive` | `ZeitgeistPrimitivesPool` | ZeitgeistPrimitivesPool |

#### Returns

[`RpcPool`](zeitgeistpm_sdk.md#rpcpool)

RpcPool

#### Defined in

[packages/sdk/src/model/swaps/pool.ts:77](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/swaps/pool.ts#L77)

___

### saturate

▸ **saturate**<`MS`\>(`storage`): `MS`

Create a sturatable metadata storage.

**`Generic`**

MS extends MetadataStorage

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<`any`, `any`, `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storage` | `MS` | M |

#### Returns

`MS`

M & SaturatedMetadataStorage<MS>

#### Defined in

[packages/sdk/src/meta/types.ts:105](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L105)

___

### sdk

▸ **sdk**<`C`, `MS`\>(`context`): [`Sdk`](zeitgeistpm_sdk.md#sdk)<`C`, `MS`\>

Utility for creating a new SDK.

**`Generic`**

C extends Context<MS>

**`Generic`**

MS extends MetadataStorage = MetadataStorage

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> = [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `C` | C |

#### Returns

[`Sdk`](zeitgeistpm_sdk.md#sdk)<`C`, `MS`\>

Sdk<C, MS>

#### Defined in

[packages/sdk/src/types.ts:49](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/types.ts#L49)

___

### slippageFromFloat

▸ **slippageFromFloat**(`slippage`, `type`): `Decimal`

Calculates the slippage from a float percentage represtend as a number, string or Decimal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slippage` | `string` \| `number` \| `Decimal` | number \| Decimal \| string - the slippage represented as a float percentage. '1' being 1% |
| `type` | [`SlippageType`](zeitgeistpm_sdk.md#slippagetype) | SlippageType - buying or selling |

#### Returns

`Decimal`

Decimal

#### Defined in

[packages/sdk/src/math/slippage.ts:12](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/slippage.ts#L12)

___

### swapFeeFromFloat

▸ **swapFeeFromFloat**(`fee`): `Decimal`

Helper to convert a float percentage to a swap fee.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fee` | `string` \| `number` \| `Decimal` | string \| number \| Decimal - the fee as a float '1' \| 1 \| new Decimal(1) would be 1% swap fee. |

#### Returns

`Decimal`

Decimal

#### Defined in

[packages/sdk/src/math/swaps.ts:11](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/swaps.ts#L11)

___

### tagged

▸ **tagged**<`T`\>(`key`, `storage`): `Storage`<`any`, [`TaggedID`](zeitgeistpm_sdk.md#taggedid)<`any`\>\>

Utility to create a tagged metadata storage.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TaggedMetadata`](zeitgeistpm_sdk.md#taggedmetadata)<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | keyof [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\> | keyof MetadataStorage |
| `storage` | `Storage`<`T`, `CID`<`unknown`, `number`, `number`, `Version`\>\> | Storage<T, CID> |

#### Returns

`Storage`<`any`, [`TaggedID`](zeitgeistpm_sdk.md#taggedid)<`any`\>\>

Storage<any, TaggedID<any>>

#### Defined in

[packages/sdk/src/meta/types.ts:117](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/meta/types.ts#L117)

___

### teardown

▸ **teardown**<`MS`\>(`ctx`): `void`

Teardown a context. Only applicable to rpc context for disconnection ws.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata), `MS`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | [`Context`](zeitgeistpm_sdk.md#context)<`MS`\> | Context<MS> |

#### Returns

`void`

#### Defined in

[packages/sdk/src/context/types.ts:75](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/context/types.ts#L75)

___

### timespanOf

▸ **timespanOf**(`market`, `now`): `Timespan`

Get the market period as a Timespan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `FullMarketFragment` \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`RpcContext`](zeitgeistpm_sdk.md#rpccontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`RpcMarket`](zeitgeistpm_sdk.md#rpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`SaturatedRpcMarket`](zeitgeistpm_sdk.md#saturatedrpcmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> \| [`IndexedMarket`](zeitgeistpm_sdk.md#indexedmarket)<[`FullContext`](zeitgeistpm_sdk.md#fullcontext)<[`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\>, [`MetadataStorage`](../interfaces/zeitgeistpm_sdk.MetadataStorage.md)<{ `__meta`: ``"markets"`` ; `categories`: `undefined` \| { name: string; img?: string \| undefined; ticker?: string \| undefined; color?: string \| undefined; }[] ; `confidentialId`: `undefined` \| `string` ; `description`: `string` ; `img`: `undefined` \| `string` ; `question`: `string` ; `scalarType`: `undefined` \| ``"number"`` \| ``"date"`` ; `slug`: `string` ; `tags`: `undefined` \| `string`[]  }, [`CommentMetadata`](zeitgeistpm_sdk.md#commentmetadata)\>\> | Market<Context> |
| `now` | `ChainTime` | ChainTime |

#### Returns

`Timespan`

Timespan

#### Defined in

[packages/sdk/src/model/markets/market.ts:606](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/model/markets/market.ts#L606)

___

### weightsFromRelativeRatio

▸ **weightsFromRelativeRatio**(`ratio`): `string`[]

Helper to calculate the weight ratio from a relative vector of integers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratio` | `number`[] | number[] - the relative ratio of the weights |

#### Returns

`string`[]

string[]

#### Defined in

[packages/sdk/src/math/weights.ts:14](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/sdk/src/math/weights.ts#L14)
