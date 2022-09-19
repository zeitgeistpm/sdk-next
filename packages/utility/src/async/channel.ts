import { deferred, Deferred, isDeferred } from './deferred'

export type Channel<T, R = T> = {
  put: (value: T | Returned<R>) => void
  end: (value: R) => void
  take: () => Promise<T | R>
  generator: () => AsyncGenerator<T, R>
}

export type Returned<R> = { returned: R }

export const isReturned = <R>(value: unknown): value is Returned<R> =>
  typeof value === 'object' && value !== null && 'returned' in value

export const channel = <T, R = T>(): Channel<T, R> => {
  const buffer: Array<T | Deferred<T> | Returned<R>> = []

  const put = (value: T | Returned<R>) => {
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

  const end = (value: R) => {
    put({ returned: value })
  }

  const take = async () => {
    const next = buffer.shift()

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
    while (true) {
      const value = await take()
      if (isReturned<R>(value)) {
        return value.returned
      }
      yield value as T
    }
  }

  return {
    put,
    end,
    take: () => take().then(value => (isReturned(value) ? value.returned : value)),
    generator,
  }
}
