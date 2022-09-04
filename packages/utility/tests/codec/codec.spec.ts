import { describe, expect, it } from 'vitest'
import { codec } from '../../src/codec'
import { throws } from '../../src/error'

describe('codec', () => {
  it('creating a codec from functions that throw', () => {
    const c = codec<string, boolean>({
      encode: str => {
        if (str === 'correct') {
          return true
        }
        throw new Error('incorrect')
      },
      decode: bool => {
        if (bool) {
          return 'correct'
        }
        throw new Error('incorrect')
      },
    })

    expect(c.decode(true).unrightOr(throws)).toBe('correct')
    expect(c.decode(false).unleftOr(throws)).toEqual(new Error('incorrect'))
    expect(c.encode('correct').unrightOr(throws)).toBe(true)
    expect(c.encode('incorrect').unleftOr(throws)).toEqual(new Error('incorrect'))
  })
})
