import { KeyringPair } from '@polkadot/keyring/types'
import { Signer } from '@polkadot/types/types'

export type ExtSigner = { address: string; signer: Signer }

export type KeyringPairOrExtSigner = KeyringPair | ExtSigner
