import { KeyringPair } from '@polkadot/keyring/types'
import {
  create,
  CreateMarketWithPoolParams,
  localhostRpc,
  RpcContext,
  Sdk,
  ZTG,
  evenWeights,
  swapFeeFromFloat,
  batterystation,
  FullContext,
  batterystationRpc,
  MarketStatus,
} from '@zeitgeistpm/sdk'
import { getTestSigner } from '../getSigner'

/**
 * Initialize the SDK in full or rpc mode to be able to submit transactions to the chein.
 */
// const sdk: Sdk<RpcContext> = await create(mainnet())

const sdk: Sdk<RpcContext> = await create(batterystationRpc())
const market = (await sdk.model.markets.get(340)).unwrap()!
const saturatedMarket = await market?.saturate()!
