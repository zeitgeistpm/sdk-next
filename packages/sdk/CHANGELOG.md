# @zeitgeistpm/sdk

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
