import { describe, expect, it } from 'vitest'
import { codec } from '../../src/codec'
import { throws } from '../../src/error'

describe('codec', () => {
  describe('codec', () => {
    it('creating a codec from functions that throw', async () => {
      const c = codec<string, boolean>({
        encode: async str => {
          if (str === 'correct') {
            return true
          }
          throw new Error('incorrect')
        },
        decode: async bool => {
          if (bool) {
            return 'correct'
          }
          throw new Error('incorrect')
        },
      })

      expect(await c.decode(true).unrightOr(throws)).toBe('correct')
      expect(await c.decode(false).unleftOr(throws)).toEqual(new Error('incorrect'))
      expect(await c.encode('correct').unrightOr(throws)).toBe(true)
      expect(await c.encode('incorrect').unleftOr(throws)).toEqual(new Error('incorrect'))
    })
  })
})
