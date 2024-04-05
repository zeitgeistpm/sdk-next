import type { ZeitgeistPrimitivesAssetsAllAssetsAsset } from '@polkadot/types/lookup'
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
export type ParimutuelShareAssetId = Infer<typeof IOParimituelShareAssetId>
export type PoolShareAssetId = Infer<typeof IOPoolShareAssetId>
export type ZtgAssetId = Infer<typeof IOZtgAssetId>
export type ForeignAssetId = Infer<typeof IOForeignAssetId>
export type CampaignAssetId = Infer<typeof IOCampaignAssetId>
export type CustomAssetId = Infer<typeof IOCustomAssetId>
export type MarketAssetId = Infer<typeof IOMarketAssetId>
export type CurrencyAssetId = Infer<typeof IOCurrencyAsset>
export type BaseAssetId = Infer<typeof IOBaseAssetId>

export type MarketOutcomeAssetId = Infer<typeof IOMarketOutcomeAssetId>

export type ScalarIndex = Infer<typeof IOScalarIndex>
export type CategoricalIndex = Infer<typeof IOCategoricalIndex>
export type ParimutuelShareIndex = Infer<typeof IOParimutuelShareIndex>
export type ScalarPosition = Infer<typeof IOScalarPosition>

/**
 * Io types for the asset ids.
 * Usefull for decoding from a string or json object.
 */

export const IOScalarPosition = union([literal('Short'), literal('Long')])

export const IOCategoricalIndex = tuple([IOMarketId, number()])
export const IOParimutuelShareIndex = tuple([IOMarketId, number()])
export const IOScalarIndex = tuple([IOMarketId, IOScalarPosition])

export const IOCategoricalAssetId = type({
  CategoricalOutcome: IOCategoricalIndex,
})

export const IOScalarAssetId = type({
  ScalarOutcome: IOScalarIndex,
})

export const IOParimituelShareAssetId = type({
  ParimutuelShare: IOParimutuelShareIndex,
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

export const IOCampaignAssetId = type({
  CampaignAsset: number(),
})

export const IOCustomAssetId = type({
  CustomAsset: number(),
})

export const IOCurrencyAsset = union([
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOPoolShareAssetId,
  IOForeignAssetId,
  IOParimituelShareAssetId,
])

export const IOMarketAssetId = union([
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOPoolShareAssetId,
  IOParimituelShareAssetId,
])

export const IOBaseAssetId = union([IOZtgAssetId, IOForeignAssetId, IOCampaignAssetId])

export const IOAssetId = union([
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOPoolShareAssetId,
  IOParimituelShareAssetId,
  IOCampaignAssetId,
  IOCustomAssetId,
  IOBaseAssetId,
])

export const fromPrimitive = (
  asset: ZeitgeistPrimitivesAssetsAllAssetsAsset,
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
  } else if (asset.isParimutuelShare) {
    assetId = {
      ParimutuelShare: [
        asset.asParimutuelShare[0].toNumber() as MarketId,
        asset.asParimutuelShare[1].toNumber(),
      ],
    }
  } else if (asset.isCampaignAsset) {
    assetId = { CampaignAsset: asset.asCampaignAsset.toNumber() }
  } else if (asset.isCustomAsset) {
    assetId = { CustomAsset: asset.asCustomAsset.toNumber() }
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
export const getMarketIdOf = (
  assetId: ScalarAssetId | CategoricalAssetId | ParimutuelShareAssetId,
): MarketId =>
  IOScalarAssetId.is(assetId)
    ? assetId.ScalarOutcome[0]
    : IOParimituelShareAssetId.is(assetId)
    ? assetId.ParimutuelShare[0]
    : assetId.CategoricalOutcome[0]

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
export const parseAssetId = (raw: any): E.IEither<SyntaxError, AssetId> => {
  if (!raw) return E.either(E.left(new SyntaxError('Invalid asset id structure')))

  if (isCodec(raw)) {
    return fromPrimitive(raw as ZeitgeistPrimitivesAssetsAllAssetsAsset)
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
