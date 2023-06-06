# @zeitgeistpm/rpc

## 2.7.2

### Patch Changes

- d683955: Fix ipfs port
- Updated dependencies [d683955]
  - @zeitgeistpm/utility@2.18.9

## 2.7.1

### Patch Changes

- 96ae13b: Fix retry ws provider bug.
- Updated dependencies [96ae13b]
  - @zeitgeistpm/augment-api@2.11.4
  - @zeitgeistpm/utility@2.18.3

## 2.7.0

### Minor Changes

- d179ee9: fetchMetadata now works in indexed markets in rpc mode also.

### Patch Changes

- Updated dependencies [d179ee9]
  - @zeitgeistpm/augment-api@2.10.0
  - @zeitgeistpm/utility@2.11.0

## 2.6.2

### Patch Changes

- 9db63fa: Some minor type changes.
- Updated dependencies [9db63fa]
  - @zeitgeistpm/augment-api@2.9.2
  - @zeitgeistpm/utility@2.10.1

## 2.6.1

### Patch Changes

- 124de44: Added some helper methods `getSwapFee`, `getAssetIds` and `getAssetBalance` to Pool
- Updated dependencies [124de44]
  - @zeitgeistpm/augment-api@2.9.1

## 2.6.0

### Minor Changes

- 41e51f1: - Added helpers for swap fee and weights calculation. `evenWeights(x_number_of_outcomes)`, `weightsFromRelativeRatio([int_ratio, int_ratio, ...])` and `swapFeeFromFloat(percent)`
  - Changed the indexer gql market status type to correct enum.
  - Improved market creation and metadata storage.

### Patch Changes

- Updated dependencies [41e51f1]
  - @zeitgeistpm/augment-api@2.9.0
  - @zeitgeistpm/utility@2.10.0

## 2.5.1

### Patch Changes

- 70085da: Added `bonds` to market data(rpc and indexed). And `rejectReason` to indexed markets only.
- Updated dependencies [70085da]
  - @zeitgeistpm/augment-api@2.8.1
  - @zeitgeistpm/utility@2.9.1

## 2.5.0

### Minor Changes

- a3dd51d: - The raw `sdk.indexer` and `sdk.api` instances can now be found directly on the sdk at top level(based on the context when created), and does not need to be refered through `sdk.context`
  - ´fromCompositeIndexerAssetId´ method renamed to `parseAssetId`
  - `sdk.asRpc()` and `sdk.asIndexer()` has been removed, use `isRpcSdk(sdk)` and `isIndexedSdk(sdk)` respectively.
  - `baseAsset` parameter added market creation parameter used in `sdk.model.markets.create`
  - `sdk.model.markets.get` should now correctly return a promise compliant value. Will most likely be an `AEither` in the future that can also be awaited as per the Promise spec.

### Patch Changes

- Updated dependencies [a3dd51d]
  - @zeitgeistpm/augment-api@2.8.0
  - @zeitgeistpm/utility@2.9.0

## 2.4.1

### Patch Changes

- b0c646c: Put default exports last in utility package exports.
- Updated dependencies [b0c646c]
  - @zeitgeistpm/augment-api@2.7.1
  - @zeitgeistpm/utility@2.7.1

## 2.4.0

### Minor Changes

- a3b45d8: Type changes.

### Patch Changes

- Updated dependencies [a3b45d8]
  - @zeitgeistpm/augment-api@2.7.0
  - @zeitgeistpm/utility@2.7.0

## 2.3.0

### Minor Changes

- 5954781: Improved module exports in package jsons.

### Patch Changes

- Updated dependencies [5954781]
  - @zeitgeistpm/augment-api@2.6.0
  - @zeitgeistpm/utility@2.6.0

## 2.2.5

### Patch Changes

- 03d1351: Add retracted hook to transaction calls.

## 2.2.4

### Patch Changes

- c006781: added transactionErrorToString method.

## 2.2.3

### Patch Changes

- 98fe20f: Fix transaction hook type
- Updated dependencies [98fe20f]
  - @zeitgeistpm/utility@2.3.6

## 2.2.2

### Patch Changes

- bfde4af: Add transaction hooks to transaction methods to hook into for example when the transaction is in block.
- Updated dependencies [bfde4af]
  - @zeitgeistpm/utility@2.3.5

## 2.2.1

### Patch Changes

- 2aa3bed: Peer deps
- Updated dependencies [2aa3bed]
  - @zeitgeistpm/augment-api@2.2.2
  - @zeitgeistpm/utility@2.3.1

## 2.2.0

### Minor Changes

- 2550453: Use decimal.js instead of bignumber.js

### Patch Changes

- Updated dependencies [2550453]
  - @zeitgeistpm/augment-api@2.2.0
  - @zeitgeistpm/utility@2.2.0

## 2.1.3

### Patch Changes

- eb05e05: asd
- Updated dependencies [eb05e05]
  - @zeitgeistpm/augment-api@2.1.2
  - @zeitgeistpm/utility@2.1.4

## 2.1.2

### Patch Changes

- 5777b2e: Query pagination must be fully defined or missing.
- Updated dependencies [5777b2e]
  - @zeitgeistpm/utility@2.1.3

## 2.1.1

### Patch Changes

- d1697f7: Fix create$ to propely combine configs in the stream
- Updated dependencies [d1697f7]
  - @zeitgeistpm/augment-api@2.1.1
  - @zeitgeistpm/utility@2.1.1

## 2.1.0

### Minor Changes

- Refactor to rollup build and use .mjs files

### Patch Changes

- Updated dependencies
  - @zeitgeistpm/augment-api@2.1.0
  - @zeitgeistpm/utility@2.1.0

## 2.0.36

### Patch Changes

- Dont import augmented polkadot types by default.
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.36
  - @zeitgeistpm/utility@2.0.37

## 2.0.35

### Patch Changes

- Put polkadot pacakges as peer dependencies
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.35
  - @zeitgeistpm/utility@2.0.36

## 2.0.34

### Patch Changes

- Add teardown logic to sdk observable created in Sdk#create$
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.34
  - @zeitgeistpm/utility@2.0.35

## 2.0.33

### Patch Changes

- y
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.33
  - @zeitgeistpm/utility@2.0.33

## 2.0.32

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.32
  - @zeitgeistpm/utility@2.0.32

## 2.0.31

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.31
  - @zeitgeistpm/utility@2.0.31

## 2.0.30

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.30
  - @zeitgeistpm/utility@2.0.30

## 2.0.29

### Patch Changes

- bignumber alias as .js in module name seems to interfere
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.29
  - @zeitgeistpm/utility@2.0.30

## 2.0.28

### Patch Changes

- use tsup to build
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.28
  - @zeitgeistpm/utility@2.0.30

## 2.0.17

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.17

## 2.0.16

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.16

## 2.0.15

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.15

## 2.0.14

### Patch Changes

- commonjs
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.14

## 2.0.13

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.13

## 2.0.12

### Patch Changes

- export module field
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.12

## 2.0.11

### Patch Changes

- deps
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.11

## 2.0.10

### Patch Changes

- esm
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.10

## 2.0.9

### Patch Changes

- Commonjs
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.9

## 2.0.8

### Patch Changes

- b212eae: Use esm and export "module" in package jsons
- Updated dependencies [b212eae]
  - @zeitgeistpm/augment-api@2.0.8

## 2.0.7

### Patch Changes

- work
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.7

## 2.0.6

### Patch Changes

- 272d738: Set correct local dep versions
- Updated dependencies [272d738]
  - @zeitgeistpm/augment-api@2.0.6

## 2.0.5

### Patch Changes

- Commonjs
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.5

## 2.0.4

### Patch Changes

- Use commonjs for now
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.4

## 2.0.3

### Patch Changes

- Remove ipfs-core as it uses an uneeded esm module that breaks ui
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.3

## 2.0.2

### Patch Changes

- Move changeset to dev deps
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.2

## 2.0.1

### Patch Changes

- Clean deps
- Updated dependencies
  - @zeitgeistpm/augment-api@2.0.1

## 2.0.0

### Major Changes

- 6ccec9a: alpha 1
- 09afc38: Alpha release candidate 1 of sdk v2

### Patch Changes

- Updated dependencies [6ccec9a]
- Updated dependencies [09afc38]
  - @zeitgeistpm/augment-api@2.0.0
