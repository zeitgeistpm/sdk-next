import type { KeyringPair } from '@polkadot/keyring/types'
import type { Signer } from '@polkadot/types/types'

export type ExtSigner = { address: string; signer: Signer }

export type KeyringPairOrExtSigner = KeyringPair | ExtSigner
