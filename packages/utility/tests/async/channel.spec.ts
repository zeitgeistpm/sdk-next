import { describe, expect, it } from 'vitest'
import { channel } from '../../src/async/channel'
import { delay } from '../../src/async/delay'

describe('async', () => {
  describe('channel', () => {
    it('should adhere to the fifo pattern', async () => {
      const chan = channel<number>()
      chan.put(1)
      chan.put(2)
      chan.put(3)
      expect([await chan.take(), await chan.take(), await chan.take()]).toEqual([
        1, 2, 3,
      ])
    })

    it('should wait for new values in the correct order', async () => {
      const chan = channel<number>()
      chan.put(1)
      setTimeout(() => {
        chan.put(2)
      }, 10)
      setTimeout(() => {
        chan.put(4)
      }, 130)
      setTimeout(() => {
        chan.put(3)
      }, 50)
      expect([
        await chan.take(),
        await chan.take(),
        await chan.take(),
        await chan.take(),
      ]).toEqual([1, 2, 3, 4])
    })

    it('should throw error when trying to take from terminated channel', async () => {
      const chan = channel<number>()
      chan.put(1)
      expect(await chan.take()).toBe(1)
      chan.terminate()
      await expect(() => chan.take()).rejects.toThrowError(/terminated channel/)
    })

    it('should reject all unfinished takers if terminating with dangling takers', async () => {
      const chan = channel<number>()
      let error: any
      chan.take().catch(_error => (error = _error))
      chan.terminate()
      await delay(33)
      expect(error.message).toMatch(/terminated before taker received value/)
    })
  })
})
