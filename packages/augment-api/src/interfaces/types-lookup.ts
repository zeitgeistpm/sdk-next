// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Range, RangeInclusive, Result, Set, Struct, Text, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
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

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (13) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (15) */
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

  /** @name FrameSystemEventRecord (18) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (20) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
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

  /** @name FrameSupportDispatchDispatchInfo (21) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (22) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (23) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (24) */
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
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
  }

  /** @name SpRuntimeModuleError (25) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (26) */
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

  /** @name SpArithmeticArithmeticError (27) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (28) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletSchedulerEvent (29) */
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
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletPreimageEvent (34) */
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

  /** @name PalletBalancesEvent (35) */
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

  /** @name FrameSupportTokensMiscBalanceStatus (36) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (37) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletTreasuryEvent (38) */
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
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletVestingEvent (39) */
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

  /** @name PalletMultisigEvent (40) */
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

  /** @name PalletMultisigTimepoint (41) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u64;
    readonly index: u32;
  }

  /** @name PalletBountiesEvent (42) */
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

  /** @name PalletAssetTxPaymentEvent (43) */
  interface PalletAssetTxPaymentEvent extends Enum {
    readonly isAssetTxFeePaid: boolean;
    readonly asAssetTxFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
      readonly assetId: Option<ZeitgeistPrimitivesAssetsAllAssetsAsset>;
    } & Struct;
    readonly type: 'AssetTxFeePaid';
  }

  /** @name ZeitgeistPrimitivesAssetsAllAssetsAsset (45) */
  interface ZeitgeistPrimitivesAssetsAllAssetsAsset extends Enum {
    readonly isCategoricalOutcome: boolean;
    readonly asCategoricalOutcome: ITuple<[u128, u16]>;
    readonly isScalarOutcome: boolean;
    readonly asScalarOutcome: ITuple<[u128, ZeitgeistPrimitivesAssetsScalarPosition]>;
    readonly isPoolShare: boolean;
    readonly asPoolShare: u128;
    readonly isZtg: boolean;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly isParimutuelShare: boolean;
    readonly asParimutuelShare: ITuple<[u128, u16]>;
    readonly isCampaignAsset: boolean;
    readonly asCampaignAsset: Compact<u128>;
    readonly isCustomAsset: boolean;
    readonly asCustomAsset: Compact<u128>;
    readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'PoolShare' | 'Ztg' | 'ForeignAsset' | 'ParimutuelShare' | 'CampaignAsset' | 'CustomAsset';
  }

  /** @name ZeitgeistPrimitivesAssetsScalarPosition (47) */
  interface ZeitgeistPrimitivesAssetsScalarPosition extends Enum {
    readonly isLong: boolean;
    readonly isShort: boolean;
    readonly type: 'Long' | 'Short';
  }

  /** @name PalletAssetsEvent (49) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly owner: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
    } & Struct;
    readonly isAccountsDestroyed: boolean;
    readonly asAccountsDestroyed: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly accountsDestroyed: u32;
      readonly accountsRemaining: u32;
    } & Struct;
    readonly isApprovalsDestroyed: boolean;
    readonly asApprovalsDestroyed: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly approvalsDestroyed: u32;
      readonly approvalsRemaining: u32;
    } & Struct;
    readonly isDestructionStarted: boolean;
    readonly asDestructionStarted: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'AccountsDestroyed' | 'ApprovalsDestroyed' | 'DestructionStarted' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged';
  }

  /** @name ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass (50) */
  interface ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass extends Compact<u128> {}

  /** @name ZeitgeistPrimitivesAssetsCampaignAssetsCampaignAssetClass (53) */
  interface ZeitgeistPrimitivesAssetsCampaignAssetsCampaignAssetClass extends Compact<u128> {}

  /** @name ZeitgeistPrimitivesAssetsMarketAssetsMarketAssetClass (55) */
  interface ZeitgeistPrimitivesAssetsMarketAssetsMarketAssetClass extends Enum {
    readonly isCategoricalOutcome: boolean;
    readonly asCategoricalOutcome: ITuple<[u128, u16]>;
    readonly isScalarOutcome: boolean;
    readonly asScalarOutcome: ITuple<[u128, ZeitgeistPrimitivesAssetsScalarPosition]>;
    readonly isPoolShare: boolean;
    readonly asPoolShare: u128;
    readonly isParimutuelShare: boolean;
    readonly asParimutuelShare: ITuple<[u128, u16]>;
    readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'PoolShare' | 'ParimutuelShare';
  }

  /** @name PalletDemocracyEvent (56) */
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
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled';
  }

  /** @name PalletDemocracyVoteThreshold (57) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (58) */
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

  /** @name PalletCollectiveEvent (60) */
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

  /** @name PalletMembershipEvent (61) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletIdentityEvent (66) */
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

  /** @name PalletUtilityEvent (67) */
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

  /** @name PalletProxyEvent (68) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
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
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name ZeitgeistPrimitivesProxyType (69) */
  interface ZeitgeistPrimitivesProxyType extends Enum {
    readonly isAny: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isCreateEditMarket: boolean;
    readonly isReportOutcome: boolean;
    readonly isDispute: boolean;
    readonly isProvideLiquidity: boolean;
    readonly isBuySellCompleteSets: boolean;
    readonly isTrading: boolean;
    readonly isHandleAssets: boolean;
    readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Staking' | 'CreateEditMarket' | 'ReportOutcome' | 'Dispute' | 'ProvideLiquidity' | 'BuySellCompleteSets' | 'Trading' | 'HandleAssets';
  }

  /** @name PalletContractsEvent (70) */
  interface PalletContractsEvent extends Enum {
    readonly isInstantiated: boolean;
    readonly asInstantiated: {
      readonly deployer: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly contract: AccountId32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCodeStored: boolean;
    readonly asCodeStored: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: AccountId32;
      readonly data: Bytes;
    } & Struct;
    readonly isCodeRemoved: boolean;
    readonly asCodeRemoved: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractCodeUpdated: boolean;
    readonly asContractCodeUpdated: {
      readonly contract: AccountId32;
      readonly newCodeHash: H256;
      readonly oldCodeHash: H256;
    } & Struct;
    readonly isCalled: boolean;
    readonly asCalled: {
      readonly caller: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isDelegateCalled: boolean;
    readonly asDelegateCalled: {
      readonly contract: AccountId32;
      readonly codeHash: H256;
    } & Struct;
    readonly type: 'Instantiated' | 'Terminated' | 'CodeStored' | 'ContractEmitted' | 'CodeRemoved' | 'ContractCodeUpdated' | 'Called' | 'DelegateCalled';
  }

  /** @name OrmlTokensModuleEvent (71) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked';
  }

  /** @name ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass (72) */
  interface ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass extends Enum {
    readonly isCategoricalOutcome: boolean;
    readonly asCategoricalOutcome: ITuple<[u128, u16]>;
    readonly isScalarOutcome: boolean;
    readonly asScalarOutcome: ITuple<[u128, ZeitgeistPrimitivesAssetsScalarPosition]>;
    readonly isPoolShare: boolean;
    readonly asPoolShare: u128;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly isParimutuelShare: boolean;
    readonly asParimutuelShare: ITuple<[u128, u16]>;
    readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'PoolShare' | 'ForeignAsset' | 'ParimutuelShare';
  }

  /** @name ZrmlAuthorizedEvent (74) */
  interface ZrmlAuthorizedEvent extends Enum {
    readonly isAuthorityReported: boolean;
    readonly asAuthorityReported: {
      readonly marketId: u128;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'AuthorityReported';
  }

  /** @name ZeitgeistPrimitivesOutcomeReport (75) */
  interface ZeitgeistPrimitivesOutcomeReport extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: u128;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZrmlCourtEvent (76) */
  interface ZrmlCourtEvent extends Enum {
    readonly isCourtOpened: boolean;
    readonly asCourtOpened: {
      readonly marketId: u128;
      readonly courtInfo: ZrmlCourtCourtInfo;
    } & Struct;
    readonly isJurorJoined: boolean;
    readonly asJurorJoined: {
      readonly juror: AccountId32;
      readonly stake: u128;
    } & Struct;
    readonly isExitPrepared: boolean;
    readonly asExitPrepared: {
      readonly courtParticipant: AccountId32;
    } & Struct;
    readonly isExitedCourt: boolean;
    readonly asExitedCourt: {
      readonly courtParticipant: AccountId32;
      readonly exitAmount: u128;
      readonly activeLock: u128;
    } & Struct;
    readonly isJurorVoted: boolean;
    readonly asJurorVoted: {
      readonly courtId: u128;
      readonly juror: AccountId32;
      readonly commitment: H256;
    } & Struct;
    readonly isJurorRevealedVote: boolean;
    readonly asJurorRevealedVote: {
      readonly juror: AccountId32;
      readonly courtId: u128;
      readonly voteItem: ZrmlCourtVoteItem;
      readonly salt: H256;
      readonly slashableAmount: u128;
      readonly drawWeight: u32;
    } & Struct;
    readonly isDenouncedJurorVote: boolean;
    readonly asDenouncedJurorVote: {
      readonly denouncer: AccountId32;
      readonly juror: AccountId32;
      readonly courtId: u128;
      readonly voteItem: ZrmlCourtVoteItem;
      readonly salt: H256;
    } & Struct;
    readonly isDelegatorJoined: boolean;
    readonly asDelegatorJoined: {
      readonly delegator: AccountId32;
      readonly stake: u128;
      readonly delegatedJurors: Vec<AccountId32>;
    } & Struct;
    readonly isCourtAppealed: boolean;
    readonly asCourtAppealed: {
      readonly courtId: u128;
      readonly appealInfo: ZrmlCourtAppealInfo;
      readonly newRoundEnds: Option<ZrmlCourtRoundTiming>;
    } & Struct;
    readonly isMintedInCourt: boolean;
    readonly asMintedInCourt: {
      readonly courtParticipant: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isStakesReassigned: boolean;
    readonly asStakesReassigned: {
      readonly courtId: u128;
    } & Struct;
    readonly isInflationSet: boolean;
    readonly asInflationSet: {
      readonly inflation: Perbill;
    } & Struct;
    readonly type: 'CourtOpened' | 'JurorJoined' | 'ExitPrepared' | 'ExitedCourt' | 'JurorVoted' | 'JurorRevealedVote' | 'DenouncedJurorVote' | 'DelegatorJoined' | 'CourtAppealed' | 'MintedInCourt' | 'StakesReassigned' | 'InflationSet';
  }

  /** @name ZrmlCourtCourtInfo (77) */
  interface ZrmlCourtCourtInfo extends Struct {
    readonly status: ZrmlCourtCourtStatus;
    readonly appeals: Vec<ZrmlCourtAppealInfo>;
    readonly roundEnds: ZrmlCourtRoundTiming;
    readonly voteItemType: ZrmlCourtVoteItemType;
  }

  /** @name ZrmlCourtAppealInfo (79) */
  interface ZrmlCourtAppealInfo extends Struct {
    readonly backer: AccountId32;
    readonly bond: u128;
    readonly appealedVoteItem: ZrmlCourtVoteItem;
  }

  /** @name ZrmlCourtVoteItem (80) */
  interface ZrmlCourtVoteItem extends Enum {
    readonly isOutcome: boolean;
    readonly asOutcome: ZeitgeistPrimitivesOutcomeReport;
    readonly isBinary: boolean;
    readonly asBinary: bool;
    readonly type: 'Outcome' | 'Binary';
  }

  /** @name ZrmlCourtCourtStatus (82) */
  interface ZrmlCourtCourtStatus extends Enum {
    readonly isOpen: boolean;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly winner: ZrmlCourtVoteItem;
    } & Struct;
    readonly isReassigned: boolean;
    readonly type: 'Open' | 'Closed' | 'Reassigned';
  }

  /** @name ZrmlCourtRoundTiming (83) */
  interface ZrmlCourtRoundTiming extends Struct {
    readonly preVote: u64;
    readonly vote: u64;
    readonly aggregation: u64;
    readonly appeal: u64;
  }

  /** @name ZrmlCourtVoteItemType (84) */
  interface ZrmlCourtVoteItemType extends Enum {
    readonly isOutcome: boolean;
    readonly isBinary: boolean;
    readonly type: 'Outcome' | 'Binary';
  }

  /** @name ZrmlLiquidityMiningEvent (88) */
  interface ZrmlLiquidityMiningEvent extends Enum {
    readonly isAddedIncentives: boolean;
    readonly asAddedIncentives: u64;
    readonly isDistributedIncentives: boolean;
    readonly asDistributedIncentives: ITuple<[u128, u64]>;
    readonly isSubtractedIncentives: boolean;
    readonly asSubtractedIncentives: u64;
    readonly type: 'AddedIncentives' | 'DistributedIncentives' | 'SubtractedIncentives';
  }

  /** @name ZrmlSimpleDisputesEvent (90) */
  interface ZrmlSimpleDisputesEvent extends Enum {
    readonly isOutcomeReserved: boolean;
    readonly asOutcomeReserved: {
      readonly marketId: u128;
      readonly dispute: ZeitgeistPrimitivesMarketMarketDispute;
    } & Struct;
    readonly type: 'OutcomeReserved';
  }

  /** @name ZeitgeistPrimitivesMarketMarketDispute (91) */
  interface ZeitgeistPrimitivesMarketMarketDispute extends Struct {
    readonly at: u64;
    readonly by: AccountId32;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    readonly bond: u128;
  }

  /** @name ZrmlSwapsEvent (92) */
  interface ZrmlSwapsEvent extends Enum {
    readonly isDistributeShareHolderRewards: boolean;
    readonly asDistributeShareHolderRewards: {
      readonly poolId: u128;
      readonly numAccountsRewarded: u64;
      readonly amount: u128;
    } & Struct;
    readonly isPoolCreate: boolean;
    readonly asPoolCreate: {
      readonly common: ZrmlSwapsEventsCommonPoolEventParams;
      readonly pool: ZrmlSwapsPool;
      readonly poolAmount: u128;
      readonly poolAccount: AccountId32;
    } & Struct;
    readonly isPoolClosed: boolean;
    readonly asPoolClosed: {
      readonly poolId: u128;
    } & Struct;
    readonly isPoolCleanedUp: boolean;
    readonly asPoolCleanedUp: {
      readonly poolId: u128;
    } & Struct;
    readonly isPoolActive: boolean;
    readonly asPoolActive: {
      readonly poolId: u128;
    } & Struct;
    readonly isPoolExit: boolean;
    readonly asPoolExit: ZrmlSwapsEventsPoolAssetsEvent;
    readonly isPoolExitWithExactAssetAmount: boolean;
    readonly asPoolExitWithExactAssetAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isPoolExitWithExactPoolAmount: boolean;
    readonly asPoolExitWithExactPoolAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isPoolJoin: boolean;
    readonly asPoolJoin: ZrmlSwapsEventsPoolAssetsEvent;
    readonly isPoolJoinWithExactAssetAmount: boolean;
    readonly asPoolJoinWithExactAssetAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isPoolJoinWithExactPoolAmount: boolean;
    readonly asPoolJoinWithExactPoolAmount: ZrmlSwapsEventsPoolAssetEvent;
    readonly isPoolDestroyed: boolean;
    readonly asPoolDestroyed: {
      readonly poolId: u128;
    } & Struct;
    readonly isSwapExactAmountIn: boolean;
    readonly asSwapExactAmountIn: ZrmlSwapsEventsSwapEvent;
    readonly isSwapExactAmountOut: boolean;
    readonly asSwapExactAmountOut: ZrmlSwapsEventsSwapEvent;
    readonly type: 'DistributeShareHolderRewards' | 'PoolCreate' | 'PoolClosed' | 'PoolCleanedUp' | 'PoolActive' | 'PoolExit' | 'PoolExitWithExactAssetAmount' | 'PoolExitWithExactPoolAmount' | 'PoolJoin' | 'PoolJoinWithExactAssetAmount' | 'PoolJoinWithExactPoolAmount' | 'PoolDestroyed' | 'SwapExactAmountIn' | 'SwapExactAmountOut';
  }

  /** @name ZrmlSwapsEventsCommonPoolEventParams (93) */
  interface ZrmlSwapsEventsCommonPoolEventParams extends Struct {
    readonly poolId: u128;
    readonly who: AccountId32;
  }

  /** @name ZrmlSwapsPool (94) */
  interface ZrmlSwapsPool extends Struct {
    readonly assets: Vec<ZeitgeistPrimitivesAssetsAllAssetsAsset>;
    readonly status: ZrmlSwapsPoolPoolStatus;
    readonly swapFee: u128;
    readonly totalWeight: u128;
    readonly weights: BTreeMap<ZeitgeistPrimitivesAssetsAllAssetsAsset, u128>;
  }

  /** @name ZrmlSwapsPoolPoolStatus (97) */
  interface ZrmlSwapsPoolPoolStatus extends Enum {
    readonly isOpen: boolean;
    readonly isClosed: boolean;
    readonly type: 'Open' | 'Closed';
  }

  /** @name ZrmlSwapsEventsPoolAssetsEvent (102) */
  interface ZrmlSwapsEventsPoolAssetsEvent extends Struct {
    readonly assets: Vec<ZeitgeistPrimitivesAssetsAllAssetsAsset>;
    readonly bounds: Vec<u128>;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: Vec<u128>;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsPoolAssetEvent (104) */
  interface ZrmlSwapsEventsPoolAssetEvent extends Struct {
    readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
    readonly bound: u128;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: u128;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsSwapEvent (105) */
  interface ZrmlSwapsEventsSwapEvent extends Struct {
    readonly assetAmountIn: u128;
    readonly assetAmountOut: u128;
    readonly assetBound: Option<u128>;
    readonly assetIn: ZeitgeistPrimitivesAssetsAllAssetsAsset;
    readonly assetOut: ZeitgeistPrimitivesAssetsAllAssetsAsset;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly maxPrice: Option<u128>;
  }

  /** @name ZrmlPredictionMarketsEvent (107) */
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
    readonly isMarketClosed: boolean;
    readonly asMarketClosed: u128;
    readonly isMarketEarlyCloseScheduled: boolean;
    readonly asMarketEarlyCloseScheduled: {
      readonly marketId: u128;
      readonly newPeriod: ZeitgeistPrimitivesMarketMarketPeriod;
      readonly state: ZeitgeistPrimitivesMarketEarlyCloseState;
    } & Struct;
    readonly isMarketEarlyCloseDisputed: boolean;
    readonly asMarketEarlyCloseDisputed: {
      readonly marketId: u128;
    } & Struct;
    readonly isMarketEarlyCloseRejected: boolean;
    readonly asMarketEarlyCloseRejected: {
      readonly marketId: u128;
    } & Struct;
    readonly isMarketDisputed: boolean;
    readonly asMarketDisputed: ITuple<[u128, ZeitgeistPrimitivesMarketMarketStatus, AccountId32]>;
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
    readonly asTokensRedeemed: ITuple<[u128, ZeitgeistPrimitivesAssetsAllAssetsAsset, u128, u128, AccountId32]>;
    readonly isGlobalDisputeStarted: boolean;
    readonly asGlobalDisputeStarted: u128;
    readonly isRecoveryLimitReached: boolean;
    readonly asRecoveryLimitReached: {
      readonly lastTimeFrame: u64;
      readonly limitTimeFrame: u64;
    } & Struct;
    readonly type: 'BadOnInitialize' | 'BoughtCompleteSet' | 'MarketApproved' | 'MarketCreated' | 'MarketDestroyed' | 'MarketClosed' | 'MarketEarlyCloseScheduled' | 'MarketEarlyCloseDisputed' | 'MarketEarlyCloseRejected' | 'MarketDisputed' | 'MarketExpired' | 'MarketRejected' | 'MarketReported' | 'MarketResolved' | 'MarketRequestedEdit' | 'MarketEdited' | 'SoldCompleteSet' | 'TokensRedeemed' | 'GlobalDisputeStarted' | 'RecoveryLimitReached';
  }

  /** @name ZeitgeistPrimitivesMarketMarketStatus (108) */
  interface ZeitgeistPrimitivesMarketMarketStatus extends Enum {
    readonly isProposed: boolean;
    readonly isActive: boolean;
    readonly isClosed: boolean;
    readonly isReported: boolean;
    readonly isDisputed: boolean;
    readonly isResolved: boolean;
    readonly type: 'Proposed' | 'Active' | 'Closed' | 'Reported' | 'Disputed' | 'Resolved';
  }

  /** @name ZeitgeistPrimitivesMarket (109) */
  interface ZeitgeistPrimitivesMarket extends Struct {
    readonly marketId: u128;
    readonly baseAsset: ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass;
    readonly creator: AccountId32;
    readonly creation: ZeitgeistPrimitivesMarketMarketCreation;
    readonly creatorFee: Perbill;
    readonly oracle: AccountId32;
    readonly metadata: Bytes;
    readonly marketType: ZeitgeistPrimitivesMarketMarketType;
    readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
    readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
    readonly scoringRule: ZeitgeistPrimitivesMarketScoringRule;
    readonly status: ZeitgeistPrimitivesMarketMarketStatus;
    readonly report: Option<ZeitgeistPrimitivesMarketReport>;
    readonly resolvedOutcome: Option<ZeitgeistPrimitivesOutcomeReport>;
    readonly disputeMechanism: Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>;
    readonly bonds: ZeitgeistPrimitivesMarketMarketBonds;
    readonly earlyClose: Option<ZeitgeistPrimitivesMarketEarlyClose>;
  }

  /** @name ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass (110) */
  interface ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass extends Enum {
    readonly isZtg: boolean;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly isCampaignAsset: boolean;
    readonly asCampaignAsset: Compact<u128>;
    readonly type: 'Ztg' | 'ForeignAsset' | 'CampaignAsset';
  }

  /** @name ZeitgeistPrimitivesMarketMarketCreation (111) */
  interface ZeitgeistPrimitivesMarketMarketCreation extends Enum {
    readonly isPermissionless: boolean;
    readonly isAdvised: boolean;
    readonly type: 'Permissionless' | 'Advised';
  }

  /** @name ZeitgeistPrimitivesMarketMarketType (112) */
  interface ZeitgeistPrimitivesMarketMarketType extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: RangeInclusive<u128>;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZeitgeistPrimitivesMarketMarketPeriod (114) */
  interface ZeitgeistPrimitivesMarketMarketPeriod extends Enum {
    readonly isBlock: boolean;
    readonly asBlock: Range<u64>;
    readonly isTimestamp: boolean;
    readonly asTimestamp: Range<u64>;
    readonly type: 'Block' | 'Timestamp';
  }

  /** @name ZeitgeistPrimitivesMarketDeadlines (116) */
  interface ZeitgeistPrimitivesMarketDeadlines extends Struct {
    readonly gracePeriod: u64;
    readonly oracleDuration: u64;
    readonly disputeDuration: u64;
  }

  /** @name ZeitgeistPrimitivesMarketScoringRule (117) */
  interface ZeitgeistPrimitivesMarketScoringRule extends Enum {
    readonly isAmmCdaHybrid: boolean;
    readonly isParimutuel: boolean;
    readonly type: 'AmmCdaHybrid' | 'Parimutuel';
  }

  /** @name ZeitgeistPrimitivesMarketReport (119) */
  interface ZeitgeistPrimitivesMarketReport extends Struct {
    readonly at: u64;
    readonly by: AccountId32;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZeitgeistPrimitivesMarketMarketDisputeMechanism (122) */
  interface ZeitgeistPrimitivesMarketMarketDisputeMechanism extends Enum {
    readonly isAuthorized: boolean;
    readonly isCourt: boolean;
    readonly isSimpleDisputes: boolean;
    readonly type: 'Authorized' | 'Court' | 'SimpleDisputes';
  }

  /** @name ZeitgeistPrimitivesMarketMarketBonds (123) */
  interface ZeitgeistPrimitivesMarketMarketBonds extends Struct {
    readonly creation: Option<ZeitgeistPrimitivesMarketBond>;
    readonly oracle: Option<ZeitgeistPrimitivesMarketBond>;
    readonly outsider: Option<ZeitgeistPrimitivesMarketBond>;
    readonly dispute: Option<ZeitgeistPrimitivesMarketBond>;
    readonly closeRequest: Option<ZeitgeistPrimitivesMarketBond>;
    readonly closeDispute: Option<ZeitgeistPrimitivesMarketBond>;
  }

  /** @name ZeitgeistPrimitivesMarketBond (125) */
  interface ZeitgeistPrimitivesMarketBond extends Struct {
    readonly who: AccountId32;
    readonly value: u128;
    readonly isSettled: bool;
  }

  /** @name ZeitgeistPrimitivesMarketEarlyClose (127) */
  interface ZeitgeistPrimitivesMarketEarlyClose extends Struct {
    readonly old: ZeitgeistPrimitivesMarketMarketPeriod;
    readonly new_: ZeitgeistPrimitivesMarketMarketPeriod;
    readonly state: ZeitgeistPrimitivesMarketEarlyCloseState;
  }

  /** @name ZeitgeistPrimitivesMarketEarlyCloseState (128) */
  interface ZeitgeistPrimitivesMarketEarlyCloseState extends Enum {
    readonly isScheduledAsMarketCreator: boolean;
    readonly isScheduledAsOther: boolean;
    readonly isDisputed: boolean;
    readonly isRejected: boolean;
    readonly type: 'ScheduledAsMarketCreator' | 'ScheduledAsOther' | 'Disputed' | 'Rejected';
  }

  /** @name ZrmlStyxEvent (131) */
  interface ZrmlStyxEvent extends Enum {
    readonly isAccountCrossed: boolean;
    readonly asAccountCrossed: ITuple<[AccountId32, u128]>;
    readonly isCrossingFeeChanged: boolean;
    readonly asCrossingFeeChanged: u128;
    readonly type: 'AccountCrossed' | 'CrossingFeeChanged';
  }

  /** @name ZrmlGlobalDisputesEvent (132) */
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
    readonly isOutcomeOwnersRewarded: boolean;
    readonly asOutcomeOwnersRewarded: {
      readonly marketId: u128;
      readonly owners: Vec<AccountId32>;
    } & Struct;
    readonly isOutcomeOwnerRewarded: boolean;
    readonly asOutcomeOwnerRewarded: {
      readonly marketId: u128;
      readonly owner: AccountId32;
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
    readonly type: 'AddedVotingOutcome' | 'GlobalDisputeWinnerDetermined' | 'OutcomeOwnersRewarded' | 'OutcomeOwnerRewarded' | 'OutcomesPartiallyCleaned' | 'OutcomesFullyCleaned' | 'VotedOnOutcome';
  }

  /** @name ZrmlNeoSwapsEvent (133) */
  interface ZrmlNeoSwapsEvent extends Enum {
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly assetOut: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly swapFeeAmount: u128;
      readonly externalFeeAmount: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly assetIn: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly swapFeeAmount: u128;
      readonly externalFeeAmount: u128;
    } & Struct;
    readonly isFeesWithdrawn: boolean;
    readonly asFeesWithdrawn: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly amount: u128;
    } & Struct;
    readonly isJoinExecuted: boolean;
    readonly asJoinExecuted: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly poolSharesAmount: u128;
      readonly amountsIn: Vec<u128>;
      readonly newLiquidityParameter: u128;
    } & Struct;
    readonly isExitExecuted: boolean;
    readonly asExitExecuted: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly poolSharesAmount: u128;
      readonly amountsOut: Vec<u128>;
      readonly newLiquidityParameter: u128;
    } & Struct;
    readonly isPoolDeployed: boolean;
    readonly asPoolDeployed: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly accountId: AccountId32;
      readonly reserves: BTreeMap<ZeitgeistPrimitivesAssetsAllAssetsAsset, u128>;
      readonly collateral: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly liquidityParameter: u128;
      readonly poolSharesAmount: u128;
      readonly swapFee: u128;
    } & Struct;
    readonly isPoolDestroyed: boolean;
    readonly asPoolDestroyed: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly amountsOut: Vec<u128>;
    } & Struct;
    readonly type: 'BuyExecuted' | 'SellExecuted' | 'FeesWithdrawn' | 'JoinExecuted' | 'ExitExecuted' | 'PoolDeployed' | 'PoolDestroyed';
  }

  /** @name ZrmlOrderbookEvent (134) */
  interface ZrmlOrderbookEvent extends Enum {
    readonly isOrderFilled: boolean;
    readonly asOrderFilled: {
      readonly orderId: u128;
      readonly maker: AccountId32;
      readonly taker: AccountId32;
      readonly filledMakerAmount: u128;
      readonly filledTakerAmount: u128;
      readonly unfilledMakerAmount: u128;
      readonly unfilledTakerAmount: u128;
      readonly externalFee: ZeitgeistPrimitivesHybridRouterApiTypesExternalFee;
    } & Struct;
    readonly isOrderPlaced: boolean;
    readonly asOrderPlaced: {
      readonly orderId: u128;
      readonly order: ZeitgeistPrimitivesOrderbookOrder;
    } & Struct;
    readonly isOrderRemoved: boolean;
    readonly asOrderRemoved: {
      readonly orderId: u128;
      readonly maker: AccountId32;
    } & Struct;
    readonly type: 'OrderFilled' | 'OrderPlaced' | 'OrderRemoved';
  }

  /** @name ZeitgeistPrimitivesHybridRouterApiTypesExternalFee (135) */
  interface ZeitgeistPrimitivesHybridRouterApiTypesExternalFee extends Struct {
    readonly account: AccountId32;
    readonly amount: u128;
  }

  /** @name ZeitgeistPrimitivesOrderbookOrder (136) */
  interface ZeitgeistPrimitivesOrderbookOrder extends Struct {
    readonly marketId: u128;
    readonly maker: AccountId32;
    readonly makerAsset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
    readonly makerAmount: u128;
    readonly takerAsset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
    readonly takerAmount: u128;
  }

  /** @name ZrmlParimutuelEvent (137) */
  interface ZrmlParimutuelEvent extends Enum {
    readonly isOutcomeBought: boolean;
    readonly asOutcomeBought: {
      readonly marketId: u128;
      readonly buyer: AccountId32;
      readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountMinusFees: u128;
      readonly fees: u128;
    } & Struct;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: {
      readonly marketId: u128;
      readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly withdrawnAssetBalance: u128;
      readonly baseAssetPayoff: u128;
      readonly sender: AccountId32;
    } & Struct;
    readonly isBalanceRefunded: boolean;
    readonly asBalanceRefunded: {
      readonly marketId: u128;
      readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly refundedBalance: u128;
      readonly sender: AccountId32;
    } & Struct;
    readonly type: 'OutcomeBought' | 'RewardsClaimed' | 'BalanceRefunded';
  }

  /** @name ZrmlHybridRouterEvent (138) */
  interface ZrmlHybridRouterEvent extends Enum {
    readonly isHybridRouterExecuted: boolean;
    readonly asHybridRouterExecuted: {
      readonly txType: ZrmlHybridRouterTxType;
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly priceLimit: u128;
      readonly assetIn: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountIn: u128;
      readonly assetOut: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountOut: u128;
      readonly externalFeeAmount: u128;
      readonly swapFeeAmount: u128;
    } & Struct;
    readonly type: 'HybridRouterExecuted';
  }

  /** @name ZrmlHybridRouterTxType (139) */
  interface ZrmlHybridRouterTxType extends Enum {
    readonly isBuy: boolean;
    readonly isSell: boolean;
    readonly type: 'Buy' | 'Sell';
  }

  /** @name CumulusPalletParachainSystemEvent (140) */
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
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name PalletParachainStakingEvent (141) */
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
      readonly autoCompound: Percent;
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
    readonly isAutoCompoundSet: boolean;
    readonly asAutoCompoundSet: {
      readonly candidate: AccountId32;
      readonly delegator: AccountId32;
      readonly value: Percent;
    } & Struct;
    readonly isCompounded: boolean;
    readonly asCompounded: {
      readonly candidate: AccountId32;
      readonly delegator: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewRound' | 'JoinedCollatorCandidates' | 'CollatorChosen' | 'CandidateBondLessRequested' | 'CandidateBondedMore' | 'CandidateBondedLess' | 'CandidateWentOffline' | 'CandidateBackOnline' | 'CandidateScheduledExit' | 'CancelledCandidateExit' | 'CancelledCandidateBondLess' | 'CandidateLeft' | 'DelegationDecreaseScheduled' | 'DelegationIncreased' | 'DelegationDecreased' | 'DelegatorExitScheduled' | 'DelegationRevocationScheduled' | 'DelegatorLeft' | 'DelegationRevoked' | 'DelegationKicked' | 'DelegatorExitCancelled' | 'CancelledDelegationRequest' | 'Delegation' | 'DelegatorLeftCandidate' | 'Rewarded' | 'ReservedForParachainBond' | 'ParachainBondAccountSet' | 'ParachainBondReservePercentSet' | 'InflationSet' | 'StakeExpectationsSet' | 'TotalSelectedSet' | 'CollatorCommissionSet' | 'BlocksPerRoundSet' | 'AutoCompoundSet' | 'Compounded';
  }

  /** @name PalletParachainStakingDelegationRequestsCancelledScheduledRequest (142) */
  interface PalletParachainStakingDelegationRequestsCancelledScheduledRequest extends Struct {
    readonly whenExecutable: u32;
    readonly action: PalletParachainStakingDelegationRequestsDelegationAction;
  }

  /** @name PalletParachainStakingDelegationRequestsDelegationAction (143) */
  interface PalletParachainStakingDelegationRequestsDelegationAction extends Enum {
    readonly isRevoke: boolean;
    readonly asRevoke: u128;
    readonly isDecrease: boolean;
    readonly asDecrease: u128;
    readonly type: 'Revoke' | 'Decrease';
  }

  /** @name PalletParachainStakingDelegatorAdded (144) */
  interface PalletParachainStakingDelegatorAdded extends Enum {
    readonly isAddedToTop: boolean;
    readonly asAddedToTop: {
      readonly newTotal: u128;
    } & Struct;
    readonly isAddedToBottom: boolean;
    readonly type: 'AddedToTop' | 'AddedToBottom';
  }

  /** @name PalletAuthorSlotFilterEvent (146) */
  interface PalletAuthorSlotFilterEvent extends Enum {
    readonly isEligibleUpdated: boolean;
    readonly asEligibleUpdated: u32;
    readonly type: 'EligibleUpdated';
  }

  /** @name PalletAuthorMappingEvent (148) */
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

  /** @name NimbusPrimitivesNimbusCryptoPublic (149) */
  interface NimbusPrimitivesNimbusCryptoPublic extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (150) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name SessionKeysPrimitivesVrfVrfCryptoPublic (151) */
  interface SessionKeysPrimitivesVrfVrfCryptoPublic extends SpCoreSr25519Public {}

  /** @name CumulusPalletXcmEvent (152) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name XcmV3TraitsOutcome (153) */
  interface XcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name XcmV3TraitsError (154) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
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
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name CumulusPalletDmpQueueEvent (155) */
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
      readonly outcome: XcmV3TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isMaxMessagesExhausted: boolean;
    readonly asMaxMessagesExhausted: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
  }

  /** @name PalletXcmEvent (156) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: XcmV3TraitsOutcome;
    readonly isSent: boolean;
    readonly asSent: ITuple<[XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseReady: boolean;
    readonly asResponseReady: ITuple<[u64, XcmV3Response]>;
    readonly isNotified: boolean;
    readonly asNotified: ITuple<[u64, u8, u8]>;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: ITuple<[XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: u64;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: ITuple<[XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: ITuple<[XcmV3MultiLocation, u32]>;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: ITuple<[XcmV3MultiLocation, u64, XcmV3TraitsError]>;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: ITuple<[XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name XcmV3MultiLocation (157) */
  interface XcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (158) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (159) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (162) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name XcmV3JunctionBodyId (164) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (165) */
  interface XcmV3JunctionBodyPart extends Enum {
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

  /** @name XcmV3Xcm (166) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (168) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
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
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: XcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<XcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: XcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: XcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: XcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: XcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: XcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (169) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (171) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetAssetId (172) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV3MultiassetFungibility (173) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (174) */
  interface XcmV3MultiassetAssetInstance extends Enum {
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
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmV3Response (176) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: XcmV3VecPalletInfo;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3VecPalletInfo (179) */
  interface XcmV3VecPalletInfo extends Vec<XcmV3PalletInfo> {}

  /** @name XcmV3PalletInfo (181) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (182) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV2OriginKind (184) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (185) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV3QueryResponseInfo (186) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: XcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (187) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (188) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (189) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (190) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (191) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2MultiassetMultiAssets (192) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (194) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (195) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiLocation (196) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (197) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (198) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
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
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (199) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (201) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (202) */
  interface XcmV2BodyPart extends Enum {
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

  /** @name XcmV2MultiassetFungibility (203) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (204) */
  interface XcmV2MultiassetAssetInstance extends Enum {
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

  /** @name XcmVersionedMultiLocation (205) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name CumulusPalletXcmpQueueEvent (206) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: Option<U8aFixed>;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: Option<U8aFixed>;
      readonly error: XcmV3TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name OrmlAssetRegistryModuleEvent (208) */
  interface OrmlAssetRegistryModuleEvent extends Enum {
    readonly isRegisteredAsset: boolean;
    readonly asRegisteredAsset: {
      readonly assetId: ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly isUpdatedAsset: boolean;
    readonly asUpdatedAsset: {
      readonly assetId: ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly type: 'RegisteredAsset' | 'UpdatedAsset';
  }

  /** @name ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass (209) */
  interface ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass extends Enum {
    readonly isZtg: boolean;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly type: 'Ztg' | 'ForeignAsset';
  }

  /** @name OrmlTraitsAssetRegistryAssetMetadata (210) */
  interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
    readonly decimals: u32;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly existentialDeposit: u128;
    readonly location: Option<XcmVersionedMultiLocation>;
    readonly additional: ZeitgeistPrimitivesCustomMetadata;
  }

  /** @name ZeitgeistPrimitivesCustomMetadata (211) */
  interface ZeitgeistPrimitivesCustomMetadata extends Struct {
    readonly xcm: ZeitgeistPrimitivesXcmMetadata;
    readonly allowAsBaseAsset: bool;
  }

  /** @name ZeitgeistPrimitivesXcmMetadata (212) */
  interface ZeitgeistPrimitivesXcmMetadata extends Struct {
    readonly feeFactor: Option<u128>;
  }

  /** @name OrmlUnknownTokensModuleEvent (214) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: XcmV3MultiAsset;
      readonly who: XcmV3MultiLocation;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: XcmV3MultiAsset;
      readonly who: XcmV3MultiLocation;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlXtokensModuleEvent (215) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly fee: XcmV3MultiAsset;
      readonly dest: XcmV3MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name PalletSudoEvent (216) */
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

  /** @name FrameSystemPhase (218) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (221) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (223) */
  interface FrameSystemCall extends Enum {
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
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (227) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (228) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (229) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (231) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (232) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (233) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (234) */
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

  /** @name FrameSystemError (238) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (239) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletSchedulerScheduled (243) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
    readonly origin: BatteryStationRuntimeOriginCaller;
  }

  /** @name FrameSupportPreimagesBounded (244) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletSchedulerCall (246) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletPreimageCall (248) */
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

  /** @name PalletBalancesCall (249) */
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

  /** @name PalletTreasuryCall (252) */
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

  /** @name PalletVestingCall (253) */
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

  /** @name PalletVestingVestingInfo (254) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u64;
  }

  /** @name PalletMultisigCall (255) */
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
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
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

  /** @name PalletBountiesCall (257) */
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

  /** @name PalletAssetsCall (258) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u128>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u128>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isStartDestroy: boolean;
    readonly asStartDestroy: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isDestroyAccounts: boolean;
    readonly asDestroyAccounts: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isDestroyApprovals: boolean;
    readonly asDestroyApprovals: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isFinishDestroy: boolean;
    readonly asFinishDestroy: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u128>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u128>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u128>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u128>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u128>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u128>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u128>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u128>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u128>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u128>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u128>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u128>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u128>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u128>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u128>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u128>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u128>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u128>;
      readonly allowBurn: bool;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'StartDestroy' | 'DestroyAccounts' | 'DestroyApprovals' | 'FinishDestroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund';
  }

  /** @name PalletDemocracyCall (261) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
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
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
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
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
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
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal';
  }

  /** @name PalletDemocracyConviction (262) */
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

  /** @name PalletCollectiveCall (264) */
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
    readonly isCloseOldWeight: boolean;
    readonly asCloseOldWeight: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: Compact<u64>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'CloseOldWeight' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletMembershipCall (267) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletIdentityCall (272) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
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
      readonly new_: MultiAddress;
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
      readonly identity: H256;
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

  /** @name PalletIdentityIdentityInfo (273) */
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

  /** @name PalletIdentityBitFlags (309) */
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

  /** @name PalletIdentityIdentityField (310) */
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

  /** @name PalletIdentityJudgement (311) */
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

  /** @name PalletUtilityCall (312) */
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
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name BatteryStationRuntimeOriginCaller (314) */
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

  /** @name FrameSupportDispatchRawOrigin (315) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (316) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name CumulusPalletXcmOrigin (319) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name PalletXcmOrigin (320) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name SpCoreVoid (321) */
  type SpCoreVoid = Null;

  /** @name PalletProxyCall (322) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<ZeitgeistPrimitivesProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly delay: u64;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: ZeitgeistPrimitivesProxyType;
      readonly index: u16;
      readonly height: Compact<u64>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<ZeitgeistPrimitivesProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletContractsCall (324) */
  interface PalletContractsCall extends Enum {
    readonly isCallOldWeight: boolean;
    readonly asCallOldWeight: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCodeOldWeight: boolean;
    readonly asInstantiateWithCodeOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiateOldWeight: boolean;
    readonly asInstantiateOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly determinism: PalletContractsWasmDeterminism;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: MultiAddress;
      readonly codeHash: H256;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly type: 'CallOldWeight' | 'InstantiateWithCodeOldWeight' | 'InstantiateOldWeight' | 'UploadCode' | 'RemoveCode' | 'SetCode' | 'Call' | 'InstantiateWithCode' | 'Instantiate';
  }

  /** @name PalletContractsWasmDeterminism (326) */
  interface PalletContractsWasmDeterminism extends Enum {
    readonly isDeterministic: boolean;
    readonly isAllowIndeterminism: boolean;
    readonly type: 'Deterministic' | 'AllowIndeterminism';
  }

  /** @name OrmlCurrenciesModuleCall (327) */
  interface OrmlCurrenciesModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly currencyId: ZeitgeistPrimitivesAssetsAllAssetsAsset;
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
      readonly currencyId: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amount: i128;
    } & Struct;
    readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance';
  }

  /** @name ZrmlAuthorizedCall (329) */
  interface ZrmlAuthorizedCall extends Enum {
    readonly isAuthorizeMarketOutcome: boolean;
    readonly asAuthorizeMarketOutcome: {
      readonly marketId: u128;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'AuthorizeMarketOutcome';
  }

  /** @name ZrmlCourtCall (330) */
  interface ZrmlCourtCall extends Enum {
    readonly isJoinCourt: boolean;
    readonly asJoinCourt: {
      readonly amount: u128;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly amount: u128;
      readonly delegations: Vec<AccountId32>;
    } & Struct;
    readonly isPrepareExitCourt: boolean;
    readonly isExitCourt: boolean;
    readonly asExitCourt: {
      readonly courtParticipant: MultiAddress;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly courtId: Compact<u128>;
      readonly commitmentVote: H256;
    } & Struct;
    readonly isDenounceVote: boolean;
    readonly asDenounceVote: {
      readonly courtId: Compact<u128>;
      readonly juror: MultiAddress;
      readonly voteItem: ZrmlCourtVoteItem;
      readonly salt: H256;
    } & Struct;
    readonly isRevealVote: boolean;
    readonly asRevealVote: {
      readonly courtId: Compact<u128>;
      readonly voteItem: ZrmlCourtVoteItem;
      readonly salt: H256;
    } & Struct;
    readonly isAppeal: boolean;
    readonly asAppeal: {
      readonly courtId: Compact<u128>;
    } & Struct;
    readonly isReassignCourtStakes: boolean;
    readonly asReassignCourtStakes: {
      readonly courtId: u128;
    } & Struct;
    readonly isSetInflation: boolean;
    readonly asSetInflation: {
      readonly inflation: Perbill;
    } & Struct;
    readonly type: 'JoinCourt' | 'Delegate' | 'PrepareExitCourt' | 'ExitCourt' | 'Vote' | 'DenounceVote' | 'RevealVote' | 'Appeal' | 'ReassignCourtStakes' | 'SetInflation';
  }

  /** @name ZrmlLiquidityMiningCall (331) */
  interface ZrmlLiquidityMiningCall extends Enum {
    readonly isSetPerBlockDistribution: boolean;
    readonly asSetPerBlockDistribution: {
      readonly perBlockDistribution: Compact<u128>;
    } & Struct;
    readonly type: 'SetPerBlockDistribution';
  }

  /** @name ZrmlSimpleDisputesCall (332) */
  interface ZrmlSimpleDisputesCall extends Enum {
    readonly isSuggestOutcome: boolean;
    readonly asSuggestOutcome: {
      readonly marketId: Compact<u128>;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'SuggestOutcome';
  }

  /** @name ZrmlSwapsCall (333) */
  interface ZrmlSwapsCall extends Enum {
    readonly isPoolExit: boolean;
    readonly asPoolExit: {
      readonly poolId: Compact<u128>;
      readonly poolAmount: Compact<u128>;
      readonly minAssetsOut: Vec<u128>;
    } & Struct;
    readonly isPoolExitWithExactAssetAmount: boolean;
    readonly asPoolExitWithExactAssetAmount: {
      readonly poolId: Compact<u128>;
      readonly assetOut: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly assetAmount: Compact<u128>;
      readonly maxPoolAmount: Compact<u128>;
    } & Struct;
    readonly isPoolExitWithExactPoolAmount: boolean;
    readonly asPoolExitWithExactPoolAmount: {
      readonly poolId: Compact<u128>;
      readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly poolAmount: Compact<u128>;
      readonly minAssetAmount: Compact<u128>;
    } & Struct;
    readonly isPoolJoin: boolean;
    readonly asPoolJoin: {
      readonly poolId: Compact<u128>;
      readonly poolAmount: Compact<u128>;
      readonly maxAssetsIn: Vec<u128>;
    } & Struct;
    readonly isPoolJoinWithExactAssetAmount: boolean;
    readonly asPoolJoinWithExactAssetAmount: {
      readonly poolId: Compact<u128>;
      readonly assetIn: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly assetAmount: Compact<u128>;
      readonly minPoolAmount: Compact<u128>;
    } & Struct;
    readonly isPoolJoinWithExactPoolAmount: boolean;
    readonly asPoolJoinWithExactPoolAmount: {
      readonly poolId: Compact<u128>;
      readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly poolAmount: Compact<u128>;
      readonly maxAssetAmount: Compact<u128>;
    } & Struct;
    readonly isSwapExactAmountIn: boolean;
    readonly asSwapExactAmountIn: {
      readonly poolId: Compact<u128>;
      readonly assetIn: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly assetAmountIn: Compact<u128>;
      readonly assetOut: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly minAssetAmountOut: Option<u128>;
      readonly maxPrice: Option<u128>;
    } & Struct;
    readonly isSwapExactAmountOut: boolean;
    readonly asSwapExactAmountOut: {
      readonly poolId: Compact<u128>;
      readonly assetIn: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly maxAssetAmountIn: Option<u128>;
      readonly assetOut: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly assetAmountOut: Compact<u128>;
      readonly maxPrice: Option<u128>;
    } & Struct;
    readonly isForcePoolExit: boolean;
    readonly asForcePoolExit: {
      readonly who: AccountId32;
      readonly poolId: Compact<u128>;
      readonly poolAmount: Compact<u128>;
      readonly minAssetsOut: Vec<u128>;
    } & Struct;
    readonly type: 'PoolExit' | 'PoolExitWithExactAssetAmount' | 'PoolExitWithExactPoolAmount' | 'PoolJoin' | 'PoolJoinWithExactAssetAmount' | 'PoolJoinWithExactPoolAmount' | 'SwapExactAmountIn' | 'SwapExactAmountOut' | 'ForcePoolExit';
  }

  /** @name ZrmlPredictionMarketsCall (334) */
  interface ZrmlPredictionMarketsCall extends Enum {
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
    } & Struct;
    readonly isCreateMarket: boolean;
    readonly asCreateMarket: {
      readonly baseAsset: ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass;
      readonly creatorFee: Perbill;
      readonly oracle: AccountId32;
      readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
      readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
      readonly metadata: ZeitgeistPrimitivesMultiHash;
      readonly creation: ZeitgeistPrimitivesMarketMarketCreation;
      readonly marketType: ZeitgeistPrimitivesMarketMarketType;
      readonly disputeMechanism: Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>;
      readonly scoringRule: ZeitgeistPrimitivesMarketScoringRule;
    } & Struct;
    readonly isEditMarket: boolean;
    readonly asEditMarket: {
      readonly baseAsset: ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass;
      readonly marketId: u128;
      readonly oracle: AccountId32;
      readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
      readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
      readonly metadata: ZeitgeistPrimitivesMultiHash;
      readonly marketType: ZeitgeistPrimitivesMarketMarketType;
      readonly disputeMechanism: Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>;
      readonly scoringRule: ZeitgeistPrimitivesMarketScoringRule;
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
    readonly isCreateMarketAndDeployPool: boolean;
    readonly asCreateMarketAndDeployPool: {
      readonly baseAsset: ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass;
      readonly creatorFee: Perbill;
      readonly oracle: AccountId32;
      readonly period: ZeitgeistPrimitivesMarketMarketPeriod;
      readonly deadlines: ZeitgeistPrimitivesMarketDeadlines;
      readonly metadata: ZeitgeistPrimitivesMultiHash;
      readonly marketType: ZeitgeistPrimitivesMarketMarketType;
      readonly disputeMechanism: Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>;
      readonly amount: Compact<u128>;
      readonly spotPrices: Vec<u128>;
      readonly swapFee: Compact<u128>;
    } & Struct;
    readonly isScheduleEarlyClose: boolean;
    readonly asScheduleEarlyClose: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isDisputeEarlyClose: boolean;
    readonly asDisputeEarlyClose: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isRejectEarlyClose: boolean;
    readonly asRejectEarlyClose: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isCloseTrustedMarket: boolean;
    readonly asCloseTrustedMarket: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isManuallyCloseMarket: boolean;
    readonly asManuallyCloseMarket: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly type: 'AdminMoveMarketToClosed' | 'AdminMoveMarketToResolved' | 'ApproveMarket' | 'RequestEdit' | 'BuyCompleteSet' | 'Dispute' | 'CreateMarket' | 'EditMarket' | 'RedeemShares' | 'RejectMarket' | 'Report' | 'SellCompleteSet' | 'StartGlobalDispute' | 'CreateMarketAndDeployPool' | 'ScheduleEarlyClose' | 'DisputeEarlyClose' | 'RejectEarlyClose' | 'CloseTrustedMarket' | 'ManuallyCloseMarket';
  }

  /** @name ZeitgeistPrimitivesMultiHash (335) */
  interface ZeitgeistPrimitivesMultiHash extends Enum {
    readonly isSha3384: boolean;
    readonly asSha3384: U8aFixed;
    readonly type: 'Sha3384';
  }

  /** @name ZrmlStyxCall (337) */
  interface ZrmlStyxCall extends Enum {
    readonly isCross: boolean;
    readonly isSetBurnAmount: boolean;
    readonly asSetBurnAmount: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'Cross' | 'SetBurnAmount';
  }

  /** @name ZrmlGlobalDisputesCall (338) */
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
    readonly isRefundVoteFees: boolean;
    readonly asRefundVoteFees: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly type: 'AddVoteOutcome' | 'PurgeOutcomes' | 'RewardOutcomeOwner' | 'VoteOnOutcome' | 'UnlockVoteBalance' | 'RefundVoteFees';
  }

  /** @name ZrmlNeoSwapsCall (339) */
  interface ZrmlNeoSwapsCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly marketId: Compact<u128>;
      readonly assetCount: u16;
      readonly assetOut: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountIn: Compact<u128>;
      readonly minAmountOut: Compact<u128>;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly marketId: Compact<u128>;
      readonly assetCount: u16;
      readonly assetIn: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountIn: Compact<u128>;
      readonly minAmountOut: Compact<u128>;
    } & Struct;
    readonly isJoin: boolean;
    readonly asJoin: {
      readonly marketId: Compact<u128>;
      readonly poolSharesAmount: Compact<u128>;
      readonly maxAmountsIn: Vec<u128>;
    } & Struct;
    readonly isExit: boolean;
    readonly asExit: {
      readonly marketId: Compact<u128>;
      readonly poolSharesAmountOut: Compact<u128>;
      readonly minAmountsOut: Vec<u128>;
    } & Struct;
    readonly isWithdrawFees: boolean;
    readonly asWithdrawFees: {
      readonly marketId: Compact<u128>;
    } & Struct;
    readonly isDeployPool: boolean;
    readonly asDeployPool: {
      readonly marketId: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly spotPrices: Vec<u128>;
      readonly swapFee: Compact<u128>;
    } & Struct;
    readonly type: 'Buy' | 'Sell' | 'Join' | 'Exit' | 'WithdrawFees' | 'DeployPool';
  }

  /** @name ZrmlOrderbookCall (340) */
  interface ZrmlOrderbookCall extends Enum {
    readonly isRemoveOrder: boolean;
    readonly asRemoveOrder: {
      readonly orderId: u128;
    } & Struct;
    readonly isFillOrder: boolean;
    readonly asFillOrder: {
      readonly orderId: u128;
      readonly makerPartialFill: Option<u128>;
    } & Struct;
    readonly isPlaceOrder: boolean;
    readonly asPlaceOrder: {
      readonly marketId: Compact<u128>;
      readonly makerAsset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly makerAmount: Compact<u128>;
      readonly takerAsset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly takerAmount: Compact<u128>;
    } & Struct;
    readonly type: 'RemoveOrder' | 'FillOrder' | 'PlaceOrder';
  }

  /** @name ZrmlParimutuelCall (341) */
  interface ZrmlParimutuelCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly asset: ZeitgeistPrimitivesAssetsSubsetsParimutuelParimutuelAssetClass;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly marketId: u128;
    } & Struct;
    readonly isClaimRefunds: boolean;
    readonly asClaimRefunds: {
      readonly refundAsset: ZeitgeistPrimitivesAssetsSubsetsParimutuelParimutuelAssetClass;
    } & Struct;
    readonly type: 'Buy' | 'ClaimRewards' | 'ClaimRefunds';
  }

  /** @name ZeitgeistPrimitivesAssetsSubsetsParimutuelParimutuelAssetClass (342) */
  interface ZeitgeistPrimitivesAssetsSubsetsParimutuelParimutuelAssetClass extends Enum {
    readonly isShare: boolean;
    readonly asShare: ITuple<[u128, u16]>;
    readonly type: 'Share';
  }

  /** @name ZrmlHybridRouterCall (343) */
  interface ZrmlHybridRouterCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly marketId: u128;
      readonly assetCount: Compact<u16>;
      readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountIn: Compact<u128>;
      readonly maxPrice: Compact<u128>;
      readonly orders: Vec<u128>;
      readonly strategy: ZrmlHybridRouterStrategy;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly marketId: u128;
      readonly assetCount: Compact<u16>;
      readonly asset: ZeitgeistPrimitivesAssetsAllAssetsAsset;
      readonly amountIn: Compact<u128>;
      readonly minPrice: Compact<u128>;
      readonly orders: Vec<u128>;
      readonly strategy: ZrmlHybridRouterStrategy;
    } & Struct;
    readonly type: 'Buy' | 'Sell';
  }

  /** @name ZrmlHybridRouterStrategy (345) */
  interface ZrmlHybridRouterStrategy extends Enum {
    readonly isImmediateOrCancel: boolean;
    readonly isLimitOrder: boolean;
    readonly type: 'ImmediateOrCancel' | 'LimitOrder';
  }

  /** @name CumulusPalletParachainSystemCall (346) */
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

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (347) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV2PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV2PersistedValidationData (348) */
  interface PolkadotPrimitivesV2PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (350) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (353) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (356) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PalletParachainStakingCall (359) */
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
    readonly isDelegateWithAutoCompound: boolean;
    readonly asDelegateWithAutoCompound: {
      readonly candidate: AccountId32;
      readonly amount: u128;
      readonly autoCompound: Percent;
      readonly candidateDelegationCount: u32;
      readonly candidateAutoCompoundingDelegationCount: u32;
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
    readonly isSetAutoCompound: boolean;
    readonly asSetAutoCompound: {
      readonly candidate: AccountId32;
      readonly value: Percent;
      readonly candidateAutoCompoundingDelegationCountHint: u32;
      readonly delegationCountHint: u32;
    } & Struct;
    readonly isHotfixRemoveDelegationRequestsExitedCandidates: boolean;
    readonly asHotfixRemoveDelegationRequestsExitedCandidates: {
      readonly candidates: Vec<AccountId32>;
    } & Struct;
    readonly type: 'SetStakingExpectations' | 'SetInflation' | 'SetParachainBondAccount' | 'SetParachainBondReservePercent' | 'SetTotalSelected' | 'SetCollatorCommission' | 'SetBlocksPerRound' | 'JoinCandidates' | 'ScheduleLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'GoOffline' | 'GoOnline' | 'CandidateBondMore' | 'ScheduleCandidateBondLess' | 'ExecuteCandidateBondLess' | 'CancelCandidateBondLess' | 'Delegate' | 'DelegateWithAutoCompound' | 'ScheduleLeaveDelegators' | 'ExecuteLeaveDelegators' | 'CancelLeaveDelegators' | 'ScheduleRevokeDelegation' | 'DelegatorBondMore' | 'ScheduleDelegatorBondLess' | 'ExecuteDelegationRequest' | 'CancelDelegationRequest' | 'SetAutoCompound' | 'HotfixRemoveDelegationRequestsExitedCandidates';
  }

  /** @name PalletAuthorInherentCall (362) */
  interface PalletAuthorInherentCall extends Enum {
    readonly isKickOffAuthorshipValidation: boolean;
    readonly type: 'KickOffAuthorshipValidation';
  }

  /** @name PalletAuthorSlotFilterCall (363) */
  interface PalletAuthorSlotFilterCall extends Enum {
    readonly isSetEligible: boolean;
    readonly asSetEligible: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SetEligible';
  }

  /** @name PalletAuthorMappingCall (364) */
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

  /** @name CumulusPalletDmpQueueCall (365) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletXcmCall (366) */
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
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV3MultiLocation;
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
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets';
  }

  /** @name XcmVersionedXcm (367) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2Xcm (368) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (370) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
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
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
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
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
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

  /** @name XcmV2Response (371) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (374) */
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

  /** @name XcmV2MultiassetMultiAssetFilter (375) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (376) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (377) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (378) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name CumulusPalletXcmpQueueCall (387) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
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
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name OrmlAssetRegistryModuleCall (388) */
  interface OrmlAssetRegistryModuleCall extends Enum {
    readonly isRegisterAsset: boolean;
    readonly asRegisterAsset: {
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
      readonly assetId: Option<ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass>;
    } & Struct;
    readonly isUpdateAsset: boolean;
    readonly asUpdateAsset: {
      readonly assetId: ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass;
      readonly decimals: Option<u32>;
      readonly name: Option<Bytes>;
      readonly symbol: Option<Bytes>;
      readonly existentialDeposit: Option<u128>;
      readonly location: Option<Option<XcmVersionedMultiLocation>>;
      readonly additional: Option<ZeitgeistPrimitivesCustomMetadata>;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAsset';
  }

  /** @name OrmlXtokensModuleCall (393) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass;
      readonly amount: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedMultiAsset;
      readonly fee: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedMultiAsset (394) */
  interface XcmVersionedMultiAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletSudoCall (397) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
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

  /** @name PalletSchedulerError (400) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletPreimageRequestStatus (401) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (406) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PalletBalancesBalanceLock (408) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (409) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (412) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (414) */
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

  /** @name PalletTransactionPaymentReleases (416) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletTreasuryProposal (417) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (421) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (422) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletVestingReleases (425) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (426) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletMultisigMultisig (428) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (430) */
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

  /** @name PalletBountiesBounty (431) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (432) */
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

  /** @name PalletBountiesError (434) */
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

  /** @name PalletAssetsAssetDetails (435) */
  interface PalletAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly status: PalletAssetsAssetStatus;
  }

  /** @name PalletAssetsAssetStatus (436) */
  interface PalletAssetsAssetStatus extends Enum {
    readonly isLive: boolean;
    readonly isFrozen: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Live' | 'Frozen' | 'Destroying';
  }

  /** @name PalletAssetsAssetAccount (438) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly isFrozen: bool;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsExistenceReason (439) */
  interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded';
  }

  /** @name PalletAssetsApproval (441) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsError (444) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isNoProvider: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isLiveAsset: boolean;
    readonly isAssetNotLive: boolean;
    readonly isIncorrectStatus: boolean;
    readonly isNotFrozen: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'NoProvider' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn' | 'LiveAsset' | 'AssetNotLive' | 'IncorrectStatus' | 'NotFrozen';
  }

  /** @name PalletAssetsAssetMetadata (452) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletDemocracyReferendumInfo (459) */
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

  /** @name PalletDemocracyReferendumStatus (460) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u64;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u64;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (461) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (462) */
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

  /** @name PalletDemocracyDelegations (466) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (467) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u64, u128]> {}

  /** @name PalletDemocracyError (470) */
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
    readonly isReferendumInvalid: boolean;
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
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow';
  }

  /** @name PalletCollectiveVotes (472) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u64;
  }

  /** @name PalletCollectiveError (473) */
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

  /** @name PalletMembershipError (475) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletIdentityRegistration (484) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (492) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (494) */
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
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletUtilityError (495) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletProxyProxyDefinition (498) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: ZeitgeistPrimitivesProxyType;
    readonly delay: u64;
  }

  /** @name PalletProxyAnnouncement (502) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u64;
  }

  /** @name PalletProxyError (504) */
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

  /** @name PalletContractsWasmPrefabWasmModule (506) */
  interface PalletContractsWasmPrefabWasmModule extends Struct {
    readonly instructionWeightsVersion: Compact<u32>;
    readonly initial: Compact<u32>;
    readonly maximum: Compact<u32>;
    readonly code: Bytes;
    readonly determinism: PalletContractsWasmDeterminism;
  }

  /** @name PalletContractsWasmOwnerInfo (508) */
  interface PalletContractsWasmOwnerInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
  }

  /** @name PalletContractsStorageContractInfo (509) */
  interface PalletContractsStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
  }

  /** @name PalletContractsStorageDeletedContract (511) */
  interface PalletContractsStorageDeletedContract extends Struct {
    readonly trieId: Bytes;
  }

  /** @name PalletContractsSchedule (513) */
  interface PalletContractsSchedule extends Struct {
    readonly limits: PalletContractsScheduleLimits;
    readonly instructionWeights: PalletContractsScheduleInstructionWeights;
    readonly hostFnWeights: PalletContractsScheduleHostFnWeights;
  }

  /** @name PalletContractsScheduleLimits (514) */
  interface PalletContractsScheduleLimits extends Struct {
    readonly eventTopics: u32;
    readonly globals: u32;
    readonly locals: u32;
    readonly parameters: u32;
    readonly memoryPages: u32;
    readonly tableSize: u32;
    readonly brTableSize: u32;
    readonly subjectLen: u32;
    readonly payloadLen: u32;
  }

  /** @name PalletContractsScheduleInstructionWeights (515) */
  interface PalletContractsScheduleInstructionWeights extends Struct {
    readonly version: u32;
    readonly fallback: u32;
    readonly i64const: u32;
    readonly i64load: u32;
    readonly i64store: u32;
    readonly select: u32;
    readonly r_if: u32;
    readonly br: u32;
    readonly brIf: u32;
    readonly brTable: u32;
    readonly brTablePerEntry: u32;
    readonly call: u32;
    readonly callIndirect: u32;
    readonly callIndirectPerParam: u32;
    readonly callPerLocal: u32;
    readonly localGet: u32;
    readonly localSet: u32;
    readonly localTee: u32;
    readonly globalGet: u32;
    readonly globalSet: u32;
    readonly memoryCurrent: u32;
    readonly memoryGrow: u32;
    readonly i64clz: u32;
    readonly i64ctz: u32;
    readonly i64popcnt: u32;
    readonly i64eqz: u32;
    readonly i64extendsi32: u32;
    readonly i64extendui32: u32;
    readonly i32wrapi64: u32;
    readonly i64eq: u32;
    readonly i64ne: u32;
    readonly i64lts: u32;
    readonly i64ltu: u32;
    readonly i64gts: u32;
    readonly i64gtu: u32;
    readonly i64les: u32;
    readonly i64leu: u32;
    readonly i64ges: u32;
    readonly i64geu: u32;
    readonly i64add: u32;
    readonly i64sub: u32;
    readonly i64mul: u32;
    readonly i64divs: u32;
    readonly i64divu: u32;
    readonly i64rems: u32;
    readonly i64remu: u32;
    readonly i64and: u32;
    readonly i64or: u32;
    readonly i64xor: u32;
    readonly i64shl: u32;
    readonly i64shrs: u32;
    readonly i64shru: u32;
    readonly i64rotl: u32;
    readonly i64rotr: u32;
  }

  /** @name PalletContractsScheduleHostFnWeights (516) */
  interface PalletContractsScheduleHostFnWeights extends Struct {
    readonly caller: SpWeightsWeightV2Weight;
    readonly isContract: SpWeightsWeightV2Weight;
    readonly codeHash: SpWeightsWeightV2Weight;
    readonly ownCodeHash: SpWeightsWeightV2Weight;
    readonly callerIsOrigin: SpWeightsWeightV2Weight;
    readonly address: SpWeightsWeightV2Weight;
    readonly gasLeft: SpWeightsWeightV2Weight;
    readonly balance: SpWeightsWeightV2Weight;
    readonly valueTransferred: SpWeightsWeightV2Weight;
    readonly minimumBalance: SpWeightsWeightV2Weight;
    readonly blockNumber: SpWeightsWeightV2Weight;
    readonly now: SpWeightsWeightV2Weight;
    readonly weightToFee: SpWeightsWeightV2Weight;
    readonly gas: SpWeightsWeightV2Weight;
    readonly input: SpWeightsWeightV2Weight;
    readonly inputPerByte: SpWeightsWeightV2Weight;
    readonly r_return: SpWeightsWeightV2Weight;
    readonly returnPerByte: SpWeightsWeightV2Weight;
    readonly terminate: SpWeightsWeightV2Weight;
    readonly random: SpWeightsWeightV2Weight;
    readonly depositEvent: SpWeightsWeightV2Weight;
    readonly depositEventPerTopic: SpWeightsWeightV2Weight;
    readonly depositEventPerByte: SpWeightsWeightV2Weight;
    readonly debugMessage: SpWeightsWeightV2Weight;
    readonly setStorage: SpWeightsWeightV2Weight;
    readonly setStoragePerNewByte: SpWeightsWeightV2Weight;
    readonly setStoragePerOldByte: SpWeightsWeightV2Weight;
    readonly setCodeHash: SpWeightsWeightV2Weight;
    readonly clearStorage: SpWeightsWeightV2Weight;
    readonly clearStoragePerByte: SpWeightsWeightV2Weight;
    readonly containsStorage: SpWeightsWeightV2Weight;
    readonly containsStoragePerByte: SpWeightsWeightV2Weight;
    readonly getStorage: SpWeightsWeightV2Weight;
    readonly getStoragePerByte: SpWeightsWeightV2Weight;
    readonly takeStorage: SpWeightsWeightV2Weight;
    readonly takeStoragePerByte: SpWeightsWeightV2Weight;
    readonly transfer: SpWeightsWeightV2Weight;
    readonly call: SpWeightsWeightV2Weight;
    readonly delegateCall: SpWeightsWeightV2Weight;
    readonly callTransferSurcharge: SpWeightsWeightV2Weight;
    readonly callPerClonedByte: SpWeightsWeightV2Weight;
    readonly instantiate: SpWeightsWeightV2Weight;
    readonly instantiateTransferSurcharge: SpWeightsWeightV2Weight;
    readonly instantiatePerInputByte: SpWeightsWeightV2Weight;
    readonly instantiatePerSaltByte: SpWeightsWeightV2Weight;
    readonly hashSha2256: SpWeightsWeightV2Weight;
    readonly hashSha2256PerByte: SpWeightsWeightV2Weight;
    readonly hashKeccak256: SpWeightsWeightV2Weight;
    readonly hashKeccak256PerByte: SpWeightsWeightV2Weight;
    readonly hashBlake2256: SpWeightsWeightV2Weight;
    readonly hashBlake2256PerByte: SpWeightsWeightV2Weight;
    readonly hashBlake2128: SpWeightsWeightV2Weight;
    readonly hashBlake2128PerByte: SpWeightsWeightV2Weight;
    readonly ecdsaRecover: SpWeightsWeightV2Weight;
    readonly ecdsaToEthAddress: SpWeightsWeightV2Weight;
    readonly reentranceCount: SpWeightsWeightV2Weight;
    readonly accountReentranceCount: SpWeightsWeightV2Weight;
    readonly instantiationNonce: SpWeightsWeightV2Weight;
  }

  /** @name PalletContractsError (517) */
  interface PalletContractsError extends Enum {
    readonly isInvalidScheduleVersion: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutputBufferTooSmall: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isCodeNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isRandomSubjectTooLong: boolean;
    readonly isTooManyTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isDeletionQueueFull: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isDebugMessageInvalidUTF8: boolean;
    readonly isReentranceDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly isIndeterministic: boolean;
    readonly type: 'InvalidScheduleVersion' | 'InvalidCallFlags' | 'OutOfGas' | 'OutputBufferTooSmall' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeTooLarge' | 'CodeNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'RandomSubjectTooLong' | 'TooManyTopics' | 'NoChainExtension' | 'DeletionQueueFull' | 'DuplicateContract' | 'TerminatedInConstructor' | 'DebugMessageInvalidUTF8' | 'ReentranceDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected' | 'Indeterministic';
  }

  /** @name OrmlCurrenciesModuleError (518) */
  interface OrmlCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
  }

  /** @name OrmlTokensBalanceLock (521) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (523) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (525) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (527) */
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

  /** @name ZrmlMarketCommonsError (528) */
  interface ZrmlMarketCommonsError extends Enum {
    readonly isMarketDoesNotExist: boolean;
    readonly isMarketPoolDoesNotExist: boolean;
    readonly isNoMarketHasBeenCreated: boolean;
    readonly isNoReport: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isIncompleteMarketBuilder: boolean;
    readonly type: 'MarketDoesNotExist' | 'MarketPoolDoesNotExist' | 'NoMarketHasBeenCreated' | 'NoReport' | 'PoolAlreadyExists' | 'IncompleteMarketBuilder';
  }

  /** @name ZeitgeistPrimitivesMarketAuthorityReport (529) */
  interface ZeitgeistPrimitivesMarketAuthorityReport extends Struct {
    readonly resolveAt: u64;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZrmlAuthorizedError (530) */
  interface ZrmlAuthorizedError extends Enum {
    readonly isMarketDoesNotHaveDisputeMechanismAuthorized: boolean;
    readonly isMarketIsNotDisputed: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly type: 'MarketDoesNotHaveDisputeMechanismAuthorized' | 'MarketIsNotDisputed' | 'OutcomeMismatch';
  }

  /** @name ZrmlCourtCourtPoolItem (532) */
  interface ZrmlCourtCourtPoolItem extends Struct {
    readonly stake: u128;
    readonly courtParticipant: AccountId32;
    readonly consumedStake: u128;
    readonly joinedAt: u64;
    readonly uneligibleIndex: u64;
    readonly uneligibleStake: u128;
  }

  /** @name ZrmlCourtCourtParticipantInfo (534) */
  interface ZrmlCourtCourtParticipantInfo extends Struct {
    readonly stake: u128;
    readonly activeLock: u128;
    readonly prepareExitAt: Option<u64>;
    readonly delegations: Option<Vec<AccountId32>>;
  }

  /** @name ZrmlCourtDraw (539) */
  interface ZrmlCourtDraw extends Struct {
    readonly courtParticipant: AccountId32;
    readonly weight: u32;
    readonly vote: ZrmlCourtVote;
    readonly slashable: u128;
  }

  /** @name ZrmlCourtVote (542) */
  interface ZrmlCourtVote extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly delegatedStakes: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isDrawn: boolean;
    readonly isSecret: boolean;
    readonly asSecret: {
      readonly commitment: H256;
    } & Struct;
    readonly isRevealed: boolean;
    readonly asRevealed: {
      readonly commitment: H256;
      readonly voteItem: ZrmlCourtVoteItem;
      readonly salt: H256;
    } & Struct;
    readonly isDenounced: boolean;
    readonly asDenounced: {
      readonly commitment: H256;
      readonly voteItem: ZrmlCourtVoteItem;
      readonly salt: H256;
    } & Struct;
    readonly type: 'Delegated' | 'Drawn' | 'Secret' | 'Revealed' | 'Denounced';
  }

  /** @name ZrmlCourtError (544) */
  interface ZrmlCourtError extends Enum {
    readonly isJurorDoesNotExist: boolean;
    readonly isMarketDoesNotHaveCourtMechanism: boolean;
    readonly isMarketIsNotDisputed: boolean;
    readonly isCallerIsNotACourtParticipant: boolean;
    readonly isVoteAlreadyRevealed: boolean;
    readonly isCommitmentHashMismatch: boolean;
    readonly isCourtNotFound: boolean;
    readonly isNotInVotingPeriod: boolean;
    readonly isNotInAggregationPeriod: boolean;
    readonly isMaxAppealsReached: boolean;
    readonly isNotInAppealPeriod: boolean;
    readonly isInvalidVoteState: boolean;
    readonly isBelowMinJurorStake: boolean;
    readonly isMaxCourtParticipantsReached: boolean;
    readonly isAlreadyPreparedExit: boolean;
    readonly isJurorNotDrawn: boolean;
    readonly isJurorDidNotVote: boolean;
    readonly isVoteAlreadyDenounced: boolean;
    readonly isCallerDenouncedItself: boolean;
    readonly isCourtNotClosed: boolean;
    readonly isCourtAlreadyReassigned: boolean;
    readonly isNotEnoughJurorsAndDelegatorsStake: boolean;
    readonly isMarketReportNotFound: boolean;
    readonly isMaxCourtIdReached: boolean;
    readonly isAmountExceedsBalance: boolean;
    readonly isAmountBelowLastJoin: boolean;
    readonly isAmountBelowLowestJuror: boolean;
    readonly isCourtParticipantTwiceInPool: boolean;
    readonly isCallerNotInSelectedDraws: boolean;
    readonly isAppealBondExceedsBalance: boolean;
    readonly isPrematureExit: boolean;
    readonly isPrepareExitAtNotPresent: boolean;
    readonly isMaxDelegationsReached: boolean;
    readonly isJurorDelegated: boolean;
    readonly isSelfDelegationNotAllowed: boolean;
    readonly isIdenticalDelegationsNotAllowed: boolean;
    readonly isNoDelegations: boolean;
    readonly isDelegatedToInvalidJuror: boolean;
    readonly isMarketIdToCourtIdNotFound: boolean;
    readonly isCourtIdToMarketIdNotFound: boolean;
    readonly isInvalidVoteItemForOutcomeCourt: boolean;
    readonly isInvalidVoteItemForBinaryCourt: boolean;
    readonly isAppealedVoteItemIsNoOutcome: boolean;
    readonly isWinnerVoteItemIsNoOutcome: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly isVoteItemIsNoOutcome: boolean;
    readonly isUnexpected: boolean;
    readonly asUnexpected: ZrmlCourtUnexpectedError;
    readonly isInflationExceedsMaxYearlyInflation: boolean;
    readonly type: 'JurorDoesNotExist' | 'MarketDoesNotHaveCourtMechanism' | 'MarketIsNotDisputed' | 'CallerIsNotACourtParticipant' | 'VoteAlreadyRevealed' | 'CommitmentHashMismatch' | 'CourtNotFound' | 'NotInVotingPeriod' | 'NotInAggregationPeriod' | 'MaxAppealsReached' | 'NotInAppealPeriod' | 'InvalidVoteState' | 'BelowMinJurorStake' | 'MaxCourtParticipantsReached' | 'AlreadyPreparedExit' | 'JurorNotDrawn' | 'JurorDidNotVote' | 'VoteAlreadyDenounced' | 'CallerDenouncedItself' | 'CourtNotClosed' | 'CourtAlreadyReassigned' | 'NotEnoughJurorsAndDelegatorsStake' | 'MarketReportNotFound' | 'MaxCourtIdReached' | 'AmountExceedsBalance' | 'AmountBelowLastJoin' | 'AmountBelowLowestJuror' | 'CourtParticipantTwiceInPool' | 'CallerNotInSelectedDraws' | 'AppealBondExceedsBalance' | 'PrematureExit' | 'PrepareExitAtNotPresent' | 'MaxDelegationsReached' | 'JurorDelegated' | 'SelfDelegationNotAllowed' | 'IdenticalDelegationsNotAllowed' | 'NoDelegations' | 'DelegatedToInvalidJuror' | 'MarketIdToCourtIdNotFound' | 'CourtIdToMarketIdNotFound' | 'InvalidVoteItemForOutcomeCourt' | 'InvalidVoteItemForBinaryCourt' | 'AppealedVoteItemIsNoOutcome' | 'WinnerVoteItemIsNoOutcome' | 'OutcomeMismatch' | 'VoteItemIsNoOutcome' | 'Unexpected' | 'InflationExceedsMaxYearlyInflation';
  }

  /** @name ZrmlCourtUnexpectedError (545) */
  interface ZrmlCourtUnexpectedError extends Enum {
    readonly isBinarySearchByKeyFailed: boolean;
    readonly isInflationPeriodIsZero: boolean;
    readonly type: 'BinarySearchByKeyFailed' | 'InflationPeriodIsZero';
  }

  /** @name ZrmlLiquidityMiningOwnedValuesParams (547) */
  interface ZrmlLiquidityMiningOwnedValuesParams extends Struct {
    readonly participatedBlocks: u64;
    readonly perpetualIncentives: u128;
    readonly totalIncentives: u128;
    readonly totalShares: u128;
  }

  /** @name ZrmlLiquidityMiningError (548) */
  interface ZrmlLiquidityMiningError extends Enum {
    readonly isFundDoesNotHaveEnoughBalance: boolean;
    readonly type: 'FundDoesNotHaveEnoughBalance';
  }

  /** @name ZrmlRikiddoRikiddoSigmoidMV (549) */
  interface ZrmlRikiddoRikiddoSigmoidMV extends Struct {
    readonly config: ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig;
    readonly fees: ZrmlRikiddoSigmoidFeeFeeSigmoid;
    readonly maShort: ZrmlRikiddoEmaMarketVolume;
    readonly maLong: ZrmlRikiddoEmaMarketVolume;
  }

  /** @name SubstrateFixedFixedU128 (550) */
  interface SubstrateFixedFixedU128 extends Struct {
    readonly bits: u128;
  }

  /** @name TypenumUIntUInt (555) */
  interface TypenumUIntUInt extends Struct {
    readonly msb: TypenumUIntUTerm;
    readonly lsb: TypenumBitB0;
  }

  /** @name TypenumUIntUTerm (556) */
  interface TypenumUIntUTerm extends Struct {
    readonly msb: TypenumUintUTerm;
    readonly lsb: TypenumBitB1;
  }

  /** @name TypenumUintUTerm (557) */
  type TypenumUintUTerm = Null;

  /** @name TypenumBitB1 (558) */
  type TypenumBitB1 = Null;

  /** @name TypenumBitB0 (559) */
  type TypenumBitB0 = Null;

  /** @name SubstrateFixedFixedI128 (560) */
  interface SubstrateFixedFixedI128 extends Struct {
    readonly bits: i128;
  }

  /** @name ZrmlRikiddoSigmoidFeeFeeSigmoid (561) */
  interface ZrmlRikiddoSigmoidFeeFeeSigmoid extends Struct {
    readonly config: ZrmlRikiddoSigmoidFeeFeeSigmoidConfig;
  }

  /** @name ZrmlRikiddoSigmoidFeeFeeSigmoidConfig (562) */
  interface ZrmlRikiddoSigmoidFeeFeeSigmoidConfig extends Struct {
    readonly m: SubstrateFixedFixedI128;
    readonly p: SubstrateFixedFixedI128;
    readonly n: SubstrateFixedFixedI128;
    readonly initialFee: SubstrateFixedFixedI128;
    readonly minRevenue: SubstrateFixedFixedI128;
  }

  /** @name ZrmlRikiddoEmaMarketVolume (563) */
  interface ZrmlRikiddoEmaMarketVolume extends Struct {
    readonly config: ZrmlRikiddoEmaMarketVolumeEmaConfig;
    readonly ema: SubstrateFixedFixedU128;
    readonly multiplier: SubstrateFixedFixedU128;
    readonly lastTime: u64;
    readonly state: ZrmlRikiddoEmaMarketVolumeMarketVolumeState;
    readonly startTime: u64;
    readonly volumesPerPeriod: SubstrateFixedFixedU128;
  }

  /** @name ZrmlRikiddoEmaMarketVolumeEmaConfig (564) */
  interface ZrmlRikiddoEmaMarketVolumeEmaConfig extends Struct {
    readonly emaPeriod: ZrmlRikiddoTimespan;
    readonly emaPeriodEstimateAfter: Option<ZrmlRikiddoTimespan>;
    readonly smoothing: SubstrateFixedFixedU128;
  }

  /** @name ZrmlRikiddoTimespan (565) */
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

  /** @name ZrmlRikiddoEmaMarketVolumeMarketVolumeState (567) */
  interface ZrmlRikiddoEmaMarketVolumeMarketVolumeState extends Enum {
    readonly isUninitialized: boolean;
    readonly isDataCollectionStarted: boolean;
    readonly isDataCollected: boolean;
    readonly type: 'Uninitialized' | 'DataCollectionStarted' | 'DataCollected';
  }

  /** @name ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig (568) */
  interface ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig extends Struct {
    readonly initialFee: SubstrateFixedFixedI128;
    readonly log2E: SubstrateFixedFixedI128;
  }

  /** @name ZrmlRikiddoError (569) */
  interface ZrmlRikiddoError extends Enum {
    readonly isFixedConversionImpossible: boolean;
    readonly isRikiddoNotFoundForPool: boolean;
    readonly isRikiddoAlreadyExistsForPool: boolean;
    readonly type: 'FixedConversionImpossible' | 'RikiddoNotFoundForPool' | 'RikiddoAlreadyExistsForPool';
  }

  /** @name ZrmlSimpleDisputesError (572) */
  interface ZrmlSimpleDisputesError extends Enum {
    readonly isInvalidMarketStatus: boolean;
    readonly isMarketDoesNotHaveSimpleDisputesMechanism: boolean;
    readonly isStorageOverflow: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly isCannotDisputeSameOutcome: boolean;
    readonly isMarketIsNotReported: boolean;
    readonly isMaxDisputesReached: boolean;
    readonly type: 'InvalidMarketStatus' | 'MarketDoesNotHaveSimpleDisputesMechanism' | 'StorageOverflow' | 'OutcomeMismatch' | 'CannotDisputeSameOutcome' | 'MarketIsNotReported' | 'MaxDisputesReached';
  }

  /** @name ZrmlSwapsError (573) */
  interface ZrmlSwapsError extends Enum {
    readonly isAboveMaximumWeight: boolean;
    readonly isAssetNotInPool: boolean;
    readonly isBadLimitPrice: boolean;
    readonly isBelowMinimumWeight: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInvalidPoolStatus: boolean;
    readonly isInvalidStateTransition: boolean;
    readonly isLimitIn: boolean;
    readonly isLimitMissing: boolean;
    readonly isLimitOut: boolean;
    readonly isMathApproximation: boolean;
    readonly isMaxInRatio: boolean;
    readonly isMaxOutRatio: boolean;
    readonly isMaxTotalWeight: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isPoolDrain: boolean;
    readonly isPoolIsNotActive: boolean;
    readonly isProvidedValuesLenMustEqualAssetsLen: boolean;
    readonly isSwapFeeTooHigh: boolean;
    readonly isTooFewAssets: boolean;
    readonly isTooManyAssets: boolean;
    readonly isSomeIdenticalAssets: boolean;
    readonly isZeroAmount: boolean;
    readonly isUnexpected: boolean;
    readonly asUnexpected: ZrmlSwapsUnexpectedError;
    readonly type: 'AboveMaximumWeight' | 'AssetNotInPool' | 'BadLimitPrice' | 'BelowMinimumWeight' | 'InsufficientBalance' | 'InsufficientLiquidity' | 'InvalidPoolStatus' | 'InvalidStateTransition' | 'LimitIn' | 'LimitMissing' | 'LimitOut' | 'MathApproximation' | 'MaxInRatio' | 'MaxOutRatio' | 'MaxTotalWeight' | 'PoolDoesNotExist' | 'PoolDrain' | 'PoolIsNotActive' | 'ProvidedValuesLenMustEqualAssetsLen' | 'SwapFeeTooHigh' | 'TooFewAssets' | 'TooManyAssets' | 'SomeIdenticalAssets' | 'ZeroAmount' | 'Unexpected';
  }

  /** @name ZrmlSwapsUnexpectedError (574) */
  interface ZrmlSwapsUnexpectedError extends Enum {
    readonly isStorageOverflow: boolean;
    readonly type: 'StorageOverflow';
  }

  /** @name ZrmlPredictionMarketsError (576) */
  interface ZrmlPredictionMarketsError extends Enum {
    readonly isCannotDisputeSameOutcome: boolean;
    readonly isEditorNotCreator: boolean;
    readonly isEditReasonLengthExceedsMaxEditReasonLen: boolean;
    readonly isInsufficientFundsInMarketAccount: boolean;
    readonly isInsufficientShareBalance: boolean;
    readonly isInvalidMultihash: boolean;
    readonly isInvalidMarketType: boolean;
    readonly isInvalidScoringRule: boolean;
    readonly isNotEnoughBalance: boolean;
    readonly isMarketAlreadyReported: boolean;
    readonly isMarketDurationTooLong: boolean;
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
    readonly isMarketDisputeMechanismNotFailed: boolean;
    readonly isMissingBond: boolean;
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
    readonly isInvalidBaseAsset: boolean;
    readonly isUnregisteredForeignAsset: boolean;
    readonly isGlobalDisputeExistsAlready: boolean;
    readonly isNoDisputeMechanism: boolean;
    readonly isNonZeroDisputePeriodOnTrustedMarket: boolean;
    readonly isFeeTooHigh: boolean;
    readonly isInvalidResolutionMechanism: boolean;
    readonly isRequesterNotCreator: boolean;
    readonly isEarlyCloseRequestTooLate: boolean;
    readonly isInvalidEarlyCloseState: boolean;
    readonly isNoEarlyCloseScheduled: boolean;
    readonly isOnlyAuthorizedCanScheduleEarlyClose: boolean;
    readonly isCallerNotMarketCreator: boolean;
    readonly isMarketIsNotTrusted: boolean;
    readonly isNotAllowedForBlockBasedMarkets: boolean;
    readonly isMarketNotInCloseTimeFrameList: boolean;
    readonly isMarketPeriodEndNotAlreadyReachedYet: boolean;
    readonly type: 'CannotDisputeSameOutcome' | 'EditorNotCreator' | 'EditReasonLengthExceedsMaxEditReasonLen' | 'InsufficientFundsInMarketAccount' | 'InsufficientShareBalance' | 'InvalidMultihash' | 'InvalidMarketType' | 'InvalidScoringRule' | 'NotEnoughBalance' | 'MarketAlreadyReported' | 'MarketDurationTooLong' | 'MarketEditRequestAlreadyInProgress' | 'MarketEditNotRequested' | 'MarketIsNotActive' | 'MarketIsNotClosed' | 'MarketIsNotCollectingSubsidy' | 'MarketIsNotProposed' | 'MarketIsNotReported' | 'MarketIsNotDisputed' | 'MarketIsNotResolved' | 'MarketStartTooSoon' | 'MarketStartTooLate' | 'MarketDisputeMechanismNotFailed' | 'MissingBond' | 'NotEnoughCategories' | 'NoWinningBalance' | 'OutcomeMismatch' | 'RejectReasonLengthExceedsMaxRejectReasonLen' | 'ReporterNotOracle' | 'StorageOverflow' | 'TooManyCategories' | 'InvalidDisputeMechanism' | 'InvalidMarketStatus' | 'UnexpectedNoneInPostInfo' | 'ZeroAmount' | 'InvalidMarketPeriod' | 'InvalidOutcomeRange' | 'NotAllowedToReportYet' | 'DisputeDurationSmallerThanMinDisputeDuration' | 'OracleDurationSmallerThanMinOracleDuration' | 'DisputeDurationGreaterThanMaxDisputeDuration' | 'GracePeriodGreaterThanMaxGracePeriod' | 'OracleDurationGreaterThanMaxOracleDuration' | 'WeightsLenMustEqualAssetsLen' | 'InvalidBaseAsset' | 'UnregisteredForeignAsset' | 'GlobalDisputeExistsAlready' | 'NoDisputeMechanism' | 'NonZeroDisputePeriodOnTrustedMarket' | 'FeeTooHigh' | 'InvalidResolutionMechanism' | 'RequesterNotCreator' | 'EarlyCloseRequestTooLate' | 'InvalidEarlyCloseState' | 'NoEarlyCloseScheduled' | 'OnlyAuthorizedCanScheduleEarlyClose' | 'CallerNotMarketCreator' | 'MarketIsNotTrusted' | 'NotAllowedForBlockBasedMarkets' | 'MarketNotInCloseTimeFrameList' | 'MarketPeriodEndNotAlreadyReachedYet';
  }

  /** @name ZrmlStyxError (577) */
  interface ZrmlStyxError extends Enum {
    readonly isFundDoesNotHaveEnoughFreeBalance: boolean;
    readonly isHasAlreadyCrossed: boolean;
    readonly type: 'FundDoesNotHaveEnoughFreeBalance' | 'HasAlreadyCrossed';
  }

  /** @name ZrmlGlobalDisputesOutcomeInfo (582) */
  interface ZrmlGlobalDisputesOutcomeInfo extends Struct {
    readonly outcomeSum: u128;
    readonly possession: ZrmlGlobalDisputesPossession;
  }

  /** @name ZrmlGlobalDisputesPossession (584) */
  interface ZrmlGlobalDisputesPossession extends Enum {
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly owner: AccountId32;
      readonly fee: u128;
    } & Struct;
    readonly isShared: boolean;
    readonly asShared: {
      readonly owners: Vec<AccountId32>;
    } & Struct;
    readonly type: 'Paid' | 'Shared';
  }

  /** @name ZrmlGlobalDisputesGlobalDisputeInfo (585) */
  interface ZrmlGlobalDisputesGlobalDisputeInfo extends Struct {
    readonly winnerOutcome: ZeitgeistPrimitivesOutcomeReport;
    readonly outcomeInfo: ZrmlGlobalDisputesOutcomeInfo;
    readonly status: ZrmlGlobalDisputesGdStatus;
  }

  /** @name ZrmlGlobalDisputesGdStatus (586) */
  interface ZrmlGlobalDisputesGdStatus extends Enum {
    readonly isActive: boolean;
    readonly asActive: {
      readonly addOutcomeEnd: u64;
      readonly voteEnd: u64;
    } & Struct;
    readonly isFinished: boolean;
    readonly isDestroyed: boolean;
    readonly type: 'Active' | 'Finished' | 'Destroyed';
  }

  /** @name ZrmlGlobalDisputesOldWinnerInfo (587) */
  interface ZrmlGlobalDisputesOldWinnerInfo extends Struct {
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    readonly outcomeInfo: ZrmlGlobalDisputesOldOutcomeInfo;
    readonly isFinished: bool;
  }

  /** @name ZrmlGlobalDisputesOldOutcomeInfo (588) */
  interface ZrmlGlobalDisputesOldOutcomeInfo extends Struct {
    readonly outcomeSum: u128;
    readonly owners: Vec<AccountId32>;
  }

  /** @name ZrmlGlobalDisputesError (589) */
  interface ZrmlGlobalDisputesError extends Enum {
    readonly isAmountTooLow: boolean;
    readonly isInvalidGlobalDisputeStatus: boolean;
    readonly isInsufficientAmount: boolean;
    readonly isMaxOwnersReached: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isNoFundsToReward: boolean;
    readonly isGlobalDisputeNotFound: boolean;
    readonly isOutcomeAlreadyExists: boolean;
    readonly isOutcomeDoesNotExist: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly isOutcomesNotFullyCleaned: boolean;
    readonly isSharedPossessionRequired: boolean;
    readonly isUnfinishedGlobalDispute: boolean;
    readonly isAddOutcomePeriodIsOver: boolean;
    readonly isNotInGdVotingPeriod: boolean;
    readonly isGlobalDisputeNotDestroyed: boolean;
    readonly isGlobalDisputeAlreadyExists: boolean;
    readonly type: 'AmountTooLow' | 'InvalidGlobalDisputeStatus' | 'InsufficientAmount' | 'MaxOwnersReached' | 'MaxVotesReached' | 'NoFundsToReward' | 'GlobalDisputeNotFound' | 'OutcomeAlreadyExists' | 'OutcomeDoesNotExist' | 'OutcomeMismatch' | 'OutcomesNotFullyCleaned' | 'SharedPossessionRequired' | 'UnfinishedGlobalDispute' | 'AddOutcomePeriodIsOver' | 'NotInGdVotingPeriod' | 'GlobalDisputeNotDestroyed' | 'GlobalDisputeAlreadyExists';
  }

  /** @name ZrmlNeoSwapsPool (590) */
  interface ZrmlNeoSwapsPool extends Struct {
    readonly accountId: AccountId32;
    readonly reserves: BTreeMap<ZeitgeistPrimitivesAssetsAllAssetsAsset, u128>;
    readonly collateral: ZeitgeistPrimitivesAssetsAllAssetsAsset;
    readonly liquidityParameter: u128;
    readonly liquiditySharesManager: ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree;
    readonly swapFee: u128;
  }

  /** @name ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree (591) */
  interface ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree extends Struct {
    readonly nodes: Vec<ZrmlNeoSwapsLiquidityTreeTypesNode>;
    readonly accountToIndex: BTreeMap<AccountId32, u32>;
    readonly abandonedNodes: Vec<u32>;
  }

  /** @name ZrmlNeoSwapsLiquidityTreeTypesNode (593) */
  interface ZrmlNeoSwapsLiquidityTreeTypesNode extends Struct {
    readonly account: Option<AccountId32>;
    readonly stake: u128;
    readonly fees: u128;
    readonly descendantStake: u128;
    readonly lazyFees: u128;
  }

  /** @name ZrmlNeoSwapsError (601) */
  interface ZrmlNeoSwapsError extends Enum {
    readonly isAssetCountAboveMax: boolean;
    readonly isAmountInAboveMax: boolean;
    readonly isAmountOutBelowMin: boolean;
    readonly isAssetNotFound: boolean;
    readonly isDuplicatePool: boolean;
    readonly isIncorrectAssetCount: boolean;
    readonly isIncorrectVecLen: boolean;
    readonly isInsufficientPoolShares: boolean;
    readonly isLiquidityTooLow: boolean;
    readonly isInvalidSpotPrices: boolean;
    readonly isInvalidTradingMechanism: boolean;
    readonly isMarketNotActive: boolean;
    readonly isMathError: boolean;
    readonly isNotAllowed: boolean;
    readonly isNotImplemented: boolean;
    readonly isNumericalLimits: boolean;
    readonly asNumericalLimits: ZrmlNeoSwapsNumericalLimitsError;
    readonly isOutstandingFees: boolean;
    readonly isPoolNotFound: boolean;
    readonly isSpotPriceAboveMax: boolean;
    readonly isSpotPriceBelowMin: boolean;
    readonly isSwapFeeAboveMax: boolean;
    readonly isSwapFeeBelowMin: boolean;
    readonly isUnexpected: boolean;
    readonly isZeroAmount: boolean;
    readonly isLiquidityTreeError: boolean;
    readonly asLiquidityTreeError: ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError;
    readonly isMinRelativeLiquidityThresholdViolated: boolean;
    readonly isNarrowingConversion: boolean;
    readonly type: 'AssetCountAboveMax' | 'AmountInAboveMax' | 'AmountOutBelowMin' | 'AssetNotFound' | 'DuplicatePool' | 'IncorrectAssetCount' | 'IncorrectVecLen' | 'InsufficientPoolShares' | 'LiquidityTooLow' | 'InvalidSpotPrices' | 'InvalidTradingMechanism' | 'MarketNotActive' | 'MathError' | 'NotAllowed' | 'NotImplemented' | 'NumericalLimits' | 'OutstandingFees' | 'PoolNotFound' | 'SpotPriceAboveMax' | 'SpotPriceBelowMin' | 'SwapFeeAboveMax' | 'SwapFeeBelowMin' | 'Unexpected' | 'ZeroAmount' | 'LiquidityTreeError' | 'MinRelativeLiquidityThresholdViolated' | 'NarrowingConversion';
  }

  /** @name ZrmlNeoSwapsNumericalLimitsError (602) */
  interface ZrmlNeoSwapsNumericalLimitsError extends Enum {
    readonly isSpotPriceTooLow: boolean;
    readonly isSpotPriceSlippedTooLow: boolean;
    readonly isMaxAmountExceeded: boolean;
    readonly isMinAmountNotMet: boolean;
    readonly type: 'SpotPriceTooLow' | 'SpotPriceSlippedTooLow' | 'MaxAmountExceeded' | 'MinAmountNotMet';
  }

  /** @name ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError (603) */
  interface ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError extends Enum {
    readonly isAccountNotFound: boolean;
    readonly isNodeNotFound: boolean;
    readonly isUnwithdrawnFees: boolean;
    readonly isTreeIsFull: boolean;
    readonly isInsufficientStake: boolean;
    readonly isMaxIterationsReached: boolean;
    readonly isStorageOverflow: boolean;
    readonly asStorageOverflow: ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError;
    readonly type: 'AccountNotFound' | 'NodeNotFound' | 'UnwithdrawnFees' | 'TreeIsFull' | 'InsufficientStake' | 'MaxIterationsReached' | 'StorageOverflow';
  }

  /** @name ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError (604) */
  interface ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError extends Enum {
    readonly isNodes: boolean;
    readonly isAccountToIndex: boolean;
    readonly isAbandonedNodes: boolean;
    readonly type: 'Nodes' | 'AccountToIndex' | 'AbandonedNodes';
  }

  /** @name ZrmlOrderbookError (605) */
  interface ZrmlOrderbookError extends Enum {
    readonly isNotOrderCreator: boolean;
    readonly isOrderDoesNotExist: boolean;
    readonly isMarketIsNotActive: boolean;
    readonly isInvalidScoringRule: boolean;
    readonly isAmountTooHighForOrder: boolean;
    readonly isInvalidOutcomeAsset: boolean;
    readonly isPartialFillNearFullFillNotAllowed: boolean;
    readonly isMarketBaseAssetNotPresent: boolean;
    readonly isBelowMinimumBalance: boolean;
    readonly type: 'NotOrderCreator' | 'OrderDoesNotExist' | 'MarketIsNotActive' | 'InvalidScoringRule' | 'AmountTooHighForOrder' | 'InvalidOutcomeAsset' | 'PartialFillNearFullFillNotAllowed' | 'MarketBaseAssetNotPresent' | 'BelowMinimumBalance';
  }

  /** @name ZrmlParimutuelError (606) */
  interface ZrmlParimutuelError extends Enum {
    readonly isNoRewardShareOutstanding: boolean;
    readonly isMarketIsNotActive: boolean;
    readonly isAmountBelowMinimumBetSize: boolean;
    readonly isInvalidOutcomeAsset: boolean;
    readonly isInvalidScoringRule: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isMarketIsNotResolvedYet: boolean;
    readonly isUnexpected: boolean;
    readonly isNoResolvedOutcome: boolean;
    readonly isRefundNotAllowed: boolean;
    readonly isRefundableBalanceIsZero: boolean;
    readonly isNoWinningShares: boolean;
    readonly isNotCategorical: boolean;
    readonly isNoRewardToDistribute: boolean;
    readonly isInconsistentState: boolean;
    readonly asInconsistentState: ZrmlParimutuelInconsistentStateError;
    readonly type: 'NoRewardShareOutstanding' | 'MarketIsNotActive' | 'AmountBelowMinimumBetSize' | 'InvalidOutcomeAsset' | 'InvalidScoringRule' | 'InsufficientBalance' | 'MarketIsNotResolvedYet' | 'Unexpected' | 'NoResolvedOutcome' | 'RefundNotAllowed' | 'RefundableBalanceIsZero' | 'NoWinningShares' | 'NotCategorical' | 'NoRewardToDistribute' | 'InconsistentState';
  }

  /** @name ZrmlParimutuelInconsistentStateError (607) */
  interface ZrmlParimutuelInconsistentStateError extends Enum {
    readonly isInsufficientFundsInPotAccount: boolean;
    readonly isOutcomeIssuanceGreaterCollateral: boolean;
    readonly type: 'InsufficientFundsInPotAccount' | 'OutcomeIssuanceGreaterCollateral';
  }

  /** @name ZrmlAssetRouterError (608) */
  interface ZrmlAssetRouterError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isAssetIndestructible: boolean;
    readonly isDestructionInProgress: boolean;
    readonly isTooManyManagedDestroys: boolean;
    readonly isUnknownAsset: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'AssetIndestructible' | 'DestructionInProgress' | 'TooManyManagedDestroys' | 'UnknownAsset' | 'Unsupported';
  }

  /** @name ZrmlHybridRouterError (609) */
  interface ZrmlHybridRouterError extends Enum {
    readonly isAmountIsZero: boolean;
    readonly isPriceLimitTooHigh: boolean;
    readonly isOrderPriceAboveMaxPrice: boolean;
    readonly isOrderPriceBelowMinPrice: boolean;
    readonly isAssetNotEqualToOrderbookMakerAsset: boolean;
    readonly isAssetNotEqualToOrderbookTakerAsset: boolean;
    readonly isCancelStrategyApplied: boolean;
    readonly isAssetCountMismatch: boolean;
    readonly isMaxOrdersExceeded: boolean;
    readonly type: 'AmountIsZero' | 'PriceLimitTooHigh' | 'OrderPriceAboveMaxPrice' | 'OrderPriceBelowMinPrice' | 'AssetNotEqualToOrderbookMakerAsset' | 'AssetNotEqualToOrderbookTakerAsset' | 'CancelStrategyApplied' | 'AssetCountMismatch' | 'MaxOrdersExceeded';
  }

  /** @name PolkadotPrimitivesV2UpgradeRestriction (611) */
  interface PolkadotPrimitivesV2UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (612) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHrmpChannel (616) */
  interface PolkadotPrimitivesV2AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHostConfiguration (618) */
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

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (624) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (625) */
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

  /** @name PalletParachainStakingParachainBondConfig (626) */
  interface PalletParachainStakingParachainBondConfig extends Struct {
    readonly account: AccountId32;
    readonly percent: Percent;
  }

  /** @name PalletParachainStakingRoundInfo (627) */
  interface PalletParachainStakingRoundInfo extends Struct {
    readonly current: u32;
    readonly first: u64;
    readonly length: u32;
  }

  /** @name PalletParachainStakingDelegator (628) */
  interface PalletParachainStakingDelegator extends Struct {
    readonly id: AccountId32;
    readonly delegations: PalletParachainStakingSetOrderedSet;
    readonly total: u128;
    readonly lessTotal: u128;
    readonly status: PalletParachainStakingDelegatorStatus;
  }

  /** @name PalletParachainStakingSetOrderedSet (629) */
  interface PalletParachainStakingSetOrderedSet extends Vec<PalletParachainStakingBond> {}

  /** @name PalletParachainStakingBond (630) */
  interface PalletParachainStakingBond extends Struct {
    readonly owner: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletParachainStakingDelegatorStatus (632) */
  interface PalletParachainStakingDelegatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Leaving';
  }

  /** @name PalletParachainStakingCandidateMetadata (633) */
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

  /** @name PalletParachainStakingCapacityStatus (634) */
  interface PalletParachainStakingCapacityStatus extends Enum {
    readonly isFull: boolean;
    readonly isEmpty: boolean;
    readonly isPartial: boolean;
    readonly type: 'Full' | 'Empty' | 'Partial';
  }

  /** @name PalletParachainStakingCandidateBondLessRequest (636) */
  interface PalletParachainStakingCandidateBondLessRequest extends Struct {
    readonly amount: u128;
    readonly whenExecutable: u32;
  }

  /** @name PalletParachainStakingCollatorStatus (637) */
  interface PalletParachainStakingCollatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isIdle: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Idle' | 'Leaving';
  }

  /** @name PalletParachainStakingDelegationRequestsScheduledRequest (639) */
  interface PalletParachainStakingDelegationRequestsScheduledRequest extends Struct {
    readonly delegator: AccountId32;
    readonly whenExecutable: u32;
    readonly action: PalletParachainStakingDelegationRequestsDelegationAction;
  }

  /** @name PalletParachainStakingAutoCompoundAutoCompoundConfig (641) */
  interface PalletParachainStakingAutoCompoundAutoCompoundConfig extends Struct {
    readonly delegator: AccountId32;
    readonly value: Percent;
  }

  /** @name PalletParachainStakingDelegations (642) */
  interface PalletParachainStakingDelegations extends Struct {
    readonly delegations: Vec<PalletParachainStakingBond>;
    readonly total: u128;
  }

  /** @name PalletParachainStakingCollatorSnapshot (644) */
  interface PalletParachainStakingCollatorSnapshot extends Struct {
    readonly bond: u128;
    readonly delegations: Vec<PalletParachainStakingBondWithAutoCompound>;
    readonly total: u128;
  }

  /** @name PalletParachainStakingBondWithAutoCompound (646) */
  interface PalletParachainStakingBondWithAutoCompound extends Struct {
    readonly owner: AccountId32;
    readonly amount: u128;
    readonly autoCompound: Percent;
  }

  /** @name PalletParachainStakingDelayedPayout (647) */
  interface PalletParachainStakingDelayedPayout extends Struct {
    readonly roundIssuance: u128;
    readonly totalStakingReward: u128;
    readonly collatorCommission: Perbill;
  }

  /** @name PalletParachainStakingInflationInflationInfo (648) */
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

  /** @name PalletParachainStakingError (649) */
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
    readonly isRoundLengthMustBeGreaterThanTotalSelectedCollators: boolean;
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
    readonly isTooLowDelegationCountToAutoCompound: boolean;
    readonly isTooLowCandidateAutoCompoundingDelegationCountToAutoCompound: boolean;
    readonly isTooLowCandidateAutoCompoundingDelegationCountToDelegate: boolean;
    readonly type: 'DelegatorDNE' | 'DelegatorDNEinTopNorBottom' | 'DelegatorDNEInDelegatorSet' | 'CandidateDNE' | 'DelegationDNE' | 'DelegatorExists' | 'CandidateExists' | 'CandidateBondBelowMin' | 'InsufficientBalance' | 'DelegatorBondBelowMin' | 'DelegationBelowMin' | 'AlreadyOffline' | 'AlreadyActive' | 'DelegatorAlreadyLeaving' | 'DelegatorNotLeaving' | 'DelegatorCannotLeaveYet' | 'CannotDelegateIfLeaving' | 'CandidateAlreadyLeaving' | 'CandidateNotLeaving' | 'CandidateCannotLeaveYet' | 'CannotGoOnlineIfLeaving' | 'ExceedMaxDelegationsPerDelegator' | 'AlreadyDelegatedCandidate' | 'InvalidSchedule' | 'CannotSetBelowMin' | 'RoundLengthMustBeGreaterThanTotalSelectedCollators' | 'NoWritingSameValue' | 'TooLowCandidateCountWeightHintJoinCandidates' | 'TooLowCandidateCountWeightHintCancelLeaveCandidates' | 'TooLowCandidateCountToLeaveCandidates' | 'TooLowDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToLeaveCandidates' | 'TooLowDelegationCountToLeaveDelegators' | 'PendingCandidateRequestsDNE' | 'PendingCandidateRequestAlreadyExists' | 'PendingCandidateRequestNotDueYet' | 'PendingDelegationRequestDNE' | 'PendingDelegationRequestAlreadyExists' | 'PendingDelegationRequestNotDueYet' | 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull' | 'PendingDelegationRevoke' | 'TooLowDelegationCountToAutoCompound' | 'TooLowCandidateAutoCompoundingDelegationCountToAutoCompound' | 'TooLowCandidateAutoCompoundingDelegationCountToDelegate';
  }

  /** @name PalletAuthorInherentError (650) */
  interface PalletAuthorInherentError extends Enum {
    readonly isAuthorAlreadySet: boolean;
    readonly isNoAccountId: boolean;
    readonly isCannotBeAuthor: boolean;
    readonly type: 'AuthorAlreadySet' | 'NoAccountId' | 'CannotBeAuthor';
  }

  /** @name PalletAuthorMappingRegistrationInfo (651) */
  interface PalletAuthorMappingRegistrationInfo extends Struct {
    readonly account: AccountId32;
    readonly deposit: u128;
    readonly keys_: SessionKeysPrimitivesVrfVrfCryptoPublic;
  }

  /** @name PalletAuthorMappingError (652) */
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

  /** @name CumulusPalletXcmError (653) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (654) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (655) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (658) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletXcmQueryStatus (659) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
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

  /** @name XcmVersionedResponse (662) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (668) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name XcmVersionedAssetId (670) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (671) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedMultiLocation;
    readonly locker: XcmVersionedMultiLocation;
    readonly users: u32;
  }

  /** @name PalletXcmError (675) */
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
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (677) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (678) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (681) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (684) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (685) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (687) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueError (689) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name OrmlAssetRegistryModuleError (690) */
  interface OrmlAssetRegistryModuleError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isBadVersion: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isConflictingLocation: boolean;
    readonly isConflictingAssetId: boolean;
    readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingLocation' | 'ConflictingAssetId';
  }

  /** @name OrmlUnknownTokensModuleError (693) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name OrmlXtokensModuleError (694) */
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

  /** @name PalletSudoError (695) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name SpRuntimeMultiSignature (697) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (698) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (700) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (701) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (704) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (705) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (706) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (707) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (710) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u64> {}

  /** @name FrameSystemExtensionsCheckWeight (711) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletAssetTxPaymentChargeAssetTxPayment (712) */
  interface PalletAssetTxPaymentChargeAssetTxPayment extends Struct {
    readonly tip: Compact<u128>;
    readonly assetId: Option<ZeitgeistPrimitivesAssetsAllAssetsAsset>;
  }

  /** @name BatteryStationRuntimeRuntime (713) */
  type BatteryStationRuntimeRuntime = Null;

} // declare module
