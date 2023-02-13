import { createTestKeyring } from '@polkadot/keyring'

export const getSigner = () => {
  const keyring = createTestKeyring({ ss58Format: 73, type: 'sr25519' })
  return keyring.addFromUri('//Alice', { name: 'Alice default' })
}
