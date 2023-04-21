import { describe, expect, it, vi, assert } from 'vitest'
import { aeither, from } from '../../src/aeither'
import * as TE from '../../src/taskeither'
import * as E from '../../src/either'
import { throws } from '../../src/error'

describe('aeither', () => {
  describe('from', () => {
    it('should create a right aiether if the provided functions returns a value', async () => {
      const result = from(async () => 'right value')
      expect(await result.isRight()).toBeTruthy()
      expect(await result.unwrap()).toBe('right value')
    })
    it('should create a left aiether if the provided functions throws', async () => {
      const result = from(async () => throws(new Error('left value')))
      expect(await result.isLeft()).toBeTruthy()
    })
  })

  describe('unwrap', () => {
    it('should throw error if value is left', async () => {
      const value = aeither(Promise.resolve(E.either(E.left('left'))))
      try {
        await value.unwrap()
      } catch (error) {
        expect(error).toBe('left')
        return
      }
      throw new Error("shouldn't reach here")
    })
  })

  describe('unwrapOr', () => {
    it('should return the or value if the value is left', async () => {
      const value = aeither(Promise.resolve(E.either(E.left('left'))))
      const handled = await value.unwrapOr('or')
      expect(handled).toBe('or')
    })
    it('should return the value if the value is right', async () => {
      const value = aeither(Promise.resolve(E.either(E.right('right'))))
      const handled = await value.unwrapOr('or')
      expect(handled).toBe('right')
    })
  })

  describe('unrightOr', () => {
    it('should return the or value if the value is left', async () => {
      const value = aeither(Promise.resolve(E.either(E.left('left'))))
      const handled = await value.unrightOr('or')
      expect(handled).toBe('or')
    })
    it('should return the value if the value is right', async () => {
      const value = aeither(Promise.resolve(E.either(E.right('right'))))
      const handled = await value.unrightOr('or')
      expect(handled).toBe('right')
    })
  })

  describe('unleftOr', () => {
    it('should return the or value if the value is right', async () => {
      const value = aeither(Promise.resolve(E.either(E.right('right'))))
      const handled = await value.unleftOr('or')
      expect(handled).toBe('or')
    })
    it('should return the value if the value is left', async () => {
      const value = aeither(Promise.resolve(E.either(E.left('left'))))
      const handled = await value.unleftOr('or')
      expect(handled).toBe('left')
    })
  })

  // describe('unleftOr', () => {
  //   it('should return the or value if its not right', async () => {
  //     const error = from(async () => {
  //       throw new Error('error')
  //     })
  //     expect(await error.unleftOr('ok')).toBe('error')
  //   })
  //   it('should return value if value is right', async () => {
  //     const value = from(async () => 'ok')
  //     expect(await value.unleftOr('error')).toBe('error')
  //   })
  // })

  describe('bind', () => {
    it('should work when returning a Either of bound B or raw B', async () => {
      const result = await from(async () => 1)
        .bind(async n => n + 1)
        .bind(async n => from(async () => n + 1))
        .bind(async n => n + 2)
        .unwrap()
      expect(result).toBe(5)
    })
    it('should bind functions and execute them on right values', async () => {
      const result = await from(async () => 1)
        .bind(async n => n + 1)
        .bind(async n => n + 2)
        .unwrap()
      expect(result).toBe(4)
    })
    it('should exit out on left values', async () => {
      const adder = { fn: async (n: number) => n + 1 }
      const spy = vi.spyOn(adder, 'fn')
      const result = (
        await from(async () => 1)
          .bind(adder.fn)
          .bind(adder.fn)
          .bind(async _ => {
            throw new Error('left')
          })
          .bind(adder.fn)
          .unleft()
      ).unwrap()
      expect(spy).toBeCalledTimes(2)
      expect(result).toEqual(new Error('left'))
    })
  })

  describe('isRight', () => {
    it('to be a truthy boolean value on right values', async () => {
      const value = from(async () => 1)
      expect(Boolean(await value.isRight())).toBe(true)
      let test = false
      if (!(await value.isRight())) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('to be a falsy boolean value on left values', async () => {
      const value = from(async () => {
        throw new Error('left')
      })
      expect(Boolean(await value.isRight())).toBe(false)
      let test = false
      if (await value.isRight()) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('should return the IEither on right values', async () => {
      const rightValue = from(async () => 1)
      const leftValue = from(async () => {
        throw 0
      })
      expect((await rightValue.isRight())?.unwrap()).toBe(1)
      expect((await leftValue.isRight())?.unwrap()).toBe(undefined)
    })
  })

  describe('isLeft', () => {
    it('to be a truthy boolean value on left values', async () => {
      const value = from(async () => {
        throw new Error()
      })
      expect(Boolean(await value.isLeft())).toBe(true)
      let test = false
      if (!(await value.isLeft())) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('to be a falsy boolean value on right values', async () => {
      const value = from(async () => 1)

      expect(Boolean(await value.isLeft())).toBe(false)
      let test = false
      if (await value.isLeft()) {
        test = true
      }
      expect(test).toBe(false)
    })
    it('should return the IEither on left values', async () => {
      const rightValue = from(async () => 1)
      const leftValue = aeither(Promise.resolve(E.either(E.left(1))))
      expect((await rightValue.isLeft())?.unwrap()).toBe(undefined)
      expect((await leftValue.isLeft())?.unwrapLeft()).toBe(1)
    })
  })
})
