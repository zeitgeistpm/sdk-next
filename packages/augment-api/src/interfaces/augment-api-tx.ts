// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, Struct, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { BatteryStationRuntimeOriginCaller, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportPreimagesBounded, NimbusPrimitivesNimbusCryptoPublic, OrmlTraitsAssetRegistryAssetMetadata, PalletDemocracyConviction, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletMultisigTimepoint, PalletVestingVestingInfo, SpWeightsWeightV2Weight, StagingXcmV3MultiLocation, StagingXcmV3WeightLimit, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAssets, StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm, ZeitgeistPrimitivesAsset, ZeitgeistPrimitivesCustomMetadata, ZeitgeistPrimitivesMarketDeadlines, ZeitgeistPrimitivesMarketMarketCreation, ZeitgeistPrimitivesMarketMarketDisputeMechanism, ZeitgeistPrimitivesMarketMarketPeriod, ZeitgeistPrimitivesMarketMarketType, ZeitgeistPrimitivesMarketScoringRule, ZeitgeistPrimitivesMultiHash, ZeitgeistPrimitivesOutcomeReport, ZeitgeistPrimitivesProxyType, ZrmlCombinatorialTokensCryptographicIdManagerFuel, ZrmlCourtVoteItem, ZrmlFutarchyProposal, ZrmlHybridRouterStrategy } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    advisoryCommittee: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
    };
    advisoryCommitteeMembership: {
      /**
       * See [`Pallet::add_member`].
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::change_key`].
       **/
      changeKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::clear_prime`].
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_member`].
       **/
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::reset_members`].
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * See [`Pallet::set_prime`].
       **/
      setPrime: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::swap_member`].
       **/
      swapMember: AugmentedSubmittable<(remove: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, add: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
    };
    assetManager: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZeitgeistPrimitivesAsset, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_native_currency`].
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::update_balance`].
       **/
      updateBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZeitgeistPrimitivesAsset, i128]>;
    };
    assetRegistry: {
      /**
       * See [`Pallet::register_asset`].
       **/
      registerAsset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | { decimals?: any; name?: any; symbol?: any; existentialDeposit?: any; location?: any; additional?: any } | string | Uint8Array, assetId: Option<ZeitgeistPrimitivesAsset> | null | Uint8Array | ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<ZeitgeistPrimitivesAsset>]>;
      /**
       * See [`Pallet::update_asset`].
       **/
      updateAsset: AugmentedSubmittable<(assetId: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, decimals: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, location: Option<Option<StagingXcmVersionedMultiLocation>> | null | Uint8Array | Option<StagingXcmVersionedMultiLocation> | StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string, additional: Option<ZeitgeistPrimitivesCustomMetadata> | null | Uint8Array | ZeitgeistPrimitivesCustomMetadata | { xcm?: any; allowAsBaseAsset?: any } | string) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset, Option<u32>, Option<Bytes>, Option<Bytes>, Option<u128>, Option<Option<StagingXcmVersionedMultiLocation>>, Option<ZeitgeistPrimitivesCustomMetadata>]>;
    };
    authorFilter: {
      /**
       * See [`Pallet::set_eligible`].
       **/
      setEligible: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
    };
    authorInherent: {
      /**
       * See [`Pallet::kick_off_authorship_validation`].
       **/
      kickOffAuthorshipValidation: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    authorized: {
      /**
       * See [`Pallet::authorize_market_outcome`].
       **/
      authorizeMarketOutcome: AugmentedSubmittable<(marketId: u128 | AnyNumber | Uint8Array, outcome: ZeitgeistPrimitivesOutcomeReport | { Categorical: any } | { Scalar: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, ZeitgeistPrimitivesOutcomeReport]>;
    };
    authorMapping: {
      /**
       * See [`Pallet::add_association`].
       **/
      addAssociation: AugmentedSubmittable<(nimbusId: NimbusPrimitivesNimbusCryptoPublic | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NimbusPrimitivesNimbusCryptoPublic]>;
      /**
       * See [`Pallet::clear_association`].
       **/
      clearAssociation: AugmentedSubmittable<(nimbusId: NimbusPrimitivesNimbusCryptoPublic | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NimbusPrimitivesNimbusCryptoPublic]>;
      /**
       * See [`Pallet::remove_keys`].
       **/
      removeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_keys`].
       **/
      setKeys: AugmentedSubmittable<(keys: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::update_association`].
       **/
      updateAssociation: AugmentedSubmittable<(oldNimbusId: NimbusPrimitivesNimbusCryptoPublic | string | Uint8Array, newNimbusId: NimbusPrimitivesNimbusCryptoPublic | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [NimbusPrimitivesNimbusCryptoPublic, NimbusPrimitivesNimbusCryptoPublic]>;
    };
    balances: {
      /**
       * See [`Pallet::force_set_balance`].
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_unreserve`].
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::set_balance_deprecated`].
       **/
      setBalanceDeprecated: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * See [`Pallet::transfer_allow_death`].
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::upgrade_accounts`].
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
    };
    bounties: {
      /**
       * See [`Pallet::accept_curator`].
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::approve_bounty`].
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::award_bounty`].
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::claim_bounty`].
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::close_bounty`].
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::extend_bounty_expiry`].
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * See [`Pallet::propose_bounty`].
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::propose_curator`].
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::unassign_curator`].
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
    };
    combinatorialTokens: {
      /**
       * See [`Pallet::merge_position`].
       **/
      mergePosition: AugmentedSubmittable<(parentCollectionId: Option<U8aFixed> | null | Uint8Array | U8aFixed | string, marketId: u128 | AnyNumber | Uint8Array, partition: Vec<Vec<bool>>, amount: u128 | AnyNumber | Uint8Array, fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel | { total?: any; consumeAll?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<U8aFixed>, u128, Vec<Vec<bool>>, u128, ZrmlCombinatorialTokensCryptographicIdManagerFuel]>;
      /**
       * See [`Pallet::redeem_position`].
       **/
      redeemPosition: AugmentedSubmittable<(parentCollectionId: Option<U8aFixed> | null | Uint8Array | U8aFixed | string, marketId: u128 | AnyNumber | Uint8Array, indexSet: Vec<bool> | (bool | boolean | Uint8Array)[], fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel | { total?: any; consumeAll?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<U8aFixed>, u128, Vec<bool>, ZrmlCombinatorialTokensCryptographicIdManagerFuel]>;
      /**
       * See [`Pallet::split_position`].
       **/
      splitPosition: AugmentedSubmittable<(parentCollectionId: Option<U8aFixed> | null | Uint8Array | U8aFixed | string, marketId: u128 | AnyNumber | Uint8Array, partition: Vec<Vec<bool>>, amount: u128 | AnyNumber | Uint8Array, fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel | { total?: any; consumeAll?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<U8aFixed>, u128, Vec<Vec<bool>>, u128, ZrmlCombinatorialTokensCryptographicIdManagerFuel]>;
    };
    council: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
    };
    councilMembership: {
      /**
       * See [`Pallet::add_member`].
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::change_key`].
       **/
      changeKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::clear_prime`].
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_member`].
       **/
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::reset_members`].
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * See [`Pallet::set_prime`].
       **/
      setPrime: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::swap_member`].
       **/
      swapMember: AugmentedSubmittable<(remove: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, add: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
    };
    court: {
      /**
       * See [`Pallet::appeal`].
       **/
      appeal: AugmentedSubmittable<(courtId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array, delegations: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u128, Vec<AccountId32>]>;
      /**
       * See [`Pallet::denounce_vote`].
       **/
      denounceVote: AugmentedSubmittable<(courtId: Compact<u128> | AnyNumber | Uint8Array, juror: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, voteItem: ZrmlCourtVoteItem | { Outcome: any } | { Binary: any } | string | Uint8Array, salt: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, ZrmlCourtVoteItem, H256]>;
      /**
       * See [`Pallet::exit_court`].
       **/
      exitCourt: AugmentedSubmittable<(courtParticipant: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::join_court`].
       **/
      joinCourt: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::prepare_exit_court`].
       **/
      prepareExitCourt: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::reassign_court_stakes`].
       **/
      reassignCourtStakes: AugmentedSubmittable<(courtId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::reveal_vote`].
       **/
      revealVote: AugmentedSubmittable<(courtId: Compact<u128> | AnyNumber | Uint8Array, voteItem: ZrmlCourtVoteItem | { Outcome: any } | { Binary: any } | string | Uint8Array, salt: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZrmlCourtVoteItem, H256]>;
      /**
       * See [`Pallet::set_inflation`].
       **/
      setInflation: AugmentedSubmittable<(inflation: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(courtId: Compact<u128> | AnyNumber | Uint8Array, commitmentVote: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, H256]>;
    };
    democracy: {
      /**
       * See [`Pallet::blacklist`].
       **/
      blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
      /**
       * See [`Pallet::cancel_proposal`].
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::cancel_referendum`].
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::clear_public_proposals`].
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletDemocracyConviction, u128]>;
      /**
       * See [`Pallet::emergency_cancel`].
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::external_propose`].
       **/
      externalPropose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::external_propose_default`].
       **/
      externalProposeDefault: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::external_propose_majority`].
       **/
      externalProposeMajority: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::fast_track`].
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u64 | AnyNumber | Uint8Array, delay: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u64, u64]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded, Compact<u128>]>;
      /**
       * See [`Pallet::remove_other_vote`].
       **/
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * See [`Pallet::remove_vote`].
       **/
      removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::second`].
       **/
      second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(owner: PalletDemocracyMetadataOwner | { External: any } | { Proposal: any } | { Referendum: any } | string | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [PalletDemocracyMetadataOwner, Option<H256>]>;
      /**
       * See [`Pallet::undelegate`].
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::unlock`].
       **/
      unlock: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::veto_external`].
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
    };
    dmpQueue: {
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
    };
    futarchy: {
      /**
       * See [`Pallet::submit_proposal`].
       **/
      submitProposal: AugmentedSubmittable<(duration: u64 | AnyNumber | Uint8Array, proposal: ZrmlFutarchyProposal | { when?: any; call?: any; oracle?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, ZrmlFutarchyProposal]>;
    };
    globalDisputes: {
      /**
       * See [`Pallet::add_vote_outcome`].
       **/
      addVoteOutcome: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, outcome: ZeitgeistPrimitivesOutcomeReport | { Categorical: any } | { Scalar: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesOutcomeReport]>;
      /**
       * See [`Pallet::purge_outcomes`].
       **/
      purgeOutcomes: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::refund_vote_fees`].
       **/
      refundVoteFees: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::reward_outcome_owner`].
       **/
      rewardOutcomeOwner: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::unlock_vote_balance`].
       **/
      unlockVoteBalance: AugmentedSubmittable<(voter: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::vote_on_outcome`].
       **/
      voteOnOutcome: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, outcome: ZeitgeistPrimitivesOutcomeReport | { Categorical: any } | { Scalar: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesOutcomeReport, Compact<u128>]>;
    };
    hybridRouter: {
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(marketId: u128 | AnyNumber | Uint8Array, assetCount: Compact<u16> | AnyNumber | Uint8Array, asset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amountIn: Compact<u128> | AnyNumber | Uint8Array, maxPrice: Compact<u128> | AnyNumber | Uint8Array, orders: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], strategy: ZrmlHybridRouterStrategy | 'ImmediateOrCancel' | 'LimitOrder' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Compact<u16>, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>, Vec<u128>, ZrmlHybridRouterStrategy]>;
      /**
       * See [`Pallet::sell`].
       **/
      sell: AugmentedSubmittable<(marketId: u128 | AnyNumber | Uint8Array, assetCount: Compact<u16> | AnyNumber | Uint8Array, asset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amountIn: Compact<u128> | AnyNumber | Uint8Array, minPrice: Compact<u128> | AnyNumber | Uint8Array, orders: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], strategy: ZrmlHybridRouterStrategy | 'ImmediateOrCancel' | 'LimitOrder' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Compact<u16>, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>, Vec<u128>, ZrmlHybridRouterStrategy]>;
    };
    identity: {
      /**
       * See [`Pallet::add_registrar`].
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::add_sub`].
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::cancel_request`].
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::clear_identity`].
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::kill_identity`].
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::provide_judgement`].
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * See [`Pallet::quit_sub`].
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_sub`].
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::rename_sub`].
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::request_judgement`].
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_account_id`].
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::set_fee`].
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_fields`].
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * See [`Pallet::set_identity`].
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * See [`Pallet::set_subs`].
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
    };
    multisig: {
      /**
       * See [`Pallet::approve_as_multi`].
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi`].
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi_threshold_1`].
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * See [`Pallet::cancel_as_multi`].
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
    };
    neoSwaps: {
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetCount: u16 | AnyNumber | Uint8Array, assetOut: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amountIn: Compact<u128> | AnyNumber | Uint8Array, minAmountOut: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u16, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::combo_buy`].
       **/
      comboBuy: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetCount: u16 | AnyNumber | Uint8Array, buy: Vec<ZeitgeistPrimitivesAsset> | (ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array)[], sell: Vec<ZeitgeistPrimitivesAsset> | (ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array)[], amountIn: Compact<u128> | AnyNumber | Uint8Array, minAmountOut: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u16, Vec<ZeitgeistPrimitivesAsset>, Vec<ZeitgeistPrimitivesAsset>, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::combo_sell`].
       **/
      comboSell: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetCount: u16 | AnyNumber | Uint8Array, buy: Vec<ZeitgeistPrimitivesAsset> | (ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array)[], keep: Vec<ZeitgeistPrimitivesAsset> | (ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array)[], sell: Vec<ZeitgeistPrimitivesAsset> | (ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array)[], amountBuy: Compact<u128> | AnyNumber | Uint8Array, amountKeep: Compact<u128> | AnyNumber | Uint8Array, minAmountOut: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u16, Vec<ZeitgeistPrimitivesAsset>, Vec<ZeitgeistPrimitivesAsset>, Vec<ZeitgeistPrimitivesAsset>, Compact<u128>, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::deploy_combinatorial_pool`].
       **/
      deployCombinatorialPool: AugmentedSubmittable<(assetCount: u16 | AnyNumber | Uint8Array, marketIds: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], amount: u128 | AnyNumber | Uint8Array, spotPrices: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], swapFee: u128 | AnyNumber | Uint8Array, fuel: ZrmlCombinatorialTokensCryptographicIdManagerFuel | { total?: any; consumeAll?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<u128>, u128, Vec<u128>, u128, ZrmlCombinatorialTokensCryptographicIdManagerFuel]>;
      /**
       * See [`Pallet::deploy_pool`].
       **/
      deployPool: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, spotPrices: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], swapFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::exit`].
       **/
      exit: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, poolSharesAmountOut: Compact<u128> | AnyNumber | Uint8Array, minAmountsOut: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<u128>]>;
      /**
       * See [`Pallet::join`].
       **/
      join: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, poolSharesAmount: Compact<u128> | AnyNumber | Uint8Array, maxAmountsIn: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<u128>]>;
      /**
       * See [`Pallet::sell`].
       **/
      sell: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetCount: u16 | AnyNumber | Uint8Array, assetIn: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amountIn: Compact<u128> | AnyNumber | Uint8Array, minAmountOut: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u16, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::withdraw_fees`].
       **/
      withdrawFees: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
    };
    orderbook: {
      /**
       * See [`Pallet::fill_order`].
       **/
      fillOrder: AugmentedSubmittable<(orderId: u128 | AnyNumber | Uint8Array, makerPartialFill: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u128, Option<u128>]>;
      /**
       * See [`Pallet::place_order`].
       **/
      placeOrder: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, makerAsset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, makerAmount: Compact<u128> | AnyNumber | Uint8Array, takerAsset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, takerAmount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesAsset, Compact<u128>, ZeitgeistPrimitivesAsset, Compact<u128>]>;
      /**
       * See [`Pallet::remove_order`].
       **/
      removeOrder: AugmentedSubmittable<(orderId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
    };
    parachainStaking: {
      /**
       * See [`Pallet::cancel_candidate_bond_less`].
       **/
      cancelCandidateBondLess: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::cancel_delegation_request`].
       **/
      cancelDelegationRequest: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::cancel_leave_candidates`].
       **/
      cancelLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::candidate_bond_more`].
       **/
      candidateBondMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, u32, u32]>;
      /**
       * See [`Pallet::delegate_with_auto_compound`].
       **/
      delegateWithAutoCompound: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, autoCompound: Percent | AnyNumber | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array, candidateAutoCompoundingDelegationCount: u32 | AnyNumber | Uint8Array, delegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, Percent, u32, u32, u32]>;
      /**
       * See [`Pallet::delegator_bond_more`].
       **/
      delegatorBondMore: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
      /**
       * See [`Pallet::enable_marking_offline`].
       **/
      enableMarkingOffline: AugmentedSubmittable<(value: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::execute_candidate_bond_less`].
       **/
      executeCandidateBondLess: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::execute_delegation_request`].
       **/
      executeDelegationRequest: AugmentedSubmittable<(delegator: AccountId32 | string | Uint8Array, candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32]>;
      /**
       * See [`Pallet::execute_leave_candidates`].
       **/
      executeLeaveCandidates: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, candidateDelegationCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::force_join_candidates`].
       **/
      forceJoinCandidates: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, bond: u128 | AnyNumber | Uint8Array, candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, u32]>;
      /**
       * See [`Pallet::go_offline`].
       **/
      goOffline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::go_online`].
       **/
      goOnline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::hotfix_remove_delegation_requests_exited_candidates`].
       **/
      hotfixRemoveDelegationRequestsExitedCandidates: AugmentedSubmittable<(candidates: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * See [`Pallet::join_candidates`].
       **/
      joinCandidates: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array, candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * See [`Pallet::notify_inactive_collator`].
       **/
      notifyInactiveCollator: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::removed_call_19`].
       **/
      removedCall19: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::removed_call_20`].
       **/
      removedCall20: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::removed_call_21`].
       **/
      removedCall21: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::schedule_candidate_bond_less`].
       **/
      scheduleCandidateBondLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::schedule_delegator_bond_less`].
       **/
      scheduleDelegatorBondLess: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
      /**
       * See [`Pallet::schedule_leave_candidates`].
       **/
      scheduleLeaveCandidates: AugmentedSubmittable<(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::schedule_revoke_delegation`].
       **/
      scheduleRevokeDelegation: AugmentedSubmittable<(collator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::set_auto_compound`].
       **/
      setAutoCompound: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, value: Percent | AnyNumber | Uint8Array, candidateAutoCompoundingDelegationCountHint: u32 | AnyNumber | Uint8Array, delegationCountHint: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Percent, u32, u32]>;
      /**
       * See [`Pallet::set_blocks_per_round`].
       **/
      setBlocksPerRound: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_collator_commission`].
       **/
      setCollatorCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * See [`Pallet::set_inflation`].
       **/
      setInflation: AugmentedSubmittable<(schedule: {
    readonly min: Perbill;
    readonly ideal: Perbill;
    readonly max: Perbill;
  } & Struct | { min?: any; ideal?: any; max?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [{
    readonly min: Perbill;
    readonly ideal: Perbill;
    readonly max: Perbill;
  } & Struct]>;
      /**
       * See [`Pallet::set_parachain_bond_account`].
       **/
      setParachainBondAccount: AugmentedSubmittable<(updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::set_parachain_bond_reserve_percent`].
       **/
      setParachainBondReservePercent: AugmentedSubmittable<(updated: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Percent]>;
      /**
       * See [`Pallet::set_staking_expectations`].
       **/
      setStakingExpectations: AugmentedSubmittable<(expectations: {
    readonly min: u128;
    readonly ideal: u128;
    readonly max: u128;
  } & Struct | { min?: any; ideal?: any; max?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [{
    readonly min: u128;
    readonly ideal: u128;
    readonly max: u128;
  } & Struct]>;
      /**
       * See [`Pallet::set_total_selected`].
       **/
      setTotalSelected: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
    };
    parachainSystem: {
      /**
       * See [`Pallet::authorize_upgrade`].
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * See [`Pallet::enact_authorized_upgrade`].
       **/
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_validation_data`].
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      /**
       * See [`Pallet::sudo_send_upward_message`].
       **/
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
    };
    parimutuel: {
      /**
       * See [`Pallet::buy`].
       **/
      buy: AugmentedSubmittable<(asset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset, Compact<u128>]>;
      /**
       * See [`Pallet::claim_refunds`].
       **/
      claimRefunds: AugmentedSubmittable<(refundAsset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset]>;
      /**
       * See [`Pallet::claim_rewards`].
       **/
      claimRewards: AugmentedSubmittable<(marketId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
    };
    polkadotXcm: {
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::force_default_xcm_version`].
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::force_subscribe_version_notify`].
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_suspension`].
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::force_unsubscribe_version_notify`].
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_xcm_version`].
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV3MultiLocation, u32]>;
      /**
       * See [`Pallet::limited_reserve_transfer_assets`].
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::limited_teleport_assets`].
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::reserve_transfer_assets`].
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * See [`Pallet::send`].
       **/
      send: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
      /**
       * See [`Pallet::teleport_assets`].
       **/
      teleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
    };
    predictionMarkets: {
      /**
       * See [`Pallet::admin_move_market_to_closed`].
       **/
      adminMoveMarketToClosed: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::admin_move_market_to_resolved`].
       **/
      adminMoveMarketToResolved: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::approve_market`].
       **/
      approveMarket: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::buy_complete_set`].
       **/
      buyCompleteSet: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::close_trusted_market`].
       **/
      closeTrustedMarket: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::create_market`].
       **/
      createMarket: AugmentedSubmittable<(baseAsset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, creatorFee: Perbill | AnyNumber | Uint8Array, oracle: AccountId32 | string | Uint8Array, period: ZeitgeistPrimitivesMarketMarketPeriod | { Block: any } | { Timestamp: any } | string | Uint8Array, deadlines: ZeitgeistPrimitivesMarketDeadlines | { gracePeriod?: any; oracleDuration?: any; disputeDuration?: any } | string | Uint8Array, metadata: ZeitgeistPrimitivesMultiHash | { Sha3_384: any } | string | Uint8Array, creation: ZeitgeistPrimitivesMarketMarketCreation | 'Permissionless' | 'Advised' | number | Uint8Array, marketType: ZeitgeistPrimitivesMarketMarketType | { Categorical: any } | { Scalar: any } | string | Uint8Array, disputeMechanism: Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism> | null | Uint8Array | ZeitgeistPrimitivesMarketMarketDisputeMechanism | 'Authorized' | 'Court' | number, scoringRule: ZeitgeistPrimitivesMarketScoringRule | 'AmmCdaHybrid' | 'Parimutuel' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset, Perbill, AccountId32, ZeitgeistPrimitivesMarketMarketPeriod, ZeitgeistPrimitivesMarketDeadlines, ZeitgeistPrimitivesMultiHash, ZeitgeistPrimitivesMarketMarketCreation, ZeitgeistPrimitivesMarketMarketType, Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>, ZeitgeistPrimitivesMarketScoringRule]>;
      /**
       * See [`Pallet::create_market_and_deploy_pool`].
       **/
      createMarketAndDeployPool: AugmentedSubmittable<(baseAsset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, creatorFee: Perbill | AnyNumber | Uint8Array, oracle: AccountId32 | string | Uint8Array, period: ZeitgeistPrimitivesMarketMarketPeriod | { Block: any } | { Timestamp: any } | string | Uint8Array, deadlines: ZeitgeistPrimitivesMarketDeadlines | { gracePeriod?: any; oracleDuration?: any; disputeDuration?: any } | string | Uint8Array, metadata: ZeitgeistPrimitivesMultiHash | { Sha3_384: any } | string | Uint8Array, marketType: ZeitgeistPrimitivesMarketMarketType | { Categorical: any } | { Scalar: any } | string | Uint8Array, disputeMechanism: Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism> | null | Uint8Array | ZeitgeistPrimitivesMarketMarketDisputeMechanism | 'Authorized' | 'Court' | number, amount: Compact<u128> | AnyNumber | Uint8Array, spotPrices: Vec<u128> | (u128 | AnyNumber | Uint8Array)[], swapFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset, Perbill, AccountId32, ZeitgeistPrimitivesMarketMarketPeriod, ZeitgeistPrimitivesMarketDeadlines, ZeitgeistPrimitivesMultiHash, ZeitgeistPrimitivesMarketMarketType, Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>, Compact<u128>, Vec<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::dispute`].
       **/
      dispute: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::dispute_early_close`].
       **/
      disputeEarlyClose: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::edit_market`].
       **/
      editMarket: AugmentedSubmittable<(baseAsset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, marketId: u128 | AnyNumber | Uint8Array, oracle: AccountId32 | string | Uint8Array, period: ZeitgeistPrimitivesMarketMarketPeriod | { Block: any } | { Timestamp: any } | string | Uint8Array, deadlines: ZeitgeistPrimitivesMarketDeadlines | { gracePeriod?: any; oracleDuration?: any; disputeDuration?: any } | string | Uint8Array, metadata: ZeitgeistPrimitivesMultiHash | { Sha3_384: any } | string | Uint8Array, marketType: ZeitgeistPrimitivesMarketMarketType | { Categorical: any } | { Scalar: any } | string | Uint8Array, disputeMechanism: Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism> | null | Uint8Array | ZeitgeistPrimitivesMarketMarketDisputeMechanism | 'Authorized' | 'Court' | number, scoringRule: ZeitgeistPrimitivesMarketScoringRule | 'AmmCdaHybrid' | 'Parimutuel' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset, u128, AccountId32, ZeitgeistPrimitivesMarketMarketPeriod, ZeitgeistPrimitivesMarketDeadlines, ZeitgeistPrimitivesMultiHash, ZeitgeistPrimitivesMarketMarketType, Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>, ZeitgeistPrimitivesMarketScoringRule]>;
      /**
       * See [`Pallet::manually_close_market`].
       **/
      manuallyCloseMarket: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::redeem_shares`].
       **/
      redeemShares: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::reject_early_close`].
       **/
      rejectEarlyClose: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::reject_market`].
       **/
      rejectMarket: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, rejectReason: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::report`].
       **/
      report: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, outcome: ZeitgeistPrimitivesOutcomeReport | { Categorical: any } | { Scalar: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesOutcomeReport]>;
      /**
       * See [`Pallet::request_edit`].
       **/
      requestEdit: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, editReason: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::schedule_early_close`].
       **/
      scheduleEarlyClose: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::sell_complete_set`].
       **/
      sellCompleteSet: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::start_global_dispute`].
       **/
      startGlobalDispute: AugmentedSubmittable<(marketId: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
    };
    preimage: {
      /**
       * See [`Pallet::note_preimage`].
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::request_preimage`].
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unnote_preimage`].
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unrequest_preimage`].
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
    };
    proxy: {
      /**
       * See [`Pallet::add_proxy`].
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: ZeitgeistPrimitivesProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Staking' | 'CreateEditMarket' | 'ReportOutcome' | 'Dispute' | 'ProvideLiquidity' | 'BuySellCompleteSets' | 'Trading' | 'HandleAssets' | number | Uint8Array, delay: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZeitgeistPrimitivesProxyType, u64]>;
      /**
       * See [`Pallet::announce`].
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::create_pure`].
       **/
      createPure: AugmentedSubmittable<(proxyType: ZeitgeistPrimitivesProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Staking' | 'CreateEditMarket' | 'ReportOutcome' | 'Dispute' | 'ProvideLiquidity' | 'BuySellCompleteSets' | 'Trading' | 'HandleAssets' | number | Uint8Array, delay: u64 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesProxyType, u64, u16]>;
      /**
       * See [`Pallet::kill_pure`].
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: ZeitgeistPrimitivesProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Staking' | 'CreateEditMarket' | 'ReportOutcome' | 'Dispute' | 'ProvideLiquidity' | 'BuySellCompleteSets' | 'Trading' | 'HandleAssets' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u64> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZeitgeistPrimitivesProxyType, u16, Compact<u64>, Compact<u32>]>;
      /**
       * See [`Pallet::proxy`].
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<ZeitgeistPrimitivesProxyType> | null | Uint8Array | ZeitgeistPrimitivesProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Staking' | 'CreateEditMarket' | 'ReportOutcome' | 'Dispute' | 'ProvideLiquidity' | 'BuySellCompleteSets' | 'Trading' | 'HandleAssets' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<ZeitgeistPrimitivesProxyType>, Call]>;
      /**
       * See [`Pallet::proxy_announced`].
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<ZeitgeistPrimitivesProxyType> | null | Uint8Array | ZeitgeistPrimitivesProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Staking' | 'CreateEditMarket' | 'ReportOutcome' | 'Dispute' | 'ProvideLiquidity' | 'BuySellCompleteSets' | 'Trading' | 'HandleAssets' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<ZeitgeistPrimitivesProxyType>, Call]>;
      /**
       * See [`Pallet::reject_announcement`].
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_announcement`].
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_proxies`].
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_proxy`].
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: ZeitgeistPrimitivesProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Staking' | 'CreateEditMarket' | 'ReportOutcome' | 'Dispute' | 'ProvideLiquidity' | 'BuySellCompleteSets' | 'Trading' | 'HandleAssets' | number | Uint8Array, delay: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZeitgeistPrimitivesProxyType, u64]>;
    };
    scheduler: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(when: u64 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, u32]>;
      /**
       * See [`Pallet::cancel_named`].
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * See [`Pallet::schedule`].
       **/
      schedule: AugmentedSubmittable<(when: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_after`].
       **/
      scheduleAfter: AugmentedSubmittable<(after: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named`].
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named_after`].
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u64 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u64, u32]>> | null | Uint8Array | ITuple<[u64, u32]> | [u64 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u64, Option<ITuple<[u64, u32]>>, u8, Call]>;
    };
    styx: {
      /**
       * See [`Pallet::cross`].
       **/
      cross: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_burn_amount`].
       **/
      setBurnAmount: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
    };
    sudo: {
      /**
       * See [`Pallet::set_key`].
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::sudo`].
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::sudo_as`].
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * See [`Pallet::sudo_unchecked_weight`].
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
    };
    swaps: {
      /**
       * See [`Pallet::force_pool_exit`].
       **/
      forcePoolExit: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, poolId: Compact<u128> | AnyNumber | Uint8Array, poolAmount: Compact<u128> | AnyNumber | Uint8Array, minAssetsOut: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>, Compact<u128>, Vec<u128>]>;
      /**
       * See [`Pallet::pool_exit`].
       **/
      poolExit: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, poolAmount: Compact<u128> | AnyNumber | Uint8Array, minAssetsOut: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<u128>]>;
      /**
       * See [`Pallet::pool_exit_with_exact_asset_amount`].
       **/
      poolExitWithExactAssetAmount: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetOut: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, assetAmount: Compact<u128> | AnyNumber | Uint8Array, maxPoolAmount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::pool_exit_with_exact_pool_amount`].
       **/
      poolExitWithExactPoolAmount: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, asset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, poolAmount: Compact<u128> | AnyNumber | Uint8Array, minAssetAmount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::pool_join`].
       **/
      poolJoin: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, poolAmount: Compact<u128> | AnyNumber | Uint8Array, maxAssetsIn: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<u128>]>;
      /**
       * See [`Pallet::pool_join_with_exact_asset_amount`].
       **/
      poolJoinWithExactAssetAmount: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetIn: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, assetAmount: Compact<u128> | AnyNumber | Uint8Array, minPoolAmount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::pool_join_with_exact_pool_amount`].
       **/
      poolJoinWithExactPoolAmount: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, asset: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, poolAmount: Compact<u128> | AnyNumber | Uint8Array, maxAssetAmount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesAsset, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::swap_exact_amount_in`].
       **/
      swapExactAmountIn: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetIn: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, assetAmountIn: Compact<u128> | AnyNumber | Uint8Array, assetOut: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, minAssetAmountOut: Option<u128> | null | Uint8Array | u128 | AnyNumber, maxPrice: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesAsset, Compact<u128>, ZeitgeistPrimitivesAsset, Option<u128>, Option<u128>]>;
      /**
       * See [`Pallet::swap_exact_amount_out`].
       **/
      swapExactAmountOut: AugmentedSubmittable<(poolId: Compact<u128> | AnyNumber | Uint8Array, assetIn: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, maxAssetAmountIn: Option<u128> | null | Uint8Array | u128 | AnyNumber, assetOut: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, assetAmountOut: Compact<u128> | AnyNumber | Uint8Array, maxPrice: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Compact<u128>, ZeitgeistPrimitivesAsset, Option<u128>, ZeitgeistPrimitivesAsset, Compact<u128>, Option<u128>]>;
    };
    system: {
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
    };
    technicalCommittee: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
    };
    technicalCommitteeMembership: {
      /**
       * See [`Pallet::add_member`].
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::change_key`].
       **/
      changeKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::clear_prime`].
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_member`].
       **/
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::reset_members`].
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * See [`Pallet::set_prime`].
       **/
      setPrime: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::swap_member`].
       **/
      swapMember: AugmentedSubmittable<(remove: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, add: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
    };
    treasury: {
      /**
       * See [`Pallet::approve_proposal`].
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::propose_spend`].
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * See [`Pallet::reject_proposal`].
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::remove_approval`].
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::spend`].
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
    };
    utility: {
      /**
       * See [`Pallet::as_derivative`].
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * See [`Pallet::batch`].
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::batch_all`].
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::dispatch_as`].
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: BatteryStationRuntimeOriginCaller | { system: any } | { Void: any } | { AdvisoryCommittee: any } | { Council: any } | { TechnicalCommittee: any } | { CumulusXcm: any } | { PolkadotXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BatteryStationRuntimeOriginCaller, Call]>;
      /**
       * See [`Pallet::force_batch`].
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::with_weight`].
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
    };
    vesting: {
      /**
       * See [`Pallet::force_vested_transfer`].
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::merge_schedules`].
       **/
      mergeSchedules: AugmentedSubmittable<(schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::vest`].
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::vested_transfer`].
       **/
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::vest_other`].
       **/
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
    };
    xcmpQueue: {
      /**
       * See [`Pallet::resume_xcm_execution`].
       **/
      resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::suspend_xcm_execution`].
       **/
      suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::update_drop_threshold`].
       **/
      updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_resume_threshold`].
       **/
      updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_suspend_threshold`].
       **/
      updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_threshold_weight`].
       **/
      updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_weight_restrict_decay`].
       **/
      updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_xcmp_max_individual_weight`].
       **/
      updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
    };
    xTokens: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(currencyId: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset`].
       **/
      transferMultiasset: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiassets`].
       **/
      transferMultiassets: AugmentedSubmittable<(assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAssets, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset_with_fee`].
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, fee: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multicurrencies`].
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[ZeitgeistPrimitivesAsset, u128]>> | ([ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[ZeitgeistPrimitivesAsset, u128]>>, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_with_fee`].
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: ZeitgeistPrimitivesAsset | { CategoricalOutcome: any } | { ScalarOutcome: any } | { CombinatorialOutcomeLegacy: any } | { PoolShare: any } | { Ztg: any } | { ForeignAsset: any } | { ParimutuelShare: any } | { CombinatorialToken: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZeitgeistPrimitivesAsset, u128, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
    };
  } // AugmentedSubmittables
} // declare module
