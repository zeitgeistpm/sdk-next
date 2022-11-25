import { BTreeMap } from '@polkadot/types'
import { Codec } from '@polkadot/types/types'

/**
 * Get a value from a BTreeMap for a key.
 *
 * @note fix for BTreeMap.get as it seems broken.
 * @param map BTreeMap<K, V>
 * @param key K
 * @returns  V | null
 */
export const mapget = <K extends Codec, V extends Codec>(map: BTreeMap<K, V>, key: K) => {
  for (const [_k, value] of map.entries()) {
    if (key.eq(_k)) {
      return value
    }
  }
  return null
}
