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
       * Balance too low to send value.
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
    contracts: {
      /**
       * Code removal was denied because the code is still in use by at least one contract.
       **/
      CodeInUse: AugmentedError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      CodeNotFound: AugmentedError<ApiType>;
      /**
       * The contract's code was found to be invalid during validation or instrumentation.
       * 
       * The most likely cause of this is that an API was used which is not supported by the
       * node. This hapens if an older node is used with a new version of ink!. Try updating
       * your node to the newest available version.
       * 
       * A more detailed error can be found on the node console if debug messages are enabled
       * by supplying `-lruntime::contracts=debug`.
       **/
      CodeRejected: AugmentedError<ApiType>;
      /**
       * The code supplied to `instantiate_with_code` exceeds the limit specified in the
       * current schedule.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * No contract was found at the specified address.
       **/
      ContractNotFound: AugmentedError<ApiType>;
      /**
       * The contract ran to completion but decided to revert its storage changes.
       * Please note that this error is only returned from extrinsics. When called directly
       * or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
       * to determine whether a reversion has taken place.
       **/
      ContractReverted: AugmentedError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      ContractTrapped: AugmentedError<ApiType>;
      /**
       * The debug message specified to `seal_debug_message` does contain invalid UTF-8.
       **/
      DebugMessageInvalidUTF8: AugmentedError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      DecodingFailed: AugmentedError<ApiType>;
      /**
       * Removal of a contract failed because the deletion queue is full.
       * 
       * This can happen when calling `seal_terminate`.
       * The queue is filled by deleting contracts and emptied by a fixed amount each block.
       * Trying again during another block is the only way to resolve this issue.
       **/
      DeletionQueueFull: AugmentedError<ApiType>;
      /**
       * A contract with the same AccountId already exists.
       **/
      DuplicateContract: AugmentedError<ApiType>;
      /**
       * An indetermistic code was used in a context where this is not permitted.
       **/
      Indeterministic: AugmentedError<ApiType>;
      /**
       * `seal_call` forwarded this contracts input. It therefore is no longer available.
       **/
      InputForwarded: AugmentedError<ApiType>;
      /**
       * Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
       **/
      InvalidCallFlags: AugmentedError<ApiType>;
      /**
       * A new schedule must have a greater version than the current one.
       **/
      InvalidScheduleVersion: AugmentedError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      MaxCallDepthReached: AugmentedError<ApiType>;
      /**
       * The chain does not provide a chain extension. Calling the chain extension results
       * in this error. Note that this usually  shouldn't happen as deploying such contracts
       * is rejected.
       **/
      NoChainExtension: AugmentedError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      OutOfBounds: AugmentedError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      OutOfGas: AugmentedError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      OutputBufferTooSmall: AugmentedError<ApiType>;
      /**
       * The subject passed to `seal_random` exceeds the limit.
       **/
      RandomSubjectTooLong: AugmentedError<ApiType>;
      /**
       * A call tried to invoke a contract that is flagged as non-reentrant.
       **/
      ReentranceDenied: AugmentedError<ApiType>;
      /**
       * More storage was created than allowed by the storage deposit limit.
       **/
      StorageDepositLimitExhausted: AugmentedError<ApiType>;
      /**
       * Origin doesn't have enough balance to pay the required storage deposits.
       **/
      StorageDepositNotEnoughFunds: AugmentedError<ApiType>;
      /**
       * A contract self destructed in its constructor.
       * 
       * This can be triggered by a call to `seal_terminate`.
       **/
      TerminatedInConstructor: AugmentedError<ApiType>;
      /**
       * Termination of a contract is not allowed while the contract is already
       * on the call stack. Can be triggered by `seal_terminate`.
       **/
      TerminatedWhileReentrant: AugmentedError<ApiType>;
      /**
       * The amount of topics passed to `seal_deposit_events` exceeds the limit.
       **/
      TooManyTopics: AugmentedError<ApiType>;
      /**
       * Performing the requested transfer failed. Probably because there isn't enough
       * free balance in the sender's account.
       **/
      TransferFailed: AugmentedError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      ValueTooLarge: AugmentedError<ApiType>;
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
       * In order to exit the court the juror has to exit
       * the pool first with `prepare_exit_court`.
       **/
      AlreadyPreparedExit: AugmentedError<ApiType>;
      /**
       * After the first join of the court the amount has to be equal or higher than the current stake.
       * This is to ensure the slashable amount in active court rounds
       * is still smaller or equal to the stake.
       * It is also necessary to calculate the `unconsumed` stake properly.
       * Otherwise a juror could just reduce the probability to get selected whenever they want.
       * But this has to be done by `prepare_exit_court` and `exit_court`.
       * Additionally, the `join_court` and `delegate` extrinsics
       * use `extend_lock` and not `set_lock` or `remove_lock`.
       * This means those extrinsics are not meant to get out, but only to get into the court.
       **/
      AmountBelowLastJoin: AugmentedError<ApiType>;
      /**
       * The amount is too low to kick the lowest juror out of the stake-weighted pool.
       **/
      AmountBelowLowestJuror: AugmentedError<ApiType>;
      /**
       * The caller has not enough funds to join the court with the specified amount.
       **/
      AmountExceedsBalance: AugmentedError<ApiType>;
      /**
       * The callers balance is lower than the appeal bond.
       **/
      AppealBondExceedsBalance: AugmentedError<ApiType>;
      /**
       * The appealed vote item is not an outcome.
       **/
      AppealedVoteItemIsNoOutcome: AugmentedError<ApiType>;
      /**
       * The amount is below the minimum required stake.
       **/
      BelowMinJurorStake: AugmentedError<ApiType>;
      /**
       * A juror tried to denounce herself.
       **/
      CallerDenouncedItself: AugmentedError<ApiType>;
      /**
       * This operation requires the caller to be a juror or delegator.
       **/
      CallerIsNotACourtParticipant: AugmentedError<ApiType>;
      /**
       * The caller of this function is not part of the juror draws.
       **/
      CallerNotInSelectedDraws: AugmentedError<ApiType>;
      /**
       * The vote item and salt reveal do not match the commitment vote.
       **/
      CommitmentHashMismatch: AugmentedError<ApiType>;
      /**
       * The juror stakes of the court already got reassigned.
       **/
      CourtAlreadyReassigned: AugmentedError<ApiType>;
      /**
       * The court id to market id mapping was not found.
       **/
      CourtIdToMarketIdNotFound: AugmentedError<ApiType>;
      /**
       * The court is not in the closed state.
       **/
      CourtNotClosed: AugmentedError<ApiType>;
      /**
       * No court for this market id was found.
       **/
      CourtNotFound: AugmentedError<ApiType>;
      /**
       * This should not happen, because the juror account should only be once in a pool.
       **/
      CourtParticipantTwiceInPool: AugmentedError<ApiType>;
      /**
       * The set of delegations should contain only valid and active juror accounts.
       **/
      DelegatedToInvalidJuror: AugmentedError<ApiType>;
      /**
       * The set of delegations has to be distinct.
       **/
      IdenticalDelegationsNotAllowed: AugmentedError<ApiType>;
      /**
       * The vote item is not valid for this (binary) court.
       **/
      InvalidVoteItemForBinaryCourt: AugmentedError<ApiType>;
      /**
       * The vote item is not valid for this (outcome) court.
       **/
      InvalidVoteItemForOutcomeCourt: AugmentedError<ApiType>;
      /**
       * The caller of this extrinsic needs to be drawn or in the commitment vote state.
       **/
      InvalidVoteState: AugmentedError<ApiType>;
      /**
       * The juror decided to be a delegator.
       **/
      JurorDelegated: AugmentedError<ApiType>;
      /**
       * The juror was drawn but did not manage to commitmently vote within the court.
       **/
      JurorDidNotVote: AugmentedError<ApiType>;
      /**
       * An account id does not exist on the jurors storage.
       **/
      JurorDoesNotExist: AugmentedError<ApiType>;
      /**
       * The juror was not randomly selected for the court.
       **/
      JurorNotDrawn: AugmentedError<ApiType>;
      /**
       * On dispute or resolution, someone tried to pass a non-court market type.
       **/
      MarketDoesNotHaveCourtMechanism: AugmentedError<ApiType>;
      /**
       * The market id to court id mapping was not found.
       **/
      MarketIdToCourtIdNotFound: AugmentedError<ApiType>;
      /**
       * The market is not in a state where it can be disputed.
       **/
      MarketIsNotDisputed: AugmentedError<ApiType>;
      /**
       * The report of the market was not found.
       **/
      MarketReportNotFound: AugmentedError<ApiType>;
      /**
       * The maximum number of appeals has been reached.
       **/
      MaxAppealsReached: AugmentedError<ApiType>;
      /**
       * The maximum number of court ids is reached.
       **/
      MaxCourtIdReached: AugmentedError<ApiType>;
      /**
       * The maximum number of possible jurors has been reached.
       **/
      MaxCourtParticipantsReached: AugmentedError<ApiType>;
      /**
       * The maximum number of delegations is reached for this account.
       **/
      MaxDelegationsReached: AugmentedError<ApiType>;
      /**
       * The call to `delegate` is not valid if no delegations are provided.
       **/
      NoDelegations: AugmentedError<ApiType>;
      /**
       * There are not enough jurors in the pool.
       **/
      NotEnoughJurorsAndDelegatorsStake: AugmentedError<ApiType>;
      /**
       * This operation is only allowed in the aggregation period.
       **/
      NotInAggregationPeriod: AugmentedError<ApiType>;
      /**
       * This operation is only allowed in the appeal period.
       **/
      NotInAppealPeriod: AugmentedError<ApiType>;
      /**
       * This operation is only allowed in the voting period.
       **/
      NotInVotingPeriod: AugmentedError<ApiType>;
      /**
       * The outcome does not match the market outcomes.
       **/
      OutcomeMismatch: AugmentedError<ApiType>;
      /**
       * The juror should at least wait one inflation period after the funds can be unstaked.
       * Otherwise hopping in and out for inflation rewards is possible.
       **/
      PrematureExit: AugmentedError<ApiType>;
      /**
       * The `prepare_exit_at` field is not present.
       **/
      PrepareExitAtNotPresent: AugmentedError<ApiType>;
      /**
       * A delegation to the own account is not possible.
       **/
      SelfDelegationNotAllowed: AugmentedError<ApiType>;
      /**
       * The juror was already denounced.
       **/
      VoteAlreadyDenounced: AugmentedError<ApiType>;
      /**
       * The vote is not commitment.
       **/
      VoteAlreadyRevealed: AugmentedError<ApiType>;
      /**
       * The vote item was expected to be an outcome, but is actually not an outcome.
       **/
      VoteItemIsNoOutcome: AugmentedError<ApiType>;
      /**
       * The winner vote item is not an outcome.
       **/
      WinnerVoteItemIsNoOutcome: AugmentedError<ApiType>;
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
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
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
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
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
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
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
       * The period in which outcomes can be added is over.
       **/
      AddOutcomePeriodIsOver: AugmentedError<ApiType>;
      /**
       * Sender tried to vote with an amount below a defined minimum.
       **/
      AmountTooLow: AugmentedError<ApiType>;
      /**
       * The global dispute was already started.
       **/
      GlobalDisputeAlreadyExists: AugmentedError<ApiType>;
      /**
       * The operation requires a global dispute in a destroyed state.
       **/
      GlobalDisputeNotDestroyed: AugmentedError<ApiType>;
      /**
       * No global dispute present at the moment.
       **/
      GlobalDisputeNotFound: AugmentedError<ApiType>;
      /**
       * Sender does not have enough funds for the vote on an outcome.
       **/
      InsufficientAmount: AugmentedError<ApiType>;
      /**
       * The global dispute status is invalid for this operation.
       **/
      InvalidGlobalDisputeStatus: AugmentedError<ApiType>;
      /**
       * The maximum amount of owners is reached.
       **/
      MaxOwnersReached: AugmentedError<ApiType>;
      /**
       * The maximum number of votes for this account is reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * The amount in the reward pot is zero.
       **/
      NoFundsToReward: AugmentedError<ApiType>;
      /**
       * It is not inside the period in which votes are allowed.
       **/
      NotInGdVotingPeriod: AugmentedError<ApiType>;
      /**
       * The voting outcome has been already added.
       **/
      OutcomeAlreadyExists: AugmentedError<ApiType>;
      /**
       * The outcome specified is not present in the voting outcomes.
       **/
      OutcomeDoesNotExist: AugmentedError<ApiType>;
      /**
       * Submitted outcome does not match market type.
       **/
      OutcomeMismatch: AugmentedError<ApiType>;
      /**
       * The outcomes are not fully cleaned yet.
       **/
      OutcomesNotFullyCleaned: AugmentedError<ApiType>;
      /**
       * Only a shared possession is allowed.
       **/
      SharedPossessionRequired: AugmentedError<ApiType>;
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
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
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
    multisig: {
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
    neoSwaps: {
      /**
       * Amount paid is above the specified maximum.
       **/
      AmountInAboveMax: AugmentedError<ApiType>;
      /**
       * Amount received is below the specified minimum.
       **/
      AmountOutBelowMin: AugmentedError<ApiType>;
      /**
       * The number of assets in the pool is above the allowed maximum.
       **/
      AssetCountAboveMax: AugmentedError<ApiType>;
      /**
       * Specified asset was not found in this pool.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * Market already has an associated pool.
       **/
      DuplicatePool: AugmentedError<ApiType>;
      /**
       * Incorrect asset count.
       **/
      IncorrectAssetCount: AugmentedError<ApiType>;
      IncorrectVecLen: AugmentedError<ApiType>;
      /**
       * User doesn't own enough pool shares.
       **/
      InsufficientPoolShares: AugmentedError<ApiType>;
      /**
       * Sum of spot prices is not `1`.
       **/
      InvalidSpotPrices: AugmentedError<ApiType>;
      /**
       * Market's trading mechanism is not LMSR.
       **/
      InvalidTradingMechanism: AugmentedError<ApiType>;
      /**
       * The liquidity in the pool is too low.
       **/
      LiquidityTooLow: AugmentedError<ApiType>;
      /**
       * Pool can only be traded on if the market is active.
       **/
      MarketNotActive: AugmentedError<ApiType>;
      /**
       * Deploying pools is only supported for scalar or binary markets.
       **/
      MarketNotBinaryOrScalar: AugmentedError<ApiType>;
      /**
       * Some calculation failed. This shouldn't happen.
       **/
      MathError: AugmentedError<ApiType>;
      /**
       * The user is not allowed to execute this command.
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * This feature is not yet implemented.
       **/
      NotImplemented: AugmentedError<ApiType>;
      /**
       * Some value in the operation is too large or small.
       **/
      NumericalLimits: AugmentedError<ApiType>;
      /**
       * Outstanding fees prevent liquidity withdrawal.
       **/
      OutstandingFees: AugmentedError<ApiType>;
      /**
       * Specified market does not have a pool.
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * Spot price is above the allowed maximum.
       **/
      SpotPriceAboveMax: AugmentedError<ApiType>;
      /**
       * Spot price is below the allowed minimum.
       **/
      SpotPriceBelowMin: AugmentedError<ApiType>;
      /**
       * Pool's swap fee exceeds the allowed upper limit.
       **/
      SwapFeeAboveMax: AugmentedError<ApiType>;
      /**
       * Pool's swap fee is below the allowed lower limit.
       **/
      SwapFeeBelowMin: AugmentedError<ApiType>;
      /**
       * This shouldn't happen.
       **/
      Unexpected: AugmentedError<ApiType>;
      /**
       * Specified monetary amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
    };
    orderbook: {
      /**
       * The specified amount parameter is zero.
       **/
      AmountIsZero: AugmentedError<ApiType>;
      /**
       * The specified amount parameter is too high for the order.
       **/
      AmountTooHighForOrder: AugmentedError<ApiType>;
      /**
       * The specified outcome asset is not part of the market.
       **/
      InvalidOutcomeAsset: AugmentedError<ApiType>;
      /**
       * The scoring rule is not orderbook.
       **/
      InvalidScoringRule: AugmentedError<ApiType>;
      /**
       * The maker partial fill leads to a too low quotient for the next order execution.
       **/
      MakerPartialFillTooLow: AugmentedError<ApiType>;
      /**
       * The market is not active.
       **/
      MarketIsNotActive: AugmentedError<ApiType>;
      /**
       * The sender is not the order creator.
       **/
      NotOrderCreator: AugmentedError<ApiType>;
      /**
       * The order does not exist.
       **/
      OrderDoesNotExist: AugmentedError<ApiType>;
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
      RoundLengthMustBeGreaterThanTotalSelectedCollators: AugmentedError<ApiType>;
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
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
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
       * The operation required fees to be paid which the initiator could not meet.
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * The unlock operation cannot succeed because there are still users of the lock.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Invalid asset for the operation.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * A remote lock with the corresponding data could not be found.
       **/
      LockNotFound: AugmentedError<ApiType>;
      /**
       * The owner does not own (all) of the asset that they wish to do the operation on.
       **/
      LowBalance: AugmentedError<ApiType>;
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
       * The asset owner has too many locks on the asset.
       **/
      TooManyLocks: AugmentedError<ApiType>;
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
       * The fee is too high.
       **/
      FeeTooHigh: AugmentedError<ApiType>;
      /**
       * The start of the global dispute for this market happened already.
       **/
      GlobalDisputeExistsAlready: AugmentedError<ApiType>;
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
       * The market dispute mechanism has not failed.
       **/
      MarketDisputeMechanismNotFailed: AugmentedError<ApiType>;
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
       * Tried to settle missing bond.
       **/
      MissingBond: AugmentedError<ApiType>;
      /**
       * The market has no dispute mechanism.
       **/
      NoDisputeMechanism: AugmentedError<ApiType>;
      /**
       * The dispute duration is positive but the market has dispute period.
       **/
      NonZeroDisputePeriodOnTrustedMarket: AugmentedError<ApiType>;
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
      TooBig: AugmentedError<ApiType>;
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
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
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
      CannotDisputeSameOutcome: AugmentedError<ApiType>;
      /**
       * 1. Any resolution must either have a `Disputed` or `Reported` market status
       * 2. If status is `Disputed`, then at least one dispute must exist
       **/
      InvalidMarketStatus: AugmentedError<ApiType>;
      /**
       * On dispute or resolution, someone tried to pass a non-simple-disputes market type
       **/
      MarketDoesNotHaveSimpleDisputesMechanism: AugmentedError<ApiType>;
      MarketIsNotReported: AugmentedError<ApiType>;
      /**
       * The maximum number of disputes has been reached.
       **/
      MaxDisputesReached: AugmentedError<ApiType>;
      OutcomeMismatch: AugmentedError<ApiType>;
      StorageOverflow: AugmentedError<ApiType>;
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
       * Liquidity provided to new CPMM pool is less than the minimum allowed balance.
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
