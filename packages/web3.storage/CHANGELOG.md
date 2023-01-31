# @zeitgeistpm/web3.storage

## 2.5.0

### Minor Changes

- a3dd51d: - The raw `sdk.indexer` and `sdk.api` instances can now be found directly on the sdk at top level(based on the context when created), and does not need to be refered through `sdk.context`
  - ´fromCompositeIndexerAssetId´ method renamed to `parseAssetId`
  - `sdk.asRpc()` and `sdk.asIndexer()` has been removed, use `isRpcSdk(sdk)` and `isIndexedSdk(sdk)` respectively.
  - `baseAsset` parameter added market creation parameter used in `sdk.model.markets.create`
  - `sdk.model.markets.get` should now correctly return a promise compliant value. Will most likely be an `AEither` in the future that can also be awaited as per the Promise spec.

### Patch Changes

- Updated dependencies [a3dd51d]
  - @zeitgeistpm/utility@2.9.0

## 2.4.1

### Patch Changes

- b0c646c: Put default exports last in utility package exports.
- Updated dependencies [b0c646c]
  - @zeitgeistpm/utility@2.7.1

## 2.4.0

### Minor Changes

- a3b45d8: Type changes.

### Patch Changes

- Updated dependencies [a3b45d8]
  - @zeitgeistpm/utility@2.7.0

## 2.3.0

### Minor Changes

- 5954781: Improved module exports in package jsons.

### Patch Changes

- Updated dependencies [5954781]
  - @zeitgeistpm/utility@2.6.0

## 2.2.1

### Patch Changes

- 2aa3bed: Peer deps
- Updated dependencies [2aa3bed]
  - @zeitgeistpm/utility@2.3.1

## 2.2.0

### Minor Changes

- 2550453: Use decimal.js instead of bignumber.js

### Patch Changes

- Updated dependencies [2550453]
  - @zeitgeistpm/utility@2.2.0

## 2.1.2

### Patch Changes

- eb05e05: asd
- Updated dependencies [eb05e05]
  - @zeitgeistpm/utility@2.1.4

## 2.1.1

### Patch Changes

- d1697f7: Fix create$ to propely combine configs in the stream
- Updated dependencies [d1697f7]
  - @zeitgeistpm/utility@2.1.1

## 2.1.0

### Minor Changes

- Refactor to rollup build and use .mjs files

### Patch Changes

- Updated dependencies
  - @zeitgeistpm/utility@2.1.0

## 2.0.44

### Patch Changes

- Put polkadot pacakges as peer dependencies
- Updated dependencies
  - @zeitgeistpm/utility@2.0.36

## 2.0.43

### Patch Changes

- Add teardown logic to sdk observable created in Sdk#create$
- Updated dependencies
  - @zeitgeistpm/utility@2.0.35

## 2.0.42

### Patch Changes

- remove main field in storage json
- Updated dependencies
  - @zeitgeistpm/utility@2.0.34

## 2.0.41

### Patch Changes

- y
- Updated dependencies
  - @zeitgeistpm/utility@2.0.33

## 2.0.40

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/utility@2.0.32

## 2.0.39

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/utility@2.0.31

## 2.0.38

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/utility@2.0.30

## 2.0.37

### Patch Changes

- bignumber alias as .js in module name seems to interfere
- Updated dependencies
  - @zeitgeistpm/utility@2.0.30

## 2.0.36

### Patch Changes

- use tsup to build
- Updated dependencies
  - @zeitgeistpm/utility@2.0.30

## 2.0.25

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/utility@2.0.19

## 2.0.24

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/utility@2.0.18

## 2.0.23

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/utility@2.0.17

## 2.0.22

### Patch Changes

- import ipfs absolute path

## 2.0.21

### Patch Changes

- commonjs
- Updated dependencies
  - @zeitgeistpm/utility@2.0.16

## 2.0.20

### Patch Changes

- asd
- Updated dependencies
  - @zeitgeistpm/utility@2.0.13

## 2.0.19

### Patch Changes

- export module field
- Updated dependencies
  - @zeitgeistpm/utility@2.0.12

## 2.0.18

### Patch Changes

- deps
- Updated dependencies
  - @zeitgeistpm/utility@2.0.11

## 2.0.17

### Patch Changes

- esm
- Updated dependencies
  - @zeitgeistpm/utility@2.0.10

## 2.0.16

### Patch Changes

- asd

## 2.0.15

### Patch Changes

- asd

## 2.0.14

### Patch Changes

- asd

## 2.0.13

### Patch Changes

- asdk

## 2.0.12

### Patch Changes

- asd

## 2.0.11

### Patch Changes

- asd

## 2.0.10

### Patch Changes

- ipfs

## 2.0.9

### Patch Changes

- Commonjs
- Updated dependencies
  - @zeitgeistpm/utility@2.0.9

## 2.0.8

### Patch Changes

- b212eae: Use esm and export "module" in package jsons
- Updated dependencies [b212eae]
  - @zeitgeistpm/utility@2.0.8

## 2.0.6

### Patch Changes

- work
- Updated dependencies
  - @zeitgeistpm/utility@2.0.7

## 2.0.6

### Patch Changes

- 272d738: Set correct local dep versions
- Updated dependencies [272d738]
  - @zeitgeistpm/utility@2.0.6

## 2.0.5

### Patch Changes

- Commonjs
- Updated dependencies
  - @zeitgeistpm/utility@2.0.5

## 2.0.4

### Patch Changes

- Use commonjs for now
- Updated dependencies
  - @zeitgeistpm/utility@2.0.4

## 2.0.3

### Patch Changes

- Remove ipfs-core as it uses an uneeded esm module that breaks ui
- Updated dependencies
  - @zeitgeistpm/utility@2.0.3

## 2.0.2

### Patch Changes

- Move changeset to dev deps
- Updated dependencies
  - @zeitgeistpm/utility@2.0.2

## 2.0.1

### Patch Changes

- Clean deps
- Updated dependencies
  - @zeitgeistpm/utility@2.0.1

## 2.0.0

### Major Changes

- 6ccec9a: alpha 1
- 09afc38: Alpha release candidate 1 of sdk v2

### Patch Changes

- Updated dependencies [6ccec9a]
- Updated dependencies [09afc38]
  - @zeitgeistpm/utility@2.0.0
