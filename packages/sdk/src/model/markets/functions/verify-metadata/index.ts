import { isEqual, pick } from 'lodash-es'
import HumanDiff from 'human-object-diff'
import { Context, FullContext, IndexerContext, RpcContext } from '../../../../context'
import { MarketMetadata, MetadataStorage, saturate } from '../../../../meta'
import { MarketId } from '../../../../primitives'
import { getFromRpc } from '../get'
import { MetadataVerification } from './types'
import { isCodec } from '@polkadot/util'
import { IndexedMarket, SaturatedRpcMarket } from '../../types'
import { FullMarketFragment } from '@zeitgeistpm/indexer'

/**
 * Verify that the market metadata as stored on the indexer matches the metadata as stored in IPFS.
 * Note that a `SaturatedRpcMarket` is required to verify the metadata.
 * A saturated rpc market is a market that has fetched and attached metadata from IPFS.
 * We clean and compare the metadata fields that are stored on both the indexer and rpc/ipfs and see if they match.
 *
 * @generic C extends FullContext<MS>
 * @generic MS extends MetadataStorage
 * @param ctx FullContext<MS>
 * @param marketId MarketId
 */
export const verifyMetadata = <MS extends MetadataStorage = MetadataStorage>(
  rpcMarket: SaturatedRpcMarket<RpcContext<MS>, MetadataStorage>,
  idxMarket: IndexedMarket<IndexerContext> | FullMarketFragment,
): MetadataVerification => {
  if (rpcMarket?.marketId !== idxMarket?.marketId) {
    console.warn(
      `Indexed and rpc market ids do not match. Rpc[${rpcMarket?.marketId}], Indexer[${idxMarket?.marketId}]. This should not happen.`,
    )
    return { type: 'failure', code: 'market_id_mismatch' }
  }

  // We compare the metadata hashes stored on chain and on the indexer.
  // If they do not match, we return and error with the hashes for refernce.

  const rpcMetadataHash = isCodec(rpcMarket?.metadata)
    ? rpcMarket?.metadata.toHex()
    : rpcMarket?.metadata

  const indexedMetadataHash = idxMarket?.metadata

  if (rpcMetadataHash !== indexedMetadataHash) {
    return {
      type: 'failure',
      code: 'metadata_hash_mismatch',
      rpcHash: rpcMetadataHash,
      indexedHash: indexedMetadataHash,
    }
  }

  // We compare critical fields that are necessary for market integrity
  const validationFields: Array<keyof MarketMetadata> = [
    'question',
    'description',
    'categories',
    'tags',
  ]

  // Now we cleanup the metadata fields.
  // @note Some optional fields are stored as null in the indexer, but will not be present in IPFS data.
  const cleanedIpfsData = removeEmpty(pick(rpcMarket, validationFields))
  const cleanedIndexedData = removeEmpty(pick(idxMarket, validationFields))

  // For the metadata to be valid, the fields we compare must be equal.
  if (!isEqual(cleanedIpfsData, cleanedIndexedData)) {
    // If they differ we diff the data to produce a human readable diff.
    const differ = new HumanDiff()
    const diff = differ.diff(cleanedIpfsData, cleanedIndexedData)
    return { type: 'failure', code: 'metadata_differs', diff: diff }
  }

  // All checks passed, metadata is valid.
  return { type: 'success' }
}

/**
 * Remove empty(null or undefined) fields from an object.
 * @param obj T
 * @returns T
 */
function removeEmpty<T extends object>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v != null)
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v]),
  ) as T
}
