import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesOutcomeReport } from '@polkadot/types/lookup'
import { KeyringPairOrExtSigner } from '@zeitgeistpm/rpc'

export type ReportOutcomeParams = {
  marketId: number | u128
  outcome:
    | ZeitgeistPrimitivesOutcomeReport
    | { Categorical: any }
    | { Scalar: any }
    | string
    | Uint8Array
  signer: KeyringPairOrExtSigner
}
