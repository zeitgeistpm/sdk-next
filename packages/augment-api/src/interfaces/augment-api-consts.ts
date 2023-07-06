// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Option, U8aFixed, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, PalletContractsSchedule, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmV1MultiLocation, ZeitgeistPrimitivesAsset } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assetManager: {
      getNativeCurrencyId: ZeitgeistPrimitivesAsset & AugmentedConst<ApiType>;
    };
    authorized: {
      /**
       * The period, in which the authority can correct the outcome of a market.
       * This value must not be zero.
       **/
      correctionPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Identifier of this pallet
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
    };
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u64 & AugmentedConst<ApiType>;
      /**
       * Bounty duration in blocks.
       **/
      bountyUpdatePeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
    };
    contracts: {
      /**
       * The maximum number of contracts that can be pending for deletion.
       * 
       * When a contract is deleted by calling `seal_terminate` it becomes inaccessible
       * immediately, but the deletion of the storage items it has accumulated is performed
       * later. The contract is put into the deletion queue. This defines how many
       * contracts can be queued up at the same time. If that limit is reached `seal_terminate`
       * will fail. The action must be retried in a later block in that case.
       * 
       * The reasons for limiting the queue depth are:
       * 
       * 1. The queue is in storage in order to be persistent between blocks. We want to limit
       * the amount of storage that can be consumed.
       * 2. The queue is stored in a vector and needs to be decoded as a whole when reading
       * it at the end of each block. Longer queues take more weight to decode and hence
       * limit the amount of items that can be deleted per block.
       **/
      deletionQueueDepth: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of weight that can be consumed per block for lazy trie removal.
       * 
       * The amount of weight that is dedicated per block to work on the deletion queue. Larger
       * values allow more trie keys to be deleted in each block but reduce the amount of
       * weight that is left for transactions. See [`Self::DeletionQueueDepth`] for more
       * information about the deletion queue.
       **/
      deletionWeightLimit: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The amount of balance a caller has to pay for each byte of storage.
       * 
       * # Note
       * 
       * Changing this value for an existing chain might need a storage migration.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of balance a caller has to pay for each storage item.
       * 
       * # Note
       * 
       * Changing this value for an existing chain might need a storage migration.
       **/
      depositPerItem: u128 & AugmentedConst<ApiType>;
      /**
       * Cost schedule and limits.
       **/
      schedule: PalletContractsSchedule & AugmentedConst<ApiType>;
    };
    court: {
      /**
       * Block duration to cast a vote on an outcome.
       **/
      courtCaseDuration: u64 & AugmentedConst<ApiType>;
      /**
       * Identifier of this pallet
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Weight used to calculate the necessary staking amount to become a juror
       **/
      stakeWeight: u128 & AugmentedConst<ApiType>;
      /**
       * Slashed funds are send to the treasury
       **/
      treasuryPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum number of items which can be blacklisted.
       **/
      maxBlacklisted: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of deposits a public proposal may have at any time.
       **/
      maxDeposits: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u64 & AugmentedConst<ApiType>;
    };
    globalDisputes: {
      /**
       * The vote lock identifier.
       **/
      globalDisputeLockId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * The pallet identifier.
       **/
      globalDisputesPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The maximum numbers of distinct markets
       * on which one account can simultaneously vote on outcomes.
       * Otherwise users can just keep voting on different global disputes and never unlock.
       * When the user unlocks, the user has again `MaxGlobalDisputeVotes` number of votes.
       **/
      maxGlobalDisputeVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of owners
       * for a voting outcome for private API calls of `push_voting_outcome`.
       **/
      maxOwners: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum required amount to vote on an outcome.
       **/
      minOutcomeVoteAmount: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of keys to remove from a storage map.
       **/
      removeKeysLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The fee required to add a voting outcome.
       **/
      votingOutcomeFee: u128 & AugmentedConst<ApiType>;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
    };
    liquidityMining: {
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
    };
    marketCommons: {
      /**
       * The prefix used to calculate the prize pool accounts.
       **/
      predictionMarketsPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u16 & AugmentedConst<ApiType>;
    };
    parachainStaking: {
      /**
       * Number of rounds candidate requests to decrease self-bond must wait to be executable
       **/
      candidateBondLessDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegation less requests must wait before executable
       **/
      delegationBondLessDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that candidates remain bonded before exit request is executable
       **/
      leaveCandidatesDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegators remain bonded before exit request is executable
       **/
      leaveDelegatorsDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum bottom delegations (not counted) per candidate
       **/
      maxBottomDelegationsPerCandidate: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum delegations per delegator
       **/
      maxDelegationsPerDelegator: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum top delegations counted per candidate
       **/
      maxTopDelegationsPerCandidate: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum number of blocks per round
       **/
      minBlocksPerRound: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum stake required for any account to be a collator candidate
       **/
      minCandidateStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake required for any candidate to be in `SelectedCandidates` for the round
       **/
      minCollatorStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake for any registered on-chain account to delegate
       **/
      minDelegation: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake for any registered on-chain account to be a delegator
       **/
      minDelegatorStk: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum number of selected candidates every round
       **/
      minSelectedCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds that delegations remain bonded before revocation request is executable
       **/
      revokeDelegationDelay: u32 & AugmentedConst<ApiType>;
      /**
       * Number of rounds after which block authors are rewarded
       **/
      rewardPaymentDelay: u32 & AugmentedConst<ApiType>;
    };
    predictionMarkets: {
      /**
       * The base amount of currency that must be bonded for a market approved by the
       * advisory committee.
       **/
      advisoryBond: u128 & AugmentedConst<ApiType>;
      /**
       * The percentage of the advisory bond that gets slashed when a market is rejected.
       **/
      advisoryBondSlashPercentage: Percent & AugmentedConst<ApiType>;
      /**
       * The base amount of currency that must be bonded in order to create a dispute.
       **/
      disputeBond: u128 & AugmentedConst<ApiType>;
      /**
       * The additional amount of currency that must be bonded when creating a subsequent
       * dispute.
       **/
      disputeFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of categories available for categorical markets.
       **/
      maxCategories: u16 & AugmentedConst<ApiType>;
      /**
       * The maximum number of blocks allowed to be specified as dispute_duration
       * in create_market.
       **/
      maxDisputeDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum number of disputes allowed on any single market.
       **/
      maxDisputes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of bytes allowed as edit reason.
       **/
      maxEditReasonLen: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of blocks allowed to be specified as grace_period
       * in create_market.
       **/
      maxGracePeriod: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum allowed duration of a market from creation to market close in blocks.
       **/
      maxMarketLifetime: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum number of blocks allowed to be specified as oracle_duration
       * in create_market.
       **/
      maxOracleDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum length of reject reason string.
       **/
      maxRejectReasonLen: u32 & AugmentedConst<ApiType>;
      /**
       * The shortest period of collecting subsidy for a Rikiddo market.
       **/
      maxSubsidyPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * The minimum number of categories available for categorical markets.
       **/
      minCategories: u16 & AugmentedConst<ApiType>;
      /**
       * The minimum number of blocks allowed to be specified as dispute_duration
       * in create_market.
       **/
      minDisputeDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The minimum number of blocks allowed to be specified as oracle_duration
       * in create_market.
       **/
      minOracleDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The shortest period of collecting subsidy for a Rikiddo market.
       **/
      minSubsidyPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency that must be bonded to ensure the oracle reports
       * in a timely manner.
       **/
      oracleBond: u128 & AugmentedConst<ApiType>;
      outsiderBond: u128 & AugmentedConst<ApiType>;
      /**
       * The module identifier.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The base amount of currency that must be bonded for a permissionless market,
       * guaranteeing that it will resolve as anything but `Invalid`.
       **/
      validityBond: u128 & AugmentedConst<ApiType>;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
    };
    rikiddoSigmoidFeeMarketEma: {
      /**
       * Number of fractional decimal places for one unit of currency.
       **/
      balanceFractionalDecimals: u8 & AugmentedConst<ApiType>;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
    };
    simpleDisputes: {
      /**
       * The pallet identifier.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
    };
    swaps: {
      /**
       * The fee for exiting a pool.
       **/
      exitFee: u128 & AugmentedConst<ApiType>;
      maxAssets: u16 & AugmentedConst<ApiType>;
      maxInRatio: u128 & AugmentedConst<ApiType>;
      maxOutRatio: u128 & AugmentedConst<ApiType>;
      maxSwapFee: u128 & AugmentedConst<ApiType>;
      maxTotalWeight: u128 & AugmentedConst<ApiType>;
      maxWeight: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of assets in a pool.
       **/
      minAssets: u16 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of subsidy required to state transit a market into active state.
       * Must be greater than 0, but can be arbitrarily close to 0.
       **/
      minSubsidy: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of subsidy that each subsidy provider must contribute.
       **/
      minSubsidyPerAccount: u128 & AugmentedConst<ApiType>;
      minWeight: u128 & AugmentedConst<ApiType>;
      /**
       * The module identifier.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u64 & AugmentedConst<ApiType>;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
    };
    vesting: {
      maxVestingSchedules: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
    };
    xTokens: {
      /**
       * Base XCM weight.
       * 
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: u64 & AugmentedConst<ApiType>;
      /**
       * Self chain location.
       **/
      selfLocation: XcmV1MultiLocation & AugmentedConst<ApiType>;
    };
  } // AugmentedConsts
} // declare module
