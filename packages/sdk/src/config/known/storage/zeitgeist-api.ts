import { createStorage, MetadataStorage } from '../../../meta/types'
import { IPFS, IPFSApi } from '@zeitgeistpm/web3.storage'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @returns MetadataStorage
 */
export const ZeitgeistIpfsApi = <MS extends MetadataStorage<any>>(): MS => {
  return createStorage(IPFSApi.storage()) as MS
}
