// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Null, Option, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, FrameSupportDispatchPerDispatchClassWeight, FrameSupportPreimagesBounded, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, NimbusPrimitivesNimbusCryptoPublic, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensReserveData, OrmlTraitsAssetRegistryAssetMetadata, PalletAuthorMappingRegistrationInfo, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletBountiesBounty, PalletCollectiveVotes, PalletContractsStorageContractInfo, PalletContractsStorageDeletedContract, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletDemocracyReferendumInfo, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletMultisigMultisig, PalletParachainStakingAutoCompoundAutoCompoundConfig, PalletParachainStakingBond, PalletParachainStakingCandidateMetadata, PalletParachainStakingCollatorSnapshot, PalletParachainStakingDelayedPayout, PalletParachainStakingDelegationRequestsScheduledRequest, PalletParachainStakingDelegations, PalletParachainStakingDelegator, PalletParachainStakingInflationInflationInfo, PalletParachainStakingParachainBondConfig, PalletParachainStakingRoundInfo, PalletParachainStakingSetOrderedSet, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletSchedulerScheduled, PalletTransactionPaymentReleases, PalletTreasuryProposal, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmQueryStatus, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SpRuntimeDigest, SpTrieStorageProof, SpWeightsWeightV2Weight, XcmV1MultiLocation, XcmVersionedMultiLocation, ZeitgeistPrimitivesAsset, ZeitgeistPrimitivesMarket, ZeitgeistPrimitivesMarketAuthorityReport, ZeitgeistPrimitivesMarketMarketDispute, ZeitgeistPrimitivesMarketSubsidyUntil, ZeitgeistPrimitivesOutcomeReport, ZeitgeistPrimitivesPool, ZrmlCourtJuror, ZrmlGlobalDisputesOutcomeInfo, ZrmlGlobalDisputesWinnerInfo, ZrmlLiquidityMiningOwnedValuesParams, ZrmlRikiddoRikiddoSigmoidMV } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    advisoryCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]>;
    };
    advisoryCommitteeMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    assetManager: {
    };
    assetRegistry: {
      /**
       * The last processed asset id - used when assigning a sequential id.
       **/
      lastAssetId: AugmentedQuery<ApiType, () => Observable<ZeitgeistPrimitivesAsset>, []>;
      /**
       * Maps a multilocation to an asset id - useful when processing xcm
       * messages.
       **/
      locationToAssetId: AugmentedQuery<ApiType, (arg: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<Option<ZeitgeistPrimitivesAsset>>, [XcmV1MultiLocation]>;
      /**
       * The metadata of an asset, indexed by asset id.
       **/
      metadata: AugmentedQuery<ApiType, (arg: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcome: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Option<OrmlTraitsAssetRegistryAssetMetadata>>, [ZeitgeistPrimitivesAsset]>;
    };
    authorFilter: {
      /**
       * The number of active authors that will be eligible at each height.
       **/
      eligibleCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      eligibleRatio: AugmentedQuery<ApiType, () => Observable<Percent>, []>;
    };
    authorInherent: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * The highest slot that has been seen in the history of this chain.
       * This is a strictly-increasing value.
       **/
      highestSlotSeen: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    authorized: {
      /**
       * Maps the market id to the outcome reported by the authorized account.
       **/
      authorizedOutcomeReports: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ZeitgeistPrimitivesMarketAuthorityReport>>, [u128]>;
    };
    authorMapping: {
      /**
       * We maintain a mapping from the NimbusIds used in the consensus layer
       * to the AccountIds runtime.
       **/
      mappingWithDeposit: AugmentedQuery<ApiType, (arg: NimbusPrimitivesNimbusCryptoPublic | string | Uint8Array) => Observable<Option<PalletAuthorMappingRegistrationInfo>>, [NimbusPrimitivesNimbusCryptoPublic]>;
      /**
       * We maintain a reverse mapping from AccountIds to NimbusIDS
       **/
      nimbusLookup: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<U8aFixed>>, [AccountId32]>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []>;
    };
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletBountiesBounty>>, [u32]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]>;
    };
    contracts: {
      /**
       * A mapping between an original code hash and instrumented wasm code, ready for execution.
       **/
      codeStorage: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmPrefabWasmModule>>, [H256]>;
      /**
       * The code associated with a given account.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletContractsStorageContractInfo>>, [AccountId32]>;
      /**
       * Evicted contracts that await child trie deletion.
       * 
       * Child trie deletion is a heavy operation depending on the amount of storage items
       * stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
       **/
      deletionQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletContractsStorageDeletedContract>>, []>;
      /**
       * This is a **monotonic** counter incremented on contract instantiation.
       * 
       * This is used in order to generate unique trie ids for contracts.
       * The trie id of a new contract is calculated from hash(account_id, nonce).
       * The nonce is required because otherwise the following sequence would lead to
       * a possible collision of storage:
       * 
       * 1. Create a new contract.
       * 2. Terminate the contract.
       * 3. Immediately recreate the contract with the same account_id.
       * 
       * This is bad because the contents of a trie are deleted lazily and there might be
       * storage of the old instantiation still in it when the new contract is created. Please
       * note that we can't replace the counter by the block number because the sequence above
       * can happen in the same block. We also can't keep the account counter in memory only
       * because storage is the only way to communicate across different extrinsics in the
       * same block.
       * 
       * # Note
       * 
       * Do not use it to determine the number of contracts. It won't be decremented if
       * a contract is destroyed.
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * A mapping between an original code hash and its owner information.
       **/
      ownerInfoOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmOwnerInfo>>, [H256]>;
      /**
       * A mapping from an original code hash to the original code, untouched by instrumentation.
       **/
      pristineCode: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]>;
    };
    councilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    court: {
      /**
       * Counter for the related counted storage map
       **/
      counterForJurors: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Accounts that stake funds to decide outcomes.
       **/
      jurors: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ZrmlCourtJuror>>, [AccountId32]>;
      /**
       * An extra layer of pseudo randomness.
       **/
      jurorsSelectionNonce: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Selected jurors that should vote a market outcome until a certain block number
       **/
      requestedJurors: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u64>>, [u128, AccountId32]>;
      /**
       * Votes of market outcomes for disputes
       * 
       * Stores the vote block number and the submitted outcome.
       **/
      votes: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[u64, ZeitgeistPrimitivesOutcomeReport]>>>, [u128, AccountId32]>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u64, Vec<AccountId32>]>>>, [H256]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>, [u32]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold]>>>, []>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, FrameSupportPreimagesBounded, AccountId32]>>>, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>, [u32]>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [AccountId32]>;
    };
    dmpQueue: {
      /**
       * The configuration.
       **/
      configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []>;
      /**
       * The overweight messages.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>, [u64]>;
      /**
       * The page index.
       **/
      pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []>;
      /**
       * The queue pages.
       **/
      pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [u32]>;
    };
    globalDisputes: {
      /**
       * All highest lock information (vote id, outcome index and locked balance)
       * for a particular voter.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<ITuple<[u128, u128]>>>, [AccountId32]>;
      /**
       * Maps the market id to the outcome and providing information about the outcome.
       **/
      outcomes: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: ZeitgeistPrimitivesOutcomeReport | { Categorical: any } | { Scalar: any } | string | Uint8Array) => Observable<Option<ZrmlGlobalDisputesOutcomeInfo>>, [u128, ZeitgeistPrimitivesOutcomeReport]>;
      /**
       * Maps the market id to all information
       * about the winner outcome and if the global dispute is finished.
       **/
      winners: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ZrmlGlobalDisputesWinnerInfo>>, [u128]>;
    };
    identity: {
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [AccountId32]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [AccountId32]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>, [AccountId32]>;
    };
    liquidityMining: {
      /**
       * Shares bought in the current block being constructed. Automatically *erased* after each finalized block.
       **/
      blockBoughtShares: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u128>, [u128, AccountId32]>;
      /**
       * Shares sold in the current block being constructed. Automatically *erased* after each finalized block.
       **/
      blockSoldShares: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u128>, [u128, AccountId32]>;
      /**
       * Owned balances (not shares) that are going to be distributed as incentives. Automatically
       * *updated* after each finalized block.
       **/
      ownedValues: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<ZrmlLiquidityMiningOwnedValuesParams>, [u128, AccountId32]>;
      /**
       * Per block distribution. How much each block will distribute across bought shares.
       **/
      perBlockIncentive: AugmentedQuery<ApiType, () => Observable<u128>, []>;
    };
    marketCommons: {
      /**
       * The number of markets that have been created (including removed markets) and the next
       * identifier for a created market.
       **/
      marketCounter: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * Maps a market id to a related pool id. It is up to the caller to keep and sync valid
       * existent markets with valid existent pools.
       **/
      marketPool: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [u128]>;
      /**
       * Holds all markets
       **/
      markets: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ZeitgeistPrimitivesMarket>>, [u128]>;
    };
    multisig: {
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    parachainStaking: {
      /**
       * Snapshot of collator delegation stake at the start of the round
       **/
      atStake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletParachainStakingCollatorSnapshot>, [u32, AccountId32]>;
      /**
       * Stores auto-compounding configuration per collator.
       **/
      autoCompoundingDelegations: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletParachainStakingAutoCompoundAutoCompoundConfig>>, [AccountId32]>;
      /**
       * Points for each collator per round
       **/
      awardedPts: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u32>, [u32, AccountId32]>;
      /**
       * Bottom delegations for collator candidate
       **/
      bottomDelegations: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletParachainStakingDelegations>>, [AccountId32]>;
      /**
       * Get collator candidate info associated with an account if account is candidate else None
       **/
      candidateInfo: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletParachainStakingCandidateMetadata>>, [AccountId32]>;
      /**
       * The pool of collator candidates, each with their total backing stake
       **/
      candidatePool: AugmentedQuery<ApiType, () => Observable<Vec<PalletParachainStakingBond>>, []>;
      /**
       * Commission percent taken off of rewards for all collators
       **/
      collatorCommission: AugmentedQuery<ApiType, () => Observable<Perbill>, []>;
      /**
       * Delayed payouts
       **/
      delayedPayouts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletParachainStakingDelayedPayout>>, [u32]>;
      /**
       * Stores outstanding delegation requests per collator.
       **/
      delegationScheduledRequests: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletParachainStakingDelegationRequestsScheduledRequest>>, [AccountId32]>;
      /**
       * Get delegator state associated with an account if account is delegating else None
       **/
      delegatorState: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletParachainStakingDelegator>>, [AccountId32]>;
      /**
       * Inflation configuration
       **/
      inflationConfig: AugmentedQuery<ApiType, () => Observable<PalletParachainStakingInflationInflationInfo>, []>;
      /**
       * Parachain bond config info { account, percent_of_inflation }
       **/
      parachainBondInfo: AugmentedQuery<ApiType, () => Observable<PalletParachainStakingParachainBondConfig>, []>;
      /**
       * Total points awarded to collators for block production in the round
       **/
      points: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]>;
      /**
       * Current round index and next round scheduled transition
       **/
      round: AugmentedQuery<ApiType, () => Observable<PalletParachainStakingRoundInfo>, []>;
      /**
       * The collator candidates selected for the current round
       **/
      selectedCandidates: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * Total counted stake for selected candidates in the round
       **/
      staked: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]>;
      /**
       * Top delegations for collator candidate
       **/
      topDelegations: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletParachainStakingDelegations>>, [AccountId32]>;
      /**
       * Total capital locked by this staking pallet
       **/
      total: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * The total candidates selected every round
       **/
      totalSelected: AugmentedQuery<ApiType, () => Observable<u32>, []>;
    };
    parachainSystem: {
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The next authorized upgrade, if there is one.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []>;
      /**
       * A custom head data that should be returned as result of `validate_block`.
       * 
       * See [`Pallet::set_custom_validation_head_data`] for more information.
       **/
      customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2AbridgedHostConfiguration>>, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []>;
      /**
       * The relay chain block number associated with the last parachain block.
       **/
      lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Validation code that is set by the parachain and is to be communicated to collator and
       * consequently the relay-chain.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []>;
      /**
       * In case of a scheduled upgrade, this storage field contains the validation code to be applied.
       * 
       * As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
       * which will result the next block process with the new validation code. This concludes the upgrade process.
       * 
       * [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The state proof for the last relay parent block.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []>;
      /**
       * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
       * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
       * candidate will be invalid.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2UpgradeRestriction>>, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       * This value is expected to be set only once per block and it's never stored
       * in the trie.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV2PersistedValidationData>>, []>;
    };
    polkadotXcm: {
      /**
       * The existing asset traps.
       * 
       * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
       * times this pair has been trapped (usually just 1 if it exists at all).
       **/
      assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]>;
      /**
       * The current migration's stage, if any.
       **/
      currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []>;
      /**
       * The ongoing queries.
       **/
      queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]>;
      /**
       * The latest available query index.
       **/
      queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Default version to encode XCM when latest version of destination is unknown. If `None`,
       * then the destinations whose XCM version is unknown are considered unreachable.
       **/
      safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * The Latest versions that we know various locations support.
       **/
      supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<u32>>, [u32, XcmVersionedMultiLocation]>;
      /**
       * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
       * the `u32` counter is the number of times that a send to the destination has been attempted,
       * which is used as a prioritization.
       **/
      versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedMultiLocation, u32]>>>, []>;
      /**
       * All locations that we have requested version notifications from.
       **/
      versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedMultiLocation]>;
      /**
       * The target locations that are subscribed to our version changes, as well as the most recent
       * of our versions we informed them of.
       **/
      versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedMultiLocation | { V0: any } | { V1: any } | string | Uint8Array) => Observable<Option<ITuple<[u64, u64, u32]>>>, [u32, XcmVersionedMultiLocation]>;
    };
    predictionMarkets: {
      /**
       * For each market, this holds the dispute information for each dispute that's
       * been issued.
       **/
      disputes: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Vec<ZeitgeistPrimitivesMarketMarketDispute>>, [u128]>;
      /**
       * The last time frame that was checked for markets to close.
       **/
      lastTimeFrame: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * Contains market_ids for which advisor has requested edit.
       * Value for given market_id represents the reason for the edit.
       **/
      marketIdsForEdit: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u128]>;
      /**
       * A mapping of market identifiers to the block their market ends on.
       **/
      marketIdsPerCloseBlock: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<u128>>, [u64]>;
      /**
       * A mapping of market identifiers to the time frame their market ends in.
       **/
      marketIdsPerCloseTimeFrame: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<u128>>, [u64]>;
      /**
       * A mapping of market identifiers to the block they were disputed at.
       * A market only ends up here if it was disputed.
       **/
      marketIdsPerDisputeBlock: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<u128>>, [u64]>;
      marketIdsPerOpenBlock: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<u128>>, [u64]>;
      marketIdsPerOpenTimeFrame: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<u128>>, [u64]>;
      /**
       * A mapping of market identifiers to the block that they were reported on.
       **/
      marketIdsPerReportBlock: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<u128>>, [u64]>;
      /**
       * Contains a list of all markets that are currently collecting subsidy and the deadline.
       **/
      marketsCollectingSubsidy: AugmentedQuery<ApiType, () => Observable<Vec<ZeitgeistPrimitivesMarketSubsidyUntil>>, []>;
    };
    preimage: {
      preimageFor: AugmentedQuery<ApiType, (arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<Bytes>>, [ITuple<[H256, u32]>]>;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [H256]>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
    };
    rikiddoSigmoidFeeMarketEma: {
      /**
       * Storage that maps pool ids to Rikiddo instances.
       **/
      rikiddoPerPool: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ZrmlRikiddoRikiddoSigmoidMV>>, [u128]>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>, [u64]>;
      incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u64>>, []>;
      /**
       * Lookup from a name to the block number and index of the task.
       * 
       * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
       * identities.
       **/
      lookup: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u64, u32]>>>, [U8aFixed]>;
    };
    simpleDisputes: {
    };
    styx: {
      /**
       * An extra layer of pseudo randomness.
       **/
      burnAmount: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      /**
       * Keep track of crossings. Accounts are only able to cross once.
       **/
      crossings: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Null>>, [AccountId32]>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    swaps: {
      nextPoolId: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      pools: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<ZeitgeistPrimitivesPool>>, [u128]>;
      poolsCachedForArbitrage: AugmentedQuery<ApiType, (arg: u128 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u128]>;
      subsidyProviders: AugmentedQuery<ApiType, (arg1: u128 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [u128, AccountId32]>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<H256>, [u64]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u64, u32]>>>, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]>;
    };
    technicalCommitteeMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcome: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, ZeitgeistPrimitivesAsset]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcome: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, ZeitgeistPrimitivesAsset]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcome: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<Vec<OrmlTokensReserveData>>, [AccountId32, ZeitgeistPrimitivesAsset]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcome: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | string | Uint8Array) => Observable<u128>, [ZeitgeistPrimitivesAsset]>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]>;
    };
    unknownTokens: {
      /**
       * Abstract fungible balances under a given location and a abstract
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, Bytes]>;
      /**
       * Concrete fungible balances under a given location and a concrete
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, arg2: XcmV1MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<u128>, [XcmV1MultiLocation, XcmV1MultiLocation]>;
    };
    utility: {
    };
    vesting: {
      /**
       * Storage version of the pallet.
       * 
       * New networks start with latest version, as determined by the genesis build.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletVestingReleases>, []>;
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<PalletVestingVestingInfo>>>, [AccountId32]>;
    };
    xcmpQueue: {
      /**
       * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
       **/
      inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u32]>;
      /**
       * Status of the inbound XCMP channels.
       **/
      inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueInboundChannelDetails>>, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []>;
      /**
       * The messages that exceeded max individual message weight budget.
       * 
       * These message stay in this storage map until they are manually dispatched via
       * `service_overweight`.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32, Bytes]>>>, [u64]>;
      /**
       * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
       * available free overweight index.
       **/
      overweightCount: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []>;
      /**
       * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
       **/
      queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
    };
    xTokens: {
    };
  } // AugmentedQueries
} // declare module
