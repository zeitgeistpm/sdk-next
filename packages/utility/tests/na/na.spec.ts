import { describe, expect, it } from 'vitest'
import { isNA, NA, na } from '../../src/na'

describe('na', () => {
  describe('isNa', () => {
    it('should be true for NA values', () => {
      expect(isNA(NA)).toBe(true)
      expect(isNA(na('reason'))).toBe(true)
      expect(isNA(false)).toBe(false)
      expect(isNA(true)).toBe(false)
      expect(isNA('str')).toBe(false)
      expect(isNA('1')).toBe(false)
      expect(isNA({ __type: Symbol(''), reason: 'reason' })).toBe(false)
    })
  })
})
