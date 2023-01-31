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
  })
})
