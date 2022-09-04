import { describe, expect, it } from 'vitest'
import { codec, compose } from '../../src/codec'
import { throws } from '../../src/error'

describe('codec', () => {
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
      expect(c.encode('incorrect').unleftOr(throws)).toEqual(
        new Error('incorrect'),
      )
    })
  })

  describe('compose', () => {
    it('should compose two codecs', () => {
      const a = codec<string, string>({
        encode: str => `${str}-added`,
        decode: str => str.replace('-added', ''),
      })

      const b = codec<string, string>({
        encode: str => str.toUpperCase(),
        decode: str => str.toLowerCase(),
      })

      const c = compose(a, b)

      expect(c.encode('foo').unrightOr(throws)).toBe('FOO-ADDED')
      expect(c.decode('FOO-ADDED').unrightOr(throws)).toBe('foo')
    })
  })
})
