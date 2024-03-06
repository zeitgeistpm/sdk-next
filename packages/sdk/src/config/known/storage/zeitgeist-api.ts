import { createStorage, MetadataStorage } from '../../../meta/types'
import { IPFSApi } from '@zeitgeistpm/web3.storage'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @returns MetadataStorage
 */
export const ZeitgeistIpfsApi = <MS extends MetadataStorage<any>>(
  config?: IPFSApi.ZeitgeistIpfsApiConfig,
): MS => {
  return createStorage(IPFSApi.storage(config)) as MS
}
