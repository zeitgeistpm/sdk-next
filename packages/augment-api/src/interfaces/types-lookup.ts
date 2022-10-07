// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Range, RangeInclusive, Result, Set, Struct, Text, U8aFixed, Vec, WrapperKeepOpaque, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H256, MultiAddress, Perbill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u64;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportWeightsPerDispatchClassU64 (8) */
  interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
    readonly normal: u64;
    readonly operational: u64;
    readonly mandatory: u64;
  }

  /** @name SpRuntimeDigest (11) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (13) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (16) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (18) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportWeightsDispatchInfo (19) */
  interface FrameSupportWeightsDispatchInfo extends Struct {
    readonly weight: u64;
    readonly class: FrameSupportWeightsDispatchClass;
    readonly paysFee: FrameSupportWeightsPays;
  }

  /** @name FrameSupportWeightsDispatchClass (20) */
  interface FrameSupportWeightsDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportWeightsPays (21) */
  interface FrameSupportWeightsPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (22) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional';
  }

  /** @name SpRuntimeModuleError (23) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (24) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (25) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (26) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletSchedulerEvent (27) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<Bytes>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallLookupFailed: boolean;
    readonly asCallLookupFailed: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<Bytes>;
      readonly error: FrameSupportScheduleLookupError;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallLookupFailed';
  }

  /** @name FrameSupportScheduleLookupError (32) */
  interface FrameSupportScheduleLookupError extends Enum {
    readonly isUnknown: boolean;
    readonly isBadFormat: boolean;
    readonly type: 'Unknown' | 'BadFormat';
  }

  /** @name PalletPreimageEvent (33) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletBalancesEvent (34) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (35) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTreasuryEvent (36) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit';
  }

  /** @name PalletVestingEvent (37) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletMultisigEvent (38) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (39) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u64;
    readonly index: u32;
  }

  /** @name PalletDemocracyEvent (40) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
      readonly depositors: Vec<AccountId32>;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly refIndex: u32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u64;
    } & Struct;
    readonly isPreimageNoted: boolean;
    readonly asPreimageNoted: {
      readonly proposalHash: H256;
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isPreimageUsed: boolean;
    readonly asPreimageUsed: {
      readonly proposalHash: H256;
      readonly provider: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isPreimageInvalid: boolean;
    readonly asPreimageInvalid: {
      readonly proposalHash: H256;
      readonly refIndex: u32;
    } & Struct;
    readonly isPreimageMissing: boolean;
    readonly asPreimageMissing: {
      readonly proposalHash: H256;
      readonly refIndex: u32;
    } & Struct;
    readonly isPreimageReaped: boolean;
    readonly asPreimageReaped: {
      readonly proposalHash: H256;
      readonly provider: AccountId32;
      readonly deposit: u128;
      readonly reaper: AccountId32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Executed' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'PreimageNoted' | 'PreimageUsed' | 'PreimageInvalid' | 'PreimageMissing' | 'PreimageReaped' | 'Blacklisted' | 'Voted' | 'Seconded';
  }

  /** @name PalletDemocracyVoteThreshold (42) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (43) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletCollectiveEvent (45) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletMembershipEvent (47) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletIdentityEvent (52) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletUtilityEvent (53) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isItemCompleted: boolean;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'ItemCompleted' | 'DispatchedAs';
  }

  /** @name PalletProxyEvent (54) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isAnonymousCreated: boolean;
    readonly asAnonymousCreated: {
      readonly anonymous: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'AnonymousCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name ZeitgeistPrimitivesProxyType (55) */
  interface ZeitgeistPrimitivesProxyType extends Enum {
    readonly isAny: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Staking';
  }

  /** @name OrmlTokensModuleEvent (57) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved';
  }

  /** @name ZeitgeistPrimitivesAsset (58) */
  interface ZeitgeistPrimitivesAsset extends Enum {
    readonly isCategoricalOutcome: boolean;
    readonly asCategoricalOutcome: ITuple<[u128, u16]>;
    readonly isScalarOutcome: boolean;
    readonly asScalarOutcome: ITuple<[u128, ZeitgeistPrimitivesAssetScalarPosition]>;
    readonly isCombinatorialOutcome: boolean;
    readonly isPoolShare: boolean;
    readonly asPoolShare: u128;
    readonly isZtg: boolean;
    readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'CombinatorialOutcome' | 'PoolShare' | 'Ztg';
  }

  /** @name ZeitgeistPrimitivesAssetScalarPosition (59) */
  interface ZeitgeistPrimitivesAssetScalarPosition extends Enum {
    readonly isLong: boolean;
    readonly isShort: boolean;
    readonly type: 'Long' | 'Short';
  }

  /** @name ZrmlAuthorizedEvent (62) */
  type ZrmlAuthorizedEvent = Null;

  /** @name ZrmlCourtEvent (63) */
  interface ZrmlCourtEvent extends Enum {
    readonly isExitedJuror: boolean;
    readonly asExitedJuror: ITuple<[AccountId32, ZrmlCourtJuror]>;
    readonly isJoinedJuror: boolean;
    readonly asJoinedJuror: ITuple<[AccountId32, ZrmlCourtJuror]>;
    readonly type: 'ExitedJuror' | 'JoinedJuror';
  }

  /** @name ZrmlCourtJuror (64) */
  interface ZrmlCourtJuror extends Struct {
    readonly status: ZrmlCourtJurorStatus;
  }

  /** @name ZrmlCourtJurorStatus (65) */
  interface ZrmlCourtJurorStatus extends Enum {
    readonly isOk: boolean;
    readonly isTardy: boolean;
    readonly type: 'Ok' | 'Tardy';
  }

  /** @name ZrmlLiquidityMiningEvent (66) */
  interface ZrmlLiquidityMiningEvent extends Enum {
    readonly isAddedIncentives: boolean;
    readonly asAddedIncentives: u64;
    readonly isDistributedIncentives: boolean;
    readonly asDistributedIncentives: ITuple<[u128, u64]>;
    readonly isSubtractedIncentives: boolean;
    readonly asSubtractedIncentives: u64;
    readonly type: 'AddedIncentives' | 'DistributedIncentives' | 'SubtractedIncentives';
  }

  /** @name ZrmlSimpleDisputesEvent (68) */
  type ZrmlSimpleDisputesEvent = Null;

  /** @name ZrmlSwapsEvent (69) */
  interface ZrmlSwapsEvent extends Enum {
    readonly isDistributeShareHolderRewards: boolean;
    readonly asDistributeShareHolderRewards: ITuple<[u128, u64, u128]>;
    readonly isPoolCreate: boolean;
    readonly asPoolCreate: ITuple<[ZrmlSwapsEventsCommonPoolEventParams, ZeitgeistPrimitivesPool, u128, AccountId32]>;
    readonly isPoolClosed: boolean;
    readonly asPoolClosed: u128;
    readonly isPoolCleanedUp: boolean;
    readonly asPoolCleanedUp: u128;
    readonly isPoolActive: boolean;
    readonly asPoolActive: u128;
    readonly isPoolExit: boolean;
    readonly asPoolExit: ZrmlSwapsEventsPoolAssetsEvent;
    readonly isPoolExitSubsidy: boolean;
    readonly asPoolExitSubsidy: ITuple<[ZeitgeistPrimitivesAsset, u128, ZrmlSwapsEventsCommonPoolEventParams, u128]>;
    readonly isPoolExitWithExactAssetAmount: boolean;
    readonly asPoolExitWithExactAssetAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isPoolExitWithExactPoolAmount: boolean;
    readonly asPoolExitWithExactPoolAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isPoolJoin: boolean;
    readonly asPoolJoin: ZrmlSwapsEventsPoolAssetsEvent;
    readonly isPoolJoinSubsidy: boolean;
    readonly asPoolJoinSubsidy: ITuple<[ZeitgeistPrimitivesAsset, u128, ZrmlSwapsEventsCommonPoolEventParams]>;
    readonly isPoolJoinWithExactAssetAmount: boolean;
    readonly asPoolJoinWithExactAssetAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isPoolJoinWithExactPoolAmount: boolean;
    readonly asPoolJoinWithExactPoolAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isSubsidyCollected: boolean;
    readonly asSubsidyCollected: ITuple<[u128, Vec<ITuple<[AccountId32, u128]>>, u128]>;
    readonly isPoolDestroyed: boolean;
    readonly asPoolDestroyed: u128;
    readonly isPoolDestroyedInSubsidyPhase: boolean;
    readonly asPoolDestroyedInSubsidyPhase: ITuple<[u128, Vec<ITuple<[AccountId32, u128]>>]>;
    readonly isSwapExactAmountIn: boolean;
    readonly asSwapExactAmountIn: ZrmlSwapsEventsSwapEvent;
    readonly isSwapExactAmountOut: boolean;
    readonly asSwapExactAmountOut: ZrmlSwapsEventsSwapEvent;
    readonly type: 'DistributeShareHolderRewards' | 'PoolCreate' | 'PoolClosed' | 'PoolCleanedUp' | 'PoolActive' | 'PoolExit' | 'PoolExitSubsidy' | 'PoolExitWithExactAssetAmount' | 'PoolExitWithExactPoolAmount' | 'PoolJoin' | 'PoolJoinSubsidy' | 'PoolJoinWithExactAssetAmount' | 'PoolJoinWithExactPoolAmount' | 'SubsidyCollected' | 'PoolDestroyed' | 'PoolDestroyedInSubsidyPhase' | 'SwapExactAmountIn' | 'SwapExactAmountOut';
  }

  /** @name ZrmlSwapsEventsCommonPoolEventParams (70) */
  interface ZrmlSwapsEventsCommonPoolEventParams extends Struct {
    readonly poolId: u128;
    readonly who: AccountId32;
  }

  /** @name ZeitgeistPrimitivesPool (71) */
  interface ZeitgeistPrimitivesPool extends Struct {
    readonly assets: Vec<ZeitgeistPrimitivesAsset>;
    readonly baseAsset: ZeitgeistPrimitivesAsset;
    readonly marketId: u128;
    readonly poolStatus: ZeitgeistPrimitivesPoolStatus;
    readonly scoringRule: ZeitgeistPrimitivesPoolScoringRule;
    readonly swapFee: Option<u128>;
    readonly totalSubsidy: Option<u128>;
    readonly totalWeight: Option<u128>;
    readonly weights: Option<BTreeMap<ZeitgeistPrimitivesAsset, u128>>;
  }

  /** @name ZeitgeistPrimitivesPoolStatus (73) */
  interface ZeitgeistPrimitivesPoolStatus extends Enum {
    readonly isActive: boolean;
    readonly isCollectingSubsidy: boolean;
    readonly isClosed: boolean;
    readonly isClean: boolean;
    readonly isInitialized: boolean;
    readonly type: 'Active' | 'CollectingSubsidy' | 'Closed' | 'Clean' | 'Initialized';
  }

  /** @name ZeitgeistPrimitivesPoolScoringRule (74) */
  interface ZeitgeistPrimitivesPoolScoringRule extends Enum {
    readonly isCpmm: boolean;
    readonly isRikiddoSigmoidFeeMarketEma: boolean;
    readonly type: 'Cpmm' | 'RikiddoSigmoidFeeMarketEma';
  }

  /** @name ZrmlSwapsEventsPoolAssetsEvent (80) */
  interface ZrmlSwapsEventsPoolAssetsEvent extends Struct {
    readonly assets: Vec<ZeitgeistPrimitivesAsset>;
    readonly bounds: Vec<u128>;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: Vec<u128>;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsPoolAssetEvent (82) */
  interface ZrmlSwapsEventsPoolAssetEvent extends Struct {
    readonly asset: ZeitgeistPrimitivesAsset;
    readonly bound: u128;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: u128;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsSwapEvent (85) */
  interface ZrmlSwapsEventsSwapEvent extends Struct {
    readonly assetAmountIn: u128;
    readonly assetAmountOut: u128;
    readonly assetBound: Option<u128>;
    readonly assetIn: ZeitgeistPrimitivesAsset;
    readonly assetOut: ZeitgeistPrimitivesAsset;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly maxPrice: Option<u128>;
  }

  /** @name ZrmlPredictionMarketsEvent (86) */
  interface ZrmlPredictionMarketsEvent extends Enum {
    readonly isBadOnInitialize: boolean;
    readonly isBoughtCompleteSet: boolean;
    readonly asBoughtCompleteSet: ITuple<[u128, u128, AccountId32]>;
    readonly isMarketApproved: boolean;
    readonly asMarketApproved: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus]>;
    readonly isMarketCreated: boolean;
    readonly asMarketCreated: ITuple<[u128, AccountId32, ZeitgeistPrimitivesMarket]>;
    readonly isMarketDestroyed: boolean;
    readonly asMarketDestroyed: u128;
    readonly isMarketStartedWithSubsidy: boolean;
    readonly asMarketStartedWithSubsidy: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus]>;
    readonly isMarketInsufficientSubsidy: boolean;
    readonly asMarketInsufficientSubsidy: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus]>;
    readonly isMarketClosed: boolean;
    readonly asMarketClosed: u128;
    readonly isMarketDisputed: boolean;
    readonly asMarketDisputed: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketMarketDispute]>;
    readonly isMarketExpired: boolean;
    readonly asMarketExpired: u128;
    readonly isMarketRejected: boolean;
    readonly asMarketRejected: u128;
    readonly isMarketReported: boolean;
    readonly asMarketReported: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketReport]>;
    readonly isMarketResolved: boolean;
    readonly asMarketResolved: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesOutcomeReport]>;
    readonly isSoldCompleteSet: boolean;
    readonly asSoldCompleteSet: ITuple<[u128, u128, AccountId32]>;
    readonly isTokensRedeemed: boolean;
    readonly asTokensRedeemed: ITuple<[u128, ZeitgeistPrimitivesAsset, u128, u128, AccountId32]>;
    readonly type: 'BadOnInitialize' | 'BoughtCompleteSet' | 'MarketApproved' | 'MarketCreated' | 'MarketDestroyed' | 'MarketStartedWithSubsidy' | 'MarketInsufficientSubsidy' | 'MarketClosed' | 'MarketDisputed' | 'MarketExpired' | 'MarketRejected' | 'MarketReported' | 'MarketResolved' | 'SoldCompleteSet' | 'TokensRedeemed';
  }

  /** @name ZeitgeistPrimitivesMarketMarketStatus (87) */
  interface ZeitgeistPrimitivesMarketMarketStatus extends Enum {
    readonly isProposed: boolean;
    readonly isActive: boolean;
    readonly isSuspended: boolean;
    readonly isClosed: boolean;
    readonly isCollectingSubsidy: boolean;
    readonly isInsufficientSubsidy: boolean;
    readonly isReported: boolean;
    readonly isDisputed: boolean;
    readonly isResolved: boolean;
    readonly type: 'Proposed' | 'Active' | 'Suspended' | 'Closed' | 'CollectingSubsidy' | 'InsufficientSubsidy' | 'Reported' | 'Disputed' | 'Resolved';
  }

  /** @name ZeitgeistPrimitivesMarket (88) */
  interface ZeitgeistPrimitivesMarket extends Struct {
    readonly creator: AccountId32;
    readonly creation: ZeitgeistPrimitivesMarketMarketCreation;
    readonly creatorFee: u8;
    readonly oracle: AccountId32;
    readonly metadata: Bytes;
    readonly marketType: ZeitgeistPrimitivesMarketMarketType;
    readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
    readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
    readonly scoringRule: ZeitgeistPrimitivesPoolScoringRule;
    readonly status: ZeitgeistPrimitivesMarketMarketStatus;
    readonly report: Option<ZeitgeistPrimitivesMarketReport>;
    readonly resolvedOutcome: Option<ZeitgeistPrimitivesOutcomeReport>;
    readonly disputeMechanism: ZeitgeistPrimitivesMarketMarketDisputeMechanism;
  }

  /** @name ZeitgeistPrimitivesMarketMarketCreation (89) */
  interface ZeitgeistPrimitivesMarketMarketCreation extends Enum {
    readonly isPermissionless: boolean;
    readonly isAdvised: boolean;
    readonly type: 'Permissionless' | 'Advised';
  }

  /** @name ZeitgeistPrimitivesMarketMarketType (90) */
  interface ZeitgeistPrimitivesMarketMarketType extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: RangeInclusive<u128>;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZeitgeistPrimitivesMarketMarketPeriod (92) */
  interface ZeitgeistPrimitivesMarketMarketPeriod extends Enum {
    readonly isBlock: boolean;
    readonly asBlock: Range<u64>;
    readonly isTimestamp: boolean;
    readonly asTimestamp: Range<u64>;
    readonly type: 'Block' | 'Timestamp';
  }

  /** @name ZeitgeistPrimitivesMarketDeadlines (94) */
  interface ZeitgeistPrimitivesMarketDeadlines extends Struct {
    readonly gracePeriod: u64;
    readonly oracleDuration: u64;
    readonly disputeDuration: u64;
  }

  /** @name ZeitgeistPrimitivesMarketReport (96) */
  interface ZeitgeistPrimitivesMarketReport extends Struct {
    readonly at: u64;
    readonly by: AccountId32;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZeitgeistPrimitivesOutcomeReport (97) */
  interface ZeitgeistPrimitivesOutcomeReport extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: u128;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZeitgeistPrimitivesMarketMarketDisputeMechanism (99) */
  interface ZeitgeistPrimitivesMarketMarketDisputeMechanism extends Enum {
    readonly isAuthorized: boolean;
    readonly asAuthorized: AccountId32;
    readonly isCourt: boolean;
    readonly isSimpleDisputes: boolean;
    readonly type: 'Authorized' | 'Court' | 'SimpleDisputes';
  }

  /** @name ZeitgeistPrimitivesMarketMarketDispute (100) */
  interface ZeitgeistPrimitivesMarketMarketDispute extends Struct {
    readonly at: u64;
    readonly by: AccountId32;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZrmlStyxEvent (101) */
  interface ZrmlStyxEvent extends Enum {
    readonly isAccountCrossed: boolean;
    readonly asAccountCrossed: ITuple<[AccountId32, u128]>;
    readonly isCrossingFeeChanged: boolean;
    readonly asCrossingFeeChanged: u128;
    readonly type: 'AccountCrossed' | 'CrossingFeeChanged';
  }

  /** @name PalletGrandpaEvent (102) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (105) */
  interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (106) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletSudoEvent (107) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name FrameSystemPhase (109) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (112) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (115) */
  interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (120) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (121) */
  interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (122) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (124) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (125) */
  interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (126) */
  interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (127) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (131) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (132) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletSchedulerScheduledV3 (137) */
  interface PalletSchedulerScheduledV3 extends Struct {
    readonly maybeId: Option<Bytes>;
    readonly priority: u8;
    readonly call: FrameSupportScheduleMaybeHashed;
    readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
    readonly origin: BatteryStationRuntimeOriginCaller;
  }

  /** @name FrameSupportScheduleMaybeHashed (138) */
  interface FrameSupportScheduleMaybeHashed extends Enum {
    readonly isValue: boolean;
    readonly asValue: Call;
    readonly isHash: boolean;
    readonly asHash: H256;
    readonly type: 'Value' | 'Hash';
  }

  /** @name PalletSchedulerCall (140) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: Bytes;
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: Bytes;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: Bytes;
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletPreimageCall (142) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name PalletBalancesCall (143) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletTreasuryCall (148) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal';
  }

  /** @name PalletVestingCall (149) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (150) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u64;
  }

  /** @name PalletMultisigCall (151) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: WrapperKeepOpaque<Call>;
      readonly storeCall: bool;
      readonly maxWeight: u64;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: u64;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletDemocracyCall (154) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposalHash: H256;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
      readonly secondsUpperBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u64;
      readonly delay: u64;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isCancelQueued: boolean;
    readonly asCancelQueued: {
      readonly which: u32;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNotePreimageOperational: boolean;
    readonly asNotePreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimage: boolean;
    readonly asNoteImminentPreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimageOperational: boolean;
    readonly asNoteImminentPreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isReapPreimage: boolean;
    readonly asReapPreimage: {
      readonly proposalHash: H256;
      readonly proposalLenUpperBound: Compact<u32>;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: AccountId32;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isEnactProposal: boolean;
    readonly asEnactProposal: {
      readonly proposalHash: H256;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'CancelQueued' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'NotePreimage' | 'NotePreimageOperational' | 'NoteImminentPreimage' | 'NoteImminentPreimageOperational' | 'ReapPreimage' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'EnactProposal' | 'Blacklist' | 'CancelProposal';
  }

  /** @name PalletDemocracyConviction (155) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (157) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: Compact<u64>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name PalletMembershipCall (158) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: AccountId32;
      readonly add: AccountId32;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: AccountId32;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletIdentityCall (163) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: AccountId32;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (164) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (201) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (202) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (203) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletUtilityCall (204) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: BatteryStationRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs';
  }

  /** @name BatteryStationRuntimeOriginCaller (206) */
  interface BatteryStationRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isAdvisoryCommittee: boolean;
    readonly asAdvisoryCommittee: PalletCollectiveRawOrigin;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly type: 'System' | 'Void' | 'AdvisoryCommittee' | 'Council' | 'TechnicalCommittee';
  }

  /** @name FrameSupportDispatchRawOrigin (207) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (208) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name SpCoreVoid (211) */
  type SpCoreVoid = Null;

  /** @name PalletProxyCall (212) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: AccountId32;
      readonly forceProxyType: Option<ZeitgeistPrimitivesProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isAnonymous: boolean;
    readonly asAnonymous: {
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
      readonly index: u16;
    } & Struct;
    readonly isKillAnonymous: boolean;
    readonly asKillAnonymous: {
      readonly spawner: AccountId32;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly index: u16;
      readonly height: Compact<u64>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: AccountId32;
      readonly real: AccountId32;
      readonly forceProxyType: Option<ZeitgeistPrimitivesProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'Anonymous' | 'KillAnonymous' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name OrmlCurrenciesModuleCall (214) */
  interface OrmlCurrenciesModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferNativeCurrency: boolean;
    readonly asTransferNativeCurrency: {
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUpdateBalance: boolean;
    readonly asUpdateBalance: {
      readonly who: MultiAddress;
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: i128;
    } & Struct;
    readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance';
  }

  /** @name ZrmlAuthorizedCall (216) */
  interface ZrmlAuthorizedCall extends Enum {
    readonly isAuthorizeMarketOutcome: boolean;
    readonly asAuthorizeMarketOutcome: {
      readonly marketId: u128;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'AuthorizeMarketOutcome';
  }

  /** @name ZrmlCourtCall (217) */
  interface ZrmlCourtCall extends Enum {
    readonly isExitCourt: boolean;
    readonly isJoinCourt: boolean;
    readonly isVote: boolean;
    readonly asVote: {
      readonly marketId: Compact<u128>;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'ExitCourt' | 'JoinCourt' | 'Vote';
  }

  /** @name ZrmlLiquidityMiningCall (218) */
  interface ZrmlLiquidityMiningCall extends Enum {
    readonly isSetPerBlockDistribution: boolean;
    readonly asSetPerBlockDistribution: {
      readonly perBlockDistribution: Compact<u128>;
    } & Struct;
    readonly type: 'SetPerBlockDistribution';
  }

  /** @name ZrmlSwapsCall (219) */
  interface ZrmlSwapsCall extends Enum {
    readonly isAdminCleanUpPool: boolean;
    readonly asAdminCleanUpPool: {
      readonly marketId: Compact<u128>;
      readonly outcomeReport: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly isPoolExit: boolean;
    readonly asPoolExit: {
      readonly poolId: Compact<u128>;
      readonly poolAmount: Compact<u128>;
      readonly minAssetsOut: Vec<u128>;
    } & Struct;
    readonly isPoolExitSubsidy: boolean;
    readonly asPoolExitSubsidy: {
      readonly poolId: Compact<u128>;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isPoolExitWithExactAssetAmount: boolean;
    readonly asPoolExitWithExactAssetAmount: {
      readonly poolId: Compact<u128>;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly assetAmount: Compact<u128>;
      readonly maxPoolAmount: Compact<u128>;
    } & Struct;
    readonly isPoolExitWithExactPoolAmount: boolean;
    readonly asPoolExitWithExactPoolAmount: {
      readonly poolId: Compact<u128>;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly poolAmount: Compact<u128>;
      readonly minAssetAmount: Compact<u128>;
    } & Struct;
    readonly isPoolJoin: boolean;
    readonly asPoolJoin: {
      readonly poolId: Compact<u128>;
      readonly poolAmount: Compact<u128>;
      readonly maxAssetsIn: Vec<u128>;
    } & Struct;
    readonly isPoolJoinSubsidy: boolean;
    readonly asPoolJoinSubsidy: {
      readonly poolId: Compact<u128>;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isPoolJoinWithExactAssetAmount: boolean;
    readonly asPoolJoinWithExactAssetAmount: {
      readonly poolId: Compact<u128>;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly assetAmount: Compact<u128>;
      readonly minPoolAmount: Compact<u128>;
    } & Struct;
    readonly isPoolJoinWithExactPoolAmount: boolean;
    readonly asPoolJoinWithExactPoolAmount: {
      readonly poolId: Compact<u128>;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly poolAmount: Compact<u128>;
      readonly maxAssetAmount: Compact<u128>;
    } & Struct;
    readonly isSwapExactAmountIn: boolean;
    readonly asSwapExactAmountIn: {
      readonly poolId: Compact<u128>;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly assetAmountIn: Compact<u128>;
      readonly assetOut: ZeitgeistPrimitivesAsset;
      readonly minAssetAmountOut: Option<u128>;
      readonly maxPrice: Option<u128>;
    } & Struct;
    readonly isSwapExactAmountOut: boolean;
    readonly asSwapExactAmountOut: {
      readonly poolId: Compact<u128>;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly maxAssetAmountIn: Option<u128>;
      readonly assetOut: ZeitgeistPrimitivesAsset;
      readonly assetAmountOut: Compact<u128>;
      readonly maxPrice: Option<u128>;
    } & Struct;
    readonly type: 'AdminCleanUpPool' | 'PoolExit' | 'PoolExitSubsidy' | 'PoolExitWithExactAssetAmount' | 'PoolExitWithExactPoolAmount' | 'PoolJoin' | 'PoolJoinSubsidy' | 'PoolJoinWithExactAssetAmount' | 'PoolJoinWithExactPoolAmount' | 'SwapExactAmountIn' | 'SwapExactAmountOut';
  }

  /** @name ZrmlPredictionMarketsCall (220) */
  interface ZrmlPredictionMarketsCall extends Enum {
    readonly isAdminDestroyMarket: boolean;
    readonly asAdminDestroyMarket: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isAdminMoveMarketToClosed: boolean;
    readonly asAdminMoveMarketToClosed: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isAdminMoveMarketToResolved: boolean;
    readonly asAdminMoveMarketToResolved: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isApproveMarket: boolean;
    readonly asApproveMarket: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isBuyCompleteSet: boolean;
    readonly asBuyCompleteSet: {
      readonly marketId: Compact<u128>;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isDispute: boolean;
    readonly asDispute: {
      readonly marketId: Compact<u128>;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly isCreateCpmmMarketAndDeployAssets: boolean;
    readonly asCreateCpmmMarketAndDeployAssets: {
      readonly oracle: AccountId32;
      readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
      readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
      readonly metadata: ZeitgeistPrimitivesMultiHash;
      readonly marketType: ZeitgeistPrimitivesMarketMarketType;
      readonly disputeMechanism: ZeitgeistPrimitivesMarketMarketDisputeMechanism;
      readonly swapFee: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly weights: Vec<u128>;
    } & Struct;
    readonly isCreateMarket: boolean;
    readonly asCreateMarket: {
      readonly oracle: AccountId32;
      readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
      readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
      readonly metadata: ZeitgeistPrimitivesMultiHash;
      readonly creation: ZeitgeistPrimitivesMarketMarketCreation;
      readonly marketType: ZeitgeistPrimitivesMarketMarketType;
      readonly disputeMechanism: ZeitgeistPrimitivesMarketMarketDisputeMechanism;
      readonly scoringRule: ZeitgeistPrimitivesPoolScoringRule;
    } & Struct;
    readonly isDeploySwapPoolAndAdditionalLiquidity: boolean;
    readonly asDeploySwapPoolAndAdditionalLiquidity: {
      readonly marketId: Compact<u128>;
      readonly swapFee: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly weights: Vec<u128>;
    } & Struct;
    readonly isDeploySwapPoolForMarket: boolean;
    readonly asDeploySwapPoolForMarket: {
      readonly marketId: Compact<u128>;
      readonly swapFee: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly weights: Vec<u128>;
    } & Struct;
    readonly isRedeemShares: boolean;
    readonly asRedeemShares: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isRejectMarket: boolean;
    readonly asRejectMarket: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isReport: boolean;
    readonly asReport: {
      readonly marketId: Compact<u128>;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly isSellCompleteSet: boolean;
    readonly asSellCompleteSet: {
      readonly marketId: Compact<u128>;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'AdminDestroyMarket' | 'AdminMoveMarketToClosed' | 'AdminMoveMarketToResolved' | 'ApproveMarket' | 'BuyCompleteSet' | 'Dispute' | 'CreateCpmmMarketAndDeployAssets' | 'CreateMarket' | 'DeploySwapPoolAndAdditionalLiquidity' | 'DeploySwapPoolForMarket' | 'RedeemShares' | 'RejectMarket' | 'Report' | 'SellCompleteSet';
  }

  /** @name ZeitgeistPrimitivesMultiHash (221) */
  interface ZeitgeistPrimitivesMultiHash extends Enum {
    readonly isSha3384: boolean;
    readonly asSha3384: U8aFixed;
    readonly type: 'Sha3384';
  }

  /** @name ZrmlStyxCall (223) */
  interface ZrmlStyxCall extends Enum {
    readonly isCross: boolean;
    readonly isSetBurnAmount: boolean;
    readonly asSetBurnAmount: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'Cross' | 'SetBurnAmount';
  }

  /** @name PalletGrandpaCall (224) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u64;
      readonly bestFinalizedBlockNumber: u64;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (225) */
  interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (226) */
  interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (227) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (228) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpFinalityGrandpaAppSignature (229) */
  interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (230) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (233) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (234) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name PalletSudoCall (236) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: u64;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletSchedulerError (237) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange';
  }

  /** @name PalletPreimageRequestStatus (238) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: Option<ITuple<[AccountId32, u128]>>;
    readonly isRequested: boolean;
    readonly asRequested: u32;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (241) */
  interface PalletPreimageError extends Enum {
    readonly isTooLarge: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooLarge' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PalletBalancesBalanceLock (243) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (244) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (247) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (249) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesError (250) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (252) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (254) */
  interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128;
    readonly coeffFrac: Perbill;
    readonly negative: bool;
    readonly degree: u8;
  }

  /** @name PalletTreasuryProposal (255) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (259) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (260) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals';
  }

  /** @name PalletVestingReleases (263) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (264) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletMultisigMultisig (266) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (268) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletDemocracyPreimageStatus (272) */
  interface PalletDemocracyPreimageStatus extends Enum {
    readonly isMissing: boolean;
    readonly asMissing: u64;
    readonly isAvailable: boolean;
    readonly asAvailable: {
      readonly data: Bytes;
      readonly provider: AccountId32;
      readonly deposit: u128;
      readonly since: u64;
      readonly expiry: Option<u64>;
    } & Struct;
    readonly type: 'Missing' | 'Available';
  }

  /** @name PalletDemocracyReferendumInfo (273) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u64;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (274) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u64;
    readonly proposalHash: H256;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u64;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (275) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (276) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (279) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (280) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u64, u128]> {}

  /** @name PalletDemocracyReleases (283) */
  interface PalletDemocracyReleases extends Enum {
    readonly isV1: boolean;
    readonly type: 'V1';
  }

  /** @name PalletDemocracyError (284) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isDuplicatePreimage: boolean;
    readonly isNotImminent: boolean;
    readonly isTooEarly: boolean;
    readonly isImminent: boolean;
    readonly isPreimageMissing: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isPreimageInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooManyProposals: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'DuplicatePreimage' | 'NotImminent' | 'TooEarly' | 'Imminent' | 'PreimageMissing' | 'ReferendumInvalid' | 'PreimageInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooManyProposals';
  }

  /** @name PalletCollectiveVotes (286) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u64;
  }

  /** @name PalletCollectiveError (287) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletMembershipError (288) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly type: 'AlreadyMember' | 'NotMember';
  }

  /** @name PalletIdentityRegistration (295) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (303) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (305) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned';
  }

  /** @name PalletUtilityError (306) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletProxyProxyDefinition (309) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: ZeitgeistPrimitivesProxyType;
    readonly delay: u64;
  }

  /** @name PalletProxyAnnouncement (313) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u64;
  }

  /** @name PalletProxyError (315) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name OrmlCurrenciesModuleError (316) */
  interface OrmlCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
  }

  /** @name OrmlTokensBalanceLock (319) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (321) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (323) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (325) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name ZrmlMarketCommonsError (326) */
  interface ZrmlMarketCommonsError extends Enum {
    readonly isMarketDoesNotExist: boolean;
    readonly isMarketPoolDoesNotExist: boolean;
    readonly isNoMarketHasBeenCreated: boolean;
    readonly isNoReport: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly type: 'MarketDoesNotExist' | 'MarketPoolDoesNotExist' | 'NoMarketHasBeenCreated' | 'NoReport' | 'PoolAlreadyExists';
  }

  /** @name ZrmlAuthorizedError (327) */
  interface ZrmlAuthorizedError extends Enum {
    readonly isNotAuthorizedForThisMarket: boolean;
    readonly isMarketDoesNotHaveDisputeMechanismAuthorized: boolean;
    readonly isMarketIsNotDisputed: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly type: 'NotAuthorizedForThisMarket' | 'MarketDoesNotHaveDisputeMechanismAuthorized' | 'MarketIsNotDisputed' | 'OutcomeMismatch';
  }

  /** @name ZrmlCourtError (330) */
  interface ZrmlCourtError extends Enum {
    readonly isJurorAlreadyExists: boolean;
    readonly isJurorDoesNotExists: boolean;
    readonly isMarketDoesNotHaveCourtMechanism: boolean;
    readonly isNoVotes: boolean;
    readonly isOnlyJurorsCanVote: boolean;
    readonly type: 'JurorAlreadyExists' | 'JurorDoesNotExists' | 'MarketDoesNotHaveCourtMechanism' | 'NoVotes' | 'OnlyJurorsCanVote';
  }

  /** @name ZrmlLiquidityMiningOwnedValuesParams (331) */
  interface ZrmlLiquidityMiningOwnedValuesParams extends Struct {
    readonly participatedBlocks: u64;
    readonly perpetualIncentives: u128;
    readonly totalIncentives: u128;
    readonly totalShares: u128;
  }

  /** @name ZrmlLiquidityMiningError (332) */
  interface ZrmlLiquidityMiningError extends Enum {
    readonly isFundDoesNotHaveEnoughBalance: boolean;
    readonly type: 'FundDoesNotHaveEnoughBalance';
  }

  /** @name ZrmlRikiddoRikiddoSigmoidMV (333) */
  interface ZrmlRikiddoRikiddoSigmoidMV extends Struct {
    readonly config: ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig;
    readonly fees: ZrmlRikiddoSigmoidFeeFeeSigmoid;
    readonly maShort: ZrmlRikiddoEmaMarketVolume;
    readonly maLong: ZrmlRikiddoEmaMarketVolume;
  }

  /** @name SubstrateFixedFixedU128 (334) */
  interface SubstrateFixedFixedU128 extends Struct {
    readonly bits: u128;
  }

  /** @name TypenumUIntUInt (339) */
  interface TypenumUIntUInt extends Struct {
    readonly msb: TypenumUIntUTerm;
    readonly lsb: TypenumBitB0;
  }

  /** @name TypenumUIntUTerm (340) */
  interface TypenumUIntUTerm extends Struct {
    readonly msb: TypenumUintUTerm;
    readonly lsb: TypenumBitB1;
  }

  /** @name TypenumUintUTerm (341) */
  type TypenumUintUTerm = Null;

  /** @name TypenumBitB1 (342) */
  type TypenumBitB1 = Null;

  /** @name TypenumBitB0 (343) */
  type TypenumBitB0 = Null;

  /** @name SubstrateFixedFixedI128 (344) */
  interface SubstrateFixedFixedI128 extends Struct {
    readonly bits: i128;
  }

  /** @name ZrmlRikiddoSigmoidFeeFeeSigmoid (345) */
  interface ZrmlRikiddoSigmoidFeeFeeSigmoid extends Struct {
    readonly config: ZrmlRikiddoSigmoidFeeFeeSigmoidConfig;
  }

  /** @name ZrmlRikiddoSigmoidFeeFeeSigmoidConfig (346) */
  interface ZrmlRikiddoSigmoidFeeFeeSigmoidConfig extends Struct {
    readonly m: SubstrateFixedFixedI128;
    readonly p: SubstrateFixedFixedI128;
    readonly n: SubstrateFixedFixedI128;
    readonly initialFee: SubstrateFixedFixedI128;
    readonly minRevenue: SubstrateFixedFixedI128;
  }

  /** @name ZrmlRikiddoEmaMarketVolume (347) */
  interface ZrmlRikiddoEmaMarketVolume extends Struct {
    readonly config: ZrmlRikiddoEmaMarketVolumeEmaConfig;
    readonly ema: SubstrateFixedFixedU128;
    readonly multiplier: SubstrateFixedFixedU128;
    readonly lastTime: u64;
    readonly state: ZrmlRikiddoEmaMarketVolumeMarketVolumeState;
    readonly startTime: u64;
    readonly volumesPerPeriod: SubstrateFixedFixedU128;
  }

  /** @name ZrmlRikiddoEmaMarketVolumeEmaConfig (348) */
  interface ZrmlRikiddoEmaMarketVolumeEmaConfig extends Struct {
    readonly emaPeriod: ZrmlRikiddoTimespan;
    readonly emaPeriodEstimateAfter: Option<ZrmlRikiddoTimespan>;
    readonly smoothing: SubstrateFixedFixedU128;
  }

  /** @name ZrmlRikiddoTimespan (349) */
  interface ZrmlRikiddoTimespan extends Enum {
    readonly isSeconds: boolean;
    readonly asSeconds: u32;
    readonly isMinutes: boolean;
    readonly asMinutes: u32;
    readonly isHours: boolean;
    readonly asHours: u32;
    readonly isDays: boolean;
    readonly asDays: u16;
    readonly isWeeks: boolean;
    readonly asWeeks: u16;
    readonly type: 'Seconds' | 'Minutes' | 'Hours' | 'Days' | 'Weeks';
  }

  /** @name ZrmlRikiddoEmaMarketVolumeMarketVolumeState (351) */
  interface ZrmlRikiddoEmaMarketVolumeMarketVolumeState extends Enum {
    readonly isUninitialized: boolean;
    readonly isDataCollectionStarted: boolean;
    readonly isDataCollected: boolean;
    readonly type: 'Uninitialized' | 'DataCollectionStarted' | 'DataCollected';
  }

  /** @name ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig (352) */
  interface ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig extends Struct {
    readonly initialFee: SubstrateFixedFixedI128;
    readonly log2E: SubstrateFixedFixedI128;
  }

  /** @name ZrmlRikiddoError (353) */
  interface ZrmlRikiddoError extends Enum {
    readonly isFixedConversionImpossible: boolean;
    readonly isRikiddoNotFoundForPool: boolean;
    readonly isRikiddoAlreadyExistsForPool: boolean;
    readonly type: 'FixedConversionImpossible' | 'RikiddoNotFoundForPool' | 'RikiddoAlreadyExistsForPool';
  }

  /** @name ZrmlSimpleDisputesError (354) */
  interface ZrmlSimpleDisputesError extends Enum {
    readonly isInvalidMarketStatus: boolean;
    readonly isMarketDoesNotHaveSimpleDisputesMechanism: boolean;
    readonly type: 'InvalidMarketStatus' | 'MarketDoesNotHaveSimpleDisputesMechanism';
  }

  /** @name ZrmlSwapsError (356) */
  interface ZrmlSwapsError extends Enum {
    readonly isAboveMaximumWeight: boolean;
    readonly isAssetNotBound: boolean;
    readonly isAssetNotInPool: boolean;
    readonly isBaseAssetNotFound: boolean;
    readonly isBadLimitPrice: boolean;
    readonly isBelowMinimumWeight: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientSubsidy: boolean;
    readonly isInvalidAmountArgument: boolean;
    readonly isInvalidFeeArgument: boolean;
    readonly isInvalidPoolStatus: boolean;
    readonly isInvalidScoringRule: boolean;
    readonly isInvalidStateTransition: boolean;
    readonly isInvalidWeightArgument: boolean;
    readonly isLimitIn: boolean;
    readonly isInvalidSubsidyAmount: boolean;
    readonly isLimitMissing: boolean;
    readonly isLimitOut: boolean;
    readonly isMathApproximation: boolean;
    readonly isMaxInRatio: boolean;
    readonly isMaxOutRatio: boolean;
    readonly isMaxTotalWeight: boolean;
    readonly isNoSubsidyProvided: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isPoolDrain: boolean;
    readonly isPoolIsNotActive: boolean;
    readonly isPoolMissingFee: boolean;
    readonly isPoolMissingSubsidy: boolean;
    readonly isPoolMissingWeight: boolean;
    readonly isProvidedValuesLenMustEqualAssetsLen: boolean;
    readonly isSwapFeeMissing: boolean;
    readonly isSwapFeeTooHigh: boolean;
    readonly isTooFewAssets: boolean;
    readonly isTooManyAssets: boolean;
    readonly isSomeIdenticalAssets: boolean;
    readonly isUnsupportedTrade: boolean;
    readonly isWinningAssetNotFound: boolean;
    readonly isZeroAmount: boolean;
    readonly type: 'AboveMaximumWeight' | 'AssetNotBound' | 'AssetNotInPool' | 'BaseAssetNotFound' | 'BadLimitPrice' | 'BelowMinimumWeight' | 'InsufficientBalance' | 'InsufficientLiquidity' | 'InsufficientSubsidy' | 'InvalidAmountArgument' | 'InvalidFeeArgument' | 'InvalidPoolStatus' | 'InvalidScoringRule' | 'InvalidStateTransition' | 'InvalidWeightArgument' | 'LimitIn' | 'InvalidSubsidyAmount' | 'LimitMissing' | 'LimitOut' | 'MathApproximation' | 'MaxInRatio' | 'MaxOutRatio' | 'MaxTotalWeight' | 'NoSubsidyProvided' | 'PoolDoesNotExist' | 'PoolDrain' | 'PoolIsNotActive' | 'PoolMissingFee' | 'PoolMissingSubsidy' | 'PoolMissingWeight' | 'ProvidedValuesLenMustEqualAssetsLen' | 'SwapFeeMissing' | 'SwapFeeTooHigh' | 'TooFewAssets' | 'TooManyAssets' | 'SomeIdenticalAssets' | 'UnsupportedTrade' | 'WinningAssetNotFound' | 'ZeroAmount';
  }

  /** @name ZeitgeistPrimitivesMarketSubsidyUntil (361) */
  interface ZeitgeistPrimitivesMarketSubsidyUntil extends Struct {
    readonly marketId: u128;
    readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
  }

  /** @name ZrmlPredictionMarketsError (364) */
  interface ZrmlPredictionMarketsError extends Enum {
    readonly isCannotDisputeSameOutcome: boolean;
    readonly isInsufficientFundsInMarketAccount: boolean;
    readonly isInsufficientShareBalance: boolean;
    readonly isInvalidMultihash: boolean;
    readonly isInvalidMarketType: boolean;
    readonly isInvalidScoringRule: boolean;
    readonly isNotEnoughBalance: boolean;
    readonly isMarketAlreadyReported: boolean;
    readonly isMarketIsNotActive: boolean;
    readonly isMarketIsNotClosed: boolean;
    readonly isMarketIsNotCollectingSubsidy: boolean;
    readonly isMarketIsNotProposed: boolean;
    readonly isMarketIsNotReported: boolean;
    readonly isMarketIsNotResolved: boolean;
    readonly isMarketStartTooSoon: boolean;
    readonly isMarketStartTooLate: boolean;
    readonly isMaxDisputesReached: boolean;
    readonly isNotEnoughCategories: boolean;
    readonly isNoWinningBalance: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly isReporterNotOracle: boolean;
    readonly isStorageOverflow: boolean;
    readonly isTooManyCategories: boolean;
    readonly isInvalidMarketStatus: boolean;
    readonly isUnexpectedNoneInPostInfo: boolean;
    readonly isZeroAmount: boolean;
    readonly isInvalidMarketPeriod: boolean;
    readonly isInvalidOutcomeRange: boolean;
    readonly isNotAllowedToReportYet: boolean;
    readonly isDisputeDurationSmallerThanMinDisputeDuration: boolean;
    readonly isOracleDurationSmallerThanMinOracleDuration: boolean;
    readonly isDisputeDurationGreaterThanMaxDisputeDuration: boolean;
    readonly isGracePeriodGreaterThanMaxGracePeriod: boolean;
    readonly isOracleDurationGreaterThanMaxOracleDuration: boolean;
    readonly isWeightsLenMustEqualAssetsLen: boolean;
    readonly type: 'CannotDisputeSameOutcome' | 'InsufficientFundsInMarketAccount' | 'InsufficientShareBalance' | 'InvalidMultihash' | 'InvalidMarketType' | 'InvalidScoringRule' | 'NotEnoughBalance' | 'MarketAlreadyReported' | 'MarketIsNotActive' | 'MarketIsNotClosed' | 'MarketIsNotCollectingSubsidy' | 'MarketIsNotProposed' | 'MarketIsNotReported' | 'MarketIsNotResolved' | 'MarketStartTooSoon' | 'MarketStartTooLate' | 'MaxDisputesReached' | 'NotEnoughCategories' | 'NoWinningBalance' | 'OutcomeMismatch' | 'ReporterNotOracle' | 'StorageOverflow' | 'TooManyCategories' | 'InvalidMarketStatus' | 'UnexpectedNoneInPostInfo' | 'ZeroAmount' | 'InvalidMarketPeriod' | 'InvalidOutcomeRange' | 'NotAllowedToReportYet' | 'DisputeDurationSmallerThanMinDisputeDuration' | 'OracleDurationSmallerThanMinOracleDuration' | 'DisputeDurationGreaterThanMaxDisputeDuration' | 'GracePeriodGreaterThanMaxGracePeriod' | 'OracleDurationGreaterThanMaxOracleDuration' | 'WeightsLenMustEqualAssetsLen';
  }

  /** @name ZrmlStyxError (365) */
  interface ZrmlStyxError extends Enum {
    readonly isFundDoesNotHaveEnoughFreeBalance: boolean;
    readonly isHasAlreadyCrossed: boolean;
    readonly type: 'FundDoesNotHaveEnoughFreeBalance' | 'HasAlreadyCrossed';
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (367) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (368) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletGrandpaStoredState (371) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (372) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u64;
    readonly delay: u64;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u64>;
  }

  /** @name PalletGrandpaError (375) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletSudoError (376) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name SpRuntimeMultiSignature (378) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (379) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (380) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (383) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (384) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (385) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (386) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (389) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u64> {}

  /** @name FrameSystemExtensionsCheckWeight (390) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (391) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name BatteryStationRuntimeRuntime (392) */
  type BatteryStationRuntimeRuntime = Null;

} // declare module
