---
'@zeitgeistpm/augment-api': minor
'@zeitgeistpm/indexer': minor
'@zeitgeistpm/rpc': minor
'@zeitgeistpm/sdk': minor
'@zeitgeistpm/utility': minor
'@zeitgeistpm/web3.storage': minor
---

- The raw `sdk.indexer` and `sdk.api` instances can now be found directly on the sdk at top level(based on the context when created), and does not need to be refered through `sdk.context`- ´fromCompositeIndexerAssetId´ method renamed to `parseAssetId`- `sdk.asRpc()` and `sdk.asIndexer()` has been removed, use `isRpcSdk(sdk)` and `isIndexedSdk(sdk)` respectively.- `baseAsset` parameter added market creation parameter used in `sdk.model.markets.create`- `sdk.model.markets.get` should now correctly return a promise compliant value. Will most likely be an `AEither` in the future that can also be awaited as per the Promise spec.
