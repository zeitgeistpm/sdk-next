import { isEqual, pick } from 'lodash-es'
import { FullContext, RpcContext } from '../../../../context'
import { MarketMetadata, MetadataStorage, saturate } from '../../../../meta'
import { MarketId } from '../../../../primitives'
import { getFromRpc } from '../get'

/**
 * Verify that the market metadata as stored on the indexer matches the metadata as stored in IPFS.
 * We fetch the market from both indexer and rpc. Then saturate the rpc market by fetching its metadata from IPFS.
 * Then we clean and compare the metadata fields that are stored on both the indexer and rpc and see if they match.
 *
 * @generic C extends FullContext<MS>
 * @generic MS extends MetadataStorage
 * @param ctx FullContext<MS>
 * @param marketId MarketId
 */
export const verifyMetadata = async <C extends FullContext<MS>, MS extends MetadataStorage>(
  ctx: C,
  marketId: MarketId,
): Promise<boolean> => {
  const [rpcMarket, idxMarket] = await Promise.all([
    getFromRpc<RpcContext, MetadataStorage>(ctx, marketId),
    ctx.indexer.markets({
      where: {
        marketId_eq: marketId,
      },
    }),
  ]).then(async ([rpcMarket, idxMarkets]) => {
    if (rpcMarket.isNone()) {
      throw new Error(`Market ${marketId} not found through rpc.`)
    } else if (!idxMarkets.markets[0]) {
      throw new Error(`Market ${marketId} not found on the indexer.`)
    }

    // Saturating the rpc market with metadata from IPFS
    // This fetches the metadata from IPFS using the metadata hash stored on chain and attaches it to the rpc market.
    const saturatedRpcMarket = await rpcMarket.unwrap()?.saturate()

    return [saturatedRpcMarket, idxMarkets.markets[0]]
  })

  if (rpcMarket?.marketId !== idxMarket?.marketId) {
    console.warn(
      `Indexed and rpc market ids do not match. Rpc[${rpcMarket?.marketId}], Indexer[${idxMarket?.marketId}]. This should not happen.`,
    )
    return false
  }

  // We compare critical fields that are necessary for market integrity
  const validationFields: Array<keyof MarketMetadata> = [
    'question',
    'description',
    'categories',
    'tags',
  ]

  // Now we cleanup the metadata fields. Some optional fields are stored as null in the indexer, but will not be present in IPFS data.
  // Then we compare the fields that are stored on both the indexer and the IPFS metadata now present on the rpc market.
  return isEqual(
    removeEmpty(pick(idxMarket, validationFields)),
    removeEmpty(pick(rpcMarket, validationFields)),
  )
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
