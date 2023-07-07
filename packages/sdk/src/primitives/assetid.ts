import type { ZeitgeistPrimitivesAsset } from '@polkadot/types/lookup'
import { isCodec } from '@polkadot/util'
import * as E from '@zeitgeistpm/utility/dist/either'
import { upperFirstObjectKeys } from '@zeitgeistpm/utility/dist/object'
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
export type PoolShareAssetId = Infer<typeof IOPoolShareAssetId>
export type ZtgAssetId = Infer<typeof IOZtgAssetId>
export type ForeignAssetId = Infer<typeof IOForeignAssetId>
export type BaseAssetId = Infer<typeof IOBaseAssetId>

export type MarketOutcomeAssetId = Infer<typeof IOMarketOutcomeAssetId>

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

export const IOMarketOutcomeAssetId = union([IOCategoricalAssetId, IOScalarAssetId])

export const IOPoolShareAssetId = type({
  PoolShare: number(),
})

export const IOZtgAssetId = type({
  Ztg: literal(null),
})

export const IOForeignAssetId = type({
  ForeignAsset: number(),
})

export const IOBaseAssetId = union([IOZtgAssetId, IOForeignAssetId])

export const IOAssetId = union([
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOPoolShareAssetId,
  IOBaseAssetId,
])

export const fromPrimitive = (
  asset: ZeitgeistPrimitivesAsset,
): E.IEither<Error, AssetId> => {
  let assetId: AssetId | undefined
  if (asset.isCategoricalOutcome) {
    assetId = {
      CategoricalOutcome: [
        asset.asCategoricalOutcome[0].toNumber() as MarketId,
        asset.asCategoricalOutcome[1].toNumber(),
      ],
    }
  } else if (asset.isScalarOutcome) {
    assetId = {
      ScalarOutcome: [
        asset.asScalarOutcome[0].toNumber() as MarketId,
        asset.asScalarOutcome[1].type,
      ],
    }
  } else if (asset.isPoolShare) {
    assetId = { PoolShare: asset.asPoolShare.toNumber() }
  } else if (asset.isForeignAsset) {
    assetId = { ForeignAsset: asset.asForeignAsset.toNumber() }
  } else if (asset.isZtg) {
    assetId = { Ztg: null }
  }

  if (assetId) {
    return E.either(E.right(assetId))
  }

  return E.either(E.left(new Error('Invalid asset id codec passed')))
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
 * Get asset index of a scalar asset, short being 1 and long being 0
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
export const getIndexOf = (assetId: MarketOutcomeAssetId): number => {
  if (IOCategoricalAssetId.is(assetId)) {
    return assetId.CategoricalOutcome[1]
  } else if (IOScalarAssetId.is(assetId)) {
    return getScalarIndexOf(assetId)
  }
  throw new Error("Can't get index of non market outcome asset id")
}

/**
 * Convert a indexer asset id string or object to an AssetId.
 *
 * @param raw object | string | ZeitgeistPrimitivesAsset
 * @returns E.IEither<SyntaxError, AssetId>
 */
export const parseAssetId = (
  raw: string | object | ZeitgeistPrimitivesAsset,
): E.IEither<SyntaxError, AssetId> => {
  if (isCodec(raw)) {
    return fromPrimitive(raw as ZeitgeistPrimitivesAsset)
  }

  if (typeof raw === 'string' && raw.toLowerCase() === 'ztg') {
    return E.either(
      E.right({
        Ztg: null,
      } as AssetId),
    )
  }

  const parsed = O.tryCatch(() => (typeof raw === 'object' ? raw : JSON.parse(raw)))

  if (O.isNone(parsed)) {
    return E.either(E.left(new SyntaxError('Invalid asset id json')))
  }

  const conformed: any = upperFirstObjectKeys(parsed.value)

  if (IOAssetId.is(conformed)) {
    return E.either(E.right(conformed))
  }

  return E.either(E.left(new SyntaxError('Invalid asset id structure')))
}
