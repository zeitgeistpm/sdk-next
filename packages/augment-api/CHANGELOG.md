# @zeitgeistpm/augment-api

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

## 3.6.4

### Patch Changes

- d44a28b0: Possible fix for the fee paying asset type.

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

## 3.5.1

### Patch Changes

- e1ea399: Include \_\_typename on all indexer queries.

## 3.5.0

### Minor Changes

- d88be3a: Added `historicalOrders` query to the indexer and changed some occurences of order being `orderBy` in the params.

## 3.4.2

### Patch Changes

- db508c3: Improve package json exports

## 3.4.1

### Patch Changes

- 5d62dfb: Implement api for custom transaction signer on market create.

## 3.4.0

### Minor Changes

- 2ea4e5d: Mainnet release.

## 3.3.0

### Minor Changes

- 5a2b5d0: Implement in memory metadata storage module.

## 3.2.4

### Patch Changes

- db626c6: Include the Order gql query in the indexer SDK.

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

## 3.1.3

### Patch Changes

- 7f9d10f: Reject on dispatch errors

## 3.1.2

### Patch Changes

- a559197: Schema changes

## 3.1.1

### Patch Changes

- 4238402: Schema changes.

## 3.1.0

### Minor Changes

- 96c3064: Shares manager and other gql schema changes

## 3.0.0

### Major Changes

- e12c3cf: Remove CPMM markets.

## 2.26.0

### Minor Changes

- f91b1b1: Release mainnet

## 2.25.2

### Patch Changes

- cf074b1: Fix market create proxy type

## 2.25.1

### Patch Changes

- 25dc9b8: Bump

## 2.25.0

### Minor Changes

- e365fde: GQL schema changes

## 2.24.0

### Minor Changes

- 24f3fa1: GQL changes: added assetPrice query to indexer, added dispute to market schema, added volume to neoPool

## 2.23.1

### Patch Changes

- c200603: Added .assets to FullMarketFragment

## 2.23.0

### Minor Changes

- 5784119: Added NeoSwaps NeoPool schema to indexer.

## 2.22.0

### Minor Changes

- 711f114: Stronger typing of ScoringRule.

### Patch Changes

- 6b9e853: Stronger typing of ScoringRule

## 2.21.0

### Minor Changes

- Mainnet release.

## 2.20.0

### Minor Changes

- 0872a93: Pool deployment changes in market creation params. Added support for lmsr.

## 2.19.0

### Minor Changes

- 940eadf: Bump

## 2.18.0

### Minor Changes

- 39dc4a2: New augmented api types. Scoring rule included.

## 2.17.0

### Minor Changes

- b6baa68: Reintroduce creatorFee and dispute changes.

## 2.16.0

### Minor Changes

- 528b8aa: Revert runtime changes to current bsr. Improve build process so we can specify bsr or mainnet.

## 2.15.0

### Minor Changes

- 6b0e276: Added creatorFee to market creation params. Market dispute only takes marketId now. Added generated types for XCM v3.

## 2.14.0

### Minor Changes

- f949a18: Signed extension removal

## 2.13.0

### Minor Changes

- f48de0d: change

## 2.12.2

### Patch Changes

- d7288af: change

## 2.12.1

### Patch Changes

- be1caf6: changes

## 2.12.0

### Minor Changes

- 1abbbaf: Staging beta release of new GQL schemas.

## 2.11.5

### Patch Changes

- bf2a3fa: Fix isWithPool to be false when pool key is undefined

## 2.11.4

### Patch Changes

- 96ae13b: Fix retry ws provider bug.

## 2.11.3

### Patch Changes

- eb03b93: Fix remaining time issue on getStage used on indexed markets without deadlines set.

## 2.11.2

### Patch Changes

- 0ffd0c6: Remove console log

## 2.11.1

### Patch Changes

- 8d88958: Fix assets.pool

## 2.11.0

### Minor Changes

- 80267c9: poolId removed from indexed Asset, use `asset.pool.poolId` instead.

## 2.10.0

### Minor Changes

- d179ee9: fetchMetadata now works in indexed markets in rpc mode also.

## 2.9.2

### Patch Changes

- 9db63fa: Some minor type changes.

## 2.9.1

### Patch Changes

- 124de44: Added some helper methods `getSwapFee`, `getAssetIds` and `getAssetBalance` to Pool

## 2.9.0

### Minor Changes

- 41e51f1: - Added helpers for swap fee and weights calculation. `evenWeights(x_number_of_outcomes)`, `weightsFromRelativeRatio([int_ratio, int_ratio, ...])` and `swapFeeFromFloat(percent)`
  - Changed the indexer gql market status type to correct enum.
  - Improved market creation and metadata storage.

## 2.8.1

### Patch Changes

- 70085da: Added `bonds` to market data(rpc and indexed). And `rejectReason` to indexed markets only.

## 2.8.0

### Minor Changes

- a3dd51d: - The raw `sdk.indexer` and `sdk.api` instances can now be found directly on the sdk at top level(based on the context when created), and does not need to be refered through `sdk.context`
  - ´fromCompositeIndexerAssetId´ method renamed to `parseAssetId`
  - `sdk.asRpc()` and `sdk.asIndexer()` has been removed, use `isRpcSdk(sdk)` and `isIndexedSdk(sdk)` respectively.
  - `baseAsset` parameter added market creation parameter used in `sdk.model.markets.create`
  - `sdk.model.markets.get` should now correctly return a promise compliant value. Will most likely be an `AEither` in the future that can also be awaited as per the Promise spec.

## 2.7.1

### Patch Changes

- b0c646c: Put default exports last in utility package exports.

## 2.7.0

### Minor Changes

- a3b45d8: Type changes.

## 2.6.0

### Minor Changes

- 5954781: Improved module exports in package jsons.

## 2.5.0

### Minor Changes

- ca8f1d3: Added toCompositeIndexerAssetId to help identify asset ids in the indexer.

## 2.4.0

### Minor Changes

- 2b5e3dd: Add toString on NA, and augment api changes.

## 2.3.0

### Minor Changes

- fa828f6: Update `api.rpc.swaps.getSpotPrice` params.

## 2.2.2

### Patch Changes

- 2aa3bed: Peer deps

## 2.2.1

### Patch Changes

- 6126566: Add deadlines to market, export src from augment-api

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

- Dont import augmented polkadot types by default.

## 2.0.35

### Patch Changes

- Put polkadot pacakges as peer dependencies

## 2.0.34

### Patch Changes

- Add teardown logic to sdk observable created in Sdk#create$

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

## 2.0.29

### Patch Changes

- bignumber alias as .js in module name seems to interfere

## 2.0.28

### Patch Changes

- use tsup to build

## 2.0.17

### Patch Changes

- asd

## 2.0.16

### Patch Changes

- asd

## 2.0.15

### Patch Changes

- asd

## 2.0.14

### Patch Changes

- commonjs

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
