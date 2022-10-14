import { u128, u16 } from '@polkadot/types'
import { ZeitgeistPrimitivesOutcomeReport } from '@polkadot/types/lookup'
import { KeyringPairOrExtSigner } from '@zeitgeistpm/rpc'

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
