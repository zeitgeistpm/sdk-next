import { Base64Codec } from '@zeitgeistpm/utility/dist/codec'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { IPFSClusterConfiguration } from './types'

/**
 * Response type for both pinning and unpinning the the ipfs cluster.
 */
export type IPFSClusterPinningResponse = {
  replication_factor_min: number
  replication_factor_max: number
  name: string
  mode: string
  shard_size: number
  user_allocations: string
  expire_at: string
  metadata: string
  pin_update: string
  cid: string
  type: number
  allocations: Array<string>
  max_depth: number
  reference: string
}

/**
 * Base64 Codec
 */
const b64 = Base64Codec()

/**
 *
 * Pinns a cid to the cluster.
 */
export const pin = async (
  cid: string,
  config: IPFSClusterConfiguration,
): Promise<IPFSClusterPinningResponse> => {
  const response = await fetch(
    new URL(`/pins/${cid}?replication-min=2&replication-max=2`, config.url).href,
    {
      headers: headers(config),
      method: `POST`,
    },
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      `[${data?.code ?? '500'}]: ${
        data?.message ?? 'Unknown cluster api error.'
      }`,
    )
  }

  return data
}

/**
 *
 * Unpinns a cid from the cluster.
 */
export const unpin = async (
  cid: string,
  config: IPFSClusterConfiguration,
): Promise<IPFSClusterPinningResponse> => {
  const response = await fetch(new URL(`/pins/${cid}`, config.url).href, {
    headers: headers(config),
    method: `DELETE`,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      `[${data?.code ?? '500'}]: ${
        data?.message ?? 'Unknown cluster api error.'
      }`,
    )
  }

  return data
}

const headers = (config: IPFSClusterConfiguration) => {
  const headers = new Headers({
    'Content-Type': 'multipart/form-data',
  })

  if (config.auth) {
    const authorization = b64
      .encode(`${config.auth.username}:${config.auth.password}`)
      .unrightOr(throws)
    headers.append('Authorization', `Basic ${authorization}`)
  }

  return headers
}
