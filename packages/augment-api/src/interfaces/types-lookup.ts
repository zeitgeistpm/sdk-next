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
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (9) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (10) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
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

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
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

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
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
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletSchedulerEvent (30) */
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

  /** @name PalletPreimageEvent (35) */
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

  /** @name PalletBalancesEvent (36) */
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
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (37) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (38) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletTreasuryEvent (39) */
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

  /** @name PalletVestingEvent (40) */
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

  /** @name PalletMultisigEvent (41) */
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

  /** @name PalletMultisigTimepoint (42) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u64;
    readonly index: u32;
  }

  /** @name PalletBountiesEvent (43) */
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

  /** @name PalletAssetTxPaymentEvent (44) */
  interface PalletAssetTxPaymentEvent extends Enum {
    readonly isAssetTxFeePaid: boolean;
    readonly asAssetTxFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
      readonly assetId: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'AssetTxFeePaid';
  }

  /** @name StagingXcmV3MultiLocation (46) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV3Junctions;
  }

  /** @name StagingXcmV3Junctions (47) */
  interface StagingXcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction, StagingXcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV3Junction (48) */
  interface StagingXcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<StagingXcmV3JunctionNetworkId>;
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
      readonly id: StagingXcmV3JunctionBodyId;
      readonly part: StagingXcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: StagingXcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name StagingXcmV3JunctionNetworkId (51) */
  interface StagingXcmV3JunctionNetworkId extends Enum {
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

  /** @name StagingXcmV3JunctionBodyId (54) */
  interface StagingXcmV3JunctionBodyId extends Enum {
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

  /** @name StagingXcmV3JunctionBodyPart (55) */
  interface StagingXcmV3JunctionBodyPart extends Enum {
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
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
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

  /** @name PalletDemocracyMetadataOwner (60) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletCollectiveEvent (61) */
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

  /** @name PalletMembershipEvent (63) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletIdentityEvent (68) */
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

  /** @name PalletUtilityEvent (69) */
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

  /** @name PalletProxyEvent (70) */
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

  /** @name ZeitgeistPrimitivesProxyType (71) */
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

  /** @name OrmlTokensModuleEvent (73) */
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
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked' | 'Issued' | 'Rescinded';
  }

  /** @name ZeitgeistPrimitivesAsset (74) */
  interface ZeitgeistPrimitivesAsset extends Enum {
    readonly isCategoricalOutcome: boolean;
    readonly asCategoricalOutcome: ITuple<[u128, u16]>;
    readonly isScalarOutcome: boolean;
    readonly asScalarOutcome: ITuple<[u128, ZeitgeistPrimitivesAssetScalarPosition]>;
    readonly isCombinatorialOutcomeLegacy: boolean;
    readonly isPoolShare: boolean;
    readonly asPoolShare: u128;
    readonly isZtg: boolean;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly isParimutuelShare: boolean;
    readonly asParimutuelShare: ITuple<[u128, u16]>;
    readonly isCombinatorialToken: boolean;
    readonly asCombinatorialToken: U8aFixed;
    readonly type: 'CategoricalOutcome' | 'ScalarOutcome' | 'CombinatorialOutcomeLegacy' | 'PoolShare' | 'Ztg' | 'ForeignAsset' | 'ParimutuelShare' | 'CombinatorialToken';
  }

  /** @name ZeitgeistPrimitivesAssetScalarPosition (75) */
  interface ZeitgeistPrimitivesAssetScalarPosition extends Enum {
    readonly isLong: boolean;
    readonly isShort: boolean;
    readonly type: 'Long' | 'Short';
  }

  /** @name ZrmlAuthorizedEvent (77) */
  interface ZrmlAuthorizedEvent extends Enum {
    readonly isAuthorityReported: boolean;
    readonly asAuthorityReported: {
      readonly marketId: u128;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'AuthorityReported';
  }

  /** @name ZeitgeistPrimitivesOutcomeReport (78) */
  interface ZeitgeistPrimitivesOutcomeReport extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: u128;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZrmlCourtEvent (79) */
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

  /** @name ZrmlCourtCourtInfo (80) */
  interface ZrmlCourtCourtInfo extends Struct {
    readonly status: ZrmlCourtCourtStatus;
    readonly appeals: Vec<ZrmlCourtAppealInfo>;
    readonly roundEnds: ZrmlCourtRoundTiming;
    readonly voteItemType: ZrmlCourtVoteItemType;
  }

  /** @name ZrmlCourtAppealInfo (82) */
  interface ZrmlCourtAppealInfo extends Struct {
    readonly backer: AccountId32;
    readonly bond: u128;
    readonly appealedVoteItem: ZrmlCourtVoteItem;
  }

  /** @name ZrmlCourtVoteItem (83) */
  interface ZrmlCourtVoteItem extends Enum {
    readonly isOutcome: boolean;
    readonly asOutcome: ZeitgeistPrimitivesOutcomeReport;
    readonly isBinary: boolean;
    readonly asBinary: bool;
    readonly type: 'Outcome' | 'Binary';
  }

  /** @name ZrmlCourtCourtStatus (85) */
  interface ZrmlCourtCourtStatus extends Enum {
    readonly isOpen: boolean;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly winner: ZrmlCourtVoteItem;
    } & Struct;
    readonly isReassigned: boolean;
    readonly type: 'Open' | 'Closed' | 'Reassigned';
  }

  /** @name ZrmlCourtRoundTiming (86) */
  interface ZrmlCourtRoundTiming extends Struct {
    readonly preVote: u64;
    readonly vote: u64;
    readonly aggregation: u64;
    readonly appeal: u64;
  }

  /** @name ZrmlCourtVoteItemType (87) */
  interface ZrmlCourtVoteItemType extends Enum {
    readonly isOutcome: boolean;
    readonly isBinary: boolean;
    readonly type: 'Outcome' | 'Binary';
  }

  /** @name ZrmlSwapsEvent (91) */
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

  /** @name ZrmlSwapsEventsCommonPoolEventParams (92) */
  interface ZrmlSwapsEventsCommonPoolEventParams extends Struct {
    readonly poolId: u128;
    readonly who: AccountId32;
  }

  /** @name ZrmlSwapsPool (93) */
  interface ZrmlSwapsPool extends Struct {
    readonly assets: Vec<ZeitgeistPrimitivesAsset>;
    readonly status: ZrmlSwapsPoolPoolStatus;
    readonly swapFee: u128;
    readonly totalWeight: u128;
    readonly weights: BTreeMap<ZeitgeistPrimitivesAsset, u128>;
  }

  /** @name ZrmlSwapsPoolPoolStatus (96) */
  interface ZrmlSwapsPoolPoolStatus extends Enum {
    readonly isOpen: boolean;
    readonly isClosed: boolean;
    readonly type: 'Open' | 'Closed';
  }

  /** @name ZrmlSwapsEventsPoolAssetsEvent (101) */
  interface ZrmlSwapsEventsPoolAssetsEvent extends Struct {
    readonly assets: Vec<ZeitgeistPrimitivesAsset>;
    readonly bounds: Vec<u128>;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: Vec<u128>;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsPoolAssetEvent (103) */
  interface ZrmlSwapsEventsPoolAssetEvent extends Struct {
    readonly asset: ZeitgeistPrimitivesAsset;
    readonly bound: u128;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly transferred: u128;
    readonly poolAmount: u128;
  }

  /** @name ZrmlSwapsEventsSwapEvent (104) */
  interface ZrmlSwapsEventsSwapEvent extends Struct {
    readonly assetAmountIn: u128;
    readonly assetAmountOut: u128;
    readonly assetBound: Option<u128>;
    readonly assetIn: ZeitgeistPrimitivesAsset;
    readonly assetOut: ZeitgeistPrimitivesAsset;
    readonly cpep: ZrmlSwapsEventsCommonPoolEventParams;
    readonly maxPrice: Option<u128>;
  }

  /** @name ZrmlPredictionMarketsEvent (106) */
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
    readonly asTokensRedeemed: ITuple<[u128, ZeitgeistPrimitivesAsset, u128, u128, AccountId32]>;
    readonly isGlobalDisputeStarted: boolean;
    readonly asGlobalDisputeStarted: u128;
    readonly isRecoveryLimitReached: boolean;
    readonly asRecoveryLimitReached: {
      readonly lastTimeFrame: u64;
      readonly limitTimeFrame: u64;
    } & Struct;
    readonly type: 'BadOnInitialize' | 'BoughtCompleteSet' | 'MarketApproved' | 'MarketCreated' | 'MarketDestroyed' | 'MarketClosed' | 'MarketEarlyCloseScheduled' | 'MarketEarlyCloseDisputed' | 'MarketEarlyCloseRejected' | 'MarketDisputed' | 'MarketExpired' | 'MarketRejected' | 'MarketReported' | 'MarketResolved' | 'MarketRequestedEdit' | 'MarketEdited' | 'SoldCompleteSet' | 'TokensRedeemed' | 'GlobalDisputeStarted' | 'RecoveryLimitReached';
  }

  /** @name ZeitgeistPrimitivesMarketMarketStatus (107) */
  interface ZeitgeistPrimitivesMarketMarketStatus extends Enum {
    readonly isProposed: boolean;
    readonly isActive: boolean;
    readonly isClosed: boolean;
    readonly isReported: boolean;
    readonly isDisputed: boolean;
    readonly isResolved: boolean;
    readonly type: 'Proposed' | 'Active' | 'Closed' | 'Reported' | 'Disputed' | 'Resolved';
  }

  /** @name ZeitgeistPrimitivesMarket (108) */
  interface ZeitgeistPrimitivesMarket extends Struct {
    readonly marketId: u128;
    readonly baseAsset: ZeitgeistPrimitivesAsset;
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

  /** @name ZeitgeistPrimitivesMarketMarketCreation (109) */
  interface ZeitgeistPrimitivesMarketMarketCreation extends Enum {
    readonly isPermissionless: boolean;
    readonly isAdvised: boolean;
    readonly type: 'Permissionless' | 'Advised';
  }

  /** @name ZeitgeistPrimitivesMarketMarketType (110) */
  interface ZeitgeistPrimitivesMarketMarketType extends Enum {
    readonly isCategorical: boolean;
    readonly asCategorical: u16;
    readonly isScalar: boolean;
    readonly asScalar: RangeInclusive<u128>;
    readonly type: 'Categorical' | 'Scalar';
  }

  /** @name ZeitgeistPrimitivesMarketMarketPeriod (112) */
  interface ZeitgeistPrimitivesMarketMarketPeriod extends Enum {
    readonly isBlock: boolean;
    readonly asBlock: Range<u64>;
    readonly isTimestamp: boolean;
    readonly asTimestamp: Range<u64>;
    readonly type: 'Block' | 'Timestamp';
  }

  /** @name ZeitgeistPrimitivesMarketDeadlines (114) */
  interface ZeitgeistPrimitivesMarketDeadlines extends Struct {
    readonly gracePeriod: u64;
    readonly oracleDuration: u64;
    readonly disputeDuration: u64;
  }

  /** @name ZeitgeistPrimitivesMarketScoringRule (115) */
  interface ZeitgeistPrimitivesMarketScoringRule extends Enum {
    readonly isAmmCdaHybrid: boolean;
    readonly isParimutuel: boolean;
    readonly type: 'AmmCdaHybrid' | 'Parimutuel';
  }

  /** @name ZeitgeistPrimitivesMarketReport (117) */
  interface ZeitgeistPrimitivesMarketReport extends Struct {
    readonly at: u64;
    readonly by: AccountId32;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZeitgeistPrimitivesMarketMarketDisputeMechanism (120) */
  interface ZeitgeistPrimitivesMarketMarketDisputeMechanism extends Enum {
    readonly isAuthorized: boolean;
    readonly isCourt: boolean;
    readonly type: 'Authorized' | 'Court';
  }

  /** @name ZeitgeistPrimitivesMarketMarketBonds (121) */
  interface ZeitgeistPrimitivesMarketMarketBonds extends Struct {
    readonly creation: Option<ZeitgeistPrimitivesMarketBond>;
    readonly oracle: Option<ZeitgeistPrimitivesMarketBond>;
    readonly outsider: Option<ZeitgeistPrimitivesMarketBond>;
    readonly dispute: Option<ZeitgeistPrimitivesMarketBond>;
    readonly closeRequest: Option<ZeitgeistPrimitivesMarketBond>;
    readonly closeDispute: Option<ZeitgeistPrimitivesMarketBond>;
  }

  /** @name ZeitgeistPrimitivesMarketBond (123) */
  interface ZeitgeistPrimitivesMarketBond extends Struct {
    readonly who: AccountId32;
    readonly value: u128;
    readonly isSettled: bool;
  }

  /** @name ZeitgeistPrimitivesMarketEarlyClose (125) */
  interface ZeitgeistPrimitivesMarketEarlyClose extends Struct {
    readonly old: ZeitgeistPrimitivesMarketMarketPeriod;
    readonly new_: ZeitgeistPrimitivesMarketMarketPeriod;
    readonly state: ZeitgeistPrimitivesMarketEarlyCloseState;
  }

  /** @name ZeitgeistPrimitivesMarketEarlyCloseState (126) */
  interface ZeitgeistPrimitivesMarketEarlyCloseState extends Enum {
    readonly isScheduledAsMarketCreator: boolean;
    readonly isScheduledAsOther: boolean;
    readonly isDisputed: boolean;
    readonly isRejected: boolean;
    readonly type: 'ScheduledAsMarketCreator' | 'ScheduledAsOther' | 'Disputed' | 'Rejected';
  }

  /** @name ZrmlStyxEvent (129) */
  interface ZrmlStyxEvent extends Enum {
    readonly isAccountCrossed: boolean;
    readonly asAccountCrossed: ITuple<[AccountId32, u128]>;
    readonly isCrossingFeeChanged: boolean;
    readonly asCrossingFeeChanged: u128;
    readonly type: 'AccountCrossed' | 'CrossingFeeChanged';
  }

  /** @name ZrmlGlobalDisputesEvent (130) */
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

  /** @name ZrmlNeoSwapsEvent (131) */
  interface ZrmlNeoSwapsEvent extends Enum {
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly assetOut: ZeitgeistPrimitivesAsset;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly swapFeeAmount: u128;
      readonly externalFeeAmount: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly swapFeeAmount: u128;
      readonly externalFeeAmount: u128;
    } & Struct;
    readonly isFeesWithdrawn: boolean;
    readonly asFeesWithdrawn: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly amount: u128;
    } & Struct;
    readonly isJoinExecuted: boolean;
    readonly asJoinExecuted: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly poolSharesAmount: u128;
      readonly amountsIn: Vec<u128>;
      readonly newLiquidityParameter: u128;
    } & Struct;
    readonly isExitExecuted: boolean;
    readonly asExitExecuted: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly poolSharesAmount: u128;
      readonly amountsOut: Vec<u128>;
      readonly newLiquidityParameter: u128;
    } & Struct;
    readonly isPoolDeployed: boolean;
    readonly asPoolDeployed: {
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly poolId: u128;
      readonly accountId: AccountId32;
      readonly reserves: BTreeMap<ZeitgeistPrimitivesAsset, u128>;
      readonly collateral: ZeitgeistPrimitivesAsset;
      readonly liquidityParameter: u128;
      readonly poolSharesAmount: u128;
      readonly swapFee: u128;
    } & Struct;
    readonly isPoolDestroyed: boolean;
    readonly asPoolDestroyed: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly amountsOut: Vec<u128>;
    } & Struct;
    readonly isComboBuyExecuted: boolean;
    readonly asComboBuyExecuted: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly buy: Vec<ZeitgeistPrimitivesAsset>;
      readonly sell: Vec<ZeitgeistPrimitivesAsset>;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly swapFeeAmount: u128;
      readonly externalFeeAmount: u128;
    } & Struct;
    readonly isComboSellExecuted: boolean;
    readonly asComboSellExecuted: {
      readonly who: AccountId32;
      readonly poolId: u128;
      readonly buy: Vec<ZeitgeistPrimitivesAsset>;
      readonly keep: Vec<ZeitgeistPrimitivesAsset>;
      readonly sell: Vec<ZeitgeistPrimitivesAsset>;
      readonly amountBuy: u128;
      readonly amountKeep: u128;
      readonly amountOut: u128;
      readonly swapFeeAmount: u128;
      readonly externalFeeAmount: u128;
    } & Struct;
    readonly isCombinatorialPoolDeployed: boolean;
    readonly asCombinatorialPoolDeployed: {
      readonly who: AccountId32;
      readonly marketIds: Vec<u128>;
      readonly poolId: u128;
      readonly accountId: AccountId32;
      readonly reserves: BTreeMap<ZeitgeistPrimitivesAsset, u128>;
      readonly collateral: ZeitgeistPrimitivesAsset;
      readonly liquidityParameter: u128;
      readonly poolSharesAmount: u128;
      readonly swapFee: u128;
    } & Struct;
    readonly type: 'BuyExecuted' | 'SellExecuted' | 'FeesWithdrawn' | 'JoinExecuted' | 'ExitExecuted' | 'PoolDeployed' | 'PoolDestroyed' | 'ComboBuyExecuted' | 'ComboSellExecuted' | 'CombinatorialPoolDeployed';
  }

  /** @name ZrmlOrderbookEvent (132) */
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

  /** @name ZeitgeistPrimitivesHybridRouterApiTypesExternalFee (133) */
  interface ZeitgeistPrimitivesHybridRouterApiTypesExternalFee extends Struct {
    readonly account: AccountId32;
    readonly amount: u128;
  }

  /** @name ZeitgeistPrimitivesOrderbookOrder (134) */
  interface ZeitgeistPrimitivesOrderbookOrder extends Struct {
    readonly marketId: u128;
    readonly maker: AccountId32;
    readonly makerAsset: ZeitgeistPrimitivesAsset;
    readonly makerAmount: u128;
    readonly takerAsset: ZeitgeistPrimitivesAsset;
    readonly takerAmount: u128;
  }

  /** @name ZrmlParimutuelEvent (135) */
  interface ZrmlParimutuelEvent extends Enum {
    readonly isOutcomeBought: boolean;
    readonly asOutcomeBought: {
      readonly marketId: u128;
      readonly buyer: AccountId32;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly amountMinusFees: u128;
      readonly fees: u128;
    } & Struct;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: {
      readonly marketId: u128;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly withdrawnAssetBalance: u128;
      readonly baseAssetPayoff: u128;
      readonly sender: AccountId32;
    } & Struct;
    readonly isBalanceRefunded: boolean;
    readonly asBalanceRefunded: {
      readonly marketId: u128;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly refundedBalance: u128;
      readonly sender: AccountId32;
    } & Struct;
    readonly type: 'OutcomeBought' | 'RewardsClaimed' | 'BalanceRefunded';
  }

  /** @name ZrmlHybridRouterEvent (136) */
  interface ZrmlHybridRouterEvent extends Enum {
    readonly isHybridRouterExecuted: boolean;
    readonly asHybridRouterExecuted: {
      readonly txType: ZrmlHybridRouterTxType;
      readonly who: AccountId32;
      readonly marketId: u128;
      readonly priceLimit: u128;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly amountIn: u128;
      readonly assetOut: ZeitgeistPrimitivesAsset;
      readonly amountOut: u128;
      readonly externalFeeAmount: u128;
      readonly swapFeeAmount: u128;
    } & Struct;
    readonly type: 'HybridRouterExecuted';
  }

  /** @name ZrmlHybridRouterTxType (137) */
  interface ZrmlHybridRouterTxType extends Enum {
    readonly isBuy: boolean;
    readonly isSell: boolean;
    readonly type: 'Buy' | 'Sell';
  }

  /** @name ZrmlCombinatorialTokensEvent (138) */
  interface ZrmlCombinatorialTokensEvent extends Enum {
    readonly isTokenSplit: boolean;
    readonly asTokenSplit: {
      readonly who: AccountId32;
      readonly parentCollectionId: Option<U8aFixed>;
      readonly marketId: u128;
      readonly partition: Vec<Vec<bool>>;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly assetsOut: Vec<ZeitgeistPrimitivesAsset>;
      readonly collectionIds: Vec<U8aFixed>;
      readonly amount: u128;
    } & Struct;
    readonly isTokenMerged: boolean;
    readonly asTokenMerged: {
      readonly who: AccountId32;
      readonly parentCollectionId: Option<U8aFixed>;
      readonly marketId: u128;
      readonly partition: Vec<Vec<bool>>;
      readonly assetOut: ZeitgeistPrimitivesAsset;
      readonly assetsIn: Vec<ZeitgeistPrimitivesAsset>;
      readonly amount: u128;
    } & Struct;
    readonly isTokenRedeemed: boolean;
    readonly asTokenRedeemed: {
      readonly who: AccountId32;
      readonly parentCollectionId: Option<U8aFixed>;
      readonly marketId: u128;
      readonly indexSet: Vec<bool>;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly amountIn: u128;
      readonly assetOut: ZeitgeistPrimitivesAsset;
      readonly amountOut: u128;
    } & Struct;
    readonly type: 'TokenSplit' | 'TokenMerged' | 'TokenRedeemed';
  }

  /** @name ZrmlFutarchyEvent (142) */
  interface ZrmlFutarchyEvent extends Enum {
    readonly isSubmitted: boolean;
    readonly asSubmitted: {
      readonly duration: u64;
      readonly proposal: ZrmlFutarchyProposal;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposal: ZrmlFutarchyProposal;
    } & Struct;
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly proposal: ZrmlFutarchyProposal;
    } & Struct;
    readonly isUnexpectedSchedulerError: boolean;
    readonly type: 'Submitted' | 'Rejected' | 'Scheduled' | 'UnexpectedSchedulerError';
  }

  /** @name ZrmlFutarchyProposal (143) */
  interface ZrmlFutarchyProposal extends Struct {
    readonly when: u64;
    readonly call: FrameSupportPreimagesBounded;
    readonly oracle: ZrmlNeoSwapsDecisionMarketOracle;
  }

  /** @name FrameSupportPreimagesBounded (144) */
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

  /** @name FrameSystemCall (146) */
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

  /** @name PalletTimestampCall (150) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletSchedulerCall (151) */
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

  /** @name PalletPreimageCall (153) */
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

  /** @name PalletBalancesCall (154) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
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
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
  }

  /** @name PalletTreasuryCall (157) */
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

  /** @name PalletVestingCall (158) */
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

  /** @name PalletVestingVestingInfo (159) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u64;
  }

  /** @name PalletMultisigCall (160) */
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

  /** @name PalletBountiesCall (162) */
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

  /** @name PalletDemocracyCall (163) */
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
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name PalletDemocracyConviction (164) */
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

  /** @name PalletCollectiveCall (167) */
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
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletMembershipCall (169) */
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

  /** @name PalletIdentityCall (174) */
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

  /** @name PalletIdentityIdentityInfo (175) */
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

  /** @name PalletIdentityBitFlags (212) */
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

  /** @name PalletIdentityIdentityField (213) */
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

  /** @name PalletIdentityJudgement (214) */
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

  /** @name PalletUtilityCall (215) */
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

  /** @name BatteryStationRuntimeOriginCaller (217) */
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

  /** @name FrameSupportDispatchRawOrigin (218) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (219) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name CumulusPalletXcmOrigin (222) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name PalletXcmOrigin (224) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name SpCoreVoid (225) */
  type SpCoreVoid = Null;

  /** @name PalletProxyCall (226) */
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

  /** @name OrmlCurrenciesModuleCall (228) */
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

  /** @name ZrmlAuthorizedCall (230) */
  interface ZrmlAuthorizedCall extends Enum {
    readonly isAuthorizeMarketOutcome: boolean;
    readonly asAuthorizeMarketOutcome: {
      readonly marketId: u128;
      readonly outcome: ZeitgeistPrimitivesOutcomeReport;
    } & Struct;
    readonly type: 'AuthorizeMarketOutcome';
  }

  /** @name ZrmlCourtCall (231) */
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

  /** @name ZrmlSwapsCall (232) */
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
      readonly assetOut: ZeitgeistPrimitivesAsset;
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
    readonly isForcePoolExit: boolean;
    readonly asForcePoolExit: {
      readonly who: AccountId32;
      readonly poolId: Compact<u128>;
      readonly poolAmount: Compact<u128>;
      readonly minAssetsOut: Vec<u128>;
    } & Struct;
    readonly type: 'PoolExit' | 'PoolExitWithExactAssetAmount' | 'PoolExitWithExactPoolAmount' | 'PoolJoin' | 'PoolJoinWithExactAssetAmount' | 'PoolJoinWithExactPoolAmount' | 'SwapExactAmountIn' | 'SwapExactAmountOut' | 'ForcePoolExit';
  }

  /** @name ZrmlPredictionMarketsCall (233) */
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
      readonly baseAsset: ZeitgeistPrimitivesAsset;
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
      readonly baseAsset: ZeitgeistPrimitivesAsset;
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
      readonly baseAsset: ZeitgeistPrimitivesAsset;
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

  /** @name ZeitgeistPrimitivesMultiHash (234) */
  interface ZeitgeistPrimitivesMultiHash extends Enum {
    readonly isSha3384: boolean;
    readonly asSha3384: U8aFixed;
    readonly type: 'Sha3384';
  }

  /** @name ZrmlStyxCall (236) */
  interface ZrmlStyxCall extends Enum {
    readonly isCross: boolean;
    readonly isSetBurnAmount: boolean;
    readonly asSetBurnAmount: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'Cross' | 'SetBurnAmount';
  }

  /** @name ZrmlGlobalDisputesCall (237) */
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

  /** @name ZrmlNeoSwapsCall (238) */
  interface ZrmlNeoSwapsCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly poolId: Compact<u128>;
      readonly assetCount: u16;
      readonly assetOut: ZeitgeistPrimitivesAsset;
      readonly amountIn: Compact<u128>;
      readonly minAmountOut: Compact<u128>;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly poolId: Compact<u128>;
      readonly assetCount: u16;
      readonly assetIn: ZeitgeistPrimitivesAsset;
      readonly amountIn: Compact<u128>;
      readonly minAmountOut: Compact<u128>;
    } & Struct;
    readonly isJoin: boolean;
    readonly asJoin: {
      readonly poolId: Compact<u128>;
      readonly poolSharesAmount: Compact<u128>;
      readonly maxAmountsIn: Vec<u128>;
    } & Struct;
    readonly isExit: boolean;
    readonly asExit: {
      readonly poolId: Compact<u128>;
      readonly poolSharesAmountOut: Compact<u128>;
      readonly minAmountsOut: Vec<u128>;
    } & Struct;
    readonly isWithdrawFees: boolean;
    readonly asWithdrawFees: {
      readonly poolId: Compact<u128>;
    } & Struct;
    readonly isDeployPool: boolean;
    readonly asDeployPool: {
      readonly marketId: Compact<u128>;
      readonly amount: Compact<u128>;
      readonly spotPrices: Vec<u128>;
      readonly swapFee: Compact<u128>;
    } & Struct;
    readonly isComboBuy: boolean;
    readonly asComboBuy: {
      readonly poolId: Compact<u128>;
      readonly assetCount: u16;
      readonly buy: Vec<ZeitgeistPrimitivesAsset>;
      readonly sell: Vec<ZeitgeistPrimitivesAsset>;
      readonly amountIn: Compact<u128>;
      readonly minAmountOut: Compact<u128>;
    } & Struct;
    readonly isComboSell: boolean;
    readonly asComboSell: {
      readonly poolId: Compact<u128>;
      readonly assetCount: u16;
      readonly buy: Vec<ZeitgeistPrimitivesAsset>;
      readonly keep: Vec<ZeitgeistPrimitivesAsset>;
      readonly sell: Vec<ZeitgeistPrimitivesAsset>;
      readonly amountBuy: Compact<u128>;
      readonly amountKeep: Compact<u128>;
      readonly minAmountOut: Compact<u128>;
    } & Struct;
    readonly isDeployCombinatorialPool: boolean;
    readonly asDeployCombinatorialPool: {
      readonly assetCount: u16;
      readonly marketIds: Vec<u128>;
      readonly amount: u128;
      readonly spotPrices: Vec<u128>;
      readonly swapFee: u128;
      readonly fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel;
    } & Struct;
    readonly type: 'Buy' | 'Sell' | 'Join' | 'Exit' | 'WithdrawFees' | 'DeployPool' | 'ComboBuy' | 'ComboSell' | 'DeployCombinatorialPool';
  }

  /** @name ZrmlCombinatorialTokensCryptographicIdManagerFuel (239) */
  interface ZrmlCombinatorialTokensCryptographicIdManagerFuel extends Struct {
    readonly total: u32;
    readonly consumeAll: bool;
  }

  /** @name ZrmlOrderbookCall (240) */
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
      readonly makerAsset: ZeitgeistPrimitivesAsset;
      readonly makerAmount: Compact<u128>;
      readonly takerAsset: ZeitgeistPrimitivesAsset;
      readonly takerAmount: Compact<u128>;
    } & Struct;
    readonly type: 'RemoveOrder' | 'FillOrder' | 'PlaceOrder';
  }

  /** @name ZrmlParimutuelCall (241) */
  interface ZrmlParimutuelCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly marketId: u128;
    } & Struct;
    readonly isClaimRefunds: boolean;
    readonly asClaimRefunds: {
      readonly refundAsset: ZeitgeistPrimitivesAsset;
    } & Struct;
    readonly type: 'Buy' | 'ClaimRewards' | 'ClaimRefunds';
  }

  /** @name ZrmlHybridRouterCall (242) */
  interface ZrmlHybridRouterCall extends Enum {
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly marketId: u128;
      readonly assetCount: Compact<u16>;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly amountIn: Compact<u128>;
      readonly maxPrice: Compact<u128>;
      readonly orders: Vec<u128>;
      readonly strategy: ZrmlHybridRouterStrategy;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly marketId: u128;
      readonly assetCount: Compact<u16>;
      readonly asset: ZeitgeistPrimitivesAsset;
      readonly amountIn: Compact<u128>;
      readonly minPrice: Compact<u128>;
      readonly orders: Vec<u128>;
      readonly strategy: ZrmlHybridRouterStrategy;
    } & Struct;
    readonly type: 'Buy' | 'Sell';
  }

  /** @name ZrmlHybridRouterStrategy (244) */
  interface ZrmlHybridRouterStrategy extends Enum {
    readonly isImmediateOrCancel: boolean;
    readonly isLimitOrder: boolean;
    readonly type: 'ImmediateOrCancel' | 'LimitOrder';
  }

  /** @name ZrmlCombinatorialTokensCall (245) */
  interface ZrmlCombinatorialTokensCall extends Enum {
    readonly isSplitPosition: boolean;
    readonly asSplitPosition: {
      readonly parentCollectionId: Option<U8aFixed>;
      readonly marketId: u128;
      readonly partition: Vec<Vec<bool>>;
      readonly amount: u128;
      readonly fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel;
    } & Struct;
    readonly isMergePosition: boolean;
    readonly asMergePosition: {
      readonly parentCollectionId: Option<U8aFixed>;
      readonly marketId: u128;
      readonly partition: Vec<Vec<bool>>;
      readonly amount: u128;
      readonly fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel;
    } & Struct;
    readonly isRedeemPosition: boolean;
    readonly asRedeemPosition: {
      readonly parentCollectionId: Option<U8aFixed>;
      readonly marketId: u128;
      readonly indexSet: Vec<bool>;
      readonly fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel;
    } & Struct;
    readonly type: 'SplitPosition' | 'MergePosition' | 'RedeemPosition';
  }

  /** @name ZrmlFutarchyCall (246) */
  interface ZrmlFutarchyCall extends Enum {
    readonly isSubmitProposal: boolean;
    readonly asSubmitProposal: {
      readonly duration: u64;
      readonly proposal: ZrmlFutarchyProposal;
    } & Struct;
    readonly type: 'SubmitProposal';
  }

  /** @name CumulusPalletParachainSystemCall (247) */
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
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (248) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV5PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV5PersistedValidationData (249) */
  interface PolkadotPrimitivesV5PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (251) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (254) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (257) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PalletParachainStakingCall (260) */
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
    readonly isRemovedCall19: boolean;
    readonly isRemovedCall20: boolean;
    readonly isRemovedCall21: boolean;
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
    readonly isNotifyInactiveCollator: boolean;
    readonly asNotifyInactiveCollator: {
      readonly collator: AccountId32;
    } & Struct;
    readonly isEnableMarkingOffline: boolean;
    readonly asEnableMarkingOffline: {
      readonly value: bool;
    } & Struct;
    readonly isForceJoinCandidates: boolean;
    readonly asForceJoinCandidates: {
      readonly account: AccountId32;
      readonly bond: u128;
      readonly candidateCount: u32;
    } & Struct;
    readonly type: 'SetStakingExpectations' | 'SetInflation' | 'SetParachainBondAccount' | 'SetParachainBondReservePercent' | 'SetTotalSelected' | 'SetCollatorCommission' | 'SetBlocksPerRound' | 'JoinCandidates' | 'ScheduleLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'GoOffline' | 'GoOnline' | 'CandidateBondMore' | 'ScheduleCandidateBondLess' | 'ExecuteCandidateBondLess' | 'CancelCandidateBondLess' | 'Delegate' | 'DelegateWithAutoCompound' | 'RemovedCall19' | 'RemovedCall20' | 'RemovedCall21' | 'ScheduleRevokeDelegation' | 'DelegatorBondMore' | 'ScheduleDelegatorBondLess' | 'ExecuteDelegationRequest' | 'CancelDelegationRequest' | 'SetAutoCompound' | 'HotfixRemoveDelegationRequestsExitedCandidates' | 'NotifyInactiveCollator' | 'EnableMarkingOffline' | 'ForceJoinCandidates';
  }

  /** @name PalletAuthorInherentCall (264) */
  interface PalletAuthorInherentCall extends Enum {
    readonly isKickOffAuthorshipValidation: boolean;
    readonly type: 'KickOffAuthorshipValidation';
  }

  /** @name PalletAuthorSlotFilterCall (265) */
  interface PalletAuthorSlotFilterCall extends Enum {
    readonly isSetEligible: boolean;
    readonly asSetEligible: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SetEligible';
  }

  /** @name PalletAuthorMappingCall (267) */
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

  /** @name NimbusPrimitivesNimbusCryptoPublic (268) */
  interface NimbusPrimitivesNimbusCryptoPublic extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (269) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name CumulusPalletDmpQueueCall (270) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletXcmCall (271) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly message: StagingXcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: StagingXcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: StagingXcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: StagingXcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly beneficiary: StagingXcmVersionedMultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name StagingXcmVersionedMultiLocation (272) */
  interface StagingXcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name StagingXcmV2MultiLocation (273) */
  interface StagingXcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV2MultilocationJunctions;
  }

  /** @name StagingXcmV2MultilocationJunctions (274) */
  interface StagingXcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction, StagingXcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV2Junction (275) */
  interface StagingXcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: StagingXcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: StagingXcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: StagingXcmV2NetworkId;
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
      readonly id: StagingXcmV2BodyId;
      readonly part: StagingXcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name StagingXcmV2NetworkId (276) */
  interface StagingXcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name StagingXcmV2BodyId (278) */
  interface StagingXcmV2BodyId extends Enum {
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

  /** @name StagingXcmV2BodyPart (279) */
  interface StagingXcmV2BodyPart extends Enum {
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

  /** @name StagingXcmVersionedXcm (280) */
  interface StagingXcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name StagingXcmV2Xcm (281) */
  interface StagingXcmV2Xcm extends Vec<StagingXcmV2Instruction> {}

  /** @name StagingXcmV2Instruction (283) */
  interface StagingXcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: StagingXcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: StagingXcmDoubleEncoded;
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
    readonly asDescendOrigin: StagingXcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: StagingXcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV2MultiassetMultiAssetFilter;
      readonly receive: StagingXcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV2MultiLocation;
      readonly xcm: StagingXcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: StagingXcmV2MultiLocation;
      readonly assets: StagingXcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV2MultiAsset;
      readonly weightLimit: StagingXcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV2MultiassetMultiAssets;
      readonly ticket: StagingXcmV2MultiLocation;
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

  /** @name StagingXcmV2MultiassetMultiAssets (284) */
  interface StagingXcmV2MultiassetMultiAssets extends Vec<StagingXcmV2MultiAsset> {}

  /** @name StagingXcmV2MultiAsset (286) */
  interface StagingXcmV2MultiAsset extends Struct {
    readonly id: StagingXcmV2MultiassetAssetId;
    readonly fun: StagingXcmV2MultiassetFungibility;
  }

  /** @name StagingXcmV2MultiassetAssetId (287) */
  interface StagingXcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV2MultiassetFungibility (288) */
  interface StagingXcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV2MultiassetAssetInstance (289) */
  interface StagingXcmV2MultiassetAssetInstance extends Enum {
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

  /** @name StagingXcmV2Response (290) */
  interface StagingXcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name StagingXcmV2TraitsError (293) */
  interface StagingXcmV2TraitsError extends Enum {
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

  /** @name StagingXcmV2OriginKind (294) */
  interface StagingXcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name StagingXcmDoubleEncoded (295) */
  interface StagingXcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name StagingXcmV2MultiassetMultiAssetFilter (296) */
  interface StagingXcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV2MultiassetWildMultiAsset (297) */
  interface StagingXcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV2MultiassetAssetId;
      readonly fun: StagingXcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name StagingXcmV2MultiassetWildFungibility (298) */
  interface StagingXcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV2WeightLimit (299) */
  interface StagingXcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name StagingXcmV3Xcm (300) */
  interface StagingXcmV3Xcm extends Vec<StagingXcmV3Instruction> {}

  /** @name StagingXcmV3Instruction (302) */
  interface StagingXcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: StagingXcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: StagingXcmDoubleEncoded;
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
    readonly asDescendOrigin: StagingXcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: StagingXcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV3MultiassetMultiAssetFilter;
      readonly want: StagingXcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: StagingXcmV3QueryResponseInfo;
      readonly assets: StagingXcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV3MultiAsset;
      readonly weightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly ticket: StagingXcmV3MultiLocation;
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
    readonly asBurnAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: StagingXcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: StagingXcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: StagingXcmV3QueryResponseInfo;
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
    readonly asReportTransactStatus: StagingXcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: StagingXcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: StagingXcmV3JunctionNetworkId;
      readonly destination: StagingXcmV3Junctions;
      readonly xcm: StagingXcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly unlocker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly target: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly owner: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly locker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: StagingXcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name StagingXcmV3MultiassetMultiAssets (303) */
  interface StagingXcmV3MultiassetMultiAssets extends Vec<StagingXcmV3MultiAsset> {}

  /** @name StagingXcmV3MultiAsset (305) */
  interface StagingXcmV3MultiAsset extends Struct {
    readonly id: StagingXcmV3MultiassetAssetId;
    readonly fun: StagingXcmV3MultiassetFungibility;
  }

  /** @name StagingXcmV3MultiassetAssetId (306) */
  interface StagingXcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV3MultiassetFungibility (307) */
  interface StagingXcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV3MultiassetAssetInstance (308) */
  interface StagingXcmV3MultiassetAssetInstance extends Enum {
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

  /** @name StagingXcmV3Response (309) */
  interface StagingXcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, StagingXcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<StagingXcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: StagingXcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name StagingXcmV3TraitsError (312) */
  interface StagingXcmV3TraitsError extends Enum {
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

  /** @name StagingXcmV3PalletInfo (314) */
  interface StagingXcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name StagingXcmV3MaybeErrorCode (317) */
  interface StagingXcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name StagingXcmV3QueryResponseInfo (319) */
  interface StagingXcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV3MultiassetMultiAssetFilter (320) */
  interface StagingXcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV3MultiassetWildMultiAsset (321) */
  interface StagingXcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV3MultiassetAssetId;
      readonly fun: StagingXcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: StagingXcmV3MultiassetAssetId;
      readonly fun: StagingXcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name StagingXcmV3MultiassetWildFungibility (322) */
  interface StagingXcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV3WeightLimit (323) */
  interface StagingXcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name StagingXcmVersionedMultiAssets (324) */
  interface StagingXcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name CumulusPalletXcmpQueueCall (333) */
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

  /** @name OrmlAssetRegistryModuleCall (334) */
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
      readonly location: Option<Option<StagingXcmVersionedMultiLocation>>;
      readonly additional: Option<ZeitgeistPrimitivesCustomMetadata>;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAsset';
  }

  /** @name OrmlTraitsAssetRegistryAssetMetadata (335) */
  interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
    readonly decimals: u32;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly existentialDeposit: u128;
    readonly location: Option<StagingXcmVersionedMultiLocation>;
    readonly additional: ZeitgeistPrimitivesCustomMetadata;
  }

  /** @name ZeitgeistPrimitivesCustomMetadata (336) */
  interface ZeitgeistPrimitivesCustomMetadata extends Struct {
    readonly xcm: ZeitgeistPrimitivesXcmMetadata;
    readonly allowAsBaseAsset: bool;
  }

  /** @name ZeitgeistPrimitivesXcmMetadata (337) */
  interface ZeitgeistPrimitivesXcmMetadata extends Struct {
    readonly feeFactor: Option<u128>;
  }

  /** @name OrmlXtokensModuleCall (344) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: u128;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: StagingXcmVersionedMultiAsset;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: ZeitgeistPrimitivesAsset;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: StagingXcmVersionedMultiAsset;
      readonly fee: StagingXcmVersionedMultiAsset;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[ZeitgeistPrimitivesAsset, u128]>>;
      readonly feeItem: u32;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: StagingXcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: StagingXcmVersionedMultiLocation;
      readonly destWeightLimit: StagingXcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name StagingXcmVersionedMultiAsset (345) */
  interface StagingXcmVersionedMultiAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiAsset;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletSudoCall (346) */
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

  /** @name ZrmlNeoSwapsDecisionMarketOracle (348) */
  interface ZrmlNeoSwapsDecisionMarketOracle extends Struct {
    readonly poolId: u128;
    readonly positiveOutcome: ZeitgeistPrimitivesAsset;
    readonly negativeOutcome: ZeitgeistPrimitivesAsset;
    readonly scoreboard: ZrmlNeoSwapsDecisionMarketOracleScoreboard;
  }

  /** @name BatteryStationRuntimeRuntime (349) */
  type BatteryStationRuntimeRuntime = Null;

  /** @name ZrmlNeoSwapsDecisionMarketOracleScoreboard (350) */
  interface ZrmlNeoSwapsDecisionMarketOracleScoreboard extends Struct {
    readonly start: u64;
    readonly victoryMargin: u128;
    readonly priceMarginAbs: u128;
    readonly priceMarginRel: u128;
    readonly passScore: u128;
    readonly rejectScore: u128;
  }

  /** @name CumulusPalletParachainSystemEvent (351) */
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

  /** @name PalletParachainStakingEvent (352) */
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

  /** @name PalletParachainStakingDelegationRequestsCancelledScheduledRequest (353) */
  interface PalletParachainStakingDelegationRequestsCancelledScheduledRequest extends Struct {
    readonly whenExecutable: u32;
    readonly action: PalletParachainStakingDelegationRequestsDelegationAction;
  }

  /** @name PalletParachainStakingDelegationRequestsDelegationAction (354) */
  interface PalletParachainStakingDelegationRequestsDelegationAction extends Enum {
    readonly isRevoke: boolean;
    readonly asRevoke: u128;
    readonly isDecrease: boolean;
    readonly asDecrease: u128;
    readonly type: 'Revoke' | 'Decrease';
  }

  /** @name PalletParachainStakingDelegatorAdded (355) */
  interface PalletParachainStakingDelegatorAdded extends Enum {
    readonly isAddedToTop: boolean;
    readonly asAddedToTop: {
      readonly newTotal: u128;
    } & Struct;
    readonly isAddedToBottom: boolean;
    readonly type: 'AddedToTop' | 'AddedToBottom';
  }

  /** @name PalletAuthorSlotFilterEvent (356) */
  interface PalletAuthorSlotFilterEvent extends Enum {
    readonly isEligibleUpdated: boolean;
    readonly asEligibleUpdated: u32;
    readonly type: 'EligibleUpdated';
  }

  /** @name PalletAuthorMappingEvent (357) */
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

  /** @name SessionKeysPrimitivesVrfVrfCryptoPublic (358) */
  interface SessionKeysPrimitivesVrfVrfCryptoPublic extends SpCoreSr25519Public {}

  /** @name CumulusPalletXcmEvent (359) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV3TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name StagingXcmV3TraitsOutcome (360) */
  interface StagingXcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, StagingXcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: StagingXcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name CumulusPalletDmpQueueEvent (361) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly outcome: StagingXcmV3TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageHash: U8aFixed;
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
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
  }

  /** @name PalletXcmEvent (362) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: StagingXcmV3TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly destination: StagingXcmV3MultiLocation;
      readonly message: StagingXcmV3Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: StagingXcmV3Response;
    } & Struct;
    readonly isNotified: boolean;
    readonly asNotified: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
      readonly actualWeight: SpWeightsWeightV2Weight;
      readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly result: u32;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly error: StagingXcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: StagingXcmVersionedMultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV3MultiLocation;
      readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: StagingXcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV3MultiLocation;
      readonly fees: StagingXcmV3MultiassetMultiAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: StagingXcmVersionedMultiAssets;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name CumulusPalletXcmpQueueEvent (363) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: U8aFixed;
      readonly messageId: U8aFixed;
      readonly error: StagingXcmV3TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
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

  /** @name OrmlAssetRegistryModuleEvent (364) */
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

  /** @name OrmlUnknownTokensModuleEvent (365) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly who: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: StagingXcmV3MultiAsset;
      readonly who: StagingXcmV3MultiLocation;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlXtokensModuleEvent (366) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: StagingXcmV3MultiassetMultiAssets;
      readonly fee: StagingXcmV3MultiAsset;
      readonly dest: StagingXcmV3MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name PalletSudoEvent (367) */
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

  /** @name FrameSystemPhase (368) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (371) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemLimitsBlockWeights (373) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (374) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (375) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (377) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (378) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (379) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (380) */
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

  /** @name FrameSystemError (384) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletSchedulerScheduled (388) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
    readonly origin: BatteryStationRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (390) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletPreimageRequestStatus (391) */
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

  /** @name PalletPreimageError (396) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PalletBalancesBalanceLock (398) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (399) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (402) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name BatteryStationRuntimeRuntimeHoldReason (406) */
  type BatteryStationRuntimeRuntimeHoldReason = Null;

  /** @name PalletBalancesIdAmount (409) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (411) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name PalletTransactionPaymentReleases (413) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletTreasuryProposal (414) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (418) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (419) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletVestingReleases (422) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (423) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletMultisigMultisig (425) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (427) */
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

  /** @name PalletBountiesBounty (428) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (429) */
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

  /** @name PalletBountiesError (431) */
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

  /** @name PalletDemocracyReferendumInfo (436) */
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

  /** @name PalletDemocracyReferendumStatus (437) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u64;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u64;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (438) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (439) */
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

  /** @name PalletDemocracyDelegations (443) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (444) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u64, u128]> {}

  /** @name PalletDemocracyError (447) */
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
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletCollectiveVotes (449) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u64;
  }

  /** @name PalletCollectiveError (450) */
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
    readonly isPrimeAccountNotMember: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember';
  }

  /** @name PalletMembershipError (452) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletIdentityRegistration (461) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (469) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (471) */
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

  /** @name PalletUtilityError (472) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletProxyProxyDefinition (475) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: ZeitgeistPrimitivesProxyType;
    readonly delay: u64;
  }

  /** @name PalletProxyAnnouncement (479) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u64;
  }

  /** @name PalletProxyError (481) */
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

  /** @name OrmlCurrenciesModuleError (482) */
  interface OrmlCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
  }

  /** @name OrmlTokensBalanceLock (485) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (487) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (489) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (491) */
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

  /** @name ZrmlMarketCommonsError (492) */
  interface ZrmlMarketCommonsError extends Enum {
    readonly isMarketDoesNotExist: boolean;
    readonly isMarketPoolDoesNotExist: boolean;
    readonly isNoMarketHasBeenCreated: boolean;
    readonly isNoReport: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isIncompleteMarketBuilder: boolean;
    readonly type: 'MarketDoesNotExist' | 'MarketPoolDoesNotExist' | 'NoMarketHasBeenCreated' | 'NoReport' | 'PoolAlreadyExists' | 'IncompleteMarketBuilder';
  }

  /** @name ZeitgeistPrimitivesMarketAuthorityReport (493) */
  interface ZeitgeistPrimitivesMarketAuthorityReport extends Struct {
    readonly resolveAt: u64;
    readonly outcome: ZeitgeistPrimitivesOutcomeReport;
  }

  /** @name ZrmlAuthorizedError (494) */
  interface ZrmlAuthorizedError extends Enum {
    readonly isMarketDoesNotHaveDisputeMechanismAuthorized: boolean;
    readonly isMarketIsNotDisputed: boolean;
    readonly isOutcomeMismatch: boolean;
    readonly type: 'MarketDoesNotHaveDisputeMechanismAuthorized' | 'MarketIsNotDisputed' | 'OutcomeMismatch';
  }

  /** @name ZrmlCourtCourtPoolItem (496) */
  interface ZrmlCourtCourtPoolItem extends Struct {
    readonly stake: u128;
    readonly courtParticipant: AccountId32;
    readonly consumedStake: u128;
    readonly joinedAt: u64;
    readonly uneligibleIndex: u64;
    readonly uneligibleStake: u128;
  }

  /** @name ZrmlCourtCourtParticipantInfo (498) */
  interface ZrmlCourtCourtParticipantInfo extends Struct {
    readonly stake: u128;
    readonly activeLock: u128;
    readonly prepareExitAt: Option<u64>;
    readonly delegations: Option<Vec<AccountId32>>;
  }

  /** @name ZrmlCourtDraw (503) */
  interface ZrmlCourtDraw extends Struct {
    readonly courtParticipant: AccountId32;
    readonly weight: u32;
    readonly vote: ZrmlCourtVote;
    readonly slashable: u128;
  }

  /** @name ZrmlCourtVote (506) */
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

  /** @name ZrmlCourtError (508) */
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

  /** @name ZrmlCourtUnexpectedError (509) */
  interface ZrmlCourtUnexpectedError extends Enum {
    readonly isBinarySearchByKeyFailed: boolean;
    readonly isInflationPeriodIsZero: boolean;
    readonly type: 'BinarySearchByKeyFailed' | 'InflationPeriodIsZero';
  }

  /** @name ZrmlSwapsError (510) */
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

  /** @name ZrmlSwapsUnexpectedError (511) */
  interface ZrmlSwapsUnexpectedError extends Enum {
    readonly isStorageOverflow: boolean;
    readonly type: 'StorageOverflow';
  }

  /** @name ZrmlPredictionMarketsError (513) */
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

  /** @name ZrmlStyxError (514) */
  interface ZrmlStyxError extends Enum {
    readonly isFundDoesNotHaveEnoughFreeBalance: boolean;
    readonly isHasAlreadyCrossed: boolean;
    readonly type: 'FundDoesNotHaveEnoughFreeBalance' | 'HasAlreadyCrossed';
  }

  /** @name ZrmlGlobalDisputesOutcomeInfo (519) */
  interface ZrmlGlobalDisputesOutcomeInfo extends Struct {
    readonly outcomeSum: u128;
    readonly possession: ZrmlGlobalDisputesPossession;
  }

  /** @name ZrmlGlobalDisputesPossession (521) */
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

  /** @name ZrmlGlobalDisputesGlobalDisputeInfo (522) */
  interface ZrmlGlobalDisputesGlobalDisputeInfo extends Struct {
    readonly winnerOutcome: ZeitgeistPrimitivesOutcomeReport;
    readonly outcomeInfo: ZrmlGlobalDisputesOutcomeInfo;
    readonly status: ZrmlGlobalDisputesGdStatus;
  }

  /** @name ZrmlGlobalDisputesGdStatus (523) */
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

  /** @name ZrmlGlobalDisputesError (524) */
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

  /** @name ZrmlNeoSwapsPool (525) */
  interface ZrmlNeoSwapsPool extends Struct {
    readonly accountId: AccountId32;
    readonly assets: Vec<ZeitgeistPrimitivesAsset>;
    readonly reserves: BTreeMap<ZeitgeistPrimitivesAsset, u128>;
    readonly collateral: ZeitgeistPrimitivesAsset;
    readonly liquidityParameter: u128;
    readonly liquiditySharesManager: ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree;
    readonly swapFee: u128;
    readonly poolType: ZrmlNeoSwapsPoolType;
  }

  /** @name ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree (526) */
  interface ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree extends Struct {
    readonly nodes: Vec<ZrmlNeoSwapsLiquidityTreeTypesNode>;
    readonly accountToIndex: BTreeMap<AccountId32, u32>;
    readonly abandonedNodes: Vec<u32>;
  }

  /** @name ZrmlNeoSwapsLiquidityTreeTypesNode (528) */
  interface ZrmlNeoSwapsLiquidityTreeTypesNode extends Struct {
    readonly account: Option<AccountId32>;
    readonly stake: u128;
    readonly fees: u128;
    readonly descendantStake: u128;
    readonly lazyFees: u128;
  }

  /** @name ZrmlNeoSwapsPoolType (537) */
  interface ZrmlNeoSwapsPoolType extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: u128;
    readonly isCombinatorial: boolean;
    readonly asCombinatorial: Vec<u128>;
    readonly type: 'Standard' | 'Combinatorial';
  }

  /** @name ZrmlNeoSwapsError (539) */
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
    readonly isInvalidPartition: boolean;
    readonly isInvalidAmountKeep: boolean;
    readonly isInvalidMarketCount: boolean;
    readonly isMaxSplitsExceeded: boolean;
    readonly isCollateralMismatch: boolean;
    readonly isInvalidPoolType: boolean;
    readonly type: 'AssetCountAboveMax' | 'AmountInAboveMax' | 'AmountOutBelowMin' | 'AssetNotFound' | 'DuplicatePool' | 'IncorrectAssetCount' | 'IncorrectVecLen' | 'InsufficientPoolShares' | 'LiquidityTooLow' | 'InvalidSpotPrices' | 'InvalidTradingMechanism' | 'MarketNotActive' | 'MathError' | 'NotAllowed' | 'NotImplemented' | 'NumericalLimits' | 'OutstandingFees' | 'PoolNotFound' | 'SpotPriceAboveMax' | 'SpotPriceBelowMin' | 'SwapFeeAboveMax' | 'SwapFeeBelowMin' | 'Unexpected' | 'ZeroAmount' | 'LiquidityTreeError' | 'MinRelativeLiquidityThresholdViolated' | 'NarrowingConversion' | 'InvalidPartition' | 'InvalidAmountKeep' | 'InvalidMarketCount' | 'MaxSplitsExceeded' | 'CollateralMismatch' | 'InvalidPoolType';
  }

  /** @name ZrmlNeoSwapsNumericalLimitsError (540) */
  interface ZrmlNeoSwapsNumericalLimitsError extends Enum {
    readonly isSpotPriceTooLow: boolean;
    readonly isSpotPriceSlippedTooLow: boolean;
    readonly isMaxAmountExceeded: boolean;
    readonly isMinAmountNotMet: boolean;
    readonly isSpotPriceSlippedTooHigh: boolean;
    readonly type: 'SpotPriceTooLow' | 'SpotPriceSlippedTooLow' | 'MaxAmountExceeded' | 'MinAmountNotMet' | 'SpotPriceSlippedTooHigh';
  }

  /** @name ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError (541) */
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

  /** @name ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError (542) */
  interface ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError extends Enum {
    readonly isNodes: boolean;
    readonly isAccountToIndex: boolean;
    readonly isAbandonedNodes: boolean;
    readonly type: 'Nodes' | 'AccountToIndex' | 'AbandonedNodes';
  }

  /** @name ZrmlOrderbookError (543) */
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

  /** @name ZrmlParimutuelError (544) */
  interface ZrmlParimutuelError extends Enum {
    readonly isNoRewardShareOutstanding: boolean;
    readonly isMarketIsNotActive: boolean;
    readonly isAmountBelowMinimumBetSize: boolean;
    readonly isNotParimutuelOutcome: boolean;
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
    readonly type: 'NoRewardShareOutstanding' | 'MarketIsNotActive' | 'AmountBelowMinimumBetSize' | 'NotParimutuelOutcome' | 'InvalidOutcomeAsset' | 'InvalidScoringRule' | 'InsufficientBalance' | 'MarketIsNotResolvedYet' | 'Unexpected' | 'NoResolvedOutcome' | 'RefundNotAllowed' | 'RefundableBalanceIsZero' | 'NoWinningShares' | 'NotCategorical' | 'NoRewardToDistribute' | 'InconsistentState';
  }

  /** @name ZrmlParimutuelInconsistentStateError (545) */
  interface ZrmlParimutuelInconsistentStateError extends Enum {
    readonly isInsufficientFundsInPotAccount: boolean;
    readonly isOutcomeIssuanceGreaterCollateral: boolean;
    readonly type: 'InsufficientFundsInPotAccount' | 'OutcomeIssuanceGreaterCollateral';
  }

  /** @name ZrmlHybridRouterError (546) */
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

  /** @name ZrmlCombinatorialTokensError (547) */
  interface ZrmlCombinatorialTokensError extends Enum {
    readonly isCollectionIdRetrievalFailed: boolean;
    readonly asCollectionIdRetrievalFailed: ZrmlCombinatorialTokensCollectionIdError;
    readonly isInvalidIndexSet: boolean;
    readonly isInvalidPartition: boolean;
    readonly isPayoutVectorNotFound: boolean;
    readonly isNoTokensFound: boolean;
    readonly isTokenHasNoValue: boolean;
    readonly isUnexpectedError: boolean;
    readonly type: 'CollectionIdRetrievalFailed' | 'InvalidIndexSet' | 'InvalidPartition' | 'PayoutVectorNotFound' | 'NoTokensFound' | 'TokenHasNoValue' | 'UnexpectedError';
  }

  /** @name ZrmlCombinatorialTokensCollectionIdError (548) */
  interface ZrmlCombinatorialTokensCollectionIdError extends Enum {
    readonly isInvalidParentCollectionId: boolean;
    readonly isEllipticCurvePointNotFoundWithFuel: boolean;
    readonly isEllipticCurvePointXToBytesConversionFailed: boolean;
    readonly type: 'InvalidParentCollectionId' | 'EllipticCurvePointNotFoundWithFuel' | 'EllipticCurvePointXToBytesConversionFailed';
  }

  /** @name ZrmlFutarchyError (551) */
  interface ZrmlFutarchyError extends Enum {
    readonly isCacheFull: boolean;
    readonly isDurationTooShort: boolean;
    readonly isUnexpectedStorageFailure: boolean;
    readonly type: 'CacheFull' | 'DurationTooShort' | 'UnexpectedStorageFailure';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (553) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (554) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (556) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name PolkadotPrimitivesV5UpgradeGoAhead (560) */
  interface PolkadotPrimitivesV5UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (561) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV5UpgradeGoAhead>;
  }

  /** @name PolkadotPrimitivesV5UpgradeRestriction (563) */
  interface PolkadotPrimitivesV5UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (564) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV5AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (565) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV5AbridgedHrmpChannel (568) */
  interface PolkadotPrimitivesV5AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV5AbridgedHostConfiguration (569) */
  interface PolkadotPrimitivesV5AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
  }

  /** @name PolkadotPrimitivesVstagingAsyncBackingParams (570) */
  interface PolkadotPrimitivesVstagingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (576) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (577) */
  interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name CumulusPalletParachainSystemError (578) */
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

  /** @name PalletParachainStakingParachainBondConfig (579) */
  interface PalletParachainStakingParachainBondConfig extends Struct {
    readonly account: AccountId32;
    readonly percent: Percent;
  }

  /** @name PalletParachainStakingRoundInfo (580) */
  interface PalletParachainStakingRoundInfo extends Struct {
    readonly current: u32;
    readonly first: u64;
    readonly length: u32;
  }

  /** @name PalletParachainStakingDelegator (581) */
  interface PalletParachainStakingDelegator extends Struct {
    readonly id: AccountId32;
    readonly delegations: PalletParachainStakingSetOrderedSet;
    readonly total: u128;
    readonly lessTotal: u128;
    readonly status: PalletParachainStakingDelegatorStatus;
  }

  /** @name PalletParachainStakingSetOrderedSet (582) */
  interface PalletParachainStakingSetOrderedSet extends Vec<PalletParachainStakingBond> {}

  /** @name PalletParachainStakingBond (583) */
  interface PalletParachainStakingBond extends Struct {
    readonly owner: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletParachainStakingDelegatorStatus (585) */
  interface PalletParachainStakingDelegatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Leaving';
  }

  /** @name PalletParachainStakingCandidateMetadata (586) */
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

  /** @name PalletParachainStakingCapacityStatus (587) */
  interface PalletParachainStakingCapacityStatus extends Enum {
    readonly isFull: boolean;
    readonly isEmpty: boolean;
    readonly isPartial: boolean;
    readonly type: 'Full' | 'Empty' | 'Partial';
  }

  /** @name PalletParachainStakingCandidateBondLessRequest (589) */
  interface PalletParachainStakingCandidateBondLessRequest extends Struct {
    readonly amount: u128;
    readonly whenExecutable: u32;
  }

  /** @name PalletParachainStakingCollatorStatus (590) */
  interface PalletParachainStakingCollatorStatus extends Enum {
    readonly isActive: boolean;
    readonly isIdle: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Idle' | 'Leaving';
  }

  /** @name PalletParachainStakingDelegationRequestsScheduledRequest (592) */
  interface PalletParachainStakingDelegationRequestsScheduledRequest extends Struct {
    readonly delegator: AccountId32;
    readonly whenExecutable: u32;
    readonly action: PalletParachainStakingDelegationRequestsDelegationAction;
  }

  /** @name PalletParachainStakingAutoCompoundAutoCompoundConfig (595) */
  interface PalletParachainStakingAutoCompoundAutoCompoundConfig extends Struct {
    readonly delegator: AccountId32;
    readonly value: Percent;
  }

  /** @name PalletParachainStakingDelegations (597) */
  interface PalletParachainStakingDelegations extends Struct {
    readonly delegations: Vec<PalletParachainStakingBond>;
    readonly total: u128;
  }

  /** @name PalletParachainStakingSetBoundedOrderedSet (599) */
  interface PalletParachainStakingSetBoundedOrderedSet extends Vec<PalletParachainStakingBond> {}

  /** @name PalletParachainStakingCollatorSnapshot (602) */
  interface PalletParachainStakingCollatorSnapshot extends Struct {
    readonly bond: u128;
    readonly delegations: Vec<PalletParachainStakingBondWithAutoCompound>;
    readonly total: u128;
  }

  /** @name PalletParachainStakingBondWithAutoCompound (604) */
  interface PalletParachainStakingBondWithAutoCompound extends Struct {
    readonly owner: AccountId32;
    readonly amount: u128;
    readonly autoCompound: Percent;
  }

  /** @name PalletParachainStakingDelayedPayout (605) */
  interface PalletParachainStakingDelayedPayout extends Struct {
    readonly roundIssuance: u128;
    readonly totalStakingReward: u128;
    readonly collatorCommission: Perbill;
  }

  /** @name PalletParachainStakingInflationInflationInfo (606) */
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

  /** @name PalletParachainStakingError (607) */
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
    readonly isTooLowCollatorCountToNotifyAsInactive: boolean;
    readonly isCannotBeNotifiedAsInactive: boolean;
    readonly isTooLowCandidateAutoCompoundingDelegationCountToLeaveCandidates: boolean;
    readonly isTooLowCandidateCountWeightHint: boolean;
    readonly isTooLowCandidateCountWeightHintGoOffline: boolean;
    readonly isCandidateLimitReached: boolean;
    readonly isCannotSetAboveMaxCandidates: boolean;
    readonly isRemovedCall: boolean;
    readonly isMarkingOfflineNotEnabled: boolean;
    readonly isCurrentRoundTooLow: boolean;
    readonly type: 'DelegatorDNE' | 'DelegatorDNEinTopNorBottom' | 'DelegatorDNEInDelegatorSet' | 'CandidateDNE' | 'DelegationDNE' | 'DelegatorExists' | 'CandidateExists' | 'CandidateBondBelowMin' | 'InsufficientBalance' | 'DelegatorBondBelowMin' | 'DelegationBelowMin' | 'AlreadyOffline' | 'AlreadyActive' | 'DelegatorAlreadyLeaving' | 'DelegatorNotLeaving' | 'DelegatorCannotLeaveYet' | 'CannotDelegateIfLeaving' | 'CandidateAlreadyLeaving' | 'CandidateNotLeaving' | 'CandidateCannotLeaveYet' | 'CannotGoOnlineIfLeaving' | 'ExceedMaxDelegationsPerDelegator' | 'AlreadyDelegatedCandidate' | 'InvalidSchedule' | 'CannotSetBelowMin' | 'RoundLengthMustBeGreaterThanTotalSelectedCollators' | 'NoWritingSameValue' | 'TooLowCandidateCountWeightHintJoinCandidates' | 'TooLowCandidateCountWeightHintCancelLeaveCandidates' | 'TooLowCandidateCountToLeaveCandidates' | 'TooLowDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToDelegate' | 'TooLowCandidateDelegationCountToLeaveCandidates' | 'TooLowDelegationCountToLeaveDelegators' | 'PendingCandidateRequestsDNE' | 'PendingCandidateRequestAlreadyExists' | 'PendingCandidateRequestNotDueYet' | 'PendingDelegationRequestDNE' | 'PendingDelegationRequestAlreadyExists' | 'PendingDelegationRequestNotDueYet' | 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull' | 'PendingDelegationRevoke' | 'TooLowDelegationCountToAutoCompound' | 'TooLowCandidateAutoCompoundingDelegationCountToAutoCompound' | 'TooLowCandidateAutoCompoundingDelegationCountToDelegate' | 'TooLowCollatorCountToNotifyAsInactive' | 'CannotBeNotifiedAsInactive' | 'TooLowCandidateAutoCompoundingDelegationCountToLeaveCandidates' | 'TooLowCandidateCountWeightHint' | 'TooLowCandidateCountWeightHintGoOffline' | 'CandidateLimitReached' | 'CannotSetAboveMaxCandidates' | 'RemovedCall' | 'MarkingOfflineNotEnabled' | 'CurrentRoundTooLow';
  }

  /** @name PalletAuthorInherentError (608) */
  interface PalletAuthorInherentError extends Enum {
    readonly isAuthorAlreadySet: boolean;
    readonly isNoAccountId: boolean;
    readonly isCannotBeAuthor: boolean;
    readonly type: 'AuthorAlreadySet' | 'NoAccountId' | 'CannotBeAuthor';
  }

  /** @name PalletAuthorMappingRegistrationInfo (609) */
  interface PalletAuthorMappingRegistrationInfo extends Struct {
    readonly account: AccountId32;
    readonly deposit: u128;
    readonly keys_: SessionKeysPrimitivesVrfVrfCryptoPublic;
  }

  /** @name PalletAuthorMappingError (610) */
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

  /** @name CumulusPalletXcmError (611) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (612) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (613) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (616) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletXcmQueryStatus (617) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: StagingXcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<StagingXcmVersionedMultiLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u64;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: StagingXcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: StagingXcmVersionedResponse;
      readonly at: u64;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name StagingXcmVersionedResponse (620) */
  interface StagingXcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: StagingXcmV2Response;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (626) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name StagingXcmVersionedAssetId (629) */
  interface StagingXcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (630) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: StagingXcmVersionedMultiLocation;
    readonly locker: StagingXcmVersionedMultiLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (637) */
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

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (639) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (640) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat (643) */
  interface PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (646) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (647) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (649) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueError (651) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name OrmlAssetRegistryModuleError (652) */
  interface OrmlAssetRegistryModuleError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isBadVersion: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isConflictingLocation: boolean;
    readonly isConflictingAssetId: boolean;
    readonly isInvalidAssetString: boolean;
    readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingLocation' | 'ConflictingAssetId' | 'InvalidAssetString';
  }

  /** @name OrmlUnknownTokensModuleError (655) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name OrmlXtokensModuleError (656) */
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

  /** @name PalletSudoError (657) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name SpRuntimeMultiSignature (659) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (660) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (662) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (663) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (666) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (667) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (668) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (669) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (672) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u64> {}

  /** @name FrameSystemExtensionsCheckWeight (673) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletAssetTxPaymentChargeAssetTxPayment (674) */
  interface PalletAssetTxPaymentChargeAssetTxPayment extends Struct {
    readonly tip: Compact<u128>;
    readonly assetId: Option<StagingXcmV3MultiLocation>;
  }

} // declare module
