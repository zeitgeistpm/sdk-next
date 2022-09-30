import { ZeitgeistPrimitivesAsset } from '@polkadot/types/lookup'
import { literal, number, tuple, type, union, Infer } from 'superstruct'

export type Asset = ZeitgeistPrimitivesAsset
export type ScalarPosition = Infer<typeof IOScalarPosition>
export type CategoricalIndex = Infer<typeof IOCategoricalIndex>
export type ScalarIndex = Infer<typeof IOScalarIndex>
export type CategoricalAssetId = Infer<typeof IOCategoricalAssetId>
export type ScalarAssetId = Infer<typeof IOScalarAssetId>
export type ZtgAssetId = Infer<typeof IOZtgAssetId>
export type PoolShareAssetId = Infer<typeof IOPoolShareAssetId>
export type AssetId = Infer<typeof IOAssetId>

export const IOScalarPosition = union([literal('Short'), literal('Long')])

export const IOCategoricalIndex = tuple([number(), number()])
export const IOScalarIndex = tuple([number(), IOScalarPosition])

export const IOCategoricalAssetId = type({
  categoricalOutcome: IOCategoricalIndex,
})

export const IOScalarAssetId = type({
  scalarOutcome: IOScalarIndex,
})

export const IOZtgAssetId = type({
  ztg: literal(null),
})

export const IOPoolShareAssetId = type({
  poolShare: number(),
})

export const IOAssetId = union([
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOZtgAssetId,
  IOPoolShareAssetId,
])

export const getScalarIndexOf = (scalarAssetId: ScalarAssetId): number =>
  scalarAssetId.scalarOutcome[1] == 'Short' ? 0 : 1

export const getIndexOf = (assetId: AssetId): number | null =>
  IOCategoricalAssetId.is(assetId)
    ? assetId.categoricalOutcome[1]
    : IOScalarAssetId.is(assetId)
    ? getScalarIndexOf(assetId)
    : null
