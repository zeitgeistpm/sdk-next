// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemCodeUpgradeAuthorization, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity, CumulusPalletParachainSystemUnincludedSegmentAncestor, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate, CumulusPalletParachainSystemUnincludedSegmentSegmentTracker, CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, NimbusPrimitivesNimbusCryptoPublic, OrmlAssetRegistryModuleCall, OrmlAssetRegistryModuleError, OrmlAssetRegistryModuleEvent, OrmlCurrenciesModuleCall, OrmlCurrenciesModuleError, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlTraitsAssetRegistryAssetMetadata, OrmlUnknownTokensModuleError, OrmlUnknownTokensModuleEvent, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletAssetTxPaymentChargeAssetTxPayment, PalletAssetTxPaymentEvent, PalletAuthorInherentCall, PalletAuthorInherentError, PalletAuthorMappingCall, PalletAuthorMappingError, PalletAuthorMappingEvent, PalletAuthorMappingRegistrationInfo, PalletAuthorSlotFilterCall, PalletAuthorSlotFilterEvent, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesIdAmount, PalletBalancesReasons, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyMetadataOwner, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletParachainStakingAutoCompoundAutoCompoundConfig, PalletParachainStakingBond, PalletParachainStakingBondWithAutoCompound, PalletParachainStakingCall, PalletParachainStakingCandidateBondLessRequest, PalletParachainStakingCandidateMetadata, PalletParachainStakingCapacityStatus, PalletParachainStakingCollatorSnapshot, PalletParachainStakingCollatorStatus, PalletParachainStakingDelayedPayout, PalletParachainStakingDelegationRequestsCancelledScheduledRequest, PalletParachainStakingDelegationRequestsDelegationAction, PalletParachainStakingDelegationRequestsScheduledRequest, PalletParachainStakingDelegations, PalletParachainStakingDelegator, PalletParachainStakingDelegatorAdded, PalletParachainStakingDelegatorStatus, PalletParachainStakingError, PalletParachainStakingEvent, PalletParachainStakingInflationInflationInfo, PalletParachainStakingParachainBondConfig, PalletParachainStakingRoundInfo, PalletParachainStakingSetBoundedOrderedSet, PalletParachainStakingSetOrderedSet, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduled, PalletTimestampCall, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat, PolkadotPrimitivesV5AbridgedHostConfiguration, PolkadotPrimitivesV5AbridgedHrmpChannel, PolkadotPrimitivesV5PersistedValidationData, PolkadotPrimitivesV5UpgradeGoAhead, PolkadotPrimitivesV5UpgradeRestriction, PolkadotPrimitivesVstagingAsyncBackingParams, SessionKeysPrimitivesVrfVrfCryptoPublic, SpArithmeticArithmeticError, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, StagingXcmDoubleEncoded, StagingXcmV2BodyId, StagingXcmV2BodyPart, StagingXcmV2Instruction, StagingXcmV2Junction, StagingXcmV2MultiAsset, StagingXcmV2MultiLocation, StagingXcmV2MultiassetAssetId, StagingXcmV2MultiassetAssetInstance, StagingXcmV2MultiassetFungibility, StagingXcmV2MultiassetMultiAssetFilter, StagingXcmV2MultiassetMultiAssets, StagingXcmV2MultiassetWildFungibility, StagingXcmV2MultiassetWildMultiAsset, StagingXcmV2MultilocationJunctions, StagingXcmV2NetworkId, StagingXcmV2OriginKind, StagingXcmV2Response, StagingXcmV2TraitsError, StagingXcmV2WeightLimit, StagingXcmV2Xcm, StagingXcmV3Instruction, StagingXcmV3Junction, StagingXcmV3JunctionBodyId, StagingXcmV3JunctionBodyPart, StagingXcmV3JunctionNetworkId, StagingXcmV3Junctions, StagingXcmV3MaybeErrorCode, StagingXcmV3MultiAsset, StagingXcmV3MultiLocation, StagingXcmV3MultiassetAssetId, StagingXcmV3MultiassetAssetInstance, StagingXcmV3MultiassetFungibility, StagingXcmV3MultiassetMultiAssetFilter, StagingXcmV3MultiassetMultiAssets, StagingXcmV3MultiassetWildFungibility, StagingXcmV3MultiassetWildMultiAsset, StagingXcmV3PalletInfo, StagingXcmV3QueryResponseInfo, StagingXcmV3Response, StagingXcmV3TraitsError, StagingXcmV3TraitsOutcome, StagingXcmV3WeightLimit, StagingXcmV3Xcm, StagingXcmVersionedAssetId, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAssets, StagingXcmVersionedMultiLocation, StagingXcmVersionedResponse, StagingXcmVersionedXcm, ZeitgeistPrimitivesAsset, ZeitgeistPrimitivesAssetScalarPosition, ZeitgeistPrimitivesCustomMetadata, ZeitgeistPrimitivesHybridRouterApiTypesExternalFee, ZeitgeistPrimitivesMarket, ZeitgeistPrimitivesMarketAuthorityReport, ZeitgeistPrimitivesMarketBond, ZeitgeistPrimitivesMarketDeadlines, ZeitgeistPrimitivesMarketEarlyClose, ZeitgeistPrimitivesMarketEarlyCloseState, ZeitgeistPrimitivesMarketMarketBonds, ZeitgeistPrimitivesMarketMarketCreation, ZeitgeistPrimitivesMarketMarketDisputeMechanism, ZeitgeistPrimitivesMarketMarketPeriod, ZeitgeistPrimitivesMarketMarketStatus, ZeitgeistPrimitivesMarketMarketType, ZeitgeistPrimitivesMarketReport, ZeitgeistPrimitivesMarketScoringRule, ZeitgeistPrimitivesMultiHash, ZeitgeistPrimitivesOrderbookOrder, ZeitgeistPrimitivesOutcomeReport, ZeitgeistPrimitivesProxyType, ZeitgeistPrimitivesXcmMetadata, ZeitgeistRuntimeOriginCaller, ZeitgeistRuntimeRuntime, ZeitgeistRuntimeRuntimeHoldReason, ZrmlAuthorizedCall, ZrmlAuthorizedError, ZrmlAuthorizedEvent, ZrmlCombinatorialTokensCall, ZrmlCombinatorialTokensCollectionIdError, ZrmlCombinatorialTokensCryptographicIdManagerFuel, ZrmlCombinatorialTokensError, ZrmlCombinatorialTokensEvent, ZrmlCourtAppealInfo, ZrmlCourtCall, ZrmlCourtCourtInfo, ZrmlCourtCourtParticipantInfo, ZrmlCourtCourtPoolItem, ZrmlCourtCourtStatus, ZrmlCourtDraw, ZrmlCourtError, ZrmlCourtEvent, ZrmlCourtRoundTiming, ZrmlCourtUnexpectedError, ZrmlCourtVote, ZrmlCourtVoteItem, ZrmlCourtVoteItemType, ZrmlFutarchyCall, ZrmlFutarchyError, ZrmlFutarchyEvent, ZrmlFutarchyProposal, ZrmlGlobalDisputesCall, ZrmlGlobalDisputesError, ZrmlGlobalDisputesEvent, ZrmlGlobalDisputesGdStatus, ZrmlGlobalDisputesGlobalDisputeInfo, ZrmlGlobalDisputesOutcomeInfo, ZrmlGlobalDisputesPossession, ZrmlHybridRouterCall, ZrmlHybridRouterError, ZrmlHybridRouterEvent, ZrmlHybridRouterStrategy, ZrmlHybridRouterTxType, ZrmlMarketCommonsError, ZrmlNeoSwapsCall, ZrmlNeoSwapsDecisionMarketOracle, ZrmlNeoSwapsDecisionMarketOracleScoreboard, ZrmlNeoSwapsError, ZrmlNeoSwapsEvent, ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree, ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError, ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError, ZrmlNeoSwapsLiquidityTreeTypesNode, ZrmlNeoSwapsNumericalLimitsError, ZrmlNeoSwapsPool, ZrmlNeoSwapsPoolType, ZrmlOrderbookCall, ZrmlOrderbookError, ZrmlOrderbookEvent, ZrmlParimutuelCall, ZrmlParimutuelError, ZrmlParimutuelEvent, ZrmlParimutuelInconsistentStateError, ZrmlPredictionMarketsCall, ZrmlPredictionMarketsError, ZrmlPredictionMarketsEvent, ZrmlStyxCall, ZrmlStyxError, ZrmlStyxEvent, ZrmlSwapsCall, ZrmlSwapsError, ZrmlSwapsEvent, ZrmlSwapsEventsCommonPoolEventParams, ZrmlSwapsEventsPoolAssetEvent, ZrmlSwapsEventsPoolAssetsEvent, ZrmlSwapsEventsSwapEvent, ZrmlSwapsPool, ZrmlSwapsPoolPoolStatus, ZrmlSwapsUnexpectedError } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemCodeUpgradeAuthorization: CumulusPalletParachainSystemCodeUpgradeAuthorization;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    CumulusPalletParachainSystemUnincludedSegmentAncestor: CumulusPalletParachainSystemUnincludedSegmentAncestor;
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate;
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: CumulusPalletParachainSystemUnincludedSegmentSegmentTracker;
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
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
    PalletBalancesIdAmount: PalletBalancesIdAmount;
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
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyMetadataOwner: PalletDemocracyMetadataOwner;
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
    PalletParachainStakingSetBoundedOrderedSet: PalletParachainStakingSetBoundedOrderedSet;
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
    PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV5AbridgedHostConfiguration: PolkadotPrimitivesV5AbridgedHostConfiguration;
    PolkadotPrimitivesV5AbridgedHrmpChannel: PolkadotPrimitivesV5AbridgedHrmpChannel;
    PolkadotPrimitivesV5PersistedValidationData: PolkadotPrimitivesV5PersistedValidationData;
    PolkadotPrimitivesV5UpgradeGoAhead: PolkadotPrimitivesV5UpgradeGoAhead;
    PolkadotPrimitivesV5UpgradeRestriction: PolkadotPrimitivesV5UpgradeRestriction;
    PolkadotPrimitivesVstagingAsyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
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
    StagingXcmDoubleEncoded: StagingXcmDoubleEncoded;
    StagingXcmV2BodyId: StagingXcmV2BodyId;
    StagingXcmV2BodyPart: StagingXcmV2BodyPart;
    StagingXcmV2Instruction: StagingXcmV2Instruction;
    StagingXcmV2Junction: StagingXcmV2Junction;
    StagingXcmV2MultiAsset: StagingXcmV2MultiAsset;
    StagingXcmV2MultiLocation: StagingXcmV2MultiLocation;
    StagingXcmV2MultiassetAssetId: StagingXcmV2MultiassetAssetId;
    StagingXcmV2MultiassetAssetInstance: StagingXcmV2MultiassetAssetInstance;
    StagingXcmV2MultiassetFungibility: StagingXcmV2MultiassetFungibility;
    StagingXcmV2MultiassetMultiAssetFilter: StagingXcmV2MultiassetMultiAssetFilter;
    StagingXcmV2MultiassetMultiAssets: StagingXcmV2MultiassetMultiAssets;
    StagingXcmV2MultiassetWildFungibility: StagingXcmV2MultiassetWildFungibility;
    StagingXcmV2MultiassetWildMultiAsset: StagingXcmV2MultiassetWildMultiAsset;
    StagingXcmV2MultilocationJunctions: StagingXcmV2MultilocationJunctions;
    StagingXcmV2NetworkId: StagingXcmV2NetworkId;
    StagingXcmV2OriginKind: StagingXcmV2OriginKind;
    StagingXcmV2Response: StagingXcmV2Response;
    StagingXcmV2TraitsError: StagingXcmV2TraitsError;
    StagingXcmV2WeightLimit: StagingXcmV2WeightLimit;
    StagingXcmV2Xcm: StagingXcmV2Xcm;
    StagingXcmV3Instruction: StagingXcmV3Instruction;
    StagingXcmV3Junction: StagingXcmV3Junction;
    StagingXcmV3JunctionBodyId: StagingXcmV3JunctionBodyId;
    StagingXcmV3JunctionBodyPart: StagingXcmV3JunctionBodyPart;
    StagingXcmV3JunctionNetworkId: StagingXcmV3JunctionNetworkId;
    StagingXcmV3Junctions: StagingXcmV3Junctions;
    StagingXcmV3MaybeErrorCode: StagingXcmV3MaybeErrorCode;
    StagingXcmV3MultiAsset: StagingXcmV3MultiAsset;
    StagingXcmV3MultiLocation: StagingXcmV3MultiLocation;
    StagingXcmV3MultiassetAssetId: StagingXcmV3MultiassetAssetId;
    StagingXcmV3MultiassetAssetInstance: StagingXcmV3MultiassetAssetInstance;
    StagingXcmV3MultiassetFungibility: StagingXcmV3MultiassetFungibility;
    StagingXcmV3MultiassetMultiAssetFilter: StagingXcmV3MultiassetMultiAssetFilter;
    StagingXcmV3MultiassetMultiAssets: StagingXcmV3MultiassetMultiAssets;
    StagingXcmV3MultiassetWildFungibility: StagingXcmV3MultiassetWildFungibility;
    StagingXcmV3MultiassetWildMultiAsset: StagingXcmV3MultiassetWildMultiAsset;
    StagingXcmV3PalletInfo: StagingXcmV3PalletInfo;
    StagingXcmV3QueryResponseInfo: StagingXcmV3QueryResponseInfo;
    StagingXcmV3Response: StagingXcmV3Response;
    StagingXcmV3TraitsError: StagingXcmV3TraitsError;
    StagingXcmV3TraitsOutcome: StagingXcmV3TraitsOutcome;
    StagingXcmV3WeightLimit: StagingXcmV3WeightLimit;
    StagingXcmV3Xcm: StagingXcmV3Xcm;
    StagingXcmVersionedAssetId: StagingXcmVersionedAssetId;
    StagingXcmVersionedMultiAsset: StagingXcmVersionedMultiAsset;
    StagingXcmVersionedMultiAssets: StagingXcmVersionedMultiAssets;
    StagingXcmVersionedMultiLocation: StagingXcmVersionedMultiLocation;
    StagingXcmVersionedResponse: StagingXcmVersionedResponse;
    StagingXcmVersionedXcm: StagingXcmVersionedXcm;
    ZeitgeistPrimitivesAsset: ZeitgeistPrimitivesAsset;
    ZeitgeistPrimitivesAssetScalarPosition: ZeitgeistPrimitivesAssetScalarPosition;
    ZeitgeistPrimitivesCustomMetadata: ZeitgeistPrimitivesCustomMetadata;
    ZeitgeistPrimitivesHybridRouterApiTypesExternalFee: ZeitgeistPrimitivesHybridRouterApiTypesExternalFee;
    ZeitgeistPrimitivesMarket: ZeitgeistPrimitivesMarket;
    ZeitgeistPrimitivesMarketAuthorityReport: ZeitgeistPrimitivesMarketAuthorityReport;
    ZeitgeistPrimitivesMarketBond: ZeitgeistPrimitivesMarketBond;
    ZeitgeistPrimitivesMarketDeadlines: ZeitgeistPrimitivesMarketDeadlines;
    ZeitgeistPrimitivesMarketEarlyClose: ZeitgeistPrimitivesMarketEarlyClose;
    ZeitgeistPrimitivesMarketEarlyCloseState: ZeitgeistPrimitivesMarketEarlyCloseState;
    ZeitgeistPrimitivesMarketMarketBonds: ZeitgeistPrimitivesMarketMarketBonds;
    ZeitgeistPrimitivesMarketMarketCreation: ZeitgeistPrimitivesMarketMarketCreation;
    ZeitgeistPrimitivesMarketMarketDisputeMechanism: ZeitgeistPrimitivesMarketMarketDisputeMechanism;
    ZeitgeistPrimitivesMarketMarketPeriod: ZeitgeistPrimitivesMarketMarketPeriod;
    ZeitgeistPrimitivesMarketMarketStatus: ZeitgeistPrimitivesMarketMarketStatus;
    ZeitgeistPrimitivesMarketMarketType: ZeitgeistPrimitivesMarketMarketType;
    ZeitgeistPrimitivesMarketReport: ZeitgeistPrimitivesMarketReport;
    ZeitgeistPrimitivesMarketScoringRule: ZeitgeistPrimitivesMarketScoringRule;
    ZeitgeistPrimitivesMultiHash: ZeitgeistPrimitivesMultiHash;
    ZeitgeistPrimitivesOrderbookOrder: ZeitgeistPrimitivesOrderbookOrder;
    ZeitgeistPrimitivesOutcomeReport: ZeitgeistPrimitivesOutcomeReport;
    ZeitgeistPrimitivesProxyType: ZeitgeistPrimitivesProxyType;
    ZeitgeistPrimitivesXcmMetadata: ZeitgeistPrimitivesXcmMetadata;
    ZeitgeistRuntimeOriginCaller: ZeitgeistRuntimeOriginCaller;
    ZeitgeistRuntimeRuntime: ZeitgeistRuntimeRuntime;
    ZeitgeistRuntimeRuntimeHoldReason: ZeitgeistRuntimeRuntimeHoldReason;
    ZrmlAuthorizedCall: ZrmlAuthorizedCall;
    ZrmlAuthorizedError: ZrmlAuthorizedError;
    ZrmlAuthorizedEvent: ZrmlAuthorizedEvent;
    ZrmlCombinatorialTokensCall: ZrmlCombinatorialTokensCall;
    ZrmlCombinatorialTokensCollectionIdError: ZrmlCombinatorialTokensCollectionIdError;
    ZrmlCombinatorialTokensCryptographicIdManagerFuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel;
    ZrmlCombinatorialTokensError: ZrmlCombinatorialTokensError;
    ZrmlCombinatorialTokensEvent: ZrmlCombinatorialTokensEvent;
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
    ZrmlCourtUnexpectedError: ZrmlCourtUnexpectedError;
    ZrmlCourtVote: ZrmlCourtVote;
    ZrmlCourtVoteItem: ZrmlCourtVoteItem;
    ZrmlCourtVoteItemType: ZrmlCourtVoteItemType;
    ZrmlFutarchyCall: ZrmlFutarchyCall;
    ZrmlFutarchyError: ZrmlFutarchyError;
    ZrmlFutarchyEvent: ZrmlFutarchyEvent;
    ZrmlFutarchyProposal: ZrmlFutarchyProposal;
    ZrmlGlobalDisputesCall: ZrmlGlobalDisputesCall;
    ZrmlGlobalDisputesError: ZrmlGlobalDisputesError;
    ZrmlGlobalDisputesEvent: ZrmlGlobalDisputesEvent;
    ZrmlGlobalDisputesGdStatus: ZrmlGlobalDisputesGdStatus;
    ZrmlGlobalDisputesGlobalDisputeInfo: ZrmlGlobalDisputesGlobalDisputeInfo;
    ZrmlGlobalDisputesOutcomeInfo: ZrmlGlobalDisputesOutcomeInfo;
    ZrmlGlobalDisputesPossession: ZrmlGlobalDisputesPossession;
    ZrmlHybridRouterCall: ZrmlHybridRouterCall;
    ZrmlHybridRouterError: ZrmlHybridRouterError;
    ZrmlHybridRouterEvent: ZrmlHybridRouterEvent;
    ZrmlHybridRouterStrategy: ZrmlHybridRouterStrategy;
    ZrmlHybridRouterTxType: ZrmlHybridRouterTxType;
    ZrmlMarketCommonsError: ZrmlMarketCommonsError;
    ZrmlNeoSwapsCall: ZrmlNeoSwapsCall;
    ZrmlNeoSwapsDecisionMarketOracle: ZrmlNeoSwapsDecisionMarketOracle;
    ZrmlNeoSwapsDecisionMarketOracleScoreboard: ZrmlNeoSwapsDecisionMarketOracleScoreboard;
    ZrmlNeoSwapsError: ZrmlNeoSwapsError;
    ZrmlNeoSwapsEvent: ZrmlNeoSwapsEvent;
    ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree: ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree;
    ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError: ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError;
    ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError: ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError;
    ZrmlNeoSwapsLiquidityTreeTypesNode: ZrmlNeoSwapsLiquidityTreeTypesNode;
    ZrmlNeoSwapsNumericalLimitsError: ZrmlNeoSwapsNumericalLimitsError;
    ZrmlNeoSwapsPool: ZrmlNeoSwapsPool;
    ZrmlNeoSwapsPoolType: ZrmlNeoSwapsPoolType;
    ZrmlOrderbookCall: ZrmlOrderbookCall;
    ZrmlOrderbookError: ZrmlOrderbookError;
    ZrmlOrderbookEvent: ZrmlOrderbookEvent;
    ZrmlParimutuelCall: ZrmlParimutuelCall;
    ZrmlParimutuelError: ZrmlParimutuelError;
    ZrmlParimutuelEvent: ZrmlParimutuelEvent;
    ZrmlParimutuelInconsistentStateError: ZrmlParimutuelInconsistentStateError;
    ZrmlPredictionMarketsCall: ZrmlPredictionMarketsCall;
    ZrmlPredictionMarketsError: ZrmlPredictionMarketsError;
    ZrmlPredictionMarketsEvent: ZrmlPredictionMarketsEvent;
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
    ZrmlSwapsPool: ZrmlSwapsPool;
    ZrmlSwapsPoolPoolStatus: ZrmlSwapsPoolPoolStatus;
    ZrmlSwapsUnexpectedError: ZrmlSwapsUnexpectedError;
  } // InterfaceTypes
} // declare module
