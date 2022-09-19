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
