import { literal, number, tuple, type, union, Infer } from 'superstruct'
import { IOMarketId } from './marketid'

/**
 * AssetId.
 * This type delinieates an asset at an index in a market pool.
 */
export type AssetId = Infer<typeof IOAssetId>
export type ScalarAssetId = Infer<typeof IOScalarAssetId>
export type CategoricalAssetId = Infer<typeof IOCategoricalAssetId>
export type ZtgAssetId = Infer<typeof IOZtgAssetId>
export type PoolShareAssetId = Infer<typeof IOPoolShareAssetId>

export type ScalarIndex = Infer<typeof IOScalarIndex>
export type CategoricalIndex = Infer<typeof IOCategoricalIndex>
export type ScalarPosition = Infer<typeof IOScalarPosition>

/**
 * Io types for the asset ids.
 * Usefull for decoding from a string or json object.
 */

export const IOScalarPosition = union([literal('Short'), literal('Long')])

export const IOCategoricalIndex = tuple([IOMarketId, number()])
export const IOScalarIndex = tuple([IOMarketId, IOScalarPosition])

export const IOCategoricalAssetId = type({
  CategoricalOutcome: IOCategoricalIndex,
})

export const IOScalarAssetId = type({
  ScalarOutcome: IOScalarIndex,
})

export const IOZtgAssetId = type({
  Ztg: literal(null),
})

export const IOPoolShareAssetId = type({
  PoolShare: number(),
})

export const IOAssetId = union([
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOZtgAssetId,
  IOPoolShareAssetId,
])

/**
 * Get asset index of a scalar asset, short being 0 and long being 1
 *
 * @param scalarAssetId ScalarAssetId
 * @returns number
 */
export const getScalarIndexOf = (scalarAssetId: ScalarAssetId): number =>
  scalarAssetId.ScalarOutcome[1] === 'Short' ? 0 : 1

/**
 * Get the asset index of an AssetId, will return index only for scalar and categorical assets.
 *
 * @param assetId AssetId
 * @returns number | null
 */
export const getIndexOf = (assetId: AssetId): number | null =>
  IOCategoricalAssetId.is(assetId)
    ? assetId.CategoricalOutcome[1]
    : IOScalarAssetId.is(assetId)
    ? getScalarIndexOf(assetId)
    : null
