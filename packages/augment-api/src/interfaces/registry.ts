// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, NimbusPrimitivesNimbusCryptoPublic, OrmlAssetRegistryModuleCall, OrmlAssetRegistryModuleError, OrmlAssetRegistryModuleEvent, OrmlCurrenciesModuleCall, OrmlCurrenciesModuleError, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlTraitsAssetRegistryAssetMetadata, OrmlUnknownTokensModuleError, OrmlUnknownTokensModuleEvent, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletAssetTxPaymentChargeAssetTxPayment, PalletAssetTxPaymentEvent, PalletAuthorInherentCall, PalletAuthorInherentError, PalletAuthorMappingCall, PalletAuthorMappingError, PalletAuthorMappingEvent, PalletAuthorMappingRegistrationInfo, PalletAuthorSlotFilterCall, PalletAuthorSlotFilterEvent, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletContractsCall, PalletContractsError, PalletContractsEvent, PalletContractsSchedule, PalletContractsScheduleHostFnWeights, PalletContractsScheduleInstructionWeights, PalletContractsScheduleLimits, PalletContractsStorageContractInfo, PalletContractsStorageDeletedContract, PalletContractsWasmDeterminism, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletParachainStakingAutoCompoundAutoCompoundConfig, PalletParachainStakingBond, PalletParachainStakingBondWithAutoCompound, PalletParachainStakingCall, PalletParachainStakingCandidateBondLessRequest, PalletParachainStakingCandidateMetadata, PalletParachainStakingCapacityStatus, PalletParachainStakingCollatorSnapshot, PalletParachainStakingCollatorStatus, PalletParachainStakingDelayedPayout, PalletParachainStakingDelegationRequestsCancelledScheduledRequest, PalletParachainStakingDelegationRequestsDelegationAction, PalletParachainStakingDelegationRequestsScheduledRequest, PalletParachainStakingDelegations, PalletParachainStakingDelegator, PalletParachainStakingDelegatorAdded, PalletParachainStakingDelegatorStatus, PalletParachainStakingError, PalletParachainStakingEvent, PalletParachainStakingInflationInflationInfo, PalletParachainStakingParachainBondConfig, PalletParachainStakingRoundInfo, PalletParachainStakingSetOrderedSet, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduled, PalletTimestampCall, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SessionKeysPrimitivesVrfVrfCryptoPublic, SpArithmeticArithmeticError, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, SubstrateFixedFixedI128, SubstrateFixedFixedU128, TypenumBitB0, TypenumBitB1, TypenumUIntUInt, TypenumUIntUTerm, TypenumUintUTerm, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3VecPalletInfo, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm, ZeitgeistPrimitivesAsset, ZeitgeistPrimitivesAssetScalarPosition, ZeitgeistPrimitivesCustomMetadata, ZeitgeistPrimitivesMarket, ZeitgeistPrimitivesMarketAuthorityReport, ZeitgeistPrimitivesMarketBond, ZeitgeistPrimitivesMarketDeadlines, ZeitgeistPrimitivesMarketMarketBonds, ZeitgeistPrimitivesMarketMarketCreation, ZeitgeistPrimitivesMarketMarketDispute, ZeitgeistPrimitivesMarketMarketDisputeMechanism, ZeitgeistPrimitivesMarketMarketPeriod, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketMarketType, ZeitgeistPrimitivesMarketOldMarketDispute, ZeitgeistPrimitivesMarketReport, ZeitgeistPrimitivesMarketSubsidyUntil, ZeitgeistPrimitivesMultiHash, ZeitgeistPrimitivesOutcomeReport, ZeitgeistPrimitivesPool, ZeitgeistPrimitivesPoolScoringRule, ZeitgeistPrimitivesPoolStatus, ZeitgeistPrimitivesProxyType, ZeitgeistPrimitivesXcmMetadata, ZeitgeistRuntimeOriginCaller, ZeitgeistRuntimeRuntime, ZrmlAuthorizedCall, ZrmlAuthorizedError, ZrmlAuthorizedEvent, ZrmlCourtAppealInfo, ZrmlCourtCall, ZrmlCourtCourtInfo, ZrmlCourtCourtParticipantInfo, ZrmlCourtCourtPoolItem, ZrmlCourtCourtStatus, ZrmlCourtDraw, ZrmlCourtError, ZrmlCourtEvent, ZrmlCourtRoundTiming, ZrmlCourtVote, ZrmlCourtVoteItem, ZrmlCourtVoteItemType, ZrmlGlobalDisputesCall, ZrmlGlobalDisputesError, ZrmlGlobalDisputesEvent, ZrmlGlobalDisputesGdStatus, ZrmlGlobalDisputesGlobalDisputeInfo, ZrmlGlobalDisputesOldOutcomeInfo, ZrmlGlobalDisputesOldWinnerInfo, ZrmlGlobalDisputesOutcomeInfo, ZrmlGlobalDisputesPossession, ZrmlLiquidityMiningCall, ZrmlLiquidityMiningError, ZrmlLiquidityMiningEvent, ZrmlLiquidityMiningOwnedValuesParams, ZrmlMarketCommonsError, ZrmlNeoSwapsCall, ZrmlNeoSwapsError, ZrmlNeoSwapsEvent, ZrmlNeoSwapsPool, ZrmlNeoSwapsSoloLp, ZrmlOrderbookV1Call, ZrmlOrderbookV1Error, ZrmlOrderbookV1Event, ZrmlOrderbookV1Order, ZrmlOrderbookV1OrderSide, ZrmlPredictionMarketsCall, ZrmlPredictionMarketsError, ZrmlPredictionMarketsEvent, ZrmlRikiddoEmaMarketVolume, ZrmlRikiddoEmaMarketVolumeEmaConfig, ZrmlRikiddoEmaMarketVolumeMarketVolumeState, ZrmlRikiddoError, ZrmlRikiddoRikiddoSigmoidMV, ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig, ZrmlRikiddoSigmoidFeeFeeSigmoid, ZrmlRikiddoSigmoidFeeFeeSigmoidConfig, ZrmlRikiddoTimespan, ZrmlSimpleDisputesCall, ZrmlSimpleDisputesError, ZrmlSimpleDisputesEvent, ZrmlStyxCall, ZrmlStyxError, ZrmlStyxEvent, ZrmlSwapsCall, ZrmlSwapsError, ZrmlSwapsEvent, ZrmlSwapsEventsCommonPoolEventParams, ZrmlSwapsEventsPoolAssetEvent, ZrmlSwapsEventsPoolAssetsEvent, ZrmlSwapsEventsSwapEvent } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    NimbusPrimitivesNimbusCryptoPublic: NimbusPrimitivesNimbusCryptoPublic;
    OrmlAssetRegistryModuleCall: OrmlAssetRegistryModuleCall;
    OrmlAssetRegistryModuleError: OrmlAssetRegistryModuleError;
    OrmlAssetRegistryModuleEvent: OrmlAssetRegistryModuleEvent;
    OrmlCurrenciesModuleCall: OrmlCurrenciesModuleCall;
    OrmlCurrenciesModuleError: OrmlCurrenciesModuleError;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlTraitsAssetRegistryAssetMetadata: OrmlTraitsAssetRegistryAssetMetadata;
    OrmlUnknownTokensModuleError: OrmlUnknownTokensModuleError;
    OrmlUnknownTokensModuleEvent: OrmlUnknownTokensModuleEvent;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletAssetTxPaymentChargeAssetTxPayment: PalletAssetTxPaymentChargeAssetTxPayment;
    PalletAssetTxPaymentEvent: PalletAssetTxPaymentEvent;
    PalletAuthorInherentCall: PalletAuthorInherentCall;
    PalletAuthorInherentError: PalletAuthorInherentError;
    PalletAuthorMappingCall: PalletAuthorMappingCall;
    PalletAuthorMappingError: PalletAuthorMappingError;
    PalletAuthorMappingEvent: PalletAuthorMappingEvent;
    PalletAuthorMappingRegistrationInfo: PalletAuthorMappingRegistrationInfo;
    PalletAuthorSlotFilterCall: PalletAuthorSlotFilterCall;
    PalletAuthorSlotFilterEvent: PalletAuthorSlotFilterEvent;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBountiesBounty: PalletBountiesBounty;
    PalletBountiesBountyStatus: PalletBountiesBountyStatus;
    PalletBountiesCall: PalletBountiesCall;
    PalletBountiesError: PalletBountiesError;
    PalletBountiesEvent: PalletBountiesEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletContractsCall: PalletContractsCall;
    PalletContractsError: PalletContractsError;
    PalletContractsEvent: PalletContractsEvent;
    PalletContractsSchedule: PalletContractsSchedule;
    PalletContractsScheduleHostFnWeights: PalletContractsScheduleHostFnWeights;
    PalletContractsScheduleInstructionWeights: PalletContractsScheduleInstructionWeights;
    PalletContractsScheduleLimits: PalletContractsScheduleLimits;
    PalletContractsStorageContractInfo: PalletContractsStorageContractInfo;
    PalletContractsStorageDeletedContract: PalletContractsStorageDeletedContract;
    PalletContractsWasmDeterminism: PalletContractsWasmDeterminism;
    PalletContractsWasmOwnerInfo: PalletContractsWasmOwnerInfo;
    PalletContractsWasmPrefabWasmModule: PalletContractsWasmPrefabWasmModule;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletParachainStakingAutoCompoundAutoCompoundConfig: PalletParachainStakingAutoCompoundAutoCompoundConfig;
    PalletParachainStakingBond: PalletParachainStakingBond;
    PalletParachainStakingBondWithAutoCompound: PalletParachainStakingBondWithAutoCompound;
    PalletParachainStakingCall: PalletParachainStakingCall;
    PalletParachainStakingCandidateBondLessRequest: PalletParachainStakingCandidateBondLessRequest;
    PalletParachainStakingCandidateMetadata: PalletParachainStakingCandidateMetadata;
    PalletParachainStakingCapacityStatus: PalletParachainStakingCapacityStatus;
    PalletParachainStakingCollatorSnapshot: PalletParachainStakingCollatorSnapshot;
    PalletParachainStakingCollatorStatus: PalletParachainStakingCollatorStatus;
    PalletParachainStakingDelayedPayout: PalletParachainStakingDelayedPayout;
    PalletParachainStakingDelegationRequestsCancelledScheduledRequest: PalletParachainStakingDelegationRequestsCancelledScheduledRequest;
    PalletParachainStakingDelegationRequestsDelegationAction: PalletParachainStakingDelegationRequestsDelegationAction;
    PalletParachainStakingDelegationRequestsScheduledRequest: PalletParachainStakingDelegationRequestsScheduledRequest;
    PalletParachainStakingDelegations: PalletParachainStakingDelegations;
    PalletParachainStakingDelegator: PalletParachainStakingDelegator;
    PalletParachainStakingDelegatorAdded: PalletParachainStakingDelegatorAdded;
    PalletParachainStakingDelegatorStatus: PalletParachainStakingDelegatorStatus;
    PalletParachainStakingError: PalletParachainStakingError;
    PalletParachainStakingEvent: PalletParachainStakingEvent;
    PalletParachainStakingInflationInflationInfo: PalletParachainStakingInflationInflationInfo;
    PalletParachainStakingParachainBondConfig: PalletParachainStakingParachainBondConfig;
    PalletParachainStakingRoundInfo: PalletParachainStakingRoundInfo;
    PalletParachainStakingSetOrderedSet: PalletParachainStakingSetOrderedSet;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVestingCall: PalletVestingCall;
    PalletVestingError: PalletVestingError;
    PalletVestingEvent: PalletVestingEvent;
    PalletVestingReleases: PalletVestingReleases;
    PalletVestingVestingInfo: PalletVestingVestingInfo;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    SessionKeysPrimitivesVrfVrfCryptoPublic: SessionKeysPrimitivesVrfVrfCryptoPublic;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    SubstrateFixedFixedI128: SubstrateFixedFixedI128;
    SubstrateFixedFixedU128: SubstrateFixedFixedU128;
    TypenumBitB0: TypenumBitB0;
    TypenumBitB1: TypenumBitB1;
    TypenumUIntUInt: TypenumUIntUInt;
    TypenumUIntUTerm: TypenumUIntUTerm;
    TypenumUintUTerm: TypenumUintUTerm;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiLocation: XcmV3MultiLocation;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsOutcome: XcmV3TraitsOutcome;
    XcmV3VecPalletInfo: XcmV3VecPalletInfo;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedMultiAsset: XcmVersionedMultiAsset;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
    ZeitgeistPrimitivesAsset: ZeitgeistPrimitivesAsset;
    ZeitgeistPrimitivesAssetScalarPosition: ZeitgeistPrimitivesAssetScalarPosition;
    ZeitgeistPrimitivesCustomMetadata: ZeitgeistPrimitivesCustomMetadata;
    ZeitgeistPrimitivesMarket: ZeitgeistPrimitivesMarket;
    ZeitgeistPrimitivesMarketAuthorityReport: ZeitgeistPrimitivesMarketAuthorityReport;
    ZeitgeistPrimitivesMarketBond: ZeitgeistPrimitivesMarketBond;
    ZeitgeistPrimitivesMarketDeadlines: ZeitgeistPrimitivesMarketDeadlines;
    ZeitgeistPrimitivesMarketMarketBonds: ZeitgeistPrimitivesMarketMarketBonds;
    ZeitgeistPrimitivesMarketMarketCreation: ZeitgeistPrimitivesMarketMarketCreation;
    ZeitgeistPrimitivesMarketMarketDispute: ZeitgeistPrimitivesMarketMarketDispute;
    ZeitgeistPrimitivesMarketMarketDisputeMechanism: ZeitgeistPrimitivesMarketMarketDisputeMechanism;
    ZeitgeistPrimitivesMarketMarketPeriod: ZeitgeistPrimitivesMarketMarketPeriod;
    ZeitgeistPrimitivesMarketMarketStatus: ZeitgeistPrimitivesMarketMarketStatus;
    ZeitgeistPrimitivesMarketMarketType: ZeitgeistPrimitivesMarketMarketType;
    ZeitgeistPrimitivesMarketOldMarketDispute: ZeitgeistPrimitivesMarketOldMarketDispute;
    ZeitgeistPrimitivesMarketReport: ZeitgeistPrimitivesMarketReport;
    ZeitgeistPrimitivesMarketSubsidyUntil: ZeitgeistPrimitivesMarketSubsidyUntil;
    ZeitgeistPrimitivesMultiHash: ZeitgeistPrimitivesMultiHash;
    ZeitgeistPrimitivesOutcomeReport: ZeitgeistPrimitivesOutcomeReport;
    ZeitgeistPrimitivesPool: ZeitgeistPrimitivesPool;
    ZeitgeistPrimitivesPoolScoringRule: ZeitgeistPrimitivesPoolScoringRule;
    ZeitgeistPrimitivesPoolStatus: ZeitgeistPrimitivesPoolStatus;
    ZeitgeistPrimitivesProxyType: ZeitgeistPrimitivesProxyType;
    ZeitgeistPrimitivesXcmMetadata: ZeitgeistPrimitivesXcmMetadata;
    ZeitgeistRuntimeOriginCaller: ZeitgeistRuntimeOriginCaller;
    ZeitgeistRuntimeRuntime: ZeitgeistRuntimeRuntime;
    ZrmlAuthorizedCall: ZrmlAuthorizedCall;
    ZrmlAuthorizedError: ZrmlAuthorizedError;
    ZrmlAuthorizedEvent: ZrmlAuthorizedEvent;
    ZrmlCourtAppealInfo: ZrmlCourtAppealInfo;
    ZrmlCourtCall: ZrmlCourtCall;
    ZrmlCourtCourtInfo: ZrmlCourtCourtInfo;
    ZrmlCourtCourtParticipantInfo: ZrmlCourtCourtParticipantInfo;
    ZrmlCourtCourtPoolItem: ZrmlCourtCourtPoolItem;
    ZrmlCourtCourtStatus: ZrmlCourtCourtStatus;
    ZrmlCourtDraw: ZrmlCourtDraw;
    ZrmlCourtError: ZrmlCourtError;
    ZrmlCourtEvent: ZrmlCourtEvent;
    ZrmlCourtRoundTiming: ZrmlCourtRoundTiming;
    ZrmlCourtVote: ZrmlCourtVote;
    ZrmlCourtVoteItem: ZrmlCourtVoteItem;
    ZrmlCourtVoteItemType: ZrmlCourtVoteItemType;
    ZrmlGlobalDisputesCall: ZrmlGlobalDisputesCall;
    ZrmlGlobalDisputesError: ZrmlGlobalDisputesError;
    ZrmlGlobalDisputesEvent: ZrmlGlobalDisputesEvent;
    ZrmlGlobalDisputesGdStatus: ZrmlGlobalDisputesGdStatus;
    ZrmlGlobalDisputesGlobalDisputeInfo: ZrmlGlobalDisputesGlobalDisputeInfo;
    ZrmlGlobalDisputesOldOutcomeInfo: ZrmlGlobalDisputesOldOutcomeInfo;
    ZrmlGlobalDisputesOldWinnerInfo: ZrmlGlobalDisputesOldWinnerInfo;
    ZrmlGlobalDisputesOutcomeInfo: ZrmlGlobalDisputesOutcomeInfo;
    ZrmlGlobalDisputesPossession: ZrmlGlobalDisputesPossession;
    ZrmlLiquidityMiningCall: ZrmlLiquidityMiningCall;
    ZrmlLiquidityMiningError: ZrmlLiquidityMiningError;
    ZrmlLiquidityMiningEvent: ZrmlLiquidityMiningEvent;
    ZrmlLiquidityMiningOwnedValuesParams: ZrmlLiquidityMiningOwnedValuesParams;
    ZrmlMarketCommonsError: ZrmlMarketCommonsError;
    ZrmlNeoSwapsCall: ZrmlNeoSwapsCall;
    ZrmlNeoSwapsError: ZrmlNeoSwapsError;
    ZrmlNeoSwapsEvent: ZrmlNeoSwapsEvent;
    ZrmlNeoSwapsPool: ZrmlNeoSwapsPool;
    ZrmlNeoSwapsSoloLp: ZrmlNeoSwapsSoloLp;
    ZrmlOrderbookV1Call: ZrmlOrderbookV1Call;
    ZrmlOrderbookV1Error: ZrmlOrderbookV1Error;
    ZrmlOrderbookV1Event: ZrmlOrderbookV1Event;
    ZrmlOrderbookV1Order: ZrmlOrderbookV1Order;
    ZrmlOrderbookV1OrderSide: ZrmlOrderbookV1OrderSide;
    ZrmlPredictionMarketsCall: ZrmlPredictionMarketsCall;
    ZrmlPredictionMarketsError: ZrmlPredictionMarketsError;
    ZrmlPredictionMarketsEvent: ZrmlPredictionMarketsEvent;
    ZrmlRikiddoEmaMarketVolume: ZrmlRikiddoEmaMarketVolume;
    ZrmlRikiddoEmaMarketVolumeEmaConfig: ZrmlRikiddoEmaMarketVolumeEmaConfig;
    ZrmlRikiddoEmaMarketVolumeMarketVolumeState: ZrmlRikiddoEmaMarketVolumeMarketVolumeState;
    ZrmlRikiddoError: ZrmlRikiddoError;
    ZrmlRikiddoRikiddoSigmoidMV: ZrmlRikiddoRikiddoSigmoidMV;
    ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig: ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig;
    ZrmlRikiddoSigmoidFeeFeeSigmoid: ZrmlRikiddoSigmoidFeeFeeSigmoid;
    ZrmlRikiddoSigmoidFeeFeeSigmoidConfig: ZrmlRikiddoSigmoidFeeFeeSigmoidConfig;
    ZrmlRikiddoTimespan: ZrmlRikiddoTimespan;
    ZrmlSimpleDisputesCall: ZrmlSimpleDisputesCall;
    ZrmlSimpleDisputesError: ZrmlSimpleDisputesError;
    ZrmlSimpleDisputesEvent: ZrmlSimpleDisputesEvent;
    ZrmlStyxCall: ZrmlStyxCall;
    ZrmlStyxError: ZrmlStyxError;
    ZrmlStyxEvent: ZrmlStyxEvent;
    ZrmlSwapsCall: ZrmlSwapsCall;
    ZrmlSwapsError: ZrmlSwapsError;
    ZrmlSwapsEvent: ZrmlSwapsEvent;
    ZrmlSwapsEventsCommonPoolEventParams: ZrmlSwapsEventsCommonPoolEventParams;
    ZrmlSwapsEventsPoolAssetEvent: ZrmlSwapsEventsPoolAssetEvent;
    ZrmlSwapsEventsPoolAssetsEvent: ZrmlSwapsEventsPoolAssetsEvent;
    ZrmlSwapsEventsSwapEvent: ZrmlSwapsEventsSwapEvent;
  } // InterfaceTypes
} // declare module
