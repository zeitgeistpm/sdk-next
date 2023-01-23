import type { ZeitgeistPrimitivesAsset } from '@polkadot/types/lookup'
import { isCodec } from '@polkadot/util'
import { camelcaseObjectKeys } from '@zeitgeistpm/utility/dist/object'
import * as O from '@zeitgeistpm/utility/dist/option'
import { Infer, literal, number, tuple, type, union } from 'superstruct'
import { IOMarketId, MarketId } from './marketid'

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

export const fromPrimitive = (asset: ZeitgeistPrimitivesAsset): AssetId => {
  if (asset.isCategoricalOutcome) {
    return {
      CategoricalOutcome: [
        asset.asCategoricalOutcome[0].toNumber() as MarketId,
        asset.asCategoricalOutcome[1].toNumber(),
      ],
    }
  } else if (asset.isScalarOutcome) {
    return {
      ScalarOutcome: [
        asset.asScalarOutcome[0].toNumber() as MarketId,
        asset.asScalarOutcome[1].type,
      ],
    }
  } else if (asset.isPoolShare) {
    return { PoolShare: asset.asPoolShare.toNumber() }
  }
  return { Ztg: null }
}

/**
 * Get the MarketId of a scalar or categorical asset id.
 *
 * @param assetId ScalarAssetId | CategoricalAssetId
 * @returns MarketId
 */
export const getMarketIdOf = (assetId: ScalarAssetId | CategoricalAssetId): MarketId =>
  IOScalarAssetId.is(assetId) ? assetId.ScalarOutcome[0] : assetId.CategoricalOutcome[0]

/**
 * Get asset index of a scalar asset, short being 0 and long being 1
 *
 * @param scalarAssetId ScalarAssetId
 * @returns number
 */
export const getScalarIndexOf = (scalarAssetId: ScalarAssetId): number =>
  scalarAssetId.ScalarOutcome[1] === 'Short' ? 1 : 0

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

/**
 * String id type used to identify assets in the indexer.
 */
export type CompositeIndexerAssetId = string & {
  readonly CompositeIndexerAssetId: unique symbol
}

/**
 *
 * @param assetId AssetId | ZeitgeistPrimitivesAsset
 * @returns
 */
export const toCompositeIndexerAssetId = (
  assetId: AssetId | ZeitgeistPrimitivesAsset,
): CompositeIndexerAssetId => {
  return JSON.stringify(
    camelcaseObjectKeys(
      isCodec(assetId) ? fromPrimitive(assetId as ZeitgeistPrimitivesAsset) : assetId,
    ),
  ) as CompositeIndexerAssetId
}

/**
 * Convert a indexer asset id to an AssetId.
 *
 * @param raw CompositeIndexerAssetId | string
 * @returns O.IOption<AssetId>
 */
export const fromCompositeIndexerAssetId = (
  raw: CompositeIndexerAssetId | string | object,
): O.IOption<AssetId> => {
  if (typeof raw === 'string' && raw.toLowerCase() === 'ztg') {
    return O.option(
      O.some({
        Ztg: null,
      } as AssetId),
    )
  }

  const parsed = O.tryCatch(() => (typeof raw === 'object' ? raw : JSON.parse(raw)))
  if (O.isNone(parsed)) return parsed

  const obj = parsed.value
  let assetId: AssetId | null = null

  if ('categoricalOutcome' in obj) {
    assetId = {
      CategoricalOutcome: obj['categoricalOutcome'],
    } as AssetId
  }
  if ('scalarOutcome' in obj) {
    assetId = {
      ScalarOutcome: obj['scalarOutcome'],
    } as AssetId
  }
  if ('poolShare' in obj) {
    assetId = {
      PoolShare: obj['poolShare'],
    } as AssetId
  }

  return O.option(assetId ? O.some(assetId) : O.none())
}
