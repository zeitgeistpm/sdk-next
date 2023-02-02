import { describe, expect, it, vi, assert } from 'vitest'
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
    it('should work with returning Either of B or raw B value from chained functions', async () => {
      expect(
        either(right(1))
          .bind(n => right(n + 1))
          .bind(n => n + 1)
          .bind(n => n + 1)
          .bind(n => right(n + 1))
          .unrightOr(NaN),
      ).toBe(5)
    })

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

  describe('isRight', () => {
    it('to be a truthy boolean value on right values', async () => {
      const value = either(right(1))
      expect(Boolean(value.isRight())).toBe(true)
      let test = false
      if (!value.isRight()) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('to be a falsy boolean value on left values', async () => {
      const value = either(left(new Error('left')))
      expect(Boolean(value.isRight())).toBe(false)
      let test = false
      if (value.isRight()) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('should return the IEither on right values', () => {
      const rightValue = either(right(1))
      const leftValue = either(left(0))
      expect(rightValue.isRight()?.unwrap()).toBe(1)
      expect(leftValue.isRight()?.unwrap()).toBe(undefined)
    })
  })

  describe('isLeft', () => {
    it('to be a truthy boolean value on left values', async () => {
      const value = either(left(1))
      expect(Boolean(value.isLeft())).toBe(true)
      let test = false
      if (!value.isLeft()) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('to be a falsy boolean value on right values', async () => {
      const value = either(right(1))
      expect(Boolean(value.isLeft())).toBe(false)
      let test = false
      if (value.isLeft()) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('should return the IEither on left values', () => {
      const leftValue = either(left(1))
      const rightValue = either(right(0))
      expect(leftValue.isLeft()?.unwrapLeft()).toBe(1)
      expect(rightValue.isLeft()?.unwrapLeft()).toBe(undefined)
    })
  })
})
