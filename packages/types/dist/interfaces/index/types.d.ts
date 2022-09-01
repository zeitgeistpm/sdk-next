import type { Enum, Option, Struct, U8aFixed, Vec, i128, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId, AccountId32, Balance, MultiAddress, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { MarketId } from '@zeitgeistpm/types/interfaces/predictionMarkets';
export interface Address extends MultiAddress {
}
export interface Amount extends i128 {
}
export interface AmountOf extends i128 {
}
export interface Asset extends Enum {
    readonly isCategoricalOutcome: boolean;
    readonly asCategoricalOutcome: ITuple<[MarketId, CategoryIndex]>;
    readonly isScalarOutcome: boolean;
    readonly asScalarOutcome: ITuple<[MarketId, ScalarPosition]>;
    readonly isCombinatorialOutcome: boolean;
    readonly isPoolShare: boolean;
    readonly asPoolShare: u128;
    readonly isZtg: boolean;
    readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'CombinatorialOutcome' | 'PoolShare' | 'Ztg';
}
export interface AuthorId extends AccountId {
}
export interface BlockNumber extends u64 {
}
export interface Bond extends Struct {
    readonly owner: AccountId;
    readonly amount: Balance;
}
export interface CategoryIndex extends u16 {
}
export interface Collator2 extends Struct {
    readonly id: AccountId;
    readonly bond: Balance;
    readonly nominators: Vec<AccountId>;
    readonly topNominators: Vec<Bond>;
    readonly bottomNominators: Vec<Bond>;
    readonly totalCounted: Balance;
    readonly totalBacking: Balance;
    readonly state: CollatorStatus;
}
export interface CollatorSnapshot extends Struct {
    readonly bond: Balance;
    readonly delegations: Vec<Bond>;
    readonly total: Balance;
}
export interface CollatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isIdle: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: RoundIndex;
    readonly type: 'Active' | 'Idle' | 'Leaving';
}
export interface Currency extends Asset {
}
export interface CurrencyId extends Asset {
}
export interface CurrencyIdOf extends Asset {
}
export interface DelegatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: RoundIndex;
    readonly type: 'Active' | 'Leaving';
}
export interface ExitQ extends Struct {
    readonly candidates: Vec<AccountId>;
    readonly nominatorsLeaving: Vec<AccountId>;
    readonly candidateSchedule: Vec<ITuple<[AccountId, RoundIndex]>>;
    readonly nominatorSchedule: Vec<ITuple<[AccountId, Option<AccountId>, RoundIndex]>>;
}
export interface Index extends u64 {
}
export interface InflationInfo extends Struct {
    readonly expect: RangeBalance;
    readonly annual: RangePerbill;
    readonly round: RangePerbill;
}
export interface Lookup extends MultiAddress {
}
export interface MarketIdOf extends u128 {
}
export interface MaxRuntimeUsize extends u64 {
}
export interface Moment extends u64 {
}
export interface MultiHash extends Enum {
    readonly isSha3384: boolean;
    readonly asSha3384: U8aFixed;
    readonly type: 'Sha3384';
}
export interface Nominator2 extends Struct {
    readonly delegations: Vec<Bond>;
    readonly revocations: Vec<AccountId>;
    readonly total: Balance;
    readonly scheduledRevocationsCount: u32;
    readonly scheduledRevocationsTotal: Balance;
    readonly status: DelegatorStatus;
}
export interface NominatorAdded extends Enum {
    readonly isAddedToTop: boolean;
    readonly asAddedToTop: Balance;
    readonly isAddedToBottom: boolean;
    readonly type: 'AddedToTop' | 'AddedToBottom';
}
export interface OrderedSet extends Vec<Bond> {
}
export interface OwnedValuesParams extends Struct {
    readonly participatedBlocks: BlockNumber;
    readonly perpetualIncentives: Balance;
    readonly totalIncentives: Balance;
    readonly totalShares: Balance;
}
export interface ParachainBondConfig extends Struct {
    readonly account: AccountId;
    readonly percent: Percent;
}
export interface RangeBalance extends Struct {
    readonly min: Balance;
    readonly ideal: Balance;
    readonly max: Balance;
}
export interface RangePerbill extends Struct {
    readonly min: Perbill;
    readonly ideal: Perbill;
    readonly max: Perbill;
}
export interface RelayChainAccountId extends AccountId32 {
}
export interface RewardInfo extends Struct {
    readonly totalReward: Balance;
    readonly claimedReward: Balance;
}
export interface RoundIndex extends u32 {
}
export interface RoundInfo extends Struct {
    readonly current: RoundIndex;
    readonly first: BlockNumber;
    readonly length: u32;
}
export interface ScalarPosition extends Enum {
    readonly isLong: boolean;
    readonly isShort: boolean;
    readonly type: 'Long' | 'Short';
}
export interface SerdeWrapper extends Balance {
}
export interface VestingBlockNumber extends u32 {
}
export declare type PHANTOM_INDEX = 'index';
