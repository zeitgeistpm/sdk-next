import {
  AssetId,
  getIndexOf,
  IOCategoricalAssetId,
  IOMarketOutcomeAssetId,
  IOScalarAssetId,
  parseAssetId,
} from '@zeitgeistpm/sdk'

const categoricalAssetId: AssetId = parseAssetId({ CategoricalOutcome: [1, 2] }).unwrap()

if (IOCategoricalAssetId.is(categoricalAssetId)) {
  console.log(categoricalAssetId.CategoricalOutcome)
}

const scalarAssetId: AssetId = parseAssetId({ ScalarOutcome: [1, 'Short'] }).unwrap()

if (IOScalarAssetId.is(scalarAssetId)) {
  console.log(scalarAssetId.ScalarOutcome)
}

if (IOMarketOutcomeAssetId.is(categoricalAssetId)) {
  console.log(getIndexOf(categoricalAssetId))
}

if (IOMarketOutcomeAssetId.is(scalarAssetId)) {
  console.log(getIndexOf(scalarAssetId))
}
