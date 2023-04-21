import { describe, expect, it } from 'vitest'
import { throws } from '../../../src/error'
import { Base64Codec } from '../../../src/codec/impl/base64'

describe('base64 codec', () => {
  it('should convert from and to base64 values', async () => {
    const b64 = Base64Codec()
    expect(await b64.encode('foo').unrightOr(throws)).toBe('Zm9v')
    expect(await b64.decode('Zm9v').unrightOr(throws)).toBe('foo')
  })
})
