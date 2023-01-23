import type { u128, u16 } from '@polkadot/types'
import type { ZeitgeistPrimitivesOutcomeReport } from '@polkadot/types/lookup'
import type { KeyringPairOrExtSigner } from '@zeitgeistpm/rpc'

export type ReportOutcomeParams = {
  marketId: number | u128
  outcome:
    | ZeitgeistPrimitivesOutcomeReport
    | { Categorical: number | u16 | Uint8Array }
    | { Scalar: number | u128 | Uint8Array }
    | string
    | Uint8Array
  signer: KeyringPairOrExtSigner
}
