import { describe, expect, it, vi } from 'vitest'
import { either, right, left, Either } from '../../src/either'
import { throws } from '../../src/error'

describe('either', () => {
  describe('unwrap', () => {
    it('should throw error if value is left', () => {
      const error = either(left(new Error('left value')))
      expect(error.unwrap).toThrow('left value')
    })
    it('should return value if value is right', () => {
      const error = either(right('ok'))
      expect(error.unwrap()).toBe('ok')
    })
  })
  describe('bind', () => {
    it('should chain all effects when they return a Right value', async () => {
      expect(
        either(right(1))
          .bind(n => right(n + 1))
          .bind(n => right(n + 1))
          .bind(n => right(n + 1))
          .bind(n => right(n + 1))
          .unrightOr(NaN),
      ).toBe(5)
    })

    it('should exit out and return the first Left value encountered', async () => {
      const adder = { fn: (n: number): Either<string, number> => right(n + 1) }
      const spy = vi.spyOn(adder, 'fn')
      expect(
        either(right(1))
          .bind(adder.fn)
          .bind(adder.fn)
          .bind(adder.fn)
          .bind(n => {
            expect(n).toBe(4)
            return right(n + 1)
          })
          .bind((n): Either<string, number> => left('error'))
          .bind(adder.fn)
          .bind(adder.fn)
          .bind(adder.fn)
          .unleftOr(throws),
      ).toBe('error')
      expect(spy).toBeCalledTimes(3)
    })
  })
})
