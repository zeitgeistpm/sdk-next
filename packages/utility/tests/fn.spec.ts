import { describe, expect, it } from 'vitest'
import { compose } from '../src/function'

describe('fn', () => {
  describe('compose', () => {
    it('should compose two functions', () => {
      const add = (a: number) => (b: number) => b + a
      const sub = (a: number) => (b: number) => b - a
      const addTwoSubOne = compose(add(2), sub(1))
      expect(addTwoSubOne(10)).toBe(11)
    })
  })
})
