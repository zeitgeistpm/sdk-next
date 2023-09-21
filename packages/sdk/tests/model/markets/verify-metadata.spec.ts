import { describe, expect, it, beforeAll } from 'vitest'
import { verifyMetadata } from '../../../src/model/markets/functions/verify-metadata'
import { Codec } from '@polkadot/types/types'

describe('sdk.model.markets.verifyMetadata', () => {
  it('should make sure market ids are the same', () => {
    expect(verifyMetadata({ marketId: 1 } as any, { marketId: 1 } as any)).toEqual({
      type: 'success',
    })

    expect(verifyMetadata({ marketId: 1 } as any, { marketId: 2 } as any)).toEqual({
      type: 'failure',
      code: 'market_id_mismatch',
    })
  })

  it('should compare hashes correctly', () => {
    expect(
      verifyMetadata(
        { marketId: 1, metadata: '0x1' } as any,
        { marketId: 1, metadata: '0x1' } as any,
      ),
    ).toEqual({
      type: 'success',
    })

    expect(
      verifyMetadata(
        { marketId: 1, metadata: '0x1' } as any,
        { marketId: 1, metadata: '0x1' } as any,
      ),
    ).toEqual({
      type: 'success',
    })

    expect(
      verifyMetadata(
        { marketId: 1, metadata: '0x1' } as any,
        { marketId: 1, metadata: '0x2' } as any,
      ),
    ).toEqual({
      type: 'failure',
      code: 'metadata_hash_mismatch',
      rpcHash: '0x1',
      indexedHash: '0x2',
    })
  })

  it('should compare metadata fields correctly', () => {
    expect(
      verifyMetadata(
        { marketId: 1, metadata: '0x1', question: 'Foo?', description: 'foo' } as any,
        { marketId: 1, metadata: '0x1', question: 'Foo?', description: 'foo' } as any,
      ),
    ).toEqual({
      type: 'success',
    })

    expect(
      verifyMetadata(
        { marketId: 1, metadata: '0x1', question: 'Foo?' } as any,
        { marketId: 1, metadata: '0x1', question: 'Bar?' } as any,
      ),
    ).toEqual({
      type: 'failure',
      code: 'metadata_differs',
      diff: ['"Question", with a value of "Foo?" (at Obj.question) was changed to "Bar?"'],
    })

    expect(
      verifyMetadata(
        { marketId: 1, metadata: '0x1', description: 'Foo?' } as any,
        { marketId: 1, metadata: '0x1', description: 'Bar?' } as any,
      ),
    ).toEqual({
      type: 'failure',
      code: 'metadata_differs',
      diff: [
        '"Description", with a value of "Foo?" (at Obj.description) was changed to "Bar?"',
      ],
    })

    expect(
      verifyMetadata(
        {
          marketId: 1,
          metadata: '0x1',
          categories: [
            {
              name: 'Long',
            },
            {
              name: 'Short',
            },
          ],
        } as any,
        {
          marketId: 1,
          metadata: '0x1',
          categories: [
            {
              name: 'Long',
            },
            {
              name: 'Shortyyy',
            },
          ],
        } as any,
      ),
    ).toEqual({
      type: 'failure',
      code: 'metadata_differs',
      diff: [
        '"Name", with a value of "Short" (at Obj.categories.1.name) was changed to "Shortyyy"',
      ],
    })
  })
})
