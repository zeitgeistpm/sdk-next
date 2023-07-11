# @zeitgeistpm/sdk

## 2.30.0

### Minor Changes

- 500a2a1: `pool.accountId` moved to `pool.account.accountId` for indexed pools

### Patch Changes

- Updated dependencies [500a2a1]
  - @zeitgeistpm/indexer@3.1.0

## 2.29.21

### Patch Changes

- 8c8bfcd: Added extrinsic info(hash, name) to `historicalAccountBalances`
- Updated dependencies [8c8bfcd]
  - @zeitgeistpm/indexer@3.0.14

## 2.29.20

### Patch Changes

- b131991: parseAssetId takes any type for convenience

## 2.29.19

### Patch Changes

- bf2a3fa: Fix isWithPool to be false when pool key is undefined
- Updated dependencies [bf2a3fa]
  - @zeitgeistpm/augment-api@2.11.5
  - @zeitgeistpm/indexer@3.0.13
  - @zeitgeistpm/web3.storage@2.9.13

## 2.29.18

### Patch Changes

- 979bddc: poolStatus to .status
- Updated dependencies [979bddc]
  - @zeitgeistpm/indexer@3.0.12
  - @zeitgeistpm/web3.storage@2.9.12

## 2.29.17

### Patch Changes

- 77365d2: Fix
- Updated dependencies [77365d2]
  - @zeitgeistpm/web3.storage@2.9.11

## 2.29.16

### Patch Changes

- 7586a91: Add calculateFees to market creation model.
- Updated dependencies [7586a91]
  - @zeitgeistpm/web3.storage@2.9.10
  - @zeitgeistpm/indexer@3.0.11

## 2.29.15

### Patch Changes

- d690e08: Replace isMetaComplete with hasValidMetaCategories
- Updated dependencies [d690e08]
  - @zeitgeistpm/indexer@3.0.10
  - @zeitgeistpm/rpc@2.7.6
  - @zeitgeistpm/utility@2.18.13
  - @zeitgeistpm/web3.storage@2.9.9

## 2.29.14

### Patch Changes

- d4ee2ed: Unpin from node softly
- Updated dependencies [d4ee2ed]
  - @zeitgeistpm/rpc@2.7.5
  - @zeitgeistpm/utility@2.18.12
  - @zeitgeistpm/web3.storage@2.9.8

## 2.29.13

### Patch Changes

- 78e8b5d: Remove node pin fbefore cluster on del
- Updated dependencies [78e8b5d]
  - @zeitgeistpm/rpc@2.7.4
  - @zeitgeistpm/utility@2.18.11
  - @zeitgeistpm/web3.storage@2.9.7

## 2.29.12

### Patch Changes

- 3427623: Remove node pin if cluster adding fails
- Updated dependencies [3427623]
  - @zeitgeistpm/rpc@2.7.3
  - @zeitgeistpm/utility@2.18.10
  - @zeitgeistpm/web3.storage@2.9.6

## 2.29.11

### Patch Changes

- d683955: Fix ipfs port
- Updated dependencies [d683955]
  - @zeitgeistpm/rpc@2.7.2
  - @zeitgeistpm/utility@2.18.9
  - @zeitgeistpm/web3.storage@2.9.5

## 2.29.10

### Patch Changes

- 91f5176: Fix
- Updated dependencies [91f5176]
  - @zeitgeistpm/indexer@3.0.9
  - @zeitgeistpm/utility@2.18.8
  - @zeitgeistpm/web3.storage@2.9.4

## 2.29.9

### Patch Changes

- d2c9b04: static .is on StoragError
- Updated dependencies [d2c9b04]
  - @zeitgeistpm/indexer@3.0.8
  - @zeitgeistpm/utility@2.18.7
  - @zeitgeistpm/web3.storage@2.9.3

## 2.29.8

### Patch Changes

- ab26257: StorageErrors for ipfs
- Updated dependencies [ab26257]
  - @zeitgeistpm/indexer@3.0.7
  - @zeitgeistpm/utility@2.18.6
  - @zeitgeistpm/web3.storage@2.9.2

## 2.29.7

### Patch Changes

- ee5a954: Expose the method to creat transaction using models.market.create.tx
- Updated dependencies [ee5a954]
  - @zeitgeistpm/indexer@3.0.6

## 2.29.6

### Patch Changes

- e844bbb: Use https for know default ipfs client.
- Updated dependencies [e844bbb]
  - @zeitgeistpm/indexer@3.0.5

## 2.29.5

### Patch Changes

- d7311ef: Scalar market type now supports [string, string] in case of big numbers.
- Updated dependencies [d7311ef]
  - @zeitgeistpm/indexer@3.0.4
  - @zeitgeistpm/utility@2.18.5

## 2.29.4

### Patch Changes

- 1be031c: Update Duration type to accept camelcase
- Updated dependencies [1be031c]
  - @zeitgeistpm/utility@2.18.4

## 2.29.3

### Patch Changes

- 96ae13b: Fix retry ws provider bug.
- Updated dependencies [96ae13b]
  - @zeitgeistpm/indexer@3.0.3
  - @zeitgeistpm/augment-api@2.11.4
  - @zeitgeistpm/rpc@2.7.1
  - @zeitgeistpm/utility@2.18.3
  - @zeitgeistpm/web3.storage@2.9.1

## 2.29.2

### Patch Changes

- 5694a36: Added `indexer#historicalSwaps`
- Updated dependencies [5694a36]
  - @zeitgeistpm/indexer@3.0.2

## 2.29.1

### Patch Changes

- 1fd1451: baseAssetQty and use dev processor for gql schema
- Updated dependencies [1fd1451]
  - @zeitgeistpm/indexer@3.0.1

## 2.29.0

### Minor Changes

- 0b7bdd9: Changes made

### Patch Changes

- Updated dependencies [0b7bdd9]
  - @zeitgeistpm/indexer@3.0.0

## 2.28.2

### Patch Changes

- a855edf: Add `isMetaComplete` to Market GQL schema
- Updated dependencies [a855edf]
  - @zeitgeistpm/indexer@2.17.2
  - @zeitgeistpm/utility@2.18.1

## 2.28.1

### Patch Changes

- 42753ab: Fix getAssetWeight
- Updated dependencies [42753ab]
  - @zeitgeistpm/indexer@2.17.1

## 2.28.0

### Minor Changes

- 01f29db: Update gql schemas and typegen.

### Patch Changes

- Updated dependencies [01f29db]
  - @zeitgeistpm/indexer@2.17.0

## 2.27.4

### Patch Changes

- 2f25979: Add market stats fetching to indexer.
- Updated dependencies [2f25979]
  - @zeitgeistpm/indexer@2.16.4

## 2.27.3

### Patch Changes

- a5e02c7: Added `baseAsset` to market indexer query
- Updated dependencies [a5e02c7]
  - @zeitgeistpm/indexer@2.16.3

## 2.27.2

### Patch Changes

- 9592102: Fix chain metadata fetching of error tables.
- Updated dependencies [9592102]
  - @zeitgeistpm/indexer@2.16.2

## 2.27.1

### Patch Changes

- 5490eda: Bump
- Updated dependencies [5490eda]
  - @zeitgeistpm/indexer@2.16.1

## 2.27.0

### Minor Changes

- d53b525: - Use native `Blob` for storage file encoding decoding.
  - All or handlers like `Either.unwrapOr|unleftOr` etc can return another type.
  - Implemented `unwrapOr` on either and async either that behaves the same as `unrightOr`

### Patch Changes

- Updated dependencies [d53b525]
  - @zeitgeistpm/indexer@2.16.0
  - @zeitgeistpm/utility@2.18.0
  - @zeitgeistpm/web3.storage@2.9.0

## 2.26.0

### Minor Changes

- 0f2ed92: Work

### Patch Changes

- Updated dependencies [0f2ed92]
  - @zeitgeistpm/utility@2.17.0
  - @zeitgeistpm/web3.storage@2.8.0

## 2.25.0

### Minor Changes

- 9975958: Metadata#img passed to models.market.create can now be a File | ArrayBuffer | Blob | AwaitIterable | ReadableStream

### Patch Changes

- Updated dependencies [9975958]
  - @zeitgeistpm/utility@2.16.0

## 2.24.0

### Minor Changes

- 48e8ea3: - Introduced the `IOBaseAssetId` and support for it in `parseAssetId`
  - Added utility `getBaseAsset(pool)` for getting the base asset of a pool.
  - Full and Rpc sdk now exposes `sdk.storage.data.get|set|del` for storing, reading and deleting arbitrary data(IPFS)

### Patch Changes

- Updated dependencies [48e8ea3]
  - @zeitgeistpm/utility@2.15.0

## 2.23.1

### Patch Changes

- e6b5c8a: Expose `sdk.model.chainMetadata.fetchTables` for fetching error metadata.

## 2.23.0

### Minor Changes

- 7c64b3e: isRpcSdk and isIndexerSdk now handles undefined values

### Patch Changes

- Updated dependencies [7c64b3e]
  - @zeitgeistpm/indexer@2.15.0
  - @zeitgeistpm/utility@2.14.0

## 2.22.3

### Patch Changes

- eb03b93: Fix remaining time issue on getStage used on indexed markets without deadlines set.
- Updated dependencies [eb03b93]
  - @zeitgeistpm/augment-api@2.11.3
  - @zeitgeistpm/indexer@2.14.3

## 2.22.2

### Patch Changes

- 0ffd0c6: Remove console log
- Updated dependencies [0ffd0c6]
  - @zeitgeistpm/augment-api@2.11.2
  - @zeitgeistpm/indexer@2.14.2

## 2.22.1

### Patch Changes

- 8d88958: Fix assets.pool
- Updated dependencies [8d88958]
  - @zeitgeistpm/augment-api@2.11.1
  - @zeitgeistpm/indexer@2.14.1

## 2.22.0

### Minor Changes

- 80267c9: poolId removed from indexed Asset, use `asset.pool.poolId` instead.

### Patch Changes

- Updated dependencies [80267c9]
  - @zeitgeistpm/augment-api@2.11.0
  - @zeitgeistpm/indexer@2.14.0
  - @zeitgeistpm/utility@2.13.0

## 2.21.5

### Patch Changes

- db4b6f5: Bug fix for `saturatedPoolsIndex`

## 2.21.4

### Patch Changes

- 07b4749: Ztg now included in assets returned by `model.swaps.saturatedPoolsIndex`

## 2.21.3

### Patch Changes

- 75e2e3d: `swaps.getPool` now also accepts a number or string representing the `poolId`

## 2.21.2

### Patch Changes

- 1480957: Fix getMarketStage

## 2.21.1

### Patch Changes

- 0a0e647: Use `crypto` instead of `node:crypto`
- Updated dependencies [0a0e647]
  - @zeitgeistpm/web3.storage@2.7.1

## 2.21.0

### Minor Changes

- 3a9fb85: MarketStatus in sdk is now `MarketStatusString`

## 2.20.0

### Minor Changes

- 90739fa: Removed the `NA` type in favour of null

### Patch Changes

- Updated dependencies [90739fa]
  - @zeitgeistpm/utility@2.12.0

## 2.19.0

### Minor Changes

- d179ee9: fetchMetadata now works in indexed markets in rpc mode also.

### Patch Changes

- Updated dependencies [d179ee9]
  - @zeitgeistpm/indexer@2.13.0
  - @zeitgeistpm/augment-api@2.10.0
  - @zeitgeistpm/rpc@2.7.0
  - @zeitgeistpm/utility@2.11.0
  - @zeitgeistpm/web3.storage@2.7.0

## 2.18.6

### Patch Changes

- 9db63fa: Some minor type changes.
- Updated dependencies [9db63fa]
  - @zeitgeistpm/augment-api@2.9.2
  - @zeitgeistpm/indexer@2.12.3
  - @zeitgeistpm/rpc@2.6.2
  - @zeitgeistpm/utility@2.10.1
  - @zeitgeistpm/web3.storage@2.6.1

## 2.18.5

### Patch Changes

- 23ddd08: Method `sdk.model.markets.get` now accepts `string` or `number` in addition to `{marketId: number}` as params.

## 2.18.4

### Patch Changes

- 669d9dd: Added a `slippageFromFloat` helper.
- Updated dependencies [669d9dd]
  - @zeitgeistpm/indexer@2.12.2

## 2.18.3

### Patch Changes

- 97f0b7f: Added methods `getSwapFee`, `getAssetIds`, `getAssetWeight` and `getAssetBalance` to the Pool model.

## 2.18.2

### Patch Changes

- 124de44: Added some helper methods `getSwapFee`, `getAssetIds` and `getAssetBalance` to Pool
- Updated dependencies [124de44]
  - @zeitgeistpm/augment-api@2.9.1
  - @zeitgeistpm/indexer@2.12.1
  - @zeitgeistpm/rpc@2.6.1

## 2.18.1

### Patch Changes

- e9b9107: Reintroduced the `asRpc()` method on `Sdk`

## 2.18.0

### Minor Changes

- 41e51f1: - Added helpers for swap fee and weights calculation. `evenWeights(x_number_of_outcomes)`, `weightsFromRelativeRatio([int_ratio, int_ratio, ...])` and `swapFeeFromFloat(percent)`
  - Changed the indexer gql market status type to correct enum.
  - Improved market creation and metadata storage.

### Patch Changes

- Updated dependencies [41e51f1]
  - @zeitgeistpm/indexer@2.12.0
  - @zeitgeistpm/augment-api@2.9.0
  - @zeitgeistpm/rpc@2.6.0
  - @zeitgeistpm/utility@2.10.0
  - @zeitgeistpm/web3.storage@2.6.0

## 2.17.0

### Minor Changes

- 28f27ef: Gql schema changes.

### Patch Changes

- Updated dependencies [28f27ef]
  - @zeitgeistpm/indexer@2.11.0

## 2.16.1

### Patch Changes

- 70085da: Added `bonds` to market data(rpc and indexed). And `rejectReason` to indexed markets only.
- Updated dependencies [70085da]
  - @zeitgeistpm/augment-api@2.8.1
  - @zeitgeistpm/indexer@2.10.1
  - @zeitgeistpm/rpc@2.5.1
  - @zeitgeistpm/utility@2.9.1

## 2.16.0

### Minor Changes

- a3dd51d: Refactors needed.
  - The raw `sdk.indexer` and `sdk.api` instances can now be found directly on the sdk at top level(based on the context when created), and does not need to be refered through `sdk.context`
  - `fromCompositeIndexerAssetId` method renamed to `parseAssetId`
  - `sdk.asRpc()` and `sdk.asIndexer()` has been removed, use `isRpcSdk(sdk)` and `isIndexedSdk(sdk)` respectively.
  - `baseAsset` parameter added market creation parameter used in `sdk.model.markets.create`
  - `sdk.model.markets.get` should now correctly return a promise compliant value. Will most likely be an `AEither` in the future that can also be awaited as per the Promise spec.
  - `sdk.model.markets.getStage` now uses `CorrectionPeriod` (if can be read from chain) for `Disputed` markets.

### Patch Changes

- Updated dependencies [a3dd51d]
  - @zeitgeistpm/augment-api@2.8.0
  - @zeitgeistpm/indexer@2.10.0
  - @zeitgeistpm/rpc@2.5.0
  - @zeitgeistpm/utility@2.9.0
  - @zeitgeistpm/web3.storage@2.5.0

## 2.15.5

### Patch Changes

- f31c341: Added failover to subscan fetching in fetchZTGInfo if Coingecko fails
- Updated dependencies [f31c341]
  - @zeitgeistpm/indexer@2.9.2
  - @zeitgeistpm/utility@2.8.1

## 2.15.4

### Patch Changes

- fe76985: Added IOMarketOutcomeAssetId for checking if asset id is related to a market outcome

## 2.15.3

### Patch Changes

- fd1acd8: Indexer uses global fetch.
- Updated dependencies [fd1acd8]
  - @zeitgeistpm/indexer@2.9.1

## 2.15.2

### Patch Changes

- 0337f9d: Make open reporting and oracle reporting market stages distinct types.

## 2.15.1

### Patch Changes

- 38ad0b9: markets passed to getStage can have either indexer or rpc context

## 2.15.0

### Minor Changes

- 5abcec4: Added getMarketStage to models Market and updated market indexed marketType scalar being array and not string.

### Patch Changes

- Updated dependencies [5abcec4]
  - @zeitgeistpm/indexer@2.9.0
  - @zeitgeistpm/utility@2.8.0

## 2.14.2

### Patch Changes

- 5dc168e: Parse object in fromCompositeIndexerAssetId

## 2.14.1

### Patch Changes

- b0c646c: Put default exports last in utility package exports.
- Updated dependencies [b0c646c]
  - @zeitgeistpm/augment-api@2.7.1
  - @zeitgeistpm/indexer@2.8.1
  - @zeitgeistpm/rpc@2.4.1
  - @zeitgeistpm/utility@2.7.1
  - @zeitgeistpm/web3.storage@2.4.1

## 2.14.0

### Minor Changes

- 40456fb: Changed the indexer markets dispute mechanism type.

### Patch Changes

- Updated dependencies [40456fb]
  - @zeitgeistpm/indexer@2.8.0

## 2.13.0

### Minor Changes

- a3b45d8: Type changes.

### Patch Changes

- Updated dependencies [a3b45d8]
  - @zeitgeistpm/augment-api@2.7.0
  - @zeitgeistpm/indexer@2.7.0
  - @zeitgeistpm/rpc@2.4.0
  - @zeitgeistpm/utility@2.7.0
  - @zeitgeistpm/web3.storage@2.4.0

## 2.12.0

### Minor Changes

- 5954781: Improved module exports in package jsons.

### Patch Changes

- Updated dependencies [5954781]
  - @zeitgeistpm/augment-api@2.6.0
  - @zeitgeistpm/indexer@2.6.0
  - @zeitgeistpm/rpc@2.3.0
  - @zeitgeistpm/utility@2.6.0
  - @zeitgeistpm/web3.storage@2.3.0

## 2.11.0

### Minor Changes

- 575b574: Added outcomeAssets to market

### Patch Changes

- Updated dependencies [575b574]
  - @zeitgeistpm/indexer@2.5.0

## 2.10.0

### Minor Changes

- f097298: Rename AssetId#fromString to AssetId#fromCompositeIndexerAssetId

## 2.9.3

### Patch Changes

- 803bea6: Fix getScalarBounds to parse scalar type string properly

## 2.9.2

### Patch Changes

- b69c2c0: Added method getScalarBounds function to Market data type.

## 2.9.1

### Patch Changes

- cb14392: Able to pass current now to projectEndTimestamp
- Updated dependencies [cb14392]
  - @zeitgeistpm/utility@2.5.1

## 2.9.0

### Minor Changes

- ca8f1d3: Added toCompositeIndexerAssetId to help identify asset ids in the indexer.

### Patch Changes

- Updated dependencies [ca8f1d3]
  - @zeitgeistpm/augment-api@2.5.0
  - @zeitgeistpm/utility@2.5.0

## 2.8.0

### Minor Changes

- 2b5e3dd: Add toString on NA, and augment api changes.

### Patch Changes

- Updated dependencies [2b5e3dd]
  - @zeitgeistpm/augment-api@2.4.0

## 2.7.0

### Minor Changes

- fa828f6: Update `api.rpc.swaps.getSpotPrice` params.

### Patch Changes

- Updated dependencies [fa828f6]
  - @zeitgeistpm/augment-api@2.3.0

## 2.6.6

### Patch Changes

- e18895c: parse ztg asset ids when looking for weight
- Updated dependencies [e18895c]
  - @zeitgeistpm/utility@2.4.2

## 2.6.5

### Patch Changes

- 75f571d: Use lodash-es

## 2.6.4

### Patch Changes

- 8b967c2: Fix lodash import error.

## 2.6.3

### Patch Changes

- d391fba: Add method getMarketIdOf to get MarketId of scalar or categorical AssetIds.

## 2.6.2

### Patch Changes

- 2f2b419: getAssetWeight now also works with indexed Pools.

## 2.6.1

### Patch Changes

- 1379ad3: Added method getAssetWeight to get asset weight of pool by an AssetId.
- Updated dependencies [1379ad3]
  - @zeitgeistpm/utility@2.4.1

## 2.6.0

### Minor Changes

- f6c109d: Pool is now available on indexed market. `market.poolId` as been removed and function to `getPoolId` for market has been introduced.

### Patch Changes

- Updated dependencies [f6c109d]
  - @zeitgeistpm/indexer@2.4.0
  - @zeitgeistpm/utility@2.4.0

## 2.5.1

### Patch Changes

- 09455b3: Option unwrap should return null | A.
- Updated dependencies [09455b3]
  - @zeitgeistpm/utility@2.3.7

## 2.5.0

### Minor Changes

- 2cd4993: Get functions return IOption instead of value | null.

## 2.4.12

### Patch Changes

- 03d1351: Add retracted hook to transaction calls.
- Updated dependencies [03d1351]
  - @zeitgeistpm/rpc@2.2.5

## 2.4.11

### Patch Changes

- d244728: Fix hasMarketMethods generic context type to wider type.

## 2.4.10

### Patch Changes

- b508fe2: Add method hasMarketMethods to Market. And fix method params being any to correct strict typing

## 2.4.9

### Patch Changes

- c006781: added transactionErrorToString method.
- Updated dependencies [c006781]
  - @zeitgeistpm/rpc@2.2.4

## 2.4.8

### Patch Changes

- 98fe20f: Fix transaction hook type
- Updated dependencies [98fe20f]
  - @zeitgeistpm/rpc@2.2.3
  - @zeitgeistpm/utility@2.3.6

## 2.4.7

### Patch Changes

- bfde4af: Add transaction hooks to transaction methods to hook into for example when the transaction is in block.
- Updated dependencies [bfde4af]
  - @zeitgeistpm/rpc@2.2.2
  - @zeitgeistpm/utility@2.3.5

## 2.4.6

### Patch Changes

- e5a8740: add asEither method for AEither for more fine error grained handling
- Updated dependencies [e5a8740]
  - @zeitgeistpm/utility@2.3.4

## 2.4.5

### Patch Changes

- 93a81ef: Default MS generic for hasPool

## 2.4.4

### Patch Changes

- 0b50dfd: Fix missing method

## 2.4.3

### Patch Changes

- 0660cc9: add isAvailable typeugard utility.
- Updated dependencies [0660cc9]
  - @zeitgeistpm/utility@2.3.3

## 2.4.2

### Patch Changes

- fbabbf9: Fix isNa to handle undefined values.

## 2.4.1

### Patch Changes

- f101815: Fix asMs not imported.
- Updated dependencies [f101815]
  - @zeitgeistpm/utility@2.3.2

## 2.4.0

### Minor Changes

- 6fd4d40: Project end time stamp in all cases where its possible and return NA when not like when the end is set as block and getting timestamp and block from chain isnt possible.

## 2.3.3

### Patch Changes

- a2e4810: projectEndTimestamp for market also accepts indexed market

## 2.3.2

### Patch Changes

- d5fb5ba: Add type narrowing to Data type for MetadataStorage generic.

## 2.3.1

### Patch Changes

- 2aa3bed: Peer deps
- Updated dependencies [2aa3bed]
  - @zeitgeistpm/augment-api@2.2.2
  - @zeitgeistpm/indexer@2.3.1
  - @zeitgeistpm/rpc@2.2.1
  - @zeitgeistpm/utility@2.3.1
  - @zeitgeistpm/web3.storage@2.2.1

## 2.3.0

### Minor Changes

- ea4c1a4: Add time model to sdk and move time utility functions to utility package

### Patch Changes

- Updated dependencies [ea4c1a4]
  - @zeitgeistpm/indexer@2.3.0
  - @zeitgeistpm/utility@2.3.0

## 2.2.4

### Patch Changes

- 6126566: Add deadlines to market, export src from augment-api
- Updated dependencies [6126566]
  - @zeitgeistpm/indexer@2.2.2
  - @zeitgeistpm/augment-api@2.2.1

## 2.2.3

### Patch Changes

- 8dc57bd: Add marketStatusCount method to indexer.markets.
- Updated dependencies [8dc57bd]
  - @zeitgeistpm/indexer@2.2.1

## 2.2.2

### Patch Changes

- b4fef6b: Provide default generic type for PoolList MS = MetadataStorage

## 2.2.1

### Patch Changes

- 0008a1f: Export PoolsList type

## 2.2.0

### Minor Changes

- 2550453: Use decimal.js instead of bignumber.js

### Patch Changes

- Updated dependencies [2550453]
  - @zeitgeistpm/augment-api@2.2.0
  - @zeitgeistpm/indexer@2.2.0
  - @zeitgeistpm/rpc@2.2.0
  - @zeitgeistpm/utility@2.2.0
  - @zeitgeistpm/web3.storage@2.2.0

## 2.1.10

### Patch Changes

- d58625c: Emit merged partial sdk in create$

## 2.1.9

### Patch Changes

- 55ad05b: share last item using create$

## 2.1.8

### Patch Changes

- df4fb10: Sdk#create$ shares sdk instance between subscribers

## 2.1.7

### Patch Changes

- 3adb813: Fix create$ to only connect once pr indexer and rpc

## 2.1.6

### Patch Changes

- 6a0176f: Handle missing categories on market when creating saturated pools index.

## 2.1.5

### Patch Changes

- eb05e05: asd
- Updated dependencies [eb05e05]
  - @zeitgeistpm/augment-api@2.1.2
  - @zeitgeistpm/indexer@2.1.2
  - @zeitgeistpm/rpc@2.1.3
  - @zeitgeistpm/utility@2.1.4
  - @zeitgeistpm/web3.storage@2.1.2

## 2.1.4

### Patch Changes

- 5f35aca: Market list query pagination must be fully defined or missing

## 2.1.3

### Patch Changes

- 565ce39: Asset index market is saturated type.

## 2.1.2

### Patch Changes

- 7653c99: Provide default metadata storage to Market and Pool for convenience.

## 2.1.1

### Patch Changes

- d1697f7: Fix create$ to propely combine configs in the stream
- Updated dependencies [d1697f7]
  - @zeitgeistpm/augment-api@2.1.1
  - @zeitgeistpm/indexer@2.1.1
  - @zeitgeistpm/rpc@2.1.1
  - @zeitgeistpm/utility@2.1.1
  - @zeitgeistpm/web3.storage@2.1.1

## 2.1.0

### Minor Changes

- Refactor to rollup build and use .mjs files

### Patch Changes

- Updated dependencies
  - @zeitgeistpm/augment-api@2.1.0
  - @zeitgeistpm/indexer@2.1.0
  - @zeitgeistpm/rpc@2.1.0
  - @zeitgeistpm/utility@2.1.0
  - @zeitgeistpm/web3.storage@2.1.0

## 2.0.45

### Patch Changes

- Dont import augmented polkadot types by default.
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.36
  - @zeitgeistpm/rpc@2.0.36
  - @zeitgeistpm/utility@2.0.37

## 2.0.44

### Patch Changes

- Put polkadot pacakges as peer dependencies
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.35
  - @zeitgeistpm/indexer@2.0.36
  - @zeitgeistpm/rpc@2.0.35
  - @zeitgeistpm/utility@2.0.36
  - @zeitgeistpm/web3.storage@2.0.44

## 2.0.43

### Patch Changes

- Add teardown logic to sdk observable created in Sdk#create$
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.34
  - @zeitgeistpm/indexer@2.0.35
  - @zeitgeistpm/rpc@2.0.34
  - @zeitgeistpm/utility@2.0.35
  - @zeitgeistpm/web3.storage@2.0.43

## 2.0.42

### Patch Changes

- remove main field in storage json
- Updated dependencies
  - @zeitgeistpm/utility@2.0.34
  - @zeitgeistpm/web3.storage@2.0.42

## 2.0.41

### Patch Changes

- y
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.33
  - @zeitgeistpm/indexer@2.0.34
  - @zeitgeistpm/rpc@2.0.33
  - @zeitgeistpm/utility@2.0.33
  - @zeitgeistpm/web3.storage@2.0.41

## 2.0.40

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.32
  - @zeitgeistpm/indexer@2.0.33
  - @zeitgeistpm/rpc@2.0.32
  - @zeitgeistpm/utility@2.0.32
  - @zeitgeistpm/web3.storage@2.0.40

## 2.0.39

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.31
  - @zeitgeistpm/indexer@2.0.32
  - @zeitgeistpm/rpc@2.0.31
  - @zeitgeistpm/utility@2.0.31
  - @zeitgeistpm/web3.storage@2.0.39

## 2.0.38

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.30
  - @zeitgeistpm/indexer@2.0.31
  - @zeitgeistpm/rpc@2.0.30
  - @zeitgeistpm/utility@2.0.30
  - @zeitgeistpm/web3.storage@2.0.38

## 2.0.39

### Patch Changes

- bignumber alias as .js in module name seems to interfere
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.29
  - @zeitgeistpm/indexer@2.0.30
  - @zeitgeistpm/rpc@2.0.29
  - @zeitgeistpm/utility@2.0.30
  - @zeitgeistpm/web3.storage@2.0.37

## 2.0.38

### Patch Changes

- use tsup to build
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.28
  - @zeitgeistpm/indexer@2.0.29
  - @zeitgeistpm/rpc@2.0.28
  - @zeitgeistpm/utility@2.0.30
  - @zeitgeistpm/web3.storage@2.0.36

## 2.0.27

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.17
  - @zeitgeistpm/indexer@2.0.18
  - @zeitgeistpm/rpc@2.0.17
  - @zeitgeistpm/utility@2.0.19
  - @zeitgeistpm/web3.storage@2.0.25

## 2.0.26

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.24
  - @zeitgeistpm/augment-api@2.0.16
  - @zeitgeistpm/indexer@2.0.17
  - @zeitgeistpm/rpc@2.0.16
  - @zeitgeistpm/utility@2.0.18

## 2.0.25

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.23
  - @zeitgeistpm/augment-api@2.0.15
  - @zeitgeistpm/indexer@2.0.16
  - @zeitgeistpm/rpc@2.0.15
  - @zeitgeistpm/utility@2.0.17

## 2.0.24

### Patch Changes

- commonjs
- Updated dependencies
  - @zeitgeistpm/utility@2.0.16
  - @zeitgeistpm/augment-api@2.0.14
  - @zeitgeistpm/indexer@2.0.15
  - @zeitgeistpm/rpc@2.0.14
  - @zeitgeistpm/web3.storage@2.0.21

## 2.0.23

### Patch Changes

- bignumber import
- Updated dependencies
  - @zeitgeistpm/utility@2.0.15

## 2.0.22

### Patch Changes

- bignumber import
- Updated dependencies
  - @zeitgeistpm/utility@2.0.14

## 2.0.21

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.13
  - @zeitgeistpm/indexer@2.0.14
  - @zeitgeistpm/rpc@2.0.13
  - @zeitgeistpm/utility@2.0.13
  - @zeitgeistpm/web3.storage@2.0.20

## 2.0.20

### Patch Changes

- export module field
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.12
  - @zeitgeistpm/indexer@2.0.13
  - @zeitgeistpm/rpc@2.0.12
  - @zeitgeistpm/utility@2.0.12
  - @zeitgeistpm/web3.storage@2.0.19

## 2.0.19

### Patch Changes

- deps
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.11
  - @zeitgeistpm/indexer@2.0.12
  - @zeitgeistpm/rpc@2.0.11
  - @zeitgeistpm/utility@2.0.11
  - @zeitgeistpm/web3.storage@2.0.18

## 2.0.18

### Patch Changes

- esm
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.17
  - @zeitgeistpm/augment-api@2.0.10
  - @zeitgeistpm/indexer@2.0.11
  - @zeitgeistpm/rpc@2.0.10
  - @zeitgeistpm/utility@2.0.10

## 2.0.17

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.16

## 2.0.16

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.15

## 2.0.15

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.14

## 2.0.14

### Patch Changes

- asdk
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.13

## 2.0.13

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.12

## 2.0.12

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.11

## 2.0.11

### Patch Changes

- ipfs
- Updated dependencies
  - @zeitgeistpm/web3.storage@2.0.10

## 2.0.10

### Patch Changes

- Commonjs
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.9
  - @zeitgeistpm/indexer@2.0.10
  - @zeitgeistpm/rpc@2.0.9
  - @zeitgeistpm/utility@2.0.9
  - @zeitgeistpm/web3.storage@2.0.9

## 2.0.9

### Patch Changes

- Include missing package graphql-tag
- Updated dependencies
  - @zeitgeistpm/indexer@2.0.9

## 2.0.8

### Patch Changes

- b212eae: Use esm and export "module" in package jsons
- Updated dependencies [b212eae]
  - @zeitgeistpm/augment-api@2.0.8
  - @zeitgeistpm/indexer@2.0.8
  - @zeitgeistpm/rpc@2.0.8
  - @zeitgeistpm/utility@2.0.8
  - @zeitgeistpm/web3.storage@2.0.8

## 2.0.7

### Patch Changes

- work
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.7
  - @zeitgeistpm/indexer@2.0.7
  - @zeitgeistpm/rpc@2.0.7
  - @zeitgeistpm/utility@2.0.7
  - @zeitgeistpm/web3.storage@2.0.6

## 2.0.6

### Patch Changes

- 272d738: Set correct local dep versions
- Updated dependencies [272d738]
  - @zeitgeistpm/augment-api@2.0.6
  - @zeitgeistpm/indexer@2.0.6
  - @zeitgeistpm/rpc@2.0.6
  - @zeitgeistpm/utility@2.0.6
  - @zeitgeistpm/web3.storage@2.0.6

## 2.0.5

### Patch Changes

- Commonjs
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.5
  - @zeitgeistpm/indexer@2.0.5
  - @zeitgeistpm/rpc@2.0.5
  - @zeitgeistpm/utility@2.0.5
  - @zeitgeistpm/web3.storage@2.0.5

## 2.0.4

### Patch Changes

- Use commonjs for now
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.4
  - @zeitgeistpm/indexer@2.0.4
  - @zeitgeistpm/rpc@2.0.4
  - @zeitgeistpm/utility@2.0.4
  - @zeitgeistpm/web3.storage@2.0.4

## 2.0.3

### Patch Changes

- Remove ipfs-core as it uses an uneeded esm module that breaks ui
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.3
  - @zeitgeistpm/indexer@2.0.3
  - @zeitgeistpm/rpc@2.0.3
  - @zeitgeistpm/utility@2.0.3
  - @zeitgeistpm/web3.storage@2.0.3

## 2.0.2

### Patch Changes

- Move changeset to dev deps
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.2
  - @zeitgeistpm/indexer@2.0.2
  - @zeitgeistpm/rpc@2.0.2
  - @zeitgeistpm/utility@2.0.2
  - @zeitgeistpm/web3.storage@2.0.2

## 2.0.1

### Patch Changes

- Clean deps
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.1
  - @zeitgeistpm/indexer@2.0.1
  - @zeitgeistpm/rpc@2.0.1
  - @zeitgeistpm/utility@2.0.1
  - @zeitgeistpm/web3.storage@2.0.1

## 2.0.0

### Major Changes

- 6ccec9a: alpha 1
- 09afc38: Alpha release candidate 1 of sdk v2

### Patch Changes

- Updated dependencies [6ccec9a]
- Updated dependencies [09afc38]
  - @zeitgeistpm/augment-api@2.0.0
  - @zeitgeistpm/indexer@2.0.0
  - @zeitgeistpm/rpc@2.0.0
  - @zeitgeistpm/utility@2.0.0
  - @zeitgeistpm/web3.storage@2.0.0
