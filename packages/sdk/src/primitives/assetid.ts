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
export type ZtgAssetId = Infer<typeof IOZtgAssetId>
export type PoolShareAssetId = Infer<typeof IOPoolShareAssetId>

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
 * Convert a indexer asset id string or object to an AssetId.
 *
 * TODO: should return an Either since parsing can fail. Users expect parsing to work, not working is an exception.
 *
 * @param raw object | string
 * @returns O.IOption<AssetId>
 */
export const parseAssetId = (
  raw: string | object | ZeitgeistPrimitivesAsset,
): E.IEither<SyntaxError, AssetId> => {
  if (isCodec(raw)) {
    return E.either(E.right(fromPrimitive(raw as ZeitgeistPrimitivesAsset)))
  }

  if (typeof raw === 'string' && raw.toLowerCase() === 'ztg') {
    return E.either(
      E.right({
        Ztg: null,
      } as AssetId),
    )
  }

  const parsed = O.tryCatch(() => (typeof raw === 'object' ? raw : JSON.parse(raw)))
  if (O.isNone(parsed)) return E.either(E.left(new SyntaxError('Invalid asset id json')))

  const obj: any = upperFirstObjectKeys(parsed.value)
  let assetId: AssetId | null = null

  if ('Ztg' in obj) {
    assetId = {
      Ztg: null,
    } as AssetId
  }
  if ('CategoricalOutcome' in obj) {
    assetId = {
      CategoricalOutcome: obj['CategoricalOutcome'],
    } as AssetId
  }
  if ('ScalarOutcome' in obj) {
    assetId = {
      ScalarOutcome: obj['ScalarOutcome'],
    } as AssetId
  }
  if ('PoolShare' in obj) {
    assetId = {
      PoolShare: obj['PoolShare'],
    } as AssetId
  }

  return E.either(
    assetId ? E.right(assetId) : E.left(new SyntaxError('Invalid asset id structure')),
  )
}
