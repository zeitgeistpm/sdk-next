// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    advisoryCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    advisoryCommitteeMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
    };
    assetManager: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Deposit result is not expected
       **/
      DepositFailed: AugmentedError<ApiType>;
    };
    assetRegistry: {
      /**
       * Asset was not found.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * The version of the `VersionedMultiLocation` value used is not able
       * to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this asset id.
       **/
      ConflictingAssetId: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this location.
       **/
      ConflictingLocation: AugmentedError<ApiType>;
      /**
       * The asset id is invalid.
       **/
      InvalidAssetId: AugmentedError<ApiType>;
    };
    authorInherent: {
      /**
       * Author already set in block.
       **/
      AuthorAlreadySet: AugmentedError<ApiType>;
      /**
       * The author in the inherent is not an eligible author.
       **/
      CannotBeAuthor: AugmentedError<ApiType>;
      /**
       * No AccountId was found to be associated with this author
       **/
      NoAccountId: AugmentedError<ApiType>;
    };
    authorized: {
      /**
       * The market unexpectedly has the incorrect dispute mechanism.
       **/
      MarketDoesNotHaveDisputeMechanismAuthorized: AugmentedError<ApiType>;
      /**
       * An account attempts to submit a report to an undisputed market.
       **/
      MarketIsNotDisputed: AugmentedError<ApiType>;
      /**
       * Only one dispute is allowed.
       **/
      OnlyOneDisputeAllowed: AugmentedError<ApiType>;
      /**
       * The report does not match the market's type.
       **/
      OutcomeMismatch: AugmentedError<ApiType>;
    };
    authorMapping: {
      /**
       * The NimbusId in question is already associated and cannot be overwritten
       **/
      AlreadyAssociated: AugmentedError<ApiType>;
      /**
       * The association can't be cleared because it is not found.
       **/
      AssociationNotFound: AugmentedError<ApiType>;
      /**
       * This account cannot set an author because it cannon afford the security deposit
       **/
      CannotAffordSecurityDeposit: AugmentedError<ApiType>;
      /**
       * Failed to decode T::Keys for `set_keys`
       **/
      DecodeKeysFailed: AugmentedError<ApiType>;
      /**
       * Failed to decode NimbusId for `set_keys`
       **/
      DecodeNimbusFailed: AugmentedError<ApiType>;
      /**
       * The association can't be cleared because it belongs to another account.
       **/
      NotYourAssociation: AugmentedError<ApiType>;
      /**
       * No existing NimbusId can be found for the account
       **/
      OldAuthorIdNotFound: AugmentedError<ApiType>;
      /**
       * Keys have wrong size
       **/
      WrongKeySize: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    bounties: {
      /**
       * The bounty cannot be closed because it has active child bounties.
       **/
      HasActiveChildBounty: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * Too many approvals are already queued.
       **/
      TooManyQueued: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
    };
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    councilMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
    };
    court: {
      /**
       * It is not possible to insert a Juror that is already stored
       **/
      JurorAlreadyExists: AugmentedError<ApiType>;
      /**
       * An account id does not exist on the jurors storage.
       **/
      JurorDoesNotExists: AugmentedError<ApiType>;
      /**
       * On dispute or resolution, someone tried to pass a non-court market type
       **/
      MarketDoesNotHaveCourtMechanism: AugmentedError<ApiType>;
      /**
       * No-one voted on an outcome to resolve a market
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Forbids voting of unknown accounts
       **/
      OnlyJurorsCanVote: AugmentedError<ApiType>;
    };
    crowdloan: {
      /**
       * User trying to associate a native identity with a relay chain identity for posterior
       * reward claiming provided an already associated relay chain identity
       **/
      AlreadyAssociated: AugmentedError<ApiType>;
      /**
       * Trying to introduce a batch that goes beyond the limits of the funds
       **/
      BatchBeyondFundPot: AugmentedError<ApiType>;
      /**
       * First claim already done
       **/
      FirstClaimAlreadyDone: AugmentedError<ApiType>;
      /**
       * User submitted an unsifficient number of proofs to change the reward address
       **/
      InsufficientNumberOfValidProofs: AugmentedError<ApiType>;
      /**
       * User trying to associate a native identity with a relay chain identity for posterior
       * reward claiming provided a wrong signature
       **/
      InvalidClaimSignature: AugmentedError<ApiType>;
      /**
       * User trying to claim the first free reward provided the wrong signature
       **/
      InvalidFreeClaimSignature: AugmentedError<ApiType>;
      /**
       * User trying to claim an award did not have an claim associated with it. This may mean
       * they did not contribute to the crowdloan, or they have not yet associated a native id
       * with their contribution
       **/
      NoAssociatedClaim: AugmentedError<ApiType>;
      /**
       * User provided a signature from a non-contributor relay account
       **/
      NonContributedAddressProvided: AugmentedError<ApiType>;
      /**
       * The contribution is not high enough to be eligible for rewards
       **/
      RewardNotHighEnough: AugmentedError<ApiType>;
      /**
       * User trying to claim rewards has already claimed all rewards associated with its
       * identity and contribution
       **/
      RewardsAlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Rewards should match funds of the pallet
       **/
      RewardsDoNotMatchFund: AugmentedError<ApiType>;
      /**
       * Reward vec has already been initialized
       **/
      RewardVecAlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Reward vec has not yet been fully initialized
       **/
      RewardVecNotFullyInitializedYet: AugmentedError<ApiType>;
      /**
       * Initialize_reward_vec received too many contributors
       **/
      TooManyContributors: AugmentedError<ApiType>;
      /**
       * Provided vesting period is not valid
       **/
      VestingPeriodNonValid: AugmentedError<ApiType>;
    };
    cumulusXcm: {
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Preimage already noted
       **/
      DuplicatePreimage: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Imminent
       **/
      Imminent: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Not imminent
       **/
      NotImminent: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Invalid preimage
       **/
      PreimageInvalid: AugmentedError<ApiType>;
      /**
       * Preimage not found
       **/
      PreimageMissing: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Too early
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
    };
    dmpQueue: {
      /**
       * The amount of weight given is possibly not enough for executing the message.
       **/
      OverLimit: AugmentedError<ApiType>;
      /**
       * The message index given is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
    };
    globalDisputes: {
      /**
       * Sender tried to vote with an amount below a defined minium.
       **/
      AmountTooLow: AugmentedError<ApiType>;
      /**
       * The global dispute period is already over and the winner is determined.
       **/
      GlobalDisputeAlreadyFinished: AugmentedError<ApiType>;
      /**
       * Sender does not have enough funds for the vote on an outcome.
       **/
      InsufficientAmount: AugmentedError<ApiType>;
      /**
       * The maximum amount of owners is reached.
       **/
      MaxOwnersReached: AugmentedError<ApiType>;
      /**
       * The maximum number of votes for this account is reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No global dispute present at the moment.
       **/
      NoGlobalDisputeStarted: AugmentedError<ApiType>;
      /**
       * The voting outcome has been already added.
       **/
      OutcomeAlreadyExists: AugmentedError<ApiType>;
      /**
       * The outcome specified is not present in the voting outcomes.
       **/
      OutcomeDoesNotExist: AugmentedError<ApiType>;
      /**
       * The outcomes are not fully cleaned yet.
       **/
      OutcomesNotFullyCleaned: AugmentedError<ApiType>;
      /**
       * The global dispute period is not over yet. The winner is not yet determined.
       **/
      UnfinishedGlobalDispute: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
    };
    liquidityMining: {
      /**
       * Pallet account does not have enough funds
       **/
      FundDoesNotHaveEnoughBalance: AugmentedError<ApiType>;
    };
    marketCommons: {
      /**
       * A market with the provided ID does not exist.
       **/
      MarketDoesNotExist: AugmentedError<ApiType>;
      /**
       * Market does not have an stored associated pool id.
       **/
      MarketPoolDoesNotExist: AugmentedError<ApiType>;
      /**
       * It is not possible to fetch the latest market ID when
       * no market has been created.
       **/
      NoMarketHasBeenCreated: AugmentedError<ApiType>;
      /**
       * Market does not have a report
       **/
      NoReport: AugmentedError<ApiType>;
      /**
       * There's a pool registered for this market already.
       **/
      PoolAlreadyExists: AugmentedError<ApiType>;
    };
    multiSig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
    };
    parachainStaking: {
      AlreadyActive: AugmentedError<ApiType>;
      AlreadyDelegatedCandidate: AugmentedError<ApiType>;
      AlreadyOffline: AugmentedError<ApiType>;
      CandidateAlreadyLeaving: AugmentedError<ApiType>;
      CandidateBondBelowMin: AugmentedError<ApiType>;
      CandidateCannotLeaveYet: AugmentedError<ApiType>;
      CandidateDNE: AugmentedError<ApiType>;
      CandidateExists: AugmentedError<ApiType>;
      CandidateNotLeaving: AugmentedError<ApiType>;
      CannotDelegateIfLeaving: AugmentedError<ApiType>;
      CannotDelegateLessThanOrEqualToLowestBottomWhenFull: AugmentedError<ApiType>;
      CannotGoOnlineIfLeaving: AugmentedError<ApiType>;
      CannotSetBelowMin: AugmentedError<ApiType>;
      DelegationBelowMin: AugmentedError<ApiType>;
      DelegationDNE: AugmentedError<ApiType>;
      DelegatorAlreadyLeaving: AugmentedError<ApiType>;
      DelegatorBondBelowMin: AugmentedError<ApiType>;
      DelegatorCannotLeaveYet: AugmentedError<ApiType>;
      DelegatorDNE: AugmentedError<ApiType>;
      DelegatorDNEInDelegatorSet: AugmentedError<ApiType>;
      DelegatorDNEinTopNorBottom: AugmentedError<ApiType>;
      DelegatorExists: AugmentedError<ApiType>;
      DelegatorNotLeaving: AugmentedError<ApiType>;
      ExceedMaxDelegationsPerDelegator: AugmentedError<ApiType>;
      InsufficientBalance: AugmentedError<ApiType>;
      InvalidSchedule: AugmentedError<ApiType>;
      NoWritingSameValue: AugmentedError<ApiType>;
      PendingCandidateRequestAlreadyExists: AugmentedError<ApiType>;
      PendingCandidateRequestNotDueYet: AugmentedError<ApiType>;
      PendingCandidateRequestsDNE: AugmentedError<ApiType>;
      PendingDelegationRequestAlreadyExists: AugmentedError<ApiType>;
      PendingDelegationRequestDNE: AugmentedError<ApiType>;
      PendingDelegationRequestNotDueYet: AugmentedError<ApiType>;
      PendingDelegationRevoke: AugmentedError<ApiType>;
      RoundLengthMustBeAtLeastTotalSelectedCollators: AugmentedError<ApiType>;
      TooLowCandidateAutoCompoundingDelegationCountToAutoCompound: AugmentedError<ApiType>;
      TooLowCandidateAutoCompoundingDelegationCountToDelegate: AugmentedError<ApiType>;
      TooLowCandidateCountToLeaveCandidates: AugmentedError<ApiType>;
      TooLowCandidateCountWeightHintCancelLeaveCandidates: AugmentedError<ApiType>;
      TooLowCandidateCountWeightHintJoinCandidates: AugmentedError<ApiType>;
      TooLowCandidateDelegationCountToDelegate: AugmentedError<ApiType>;
      TooLowCandidateDelegationCountToLeaveCandidates: AugmentedError<ApiType>;
      TooLowDelegationCountToAutoCompound: AugmentedError<ApiType>;
      TooLowDelegationCountToDelegate: AugmentedError<ApiType>;
      TooLowDelegationCountToLeaveDelegators: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message. Perhaps
       * a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
    };
    predictionMarkets: {
      /**
       * Someone is trying to call `dispute` with the same outcome that is currently
       * registered on-chain.
       **/
      CannotDisputeSameOutcome: AugmentedError<ApiType>;
      /**
       * Specified dispute_duration is greater than MaxDisputeDuration.
       **/
      DisputeDurationGreaterThanMaxDisputeDuration: AugmentedError<ApiType>;
      /**
       * Specified dispute_duration is smaller than MinDisputeDuration.
       **/
      DisputeDurationSmallerThanMinDisputeDuration: AugmentedError<ApiType>;
      /**
       * Only creator is able to edit the market.
       **/
      EditorNotCreator: AugmentedError<ApiType>;
      /**
       * EditReason's length greater than MaxEditReasonLen.
       **/
      EditReasonLengthExceedsMaxEditReasonLen: AugmentedError<ApiType>;
      /**
       * The start of the global dispute for this market happened already.
       **/
      GlobalDisputeAlreadyStarted: AugmentedError<ApiType>;
      /**
       * The global dispute resolution system is disabled.
       **/
      GlobalDisputesDisabled: AugmentedError<ApiType>;
      /**
       * Specified grace_period is greater than MaxGracePeriod.
       **/
      GracePeriodGreaterThanMaxGracePeriod: AugmentedError<ApiType>;
      /**
       * Market account does not have enough funds to pay out.
       **/
      InsufficientFundsInMarketAccount: AugmentedError<ApiType>;
      /**
       * Sender does not have enough share balance.
       **/
      InsufficientShareBalance: AugmentedError<ApiType>;
      /**
       * Provided base_asset is not allowed to be used as base_asset.
       **/
      InvalidBaseAsset: AugmentedError<ApiType>;
      /**
       * The action requires another market dispute mechanism.
       **/
      InvalidDisputeMechanism: AugmentedError<ApiType>;
      /**
       * Market period is faulty (too short, outside of limits)
       **/
      InvalidMarketPeriod: AugmentedError<ApiType>;
      /**
       * Catch-all error for invalid market status.
       **/
      InvalidMarketStatus: AugmentedError<ApiType>;
      /**
       * An invalid market type was found.
       **/
      InvalidMarketType: AugmentedError<ApiType>;
      /**
       * An invalid Hash was included in a multihash parameter.
       **/
      InvalidMultihash: AugmentedError<ApiType>;
      /**
       * The outcome range of the scalar market is invalid.
       **/
      InvalidOutcomeRange: AugmentedError<ApiType>;
      /**
       * An operation is requested that is unsupported for the given scoring rule.
       **/
      InvalidScoringRule: AugmentedError<ApiType>;
      /**
       * Market is already reported on.
       **/
      MarketAlreadyReported: AugmentedError<ApiType>;
      /**
       * The market duration is longer than allowed.
       **/
      MarketDurationTooLong: AugmentedError<ApiType>;
      /**
       * Market is not requested for edit.
       **/
      MarketEditNotRequested: AugmentedError<ApiType>;
      /**
       * Market edit request is already in progress.
       **/
      MarketEditRequestAlreadyInProgress: AugmentedError<ApiType>;
      /**
       * Market was expected to be active.
       **/
      MarketIsNotActive: AugmentedError<ApiType>;
      /**
       * Market was expected to be closed.
       **/
      MarketIsNotClosed: AugmentedError<ApiType>;
      /**
       * A market in subsidy collection phase was expected.
       **/
      MarketIsNotCollectingSubsidy: AugmentedError<ApiType>;
      /**
       * A disputed market was expected.
       **/
      MarketIsNotDisputed: AugmentedError<ApiType>;
      /**
       * A proposed market was expected.
       **/
      MarketIsNotProposed: AugmentedError<ApiType>;
      /**
       * A reported market was expected.
       **/
      MarketIsNotReported: AugmentedError<ApiType>;
      /**
       * A resolved market was expected.
       **/
      MarketIsNotResolved: AugmentedError<ApiType>;
      /**
       * The point in time when the market becomes active is too late.
       **/
      MarketStartTooLate: AugmentedError<ApiType>;
      /**
       * The point in time when the market becomes active is too soon.
       **/
      MarketStartTooSoon: AugmentedError<ApiType>;
      /**
       * The maximum number of disputes is needed for this operation.
       **/
      MaxDisputesNeeded: AugmentedError<ApiType>;
      /**
       * The maximum number of disputes has been reached.
       **/
      MaxDisputesReached: AugmentedError<ApiType>;
      /**
       * Tried to settle missing bond.
       **/
      MissingBond: AugmentedError<ApiType>;
      /**
       * Can not report before market.deadlines.grace_period is ended.
       **/
      NotAllowedToReportYet: AugmentedError<ApiType>;
      /**
       * Sender does not have enough balance to buy shares.
       **/
      NotEnoughBalance: AugmentedError<ApiType>;
      /**
       * The number of categories for a categorical market is too low.
       **/
      NotEnoughCategories: AugmentedError<ApiType>;
      /**
       * The user has no winning balance.
       **/
      NoWinningBalance: AugmentedError<ApiType>;
      /**
       * Specified oracle_duration is greater than MaxOracleDuration.
       **/
      OracleDurationGreaterThanMaxOracleDuration: AugmentedError<ApiType>;
      /**
       * Specified oracle_duration is smaller than MinOracleDuration.
       **/
      OracleDurationSmallerThanMinOracleDuration: AugmentedError<ApiType>;
      /**
       * Submitted outcome does not match market type.
       **/
      OutcomeMismatch: AugmentedError<ApiType>;
      /**
       * RejectReason's length greater than MaxRejectReasonLen.
       **/
      RejectReasonLengthExceedsMaxRejectReasonLen: AugmentedError<ApiType>;
      /**
       * The report is not coming from designated oracle.
       **/
      ReporterNotOracle: AugmentedError<ApiType>;
      /**
       * It was tried to append an item to storage beyond the boundaries.
       **/
      StorageOverflow: AugmentedError<ApiType>;
      /**
       * Too many categories for a categorical market.
       **/
      TooManyCategories: AugmentedError<ApiType>;
      /**
       * The post dispatch should never be None.
       **/
      UnexpectedNoneInPostInfo: AugmentedError<ApiType>;
      /**
       * A foreign asset in not registered in AssetRegistry.
       **/
      UnregisteredForeignAsset: AugmentedError<ApiType>;
      /**
       * The weights length has to be equal to the assets length.
       **/
      WeightsLenMustEqualAssetsLen: AugmentedError<ApiType>;
      /**
       * An amount was illegally specified as zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooLarge: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
    };
    rikiddoSigmoidFeeMarketEma: {
      /**
       * Conversion between the `Balance` and the internal Rikiddo core type failed.
       **/
      FixedConversionImpossible: AugmentedError<ApiType>;
      /**
       * Trying to create a Rikiddo instance for a `poolid` that already has a Rikiddo instance.
       **/
      RikiddoAlreadyExistsForPool: AugmentedError<ApiType>;
      /**
       * For a given `poolid`, no Rikiddo instance could be found.
       **/
      RikiddoNotFoundForPool: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
    };
    simpleDisputes: {
      /**
       * 1. Any resolution must either have a `Disputed` or `Reported` market status
       * 2. If status is `Disputed`, then at least one dispute must exist
       **/
      InvalidMarketStatus: AugmentedError<ApiType>;
      /**
       * On dispute or resolution, someone tried to pass a non-simple-disputes market type
       **/
      MarketDoesNotHaveSimpleDisputesMechanism: AugmentedError<ApiType>;
    };
    styx: {
      /**
       * Account does not have enough balance to cross.
       **/
      FundDoesNotHaveEnoughFreeBalance: AugmentedError<ApiType>;
      /**
       * Account has already crossed.
       **/
      HasAlreadyCrossed: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    swaps: {
      /**
       * The weight of an asset in a CPMM swap pool is greather than the upper weight cap.
       **/
      AboveMaximumWeight: AugmentedError<ApiType>;
      /**
       * The weight of an asset in a CPMM swap pool could not be found.
       **/
      AssetNotBound: AugmentedError<ApiType>;
      /**
       * The asset in question could not be found within the pool.
       **/
      AssetNotInPool: AugmentedError<ApiType>;
      /**
       * The spot price of an asset pair was greater than the specified limit.
       **/
      BadLimitPrice: AugmentedError<ApiType>;
      /**
       * The base asset of the swaps pool was None although a value was expected.
       **/
      BaseAssetNotFound: AugmentedError<ApiType>;
      /**
       * The weight of an asset in a CPMM swap pool is lower than the upper weight cap.
       **/
      BelowMinimumWeight: AugmentedError<ApiType>;
      /**
       * Some funds could not be transferred due to a too low balance.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Liquidity provided to new CPMM pool is less than `MinLiquidity`.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * The market was not started since the subsidy goal was not reached.
       **/
      InsufficientSubsidy: AugmentedError<ApiType>;
      /**
       * Could not create CPMM pool since no amount was specified.
       **/
      InvalidAmountArgument: AugmentedError<ApiType>;
      /**
       * Could not create CPMM pool since no fee was supplied.
       **/
      InvalidFeeArgument: AugmentedError<ApiType>;
      /**
       * Dispatch called on pool with invalid status.
       **/
      InvalidPoolStatus: AugmentedError<ApiType>;
      /**
       * A function that is only valid for pools with specific scoring rules was called for a
       * pool with another scoring rule.
       **/
      InvalidScoringRule: AugmentedError<ApiType>;
      /**
       * A function was called for a swaps pool that does not fulfill the state requirement.
       **/
      InvalidStateTransition: AugmentedError<ApiType>;
      /**
       * Subsidy amount is too small.
       **/
      InvalidSubsidyAmount: AugmentedError<ApiType>;
      /**
       * Could not create CPMM pool since no weights were supplied.
       **/
      InvalidWeightArgument: AugmentedError<ApiType>;
      /**
       * A transferal of funds into a swaps pool was above a threshhold specified by the sender.
       **/
      LimitIn: AugmentedError<ApiType>;
      /**
       * No limit was specified for a swap.
       **/
      LimitMissing: AugmentedError<ApiType>;
      /**
       * A transferal of funds out of a swaps pool was below a threshhold specified by the
       * receiver.
       **/
      LimitOut: AugmentedError<ApiType>;
      /**
       * The custom math library yielded an invalid result (most times unexpected zero value).
       **/
      MathApproximation: AugmentedError<ApiType>;
      /**
       * The proportion of an asset added into a pool in comparison to the amount
       * of that asset in the pool is above the threshhold specified by a constant.
       **/
      MaxInRatio: AugmentedError<ApiType>;
      /**
       * The proportion of an asset taken from a pool in comparison to the amount
       * of that asset in the pool is above the threshhold specified by a constant.
       **/
      MaxOutRatio: AugmentedError<ApiType>;
      /**
       * The total weight of all assets within a CPMM pool is above a treshhold specified
       * by a constant.
       **/
      MaxTotalWeight: AugmentedError<ApiType>;
      /**
       * It was tried to remove subsidy from a pool which does not have subsidy provided by
       * the address that tried to remove the subsidy.
       **/
      NoSubsidyProvided: AugmentedError<ApiType>;
      /**
       * The pool in question does not exist.
       **/
      PoolDoesNotExist: AugmentedError<ApiType>;
      /**
       * A pool balance dropped below the allowed minimum.
       **/
      PoolDrain: AugmentedError<ApiType>;
      /**
       * The pool in question is inactive.
       **/
      PoolIsNotActive: AugmentedError<ApiType>;
      /**
       * The CPMM pool in question does not have a fee, although it should.
       **/
      PoolMissingFee: AugmentedError<ApiType>;
      /**
       * The Rikiddo pool in question does not have subsidy, although it should.
       **/
      PoolMissingSubsidy: AugmentedError<ApiType>;
      /**
       * The CPPM pool in question does not have weights, although it should.
       **/
      PoolMissingWeight: AugmentedError<ApiType>;
      /**
       * Two vectors do not have the same length (usually CPMM pool assets and weights).
       **/
      ProvidedValuesLenMustEqualAssetsLen: AugmentedError<ApiType>;
      /**
       * Tried to create a pool with at least two identical assets.
       **/
      SomeIdenticalAssets: AugmentedError<ApiType>;
      /**
       * No swap fee information found for CPMM pool
       **/
      SwapFeeMissing: AugmentedError<ApiType>;
      /**
       * The swap fee is higher than the allowed maximum.
       **/
      SwapFeeTooHigh: AugmentedError<ApiType>;
      /**
       * Tried to create a pool that has less assets than the lower threshhold specified by
       * a constant.
       **/
      TooFewAssets: AugmentedError<ApiType>;
      /**
       * Tried to create a pool that has more assets than the upper threshhold specified by
       * a constant.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The pool does not support swapping the assets in question.
       **/
      UnsupportedTrade: AugmentedError<ApiType>;
      /**
       * The outcome asset specified as the winning asset was not found in the pool.
       **/
      WinningAssetNotFound: AugmentedError<ApiType>;
      /**
       * Some amount in a transaction equals zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
    };
    unknownTokens: {
      /**
       * The operation will cause balance to overflow.
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Unhandled asset.
       **/
      UnhandledAsset: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * The account already has `MaxVestingSchedules` count of schedules and thus
       * cannot add another one. Consider merging existing schedules in order to add another.
       **/
      AtMaxVestingSchedules: AugmentedError<ApiType>;
      /**
       * Failed to create a new schedule because some parameter was invalid.
       **/
      InvalidScheduleParams: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedError<ApiType>;
      /**
       * An index was out of bounds of the vesting schedules.
       **/
      ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad overweight index.
       **/
      BadOverweightIndex: AugmentedError<ApiType>;
      /**
       * Bad XCM data.
       **/
      BadXcm: AugmentedError<ApiType>;
      /**
       * Bad XCM origin.
       **/
      BadXcmOrigin: AugmentedError<ApiType>;
      /**
       * Failed to send XCM message.
       **/
      FailedToSend: AugmentedError<ApiType>;
      /**
       * Provided weight is possibly not enough to execute the message.
       **/
      WeightOverLimit: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Asset has no reserve location.
       **/
      AssetHasNoReserve: AugmentedError<ApiType>;
      /**
       * The specified index does not exist in a MultiAssets struct.
       **/
      AssetIndexNonExistent: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the
       * destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * We tried sending distinct asset and fee but they have different
       * reserve chains.
       **/
      DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
      /**
       * Fee is not enough.
       **/
      FeeNotEnough: AugmentedError<ApiType>;
      /**
       * Could not get ancestry of asset reserve location.
       **/
      InvalidAncestry: AugmentedError<ApiType>;
      /**
       * The MultiAsset is invalid.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Invalid transfer destination.
       **/
      InvalidDest: AugmentedError<ApiType>;
      /**
       * MinXcmFee not registered for certain reserve location
       **/
      MinXcmFeeNotDefined: AugmentedError<ApiType>;
      /**
       * Not cross-chain transfer.
       **/
      NotCrossChainTransfer: AugmentedError<ApiType>;
      /**
       * Currency is not cross-chain transferable.
       **/
      NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
      /**
       * Not supported MultiLocation
       **/
      NotSupportedMultiLocation: AugmentedError<ApiType>;
      /**
       * The number of assets to be sent is over the maximum.
       **/
      TooManyAssetsBeingSent: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      XcmExecutionFailed: AugmentedError<ApiType>;
      /**
       * The transfering asset amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * The fee is zero.
       **/
      ZeroFee: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
