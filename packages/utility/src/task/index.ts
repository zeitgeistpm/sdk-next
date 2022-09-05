export type Task<T, Args extends ReadonlyArray<unknown> = []> = (
  ...args: Args
) => Promise<T>
