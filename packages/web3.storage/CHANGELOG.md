# @zeitgeistpm/web3.storage

## 4.2.0

### Minor Changes

- 2180f39: Remove typesSpec from rpc

### Patch Changes

- Updated dependencies [2180f39]
  - @zeitgeistpm/utility@4.2.0

## 4.1.0

### Minor Changes

- ebb423e: Adapt to incoming changes from specVersion:60

### Patch Changes

- Updated dependencies [ebb423e]
  - @zeitgeistpm/utility@4.1.0

## 4.0.0

### Major Changes

- 3098107: Adapt to incoming changes from specVersion:60

### Patch Changes

- Updated dependencies [3098107]
  - @zeitgeistpm/utility@4.0.0

## 3.7.0

### Minor Changes

- 35b86b6f: Remove Lmsr scoring rule and add AmmCdaHybrid

### Patch Changes

- Updated dependencies [35b86b6f]
  - @zeitgeistpm/utility@3.7.0

## 3.6.3

### Patch Changes

- 63733086: Fix market id saturation when creating market.
- Updated dependencies [63733086]
  - @zeitgeistpm/utility@3.6.3

## 3.6.2

### Patch Changes

- 08d61e4f: Minor changes
- Updated dependencies [08d61e4f]
  - @zeitgeistpm/utility@3.6.2

## 3.6.1

### Patch Changes

- f9530a5f: Include more assets types as viabl fee paying assets in market creation
- Updated dependencies [f9530a5f]
  - @zeitgeistpm/utility@3.6.1

## 3.6.0

### Minor Changes

- 22ea2c42: Refactor AssetId and affected methods by the asset class refactor. Generate new types.

### Patch Changes

- Updated dependencies [22ea2c42]
  - @zeitgeistpm/utility@3.6.0

## 3.5.0

### Minor Changes

- d88be3a: Added `historicalOrders` query to the indexer and changed some occurences of order being `orderBy` in the params.

### Patch Changes

- Updated dependencies [d88be3a]
  - @zeitgeistpm/utility@3.5.0

## 3.4.2

### Patch Changes

- db508c3: Improve package json exports
- Updated dependencies [db508c3]
  - @zeitgeistpm/utility@3.4.1

## 3.4.1

### Patch Changes

- 5d62dfb: Implement api for custom transaction signer on market create.

## 3.4.0

### Minor Changes

- 2ea4e5d: Mainnet release.

### Patch Changes

- Updated dependencies [2ea4e5d]
  - @zeitgeistpm/utility@3.4.0

## 3.3.0

### Minor Changes

- 5a2b5d0: Implement in memory metadata storage module.

### Patch Changes

- Updated dependencies [5a2b5d0]
  - @zeitgeistpm/utility@3.3.0

## 3.2.3

### Patch Changes

- 7e5fd7b: Enable setting ipfs api and gateway root url in storage creators.
- Updated dependencies [7e5fd7b]
  - @zeitgeistpm/utility@3.2.3

## 3.2.2

### Patch Changes

- 4e6700d: Use official zeitgeist IPFS api in sdk config helpers.
- Updated dependencies [4e6700d]
  - @zeitgeistpm/utility@3.2.2

## 3.2.1

### Patch Changes

- ff10741: Remove dry run of transactions for now since its not enabled on the node.
- Updated dependencies [ff10741]
  - @zeitgeistpm/utility@3.2.1

## 3.2.0

### Minor Changes

- 4245a15: Remove ability to delete metadata in storage, disable rolback on failed transaction, dry run create market extrinsic before pinning data.

### Patch Changes

- Updated dependencies [4245a15]
  - @zeitgeistpm/utility@3.2.0

## 3.1.1

### Patch Changes

- 4238402: Schema changes.
- Updated dependencies [4238402]
  - @zeitgeistpm/utility@3.1.1

## 3.1.0

### Minor Changes

- 96c3064: Shares manager and other gql schema changes

### Patch Changes

- Updated dependencies [96c3064]
  - @zeitgeistpm/utility@3.1.0

## 3.0.0

### Major Changes

- e12c3cf: Remove CPMM markets.

### Patch Changes

- Updated dependencies [e12c3cf]
  - @zeitgeistpm/utility@3.0.0

## 2.16.0

### Minor Changes

- f91b1b1: Release mainnet

### Patch Changes

- Updated dependencies [f91b1b1]
  - @zeitgeistpm/utility@2.25.0

## 2.15.0

### Minor Changes

- Mainnet release.

### Patch Changes

- Updated dependencies
  - @zeitgeistpm/utility@2.24.0

## 2.14.0

### Minor Changes

- 0872a93: Pool deployment changes in market creation params. Added support for lmsr.

### Patch Changes

- Updated dependencies [0872a93]
  - @zeitgeistpm/utility@2.23.0

## 2.13.0

### Minor Changes

- 940eadf: Bump

### Patch Changes

- Updated dependencies [940eadf]
  - @zeitgeistpm/utility@2.22.0

## 2.12.0

### Minor Changes

- 528b8aa: Revert runtime changes to current bsr. Improve build process so we can specify bsr or mainnet.

### Patch Changes

- Updated dependencies [528b8aa]
  - @zeitgeistpm/utility@2.21.0

## 2.11.0

### Minor Changes

- f48de0d: change

### Patch Changes

- Updated dependencies [f48de0d]
  - @zeitgeistpm/utility@2.20.0

## 2.10.0

### Minor Changes

- 1abbbaf: Staging beta release of new GQL schemas.

### Patch Changes

- Updated dependencies [1abbbaf]
  - @zeitgeistpm/utility@2.19.0

## 2.9.13

### Patch Changes

- bf2a3fa: Fix isWithPool to be false when pool key is undefined

## 2.9.12

### Patch Changes

- 979bddc: poolStatus to .status

## 2.9.11

### Patch Changes

- 77365d2: Fix

## 2.9.10

### Patch Changes

- 7586a91: Add calculateFees to market creation model.

## 2.9.9

### Patch Changes

- d690e08: Replace isMetaComplete with hasValidMetaCategories
- Updated dependencies [d690e08]
  - @zeitgeistpm/utility@2.18.13

## 2.9.8

### Patch Changes

- d4ee2ed: Unpin from node softly
- Updated dependencies [d4ee2ed]
  - @zeitgeistpm/utility@2.18.12

## 2.9.7

### Patch Changes

- 78e8b5d: Remove node pin fbefore cluster on del
- Updated dependencies [78e8b5d]
  - @zeitgeistpm/utility@2.18.11

## 2.9.6

### Patch Changes

- 3427623: Remove node pin if cluster adding fails
- Updated dependencies [3427623]
  - @zeitgeistpm/utility@2.18.10

## 2.9.5

### Patch Changes

- d683955: Fix ipfs port
- Updated dependencies [d683955]
  - @zeitgeistpm/utility@2.18.9

## 2.9.4

### Patch Changes

- 91f5176: Fix
- Updated dependencies [91f5176]
  - @zeitgeistpm/utility@2.18.8

## 2.9.3

### Patch Changes

- d2c9b04: static .is on StoragError
- Updated dependencies [d2c9b04]
  - @zeitgeistpm/utility@2.18.7

## 2.9.2

### Patch Changes

- ab26257: StorageErrors for ipfs
- Updated dependencies [ab26257]
  - @zeitgeistpm/utility@2.18.6

## 2.9.1

### Patch Changes

- 96ae13b: Fix retry ws provider bug.
- Updated dependencies [96ae13b]
  - @zeitgeistpm/utility@2.18.3

## 2.9.0

### Minor Changes

- d53b525: - Use native `Blob` for storage file encoding decoding.
  - All or handlers like `Either.unwrapOr|unleftOr` etc can return another type.
  - Implemented `unwrapOr` on either and async either that behaves the same as `unrightOr`

### Patch Changes

- Updated dependencies [d53b525]
  - @zeitgeistpm/utility@2.18.0

## 2.8.0

### Minor Changes

- 0f2ed92: Work

### Patch Changes

- Updated dependencies [0f2ed92]
  - @zeitgeistpm/utility@2.17.0

## 2.7.1

### Patch Changes

- 0a0e647: Use `crypto` instead of `node:crypto`

## 2.7.0

### Minor Changes

- d179ee9: fetchMetadata now works in indexed markets in rpc mode also.

### Patch Changes

- Updated dependencies [d179ee9]
  - @zeitgeistpm/utility@2.11.0

## 2.6.1

### Patch Changes

- 9db63fa: Some minor type changes.
- Updated dependencies [9db63fa]
  - @zeitgeistpm/utility@2.10.1

## 2.6.0

### Minor Changes

- 41e51f1: - Added helpers for swap fee and weights calculation. `evenWeights(x_number_of_outcomes)`, `weightsFromRelativeRatio([int_ratio, int_ratio, ...])` and `swapFeeFromFloat(percent)`
  - Changed the indexer gql market status type to correct enum.
  - Improved market creation and metadata storage.

### Patch Changes

- Updated dependencies [41e51f1]
  - @zeitgeistpm/utility@2.10.0

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
