import { describe, expect, it } from 'vitest'
import { either } from '../../src/either'
import { from } from '../../src/taskeither'
import { throws } from '../../src/error'

describe('taskeither', () => {
  describe('chaining async tasks', () => {
    it('should', async () => {})
  })

  describe('from', () => {
    it('generic test', async () => {
      const fetcher = async (a: number, b: boolean) => {
        return {
          a,
          b,
        }
      }
      const task = from(fetcher)
      expect(await task(1, true).unrightOr(throws)).toEqual({
        a: 1,
        b: true,
      })
    })

    it('should return Left<Error> when function throws', async () => {
      const task = from(async () => throws(new Error('threwn')))
      expect(await task().unleftOr(throws)).toEqual(new Error('threwn'))
    })
  })
})
