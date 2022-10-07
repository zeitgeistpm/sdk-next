// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u64',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup8: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64'
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup16: frame_system::EventRecord<battery_station_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup22: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError'
    }
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup26: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup27: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u64',
        index: 'u32',
      },
      Canceled: {
        when: 'u64',
        index: 'u32',
      },
      Dispatched: {
        task: '(u64,u32)',
        id: 'Option<Bytes>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallLookupFailed: {
        task: '(u64,u32)',
        id: 'Option<Bytes>',
        error: 'FrameSupportScheduleLookupError'
      }
    }
  },
  /**
   * Lookup32: frame_support::traits::schedule::LookupError
   **/
  FrameSupportScheduleLookupError: {
    _enum: ['Unknown', 'BadFormat']
  },
  /**
   * Lookup33: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup34: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup35: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup36: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128'
      }
    }
  },
  /**
   * Lookup37: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup38: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup39: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u64',
    index: 'u32'
  },
  /**
   * Lookup40: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
        depositors: 'Vec<AccountId32>',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Executed: {
        refIndex: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u64',
      },
      PreimageNoted: {
        proposalHash: 'H256',
        who: 'AccountId32',
        deposit: 'u128',
      },
      PreimageUsed: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
      },
      PreimageInvalid: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageMissing: {
        proposalHash: 'H256',
        refIndex: 'u32',
      },
      PreimageReaped: {
        proposalHash: 'H256',
        provider: 'AccountId32',
        deposit: 'u128',
        reaper: 'AccountId32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32'
      }
    }
  },
  /**
   * Lookup42: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup43: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup45: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup47: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup52: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup53: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      ItemCompleted: 'Null',
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup54: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      AnonymousCreated: {
        anonymous: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64'
      }
    }
  },
  /**
   * Lookup55: zeitgeist_primitives::proxy_type::ProxyType
   **/
  ZeitgeistPrimitivesProxyType: {
    _enum: ['Any', 'CancelProxy', 'Governance', 'Staking']
  },
  /**
   * Lookup57: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup58: zeitgeist_primitives::asset::Asset<MI>
   **/
  ZeitgeistPrimitivesAsset: {
    _enum: {
      CategoricalOutcome: '(u128,u16)',
      ScalarOutcome: '(u128,ZeitgeistPrimitivesAssetScalarPosition)',
      CombinatorialOutcome: 'Null',
      PoolShare: 'u128',
      Ztg: 'Null'
    }
  },
  /**
   * Lookup59: zeitgeist_primitives::asset::ScalarPosition
   **/
  ZeitgeistPrimitivesAssetScalarPosition: {
    _enum: ['Long', 'Short']
  },
  /**
   * Lookup62: zrml_authorized::pallet::Event<T>
   **/
  ZrmlAuthorizedEvent: 'Null',
  /**
   * Lookup63: zrml_court::pallet::Event<T>
   **/
  ZrmlCourtEvent: {
    _enum: {
      ExitedJuror: '(AccountId32,ZrmlCourtJuror)',
      JoinedJuror: '(AccountId32,ZrmlCourtJuror)'
    }
  },
  /**
   * Lookup64: zrml_court::juror::Juror
   **/
  ZrmlCourtJuror: {
    status: 'ZrmlCourtJurorStatus'
  },
  /**
   * Lookup65: zrml_court::juror_status::JurorStatus
   **/
  ZrmlCourtJurorStatus: {
    _enum: ['Ok', 'Tardy']
  },
  /**
   * Lookup66: zrml_liquidity_mining::pallet::Event<T>
   **/
  ZrmlLiquidityMiningEvent: {
    _enum: {
      AddedIncentives: 'u64',
      DistributedIncentives: '(u128,u64)',
      SubtractedIncentives: 'u64'
    }
  },
  /**
   * Lookup68: zrml_simple_disputes::pallet::Event<T>
   **/
  ZrmlSimpleDisputesEvent: 'Null',
  /**
   * Lookup69: zrml_swaps::pallet::Event<T>
   **/
  ZrmlSwapsEvent: {
    _enum: {
      DistributeShareHolderRewards: '(u128,u64,u128)',
      PoolCreate: '(ZrmlSwapsEventsCommonPoolEventParams,ZeitgeistPrimitivesPool,u128,AccountId32)',
      PoolClosed: 'u128',
      PoolCleanedUp: 'u128',
      PoolActive: 'u128',
      PoolExit: 'ZrmlSwapsEventsPoolAssetsEvent',
      PoolExitSubsidy: '(ZeitgeistPrimitivesAsset,u128,ZrmlSwapsEventsCommonPoolEventParams,u128)',
      PoolExitWithExactAssetAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      PoolExitWithExactPoolAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      PoolJoin: 'ZrmlSwapsEventsPoolAssetsEvent',
      PoolJoinSubsidy: '(ZeitgeistPrimitivesAsset,u128,ZrmlSwapsEventsCommonPoolEventParams)',
      PoolJoinWithExactAssetAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      PoolJoinWithExactPoolAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      SubsidyCollected: '(u128,Vec<(AccountId32,u128)>,u128)',
      PoolDestroyed: 'u128',
      PoolDestroyedInSubsidyPhase: '(u128,Vec<(AccountId32,u128)>)',
      SwapExactAmountIn: 'ZrmlSwapsEventsSwapEvent',
      SwapExactAmountOut: 'ZrmlSwapsEventsSwapEvent'
    }
  },
  /**
   * Lookup70: zrml_swaps::events::CommonPoolEventParams<sp_core::crypto::AccountId32>
   **/
  ZrmlSwapsEventsCommonPoolEventParams: {
    poolId: 'u128',
    who: 'AccountId32'
  },
  /**
   * Lookup71: zeitgeist_primitives::pool::Pool<Balance, MarketId>
   **/
  ZeitgeistPrimitivesPool: {
    assets: 'Vec<ZeitgeistPrimitivesAsset>',
    baseAsset: 'ZeitgeistPrimitivesAsset',
    marketId: 'u128',
    poolStatus: 'ZeitgeistPrimitivesPoolStatus',
    scoringRule: 'ZeitgeistPrimitivesPoolScoringRule',
    swapFee: 'Option<u128>',
    totalSubsidy: 'Option<u128>',
    totalWeight: 'Option<u128>',
    weights: 'Option<BTreeMap<ZeitgeistPrimitivesAsset, u128>>'
  },
  /**
   * Lookup73: zeitgeist_primitives::pool_status::PoolStatus
   **/
  ZeitgeistPrimitivesPoolStatus: {
    _enum: ['Active', 'CollectingSubsidy', 'Closed', 'Clean', 'Initialized']
  },
  /**
   * Lookup74: zeitgeist_primitives::pool::ScoringRule
   **/
  ZeitgeistPrimitivesPoolScoringRule: {
    _enum: ['CPMM', 'RikiddoSigmoidFeeMarketEma']
  },
  /**
   * Lookup80: zrml_swaps::events::PoolAssetsEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::asset::Asset<MI>, B>
   **/
  ZrmlSwapsEventsPoolAssetsEvent: {
    assets: 'Vec<ZeitgeistPrimitivesAsset>',
    bounds: 'Vec<u128>',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    transferred: 'Vec<u128>',
    poolAmount: 'u128'
  },
  /**
   * Lookup82: zrml_swaps::events::PoolAssetEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::asset::Asset<MI>, B>
   **/
  ZrmlSwapsEventsPoolAssetEvent: {
    asset: 'ZeitgeistPrimitivesAsset',
    bound: 'u128',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    transferred: 'u128',
    poolAmount: 'u128'
  },
  /**
   * Lookup85: zrml_swaps::events::SwapEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::asset::Asset<MI>, B>
   **/
  ZrmlSwapsEventsSwapEvent: {
    assetAmountIn: 'u128',
    assetAmountOut: 'u128',
    assetBound: 'Option<u128>',
    assetIn: 'ZeitgeistPrimitivesAsset',
    assetOut: 'ZeitgeistPrimitivesAsset',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    maxPrice: 'Option<u128>'
  },
  /**
   * Lookup86: zrml_prediction_markets::pallet::Event<T>
   **/
  ZrmlPredictionMarketsEvent: {
    _enum: {
      BadOnInitialize: 'Null',
      BoughtCompleteSet: '(u128,u128,AccountId32)',
      MarketApproved: '(u128,ZeitgeistPrimitivesMarketMarketStatus)',
      MarketCreated: '(u128,AccountId32,ZeitgeistPrimitivesMarket)',
      MarketDestroyed: 'u128',
      MarketStartedWithSubsidy: '(u128,ZeitgeistPrimitivesMarketMarketStatus)',
      MarketInsufficientSubsidy: '(u128,ZeitgeistPrimitivesMarketMarketStatus)',
      MarketClosed: 'u128',
      MarketDisputed: '(u128,ZeitgeistPrimitivesMarketMarketStatus,ZeitgeistPrimitivesMarketMarketDispute)',
      MarketExpired: 'u128',
      MarketRejected: 'u128',
      MarketReported: '(u128,ZeitgeistPrimitivesMarketMarketStatus,ZeitgeistPrimitivesMarketReport)',
      MarketResolved: '(u128,ZeitgeistPrimitivesMarketMarketStatus,ZeitgeistPrimitivesOutcomeReport)',
      SoldCompleteSet: '(u128,u128,AccountId32)',
      TokensRedeemed: '(u128,ZeitgeistPrimitivesAsset,u128,u128,AccountId32)'
    }
  },
  /**
   * Lookup87: zeitgeist_primitives::market::MarketStatus
   **/
  ZeitgeistPrimitivesMarketMarketStatus: {
    _enum: ['Proposed', 'Active', 'Suspended', 'Closed', 'CollectingSubsidy', 'InsufficientSubsidy', 'Reported', 'Disputed', 'Resolved']
  },
  /**
   * Lookup88: zeitgeist_primitives::market::Market<sp_core::crypto::AccountId32, BN, M>
   **/
  ZeitgeistPrimitivesMarket: {
    creator: 'AccountId32',
    creation: 'ZeitgeistPrimitivesMarketMarketCreation',
    creatorFee: 'u8',
    oracle: 'AccountId32',
    metadata: 'Bytes',
    marketType: 'ZeitgeistPrimitivesMarketMarketType',
    period: 'ZeitgeistPrimitivesMarketMarketPeriod',
    deadlines: 'ZeitgeistPrimitivesMarketDeadlines',
    scoringRule: 'ZeitgeistPrimitivesPoolScoringRule',
    status: 'ZeitgeistPrimitivesMarketMarketStatus',
    report: 'Option<ZeitgeistPrimitivesMarketReport>',
    resolvedOutcome: 'Option<ZeitgeistPrimitivesOutcomeReport>',
    disputeMechanism: 'ZeitgeistPrimitivesMarketMarketDisputeMechanism'
  },
  /**
   * Lookup89: zeitgeist_primitives::market::MarketCreation
   **/
  ZeitgeistPrimitivesMarketMarketCreation: {
    _enum: ['Permissionless', 'Advised']
  },
  /**
   * Lookup90: zeitgeist_primitives::market::MarketType
   **/
  ZeitgeistPrimitivesMarketMarketType: {
    _enum: {
      Categorical: 'u16',
      Scalar: 'RangeInclusive<u128>'
    }
  },
  /**
   * Lookup92: zeitgeist_primitives::market::MarketPeriod<BN, M>
   **/
  ZeitgeistPrimitivesMarketMarketPeriod: {
    _enum: {
      Block: 'Range<u64>',
      Timestamp: 'Range<u64>'
    }
  },
  /**
   * Lookup94: zeitgeist_primitives::market::Deadlines<BN>
   **/
  ZeitgeistPrimitivesMarketDeadlines: {
    gracePeriod: 'u64',
    oracleDuration: 'u64',
    disputeDuration: 'u64'
  },
  /**
   * Lookup96: zeitgeist_primitives::market::Report<sp_core::crypto::AccountId32, BlockNumber>
   **/
  ZeitgeistPrimitivesMarketReport: {
    at: 'u64',
    by: 'AccountId32',
    outcome: 'ZeitgeistPrimitivesOutcomeReport'
  },
  /**
   * Lookup97: zeitgeist_primitives::outcome_report::OutcomeReport
   **/
  ZeitgeistPrimitivesOutcomeReport: {
    _enum: {
      Categorical: 'u16',
      Scalar: 'u128'
    }
  },
  /**
   * Lookup99: zeitgeist_primitives::market::MarketDisputeMechanism<sp_core::crypto::AccountId32>
   **/
  ZeitgeistPrimitivesMarketMarketDisputeMechanism: {
    _enum: {
      Authorized: 'AccountId32',
      Court: 'Null',
      SimpleDisputes: 'Null'
    }
  },
  /**
   * Lookup100: zeitgeist_primitives::market::MarketDispute<sp_core::crypto::AccountId32, BlockNumber>
   **/
  ZeitgeistPrimitivesMarketMarketDispute: {
    at: 'u64',
    by: 'AccountId32',
    outcome: 'ZeitgeistPrimitivesOutcomeReport'
  },
  /**
   * Lookup101: zrml_styx::pallet::Event<T>
   **/
  ZrmlStyxEvent: {
    _enum: {
      AccountCrossed: '(AccountId32,u128)',
      CrossingFeeChanged: 'u128'
    }
  },
  /**
   * Lookup102: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup105: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup106: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup107: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup109: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup112: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup115: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup120: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup121: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup122: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup124: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup125: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup126: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup127: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup131: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup132: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup137: pallet_scheduler::ScheduledV3<frame_support::traits::schedule::MaybeHashed<battery_station_runtime::Call, primitive_types::H256>, BlockNumber, battery_station_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV3: {
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call: 'FrameSupportScheduleMaybeHashed',
    maybePeriodic: 'Option<(u64,u32)>',
    origin: 'BatteryStationRuntimeOriginCaller'
  },
  /**
   * Lookup138: frame_support::traits::schedule::MaybeHashed<battery_station_runtime::Call, primitive_types::H256>
   **/
  FrameSupportScheduleMaybeHashed: {
    _enum: {
      Value: 'Call',
      Hash: 'H256'
    }
  },
  /**
   * Lookup140: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel: {
        when: 'u64',
        index: 'u32',
      },
      schedule_named: {
        id: 'Bytes',
        when: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel_named: {
        id: 'Bytes',
      },
      schedule_after: {
        after: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      schedule_named_after: {
        id: 'Bytes',
        after: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed'
      }
    }
  },
  /**
   * Lookup142: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup143: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup148: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup149: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32'
      }
    }
  },
  /**
   * Lookup150: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u64'
  },
  /**
   * Lookup151: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'WrapperKeepOpaque<Call>',
        storeCall: 'bool',
        maxWeight: 'u64',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'u64',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup154: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposalHash: 'H256',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
        secondsUpperBound: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposalHash: 'H256',
      },
      external_propose_majority: {
        proposalHash: 'H256',
      },
      external_propose_default: {
        proposalHash: 'H256',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u64',
        delay: 'u64',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      cancel_queued: {
        which: 'u32',
      },
      delegate: {
        to: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      note_preimage: {
        encodedProposal: 'Bytes',
      },
      note_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage: {
        encodedProposal: 'Bytes',
      },
      note_imminent_preimage_operational: {
        encodedProposal: 'Bytes',
      },
      reap_preimage: {
        proposalHash: 'H256',
        proposalLenUpperBound: 'Compact<u32>',
      },
      unlock: {
        target: 'AccountId32',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'AccountId32',
        index: 'u32',
      },
      enact_proposal: {
        proposalHash: 'H256',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup155: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup157: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup158: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'AccountId32',
      },
      remove_member: {
        who: 'AccountId32',
      },
      swap_member: {
        remove: 'AccountId32',
        add: 'AccountId32',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
      },
      set_prime: {
        who: 'AccountId32',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup163: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'AccountId32',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'AccountId32',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup164: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup201: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup202: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup203: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup204: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'BatteryStationRuntimeOriginCaller',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup206: battery_station_runtime::OriginCaller
   **/
  BatteryStationRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      AdvisoryCommittee: 'PalletCollectiveRawOrigin',
      __Unused22: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      __Unused24: 'Null',
      TechnicalCommittee: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup207: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup208: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup211: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup212: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'AccountId32',
        forceProxyType: 'Option<ZeitgeistPrimitivesProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'AccountId32',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64',
      },
      remove_proxy: {
        delegate: 'AccountId32',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64',
      },
      remove_proxies: 'Null',
      anonymous: {
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64',
        index: 'u16',
      },
      kill_anonymous: {
        spawner: 'AccountId32',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        index: 'u16',
        height: 'Compact<u64>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'AccountId32',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'AccountId32',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'AccountId32',
        real: 'AccountId32',
        forceProxyType: 'Option<ZeitgeistPrimitivesProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup214: orml_currencies::module::Call<T>
   **/
  OrmlCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'ZeitgeistPrimitivesAsset',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'MultiAddress',
        currencyId: 'ZeitgeistPrimitivesAsset',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup216: zrml_authorized::pallet::Call<T>
   **/
  ZrmlAuthorizedCall: {
    _enum: {
      authorize_market_outcome: {
        marketId: 'u128',
        outcome: 'ZeitgeistPrimitivesOutcomeReport'
      }
    }
  },
  /**
   * Lookup217: zrml_court::pallet::Call<T>
   **/
  ZrmlCourtCall: {
    _enum: {
      exit_court: 'Null',
      join_court: 'Null',
      vote: {
        marketId: 'Compact<u128>',
        outcome: 'ZeitgeistPrimitivesOutcomeReport'
      }
    }
  },
  /**
   * Lookup218: zrml_liquidity_mining::pallet::Call<T>
   **/
  ZrmlLiquidityMiningCall: {
    _enum: {
      set_per_block_distribution: {
        perBlockDistribution: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup219: zrml_swaps::pallet::Call<T>
   **/
  ZrmlSwapsCall: {
    _enum: {
      admin_clean_up_pool: {
        marketId: 'Compact<u128>',
        outcomeReport: 'ZeitgeistPrimitivesOutcomeReport',
      },
      pool_exit: {
        poolId: 'Compact<u128>',
        poolAmount: 'Compact<u128>',
        minAssetsOut: 'Vec<u128>',
      },
      pool_exit_subsidy: {
        poolId: 'Compact<u128>',
        amount: 'Compact<u128>',
      },
      pool_exit_with_exact_asset_amount: {
        poolId: 'Compact<u128>',
        asset: 'ZeitgeistPrimitivesAsset',
        assetAmount: 'Compact<u128>',
        maxPoolAmount: 'Compact<u128>',
      },
      pool_exit_with_exact_pool_amount: {
        poolId: 'Compact<u128>',
        asset: 'ZeitgeistPrimitivesAsset',
        poolAmount: 'Compact<u128>',
        minAssetAmount: 'Compact<u128>',
      },
      pool_join: {
        poolId: 'Compact<u128>',
        poolAmount: 'Compact<u128>',
        maxAssetsIn: 'Vec<u128>',
      },
      pool_join_subsidy: {
        poolId: 'Compact<u128>',
        amount: 'Compact<u128>',
      },
      pool_join_with_exact_asset_amount: {
        poolId: 'Compact<u128>',
        assetIn: 'ZeitgeistPrimitivesAsset',
        assetAmount: 'Compact<u128>',
        minPoolAmount: 'Compact<u128>',
      },
      pool_join_with_exact_pool_amount: {
        poolId: 'Compact<u128>',
        asset: 'ZeitgeistPrimitivesAsset',
        poolAmount: 'Compact<u128>',
        maxAssetAmount: 'Compact<u128>',
      },
      swap_exact_amount_in: {
        poolId: 'Compact<u128>',
        assetIn: 'ZeitgeistPrimitivesAsset',
        assetAmountIn: 'Compact<u128>',
        assetOut: 'ZeitgeistPrimitivesAsset',
        minAssetAmountOut: 'Option<u128>',
        maxPrice: 'Option<u128>',
      },
      swap_exact_amount_out: {
        poolId: 'Compact<u128>',
        assetIn: 'ZeitgeistPrimitivesAsset',
        maxAssetAmountIn: 'Option<u128>',
        assetOut: 'ZeitgeistPrimitivesAsset',
        assetAmountOut: 'Compact<u128>',
        maxPrice: 'Option<u128>'
      }
    }
  },
  /**
   * Lookup220: zrml_prediction_markets::pallet::Call<T>
   **/
  ZrmlPredictionMarketsCall: {
    _enum: {
      admin_destroy_market: {
        marketId: 'Compact<u128>',
      },
      admin_move_market_to_closed: {
        marketId: 'Compact<u128>',
      },
      admin_move_market_to_resolved: {
        marketId: 'Compact<u128>',
      },
      approve_market: {
        marketId: 'Compact<u128>',
      },
      buy_complete_set: {
        marketId: 'Compact<u128>',
        amount: 'Compact<u128>',
      },
      dispute: {
        marketId: 'Compact<u128>',
        outcome: 'ZeitgeistPrimitivesOutcomeReport',
      },
      create_cpmm_market_and_deploy_assets: {
        oracle: 'AccountId32',
        period: 'ZeitgeistPrimitivesMarketMarketPeriod',
        deadlines: 'ZeitgeistPrimitivesMarketDeadlines',
        metadata: 'ZeitgeistPrimitivesMultiHash',
        marketType: 'ZeitgeistPrimitivesMarketMarketType',
        disputeMechanism: 'ZeitgeistPrimitivesMarketMarketDisputeMechanism',
        swapFee: 'Compact<u128>',
        amount: 'Compact<u128>',
        weights: 'Vec<u128>',
      },
      create_market: {
        oracle: 'AccountId32',
        period: 'ZeitgeistPrimitivesMarketMarketPeriod',
        deadlines: 'ZeitgeistPrimitivesMarketDeadlines',
        metadata: 'ZeitgeistPrimitivesMultiHash',
        creation: 'ZeitgeistPrimitivesMarketMarketCreation',
        marketType: 'ZeitgeistPrimitivesMarketMarketType',
        disputeMechanism: 'ZeitgeistPrimitivesMarketMarketDisputeMechanism',
        scoringRule: 'ZeitgeistPrimitivesPoolScoringRule',
      },
      deploy_swap_pool_and_additional_liquidity: {
        marketId: 'Compact<u128>',
        swapFee: 'Compact<u128>',
        amount: 'Compact<u128>',
        weights: 'Vec<u128>',
      },
      deploy_swap_pool_for_market: {
        marketId: 'Compact<u128>',
        swapFee: 'Compact<u128>',
        amount: 'Compact<u128>',
        weights: 'Vec<u128>',
      },
      redeem_shares: {
        marketId: 'Compact<u128>',
      },
      reject_market: {
        marketId: 'Compact<u128>',
      },
      report: {
        marketId: 'Compact<u128>',
        outcome: 'ZeitgeistPrimitivesOutcomeReport',
      },
      sell_complete_set: {
        marketId: 'Compact<u128>',
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup221: zeitgeist_primitives::types::MultiHash
   **/
  ZeitgeistPrimitivesMultiHash: {
    _enum: {
      Sha3_384: '[u8;50]'
    }
  },
  /**
   * Lookup223: zrml_styx::pallet::Call<T>
   **/
  ZrmlStyxCall: {
    _enum: {
      cross: 'Null',
      set_burn_amount: {
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup224: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u64',
        bestFinalizedBlockNumber: 'u64'
      }
    }
  },
  /**
   * Lookup225: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup226: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup227: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup228: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup229: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup230: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup233: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup234: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u64'
  },
  /**
   * Lookup236: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup237: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
  },
  /**
   * Lookup238: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: 'Option<(AccountId32,u128)>',
      Requested: 'u32'
    }
  },
  /**
   * Lookup241: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooLarge', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup243: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup244: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup247: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup249: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup250: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup252: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup254: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup255: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup259: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup260: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals']
  },
  /**
   * Lookup263: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup264: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup266: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup268: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup272: pallet_democracy::PreimageStatus<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletDemocracyPreimageStatus: {
    _enum: {
      Missing: 'u64',
      Available: {
        data: 'Bytes',
        provider: 'AccountId32',
        deposit: 'u128',
        since: 'u64',
        expiry: 'Option<u64>'
      }
    }
  },
  /**
   * Lookup273: pallet_democracy::types::ReferendumInfo<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u64'
      }
    }
  },
  /**
   * Lookup274: pallet_democracy::types::ReferendumStatus<BlockNumber, primitive_types::H256, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u64',
    proposalHash: 'H256',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u64',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup275: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup276: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup279: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup280: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u64,u128)',
  /**
   * Lookup283: pallet_democracy::Releases
   **/
  PalletDemocracyReleases: {
    _enum: ['V1']
  },
  /**
   * Lookup284: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'DuplicatePreimage', 'NotImminent', 'TooEarly', 'Imminent', 'PreimageMissing', 'ReferendumInvalid', 'PreimageInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooManyProposals']
  },
  /**
   * Lookup286: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u64'
  },
  /**
   * Lookup287: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup288: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember']
  },
  /**
   * Lookup295: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup303: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup305: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned']
  },
  /**
   * Lookup306: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup309: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, zeitgeist_primitives::proxy_type::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'ZeitgeistPrimitivesProxyType',
    delay: 'u64'
  },
  /**
   * Lookup313: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u64'
  },
  /**
   * Lookup315: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup316: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup319: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup321: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup323: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup325: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup326: zrml_market_commons::pallet::Error<T>
   **/
  ZrmlMarketCommonsError: {
    _enum: ['MarketDoesNotExist', 'MarketPoolDoesNotExist', 'NoMarketHasBeenCreated', 'NoReport', 'PoolAlreadyExists']
  },
  /**
   * Lookup327: zrml_authorized::pallet::Error<T>
   **/
  ZrmlAuthorizedError: {
    _enum: ['NotAuthorizedForThisMarket', 'MarketDoesNotHaveDisputeMechanismAuthorized', 'MarketIsNotDisputed', 'OutcomeMismatch']
  },
  /**
   * Lookup330: zrml_court::pallet::Error<T>
   **/
  ZrmlCourtError: {
    _enum: ['JurorAlreadyExists', 'JurorDoesNotExists', 'MarketDoesNotHaveCourtMechanism', 'NoVotes', 'OnlyJurorsCanVote']
  },
  /**
   * Lookup331: zrml_liquidity_mining::owned_values_params::OwnedValuesParams<BA, BN>
   **/
  ZrmlLiquidityMiningOwnedValuesParams: {
    participatedBlocks: 'u64',
    perpetualIncentives: 'u128',
    totalIncentives: 'u128',
    totalShares: 'u128'
  },
  /**
   * Lookup332: zrml_liquidity_mining::pallet::Error<T>
   **/
  ZrmlLiquidityMiningError: {
    _enum: ['FundDoesNotHaveEnoughBalance']
  },
  /**
   * Lookup333: zrml_rikiddo::types::rikiddo_sigmoid_mv::RikiddoSigmoidMV<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>, substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>, zrml_rikiddo::types::sigmoid_fee::FeeSigmoid<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>, zrml_rikiddo::types::ema_market_volume::EmaMarketVolume<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>>
   **/
  ZrmlRikiddoRikiddoSigmoidMV: {
    config: 'ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig',
    fees: 'ZrmlRikiddoSigmoidFeeFeeSigmoid',
    maShort: 'ZrmlRikiddoEmaMarketVolume',
    maLong: 'ZrmlRikiddoEmaMarketVolume'
  },
  /**
   * Lookup334: substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>
   **/
  SubstrateFixedFixedU128: {
    bits: 'u128'
  },
  /**
   * Lookup339: typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>
   **/
  TypenumUIntUInt: {
    msb: 'TypenumUIntUTerm',
    lsb: 'TypenumBitB0'
  },
  /**
   * Lookup340: typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>
   **/
  TypenumUIntUTerm: {
    msb: 'TypenumUintUTerm',
    lsb: 'TypenumBitB1'
  },
  /**
   * Lookup341: typenum::uint::UTerm
   **/
  TypenumUintUTerm: 'Null',
  /**
   * Lookup342: typenum::bit::B1
   **/
  TypenumBitB1: 'Null',
  /**
   * Lookup343: typenum::bit::B0
   **/
  TypenumBitB0: 'Null',
  /**
   * Lookup344: substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>
   **/
  SubstrateFixedFixedI128: {
    bits: 'i128'
  },
  /**
   * Lookup345: zrml_rikiddo::types::sigmoid_fee::FeeSigmoid<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoSigmoidFeeFeeSigmoid: {
    config: 'ZrmlRikiddoSigmoidFeeFeeSigmoidConfig'
  },
  /**
   * Lookup346: zrml_rikiddo::types::sigmoid_fee::FeeSigmoidConfig<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoSigmoidFeeFeeSigmoidConfig: {
    m: 'SubstrateFixedFixedI128',
    p: 'SubstrateFixedFixedI128',
    n: 'SubstrateFixedFixedI128',
    initialFee: 'SubstrateFixedFixedI128',
    minRevenue: 'SubstrateFixedFixedI128'
  },
  /**
   * Lookup347: zrml_rikiddo::types::ema_market_volume::EmaMarketVolume<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoEmaMarketVolume: {
    config: 'ZrmlRikiddoEmaMarketVolumeEmaConfig',
    ema: 'SubstrateFixedFixedU128',
    multiplier: 'SubstrateFixedFixedU128',
    lastTime: 'u64',
    state: 'ZrmlRikiddoEmaMarketVolumeMarketVolumeState',
    startTime: 'u64',
    volumesPerPeriod: 'SubstrateFixedFixedU128'
  },
  /**
   * Lookup348: zrml_rikiddo::types::ema_market_volume::EmaConfig<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoEmaMarketVolumeEmaConfig: {
    emaPeriod: 'ZrmlRikiddoTimespan',
    emaPeriodEstimateAfter: 'Option<ZrmlRikiddoTimespan>',
    smoothing: 'SubstrateFixedFixedU128'
  },
  /**
   * Lookup349: zrml_rikiddo::types::Timespan
   **/
  ZrmlRikiddoTimespan: {
    _enum: {
      Seconds: 'u32',
      Minutes: 'u32',
      Hours: 'u32',
      Days: 'u16',
      Weeks: 'u16'
    }
  },
  /**
   * Lookup351: zrml_rikiddo::types::ema_market_volume::MarketVolumeState
   **/
  ZrmlRikiddoEmaMarketVolumeMarketVolumeState: {
    _enum: ['Uninitialized', 'DataCollectionStarted', 'DataCollected']
  },
  /**
   * Lookup352: zrml_rikiddo::types::rikiddo_sigmoid_mv::RikiddoConfig<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig: {
    initialFee: 'SubstrateFixedFixedI128',
    log2E: 'SubstrateFixedFixedI128'
  },
  /**
   * Lookup353: zrml_rikiddo::pallet::Error<T, I>
   **/
  ZrmlRikiddoError: {
    _enum: ['FixedConversionImpossible', 'RikiddoNotFoundForPool', 'RikiddoAlreadyExistsForPool']
  },
  /**
   * Lookup354: zrml_simple_disputes::pallet::Error<T>
   **/
  ZrmlSimpleDisputesError: {
    _enum: ['InvalidMarketStatus', 'MarketDoesNotHaveSimpleDisputesMechanism']
  },
  /**
   * Lookup356: zrml_swaps::pallet::Error<T>
   **/
  ZrmlSwapsError: {
    _enum: ['AboveMaximumWeight', 'AssetNotBound', 'AssetNotInPool', 'BaseAssetNotFound', 'BadLimitPrice', 'BelowMinimumWeight', 'InsufficientBalance', 'InsufficientLiquidity', 'InsufficientSubsidy', 'InvalidAmountArgument', 'InvalidFeeArgument', 'InvalidPoolStatus', 'InvalidScoringRule', 'InvalidStateTransition', 'InvalidWeightArgument', 'LimitIn', 'InvalidSubsidyAmount', 'LimitMissing', 'LimitOut', 'MathApproximation', 'MaxInRatio', 'MaxOutRatio', 'MaxTotalWeight', 'NoSubsidyProvided', 'PoolDoesNotExist', 'PoolDrain', 'PoolIsNotActive', 'PoolMissingFee', 'PoolMissingSubsidy', 'PoolMissingWeight', 'ProvidedValuesLenMustEqualAssetsLen', 'SwapFeeMissing', 'SwapFeeTooHigh', 'TooFewAssets', 'TooManyAssets', 'SomeIdenticalAssets', 'UnsupportedTrade', 'WinningAssetNotFound', 'ZeroAmount']
  },
  /**
   * Lookup361: zeitgeist_primitives::market::SubsidyUntil<BN, MO, MI>
   **/
  ZeitgeistPrimitivesMarketSubsidyUntil: {
    marketId: 'u128',
    period: 'ZeitgeistPrimitivesMarketMarketPeriod'
  },
  /**
   * Lookup364: zrml_prediction_markets::pallet::Error<T>
   **/
  ZrmlPredictionMarketsError: {
    _enum: ['CannotDisputeSameOutcome', 'InsufficientFundsInMarketAccount', 'InsufficientShareBalance', 'InvalidMultihash', 'InvalidMarketType', 'InvalidScoringRule', 'NotEnoughBalance', 'MarketAlreadyReported', 'MarketIsNotActive', 'MarketIsNotClosed', 'MarketIsNotCollectingSubsidy', 'MarketIsNotProposed', 'MarketIsNotReported', 'MarketIsNotResolved', 'MarketStartTooSoon', 'MarketStartTooLate', 'MaxDisputesReached', 'NotEnoughCategories', 'NoWinningBalance', 'OutcomeMismatch', 'ReporterNotOracle', 'StorageOverflow', 'TooManyCategories', 'InvalidMarketStatus', 'UnexpectedNoneInPostInfo', 'ZeroAmount', 'InvalidMarketPeriod', 'InvalidOutcomeRange', 'NotAllowedToReportYet', 'DisputeDurationSmallerThanMinDisputeDuration', 'OracleDurationSmallerThanMinOracleDuration', 'DisputeDurationGreaterThanMaxDisputeDuration', 'GracePeriodGreaterThanMaxGracePeriod', 'OracleDurationGreaterThanMaxOracleDuration', 'WeightsLenMustEqualAssetsLen']
  },
  /**
   * Lookup365: zrml_styx::pallet::Error<T>
   **/
  ZrmlStyxError: {
    _enum: ['FundDoesNotHaveEnoughFreeBalance', 'HasAlreadyCrossed']
  },
  /**
   * Lookup367: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup368: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup371: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u64',
        delay: 'u64',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u64',
        delay: 'u64'
      }
    }
  },
  /**
   * Lookup372: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u64',
    delay: 'u64',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u64>'
  },
  /**
   * Lookup375: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup376: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup378: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup379: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup380: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup383: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup384: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup385: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup386: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup389: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u64>',
  /**
   * Lookup390: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup391: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup392: battery_station_runtime::Runtime
   **/
  BatteryStationRuntimeRuntime: 'Null'
};
