import { describe, expect, it } from 'vitest'
import * as AssetId from '../../src/primitives/assetid'

describe('sdk.primitives.AssetId', () => {
  describe('#parseAssetId', () => {
    it('should be able to parse asset ids from well formed json strings', () => {
      expect(AssetId.IOZtgAssetId.is(AssetId.parseAssetId('{"Ztg":null}').unwrap())).toBe(
        true,
      )
      expect(
        AssetId.IOCategoricalAssetId.is(
          AssetId.parseAssetId('{"CategoricalOutcome":[1,2]}').unwrap(),
        ),
      ).toBe(true)
      expect(
        AssetId.IOScalarAssetId.is(
          AssetId.parseAssetId('{"ScalarOutcome":[1,"Long"]}').unwrap(),
        ),
      ).toBe(true)
      expect(
        AssetId.IOPoolShareAssetId.is(AssetId.parseAssetId('{"PoolShare":1}').unwrap()),
      ).toBe(true)
    })

    it('should be able to parse asset ids starting with lowercase keys as they are in the indexer data', () => {
      expect(AssetId.IOZtgAssetId.is(AssetId.parseAssetId('{"ztg":null}').unwrap())).toBe(
        true,
      )
      expect(
        AssetId.IOCategoricalAssetId.is(
          AssetId.parseAssetId('{"categoricalOutcome":[1,2]}').unwrap(),
        ),
      ).toBe(true)
      expect(
        AssetId.IOScalarAssetId.is(
          AssetId.parseAssetId('{"scalarOutcome":[1,"Long"]}').unwrap(),
        ),
      ).toBe(true)
      expect(
        AssetId.IOPoolShareAssetId.is(AssetId.parseAssetId('{"poolShare":1}').unwrap()),
      ).toBe(true)
    })
  })
})
