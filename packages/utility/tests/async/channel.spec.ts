import { describe, expect, it } from 'vitest'
import { channel } from '../../src/async/channel'

describe('async', () => {
  describe('channel', () => {
    it('should adhere to the fifo pattern', async () => {
      const chan = channel<number>()
      chan.put(1)
      chan.put(2)
      chan.end(3)
      expect([await chan.take(), await chan.take(), await chan.take()]).toEqual([1, 2, 3])
    })

    it('should wait for new values in the correct order', async () => {
      const chan = channel<number>()
      chan.put(1)
      setTimeout(() => {
        chan.put(2)
      }, 10)
      setTimeout(() => {
        chan.end(4)
      }, 130)
      setTimeout(() => {
        chan.put(3)
      }, 50)
      expect([await chan.take(), await chan.take(), await chan.take(), await chan.take()]).toEqual([1, 2, 3, 4])
    })

    it('should be a async iterable', async () => {
      const chan = channel<number>()
      chan.put(1)
      setTimeout(() => {
        chan.put(2)
      }, 10)
      setTimeout(() => {
        chan.end(4)
      }, 90)
      setTimeout(() => {
        chan.put(3)
      }, 50)

      let acc: number[] = []

      for await (const n of chan) {
        acc = [...acc, n]
      }

      expect(acc).toEqual([1, 2, 3, 4])
    })

    it('should be able to awai last value', async () => {
      const chan = channel<number>()
      chan.put(1)
      chan.put(2)
      setTimeout(() => {
        chan.end(3)
      }, 50)
      const last = await chan
      expect(last).toBe(3)
    })
  })
})
