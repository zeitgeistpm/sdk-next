import { describe, expect, it } from 'vitest'
import { T } from 'vitest/dist/global-ea084c9f'
import { channel, returnes } from '../../src/async/channel'
import { delay } from '../../src/async/delay'

describe('async', () => {
  describe('channel', () => {
    it('should adhere to the fifo pattern', async () => {
      const chan = channel<number>()
      chan.put(1)
      chan.put(2)
      chan.end(3)
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
        chan.end(4)
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

    it('generator', async () => {
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

      const gen = chan.generator()

      for await (const n of gen) {
        acc = [...acc, n]
      }

      expect(acc).toEqual([1, 2, 3])
    })
  })
})
