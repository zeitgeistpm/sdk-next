// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, u128, u16 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name ScalarPosition */
export interface ScalarPosition extends Enum {
  readonly isLong: boolean;
  readonly isShort: boolean;
  readonly type: 'Long' | 'Short';
}

/** @name SwapsAsset */
export interface SwapsAsset extends Enum {
  readonly isCategoricalOutcome: boolean;
  readonly asCategoricalOutcome: ITuple<[u128, u16]>;
  readonly isScalarOutcome: boolean;
  readonly asScalarOutcome: ITuple<[u128, ScalarPosition]>;
  readonly isCombinatorialOutcome: boolean;
  readonly isPoolShare: boolean;
  readonly asPoolShare: u128;
  readonly isZtg: boolean;
  readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'CombinatorialOutcome' | 'PoolShare' | 'Ztg';
}

export type PHANTOM_SWAPS = 'swaps';
