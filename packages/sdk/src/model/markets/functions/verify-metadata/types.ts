export type MetadataVerification =
  | MetadataVerificationSuccess
  | MetadataVerificationFailiure

export type MetadataVerificationSuccess = { type: 'success' }

export type MetadataVerificationFailiure =
  | { type: 'failure'; code: 'market_id_mismatch' }
  | {
      type: 'failure'
      code: 'metadata_hash_mismatch'
      rpcHash?: string
      indexedHash?: string
    }
  | { type: 'failure'; code: 'metadata_differs'; diff: string[] }
