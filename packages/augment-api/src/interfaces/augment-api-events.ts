// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, Perbill, Percent, Weight } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportScheduleLookupError, FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, NimbusPrimitivesNimbusCryptoPublic, OrmlTraitsAssetRegistryAssetMetadata, PalletDemocracyVoteAccountVote, PalletDemocracyVoteThreshold, PalletMultisigTimepoint, PalletParachainStakingDelegationRequestsCancelledScheduledRequest, PalletParachainStakingDelegatorAdded, SessionKeysPrimitivesVrfVrfCryptoPublic, SpRuntimeDispatchError, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetMultiAssets, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation, ZeitgeistPrimitivesAsset, ZeitgeistPrimitivesMarket, ZeitgeistPrimitivesMarketMarketDispute, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketReport, ZeitgeistPrimitivesOutcomeReport, ZeitgeistPrimitivesPool, ZeitgeistPrimitivesProxyType, ZrmlCourtJuror, ZrmlSwapsEventsCommonPoolEventParams, ZrmlSwapsEventsPoolAssetEvent, ZrmlSwapsEventsPoolAssetsEvent, ZrmlSwapsEventsSwapEvent } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    advisoryCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
    };
    advisoryCommitteeMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
    };
    assetRegistry: {
      RegisteredAsset: AugmentedEvent<ApiType, [assetId: ZeitgeistPrimitivesAsset, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: ZeitgeistPrimitivesAsset, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      UpdatedAsset: AugmentedEvent<ApiType, [assetId: ZeitgeistPrimitivesAsset, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: ZeitgeistPrimitivesAsset, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
    };
    authorFilter: {
      /**
       * The amount of eligible authors for the filter to select has been changed.
       **/
      EligibleUpdated: AugmentedEvent<ApiType, [u32]>;
    };
    authorized: {
    };
    authorMapping: {
      /**
       * A NimbusId has been registered and mapped to an AccountId.
       **/
      KeysRegistered: AugmentedEvent<ApiType, [nimbusId: NimbusPrimitivesNimbusCryptoPublic, accountId: AccountId32, keys_: SessionKeysPrimitivesVrfVrfCryptoPublic], { nimbusId: NimbusPrimitivesNimbusCryptoPublic, accountId: AccountId32, keys_: SessionKeysPrimitivesVrfVrfCryptoPublic }>;
      /**
       * An NimbusId has been de-registered, and its AccountId mapping removed.
       **/
      KeysRemoved: AugmentedEvent<ApiType, [nimbusId: NimbusPrimitivesNimbusCryptoPublic, accountId: AccountId32, keys_: SessionKeysPrimitivesVrfVrfCryptoPublic], { nimbusId: NimbusPrimitivesNimbusCryptoPublic, accountId: AccountId32, keys_: SessionKeysPrimitivesVrfVrfCryptoPublic }>;
      /**
       * An NimbusId has been registered, replacing a previous registration and its mapping.
       **/
      KeysRotated: AugmentedEvent<ApiType, [newNimbusId: NimbusPrimitivesNimbusCryptoPublic, accountId: AccountId32, newKeys: SessionKeysPrimitivesVrfVrfCryptoPublic], { newNimbusId: NimbusPrimitivesNimbusCryptoPublic, accountId: AccountId32, newKeys: SessionKeysPrimitivesVrfVrfCryptoPublic }>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
    };
    councilMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
    };
    court: {
      ExitedJuror: AugmentedEvent<ApiType, [AccountId32, ZrmlCourtJuror]>;
      JoinedJuror: AugmentedEvent<ApiType, [AccountId32, ZrmlCourtJuror]>;
    };
    crowdloan: {
      /**
       * When initializing the reward vec an already initialized account was found
       **/
      InitializedAccountWithNotEnoughContribution: AugmentedEvent<ApiType, [AccountId32, Option<AccountId32>, u128]>;
      /**
       * When initializing the reward vec an already initialized account was found
       **/
      InitializedAlreadyInitializedAccount: AugmentedEvent<ApiType, [AccountId32, Option<AccountId32>, u128]>;
      /**
       * The initial payment of InitializationPayment % was paid
       **/
      InitialPaymentMade: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Someone has proven they made a contribution and associated a native identity with it.
       * Data is the relay account,  native account and the total amount of _rewards_ that will be paid
       **/
      NativeIdentityAssociated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * A contributor has updated the reward address.
       **/
      RewardAddressUpdated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * A contributor has claimed some rewards.
       * Data is the account getting paid and the amount of rewards paid.
       **/
      RewardsPaid: AugmentedEvent<ApiType, [AccountId32, u128]>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV2TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * A proposal has been enacted.
       **/
      Executed: AugmentedEvent<ApiType, [refIndex: u32, result: Result<Null, SpRuntimeDispatchError>], { refIndex: u32, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       **/
      PreimageInvalid: AugmentedEvent<ApiType, [proposalHash: H256, refIndex: u32], { proposalHash: H256, refIndex: u32 }>;
      /**
       * A proposal could not be executed because its preimage was missing.
       **/
      PreimageMissing: AugmentedEvent<ApiType, [proposalHash: H256, refIndex: u32], { proposalHash: H256, refIndex: u32 }>;
      /**
       * A proposal's preimage was noted, and the deposit taken.
       **/
      PreimageNoted: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32, deposit: u128], { proposalHash: H256, who: AccountId32, deposit: u128 }>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       **/
      PreimageReaped: AugmentedEvent<ApiType, [proposalHash: H256, provider: AccountId32, deposit: u128, reaper: AccountId32], { proposalHash: H256, provider: AccountId32, deposit: u128, reaper: AccountId32 }>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       **/
      PreimageUsed: AugmentedEvent<ApiType, [proposalHash: H256, provider: AccountId32, deposit: u128], { proposalHash: H256, provider: AccountId32, deposit: u128 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has secconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128, depositors: Vec<AccountId32>], { proposalIndex: u32, deposit: u128, depositors: Vec<AccountId32> }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u64], { who: AccountId32, proposalHash: H256, until: u64 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [messageId: U8aFixed, outcome: XcmV2TraitsOutcome], { messageId: U8aFixed, outcome: XcmV2TraitsOutcome }>;
      /**
       * Downward message is invalid XCM.
       **/
      InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [messageId: U8aFixed, overweightIndex: u64, requiredWeight: Weight], { messageId: U8aFixed, overweightIndex: u64, requiredWeight: Weight }>;
      /**
       * Downward message from the overweight queue was executed.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [overweightIndex: u64, weightUsed: Weight], { overweightIndex: u64, weightUsed: Weight }>;
      /**
       * Downward message is unsupported version of XCM.
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The weight limit for handling downward messages was reached.
       **/
      WeightExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed, remainingWeight: Weight, requiredWeight: Weight], { messageId: U8aFixed, remainingWeight: Weight, requiredWeight: Weight }>;
    };
    globalDisputes: {
      /**
       * A new voting outcome has been added.
       **/
      AddedVotingOutcome: AugmentedEvent<ApiType, [marketId: u128, owner: AccountId32, outcome: ZeitgeistPrimitivesOutcomeReport], { marketId: u128, owner: AccountId32, outcome: ZeitgeistPrimitivesOutcomeReport }>;
      /**
       * The winner of the global dispute system is determined.
       **/
      GlobalDisputeWinnerDetermined: AugmentedEvent<ApiType, [marketId: u128], { marketId: u128 }>;
      /**
       * The outcome owner has been rewarded.
       **/
      OutcomeOwnersRewarded: AugmentedEvent<ApiType, [marketId: u128, owners: Vec<AccountId32>], { marketId: u128, owners: Vec<AccountId32> }>;
      /**
       * No funds could be spent as reward to the outcome owner(s).
       **/
      OutcomeOwnersRewardedWithNoFunds: AugmentedEvent<ApiType, [marketId: u128], { marketId: u128 }>;
      /**
       * The outcomes storage item is fully cleaned.
       **/
      OutcomesFullyCleaned: AugmentedEvent<ApiType, [marketId: u128], { marketId: u128 }>;
      /**
       * The outcomes storage item is partially cleaned.
       **/
      OutcomesPartiallyCleaned: AugmentedEvent<ApiType, [marketId: u128], { marketId: u128 }>;
      /**
       * A vote happened on an outcome.
       **/
      VotedOnOutcome: AugmentedEvent<ApiType, [voter: AccountId32, marketId: u128, outcome: ZeitgeistPrimitivesOutcomeReport, voteAmount: u128], { voter: AccountId32, marketId: u128, outcome: ZeitgeistPrimitivesOutcomeReport, voteAmount: u128 }>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
    };
    liquidityMining: {
      /**
       * The number of markets that received incentives in a block
       **/
      AddedIncentives: AugmentedEvent<ApiType, [u64]>;
      /**
       * The total amount of incentives distributed to accounts along side the number
       * of accounts that received these incentives.
       **/
      DistributedIncentives: AugmentedEvent<ApiType, [u128, u64]>;
      /**
       * The number of markets that subtracted incentives in a block
       **/
      SubtractedIncentives: AugmentedEvent<ApiType, [u64]>;
    };
    multiSig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
    };
    parachainStaking: {
      /**
       * Auto-compounding reward percent was set for a delegation.
       **/
      AutoCompoundSet: AugmentedEvent<ApiType, [candidate: AccountId32, delegator: AccountId32, value: Percent], { candidate: AccountId32, delegator: AccountId32, value: Percent }>;
      /**
       * Set blocks per round
       **/
      BlocksPerRoundSet: AugmentedEvent<ApiType, [currentRound: u32, firstBlock: u64, old: u32, new_: u32, newPerRoundInflationMin: Perbill, newPerRoundInflationIdeal: Perbill, newPerRoundInflationMax: Perbill], { currentRound: u32, firstBlock: u64, old: u32, new_: u32, newPerRoundInflationMin: Perbill, newPerRoundInflationIdeal: Perbill, newPerRoundInflationMax: Perbill }>;
      /**
       * Cancelled request to decrease candidate's bond.
       **/
      CancelledCandidateBondLess: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128, executeRound: u32], { candidate: AccountId32, amount: u128, executeRound: u32 }>;
      /**
       * Cancelled request to leave the set of candidates.
       **/
      CancelledCandidateExit: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Cancelled request to change an existing delegation.
       **/
      CancelledDelegationRequest: AugmentedEvent<ApiType, [delegator: AccountId32, cancelledRequest: PalletParachainStakingDelegationRequestsCancelledScheduledRequest, collator: AccountId32], { delegator: AccountId32, cancelledRequest: PalletParachainStakingDelegationRequestsCancelledScheduledRequest, collator: AccountId32 }>;
      /**
       * Candidate rejoins the set of collator candidates.
       **/
      CandidateBackOnline: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Candidate has decreased a self bond.
       **/
      CandidateBondedLess: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128, newBond: u128], { candidate: AccountId32, amount: u128, newBond: u128 }>;
      /**
       * Candidate has increased a self bond.
       **/
      CandidateBondedMore: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128, newTotalBond: u128], { candidate: AccountId32, amount: u128, newTotalBond: u128 }>;
      /**
       * Candidate requested to decrease a self bond.
       **/
      CandidateBondLessRequested: AugmentedEvent<ApiType, [candidate: AccountId32, amountToDecrease: u128, executeRound: u32], { candidate: AccountId32, amountToDecrease: u128, executeRound: u32 }>;
      /**
       * Candidate has left the set of candidates.
       **/
      CandidateLeft: AugmentedEvent<ApiType, [exCandidate: AccountId32, unlockedAmount: u128, newTotalAmtLocked: u128], { exCandidate: AccountId32, unlockedAmount: u128, newTotalAmtLocked: u128 }>;
      /**
       * Candidate has requested to leave the set of candidates.
       **/
      CandidateScheduledExit: AugmentedEvent<ApiType, [exitAllowedRound: u32, candidate: AccountId32, scheduledExit: u32], { exitAllowedRound: u32, candidate: AccountId32, scheduledExit: u32 }>;
      /**
       * Candidate temporarily leave the set of collator candidates without unbonding.
       **/
      CandidateWentOffline: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Candidate selected for collators. Total Exposed Amount includes all delegations.
       **/
      CollatorChosen: AugmentedEvent<ApiType, [round: u32, collatorAccount: AccountId32, totalExposedAmount: u128], { round: u32, collatorAccount: AccountId32, totalExposedAmount: u128 }>;
      /**
       * Set collator commission to this value.
       **/
      CollatorCommissionSet: AugmentedEvent<ApiType, [old: Perbill, new_: Perbill], { old: Perbill, new_: Perbill }>;
      /**
       * Compounded a portion of rewards towards the delegation.
       **/
      Compounded: AugmentedEvent<ApiType, [candidate: AccountId32, delegator: AccountId32, amount: u128], { candidate: AccountId32, delegator: AccountId32, amount: u128 }>;
      /**
       * New delegation (increase of the existing one).
       **/
      Delegation: AugmentedEvent<ApiType, [delegator: AccountId32, lockedAmount: u128, candidate: AccountId32, delegatorPosition: PalletParachainStakingDelegatorAdded, autoCompound: Percent], { delegator: AccountId32, lockedAmount: u128, candidate: AccountId32, delegatorPosition: PalletParachainStakingDelegatorAdded, autoCompound: Percent }>;
      DelegationDecreased: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool], { delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool }>;
      /**
       * Delegator requested to decrease a bond for the collator candidate.
       **/
      DelegationDecreaseScheduled: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, amountToDecrease: u128, executeRound: u32], { delegator: AccountId32, candidate: AccountId32, amountToDecrease: u128, executeRound: u32 }>;
      DelegationIncreased: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool], { delegator: AccountId32, candidate: AccountId32, amount: u128, inTop: bool }>;
      /**
       * Delegation kicked.
       **/
      DelegationKicked: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128], { delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128 }>;
      /**
       * Delegator requested to revoke delegation.
       **/
      DelegationRevocationScheduled: AugmentedEvent<ApiType, [round: u32, delegator: AccountId32, candidate: AccountId32, scheduledExit: u32], { round: u32, delegator: AccountId32, candidate: AccountId32, scheduledExit: u32 }>;
      /**
       * Delegation revoked.
       **/
      DelegationRevoked: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128], { delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128 }>;
      /**
       * Cancelled a pending request to exit the set of delegators.
       **/
      DelegatorExitCancelled: AugmentedEvent<ApiType, [delegator: AccountId32], { delegator: AccountId32 }>;
      /**
       * Delegator requested to leave the set of delegators.
       **/
      DelegatorExitScheduled: AugmentedEvent<ApiType, [round: u32, delegator: AccountId32, scheduledExit: u32], { round: u32, delegator: AccountId32, scheduledExit: u32 }>;
      /**
       * Delegator has left the set of delegators.
       **/
      DelegatorLeft: AugmentedEvent<ApiType, [delegator: AccountId32, unstakedAmount: u128], { delegator: AccountId32, unstakedAmount: u128 }>;
      /**
       * Delegation from candidate state has been remove.
       **/
      DelegatorLeftCandidate: AugmentedEvent<ApiType, [delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128, totalCandidateStaked: u128], { delegator: AccountId32, candidate: AccountId32, unstakedAmount: u128, totalCandidateStaked: u128 }>;
      /**
       * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
       **/
      InflationSet: AugmentedEvent<ApiType, [annualMin: Perbill, annualIdeal: Perbill, annualMax: Perbill, roundMin: Perbill, roundIdeal: Perbill, roundMax: Perbill], { annualMin: Perbill, annualIdeal: Perbill, annualMax: Perbill, roundMin: Perbill, roundIdeal: Perbill, roundMax: Perbill }>;
      /**
       * Account joined the set of collator candidates.
       **/
      JoinedCollatorCandidates: AugmentedEvent<ApiType, [account: AccountId32, amountLocked: u128, newTotalAmtLocked: u128], { account: AccountId32, amountLocked: u128, newTotalAmtLocked: u128 }>;
      /**
       * Started new round.
       **/
      NewRound: AugmentedEvent<ApiType, [startingBlock: u64, round: u32, selectedCollatorsNumber: u32, totalBalance: u128], { startingBlock: u64, round: u32, selectedCollatorsNumber: u32, totalBalance: u128 }>;
      /**
       * Account (re)set for parachain bond treasury.
       **/
      ParachainBondAccountSet: AugmentedEvent<ApiType, [old: AccountId32, new_: AccountId32], { old: AccountId32, new_: AccountId32 }>;
      /**
       * Percent of inflation reserved for parachain bond (re)set.
       **/
      ParachainBondReservePercentSet: AugmentedEvent<ApiType, [old: Percent, new_: Percent], { old: Percent, new_: Percent }>;
      /**
       * Transferred to account which holds funds reserved for parachain bond.
       **/
      ReservedForParachainBond: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * Paid the account (delegator or collator) the balance as liquid rewards.
       **/
      Rewarded: AugmentedEvent<ApiType, [account: AccountId32, rewards: u128], { account: AccountId32, rewards: u128 }>;
      /**
       * Staking expectations set.
       **/
      StakeExpectationsSet: AugmentedEvent<ApiType, [expectMin: u128, expectIdeal: u128, expectMax: u128], { expectMin: u128, expectIdeal: u128, expectMax: u128 }>;
      /**
       * Set total selected candidates to this value.
       **/
      TotalSelectedSet: AugmentedEvent<ApiType, [old: u32, new_: u32], { old: u32, new_: u32 }>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: Weight, dmqHead: H256], { weightUsed: Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
    };
    polkadotXcm: {
      /**
       * Some assets have been placed in an asset trap.
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Execution of an XCM message was attempted.
       * 
       * \[ outcome \]
       **/
      Attempted: AugmentedEvent<ApiType, [XcmV2TraitsOutcome]>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected location \]
       **/
      InvalidResponder: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       * 
       * \[ id, pallet index, call index \]
       **/
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered notification could
       * not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       * 
       * \[ id, pallet index, call index, actual weight, max budgeted weight \]
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, Weight, Weight]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       * 
       * \[ location, query ID \]
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       * 
       * \[ location, query ID, error \]
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64, XcmV2TraitsError]>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       * 
       * \[ id, response \]
       **/
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV2Response]>;
      /**
       * Received query response has been read and removed.
       * 
       * \[ id \]
       **/
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       * 
       * \[ origin, destination, message \]
       **/
      Sent: AugmentedEvent<ApiType, [XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       * 
       * \[ location, XCM version \]
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       * 
       * \[ origin location, id \]
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV1MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * \[ destination, result \]
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [XcmV1MultiLocation, u32]>;
    };
    predictionMarkets: {
      /**
       * Custom addition block initialization logic wasn't successful
       **/
      BadOnInitialize: AugmentedEvent<ApiType, []>;
      /**
       * A complete set of assets has been bought \[market_id, amount_per_asset, buyer\]
       **/
      BoughtCompleteSet: AugmentedEvent<ApiType, [u128, u128, AccountId32]>;
      /**
       * The global dispute was started. \[market_id\]
       **/
      GlobalDisputeStarted: AugmentedEvent<ApiType, [u128]>;
      /**
       * A market has been approved \[market_id, new_market_status\]
       **/
      MarketApproved: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesMarketMarketStatus]>;
      /**
       * A market has been closed \[market_id\]
       **/
      MarketClosed: AugmentedEvent<ApiType, [u128]>;
      /**
       * A market has been created \[market_id, market_account, market\]
       **/
      MarketCreated: AugmentedEvent<ApiType, [u128, AccountId32, ZeitgeistPrimitivesMarket]>;
      /**
       * A market has been destroyed. \[market_id\]
       **/
      MarketDestroyed: AugmentedEvent<ApiType, [u128]>;
      /**
       * A market has been disputed \[market_id, new_market_status, new_outcome\]
       **/
      MarketDisputed: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketMarketDispute]>;
      /**
       * A proposed market has been edited by the market creator \[market_id\]
       **/
      MarketEdited: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesMarket]>;
      /**
       * An advised market has ended before it was approved or rejected. \[market_id\]
       **/
      MarketExpired: AugmentedEvent<ApiType, [u128]>;
      /**
       * A market was discarded after failing to gather enough subsidy.
       * \[market_id, new_market_status\]
       **/
      MarketInsufficientSubsidy: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesMarketMarketStatus]>;
      /**
       * A pending market has been rejected as invalid with a reason. \[market_id, reject_reason\]
       **/
      MarketRejected: AugmentedEvent<ApiType, [u128, Bytes]>;
      /**
       * A market has been reported on \[market_id, new_market_status, reported_outcome\]
       **/
      MarketReported: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketReport]>;
      /**
       * A proposed market has been requested edit by advisor. \[market_id, edit_reason\]
       **/
      MarketRequestedEdit: AugmentedEvent<ApiType, [u128, Bytes]>;
      /**
       * A market has been resolved \[market_id, new_market_status, real_outcome\]
       **/
      MarketResolved: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesOutcomeReport]>;
      /**
       * A market was started after gathering enough subsidy. \[market_id, new_market_status\]
       **/
      MarketStartedWithSubsidy: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesMarketMarketStatus]>;
      /**
       * A complete set of assets has been sold \[market_id, amount_per_asset, seller\]
       **/
      SoldCompleteSet: AugmentedEvent<ApiType, [u128, u128, AccountId32]>;
      /**
       * An amount of winning outcomes have been redeemed
       * \[market_id, currency_id, amount_redeemed, payout, who\]
       **/
      TokensRedeemed: AugmentedEvent<ApiType, [u128, ZeitgeistPrimitivesAsset, u128, u128, AccountId32]>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [anonymous: AccountId32, who: AccountId32, proxyType: ZeitgeistPrimitivesProxyType, disambiguationIndex: u16], { anonymous: AccountId32, who: AccountId32, proxyType: ZeitgeistPrimitivesProxyType, disambiguationIndex: u16 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: ZeitgeistPrimitivesProxyType, delay: u64], { delegator: AccountId32, delegatee: AccountId32, proxyType: ZeitgeistPrimitivesProxyType, delay: u64 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: ZeitgeistPrimitivesProxyType, delay: u64], { delegator: AccountId32, delegatee: AccountId32, proxyType: ZeitgeistPrimitivesProxyType, delay: u64 }>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallLookupFailed: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<Bytes>, error: FrameSupportScheduleLookupError], { task: ITuple<[u64, u32]>, id: Option<Bytes>, error: FrameSupportScheduleLookupError }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u64, index: u32], { when: u64, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u64, u32]>, id: Option<Bytes>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u64, u32]>, id: Option<Bytes>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u64, index: u32], { when: u64, index: u32 }>;
    };
    simpleDisputes: {
    };
    styx: {
      /**
       * A account crossed and claimed their right to create their avatar.
       **/
      AccountCrossed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * The crossing fee was changed.
       **/
      CrossingFeeChanged: AugmentedEvent<ApiType, [u128]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
    };
    swaps: {
      /**
       * Buy-burn arbitrage was executed on a CPMM pool. \[pool_id, amount\]
       **/
      ArbitrageBuyBurn: AugmentedEvent<ApiType, [u128, u128]>;
      /**
       * Mint-sell arbitrage was executed on a CPMM pool. \[pool_id, amount\]
       **/
      ArbitrageMintSell: AugmentedEvent<ApiType, [u128, u128]>;
      /**
       * Arbitrage was skipped on a CPMM pool. \[pool_id\]
       **/
      ArbitrageSkipped: AugmentedEvent<ApiType, [u128]>;
      /**
       * Share holder rewards were distributed. \[pool_id, num_accounts_rewarded, amount\]
       **/
      DistributeShareHolderRewards: AugmentedEvent<ApiType, [u128, u64, u128]>;
      /**
       * A pool was opened. \[pool_id\]
       **/
      PoolActive: AugmentedEvent<ApiType, [u128]>;
      /**
       * A pool was cleaned up. \[pool_id\]
       **/
      PoolCleanedUp: AugmentedEvent<ApiType, [u128]>;
      /**
       * A pool was closed. \[pool_id\]
       **/
      PoolClosed: AugmentedEvent<ApiType, [u128]>;
      /**
       * A new pool has been created. \[CommonPoolEventParams, pool, pool_amount, pool_account\]
       **/
      PoolCreate: AugmentedEvent<ApiType, [ZrmlSwapsEventsCommonPoolEventParams, ZeitgeistPrimitivesPool, u128, AccountId32]>;
      /**
       * Pool was manually destroyed. \[pool_id\]
       **/
      PoolDestroyed: AugmentedEvent<ApiType, [u128]>;
      /**
       * Pool destroyed due to insufficient subsidy. \[pool_id, \[(provider, subsidy), ...\]\]
       **/
      PoolDestroyedInSubsidyPhase: AugmentedEvent<ApiType, [u128, Vec<ITuple<[AccountId32, u128]>>]>;
      /**
       * Someone has exited a pool. \[PoolAssetsEvent\]
       **/
      PoolExit: AugmentedEvent<ApiType, [ZrmlSwapsEventsPoolAssetsEvent]>;
      /**
       * Someone has (partially) exited a pool by removing subsidy. \[asset, bound, pool_id, who, amount\]
       **/
      PoolExitSubsidy: AugmentedEvent<ApiType, [ZeitgeistPrimitivesAsset, u128, ZrmlSwapsEventsCommonPoolEventParams, u128]>;
      /**
       * Exits a pool given an exact amount of an asset. \[PoolAssetEvent\]
       **/
      PoolExitWithExactAssetAmount: AugmentedEvent<ApiType, [ZrmlSwapsEventsPoolAssetEvent]>;
      /**
       * Exits a pool given an exact pool's amount. \[PoolAssetEvent\]
       **/
      PoolExitWithExactPoolAmount: AugmentedEvent<ApiType, [ZrmlSwapsEventsPoolAssetEvent]>;
      /**
       * Someone has joined a pool. \[PoolAssetsEvent\]
       **/
      PoolJoin: AugmentedEvent<ApiType, [ZrmlSwapsEventsPoolAssetsEvent]>;
      /**
       * Someone has joined a pool by providing subsidy. \[asset, amount, pool_id, who\]
       **/
      PoolJoinSubsidy: AugmentedEvent<ApiType, [ZeitgeistPrimitivesAsset, u128, ZrmlSwapsEventsCommonPoolEventParams]>;
      /**
       * Joins a pool given an exact amount of an asset. \[PoolAssetEvent\]
       **/
      PoolJoinWithExactAssetAmount: AugmentedEvent<ApiType, [ZrmlSwapsEventsPoolAssetEvent]>;
      /**
       * Joins a pool given an exact pool's amount. \[PoolAssetEvent\]
       **/
      PoolJoinWithExactPoolAmount: AugmentedEvent<ApiType, [ZrmlSwapsEventsPoolAssetEvent]>;
      /**
       * Total subsidy collected for a pool. \[pool_id, \[(provider, subsidy), ...\], total_subsidy\]
       **/
      SubsidyCollected: AugmentedEvent<ApiType, [u128, Vec<ITuple<[AccountId32, u128]>>, u128]>;
      /**
       * An exact amount of an asset is entering the pool. \[SwapEvent\]
       **/
      SwapExactAmountIn: AugmentedEvent<ApiType, [ZrmlSwapsEventsSwapEvent]>;
      /**
       * An exact amount of an asset is leaving the pool. \[SwapEvent\]
       **/
      SwapExactAmountOut: AugmentedEvent<ApiType, [ZrmlSwapsEventsSwapEvent]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportWeightsDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportWeightsDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportWeightsDispatchInfo], { dispatchInfo: FrameSupportWeightsDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
    };
    technicalCommitteeMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
    };
    tokens: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, free: u128, reserved: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Deposited some balance into an account
       **/
      Deposited: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128 }>;
      /**
       * Some locked funds were unlocked
       **/
      LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: ZeitgeistPrimitivesAsset, who: AccountId32], { lockId: U8aFixed, currencyId: ZeitgeistPrimitivesAsset, who: AccountId32 }>;
      /**
       * Some funds are locked
       **/
      LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128], { lockId: U8aFixed, currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128 }>;
      /**
       * Some reserved balance was repatriated (moved from reserved to
       * another account).
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: ZeitgeistPrimitivesAsset, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some balances were slashed (e.g. due to mis-behavior)
       **/
      Slashed: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, freeAmount: u128, reservedAmount: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, freeAmount: u128, reservedAmount: u128 }>;
      /**
       * The total issuance of an currency has been set
       **/
      TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, from: AccountId32, to: AccountId32, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128 }>;
      /**
       * Some balances were withdrawn (e.g. pay for transaction fee)
       **/
      Withdrawn: AugmentedEvent<ApiType, [currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128], { currencyId: ZeitgeistPrimitivesAsset, who: AccountId32, amount: u128 }>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
    };
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
    };
    unknownTokens: {
      /**
       * Deposit success.
       **/
      Deposited: AugmentedEvent<ApiType, [asset: XcmV1MultiAsset, who: XcmV1MultiLocation], { asset: XcmV1MultiAsset, who: XcmV1MultiLocation }>;
      /**
       * Withdraw success.
       **/
      Withdrawn: AugmentedEvent<ApiType, [asset: XcmV1MultiAsset, who: XcmV1MultiLocation], { asset: XcmV1MultiAsset, who: XcmV1MultiLocation }>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       **/
      VestingUpdated: AugmentedEvent<ApiType, [account: AccountId32, unvested: u128], { account: AccountId32, unvested: u128 }>;
    };
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [messageHash: Option<H256>, error: XcmV2TraitsError, weight: Weight], { messageHash: Option<H256>, error: XcmV2TraitsError, weight: Weight }>;
      /**
       * An XCM exceeded the individual message weight budget.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [sender: u32, sentAt: u32, index: u64, required: Weight], { sender: u32, sentAt: u32, index: u64, required: Weight }>;
      /**
       * An XCM from the overweight queue was executed with the given actual weight used.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [index: u64, used: Weight], { index: u64, used: Weight }>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [messageHash: Option<H256>, weight: Weight], { messageHash: Option<H256>, weight: Weight }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<H256>], { messageHash: Option<H256> }>;
    };
    xTokens: {
      /**
       * Transferred `MultiAsset` with fee.
       **/
      TransferredMultiAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: XcmV1MultiassetMultiAssets, fee: XcmV1MultiAsset, dest: XcmV1MultiLocation], { sender: AccountId32, assets: XcmV1MultiassetMultiAssets, fee: XcmV1MultiAsset, dest: XcmV1MultiLocation }>;
    };
  } // AugmentedEvents
} // declare module
