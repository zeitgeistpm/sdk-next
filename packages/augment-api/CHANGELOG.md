# @zeitgeistpm/augment-api

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
