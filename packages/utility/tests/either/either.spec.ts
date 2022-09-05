import { describe, expect, it, vi } from 'vitest'
import { either, right, left, Either } from '../../src/either'
import { throws } from '../../src/error'

describe('either', () => {
  describe('chain', () => {
    it('should chain all effects when they return a Right value', async () => {
      expect(
        either(right(1))
          .chain(n => right(n + 1))
          .chain(n => right(n + 1))
          .chain(n => right(n + 1))
          .chain(n => right(n + 1))
          .unrightOr(NaN),
      ).toBe(5)
    })

    it('should exit out and return the first Left value encountered', async () => {
      const adder = { fn: (n: number): Either<string, number> => right(n + 1) }
      const spy = vi.spyOn(adder, 'fn')
      expect(
        either(right(1))
          .chain(adder.fn)
          .chain(adder.fn)
          .chain(adder.fn)
          .chain(n => {
            expect(n).toBe(4)
            return right(n + 1)
          })
          .chain((n): Either<string, number> => left('error'))
          .chain(adder.fn)
          .chain(adder.fn)
          .chain(adder.fn)
          .unleftOr(throws),
      ).toBe('error')
      expect(spy).toBeCalledTimes(3)
    })
  })
})
