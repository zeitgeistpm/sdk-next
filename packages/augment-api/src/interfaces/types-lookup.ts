// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Range, RangeInclusive, Result, Set, Struct, Text, U8aFixed, Vec, WrapperKeepOpaque, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
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

  /** @name PalletTransactionPaymentEvent (36) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletTreasuryEvent (37) */
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
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved';
  }

  /** @name PalletVestingEvent (38) */
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

  /** @name PalletMultisigEvent (39) */
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

  /** @name PalletMultisigTimepoint (40) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u64;
    readonly index: u32;
  }

  /** @name PalletBountiesEvent (41) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletDemocracyEvent (42) */
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
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Executed' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'PreimageNoted' | 'PreimageUsed' | 'PreimageInvalid' | 'PreimageMissing' | 'PreimageReaped' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled';
  }

  /** @name PalletDemocracyVoteThreshold (44) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (45) */
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

  /** @name PalletCollectiveEvent (47) */
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

  /** @name PalletMembershipEvent (49) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletIdentityEvent (54) */
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

  /** @name PalletUtilityEvent (55) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletProxyEvent (56) */
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

  /** @name ZeitgeistPrimitivesProxyType (57) */
  interface ZeitgeistPrimitivesProxyType extends Enum {
    readonly isAny: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Staking';
  }

  /** @name OrmlTokensModuleEvent (59) */
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

  /** @name ZeitgeistPrimitivesAsset (60) */
  interface ZeitgeistPrimitivesAsset extends Enum {
    readonly isCategoricalOutcome: boolean;
    readonly asCategoricalOutcome: ITuple<[u128, u16]>;
    readonly isScalarOutcome: boolean;
    readonly asScalarOutcome: ITuple<[u128, ZeitgeistPrimitivesAssetScalarPosition]>;
    readonly isCombinatorialOutcome: boolean;
    readonly isPoolShare: boolean;
    readonly asPoolShare: u128;
    readonly isZtg: boolean;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'CombinatorialOutcome' | 'PoolShare' | 'Ztg' | 'ForeignAsset';
  }

  /** @name ZeitgeistPrimitivesAssetScalarPosition (61) */
  interface ZeitgeistPrimitivesAssetScalarPosition extends Enum {
    readonly isLong: boolean;
    readonly isShort: boolean;
    readonly type: 'Long' | 'Short';
  }

  /** @name ZrmlAuthorizedEvent (64) */
  type ZrmlAuthorizedEvent = Null;

  /** @name ZrmlCourtEvent (65) */
  interface ZrmlCourtEvent extends Enum {
    readonly isExitedJuror: boolean;
    readonly asExitedJuror: ITuple<[AccountId32, ZrmlCourtJuror]>;
    readonly isJoinedJuror: boolean;
    readonly asJoinedJuror: ITuple<[AccountId32, ZrmlCourtJuror]>;
    readonly type: 'ExitedJuror' | 'JoinedJuror';
  }

  /** @name ZrmlCourtJuror (66) */
  interface ZrmlCourtJuror extends Struct {
    readonly status: ZrmlCourtJurorStatus;
  }

  /** @name ZrmlCourtJurorStatus (67) */
  interface ZrmlCourtJurorStatus extends Enum {
    readonly isOk: boolean;
    readonly isTardy: boolean;
    readonly type: 'Ok' | 'Tardy';
  }

  /** @name ZrmlLiquidityMiningEvent (68) */
  interface ZrmlLiquidityMiningEvent extends Enum {
    readonly isAddedIncentives: boolean;
    readonly asAddedIncentives: u64;
    readonly isDistributedIncentives: boolean;
    readonly asDistributedIncentives: ITuple<[u128, u64]>;
    readonly isSubtractedIncentives: boolean;
    readonly asSubtractedIncentives: u64;
    readonly type: 'AddedIncentives' | 'DistributedIncentives' | 'SubtractedIncentives';
  }

  /** @name ZrmlSimpleDisputesEvent (70) */
  type ZrmlSimpleDisputesEvent = Null;

  /** @name ZrmlSwapsEvent (71) */
  interface ZrmlSwapsEvent extends Enum {
    readonly isArbitrageBuyBurn: boolean;
    readonly asArbitrageBuyBurn: ITuple<[u128, u128]>;
    readonly isArbitrageMintSell: boolean;
    readonly asArbitrageMintSell: ITuple<[u128, u128]>;
    readonly isArbitrageSkipped: boolean;
    readonly asArbitrageSkipped: u128;
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
    readonly type: 'ArbitrageBuyBurn' | 'ArbitrageMintSell' | 'ArbitrageSkipped' | 'DistributeShareHolderRewards' | 'PoolCreate' | 'PoolClosed' | 'PoolCleanedUp' | 'PoolActive' | 'PoolExit' | 'PoolExitSubsidy' | 'PoolExitWithExactAssetAmount' | 'PoolExitWithExactPoolAmount' | 'PoolJoin' | 'PoolJoinSubsidy' | 'PoolJoinWithExactAssetAmount' | 'PoolJoinWithExactPoolAmount' | 'SubsidyCollected' | 'PoolDestroyed' | 'PoolDestroyedInSubsidyPhase' | 'SwapExactAmountIn' | 'SwapExactAmountOut';
  }

  /** @name ZrmlSwapsEventsCommonPoolEventParams (72) */
  interface ZrmlSwapsEventsCommonPoolEventParams extends Struct {
    readonly poolId: u128;
    readonly who: AccountId32;
  }

  /** @name ZeitgeistPrimitivesPool (73) */
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

  /** @name ZeitgeistPrimitivesPoolStatus (75) */
  interface ZeitgeistPrimitivesPoolStatus extends Enum {
    readonly isActive: boolean;
    readonly isCollectingSubsidy: boolean;
    readonly isClosed: boolean;
    readonly isClean: boolean;
    readonly isInitialized: boolean;
    readonly type: 'Active' | 'CollectingSubsidy' | 'Closed' | 'Clean' | 'Initialized';
  }

  /** @name ZeitgeistPrimitivesPoolScoringRule (76) */
  interface ZeitgeistPrimitivesPoolScoringRule extends Enum {
    readonly isCpmm: boolean;
    readonly isRikiddoSigmoidFeeMarketEma: boolean;
    readonly type: 'Cpmm' | 'RikiddoSigmoidFeeMarketEma';
  }

  /** @name ZrmlSwapsEventsPoolAssetsEvent (82) */
  interface ZrmlSwapsEventsPoolAssetsEvent extends Struct {
    readonly assets: Vec<ZeitgeistPrimitivesAsset>;
    readonly bounds: Vec<u128>;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: Vec<u128>;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsPoolAssetEvent (84) */
  interface ZrmlSwapsEventsPoolAssetEvent extends Struct {
    readonly asset: ZeitgeistPrimitivesAsset;
    readonly bound: u128;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: u128;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsSwapEvent (87) */
  interface ZrmlSwapsEventsSwapEvent extends Struct {
    readonly assetAmountIn: u128;
    readonly assetAmountOut: u128;
    readonly assetBound: Option<u128>;
    readonly assetIn: ZeitgeistPrimitivesAsset;
    readonly assetOut: ZeitgeistPrimitivesAsset;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly maxPrice: Option<u128>;
  }

  /** @name ZrmlPredictionMarketsEvent (88) */
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
    readonly asMarketRejected: ITuple<[u128, Bytes]>;
    readonly isMarketReported: boolean;
    readonly asMarketReported: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketReport]>;
    readonly isMarketResolved: boolean;
    readonly asMarketResolved: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesOutcomeReport]>;
    readonly isMarketRequestedEdit: boolean;
    readonly asMarketRequestedEdit: ITuple<[u128, Bytes]>;
    readonly isMarketEdited: boolean;
    readonly asMarketEdited: ITuple<[u128, ZeitgeistPrimitivesMarket]>;
    readonly isSoldCompleteSet: boolean;
    readonly asSoldCompleteSet: ITuple<[u128, u128, AccountId32]>;
    readonly isTokensRedeemed: boolean;
    readonly asTokensRedeemed: ITuple<[u128, ZeitgeistPrimitivesAsset, u128, u128, AccountId32]>;
    readonly isGlobalDisputeStarted: boolean;
    readonly asGlobalDisputeStarted: u128;
    readonly type: 'BadOnInitialize' | 'BoughtCompleteSet' | 'MarketApproved' | 'MarketCreated' | 'MarketDestroyed' | 'MarketStartedWithSubsidy' | 'MarketInsufficientSubsidy' | 'MarketClosed' | 'MarketDisputed' | 'MarketExpired' | 'MarketRejected' | 'MarketReported' | 'MarketResolved' | 'MarketRequestedEdit' | 'MarketEdited' | 'SoldCompleteSet' | 'TokensRedeemed' | 'GlobalDisputeStarted';
  }

  /** @name ZeitgeistPrimitivesMarketMarketStatus (89) */
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

  /** @name ZeitgeistPrimitivesMarket (90) */
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

  /** @name ZeitgeistPrimitivesMarketMarketCreation (91) */
  interface ZeitgeistPrimitivesMarketMarketCreation extends Enum {
    readonly isPermissionless: boolean;
    readonly isAdvised: boolean;
    readonly type: 'Permissionless' | 'Advised';
  }

  /** @name ZeitgeistPrimitivesMarketMarketType (92) */
  interface ZeitgeistPrimitivesMarketMarketType extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: RangeInclusive<u128>;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZeitgeistPrimitivesMarketMarketPeriod (94) */
  interface ZeitgeistPrimitivesMarketMarketPeriod extends Enum {
    readonly isBlock: boolean;
    readonly asBlock: Range<u64>;
    readonly isTimestamp: boolean;
    readonly asTimestamp: Range<u64>;
    readonly type: 'Block' | 'Timestamp';
  }

  /** @name ZeitgeistPrimitivesMarketDeadlines (96) */
  interface ZeitgeistPrimitivesMarketDeadlines extends Struct {
    readonly gracePeriod: u64;
    readonly oracleDuration: u64;
    readonly disputeDuration: u64;
  }

  /** @name ZeitgeistPrimitivesMarketReport (98) */
  interface ZeitgeistPrimitivesMarketReport extends Struct {
    readonly at: u64;
    readonly by: AccountId32;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZeitgeistPrimitivesOutcomeReport (99) */
  interface ZeitgeistPrimitivesOutcomeReport extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: u128;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZeitgeistPrimitivesMarketMarketDisputeMechanism (101) */
  interface ZeitgeistPrimitivesMarketMarketDisputeMechanism extends Enum {
    readonly isAuthorized: boolean;
    readonly isCourt: boolean;
    readonly isSimpleDisputes: boolean;
    readonly type: 'Authorized' | 'Court' | 'SimpleDisputes';
  }

  /** @name ZeitgeistPrimitivesMarketMarketDispute (102) */
  interface ZeitgeistPrimitivesMarketMarketDispute extends Struct {
    readonly at: u64;
    readonly by: AccountId32;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZrmlStyxEvent (105) */
  interface ZrmlStyxEvent extends Enum {
    readonly isAccountCrossed: boolean;
    readonly asAccountCrossed: ITuple<[AccountId32, u128]>;
    readonly isCrossingFeeChanged: boolean;
    readonly asCrossingFeeChanged: u128;
    readonly type: 'AccountCrossed' | 'CrossingFeeChanged';
  }

  /** @name CumulusPalletParachainSystemEvent (106) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: u64;
      readonly dmqHead: H256;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed';
  }

  /** @name PalletParachainStakingEvent (107) */
  interface PalletParachainStakingEvent extends Enum {
    readonly isNewRound: boolean;
    readonly asNewRound: {
      readonly startingBlock: u64;
      readonly round: u32;
      readonly selectedCollatorsNumber: u32;
      readonly totalBalance: u128;
    } & Struct;
    readonly isJoinedCollatorCandidates: boolean;
    readonly asJoinedCollatorCandidates: {
      readonly account: AccountId32;
      readonly amountLocked: u128;
      readonly newTotalAmtLocked: u128;
    } & Struct;
    readonly isCollatorChosen: boolean;
    readonly asCollatorChosen: {
      readonly round: u32;
      readonly collatorAccount: AccountId32;
      readonly totalExposedAmount: u128;
    } & Struct;
    readonly isCandidateBondLessRequested: boolean;
    readonly asCandidateBondLessRequested: {
      readonly candidate: AccountId32;
      readonly amountToDecrease: u128;
      readonly executeRound: u32;
    } & Struct;
    readonly isCandidateBondedMore: boolean;
    readonly asCandidateBondedMore: {
      readonly candidate: AccountId32;
      readonly amount: u128;
      readonly newTotalBond: u128;
    } & Struct;
    readonly isCandidateBondedLess: boolean;
    readonly asCandidateBondedLess: {
      readonly candidate: AccountId32;
      readonly amount: u128;
      readonly newBond: u128;
    } & Struct;
    readonly isCandidateWentOffline: boolean;
    readonly asCandidateWentOffline: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateBackOnline: boolean;
    readonly asCandidateBackOnline: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateScheduledExit: boolean;
    readonly asCandidateScheduledExit: {
      readonly exitAllowedRound: u32;
      readonly candidate: AccountId32;
      readonly scheduledExit: u32;
    } & Struct;
    readonly isCancelledCandidateExit: boolean;
    readonly asCancelledCandidateExit: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCancelledCandidateBondLess: boolean;
    readonly asCancelledCandidateBondLess: {
      readonly candidate: AccountId32;
      readonly amount: u128;
      readonly executeRound: u32;
    } & Struct;
    readonly isCandidateLeft: boolean;
    readonly asCandidateLeft: {
      readonly exCandidate: AccountId32;
      readonly unlockedAmount: u128;
      readonly newTotalAmtLocked: u128;
    } & Struct;
    readonly isDelegationDecreaseScheduled: boolean;
    readonly asDelegationDecreaseScheduled: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly amountToDecrease: u128;
      readonly executeRound: u32;
    } & Struct;
    readonly isDelegationIncreased: boolean;
    readonly asDelegationIncreased: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly amount: u128;
      readonly inTop: bool;
    } & Struct;
    readonly isDelegationDecreased: boolean;
    readonly asDelegationDecreased: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly amount: u128;
      readonly inTop: bool;
    } & Struct;
    readonly isDelegatorExitScheduled: boolean;
    readonly asDelegatorExitScheduled: {
      readonly round: u32;
      readonly delegator: AccountId32;
      readonly scheduledExit: u32;
    } & Struct;
    readonly isDelegationRevocationScheduled: boolean;
    readonly asDelegationRevocationScheduled: {
      readonly round: u32;
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly scheduledExit: u32;
    } & Struct;
    readonly isDelegatorLeft: boolean;
    readonly asDelegatorLeft: {
      readonly delegator: AccountId32;
      readonly unstakedAmount: u128;
    } & Struct;
    readonly isDelegationRevoked: boolean;
    readonly asDelegationRevoked: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly unstakedAmount: u128;
    } & Struct;
    readonly isDelegationKicked: boolean;
    readonly asDelegationKicked: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly unstakedAmount: u128;
    } & Struct;
    readonly isDelegatorExitCancelled: boolean;
    readonly asDelegatorExitCancelled: {
      readonly delegator: AccountId32;
    } & Struct;
    readonly isCancelledDelegationRequest: boolean;
    readonly asCancelledDelegationRequest: {
      readonly delegator: AccountId32;
      readonly cancelledRequest: PalletParachainStakingDelegationRequestsCancelledScheduledRequest;
      readonly collator: AccountId32;
    } & Struct;
    readonly isDelegation: boolean;
    readonly asDelegation: {
      readonly delegator: AccountId32;
      readonly lockedAmount: u128;
      readonly candidate: AccountId32;
      readonly delegatorPosition: PalletParachainStakingDelegatorAdded;
    } & Struct;
    readonly isDelegatorLeftCandidate: boolean;
    readonly asDelegatorLeftCandidate: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
      readonly unstakedAmount: u128;
      readonly totalCandidateStaked: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly account: AccountId32;
      readonly rewards: u128;
    } & Struct;
    readonly isReservedForParachainBond: boolean;
    readonly asReservedForParachainBond: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isParachainBondAccountSet: boolean;
    readonly asParachainBondAccountSet: {
      readonly old: AccountId32;
      readonly new_: AccountId32;
    } & Struct;
    readonly isParachainBondReservePercentSet: boolean;
    readonly asParachainBondReservePercentSet: {
      readonly old: Percent;
      readonly new_: Percent;
    } & Struct;
    readonly isInflationSet: boolean;
    readonly asInflationSet: {
      readonly annualMin: Perbill;
      readonly annualIdeal: Perbill;
      readonly annualMax: Perbill;
      readonly roundMin: Perbill;
      readonly roundIdeal: Perbill;
      readonly roundMax: Perbill;
    } & Struct;
    readonly isStakeExpectationsSet: boolean;
    readonly asStakeExpectationsSet: {
      readonly expectMin: u128;
      readonly expectIdeal: u128;
      readonly expectMax: u128;
    } & Struct;
    readonly isTotalSelectedSet: boolean;
    readonly asTotalSelectedSet: {
      readonly old: u32;
      readonly new_: u32;
    } & Struct;
    readonly isCollatorCommissionSet: boolean;
    readonly asCollatorCommissionSet: {
      readonly old: Perbill;
      readonly new_: Perbill;
    } & Struct;
    readonly isBlocksPerRoundSet: boolean;
    readonly asBlocksPerRoundSet: {
      readonly currentRound: u32;
      readonly firstBlock: u64;
      readonly old: u32;
      readonly new_: u32;
      readonly newPerRoundInflationMin: Perbill;
      readonly newPerRoundInflationIdeal: Perbill;
      readonly newPerRoundInflationMax: Perbill;
    } & Struct;
    readonly type: 'NewRound' | 'JoinedCollatorCandidates' | 'CollatorChosen' | 'CandidateBondLessRequested' | 'CandidateBondedMore' | 'CandidateBondedLess' | 'CandidateWentOffline' | 'CandidateBackOnline' | 'CandidateScheduledExit' | 'CancelledCandidateExit' | 'CancelledCandidateBondLess' | 'CandidateLeft' | 'DelegationDecreaseScheduled' | 'DelegationIncreased' | 'DelegationDecreased' | 'DelegatorExitScheduled' | 'DelegationRevocationScheduled' | 'DelegatorLeft' | 'DelegationRevoked' | 'DelegationKicked' | 'DelegatorExitCancelled' | 'CancelledDelegationRequest' | 'Delegation' | 'DelegatorLeftCandidate' | 'Rewarded' | 'ReservedForParachainBond' | 'ParachainBondAccountSet' | 'ParachainBondReservePercentSet' | 'InflationSet' | 'StakeExpectationsSet' | 'TotalSelectedSet' | 'CollatorCommissionSet' | 'BlocksPerRoundSet';
  }

  /** @name PalletParachainStakingDelegationRequestsCancelledScheduledRequest (108) */
  interface PalletParachainStakingDelegationRequestsCancelledScheduledRequest extends Struct {
    readonly whenExecutable: u32;
    readonly action: PalletParachainStakingDelegationRequestsDelegationAction;
  }

  /** @name PalletParachainStakingDelegationRequestsDelegationAction (109) */
  interface PalletParachainStakingDelegationRequestsDelegationAction extends Enum {
    readonly isRevoke: boolean;
    readonly asRevoke: u128;
    readonly isDecrease: boolean;
    readonly asDecrease: u128;
    readonly type: 'Revoke' | 'Decrease';
  }

  /** @name PalletParachainStakingDelegatorAdded (110) */
  interface PalletParachainStakingDelegatorAdded extends Enum {
    readonly isAddedToTop: boolean;
    readonly asAddedToTop: {
      readonly newTotal: u128;
    } & Struct;
    readonly isAddedToBottom: boolean;
    readonly type: 'AddedToTop' | 'AddedToBottom';
  }

  /** @name PalletAuthorSlotFilterEvent (113) */
  interface PalletAuthorSlotFilterEvent extends Enum {
    readonly isEligibleUpdated: boolean;
    readonly asEligibleUpdated: u32;
    readonly type: 'EligibleUpdated';
  }

  /** @name PalletAuthorMappingEvent (115) */
  interface PalletAuthorMappingEvent extends Enum {
    readonly isKeysRegistered: boolean;
    readonly asKeysRegistered: {
      readonly nimbusId: NimbusPrimitivesNimbusCryptoPublic;
      readonly accountId: AccountId32;
      readonly keys_: SessionKeysPrimitivesVrfVrfCryptoPublic;
    } & Struct;
    readonly isKeysRemoved: boolean;
    readonly asKeysRemoved: {
      readonly nimbusId: NimbusPrimitivesNimbusCryptoPublic;
      readonly accountId: AccountId32;
      readonly keys_: SessionKeysPrimitivesVrfVrfCryptoPublic;
    } & Struct;
    readonly isKeysRotated: boolean;
    readonly asKeysRotated: {
      readonly newNimbusId: NimbusPrimitivesNimbusCryptoPublic;
      readonly accountId: AccountId32;
      readonly newKeys: SessionKeysPrimitivesVrfVrfCryptoPublic;
    } & Struct;
    readonly type: 'KeysRegistered' | 'KeysRemoved' | 'KeysRotated';
  }

  /** @name NimbusPrimitivesNimbusCryptoPublic (116) */
  interface NimbusPrimitivesNimbusCryptoPublic extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (117) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name SessionKeysPrimitivesVrfVrfCryptoPublic (118) */
  interface SessionKeysPrimitivesVrfVrfCryptoPublic extends SpCoreSr25519Public {}

  /** @name CumulusPalletXcmEvent (119) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name XcmV2TraitsOutcome (120) */
  interface XcmV2TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: u64;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV2TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name XcmV2TraitsError (121) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name CumulusPalletDmpQueueEvent (122) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageId: U8aFixed;
      readonly outcome: XcmV2TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageId: U8aFixed;
      readonly remainingWeight: u64;
      readonly requiredWeight: u64;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: u64;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: u64;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name PalletXcmEvent (123) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: XcmV2TraitsOutcome;
    readonly isSent: boolean;
    readonly asSent: ITuple<[XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: ITuple<[XcmV1MultiLocation, u64]>;
    readonly isResponseReady: boolean;
    readonly asResponseReady: ITuple<[u64, XcmV2Response]>;
    readonly isNotified: boolean;
    readonly asNotified: ITuple<[u64, u8, u8]>;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, u64, u64]>;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: ITuple<[XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: ITuple<[XcmV1MultiLocation, u64]>;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: u64;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: ITuple<[H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: ITuple<[XcmV1MultiLocation, u32]>;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: ITuple<[XcmV1MultiLocation, u32]>;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: ITuple<[XcmV1MultiLocation, u64, XcmV2TraitsError]>;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail';
  }

  /** @name XcmV1MultiLocation (124) */
  interface XcmV1MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV1MultilocationJunctions;
  }

  /** @name XcmV1MultilocationJunctions (125) */
  interface XcmV1MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV1Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV1Junction, XcmV1Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV1Junction (126) */
  interface XcmV1Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId;
      readonly part: XcmV0JunctionBodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV0JunctionNetworkId (128) */
  interface XcmV0JunctionNetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV0JunctionBodyId (133) */
  interface XcmV0JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial';
  }

  /** @name XcmV0JunctionBodyPart (134) */
  interface XcmV0JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV2Xcm (135) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (137) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV1MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV1MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV1MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV1MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter;
      readonly receive: XcmV1MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly reserve: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly ticket: XcmV1MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV1MultiassetMultiAssets (138) */
  interface XcmV1MultiassetMultiAssets extends Vec<XcmV1MultiAsset> {}

  /** @name XcmV1MultiAsset (140) */
  interface XcmV1MultiAsset extends Struct {
    readonly id: XcmV1MultiassetAssetId;
    readonly fun: XcmV1MultiassetFungibility;
  }

  /** @name XcmV1MultiassetAssetId (141) */
  interface XcmV1MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV1MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV1MultiassetFungibility (142) */
  interface XcmV1MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV1MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV1MultiassetAssetInstance (143) */
  interface XcmV1MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmV2Response (145) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV0OriginKind (148) */
  interface XcmV0OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (149) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV1MultiassetMultiAssetFilter (150) */
  interface XcmV1MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV1MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV1MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV1MultiassetWildMultiAsset (151) */
  interface XcmV1MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV1MultiassetAssetId;
      readonly fun: XcmV1MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV1MultiassetWildFungibility (152) */
  interface XcmV1MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (153) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (155) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV0: boolean;
    readonly asV0: Vec<XcmV0MultiAsset>;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiassetMultiAssets;
    readonly type: 'V0' | 'V1';
  }

  /** @name XcmV0MultiAsset (157) */
  interface XcmV0MultiAsset extends Enum {
    readonly isNone: boolean;
    readonly isAll: boolean;
    readonly isAllFungible: boolean;
    readonly isAllNonFungible: boolean;
    readonly isAllAbstractFungible: boolean;
    readonly asAllAbstractFungible: {
      readonly id: Bytes;
    } & Struct;
    readonly isAllAbstractNonFungible: boolean;
    readonly asAllAbstractNonFungible: {
      readonly class: Bytes;
    } & Struct;
    readonly isAllConcreteFungible: boolean;
    readonly asAllConcreteFungible: {
      readonly id: XcmV0MultiLocation;
    } & Struct;
    readonly isAllConcreteNonFungible: boolean;
    readonly asAllConcreteNonFungible: {
      readonly class: XcmV0MultiLocation;
    } & Struct;
    readonly isAbstractFungible: boolean;
    readonly asAbstractFungible: {
      readonly id: Bytes;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isAbstractNonFungible: boolean;
    readonly asAbstractNonFungible: {
      readonly class: Bytes;
      readonly instance: XcmV1MultiassetAssetInstance;
    } & Struct;
    readonly isConcreteFungible: boolean;
    readonly asConcreteFungible: {
      readonly id: XcmV0MultiLocation;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isConcreteNonFungible: boolean;
    readonly asConcreteNonFungible: {
      readonly class: XcmV0MultiLocation;
      readonly instance: XcmV1MultiassetAssetInstance;
    } & Struct;
    readonly type: 'None' | 'All' | 'AllFungible' | 'AllNonFungible' | 'AllAbstractFungible' | 'AllAbstractNonFungible' | 'AllConcreteFungible' | 'AllConcreteNonFungible' | 'AbstractFungible' | 'AbstractNonFungible' | 'ConcreteFungible' | 'ConcreteNonFungible';
  }

  /** @name XcmV0MultiLocation (158) */
  interface XcmV0MultiLocation extends Enum {
    readonly isNull: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV0Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV0Junction, XcmV0Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly type: 'Null' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV0Junction (159) */
  interface XcmV0Junction extends Enum {
    readonly isParent: boolean;
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId;
      readonly part: XcmV0JunctionBodyPart;
    } & Struct;
    readonly type: 'Parent' | 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmVersionedMultiLocation (160) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0MultiLocation;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiLocation;
    readonly type: 'V0' | 'V1';
  }

  /** @name CumulusPalletXcmpQueueEvent (161) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: Option<H256>;
      readonly weight: u64;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: Option<H256>;
      readonly error: XcmV2TraitsError;
      readonly weight: u64;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: u64;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: u64;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'UpwardMessageSent' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name OrmlAssetRegistryModuleEvent (164) */
  interface OrmlAssetRegistryModuleEvent extends Enum {
    readonly isRegisteredAsset: boolean;
    readonly asRegisteredAsset: {
      readonly assetId: ZeitgeistPrimitivesAsset;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly isUpdatedAsset: boolean;
    readonly asUpdatedAsset: {
      readonly assetId: ZeitgeistPrimitivesAsset;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly type: 'RegisteredAsset' | 'UpdatedAsset';
  }

  /** @name OrmlTraitsAssetRegistryAssetMetadata (165) */
  interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
    readonly decimals: u32;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly existentialDeposit: u128;
    readonly location: Option<XcmVersionedMultiLocation>;
    readonly additional: BatteryStationRuntimeXcmConfigAssetRegistryCustomMetadata;
  }

  /** @name BatteryStationRuntimeXcmConfigAssetRegistryCustomMetadata (166) */
  interface BatteryStationRuntimeXcmConfigAssetRegistryCustomMetadata extends Struct {
    readonly xcm: BatteryStationRuntimeXcmConfigAssetRegistryXcmMetadata;
    readonly allowInPool: bool;
  }

  /** @name BatteryStationRuntimeXcmConfigAssetRegistryXcmMetadata (167) */
  interface BatteryStationRuntimeXcmConfigAssetRegistryXcmMetadata extends Struct {
    readonly feeFactor: Option<u128>;
  }

  /** @name OrmlUnknownTokensModuleEvent (169) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: XcmV1MultiAsset;
      readonly who: XcmV1MultiLocation;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: XcmV1MultiAsset;
      readonly who: XcmV1MultiLocation;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlXtokensModuleEvent (170) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly fee: XcmV1MultiAsset;
      readonly dest: XcmV1MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name PalletCrowdloanRewardsEvent (171) */
  interface PalletCrowdloanRewardsEvent extends Enum {
    readonly isInitialPaymentMade: boolean;
    readonly asInitialPaymentMade: ITuple<[AccountId32, u128]>;
    readonly isNativeIdentityAssociated: boolean;
    readonly asNativeIdentityAssociated: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isRewardsPaid: boolean;
    readonly asRewardsPaid: ITuple<[AccountId32, u128]>;
    readonly isRewardAddressUpdated: boolean;
    readonly asRewardAddressUpdated: ITuple<[AccountId32, AccountId32]>;
    readonly isInitializedAlreadyInitializedAccount: boolean;
    readonly asInitializedAlreadyInitializedAccount: ITuple<[AccountId32, Option<AccountId32>, u128]>;
    readonly isInitializedAccountWithNotEnoughContribution: boolean;
    readonly asInitializedAccountWithNotEnoughContribution: ITuple<[AccountId32, Option<AccountId32>, u128]>;
    readonly type: 'InitialPaymentMade' | 'NativeIdentityAssociated' | 'RewardsPaid' | 'RewardAddressUpdated' | 'InitializedAlreadyInitializedAccount' | 'InitializedAccountWithNotEnoughContribution';
  }

  /** @name ZrmlGlobalDisputesEvent (173) */
  interface ZrmlGlobalDisputesEvent extends Enum {
    readonly isAddedVotingOutcome: boolean;
    readonly asAddedVotingOutcome: {
      readonly marketId: u128;
      readonly owner: AccountId32;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly isGlobalDisputeWinnerDetermined: boolean;
    readonly asGlobalDisputeWinnerDetermined: {
      readonly marketId: u128;
    } & Struct;
    readonly isOutcomeOwnersRewardedWithNoFunds: boolean;
    readonly asOutcomeOwnersRewardedWithNoFunds: {
      readonly marketId: u128;
    } & Struct;
    readonly isOutcomeOwnersRewarded: boolean;
    readonly asOutcomeOwnersRewarded: {
      readonly marketId: u128;
      readonly owners: Vec<AccountId32>;
    } & Struct;
    readonly isOutcomesPartiallyCleaned: boolean;
    readonly asOutcomesPartiallyCleaned: {
      readonly marketId: u128;
    } & Struct;
    readonly isOutcomesFullyCleaned: boolean;
    readonly asOutcomesFullyCleaned: {
      readonly marketId: u128;
    } & Struct;
    readonly isVotedOnOutcome: boolean;
    readonly asVotedOnOutcome: {
      readonly voter: AccountId32;
      readonly marketId: u128;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
      readonly voteAmount: u128;
    } & Struct;
    readonly type: 'AddedVotingOutcome' | 'GlobalDisputeWinnerDetermined' | 'OutcomeOwnersRewardedWithNoFunds' | 'OutcomeOwnersRewarded' | 'OutcomesPartiallyCleaned' | 'OutcomesFullyCleaned' | 'VotedOnOutcome';
  }

  /** @name PalletSudoEvent (174) */
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

  /** @name FrameSystemPhase (175) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (178) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (180) */
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

  /** @name FrameSystemLimitsBlockWeights (184) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (185) */
  interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (186) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (188) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (189) */
  interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (190) */
  interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (191) */
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

  /** @name FrameSystemError (195) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (196) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletSchedulerScheduledV3 (200) */
  interface PalletSchedulerScheduledV3 extends Struct {
    readonly maybeId: Option<Bytes>;
    readonly priority: u8;
    readonly call: FrameSupportScheduleMaybeHashed;
    readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
    readonly origin: BatteryStationRuntimeOriginCaller;
  }

  /** @name FrameSupportScheduleMaybeHashed (201) */
  interface FrameSupportScheduleMaybeHashed extends Enum {
    readonly isValue: boolean;
    readonly asValue: Call;
    readonly isHash: boolean;
    readonly asHash: H256;
    readonly type: 'Value' | 'Hash';
  }

  /** @name PalletSchedulerCall (203) */
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

  /** @name PalletPreimageCall (205) */
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

  /** @name PalletBalancesCall (206) */
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

  /** @name PalletTreasuryCall (209) */
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
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletVestingCall (210) */
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

  /** @name PalletVestingVestingInfo (211) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u64;
  }

  /** @name PalletMultisigCall (212) */
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

  /** @name PalletBountiesCall (215) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletDemocracyCall (216) */
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

  /** @name PalletDemocracyConviction (217) */
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

  /** @name PalletCollectiveCall (219) */
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

  /** @name PalletMembershipCall (220) */
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

  /** @name PalletIdentityCall (225) */
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

  /** @name PalletIdentityIdentityInfo (226) */
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

  /** @name PalletIdentityBitFlags (262) */
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

  /** @name PalletIdentityIdentityField (263) */
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

  /** @name PalletIdentityJudgement (264) */
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

  /** @name PalletUtilityCall (265) */
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
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch';
  }

  /** @name BatteryStationRuntimeOriginCaller (267) */
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
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'AdvisoryCommittee' | 'Council' | 'TechnicalCommittee' | 'CumulusXcm' | 'PolkadotXcm';
  }

  /** @name FrameSupportDispatchRawOrigin (268) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (269) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name CumulusPalletXcmOrigin (272) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name PalletXcmOrigin (273) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV1MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV1MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name SpCoreVoid (274) */
  type SpCoreVoid = Null;

  /** @name PalletProxyCall (275) */
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

  /** @name OrmlCurrenciesModuleCall (277) */
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

  /** @name ZrmlAuthorizedCall (279) */
  interface ZrmlAuthorizedCall extends Enum {
    readonly isAuthorizeMarketOutcome: boolean;
    readonly asAuthorizeMarketOutcome: {
      readonly marketId: u128;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'AuthorizeMarketOutcome';
  }

  /** @name ZrmlCourtCall (280) */
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

  /** @name ZrmlLiquidityMiningCall (281) */
  interface ZrmlLiquidityMiningCall extends Enum {
    readonly isSetPerBlockDistribution: boolean;
    readonly asSetPerBlockDistribution: {
      readonly perBlockDistribution: Compact<u128>;
    } & Struct;
    readonly type: 'SetPerBlockDistribution';
  }

  /** @name ZrmlSwapsCall (282) */
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

  /** @name ZrmlPredictionMarketsCall (283) */
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
    readonly isRequestEdit: boolean;
    readonly asRequestEdit: {
      readonly marketId: Compact<u128>;
      readonly editReason: Bytes;
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
    readonly isEditMarket: boolean;
    readonly asEditMarket: {
      readonly marketId: u128;
      readonly oracle: AccountId32;
      readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
      readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
      readonly metadata: ZeitgeistPrimitivesMultiHash;
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
      readonly rejectReason: Bytes;
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
    readonly isStartGlobalDispute: boolean;
    readonly asStartGlobalDispute: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly type: 'AdminDestroyMarket' | 'AdminMoveMarketToClosed' | 'AdminMoveMarketToResolved' | 'ApproveMarket' | 'RequestEdit' | 'BuyCompleteSet' | 'Dispute' | 'CreateCpmmMarketAndDeployAssets' | 'CreateMarket' | 'EditMarket' | 'DeploySwapPoolAndAdditionalLiquidity' | 'DeploySwapPoolForMarket' | 'RedeemShares' | 'RejectMarket' | 'Report' | 'SellCompleteSet' | 'StartGlobalDispute';
  }

  /** @name ZeitgeistPrimitivesMultiHash (284) */
  interface ZeitgeistPrimitivesMultiHash extends Enum {
    readonly isSha3384: boolean;
    readonly asSha3384: U8aFixed;
    readonly type: 'Sha3384';
  }

  /** @name ZrmlStyxCall (286) */
  interface ZrmlStyxCall extends Enum {
    readonly isCross: boolean;
    readonly isSetBurnAmount: boolean;
    readonly asSetBurnAmount: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'Cross' | 'SetBurnAmount';
  }

  /** @name CumulusPalletParachainSystemCall (287) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (288) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV2PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV2PersistedValidationData (289) */
  interface PolkadotPrimitivesV2PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (291) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (294) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (297) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PalletParachainStakingCall (300) */
  interface PalletParachainStakingCall extends Enum {
    readonly isSetStakingExpectations: boolean;
    readonly asSetStakingExpectations: {
      readonly expectations: {
      readonly min: u128;
      readonly ideal: u128;
      readonly max: u128;
    } & Struct;
    } & Struct;
    readonly isSetInflation: boolean;
    readonly asSetInflation: {
      readonly schedule: {
      readonly min: Perbill;
      readonly ideal: Perbill;
      readonly max: Perbill;
    } & Struct;
    } & Struct;
    readonly isSetParachainBondAccount: boolean;
    readonly asSetParachainBondAccount: {
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetParachainBondReservePercent: boolean;
    readonly asSetParachainBondReservePercent: {
      readonly new_: Percent;
    } & Struct;
    readonly isSetTotalSelected: boolean;
    readonly asSetTotalSelected: {
      readonly new_: u32;
    } & Struct;
    readonly isSetCollatorCommission: boolean;
    readonly asSetCollatorCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly isSetBlocksPerRound: boolean;
    readonly asSetBlocksPerRound: {
      readonly new_: u32;
    } & Struct;
    readonly isJoinCandidates: boolean;
    readonly asJoinCandidates: {
      readonly bond: u128;
      readonly candidateCount: u32;
    } & Struct;
    readonly isScheduleLeaveCandidates: boolean;
    readonly asScheduleLeaveCandidates: {
      readonly candidateCount: u32;
    } & Struct;
    readonly isExecuteLeaveCandidates: boolean;
    readonly asExecuteLeaveCandidates: {
      readonly candidate: AccountId32;
      readonly candidateDelegationCount: u32;
    } & Struct;
    readonly isCancelLeaveCandidates: boolean;
    readonly asCancelLeaveCandidates: {
      readonly candidateCount: u32;
    } & Struct;
    readonly isGoOffline: boolean;
    readonly isGoOnline: boolean;
    readonly isCandidateBondMore: boolean;
    readonly asCandidateBondMore: {
      readonly more: u128;
    } & Struct;
    readonly isScheduleCandidateBondLess: boolean;
    readonly asScheduleCandidateBondLess: {
      readonly less: u128;
    } & Struct;
    readonly isExecuteCandidateBondLess: boolean;
    readonly asExecuteCandidateBondLess: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCancelCandidateBondLess: boolean;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly candidate: AccountId32;
      readonly amount: u128;
      readonly candidateDelegationCount: u32;
      readonly delegationCount: u32;
    } & Struct;
    readonly isScheduleLeaveDelegators: boolean;
    readonly isExecuteLeaveDelegators: boolean;
    readonly asExecuteLeaveDelegators: {
      readonly delegator: AccountId32;
      readonly delegationCount: u32;
    } & Struct;
    readonly isCancelLeaveDelegators: boolean;
    readonly isScheduleRevokeDelegation: boolean;
    readonly asScheduleRevokeDelegation: {
      readonly collator: AccountId32;
    } & Struct;
    readonly isDelegatorBondMore: boolean;
    readonly asDelegatorBondMore: {
      readonly candidate: AccountId32;
      readonly more: u128;
    } & Struct;
    readonly isScheduleDelegatorBondLess: boolean;
    readonly asScheduleDelegatorBondLess: {
      readonly candidate: AccountId32;
      readonly less: u128;
    } & Struct;
    readonly isExecuteDelegationRequest: boolean;
    readonly asExecuteDelegationRequest: {
      readonly delegator: AccountId32;
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCancelDelegationRequest: boolean;
    readonly asCancelDelegationRequest: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isHotfixRemoveDelegationRequestsExitedCandidates: boolean;
    readonly asHotfixRemoveDelegationRequestsExitedCandidates: {
      readonly candidates: Vec<AccountId32>;
    } & Struct;
    readonly type: 'SetStakingExpectations' | 'SetInflation' | 'SetParachainBondAccount' | 'SetParachainBondReservePercent' | 'SetTotalSelected' | 'SetCollatorCommission' | 'SetBlocksPerRound' | 'JoinCandidates' | 'ScheduleLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'GoOffline' | 'GoOnline' | 'CandidateBondMore' | 'ScheduleCandidateBondLess' | 'ExecuteCandidateBondLess' | 'CancelCandidateBondLess' | 'Delegate' | 'ScheduleLeaveDelegators' | 'ExecuteLeaveDelegators' | 'CancelLeaveDelegators' | 'ScheduleRevokeDelegation' | 'DelegatorBondMore' | 'ScheduleDelegatorBondLess' | 'ExecuteDelegationRequest' | 'CancelDelegationRequest' | 'HotfixRemoveDelegationRequestsExitedCandidates';
  }

  /** @name PalletAuthorInherentCall (303) */
  interface PalletAuthorInherentCall extends Enum {
    readonly isKickOffAuthorshipValidation: boolean;
    readonly type: 'KickOffAuthorshipValidation';
  }

  /** @name PalletAuthorSlotFilterCall (304) */
  interface PalletAuthorSlotFilterCall extends Enum {
    readonly isSetEligible: boolean;
    readonly asSetEligible: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SetEligible';
  }

  /** @name PalletAuthorMappingCall (305) */
  interface PalletAuthorMappingCall extends Enum {
    readonly isAddAssociation: boolean;
    readonly asAddAssociation: {
      readonly nimbusId: NimbusPrimitivesNimbusCryptoPublic;
    } & Struct;
    readonly isUpdateAssociation: boolean;
    readonly asUpdateAssociation: {
      readonly oldNimbusId: NimbusPrimitivesNimbusCryptoPublic;
      readonly newNimbusId: NimbusPrimitivesNimbusCryptoPublic;
    } & Struct;
    readonly isClearAssociation: boolean;
    readonly asClearAssociation: {
      readonly nimbusId: NimbusPrimitivesNimbusCryptoPublic;
    } & Struct;
    readonly isRemoveKeys: boolean;
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: Bytes;
    } & Struct;
    readonly type: 'AddAssociation' | 'UpdateAssociation' | 'ClearAssociation' | 'RemoveKeys' | 'SetKeys';
  }

  /** @name CumulusPalletDmpQueueCall (306) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: u64;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletXcmCall (307) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: u64;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV1MultiLocation;
      readonly xcmVersion: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets';
  }

  /** @name XcmVersionedXcm (308) */
  interface XcmVersionedXcm extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Xcm;
    readonly isV1: boolean;
    readonly asV1: XcmV1Xcm;
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name XcmV0Xcm (309) */
  interface XcmV0Xcm extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isReserveAssetDeposit: boolean;
    readonly asReserveAssetDeposit: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isTeleportAsset: boolean;
    readonly asTeleportAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV0Response;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: u64;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isRelayedFrom: boolean;
    readonly asRelayedFrom: {
      readonly who: XcmV0MultiLocation;
      readonly message: XcmV0Xcm;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposit' | 'TeleportAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom';
  }

  /** @name XcmV0Order (311) */
  interface XcmV0Order extends Enum {
    readonly isNull: boolean;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: Vec<XcmV0MultiAsset>;
      readonly receive: Vec<XcmV0MultiAsset>;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly reserve: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV0MultiLocation;
      readonly assets: Vec<XcmV0MultiAsset>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV0MultiAsset;
      readonly weight: u64;
      readonly debt: u64;
      readonly haltOnError: bool;
      readonly xcm: Vec<XcmV0Xcm>;
    } & Struct;
    readonly type: 'Null' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
  }

  /** @name XcmV0Response (313) */
  interface XcmV0Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: Vec<XcmV0MultiAsset>;
    readonly type: 'Assets';
  }

  /** @name XcmV1Xcm (314) */
  interface XcmV1Xcm extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV1Response;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: u64;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isRelayedFrom: boolean;
    readonly asRelayedFrom: {
      readonly who: XcmV1MultilocationJunctions;
      readonly message: XcmV1Xcm;
    } & Struct;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV1Order (316) */
  interface XcmV1Order extends Enum {
    readonly isNoop: boolean;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: u32;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: u32;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter;
      readonly receive: XcmV1MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly reserve: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly assets: XcmV1MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset;
      readonly weight: u64;
      readonly debt: u64;
      readonly haltOnError: bool;
      readonly instructions: Vec<XcmV1Xcm>;
    } & Struct;
    readonly type: 'Noop' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
  }

  /** @name XcmV1Response (318) */
  interface XcmV1Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Assets' | 'Version';
  }

  /** @name CumulusPalletXcmpQueueCall (332) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: u64;
    } & Struct;
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateThresholdWeight: boolean;
    readonly asUpdateThresholdWeight: {
      readonly new_: u64;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: u64;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: u64;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name OrmlAssetRegistryModuleCall (333) */
  interface OrmlAssetRegistryModuleCall extends Enum {
    readonly isRegisterAsset: boolean;
    readonly asRegisterAsset: {
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
      readonly assetId: Option<ZeitgeistPrimitivesAsset>;
    } & Struct;
    readonly isUpdateAsset: boolean;
    readonly asUpdateAsset: {
      readonly assetId: ZeitgeistPrimitivesAsset;
      readonly decimals: Option<u32>;
      readonly name: Option<Bytes>;
      readonly symbol: Option<Bytes>;
      readonly existentialDeposit: Option<u128>;
      readonly location: Option<Option<XcmVersionedMultiLocation>>;
      readonly additional: Option<BatteryStationRuntimeXcmConfigAssetRegistryCustomMetadata>;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAsset';
  }

  /** @name OrmlXtokensModuleCall (337) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedMultiAsset;
      readonly fee: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[ZeitgeistPrimitivesAsset, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedMultiAsset (338) */
  interface XcmVersionedMultiAsset extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0MultiAsset;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiAsset;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletCrowdloanRewardsCall (339) */
  interface PalletCrowdloanRewardsCall extends Enum {
    readonly isAssociateNativeIdentity: boolean;
    readonly asAssociateNativeIdentity: {
      readonly rewardAccount: AccountId32;
      readonly relayAccount: AccountId32;
      readonly proof: SpRuntimeMultiSignature;
    } & Struct;
    readonly isChangeAssociationWithRelayKeys: boolean;
    readonly asChangeAssociationWithRelayKeys: {
      readonly rewardAccount: AccountId32;
      readonly previousAccount: AccountId32;
      readonly proofs: Vec<ITuple<[AccountId32, SpRuntimeMultiSignature]>>;
    } & Struct;
    readonly isClaim: boolean;
    readonly isUpdateRewardAddress: boolean;
    readonly asUpdateRewardAddress: {
      readonly newRewardAccount: AccountId32;
    } & Struct;
    readonly isCompleteInitialization: boolean;
    readonly asCompleteInitialization: {
      readonly leaseEndingBlock: u32;
    } & Struct;
    readonly isInitializeRewardVec: boolean;
    readonly asInitializeRewardVec: {
      readonly rewards: Vec<ITuple<[AccountId32, Option<AccountId32>, u128]>>;
    } & Struct;
    readonly type: 'AssociateNativeIdentity' | 'ChangeAssociationWithRelayKeys' | 'Claim' | 'UpdateRewardAddress' | 'CompleteInitialization' | 'InitializeRewardVec';
  }

  /** @name SpRuntimeMultiSignature (340) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (341) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (343) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (344) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name ZrmlGlobalDisputesCall (350) */
  interface ZrmlGlobalDisputesCall extends Enum {
    readonly isAddVoteOutcome: boolean;
    readonly asAddVoteOutcome: {
      readonly marketId: Compact<u128>;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly isPurgeOutcomes: boolean;
    readonly asPurgeOutcomes: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isRewardOutcomeOwner: boolean;
    readonly asRewardOutcomeOwner: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isVoteOnOutcome: boolean;
    readonly asVoteOnOutcome: {
      readonly marketId: Compact<u128>;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUnlockVoteBalance: boolean;
    readonly asUnlockVoteBalance: {
      readonly voter: MultiAddress;
    } & Struct;
    readonly type: 'AddVoteOutcome' | 'PurgeOutcomes' | 'RewardOutcomeOwner' | 'VoteOnOutcome' | 'UnlockVoteBalance';
  }

  /** @name PalletSudoCall (351) */
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

  /** @name PalletSchedulerError (352) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange';
  }

  /** @name PalletPreimageRequestStatus (353) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: Option<ITuple<[AccountId32, u128]>>;
    readonly isRequested: boolean;
    readonly asRequested: u32;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (356) */
  interface PalletPreimageError extends Enum {
    readonly isTooLarge: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooLarge' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PalletBalancesBalanceLock (358) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (359) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (362) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (364) */
  interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesError (365) */
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

  /** @name PalletTransactionPaymentReleases (367) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletTreasuryProposal (368) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (372) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (373) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletVestingReleases (376) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (377) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletMultisigMultisig (379) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (381) */
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

  /** @name PalletBountiesBounty (382) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (383) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u64;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u64;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (385) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletDemocracyPreimageStatus (389) */
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

  /** @name PalletDemocracyReferendumInfo (390) */
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

  /** @name PalletDemocracyReferendumStatus (391) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u64;
    readonly proposalHash: H256;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u64;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (392) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (393) */
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

  /** @name PalletDemocracyDelegations (396) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (397) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u64, u128]> {}

  /** @name PalletDemocracyReleases (400) */
  interface PalletDemocracyReleases extends Enum {
    readonly isV1: boolean;
    readonly type: 'V1';
  }

  /** @name PalletDemocracyError (401) */
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
    readonly isVotingPeriodLow: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'DuplicatePreimage' | 'NotImminent' | 'TooEarly' | 'Imminent' | 'PreimageMissing' | 'ReferendumInvalid' | 'PreimageInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooManyProposals' | 'VotingPeriodLow';
  }

  /** @name PalletCollectiveVotes (403) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u64;
  }

  /** @name PalletCollectiveError (404) */
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

  /** @name PalletMembershipError (406) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletIdentityRegistration (415) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (423) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (425) */
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

  /** @name PalletUtilityError (426) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletProxyProxyDefinition (429) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: ZeitgeistPrimitivesProxyType;
    readonly delay: u64;
  }

  /** @name PalletProxyAnnouncement (433) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u64;
  }

  /** @name PalletProxyError (435) */
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

  /** @name OrmlCurrenciesModuleError (436) */
  interface OrmlCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
  }

  /** @name OrmlTokensBalanceLock (439) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (441) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (443) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (445) */
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

  /** @name ZrmlMarketCommonsError (446) */
  interface ZrmlMarketCommonsError extends Enum {
    readonly isMarketDoesNotExist: boolean;
    readonly isMarketPoolDoesNotExist: boolean;
    readonly isNoMarketHasBeenCreated: boolean;
    readonly isNoReport: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly type: 'MarketDoesNotExist' | 'MarketPoolDoesNotExist' | 'NoMarketHasBeenCreated' | 'NoReport' | 'PoolAlreadyExists';
  }

  /** @name ZrmlAuthorizedError (447) */
  interface ZrmlAuthorizedError extends Enum {
    readonly isMarketDoesNotHaveDisputeMechanismAuthorized: boolean;
    readonly isMarketIsNotDisputed: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly type: 'MarketDoesNotHaveDisputeMechanismAuthorized' | 'MarketIsNotDisputed' | 'OutcomeMismatch';
  }

  /** @name ZrmlCourtError (450) */
  interface ZrmlCourtError extends Enum {
    readonly isJurorAlreadyExists: boolean;
    readonly isJurorDoesNotExists: boolean;
    readonly isMarketDoesNotHaveCourtMechanism: boolean;
    readonly isNoVotes: boolean;
    readonly isOnlyJurorsCanVote: boolean;
    readonly type: 'JurorAlreadyExists' | 'JurorDoesNotExists' | 'MarketDoesNotHaveCourtMechanism' | 'NoVotes' | 'OnlyJurorsCanVote';
  }

  /** @name ZrmlLiquidityMiningOwnedValuesParams (451) */
  interface ZrmlLiquidityMiningOwnedValuesParams extends Struct {
    readonly participatedBlocks: u64;
    readonly perpetualIncentives: u128;
    readonly totalIncentives: u128;
    readonly totalShares: u128;
  }

  /** @name ZrmlLiquidityMiningError (452) */
  interface ZrmlLiquidityMiningError extends Enum {
    readonly isFundDoesNotHaveEnoughBalance: boolean;
    readonly type: 'FundDoesNotHaveEnoughBalance';
  }

  /** @name ZrmlRikiddoRikiddoSigmoidMV (453) */
  interface ZrmlRikiddoRikiddoSigmoidMV extends Struct {
    readonly config: ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig;
    readonly fees: ZrmlRikiddoSigmoidFeeFeeSigmoid;
    readonly maShort: ZrmlRikiddoEmaMarketVolume;
    readonly maLong: ZrmlRikiddoEmaMarketVolume;
  }

  /** @name SubstrateFixedFixedU128 (454) */
  interface SubstrateFixedFixedU128 extends Struct {
    readonly bits: u128;
  }

  /** @name TypenumUIntUInt (459) */
  interface TypenumUIntUInt extends Struct {
    readonly msb: TypenumUIntUTerm;
    readonly lsb: TypenumBitB0;
  }

  /** @name TypenumUIntUTerm (460) */
  interface TypenumUIntUTerm extends Struct {
    readonly msb: TypenumUintUTerm;
    readonly lsb: TypenumBitB1;
  }

  /** @name TypenumUintUTerm (461) */
  type TypenumUintUTerm = Null;

  /** @name TypenumBitB1 (462) */
  type TypenumBitB1 = Null;

  /** @name TypenumBitB0 (463) */
  type TypenumBitB0 = Null;

  /** @name SubstrateFixedFixedI128 (464) */
  interface SubstrateFixedFixedI128 extends Struct {
    readonly bits: i128;
  }

  /** @name ZrmlRikiddoSigmoidFeeFeeSigmoid (465) */
  interface ZrmlRikiddoSigmoidFeeFeeSigmoid extends Struct {
    readonly config: ZrmlRikiddoSigmoidFeeFeeSigmoidConfig;
  }

  /** @name ZrmlRikiddoSigmoidFeeFeeSigmoidConfig (466) */
  interface ZrmlRikiddoSigmoidFeeFeeSigmoidConfig extends Struct {
    readonly m: SubstrateFixedFixedI128;
    readonly p: SubstrateFixedFixedI128;
    readonly n: SubstrateFixedFixedI128;
    readonly initialFee: SubstrateFixedFixedI128;
    readonly minRevenue: SubstrateFixedFixedI128;
  }

  /** @name ZrmlRikiddoEmaMarketVolume (467) */
  interface ZrmlRikiddoEmaMarketVolume extends Struct {
    readonly config: ZrmlRikiddoEmaMarketVolumeEmaConfig;
    readonly ema: SubstrateFixedFixedU128;
    readonly multiplier: SubstrateFixedFixedU128;
    readonly lastTime: u64;
    readonly state: ZrmlRikiddoEmaMarketVolumeMarketVolumeState;
    readonly startTime: u64;
    readonly volumesPerPeriod: SubstrateFixedFixedU128;
  }

  /** @name ZrmlRikiddoEmaMarketVolumeEmaConfig (468) */
  interface ZrmlRikiddoEmaMarketVolumeEmaConfig extends Struct {
    readonly emaPeriod: ZrmlRikiddoTimespan;
    readonly emaPeriodEstimateAfter: Option<ZrmlRikiddoTimespan>;
    readonly smoothing: SubstrateFixedFixedU128;
  }

  /** @name ZrmlRikiddoTimespan (469) */
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

  /** @name ZrmlRikiddoEmaMarketVolumeMarketVolumeState (471) */
  interface ZrmlRikiddoEmaMarketVolumeMarketVolumeState extends Enum {
    readonly isUninitialized: boolean;
    readonly isDataCollectionStarted: boolean;
    readonly isDataCollected: boolean;
    readonly type: 'Uninitialized' | 'DataCollectionStarted' | 'DataCollected';
  }

  /** @name ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig (472) */
  interface ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig extends Struct {
    readonly initialFee: SubstrateFixedFixedI128;
    readonly log2E: SubstrateFixedFixedI128;
  }

  /** @name ZrmlRikiddoError (473) */
  interface ZrmlRikiddoError extends Enum {
    readonly isFixedConversionImpossible: boolean;
    readonly isRikiddoNotFoundForPool: boolean;
    readonly isRikiddoAlreadyExistsForPool: boolean;
    readonly type: 'FixedConversionImpossible' | 'RikiddoNotFoundForPool' | 'RikiddoAlreadyExistsForPool';
  }

  /** @name ZrmlSimpleDisputesError (474) */
  interface ZrmlSimpleDisputesError extends Enum {
    readonly isInvalidMarketStatus: boolean;
    readonly isMarketDoesNotHaveSimpleDisputesMechanism: boolean;
    readonly type: 'InvalidMarketStatus' | 'MarketDoesNotHaveSimpleDisputesMechanism';
  }

  /** @name ZrmlSwapsError (476) */
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

  /** @name ZeitgeistPrimitivesMarketSubsidyUntil (481) */
  interface ZeitgeistPrimitivesMarketSubsidyUntil extends Struct {
    readonly marketId: u128;
    readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
  }

  /** @name ZrmlPredictionMarketsError (483) */
  interface ZrmlPredictionMarketsError extends Enum {
    readonly isCannotDisputeSameOutcome: boolean;
    readonly isEditorNotCreator: boolean;
    readonly isEditReasonLengthExceedsMaxEditReasonLen: boolean;
    readonly isGlobalDisputesDisabled: boolean;
    readonly isInsufficientFundsInMarketAccount: boolean;
    readonly isInsufficientShareBalance: boolean;
    readonly isInvalidMultihash: boolean;
    readonly isInvalidMarketType: boolean;
    readonly isInvalidScoringRule: boolean;
    readonly isNotEnoughBalance: boolean;
    readonly isMarketAlreadyReported: boolean;
    readonly isMarketEditRequestAlreadyInProgress: boolean;
    readonly isMarketEditNotRequested: boolean;
    readonly isMarketIsNotActive: boolean;
    readonly isMarketIsNotClosed: boolean;
    readonly isMarketIsNotCollectingSubsidy: boolean;
    readonly isMarketIsNotProposed: boolean;
    readonly isMarketIsNotReported: boolean;
    readonly isMarketIsNotDisputed: boolean;
    readonly isMarketIsNotResolved: boolean;
    readonly isMarketStartTooSoon: boolean;
    readonly isMarketStartTooLate: boolean;
    readonly isMaxDisputesReached: boolean;
    readonly isMaxDisputesNeeded: boolean;
    readonly isNotEnoughCategories: boolean;
    readonly isNoWinningBalance: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly isRejectReasonLengthExceedsMaxRejectReasonLen: boolean;
    readonly isReporterNotOracle: boolean;
    readonly isStorageOverflow: boolean;
    readonly isTooManyCategories: boolean;
    readonly isInvalidDisputeMechanism: boolean;
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
    readonly isGlobalDisputeAlreadyStarted: boolean;
    readonly type: 'CannotDisputeSameOutcome' | 'EditorNotCreator' | 'EditReasonLengthExceedsMaxEditReasonLen' | 'GlobalDisputesDisabled' | 'InsufficientFundsInMarketAccount' | 'InsufficientShareBalance' | 'InvalidMultihash' | 'InvalidMarketType' | 'InvalidScoringRule' | 'NotEnoughBalance' | 'MarketAlreadyReported' | 'MarketEditRequestAlreadyInProgress' | 'MarketEditNotRequested' | 'MarketIsNotActive' | 'MarketIsNotClosed' | 'MarketIsNotCollectingSubsidy' | 'MarketIsNotProposed' | 'MarketIsNotReported' | 'MarketIsNotDisputed' | 'MarketIsNotResolved' | 'MarketStartTooSoon' | 'MarketStartTooLate' | 'MaxDisputesReached' | 'MaxDisputesNeeded' | 'NotEnoughCategories' | 'NoWinningBalance' | 'OutcomeMismatch' | 'RejectReasonLengthExceedsMaxRejectReasonLen' | 'ReporterNotOracle' | 'StorageOverflow' | 'TooManyCategories' | 'InvalidDisputeMechanism' | 'InvalidMarketStatus' | 'UnexpectedNoneInPostInfo' | 'ZeroAmount' | 'InvalidMarketPeriod' | 'InvalidOutcomeRange' | 'NotAllowedToReportYet' | 'DisputeDurationSmallerThanMinDisputeDuration' | 'OracleDurationSmallerThanMinOracleDuration' | 'DisputeDurationGreaterThanMaxDisputeDuration' | 'GracePeriodGreaterThanMaxGracePeriod' | 'OracleDurationGreaterThanMaxOracleDuration' | 'WeightsLenMustEqualAssetsLen' | 'GlobalDisputeAlreadyStarted';
  }

  /** @name ZrmlStyxError (484) */
  interface ZrmlStyxError extends Enum {
    readonly isFundDoesNotHaveEnoughFreeBalance: boolean;
    readonly isHasAlreadyCrossed: boolean;
    readonly type: 'FundDoesNotHaveEnoughFreeBalance' | 'HasAlreadyCrossed';
  }

  /** @name PolkadotPrimitivesV2UpgradeRestriction (486) */
  interface PolkadotPrimitivesV2UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (487) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHrmpChannel (491) */
  interface PolkadotPrimitivesV2AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHostConfiguration (492) */
  interface PolkadotPrimitivesV2AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (498) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (499) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletParachainStakingParachainBondConfig (500) */
  interface PalletParachainStakingParachainBondConfig extends Struct {
    readonly account: AccountId32;
    readonly percent: Percent;
  }

  /** @name PalletParachainStakingRoundInfo (501) */
  interface PalletParachainStakingRoundInfo extends Struct {
    readonly current: u32;
    readonly first: u64;
    readonly length: u32;
  }

  /** @name PalletParachainStakingDelegator (502) */
  interface PalletParachainStakingDelegator extends Struct {
    readonly id: AccountId32;
    readonly delegations: PalletParachainStakingSetOrderedSet;
    readonly total: u128;
    readonly lessTotal: u128;
    readonly status: PalletParachainStakingDelegatorStatus;
  }

  /** @name PalletParachainStakingSetOrderedSet (503) */
  interface PalletParachainStakingSetOrderedSet extends Vec<PalletParachainStakingBond> {}

  /** @name PalletParachainStakingBond (504) */
  interface PalletParachainStakingBond extends Struct {
    readonly owner: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletParachainStakingDelegatorStatus (506) */
  interface PalletParachainStakingDelegatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Leaving';
  }

  /** @name PalletParachainStakingCandidateMetadata (507) */
  interface PalletParachainStakingCandidateMetadata extends Struct {
    readonly bond: u128;
    readonly delegationCount: u32;
    readonly totalCounted: u128;
    readonly lowestTopDelegationAmount: u128;
    readonly highestBottomDelegationAmount: u128;
    readonly lowestBottomDelegationAmount: u128;
    readonly topCapacity: PalletParachainStakingCapacityStatus;
    readonly bottomCapacity: PalletParachainStakingCapacityStatus;
    readonly request: Option<PalletParachainStakingCandidateBondLessRequest>;
    readonly status: PalletParachainStakingCollatorStatus;
  }

  /** @name PalletParachainStakingCapacityStatus (508) */
  interface PalletParachainStakingCapacityStatus extends Enum {
    readonly isFull: boolean;
    readonly isEmpty: boolean;
    readonly isPartial: boolean;
    readonly type: 'Full' | 'Empty' | 'Partial';
  }

  /** @name PalletParachainStakingCandidateBondLessRequest (510) */
  interface PalletParachainStakingCandidateBondLessRequest extends Struct {
    readonly amount: u128;
    readonly whenExecutable: u32;
  }

  /** @name PalletParachainStakingCollatorStatus (511) */
  interface PalletParachainStakingCollatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isIdle: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Idle' | 'Leaving';
  }

  /** @name PalletParachainStakingDelegationRequestsScheduledRequest (513) */
  interface PalletParachainStakingDelegationRequestsScheduledRequest extends Struct {
    readonly delegator: AccountId32;
    readonly whenExecutable: u32;
    readonly action: PalletParachainStakingDelegationRequestsDelegationAction;
  }

  /** @name PalletParachainStakingDelegations (514) */
  interface PalletParachainStakingDelegations extends Struct {
    readonly delegations: Vec<PalletParachainStakingBond>;
    readonly total: u128;
  }

  /** @name PalletParachainStakingCollatorSnapshot (516) */
  interface PalletParachainStakingCollatorSnapshot extends Struct {
    readonly bond: u128;
    readonly delegations: Vec<PalletParachainStakingBond>;
    readonly total: u128;
  }

  /** @name PalletParachainStakingDelayedPayout (517) */
  interface PalletParachainStakingDelayedPayout extends Struct {
    readonly roundIssuance: u128;
    readonly totalStakingReward: u128;
    readonly collatorCommission: Perbill;
  }

  /** @name PalletParachainStakingInflationInflationInfo (518) */
  interface PalletParachainStakingInflationInflationInfo extends Struct {
    readonly expect: {
      readonly min: u128;
      readonly ideal: u128;
      readonly max: u128;
    } & Struct;
    readonly annual: {
      readonly min: Perbill;
      readonly ideal: Perbill;
      readonly max: Perbill;
    } & Struct;
    readonly round: {
      readonly min: Perbill;
      readonly ideal: Perbill;
      readonly max: Perbill;
    } & Struct;
  }

  /** @name PalletParachainStakingError (519) */
  interface PalletParachainStakingError extends Enum {
    readonly isDelegatorDNE: boolean;
    readonly isDelegatorDNEinTopNorBottom: boolean;
    readonly isDelegatorDNEInDelegatorSet: boolean;
    readonly isCandidateDNE: boolean;
    readonly isDelegationDNE: boolean;
    readonly isDelegatorExists: boolean;
    readonly isCandidateExists: boolean;
    readonly isCandidateBondBelowMin: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isDelegatorBondBelowMin: boolean;
    readonly isDelegationBelowMin: boolean;
    readonly isAlreadyOffline: boolean;
    readonly isAlreadyActive: boolean;
    readonly isDelegatorAlreadyLeaving: boolean;
    readonly isDelegatorNotLeaving: boolean;
    readonly isDelegatorCannotLeaveYet: boolean;
    readonly isCannotDelegateIfLeaving: boolean;
    readonly isCandidateAlreadyLeaving: boolean;
    readonly isCandidateNotLeaving: boolean;
    readonly isCandidateCannotLeaveYet: boolean;
    readonly isCannotGoOnlineIfLeaving: boolean;
    readonly isExceedMaxDelegationsPerDelegator: boolean;
    readonly isAlreadyDelegatedCandidate: boolean;
    readonly isInvalidSchedule: boolean;
    readonly isCannotSetBelowMin: boolean;
    readonly isRoundLengthMustBeAtLeastTotalSelectedCollators: boolean;
    readonly isNoWritingSameValue: boolean;
    readonly isTooLowCandidateCountWeightHintJoinCandidates: boolean;
    readonly isTooLowCandidateCountWeightHintCancelLeaveCandidates: boolean;
    readonly isTooLowCandidateCountToLeaveCandidates: boolean;
    readonly isTooLowDelegationCountToDelegate: boolean;
    readonly isTooLowCandidateDelegationCountToDelegate: boolean;
    readonly isTooLowCandidateDelegationCountToLeaveCandidates: boolean;
    readonly isTooLowDelegationCountToLeaveDelegators: boolean;
    readonly isPendingCandidateRequestsDNE: boolean;
    readonly isPendingCandidateRequestAlreadyExists: boolean;
    readonly isPendingCandidateRequestNotDueYet: boolean;
    readonly isPendingDelegationRequestDNE: boolean;
    readonly isPendingDelegationRequestAlreadyExists: boolean;
    readonly isPendingDelegationRequestNotDueYet: boolean;
    readonly isCannotDelegateLessThanOrEqualToLowestBottomWhenFull: boolean;
    readonly isPendingDelegationRevoke: boolean;
    readonly type: 'DelegatorDNE' | 'DelegatorDNEinTopNorBottom' | 'DelegatorDNEInDelegatorSet' | 'CandidateDNE' | 'DelegationDNE' | 'DelegatorExists' | 'CandidateExists' | 'CandidateBondBelowMin' | 'InsufficientBalance' | 'DelegatorBondBelowMin' | 'DelegationBelowMin' | 'AlreadyOffline' | 'AlreadyActive' | 'DelegatorAlreadyLeaving' | 'DelegatorNotLeaving' | 'DelegatorCannotLeaveYet' | 'CannotDelegateIfLeaving' | 'CandidateAlreadyLeaving' | 'CandidateNotLeaving' | 'CandidateCannotLeaveYet' | 'CannotGoOnlineIfLeaving' | 'ExceedMaxDelegationsPerDelegator' | 'AlreadyDelegatedCandidate' | 'InvalidSchedule' | 'CannotSetBelowMin' | 'RoundLengthMustBeAtLeastTotalSelectedCollators' | 'NoWritingSameValue' | 'TooLowCandidateCountWeightHintJoinCandidates' | 'TooLowCandidateCountWeightHintCancelLeaveCandidates' | 'TooLowCandidateCountToLeaveCandidates' | 'TooLowDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToLeaveCandidates' | 'TooLowDelegationCountToLeaveDelegators' | 'PendingCandidateRequestsDNE' | 'PendingCandidateRequestAlreadyExists' | 'PendingCandidateRequestNotDueYet' | 'PendingDelegationRequestDNE' | 'PendingDelegationRequestAlreadyExists' | 'PendingDelegationRequestNotDueYet' | 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull' | 'PendingDelegationRevoke';
  }

  /** @name PalletAuthorInherentError (520) */
  interface PalletAuthorInherentError extends Enum {
    readonly isAuthorAlreadySet: boolean;
    readonly isNoAccountId: boolean;
    readonly isCannotBeAuthor: boolean;
    readonly type: 'AuthorAlreadySet' | 'NoAccountId' | 'CannotBeAuthor';
  }

  /** @name PalletAuthorMappingRegistrationInfo (521) */
  interface PalletAuthorMappingRegistrationInfo extends Struct {
    readonly account: AccountId32;
    readonly deposit: u128;
    readonly keys_: SessionKeysPrimitivesVrfVrfCryptoPublic;
  }

  /** @name PalletAuthorMappingError (522) */
  interface PalletAuthorMappingError extends Enum {
    readonly isAssociationNotFound: boolean;
    readonly isNotYourAssociation: boolean;
    readonly isCannotAffordSecurityDeposit: boolean;
    readonly isAlreadyAssociated: boolean;
    readonly isOldAuthorIdNotFound: boolean;
    readonly isWrongKeySize: boolean;
    readonly isDecodeNimbusFailed: boolean;
    readonly isDecodeKeysFailed: boolean;
    readonly type: 'AssociationNotFound' | 'NotYourAssociation' | 'CannotAffordSecurityDeposit' | 'AlreadyAssociated' | 'OldAuthorIdNotFound' | 'WrongKeySize' | 'DecodeNimbusFailed' | 'DecodeKeysFailed';
  }

  /** @name CumulusPalletXcmError (523) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (524) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: u64;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (525) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (528) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletXcmQueryStatus (529) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u64;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u64;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (532) */
  interface XcmVersionedResponse extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Response;
    readonly isV1: boolean;
    readonly asV1: XcmV1Response;
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name PalletXcmVersionMigrationStage (538) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name PalletXcmError (539) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (541) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (542) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (545) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (548) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (549) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (551) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: u64;
    readonly weightRestrictDecay: u64;
    readonly xcmpMaxIndividualWeight: u64;
  }

  /** @name CumulusPalletXcmpQueueError (553) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name OrmlAssetRegistryModuleError (554) */
  interface OrmlAssetRegistryModuleError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isBadVersion: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isConflictingLocation: boolean;
    readonly isConflictingAssetId: boolean;
    readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingLocation' | 'ConflictingAssetId';
  }

  /** @name OrmlUnknownTokensModuleError (557) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name OrmlXtokensModuleError (558) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedMultiLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
  }

  /** @name PalletCrowdloanRewardsRewardInfo (559) */
  interface PalletCrowdloanRewardsRewardInfo extends Struct {
    readonly totalReward: u128;
    readonly claimedReward: u128;
    readonly contributedRelayAddresses: Vec<AccountId32>;
  }

  /** @name PalletCrowdloanRewardsError (560) */
  interface PalletCrowdloanRewardsError extends Enum {
    readonly isAlreadyAssociated: boolean;
    readonly isBatchBeyondFundPot: boolean;
    readonly isFirstClaimAlreadyDone: boolean;
    readonly isRewardNotHighEnough: boolean;
    readonly isInvalidClaimSignature: boolean;
    readonly isInvalidFreeClaimSignature: boolean;
    readonly isNoAssociatedClaim: boolean;
    readonly isRewardsAlreadyClaimed: boolean;
    readonly isRewardVecAlreadyInitialized: boolean;
    readonly isRewardVecNotFullyInitializedYet: boolean;
    readonly isRewardsDoNotMatchFund: boolean;
    readonly isTooManyContributors: boolean;
    readonly isVestingPeriodNonValid: boolean;
    readonly isNonContributedAddressProvided: boolean;
    readonly isInsufficientNumberOfValidProofs: boolean;
    readonly type: 'AlreadyAssociated' | 'BatchBeyondFundPot' | 'FirstClaimAlreadyDone' | 'RewardNotHighEnough' | 'InvalidClaimSignature' | 'InvalidFreeClaimSignature' | 'NoAssociatedClaim' | 'RewardsAlreadyClaimed' | 'RewardVecAlreadyInitialized' | 'RewardVecNotFullyInitializedYet' | 'RewardsDoNotMatchFund' | 'TooManyContributors' | 'VestingPeriodNonValid' | 'NonContributedAddressProvided' | 'InsufficientNumberOfValidProofs';
  }

  /** @name ZrmlGlobalDisputesOutcomeInfo (565) */
  interface ZrmlGlobalDisputesOutcomeInfo extends Struct {
    readonly outcomeSum: u128;
    readonly owners: Vec<AccountId32>;
  }

  /** @name ZrmlGlobalDisputesWinnerInfo (567) */
  interface ZrmlGlobalDisputesWinnerInfo extends Struct {
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    readonly outcomeInfo: ZrmlGlobalDisputesOutcomeInfo;
    readonly isFinished: bool;
  }

  /** @name ZrmlGlobalDisputesError (568) */
  interface ZrmlGlobalDisputesError extends Enum {
    readonly isAmountTooLow: boolean;
    readonly isGlobalDisputeAlreadyFinished: boolean;
    readonly isInsufficientAmount: boolean;
    readonly isMaxOwnersReached: boolean;
    readonly isNoGlobalDisputeStarted: boolean;
    readonly isOutcomeAlreadyExists: boolean;
    readonly isOutcomeDoesNotExist: boolean;
    readonly isUnfinishedGlobalDispute: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isOutcomesNotFullyCleaned: boolean;
    readonly type: 'AmountTooLow' | 'GlobalDisputeAlreadyFinished' | 'InsufficientAmount' | 'MaxOwnersReached' | 'NoGlobalDisputeStarted' | 'OutcomeAlreadyExists' | 'OutcomeDoesNotExist' | 'UnfinishedGlobalDispute' | 'MaxVotesReached' | 'OutcomesNotFullyCleaned';
  }

  /** @name PalletSudoError (569) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name FrameSystemExtensionsCheckNonZeroSender (572) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (573) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (574) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (575) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (578) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u64> {}

  /** @name FrameSystemExtensionsCheckWeight (579) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (580) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name BatteryStationRuntimeRuntime (581) */
  type BatteryStationRuntimeRuntime = Null;

} // declare module
