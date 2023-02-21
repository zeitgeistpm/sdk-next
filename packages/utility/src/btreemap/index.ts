import type { BTreeMap } from '@polkadot/types'
import type { Codec } from '@polkadot/types/types'
import { isCodec } from '@polkadot/util'
import { isEqual } from 'lodash-es'

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
    if (isCodec(key) && key.eq(_k)) {
      return value
    } else if (!isCodec(key) && isEqual(key, _k.toJSON())) {
      return value
    }
  }
  return null
}
