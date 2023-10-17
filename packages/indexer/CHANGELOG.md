# @zeitgeistpm/indexer

## 3.13.0

### Minor Changes

- 39dc4a2: New augmented api types. Scoring rule included.

## 3.12.0

### Minor Changes

- a633351: add rough court handling to get market stage

## 3.11.0

### Minor Changes

- 146c4f5: add rough court handling to get market stage

## 3.10.0

### Minor Changes

- b6baa68: Reintroduce creatorFee and dispute changes.

## 3.9.0

### Minor Changes

- 528b8aa: Revert runtime changes to current bsr. Improve build process so we can specify bsr or mainnet.

## 3.8.0

### Minor Changes

- 6b0e276: Added creatorFee to market creation params. Market dispute only takes marketId now. Added generated types for XCM v3.

## 3.7.1

### Patch Changes

- c7b3a54: add second param `feePayingAsset?: ForeignAssetId` to `sdk.model.markets.create(params, feePayingAsset)`

## 3.7.0

### Minor Changes

- 3cc11a0: Gql schema changes for HistoricalMarkets.

## 3.6.0

### Minor Changes

- f949a18: Signed extension removal

## 3.5.0

### Minor Changes

- 1c83de0: Remove signed extension config.

## 3.4.0

### Minor Changes

- f48de0d: change

## 3.3.3

### Patch Changes

- d7288af: change

## 3.3.2

### Patch Changes

- be1caf6: changes

## 3.3.1

### Patch Changes

- cb0c0f0: Signed extensions

## 3.3.0

### Minor Changes

- 871f426: Removed field timeStampe from HistoricalAccountBalance

## 3.2.1

### Patch Changes

- ade08e5: Add extrinsic info to `historicalSwaps`

## 3.2.0

### Minor Changes

- 1abbbaf: Staging beta release of new GQL schemas.

## 3.1.1

### Patch Changes

- 74a97da: Fix poolId not on Account

## 3.1.0

### Minor Changes

- 500a2a1: `pool.accountId` moved to `pool.account.accountId` for indexed pools

## 3.0.14

### Patch Changes

- 8c8bfcd: Added extrinsic info(hash, name) to `historicalAccountBalances`

## 3.0.13

### Patch Changes

- bf2a3fa: Fix isWithPool to be false when pool key is undefined

## 3.0.12

### Patch Changes

- 979bddc: poolStatus to .status

## 3.0.11

### Patch Changes

- 7586a91: Add calculateFees to market creation model.

## 3.0.10

### Patch Changes

- d690e08: Replace isMetaComplete with hasValidMetaCategories

## 3.0.9

### Patch Changes

- 91f5176: Fix

## 3.0.8

### Patch Changes

- d2c9b04: static .is on StoragError

## 3.0.7

### Patch Changes

- ab26257: StorageErrors for ipfs

## 3.0.6

### Patch Changes

- ee5a954: Expose the method to creat transaction using models.market.create.tx

## 3.0.5

### Patch Changes

- e844bbb: Use https for know default ipfs client.

## 3.0.4

### Patch Changes

- d7311ef: Scalar market type now supports [string, string] in case of big numbers.

## 3.0.3

### Patch Changes

- 96ae13b: Fix retry ws provider bug.

## 3.0.2

### Patch Changes

- 5694a36: Added `indexer#historicalSwaps`

## 3.0.1

### Patch Changes

- 1fd1451: baseAssetQty and use dev processor for gql schema

## 3.0.0

### Major Changes

- 0b7bdd9: Changes made

## 2.17.2

### Patch Changes

- a855edf: Add `isMetaComplete` to Market GQL schema

## 2.17.1

### Patch Changes

- 42753ab: Fix getAssetWeight

## 2.17.0

### Minor Changes

- 01f29db: Update gql schemas and typegen.

## 2.16.4

### Patch Changes

- 2f25979: Add market stats fetching to indexer.

## 2.16.3

### Patch Changes

- a5e02c7: Added `baseAsset` to market indexer query

## 2.16.2

### Patch Changes

- 9592102: Fix chain metadata fetching of error tables.

## 2.16.1

### Patch Changes

- 5490eda: Bump

## 2.16.0

### Minor Changes

- d53b525: - Use native `Blob` for storage file encoding decoding.
  - All or handlers like `Either.unwrapOr|unleftOr` etc can return another type.
  - Implemented `unwrapOr` on either and async either that behaves the same as `unrightOr`

## 2.15.0

### Minor Changes

- 7c64b3e: isRpcSdk and isIndexerSdk now handles undefined values

## 2.14.3

### Patch Changes

- eb03b93: Fix remaining time issue on getStage used on indexed markets without deadlines set.

## 2.14.2

### Patch Changes

- 0ffd0c6: Remove console log

## 2.14.1

### Patch Changes

- 8d88958: Fix assets.pool

## 2.14.0

### Minor Changes

- 80267c9: poolId removed from indexed Asset, use `asset.pool.poolId` instead.

## 2.13.0

### Minor Changes

- d179ee9: fetchMetadata now works in indexed markets in rpc mode also.

## 2.12.3

### Patch Changes

- 9db63fa: Some minor type changes.

## 2.12.2

### Patch Changes

- 669d9dd: Added a `slippageFromFloat` helper.

## 2.12.1

### Patch Changes

- 124de44: Added some helper methods `getSwapFee`, `getAssetIds` and `getAssetBalance` to Pool

## 2.12.0

### Minor Changes

- 41e51f1: - Added helpers for swap fee and weights calculation. `evenWeights(x_number_of_outcomes)`, `weightsFromRelativeRatio([int_ratio, int_ratio, ...])` and `swapFeeFromFloat(percent)`
  - Changed the indexer gql market status type to correct enum.
  - Improved market creation and metadata storage.

## 2.11.0

### Minor Changes

- 28f27ef: Gql schema changes.

## 2.10.1

### Patch Changes

- 70085da: Added `bonds` to market data(rpc and indexed). And `rejectReason` to indexed markets only.

## 2.10.0

### Minor Changes

- a3dd51d: - The raw `sdk.indexer` and `sdk.api` instances can now be found directly on the sdk at top level(based on the context when created), and does not need to be refered through `sdk.context`
  - ´fromCompositeIndexerAssetId´ method renamed to `parseAssetId`
  - `sdk.asRpc()` and `sdk.asIndexer()` has been removed, use `isRpcSdk(sdk)` and `isIndexedSdk(sdk)` respectively.
  - `baseAsset` parameter added market creation parameter used in `sdk.model.markets.create`
  - `sdk.model.markets.get` should now correctly return a promise compliant value. Will most likely be an `AEither` in the future that can also be awaited as per the Promise spec.

## 2.9.2

### Patch Changes

- f31c341: Added failover to subscan fetching in fetchZTGInfo if Coingecko fails

## 2.9.1

### Patch Changes

- fd1acd8: Indexer uses global fetch.

## 2.9.0

### Minor Changes

- 5abcec4: Added getMarketStage to models Market and updated market indexed marketType scalar being array and not string.

## 2.8.1

### Patch Changes

- b0c646c: Put default exports last in utility package exports.

## 2.8.0

### Minor Changes

- 40456fb: Changed the indexer markets dispute mechanism type.

## 2.7.0

### Minor Changes

- a3b45d8: Type changes.

## 2.6.0

### Minor Changes

- 5954781: Improved module exports in package jsons.

## 2.5.0

### Minor Changes

- 575b574: Added outcomeAssets to market

## 2.4.0

### Minor Changes

- f6c109d: Pool is now available on indexed market. `market.poolId` as been removed and function to `getPoolId` for market has been introduced.

## 2.3.1

### Patch Changes

- 2aa3bed: Peer deps

## 2.3.0

### Minor Changes

- ea4c1a4: Add time model to sdk and move time utility functions to utility package

## 2.2.2

### Patch Changes

- 6126566: Add deadlines to market, export src from augment-api

## 2.2.1

### Patch Changes

- 8dc57bd: Add marketStatusCount method to indexer.markets.

## 2.2.0

### Minor Changes

- 2550453: Use decimal.js instead of bignumber.js

## 2.1.2

### Patch Changes

- eb05e05: asd

## 2.1.1

### Patch Changes

- d1697f7: Fix create$ to propely combine configs in the stream

## 2.1.0

### Minor Changes

- Refactor to rollup build and use .mjs files

## 2.0.36

### Patch Changes

- Put polkadot pacakges as peer dependencies

## 2.0.35

### Patch Changes

- Add teardown logic to sdk observable created in Sdk#create$

## 2.0.34

### Patch Changes

- y

## 2.0.33

### Patch Changes

- asd

## 2.0.32

### Patch Changes

- asd

## 2.0.31

### Patch Changes

- asd

## 2.0.30

### Patch Changes

- bignumber alias as .js in module name seems to interfere

## 2.0.29

### Patch Changes

- use tsup to build

## 2.0.18

### Patch Changes

- asd

## 2.0.17

### Patch Changes

- asd

## 2.0.16

### Patch Changes

- asd

## 2.0.15

### Patch Changes

- commonjs

## 2.0.14

### Patch Changes

- asd

## 2.0.13

### Patch Changes

- export module field

## 2.0.12

### Patch Changes

- deps

## 2.0.11

### Patch Changes

- esm

## 2.0.10

### Patch Changes

- Commonjs

## 2.0.9

### Patch Changes

- Include missing package graphql-tag

## 2.0.8

### Patch Changes

- b212eae: Use esm and export "module" in package jsons

## 2.0.7

### Patch Changes

- work

## 2.0.6

### Patch Changes

- 272d738: Set correct local dep versions

## 2.0.5

### Patch Changes

- Commonjs

## 2.0.4

### Patch Changes

- Use commonjs for now

## 2.0.3

### Patch Changes

- Remove ipfs-core as it uses an uneeded esm module that breaks ui

## 2.0.2

### Patch Changes

- Move changeset to dev deps

## 2.0.1

### Patch Changes

- Clean deps

## 2.0.0

### Major Changes

- 6ccec9a: alpha 1
- 09afc38: Alpha release candidate 1 of sdk v2
