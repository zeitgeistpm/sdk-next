export type Channel<T> = {
  put: (value: T) => void
  take: () => Promise<T | Terminated>
  terminate: () => void
}

export const Terminated: unique symbol = Symbol()
export type Terminated = typeof Terminated

export const channel = <T>(): Channel<T> => {
  const buffer: Array<T | Deferred<T>> = []
  let terminated = false

  const put = (value: T) => {
    if (terminated) throw new Error('trying to put value on terminated channel')

    const taker = buffer[0] && isDeferred(buffer[0]) ? buffer[0] : null

    if (taker) {
      buffer.splice(0, 1)
      return taker.resolve(value)
    } else {
      return buffer.push(value)
    }
  }

  const take = async () => {
    if (terminated) throw new Error('trying to take from a terminated channel')

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

  const terminate = () => {
    terminated = true
    const unresolved = buffer.filter((value): value is Deferred<T> =>
      isDeferred(value),
    )
    unresolved.forEach(value => {
      value.reject(new Error('Channel terminated before taker received value.'))
    })
  }

  return {
    put,
    take,
    terminate,
  }
}

export type Deferred<T> = {
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
  value: Promise<T>
}

export const deferred = <T>(): Deferred<T> => {
  let resolve!: Deferred<T>['resolve']
  let reject!: Deferred<T>['reject']

  const value = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })

  return {
    resolve,
    reject,
    value,
  }
}

export const isDeferred = <T>(value: any): value is Deferred<T> =>
  typeof value === 'object' &&
  'resolve' in value &&
  'reject' in value &&
  'value' in value &&
  'then' in value.value
