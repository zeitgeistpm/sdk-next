import { deferred, Deferred, isDeferred } from './deferred'

/**
 * Async Channel ala Go
 * @generic T - type of values in the channel
 */
export type Channel<T> = PromiseLike<T> &
  AsyncIterable<T> & {
    /**
     * Put a new value to the channel
     */
    put: (value: T) => void
    /**
     * Put a new value to the channel and terminate it.
     */
    end: (value: T) => void
    /**
     * Take a value from the channel. Will wait if none in buffer.
     */
    take: () => Promise<T>
  }

/**
 * Channel buffers can be concrete values, return values or deferred waiters.
 */
export type ChannelBuffer<T> = Array<T | Deferred<T> | Returned<T>>

/**
 * A returned value type. Terminates the channel.
 */
export const returned = Symbol()
export type Returned<R> = { [returned]: R }

/**
 * Type guard for returned values.
 *
 * @generic T - value type of channel
 * @param value unknwon
 * @returns value is Returned<T>
 */
export const isReturned = <T>(value: unknown): value is Returned<T> =>
  typeof value === 'object' && value !== null && returned in value

/**
 * Create a new channel of type T
 *
 * @generic T - value type of channel
 * @param buffer Array<T | Deferred<T> | Returned<T>>
 * @returns Channel<T>
 */
export const channel = <T>(buffer: ChannelBuffer<T> = []): Channel<T> => {
  let terminated = false

  const put = (value: T | Returned<T>) => {
    if (terminated) throw new Error(`Trying to put value ${value} to terminated channel.`)

    const taker = buffer[0] && isDeferred(buffer[0]) ? buffer[0] : null

    if (taker) {
      buffer.splice(0, 1)
      return taker.resolve(value)
    }

    if (isReturned(value)) {
      return buffer.push(value)
    }

    return buffer.push(value)
  }

  const end = (value: T) => {
    put({ [returned]: value })
  }

  const take = async () => {
    if (terminated) throw new Error(`Trying to take value from terminated channel.`)

    const next = buffer.shift()

    terminated = isReturned(next)

    if (next && isDeferred<T>(next)) {
      return next.value
    } else if (next) {
      return next
    } else {
      const out = deferred<T>()
      buffer.push(out)
      return out.value
    }
  }

  async function* generator() {
    if (terminated) throw new Error(`Trying to create generator from terminated channel.`)

    while (true) {
      const value = await take()

      if (!isReturned<T>(value)) {
        yield value as T
        continue
      }

      yield value[returned]
      break
    }
  }

  return {
    put,
    end,
    take: () => take().then(value => (isReturned(value) ? value[returned] : value)),
    [Symbol.asyncIterator]: generator,
    then: async resolve => {
      while (true) {
        const out = await take()
        if (isReturned(out)) {
          resolve?.(out[returned])
        }
      }
    },
  }
}
