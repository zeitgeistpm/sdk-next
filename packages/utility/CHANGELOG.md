# @zeitgeistpm/utility

## 4.2.0

### Minor Changes

- 2180f39: Remove typesSpec from rpc

## 4.1.0

### Minor Changes

- ebb423e: Adapt to incoming changes from specVersion:60

## 4.0.0

### Major Changes

- 3098107: Adapt to incoming changes from specVersion:60

## 3.7.0

### Minor Changes

- 35b86b6f: Remove Lmsr scoring rule and add AmmCdaHybrid

## 3.6.3

### Patch Changes

- 63733086: Fix market id saturation when creating market.

## 3.6.2

### Patch Changes

- 08d61e4f: Minor changes

## 3.6.1

### Patch Changes

- f9530a5f: Include more assets types as viabl fee paying assets in market creation

## 3.6.0

### Minor Changes

- 22ea2c42: Refactor AssetId and affected methods by the asset class refactor. Generate new types.

## 3.5.0

### Minor Changes

- d88be3a: Added `historicalOrders` query to the indexer and changed some occurences of order being `orderBy` in the params.

## 3.4.1

### Patch Changes

- db508c3: Improve package json exports

## 3.4.0

### Minor Changes

- 2ea4e5d: Mainnet release.

## 3.3.0

### Minor Changes

- 5a2b5d0: Implement in memory metadata storage module.

## 3.2.3

### Patch Changes

- 7e5fd7b: Enable setting ipfs api and gateway root url in storage creators.

## 3.2.2

### Patch Changes

- 4e6700d: Use official zeitgeist IPFS api in sdk config helpers.

## 3.2.1

### Patch Changes

- ff10741: Remove dry run of transactions for now since its not enabled on the node.

## 3.2.0

### Minor Changes

- 4245a15: Remove ability to delete metadata in storage, disable rolback on failed transaction, dry run create market extrinsic before pinning data.

## 3.1.1

### Patch Changes

- 4238402: Schema changes.

## 3.1.0

### Minor Changes

- 96c3064: Shares manager and other gql schema changes

## 3.0.0

### Major Changes

- e12c3cf: Remove CPMM markets.

## 2.25.0

### Minor Changes

- f91b1b1: Release mainnet

## 2.24.2

### Patch Changes

- cf074b1: Fix market create proxy type

## 2.24.1

### Patch Changes

- 25dc9b8: Bump

## 2.24.0

### Minor Changes

- Mainnet release.

## 2.23.0

### Minor Changes

- 0872a93: Pool deployment changes in market creation params. Added support for lmsr.

## 2.22.0

### Minor Changes

- 940eadf: Bump

## 2.21.0

### Minor Changes

- 528b8aa: Revert runtime changes to current bsr. Improve build process so we can specify bsr or mainnet.

## 2.20.0

### Minor Changes

- f48de0d: change

## 2.19.1

### Patch Changes

- ade08e5: Add extrinsic info to `historicalSwaps`

## 2.19.0

### Minor Changes

- 1abbbaf: Staging beta release of new GQL schemas.

## 2.18.13

### Patch Changes

- d690e08: Replace isMetaComplete with hasValidMetaCategories

## 2.18.12

### Patch Changes

- d4ee2ed: Unpin from node softly

## 2.18.11

### Patch Changes

- 78e8b5d: Remove node pin fbefore cluster on del

## 2.18.10

### Patch Changes

- 3427623: Remove node pin if cluster adding fails

## 2.18.9

### Patch Changes

- d683955: Fix ipfs port

## 2.18.8

### Patch Changes

- 91f5176: Fix

## 2.18.7

### Patch Changes

- d2c9b04: static .is on StoragError

## 2.18.6

### Patch Changes

- ab26257: StorageErrors for ipfs

## 2.18.5

### Patch Changes

- d7311ef: Scalar market type now supports [string, string] in case of big numbers.

## 2.18.4

### Patch Changes

- 1be031c: Update Duration type to accept camelcase

## 2.18.3

### Patch Changes

- 96ae13b: Fix retry ws provider bug.

## 2.18.2

### Patch Changes

- ab01524: Utility type `Unpacked<T>` can now unpack `Set<T>` generic types.

## 2.18.1

### Patch Changes

- a855edf: Add `isMetaComplete` to Market GQL schema

## 2.18.0

### Minor Changes

- d53b525: - Use native `Blob` for storage file encoding decoding.
  - All or handlers like `Either.unwrapOr|unleftOr` etc can return another type.
  - Implemented `unwrapOr` on either and async either that behaves the same as `unrightOr`

## 2.17.0

### Minor Changes

- 0f2ed92: Work

## 2.16.0

### Minor Changes

- 9975958: Metadata#img passed to models.market.create can now be a File | ArrayBuffer | Blob | AwaitIterable | ReadableStream

## 2.15.0

### Minor Changes

- 48e8ea3: - Introduced the `IOBaseAssetId` and support for it in `parseAssetId`
  - Added utility `getBaseAsset(pool)` for getting the base asset of a pool.
  - Full and Rpc sdk now exposes `sdk.storage.data.get|set|del` for storing, reading and deleting arbitrary data(IPFS)

## 2.14.0

### Minor Changes

- 7c64b3e: isRpcSdk and isIndexerSdk now handles undefined values

## 2.13.0

### Minor Changes

- 80267c9: poolId removed from indexed Asset, use `asset.pool.poolId` instead.

## 2.12.0

### Minor Changes

- 90739fa: Removed the `NA` type in favour of null

## 2.11.0

### Minor Changes

- d179ee9: fetchMetadata now works in indexed markets in rpc mode also.

## 2.10.1

### Patch Changes

- 9db63fa: Some minor type changes.

## 2.10.0

### Minor Changes

- 41e51f1: - Added helpers for swap fee and weights calculation. `evenWeights(x_number_of_outcomes)`, `weightsFromRelativeRatio([int_ratio, int_ratio, ...])` and `swapFeeFromFloat(percent)`
  - Changed the indexer gql market status type to correct enum.
  - Improved market creation and metadata storage.

## 2.9.1

### Patch Changes

- 70085da: Added `bonds` to market data(rpc and indexed). And `rejectReason` to indexed markets only.

## 2.9.0

### Minor Changes

- a3dd51d: - The raw `sdk.indexer` and `sdk.api` instances can now be found directly on the sdk at top level(based on the context when created), and does not need to be refered through `sdk.context`
  - ´fromCompositeIndexerAssetId´ method renamed to `parseAssetId`
  - `sdk.asRpc()` and `sdk.asIndexer()` has been removed, use `isRpcSdk(sdk)` and `isIndexedSdk(sdk)` respectively.
  - `baseAsset` parameter added market creation parameter used in `sdk.model.markets.create`
  - `sdk.model.markets.get` should now correctly return a promise compliant value. Will most likely be an `AEither` in the future that can also be awaited as per the Promise spec.

## 2.8.1

### Patch Changes

- f31c341: Added failover to subscan fetching in fetchZTGInfo if Coingecko fails

## 2.8.0

### Minor Changes

- 5abcec4: Added getMarketStage to models Market and updated market indexed marketType scalar being array and not string.

## 2.7.1

### Patch Changes

- b0c646c: Put default exports last in utility package exports.

## 2.7.0

### Minor Changes

- a3b45d8: Type changes.

## 2.6.0

### Minor Changes

- 5954781: Improved module exports in package jsons.

## 2.5.1

### Patch Changes

- cb14392: Able to pass current now to projectEndTimestamp

## 2.5.0

### Minor Changes

- ca8f1d3: Added toCompositeIndexerAssetId to help identify asset ids in the indexer.

## 2.4.2

### Patch Changes

- e18895c: parse ztg asset ids when looking for weight

## 2.4.1

### Patch Changes

- 1379ad3: Added method getAssetWeight to get asset weight of pool by an AssetId.

## 2.4.0

### Minor Changes

- f6c109d: Pool is now available on indexed market. `market.poolId` as been removed and function to `getPoolId` for market has been introduced.

## 2.3.7

### Patch Changes

- 09455b3: Option unwrap should return null | A.

## 2.3.6

### Patch Changes

- 98fe20f: Fix transaction hook type

## 2.3.5

### Patch Changes

- bfde4af: Add transaction hooks to transaction methods to hook into for example when the transaction is in block.

## 2.3.4

### Patch Changes

- e5a8740: add asEither method for AEither for more fine error grained handling

## 2.3.3

### Patch Changes

- 0660cc9: add isAvailable typeugard utility.

## 2.3.2

### Patch Changes

- f101815: Fix asMs not imported.

## 2.3.1

### Patch Changes

- 2aa3bed: Peer deps

## 2.3.0

### Minor Changes

- ea4c1a4: Add time model to sdk and move time utility functions to utility package

## 2.2.0

### Minor Changes

- 2550453: Use decimal.js instead of bignumber.js

## 2.1.4

### Patch Changes

- eb05e05: asd

## 2.1.3

### Patch Changes

- 5777b2e: Query pagination must be fully defined or missing.

## 2.1.2

### Patch Changes

- 26b00bc: Add method to fetch ztg price info from coingecko

## 2.1.1

### Patch Changes

- d1697f7: Fix create$ to propely combine configs in the stream

## 2.1.0

### Minor Changes

- Refactor to rollup build and use .mjs files

## 2.0.37

### Patch Changes

- Dont import augmented polkadot types by default.

## 2.0.36

### Patch Changes

- Put polkadot pacakges as peer dependencies

## 2.0.35

### Patch Changes

- Add teardown logic to sdk observable created in Sdk#create$

## 2.0.34

### Patch Changes

- remove main field in storage json

## 2.0.33

### Patch Changes

- y

## 2.0.32

### Patch Changes

- asd

## 2.0.31

### Patch Changes

- asd

## 2.0.30

### Patch Changes

- asd

## 2.0.30

### Patch Changes

- bignumber alias as .js in module name seems to interfere

## 2.0.30

### Patch Changes

- use tsup to build

## 2.0.19

### Patch Changes

- asd

## 2.0.18

### Patch Changes

- asd

## 2.0.17

### Patch Changes

- asd

## 2.0.16

### Patch Changes

- commonjs

## 2.0.15

### Patch Changes

- bignumber import

## 2.0.14

### Patch Changes

- bignumber import

## 2.0.13

### Patch Changes

- asd

## 2.0.12

### Patch Changes

- export module field

## 2.0.11

### Patch Changes

- deps

## 2.0.10

### Patch Changes

- esm

## 2.0.9

### Patch Changes

- Commonjs

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
