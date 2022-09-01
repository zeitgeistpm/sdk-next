export type MetadataStorage<T, ID = string> = {
  get: (id: ID) => Promise<T>
  put: (data: T) => Promise<ID>
  del: (id: ID) => Promise<void>
}
