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
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::DigestItem
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
   * Lookup18: frame_system::EventRecord<battery_station_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup20: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
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
   * Lookup21: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup23: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup24: sp_runtime::DispatchError
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
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup25: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup26: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup27: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup28: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup29: pallet_scheduler::pallet::Event<T>
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
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u64,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup34: pallet_preimage::pallet::Event<T>
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
   * Lookup35: pallet_balances::pallet::Event<T, I>
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
   * Lookup36: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup37: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup38: pallet_treasury::pallet::Event<T, I>
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
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup39: pallet_vesting::pallet::Event<T>
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
   * Lookup40: pallet_multisig::pallet::Event<T>
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
   * Lookup41: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u64',
    index: 'u32'
  },
  /**
   * Lookup42: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup43: pallet_asset_tx_payment::pallet::Event<T>
   **/
  PalletAssetTxPaymentEvent: {
    _enum: {
      AssetTxFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128',
        assetId: 'Option<ZeitgeistPrimitivesAssetsAllAssetsAsset>'
      }
    }
  },
  /**
   * Lookup45: zeitgeist_primitives::assets::all_assets::Asset<MI>
   **/
  ZeitgeistPrimitivesAssetsAllAssetsAsset: {
    _enum: {
      CategoricalOutcome: '(u128,u16)',
      ScalarOutcome: '(u128,ZeitgeistPrimitivesAssetsScalarPosition)',
      __Unused2: 'Null',
      PoolShare: 'u128',
      Ztg: 'Null',
      ForeignAsset: 'u32',
      ParimutuelShare: '(u128,u16)',
      CampaignAsset: 'Compact<u128>',
      CustomAsset: 'Compact<u128>'
    }
  },
  /**
   * Lookup47: zeitgeist_primitives::assets::ScalarPosition
   **/
  ZeitgeistPrimitivesAssetsScalarPosition: {
    _enum: ['Long', 'Short']
  },
  /**
   * Lookup49: pallet_assets::pallet::Event<T, I>
   **/
  PalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      Issued: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        owner: 'AccountId32',
        amount: 'u128',
      },
      Transferred: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        owner: 'AccountId32',
        balance: 'u128',
      },
      TeamChanged: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      OwnerChanged: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        owner: 'AccountId32',
      },
      Frozen: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        who: 'AccountId32',
      },
      Thawed: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        who: 'AccountId32',
      },
      AssetFrozen: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
      },
      AssetThawed: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
      },
      AccountsDestroyed: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        accountsDestroyed: 'u32',
        accountsRemaining: 'u32',
      },
      ApprovalsDestroyed: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        approvalsDestroyed: 'u32',
        approvalsRemaining: 'u32',
      },
      DestructionStarted: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
      },
      Destroyed: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
      },
      ForceCreated: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        owner: 'AccountId32',
      },
      MetadataSet: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
      },
      ApprovedTransfer: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128',
      },
      ApprovalCancelled: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      TransferredApproved: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
      },
      AssetStatusChanged: {
        assetId: 'ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass'
      }
    }
  },
  /**
   * Lookup50: zeitgeist_primitives::assets::custom_assets::CustomAssetClass
   **/
  ZeitgeistPrimitivesAssetsCustomAssetsCustomAssetClass: 'Compact<u128>',
  /**
   * Lookup53: zeitgeist_primitives::assets::campaign_assets::CampaignAssetClass
   **/
  ZeitgeistPrimitivesAssetsCampaignAssetsCampaignAssetClass: 'Compact<u128>',
  /**
   * Lookup55: zeitgeist_primitives::assets::market_assets::MarketAssetClass<MI>
   **/
  ZeitgeistPrimitivesAssetsMarketAssetsMarketAssetClass: {
    _enum: {
      CategoricalOutcome: '(u128,u16)',
      ScalarOutcome: '(u128,ZeitgeistPrimitivesAssetsScalarPosition)',
      __Unused2: 'Null',
      PoolShare: 'u128',
      __Unused4: 'Null',
      __Unused5: 'Null',
      ParimutuelShare: '(u128,u16)'
    }
  },
  /**
   * Lookup56: pallet_democracy::pallet::Event<T>
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
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32'
      }
    }
  },
  /**
   * Lookup57: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup58: pallet_democracy::vote::AccountVote<Balance>
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
   * Lookup60: pallet_collective::pallet::Event<T, I>
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
   * Lookup61: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup66: pallet_identity::pallet::Event<T>
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
   * Lookup67: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup68: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
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
   * Lookup69: zeitgeist_primitives::proxy_type::ProxyType
   **/
  ZeitgeistPrimitivesProxyType: {
    _enum: ['Any', 'CancelProxy', 'Governance', 'Staking', 'CreateEditMarket', 'ReportOutcome', 'Dispute', 'ProvideLiquidity', 'BuySellCompleteSets', 'Trading', 'HandleAssets']
  },
  /**
   * Lookup70: pallet_contracts::pallet::Event<T>
   **/
  PalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'AccountId32',
        contract: 'AccountId32',
      },
      Terminated: {
        contract: 'AccountId32',
        beneficiary: 'AccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
      },
      ContractEmitted: {
        contract: 'AccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
      },
      ContractCodeUpdated: {
        contract: 'AccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'AccountId32',
        contract: 'AccountId32',
      },
      DelegateCalled: {
        contract: 'AccountId32',
        codeHash: 'H256'
      }
    }
  },
  /**
   * Lookup71: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
      },
      Locked: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup72: zeitgeist_primitives::assets::currencies::CurrencyClass<MI>
   **/
  ZeitgeistPrimitivesAssetsCurrenciesCurrencyClass: {
    _enum: {
      CategoricalOutcome: '(u128,u16)',
      ScalarOutcome: '(u128,ZeitgeistPrimitivesAssetsScalarPosition)',
      __Unused2: 'Null',
      PoolShare: 'u128',
      __Unused4: 'Null',
      ForeignAsset: 'u32',
      ParimutuelShare: '(u128,u16)'
    }
  },
  /**
   * Lookup74: zrml_authorized::pallet::Event<T>
   **/
  ZrmlAuthorizedEvent: {
    _enum: {
      AuthorityReported: {
        marketId: 'u128',
        outcome: 'ZeitgeistPrimitivesOutcomeReport'
      }
    }
  },
  /**
   * Lookup75: zeitgeist_primitives::outcome_report::OutcomeReport
   **/
  ZeitgeistPrimitivesOutcomeReport: {
    _enum: {
      Categorical: 'u16',
      Scalar: 'u128'
    }
  },
  /**
   * Lookup76: zrml_court::pallet::Event<T>
   **/
  ZrmlCourtEvent: {
    _enum: {
      CourtOpened: {
        marketId: 'u128',
        courtInfo: 'ZrmlCourtCourtInfo',
      },
      JurorJoined: {
        juror: 'AccountId32',
        stake: 'u128',
      },
      ExitPrepared: {
        courtParticipant: 'AccountId32',
      },
      ExitedCourt: {
        courtParticipant: 'AccountId32',
        exitAmount: 'u128',
        activeLock: 'u128',
      },
      JurorVoted: {
        courtId: 'u128',
        juror: 'AccountId32',
        commitment: 'H256',
      },
      JurorRevealedVote: {
        juror: 'AccountId32',
        courtId: 'u128',
        voteItem: 'ZrmlCourtVoteItem',
        salt: 'H256',
        slashableAmount: 'u128',
        drawWeight: 'u32',
      },
      DenouncedJurorVote: {
        denouncer: 'AccountId32',
        juror: 'AccountId32',
        courtId: 'u128',
        voteItem: 'ZrmlCourtVoteItem',
        salt: 'H256',
      },
      DelegatorJoined: {
        delegator: 'AccountId32',
        stake: 'u128',
        delegatedJurors: 'Vec<AccountId32>',
      },
      CourtAppealed: {
        courtId: 'u128',
        appealInfo: 'ZrmlCourtAppealInfo',
        newRoundEnds: 'Option<ZrmlCourtRoundTiming>',
      },
      MintedInCourt: {
        courtParticipant: 'AccountId32',
        amount: 'u128',
      },
      StakesReassigned: {
        courtId: 'u128',
      },
      InflationSet: {
        inflation: 'Perbill'
      }
    }
  },
  /**
   * Lookup77: zrml_court::types::CourtInfo<BlockNumber, sp_core::bounded::bounded_vec::BoundedVec<zrml_court::types::AppealInfo<sp_core::crypto::AccountId32, Balance>, S>>
   **/
  ZrmlCourtCourtInfo: {
    status: 'ZrmlCourtCourtStatus',
    appeals: 'Vec<ZrmlCourtAppealInfo>',
    roundEnds: 'ZrmlCourtRoundTiming',
    voteItemType: 'ZrmlCourtVoteItemType'
  },
  /**
   * Lookup79: zrml_court::types::AppealInfo<sp_core::crypto::AccountId32, Balance>
   **/
  ZrmlCourtAppealInfo: {
    backer: 'AccountId32',
    bond: 'u128',
    appealedVoteItem: 'ZrmlCourtVoteItem'
  },
  /**
   * Lookup80: zrml_court::types::VoteItem
   **/
  ZrmlCourtVoteItem: {
    _enum: {
      Outcome: 'ZeitgeistPrimitivesOutcomeReport',
      Binary: 'bool'
    }
  },
  /**
   * Lookup82: zrml_court::types::CourtStatus
   **/
  ZrmlCourtCourtStatus: {
    _enum: {
      Open: 'Null',
      Closed: {
        winner: 'ZrmlCourtVoteItem',
      },
      Reassigned: 'Null'
    }
  },
  /**
   * Lookup83: zrml_court::types::RoundTiming<BlockNumber>
   **/
  ZrmlCourtRoundTiming: {
    preVote: 'u64',
    vote: 'u64',
    aggregation: 'u64',
    appeal: 'u64'
  },
  /**
   * Lookup84: zrml_court::types::VoteItemType
   **/
  ZrmlCourtVoteItemType: {
    _enum: ['Outcome', 'Binary']
  },
  /**
   * Lookup88: zrml_liquidity_mining::pallet::Event<T>
   **/
  ZrmlLiquidityMiningEvent: {
    _enum: {
      AddedIncentives: 'u64',
      DistributedIncentives: '(u128,u64)',
      SubtractedIncentives: 'u64'
    }
  },
  /**
   * Lookup90: zrml_simple_disputes::pallet::Event<T>
   **/
  ZrmlSimpleDisputesEvent: {
    _enum: {
      OutcomeReserved: {
        marketId: 'u128',
        dispute: 'ZeitgeistPrimitivesMarketMarketDispute'
      }
    }
  },
  /**
   * Lookup91: zeitgeist_primitives::market::MarketDispute<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  ZeitgeistPrimitivesMarketMarketDispute: {
    at: 'u64',
    by: 'AccountId32',
    outcome: 'ZeitgeistPrimitivesOutcomeReport',
    bond: 'u128'
  },
  /**
   * Lookup92: zrml_swaps::pallet::Event<T>
   **/
  ZrmlSwapsEvent: {
    _enum: {
      DistributeShareHolderRewards: {
        poolId: 'u128',
        numAccountsRewarded: 'u64',
        amount: 'u128',
      },
      PoolCreate: {
        common: 'ZrmlSwapsEventsCommonPoolEventParams',
        pool: 'ZrmlSwapsPool',
        poolAmount: 'u128',
        poolAccount: 'AccountId32',
      },
      PoolClosed: {
        poolId: 'u128',
      },
      PoolCleanedUp: {
        poolId: 'u128',
      },
      PoolActive: {
        poolId: 'u128',
      },
      PoolExit: 'ZrmlSwapsEventsPoolAssetsEvent',
      PoolExitWithExactAssetAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      PoolExitWithExactPoolAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      PoolJoin: 'ZrmlSwapsEventsPoolAssetsEvent',
      PoolJoinWithExactAssetAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      PoolJoinWithExactPoolAmount: 'ZrmlSwapsEventsPoolAssetEvent',
      PoolDestroyed: {
        poolId: 'u128',
      },
      __Unused12: 'Null',
      SwapExactAmountIn: 'ZrmlSwapsEventsSwapEvent',
      SwapExactAmountOut: 'ZrmlSwapsEventsSwapEvent'
    }
  },
  /**
   * Lookup93: zrml_swaps::events::CommonPoolEventParams<sp_core::crypto::AccountId32>
   **/
  ZrmlSwapsEventsCommonPoolEventParams: {
    poolId: 'u128',
    who: 'AccountId32'
  },
  /**
   * Lookup94: zrml_swaps::types::pool::Pool<zeitgeist_primitives::assets::all_assets::Asset<MI>, Balance>
   **/
  ZrmlSwapsPool: {
    assets: 'Vec<ZeitgeistPrimitivesAssetsAllAssetsAsset>',
    status: 'ZrmlSwapsPoolPoolStatus',
    swapFee: 'u128',
    totalWeight: 'u128',
    weights: 'BTreeMap<ZeitgeistPrimitivesAssetsAllAssetsAsset, u128>'
  },
  /**
   * Lookup97: zrml_swaps::types::pool::PoolStatus
   **/
  ZrmlSwapsPoolPoolStatus: {
    _enum: ['Open', 'Closed']
  },
  /**
   * Lookup102: zrml_swaps::events::PoolAssetsEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::assets::all_assets::Asset<MI>, B>
   **/
  ZrmlSwapsEventsPoolAssetsEvent: {
    assets: 'Vec<ZeitgeistPrimitivesAssetsAllAssetsAsset>',
    bounds: 'Vec<u128>',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    transferred: 'Vec<u128>',
    poolAmount: 'u128'
  },
  /**
   * Lookup104: zrml_swaps::events::PoolAssetEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::assets::all_assets::Asset<MI>, B>
   **/
  ZrmlSwapsEventsPoolAssetEvent: {
    asset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
    bound: 'u128',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    transferred: 'u128',
    poolAmount: 'u128'
  },
  /**
   * Lookup105: zrml_swaps::events::SwapEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::assets::all_assets::Asset<MI>, B>
   **/
  ZrmlSwapsEventsSwapEvent: {
    assetAmountIn: 'u128',
    assetAmountOut: 'u128',
    assetBound: 'Option<u128>',
    assetIn: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
    assetOut: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    maxPrice: 'Option<u128>'
  },
  /**
   * Lookup107: zrml_prediction_markets::pallet::Event<T>
   **/
  ZrmlPredictionMarketsEvent: {
    _enum: {
      BadOnInitialize: 'Null',
      BoughtCompleteSet: '(u128,u128,AccountId32)',
      MarketApproved: '(u128,ZeitgeistPrimitivesMarketMarketStatus)',
      MarketCreated: '(u128,AccountId32,ZeitgeistPrimitivesMarket)',
      MarketDestroyed: 'u128',
      MarketClosed: 'u128',
      MarketEarlyCloseScheduled: {
        marketId: 'u128',
        newPeriod: 'ZeitgeistPrimitivesMarketMarketPeriod',
        state: 'ZeitgeistPrimitivesMarketEarlyCloseState',
      },
      MarketEarlyCloseDisputed: {
        marketId: 'u128',
      },
      MarketEarlyCloseRejected: {
        marketId: 'u128',
      },
      MarketDisputed: '(u128,ZeitgeistPrimitivesMarketMarketStatus,AccountId32)',
      MarketExpired: 'u128',
      MarketRejected: '(u128,Bytes)',
      MarketReported: '(u128,ZeitgeistPrimitivesMarketMarketStatus,ZeitgeistPrimitivesMarketReport)',
      MarketResolved: '(u128,ZeitgeistPrimitivesMarketMarketStatus,ZeitgeistPrimitivesOutcomeReport)',
      MarketRequestedEdit: '(u128,Bytes)',
      MarketEdited: '(u128,ZeitgeistPrimitivesMarket)',
      SoldCompleteSet: '(u128,u128,AccountId32)',
      TokensRedeemed: '(u128,ZeitgeistPrimitivesAssetsAllAssetsAsset,u128,u128,AccountId32)',
      GlobalDisputeStarted: 'u128',
      RecoveryLimitReached: {
        lastTimeFrame: 'u64',
        limitTimeFrame: 'u64'
      }
    }
  },
  /**
   * Lookup108: zeitgeist_primitives::market::MarketStatus
   **/
  ZeitgeistPrimitivesMarketMarketStatus: {
    _enum: ['Proposed', 'Active', 'Closed', 'Reported', 'Disputed', 'Resolved']
  },
  /**
   * Lookup109: zeitgeist_primitives::market::Market<sp_core::crypto::AccountId32, BA, BN, M, zeitgeist_primitives::assets::subsets::base_assets::BaseAssetClass>
   **/
  ZeitgeistPrimitivesMarket: {
    baseAsset: 'ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass',
    creator: 'AccountId32',
    creation: 'ZeitgeistPrimitivesMarketMarketCreation',
    creatorFee: 'Perbill',
    oracle: 'AccountId32',
    metadata: 'Bytes',
    marketType: 'ZeitgeistPrimitivesMarketMarketType',
    period: 'ZeitgeistPrimitivesMarketMarketPeriod',
    deadlines: 'ZeitgeistPrimitivesMarketDeadlines',
    scoringRule: 'ZeitgeistPrimitivesMarketScoringRule',
    status: 'ZeitgeistPrimitivesMarketMarketStatus',
    report: 'Option<ZeitgeistPrimitivesMarketReport>',
    resolvedOutcome: 'Option<ZeitgeistPrimitivesOutcomeReport>',
    disputeMechanism: 'Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>',
    bonds: 'ZeitgeistPrimitivesMarketMarketBonds',
    earlyClose: 'Option<ZeitgeistPrimitivesMarketEarlyClose>'
  },
  /**
   * Lookup110: zeitgeist_primitives::assets::subsets::base_assets::BaseAssetClass
   **/
  ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Ztg: 'Null',
      ForeignAsset: 'u32',
      __Unused6: 'Null',
      CampaignAsset: 'Compact<u128>'
    }
  },
  /**
   * Lookup111: zeitgeist_primitives::market::MarketCreation
   **/
  ZeitgeistPrimitivesMarketMarketCreation: {
    _enum: ['Permissionless', 'Advised']
  },
  /**
   * Lookup112: zeitgeist_primitives::market::MarketType
   **/
  ZeitgeistPrimitivesMarketMarketType: {
    _enum: {
      Categorical: 'u16',
      Scalar: 'RangeInclusive<u128>'
    }
  },
  /**
   * Lookup114: zeitgeist_primitives::market::MarketPeriod<BN, M>
   **/
  ZeitgeistPrimitivesMarketMarketPeriod: {
    _enum: {
      Block: 'Range<u64>',
      Timestamp: 'Range<u64>'
    }
  },
  /**
   * Lookup116: zeitgeist_primitives::market::Deadlines<BN>
   **/
  ZeitgeistPrimitivesMarketDeadlines: {
    gracePeriod: 'u64',
    oracleDuration: 'u64',
    disputeDuration: 'u64'
  },
  /**
   * Lookup117: zeitgeist_primitives::market::ScoringRule
   **/
  ZeitgeistPrimitivesMarketScoringRule: {
    _enum: ['Lmsr', 'Orderbook', 'Parimutuel']
  },
  /**
   * Lookup119: zeitgeist_primitives::market::Report<sp_core::crypto::AccountId32, BlockNumber>
   **/
  ZeitgeistPrimitivesMarketReport: {
    at: 'u64',
    by: 'AccountId32',
    outcome: 'ZeitgeistPrimitivesOutcomeReport'
  },
  /**
   * Lookup122: zeitgeist_primitives::market::MarketDisputeMechanism
   **/
  ZeitgeistPrimitivesMarketMarketDisputeMechanism: {
    _enum: ['Authorized', 'Court', 'SimpleDisputes']
  },
  /**
   * Lookup123: zeitgeist_primitives::market::MarketBonds<sp_core::crypto::AccountId32, BA>
   **/
  ZeitgeistPrimitivesMarketMarketBonds: {
    creation: 'Option<ZeitgeistPrimitivesMarketBond>',
    oracle: 'Option<ZeitgeistPrimitivesMarketBond>',
    outsider: 'Option<ZeitgeistPrimitivesMarketBond>',
    dispute: 'Option<ZeitgeistPrimitivesMarketBond>',
    closeRequest: 'Option<ZeitgeistPrimitivesMarketBond>',
    closeDispute: 'Option<ZeitgeistPrimitivesMarketBond>'
  },
  /**
   * Lookup125: zeitgeist_primitives::market::Bond<sp_core::crypto::AccountId32, BA>
   **/
  ZeitgeistPrimitivesMarketBond: {
    who: 'AccountId32',
    value: 'u128',
    isSettled: 'bool'
  },
  /**
   * Lookup127: zeitgeist_primitives::market::EarlyClose<BN, M>
   **/
  ZeitgeistPrimitivesMarketEarlyClose: {
    _alias: {
      new_: 'new'
    },
    old: 'ZeitgeistPrimitivesMarketMarketPeriod',
    new_: 'ZeitgeistPrimitivesMarketMarketPeriod',
    state: 'ZeitgeistPrimitivesMarketEarlyCloseState'
  },
  /**
   * Lookup128: zeitgeist_primitives::market::EarlyCloseState
   **/
  ZeitgeistPrimitivesMarketEarlyCloseState: {
    _enum: ['ScheduledAsMarketCreator', 'ScheduledAsOther', 'Disputed', 'Rejected']
  },
  /**
   * Lookup131: zrml_styx::pallet::Event<T>
   **/
  ZrmlStyxEvent: {
    _enum: {
      AccountCrossed: '(AccountId32,u128)',
      CrossingFeeChanged: 'u128'
    }
  },
  /**
   * Lookup132: zrml_global_disputes::pallet::Event<T>
   **/
  ZrmlGlobalDisputesEvent: {
    _enum: {
      AddedVotingOutcome: {
        marketId: 'u128',
        owner: 'AccountId32',
        outcome: 'ZeitgeistPrimitivesOutcomeReport',
      },
      GlobalDisputeWinnerDetermined: {
        marketId: 'u128',
      },
      OutcomeOwnersRewarded: {
        marketId: 'u128',
        owners: 'Vec<AccountId32>',
      },
      OutcomeOwnerRewarded: {
        marketId: 'u128',
        owner: 'AccountId32',
      },
      OutcomesPartiallyCleaned: {
        marketId: 'u128',
      },
      OutcomesFullyCleaned: {
        marketId: 'u128',
      },
      VotedOnOutcome: {
        voter: 'AccountId32',
        marketId: 'u128',
        outcome: 'ZeitgeistPrimitivesOutcomeReport',
        voteAmount: 'u128'
      }
    }
  },
  /**
   * Lookup133: zrml_neo_swaps::pallet::Event<T>
   **/
  ZrmlNeoSwapsEvent: {
    _enum: {
      BuyExecuted: {
        who: 'AccountId32',
        marketId: 'u128',
        assetOut: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        amountIn: 'u128',
        amountOut: 'u128',
        swapFeeAmount: 'u128',
        externalFeeAmount: 'u128',
      },
      SellExecuted: {
        who: 'AccountId32',
        marketId: 'u128',
        assetIn: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        amountIn: 'u128',
        amountOut: 'u128',
        swapFeeAmount: 'u128',
        externalFeeAmount: 'u128',
      },
      FeesWithdrawn: {
        who: 'AccountId32',
        marketId: 'u128',
        amount: 'u128',
      },
      JoinExecuted: {
        who: 'AccountId32',
        marketId: 'u128',
        poolSharesAmount: 'u128',
        amountsIn: 'Vec<u128>',
        newLiquidityParameter: 'u128',
      },
      ExitExecuted: {
        who: 'AccountId32',
        marketId: 'u128',
        poolSharesAmount: 'u128',
        amountsOut: 'Vec<u128>',
        newLiquidityParameter: 'u128',
      },
      PoolDeployed: {
        who: 'AccountId32',
        marketId: 'u128',
        accountId: 'AccountId32',
        reserves: 'BTreeMap<ZeitgeistPrimitivesAssetsAllAssetsAsset, u128>',
        collateral: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        liquidityParameter: 'u128',
        poolSharesAmount: 'u128',
        swapFee: 'u128',
      },
      PoolDestroyed: {
        who: 'AccountId32',
        marketId: 'u128',
        amountsOut: 'Vec<u128>'
      }
    }
  },
  /**
   * Lookup134: zrml_orderbook::pallet::Event<T>
   **/
  ZrmlOrderbookEvent: {
    _enum: {
      OrderFilled: {
        orderId: 'u128',
        maker: 'AccountId32',
        taker: 'AccountId32',
        filledMakerAmount: 'u128',
        filledTakerAmount: 'u128',
        unfilledMakerAmount: 'u128',
        unfilledTakerAmount: 'u128',
      },
      OrderPlaced: {
        orderId: 'u128',
        order: 'ZrmlOrderbookOrder',
      },
      OrderRemoved: {
        orderId: 'u128',
        maker: 'AccountId32'
      }
    }
  },
  /**
   * Lookup135: zrml_orderbook::types::Order<sp_core::crypto::AccountId32, Balance, MarketId>
   **/
  ZrmlOrderbookOrder: {
    marketId: 'u128',
    maker: 'AccountId32',
    makerAsset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
    makerAmount: 'u128',
    takerAsset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
    takerAmount: 'u128'
  },
  /**
   * Lookup136: zrml_parimutuel::pallet::Event<T>
   **/
  ZrmlParimutuelEvent: {
    _enum: {
      OutcomeBought: {
        marketId: 'u128',
        buyer: 'AccountId32',
        asset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        amountMinusFees: 'u128',
        fees: 'u128',
      },
      RewardsClaimed: {
        marketId: 'u128',
        asset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        withdrawnAssetBalance: 'u128',
        baseAssetPayoff: 'u128',
        sender: 'AccountId32',
      },
      BalanceRefunded: {
        marketId: 'u128',
        asset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        refundedBalance: 'u128',
        sender: 'AccountId32'
      }
    }
  },
  /**
   * Lookup137: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256',
      },
      UpwardMessageSent: {
        messageHash: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup138: pallet_parachain_staking::pallet::Event<T>
   **/
  PalletParachainStakingEvent: {
    _enum: {
      NewRound: {
        startingBlock: 'u64',
        round: 'u32',
        selectedCollatorsNumber: 'u32',
        totalBalance: 'u128',
      },
      JoinedCollatorCandidates: {
        account: 'AccountId32',
        amountLocked: 'u128',
        newTotalAmtLocked: 'u128',
      },
      CollatorChosen: {
        round: 'u32',
        collatorAccount: 'AccountId32',
        totalExposedAmount: 'u128',
      },
      CandidateBondLessRequested: {
        candidate: 'AccountId32',
        amountToDecrease: 'u128',
        executeRound: 'u32',
      },
      CandidateBondedMore: {
        candidate: 'AccountId32',
        amount: 'u128',
        newTotalBond: 'u128',
      },
      CandidateBondedLess: {
        candidate: 'AccountId32',
        amount: 'u128',
        newBond: 'u128',
      },
      CandidateWentOffline: {
        candidate: 'AccountId32',
      },
      CandidateBackOnline: {
        candidate: 'AccountId32',
      },
      CandidateScheduledExit: {
        exitAllowedRound: 'u32',
        candidate: 'AccountId32',
        scheduledExit: 'u32',
      },
      CancelledCandidateExit: {
        candidate: 'AccountId32',
      },
      CancelledCandidateBondLess: {
        candidate: 'AccountId32',
        amount: 'u128',
        executeRound: 'u32',
      },
      CandidateLeft: {
        exCandidate: 'AccountId32',
        unlockedAmount: 'u128',
        newTotalAmtLocked: 'u128',
      },
      DelegationDecreaseScheduled: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        amountToDecrease: 'u128',
        executeRound: 'u32',
      },
      DelegationIncreased: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        amount: 'u128',
        inTop: 'bool',
      },
      DelegationDecreased: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        amount: 'u128',
        inTop: 'bool',
      },
      DelegatorExitScheduled: {
        round: 'u32',
        delegator: 'AccountId32',
        scheduledExit: 'u32',
      },
      DelegationRevocationScheduled: {
        round: 'u32',
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        scheduledExit: 'u32',
      },
      DelegatorLeft: {
        delegator: 'AccountId32',
        unstakedAmount: 'u128',
      },
      DelegationRevoked: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        unstakedAmount: 'u128',
      },
      DelegationKicked: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        unstakedAmount: 'u128',
      },
      DelegatorExitCancelled: {
        delegator: 'AccountId32',
      },
      CancelledDelegationRequest: {
        delegator: 'AccountId32',
        cancelledRequest: 'PalletParachainStakingDelegationRequestsCancelledScheduledRequest',
        collator: 'AccountId32',
      },
      Delegation: {
        delegator: 'AccountId32',
        lockedAmount: 'u128',
        candidate: 'AccountId32',
        delegatorPosition: 'PalletParachainStakingDelegatorAdded',
        autoCompound: 'Percent',
      },
      DelegatorLeftCandidate: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
        unstakedAmount: 'u128',
        totalCandidateStaked: 'u128',
      },
      Rewarded: {
        account: 'AccountId32',
        rewards: 'u128',
      },
      ReservedForParachainBond: {
        account: 'AccountId32',
        value: 'u128',
      },
      ParachainBondAccountSet: {
        _alias: {
          new_: 'new',
        },
        old: 'AccountId32',
        new_: 'AccountId32',
      },
      ParachainBondReservePercentSet: {
        _alias: {
          new_: 'new',
        },
        old: 'Percent',
        new_: 'Percent',
      },
      InflationSet: {
        annualMin: 'Perbill',
        annualIdeal: 'Perbill',
        annualMax: 'Perbill',
        roundMin: 'Perbill',
        roundIdeal: 'Perbill',
        roundMax: 'Perbill',
      },
      StakeExpectationsSet: {
        expectMin: 'u128',
        expectIdeal: 'u128',
        expectMax: 'u128',
      },
      TotalSelectedSet: {
        _alias: {
          new_: 'new',
        },
        old: 'u32',
        new_: 'u32',
      },
      CollatorCommissionSet: {
        _alias: {
          new_: 'new',
        },
        old: 'Perbill',
        new_: 'Perbill',
      },
      BlocksPerRoundSet: {
        _alias: {
          new_: 'new',
        },
        currentRound: 'u32',
        firstBlock: 'u64',
        old: 'u32',
        new_: 'u32',
        newPerRoundInflationMin: 'Perbill',
        newPerRoundInflationIdeal: 'Perbill',
        newPerRoundInflationMax: 'Perbill',
      },
      AutoCompoundSet: {
        candidate: 'AccountId32',
        delegator: 'AccountId32',
        value: 'Percent',
      },
      Compounded: {
        candidate: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup139: pallet_parachain_staking::delegation_requests::CancelledScheduledRequest<Balance>
   **/
  PalletParachainStakingDelegationRequestsCancelledScheduledRequest: {
    whenExecutable: 'u32',
    action: 'PalletParachainStakingDelegationRequestsDelegationAction'
  },
  /**
   * Lookup140: pallet_parachain_staking::delegation_requests::DelegationAction<Balance>
   **/
  PalletParachainStakingDelegationRequestsDelegationAction: {
    _enum: {
      Revoke: 'u128',
      Decrease: 'u128'
    }
  },
  /**
   * Lookup141: pallet_parachain_staking::types::DelegatorAdded<B>
   **/
  PalletParachainStakingDelegatorAdded: {
    _enum: {
      AddedToTop: {
        newTotal: 'u128',
      },
      AddedToBottom: 'Null'
    }
  },
  /**
   * Lookup143: pallet_author_slot_filter::pallet::Event
   **/
  PalletAuthorSlotFilterEvent: {
    _enum: {
      EligibleUpdated: 'u32'
    }
  },
  /**
   * Lookup145: pallet_author_mapping::pallet::Event<T>
   **/
  PalletAuthorMappingEvent: {
    _enum: {
      KeysRegistered: {
        _alias: {
          keys_: 'keys',
        },
        nimbusId: 'NimbusPrimitivesNimbusCryptoPublic',
        accountId: 'AccountId32',
        keys_: 'SessionKeysPrimitivesVrfVrfCryptoPublic',
      },
      KeysRemoved: {
        _alias: {
          keys_: 'keys',
        },
        nimbusId: 'NimbusPrimitivesNimbusCryptoPublic',
        accountId: 'AccountId32',
        keys_: 'SessionKeysPrimitivesVrfVrfCryptoPublic',
      },
      KeysRotated: {
        newNimbusId: 'NimbusPrimitivesNimbusCryptoPublic',
        accountId: 'AccountId32',
        newKeys: 'SessionKeysPrimitivesVrfVrfCryptoPublic'
      }
    }
  },
  /**
   * Lookup146: nimbus_primitives::nimbus_crypto::Public
   **/
  NimbusPrimitivesNimbusCryptoPublic: 'SpCoreSr25519Public',
  /**
   * Lookup147: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup148: session_keys_primitives::vrf::vrf_crypto::Public
   **/
  SessionKeysPrimitivesVrfVrfCryptoPublic: 'SpCoreSr25519Public',
  /**
   * Lookup149: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],XcmV3TraitsOutcome)'
    }
  },
  /**
   * Lookup150: xcm::v3::traits::Outcome
   **/
  XcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
      Error: 'XcmV3TraitsError'
    }
  },
  /**
   * Lookup151: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup152: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageId: '[u8;32]',
      },
      UnsupportedVersion: {
        messageId: '[u8;32]',
      },
      ExecutedDownward: {
        messageId: '[u8;32]',
        outcome: 'XcmV3TraitsOutcome',
      },
      WeightExhausted: {
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight',
      },
      MaxMessagesExhausted: {
        messageId: '[u8;32]'
      }
    }
  },
  /**
   * Lookup153: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: 'XcmV3TraitsOutcome',
      Sent: '(XcmV3MultiLocation,XcmV3MultiLocation,XcmV3Xcm)',
      UnexpectedResponse: '(XcmV3MultiLocation,u64)',
      ResponseReady: '(u64,XcmV3Response)',
      Notified: '(u64,u8,u8)',
      NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
      NotifyDispatchError: '(u64,u8,u8)',
      NotifyDecodeFailed: '(u64,u8,u8)',
      InvalidResponder: '(XcmV3MultiLocation,u64,Option<XcmV3MultiLocation>)',
      InvalidResponderVersion: '(XcmV3MultiLocation,u64)',
      ResponseTaken: 'u64',
      AssetsTrapped: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)',
      VersionChangeNotified: '(XcmV3MultiLocation,u32,XcmV3MultiassetMultiAssets)',
      SupportedVersionChanged: '(XcmV3MultiLocation,u32)',
      NotifyTargetSendFail: '(XcmV3MultiLocation,u64,XcmV3TraitsError)',
      NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
      InvalidQuerierVersion: '(XcmV3MultiLocation,u64)',
      InvalidQuerier: '(XcmV3MultiLocation,u64,XcmV3MultiLocation,Option<XcmV3MultiLocation>)',
      VersionNotifyStarted: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      VersionNotifyRequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      VersionNotifyUnrequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      FeesPaid: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      AssetsClaimed: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)'
    }
  },
  /**
   * Lookup154: xcm::v3::multilocation::MultiLocation
   **/
  XcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup155: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup156: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup159: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup161: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup162: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup163: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup165: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<XcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'XcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'XcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'XcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<XcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'XcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'XcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'XcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'XcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'XcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<XcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup166: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup168: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup169: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup170: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup171: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup173: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'XcmV3VecPalletInfo',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup176: xcm::v3::VecPalletInfo
   **/
  XcmV3VecPalletInfo: 'Vec<XcmV3PalletInfo>',
  /**
   * Lookup178: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup179: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup181: xcm::v2::OriginKind
   **/
  XcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup182: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup183: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'XcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup184: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup185: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup186: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup187: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup188: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup189: xcm::v2::multiasset::MultiAssets
   **/
  XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
  /**
   * Lookup191: xcm::v2::multiasset::MultiAsset
   **/
  XcmV2MultiAsset: {
    id: 'XcmV2MultiassetAssetId',
    fun: 'XcmV2MultiassetFungibility'
  },
  /**
   * Lookup192: xcm::v2::multiasset::AssetId
   **/
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup193: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup194: xcm::v2::multilocation::Junctions
   **/
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV2Junction',
      X2: '(XcmV2Junction,XcmV2Junction)',
      X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
    }
  },
  /**
   * Lookup195: xcm::v2::junction::Junction
   **/
  XcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV2BodyId',
        part: 'XcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup196: xcm::v2::NetworkId
   **/
  XcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup198: xcm::v2::BodyId
   **/
  XcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup199: xcm::v2::BodyPart
   **/
  XcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup200: xcm::v2::multiasset::Fungibility
   **/
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup201: xcm::v2::multiasset::AssetInstance
   **/
  XcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup202: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup203: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: 'Option<[u8;32]>',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: 'Option<[u8;32]>',
        error: 'XcmV3TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: 'Option<[u8;32]>',
      },
      BadFormat: {
        messageHash: 'Option<[u8;32]>',
      },
      XcmpMessageSent: {
        messageHash: 'Option<[u8;32]>',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup205: orml_asset_registry::module::Event<T>
   **/
  OrmlAssetRegistryModuleEvent: {
    _enum: {
      RegisteredAsset: {
        assetId: 'ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
      },
      UpdatedAsset: {
        assetId: 'ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata'
      }
    }
  },
  /**
   * Lookup206: zeitgeist_primitives::assets::subsets::xcm_assets::XcmAssetClass
   **/
  ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Ztg: 'Null',
      ForeignAsset: 'u32'
    }
  },
  /**
   * Lookup207: orml_traits::asset_registry::AssetMetadata<Balance, zeitgeist_primitives::types::CustomMetadata>
   **/
  OrmlTraitsAssetRegistryAssetMetadata: {
    decimals: 'u32',
    name: 'Bytes',
    symbol: 'Bytes',
    existentialDeposit: 'u128',
    location: 'Option<XcmVersionedMultiLocation>',
    additional: 'ZeitgeistPrimitivesCustomMetadata'
  },
  /**
   * Lookup208: zeitgeist_primitives::types::CustomMetadata
   **/
  ZeitgeistPrimitivesCustomMetadata: {
    xcm: 'ZeitgeistPrimitivesXcmMetadata',
    allowAsBaseAsset: 'bool'
  },
  /**
   * Lookup209: zeitgeist_primitives::types::XcmMetadata
   **/
  ZeitgeistPrimitivesXcmMetadata: {
    feeFactor: 'Option<u128>'
  },
  /**
   * Lookup211: orml_unknown_tokens::module::Event
   **/
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: 'XcmV3MultiAsset',
        who: 'XcmV3MultiLocation',
      },
      Withdrawn: {
        asset: 'XcmV3MultiAsset',
        who: 'XcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup212: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'XcmV3MultiassetMultiAssets',
        fee: 'XcmV3MultiAsset',
        dest: 'XcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup213: pallet_sudo::pallet::Event<T>
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
   * Lookup215: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup218: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup220: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
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
   * Lookup224: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup225: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup226: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup228: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup229: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup230: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup231: sp_version::RuntimeVersion
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
   * Lookup235: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup236: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup240: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<battery_station_runtime::RuntimeCall>, BlockNumber, battery_station_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u64,u32)>',
    origin: 'BatteryStationRuntimeOriginCaller'
  },
  /**
   * Lookup241: frame_support::traits::preimages::Bounded<battery_station_runtime::RuntimeCall>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup243: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u64',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u64',
        maybePeriodic: 'Option<(u64,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup245: pallet_preimage::pallet::Call<T>
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
   * Lookup246: pallet_balances::pallet::Call<T, I>
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
   * Lookup249: pallet_treasury::pallet::Call<T, I>
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
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup250: pallet_vesting::pallet::Call<T>
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
   * Lookup251: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u64'
  },
  /**
   * Lookup252: pallet_multisig::pallet::Call<T>
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
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
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
   * Lookup254: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup255: pallet_assets::pallet::Call<T, I>
   **/
  PalletAssetsCall: {
    _enum: {
      create: {
        id: 'Compact<u128>',
        admin: 'MultiAddress',
        minBalance: 'u128',
      },
      force_create: {
        id: 'Compact<u128>',
        owner: 'MultiAddress',
        isSufficient: 'bool',
        minBalance: 'Compact<u128>',
      },
      start_destroy: {
        id: 'Compact<u128>',
      },
      destroy_accounts: {
        id: 'Compact<u128>',
      },
      destroy_approvals: {
        id: 'Compact<u128>',
      },
      finish_destroy: {
        id: 'Compact<u128>',
      },
      mint: {
        id: 'Compact<u128>',
        beneficiary: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      burn: {
        id: 'Compact<u128>',
        who: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer: {
        id: 'Compact<u128>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer_keep_alive: {
        id: 'Compact<u128>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        id: 'Compact<u128>',
        source: 'MultiAddress',
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      freeze: {
        id: 'Compact<u128>',
        who: 'MultiAddress',
      },
      thaw: {
        id: 'Compact<u128>',
        who: 'MultiAddress',
      },
      freeze_asset: {
        id: 'Compact<u128>',
      },
      thaw_asset: {
        id: 'Compact<u128>',
      },
      transfer_ownership: {
        id: 'Compact<u128>',
        owner: 'MultiAddress',
      },
      set_team: {
        id: 'Compact<u128>',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      set_metadata: {
        id: 'Compact<u128>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      clear_metadata: {
        id: 'Compact<u128>',
      },
      force_set_metadata: {
        id: 'Compact<u128>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      force_clear_metadata: {
        id: 'Compact<u128>',
      },
      force_asset_status: {
        id: 'Compact<u128>',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        minBalance: 'Compact<u128>',
        isSufficient: 'bool',
        isFrozen: 'bool',
      },
      approve_transfer: {
        id: 'Compact<u128>',
        delegate: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      cancel_approval: {
        id: 'Compact<u128>',
        delegate: 'MultiAddress',
      },
      force_cancel_approval: {
        id: 'Compact<u128>',
        owner: 'MultiAddress',
        delegate: 'MultiAddress',
      },
      transfer_approved: {
        id: 'Compact<u128>',
        owner: 'MultiAddress',
        destination: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      touch: {
        id: 'Compact<u128>',
      },
      refund: {
        id: 'Compact<u128>',
        allowBurn: 'bool'
      }
    }
  },
  /**
   * Lookup258: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
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
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
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
   * Lookup259: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup261: pallet_collective::pallet::Call<T, I>
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
      close_old_weight: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup264: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
      },
      swap_member: {
        remove: 'MultiAddress',
        add: 'MultiAddress',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      set_prime: {
        who: 'MultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup269: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
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
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
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
   * Lookup270: pallet_identity::types::IdentityInfo<FieldLimit>
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
   * Lookup306: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
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
   * Lookup307: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup308: pallet_identity::types::Judgement<Balance>
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
   * Lookup309: pallet_utility::pallet::Call<T>
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
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup311: battery_station_runtime::OriginCaller
   **/
  BatteryStationRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Void: 'SpCoreVoid',
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
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      __Unused99: 'Null',
      __Unused100: 'Null',
      __Unused101: 'Null',
      __Unused102: 'Null',
      __Unused103: 'Null',
      __Unused104: 'Null',
      __Unused105: 'Null',
      __Unused106: 'Null',
      __Unused107: 'Null',
      __Unused108: 'Null',
      __Unused109: 'Null',
      __Unused110: 'Null',
      __Unused111: 'Null',
      __Unused112: 'Null',
      __Unused113: 'Null',
      __Unused114: 'Null',
      __Unused115: 'Null',
      __Unused116: 'Null',
      __Unused117: 'Null',
      __Unused118: 'Null',
      __Unused119: 'Null',
      CumulusXcm: 'CumulusPalletXcmOrigin',
      __Unused121: 'Null',
      PolkadotXcm: 'PalletXcmOrigin'
    }
  },
  /**
   * Lookup312: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup313: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup316: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup317: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV3MultiLocation',
      Response: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup318: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup319: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<ZeitgeistPrimitivesProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'ZeitgeistPrimitivesProxyType',
        delay: 'u64',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'ZeitgeistPrimitivesProxyType',
        index: 'u16',
        height: 'Compact<u64>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<ZeitgeistPrimitivesProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup321: pallet_contracts::pallet::Call<T>
   **/
  PalletContractsCall: {
    _enum: {
      call_old_weight: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
        determinism: 'PalletContractsWasmDeterminism',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'MultiAddress',
        codeHash: 'H256',
      },
      call: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes'
      }
    }
  },
  /**
   * Lookup323: pallet_contracts::wasm::Determinism
   **/
  PalletContractsWasmDeterminism: {
    _enum: ['Deterministic', 'AllowIndeterminism']
  },
  /**
   * Lookup324: orml_currencies::module::Call<T>
   **/
  OrmlCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'MultiAddress',
        currencyId: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup326: zrml_authorized::pallet::Call<T>
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
   * Lookup327: zrml_court::pallet::Call<T>
   **/
  ZrmlCourtCall: {
    _enum: {
      join_court: {
        amount: 'u128',
      },
      delegate: {
        amount: 'u128',
        delegations: 'Vec<AccountId32>',
      },
      prepare_exit_court: 'Null',
      exit_court: {
        courtParticipant: 'MultiAddress',
      },
      vote: {
        courtId: 'Compact<u128>',
        commitmentVote: 'H256',
      },
      denounce_vote: {
        courtId: 'Compact<u128>',
        juror: 'MultiAddress',
        voteItem: 'ZrmlCourtVoteItem',
        salt: 'H256',
      },
      reveal_vote: {
        courtId: 'Compact<u128>',
        voteItem: 'ZrmlCourtVoteItem',
        salt: 'H256',
      },
      appeal: {
        courtId: 'Compact<u128>',
      },
      reassign_court_stakes: {
        courtId: 'u128',
      },
      set_inflation: {
        inflation: 'Perbill'
      }
    }
  },
  /**
   * Lookup328: zrml_liquidity_mining::pallet::Call<T>
   **/
  ZrmlLiquidityMiningCall: {
    _enum: {
      set_per_block_distribution: {
        perBlockDistribution: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup329: zrml_simple_disputes::pallet::Call<T>
   **/
  ZrmlSimpleDisputesCall: {
    _enum: {
      suggest_outcome: {
        marketId: 'Compact<u128>',
        outcome: 'ZeitgeistPrimitivesOutcomeReport'
      }
    }
  },
  /**
   * Lookup330: zrml_swaps::pallet::Call<T>
   **/
  ZrmlSwapsCall: {
    _enum: {
      __Unused0: 'Null',
      pool_exit: {
        poolId: 'Compact<u128>',
        poolAmount: 'Compact<u128>',
        minAssetsOut: 'Vec<u128>',
      },
      __Unused2: 'Null',
      pool_exit_with_exact_asset_amount: {
        poolId: 'Compact<u128>',
        assetOut: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        assetAmount: 'Compact<u128>',
        maxPoolAmount: 'Compact<u128>',
      },
      pool_exit_with_exact_pool_amount: {
        poolId: 'Compact<u128>',
        asset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        poolAmount: 'Compact<u128>',
        minAssetAmount: 'Compact<u128>',
      },
      pool_join: {
        poolId: 'Compact<u128>',
        poolAmount: 'Compact<u128>',
        maxAssetsIn: 'Vec<u128>',
      },
      __Unused6: 'Null',
      pool_join_with_exact_asset_amount: {
        poolId: 'Compact<u128>',
        assetIn: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        assetAmount: 'Compact<u128>',
        minPoolAmount: 'Compact<u128>',
      },
      pool_join_with_exact_pool_amount: {
        poolId: 'Compact<u128>',
        asset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        poolAmount: 'Compact<u128>',
        maxAssetAmount: 'Compact<u128>',
      },
      swap_exact_amount_in: {
        poolId: 'Compact<u128>',
        assetIn: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        assetAmountIn: 'Compact<u128>',
        assetOut: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        minAssetAmountOut: 'Option<u128>',
        maxPrice: 'Option<u128>',
      },
      swap_exact_amount_out: {
        poolId: 'Compact<u128>',
        assetIn: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        maxAssetAmountIn: 'Option<u128>',
        assetOut: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        assetAmountOut: 'Compact<u128>',
        maxPrice: 'Option<u128>',
      },
      force_pool_exit: {
        who: 'AccountId32',
        poolId: 'Compact<u128>',
        poolAmount: 'Compact<u128>',
        minAssetsOut: 'Vec<u128>'
      }
    }
  },
  /**
   * Lookup331: zrml_prediction_markets::pallet::Call<T>
   **/
  ZrmlPredictionMarketsCall: {
    _enum: {
      __Unused0: 'Null',
      admin_move_market_to_closed: {
        marketId: 'Compact<u128>',
      },
      admin_move_market_to_resolved: {
        marketId: 'Compact<u128>',
      },
      approve_market: {
        marketId: 'Compact<u128>',
      },
      request_edit: {
        marketId: 'Compact<u128>',
        editReason: 'Bytes',
      },
      buy_complete_set: {
        marketId: 'Compact<u128>',
        amount: 'Compact<u128>',
      },
      dispute: {
        marketId: 'Compact<u128>',
      },
      __Unused7: 'Null',
      create_market: {
        baseAsset: 'ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass',
        creatorFee: 'Perbill',
        oracle: 'AccountId32',
        period: 'ZeitgeistPrimitivesMarketMarketPeriod',
        deadlines: 'ZeitgeistPrimitivesMarketDeadlines',
        metadata: 'ZeitgeistPrimitivesMultiHash',
        creation: 'ZeitgeistPrimitivesMarketMarketCreation',
        marketType: 'ZeitgeistPrimitivesMarketMarketType',
        disputeMechanism: 'Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>',
        scoringRule: 'ZeitgeistPrimitivesMarketScoringRule',
      },
      edit_market: {
        baseAsset: 'ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass',
        marketId: 'u128',
        oracle: 'AccountId32',
        period: 'ZeitgeistPrimitivesMarketMarketPeriod',
        deadlines: 'ZeitgeistPrimitivesMarketDeadlines',
        metadata: 'ZeitgeistPrimitivesMultiHash',
        marketType: 'ZeitgeistPrimitivesMarketMarketType',
        disputeMechanism: 'Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>',
        scoringRule: 'ZeitgeistPrimitivesMarketScoringRule',
      },
      __Unused10: 'Null',
      __Unused11: 'Null',
      redeem_shares: {
        marketId: 'Compact<u128>',
      },
      reject_market: {
        marketId: 'Compact<u128>',
        rejectReason: 'Bytes',
      },
      report: {
        marketId: 'Compact<u128>',
        outcome: 'ZeitgeistPrimitivesOutcomeReport',
      },
      sell_complete_set: {
        marketId: 'Compact<u128>',
        amount: 'Compact<u128>',
      },
      start_global_dispute: {
        marketId: 'Compact<u128>',
      },
      create_market_and_deploy_pool: {
        baseAsset: 'ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass',
        creatorFee: 'Perbill',
        oracle: 'AccountId32',
        period: 'ZeitgeistPrimitivesMarketMarketPeriod',
        deadlines: 'ZeitgeistPrimitivesMarketDeadlines',
        metadata: 'ZeitgeistPrimitivesMultiHash',
        marketType: 'ZeitgeistPrimitivesMarketMarketType',
        disputeMechanism: 'Option<ZeitgeistPrimitivesMarketMarketDisputeMechanism>',
        amount: 'Compact<u128>',
        spotPrices: 'Vec<u128>',
        swapFee: 'Compact<u128>',
      },
      schedule_early_close: {
        marketId: 'Compact<u128>',
      },
      dispute_early_close: {
        marketId: 'Compact<u128>',
      },
      reject_early_close: {
        marketId: 'Compact<u128>',
      },
      close_trusted_market: {
        marketId: 'Compact<u128>',
      },
      manually_close_market: {
        marketId: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup332: zeitgeist_primitives::types::MultiHash
   **/
  ZeitgeistPrimitivesMultiHash: {
    _enum: {
      Sha3_384: '[u8;50]'
    }
  },
  /**
   * Lookup334: zrml_styx::pallet::Call<T>
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
   * Lookup335: zrml_global_disputes::pallet::Call<T>
   **/
  ZrmlGlobalDisputesCall: {
    _enum: {
      add_vote_outcome: {
        marketId: 'Compact<u128>',
        outcome: 'ZeitgeistPrimitivesOutcomeReport',
      },
      purge_outcomes: {
        marketId: 'Compact<u128>',
      },
      reward_outcome_owner: {
        marketId: 'Compact<u128>',
      },
      vote_on_outcome: {
        marketId: 'Compact<u128>',
        outcome: 'ZeitgeistPrimitivesOutcomeReport',
        amount: 'Compact<u128>',
      },
      unlock_vote_balance: {
        voter: 'MultiAddress',
      },
      refund_vote_fees: {
        marketId: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup336: zrml_neo_swaps::pallet::Call<T>
   **/
  ZrmlNeoSwapsCall: {
    _enum: {
      buy: {
        marketId: 'Compact<u128>',
        assetCount: 'u16',
        assetOut: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        amountIn: 'Compact<u128>',
        minAmountOut: 'Compact<u128>',
      },
      sell: {
        marketId: 'Compact<u128>',
        assetCount: 'u16',
        assetIn: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        amountIn: 'Compact<u128>',
        minAmountOut: 'Compact<u128>',
      },
      join: {
        marketId: 'Compact<u128>',
        poolSharesAmount: 'Compact<u128>',
        maxAmountsIn: 'Vec<u128>',
      },
      exit: {
        marketId: 'Compact<u128>',
        poolSharesAmountOut: 'Compact<u128>',
        minAmountsOut: 'Vec<u128>',
      },
      withdraw_fees: {
        marketId: 'Compact<u128>',
      },
      deploy_pool: {
        marketId: 'Compact<u128>',
        amount: 'Compact<u128>',
        spotPrices: 'Vec<u128>',
        swapFee: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup337: zrml_orderbook::pallet::Call<T>
   **/
  ZrmlOrderbookCall: {
    _enum: {
      remove_order: {
        orderId: 'u128',
      },
      fill_order: {
        orderId: 'u128',
        makerPartialFill: 'Option<u128>',
      },
      place_order: {
        marketId: 'Compact<u128>',
        makerAsset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        makerAmount: 'Compact<u128>',
        takerAsset: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
        takerAmount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup338: zrml_parimutuel::pallet::Call<T>
   **/
  ZrmlParimutuelCall: {
    _enum: {
      buy: {
        asset: 'ZeitgeistPrimitivesAssetsSubsetsParimutuelParimutuelAssetClass',
        amount: 'Compact<u128>',
      },
      claim_rewards: {
        marketId: 'u128',
      },
      claim_refunds: {
        refundAsset: 'ZeitgeistPrimitivesAssetsSubsetsParimutuelParimutuelAssetClass'
      }
    }
  },
  /**
   * Lookup339: zeitgeist_primitives::assets::subsets::parimutuel::ParimutuelAssetClass<MI>
   **/
  ZeitgeistPrimitivesAssetsSubsetsParimutuelParimutuelAssetClass: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Share: '(u128,u16)'
    }
  },
  /**
   * Lookup340: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup341: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV2PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup342: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV2PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup344: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup347: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup350: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup353: pallet_parachain_staking::pallet::Call<T>
   **/
  PalletParachainStakingCall: {
    _enum: {
      set_staking_expectations: {
        expectations: {
          min: 'u128',
          ideal: 'u128',
          max: 'u128'
        },
      },
      set_inflation: {
        schedule: {
          min: 'Perbill',
          ideal: 'Perbill',
          max: 'Perbill'
        },
      },
      set_parachain_bond_account: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId32',
      },
      set_parachain_bond_reserve_percent: {
        _alias: {
          new_: 'new',
        },
        new_: 'Percent',
      },
      set_total_selected: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_collator_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      set_blocks_per_round: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      join_candidates: {
        bond: 'u128',
        candidateCount: 'u32',
      },
      schedule_leave_candidates: {
        candidateCount: 'u32',
      },
      execute_leave_candidates: {
        candidate: 'AccountId32',
        candidateDelegationCount: 'u32',
      },
      cancel_leave_candidates: {
        candidateCount: 'u32',
      },
      go_offline: 'Null',
      go_online: 'Null',
      candidate_bond_more: {
        more: 'u128',
      },
      schedule_candidate_bond_less: {
        less: 'u128',
      },
      execute_candidate_bond_less: {
        candidate: 'AccountId32',
      },
      cancel_candidate_bond_less: 'Null',
      delegate: {
        candidate: 'AccountId32',
        amount: 'u128',
        candidateDelegationCount: 'u32',
        delegationCount: 'u32',
      },
      delegate_with_auto_compound: {
        candidate: 'AccountId32',
        amount: 'u128',
        autoCompound: 'Percent',
        candidateDelegationCount: 'u32',
        candidateAutoCompoundingDelegationCount: 'u32',
        delegationCount: 'u32',
      },
      schedule_leave_delegators: 'Null',
      execute_leave_delegators: {
        delegator: 'AccountId32',
        delegationCount: 'u32',
      },
      cancel_leave_delegators: 'Null',
      schedule_revoke_delegation: {
        collator: 'AccountId32',
      },
      delegator_bond_more: {
        candidate: 'AccountId32',
        more: 'u128',
      },
      schedule_delegator_bond_less: {
        candidate: 'AccountId32',
        less: 'u128',
      },
      execute_delegation_request: {
        delegator: 'AccountId32',
        candidate: 'AccountId32',
      },
      cancel_delegation_request: {
        candidate: 'AccountId32',
      },
      set_auto_compound: {
        candidate: 'AccountId32',
        value: 'Percent',
        candidateAutoCompoundingDelegationCountHint: 'u32',
        delegationCountHint: 'u32',
      },
      hotfix_remove_delegation_requests_exited_candidates: {
        candidates: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup356: pallet_author_inherent::pallet::Call<T>
   **/
  PalletAuthorInherentCall: {
    _enum: ['kick_off_authorship_validation']
  },
  /**
   * Lookup357: pallet_author_slot_filter::pallet::Call<T>
   **/
  PalletAuthorSlotFilterCall: {
    _enum: {
      set_eligible: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32'
      }
    }
  },
  /**
   * Lookup358: pallet_author_mapping::pallet::Call<T>
   **/
  PalletAuthorMappingCall: {
    _enum: {
      add_association: {
        nimbusId: 'NimbusPrimitivesNimbusCryptoPublic',
      },
      update_association: {
        oldNimbusId: 'NimbusPrimitivesNimbusCryptoPublic',
        newNimbusId: 'NimbusPrimitivesNimbusCryptoPublic',
      },
      clear_association: {
        nimbusId: 'NimbusPrimitivesNimbusCryptoPublic',
      },
      remove_keys: 'Null',
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Bytes'
      }
    }
  },
  /**
   * Lookup359: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup360: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'XcmV3MultiLocation',
        xcmVersion: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup361: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Xcm',
      V3: 'XcmV3Xcm'
    }
  },
  /**
   * Lookup362: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup364: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        beneficiary: 'XcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV2MultiassetMultiAssetFilter',
        receive: 'XcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        reserve: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV2MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        ticket: 'XcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup365: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup368: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup369: xcm::v2::multiasset::MultiAssetFilter
   **/
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV2MultiassetMultiAssets',
      Wild: 'XcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup370: xcm::v2::multiasset::WildMultiAsset
   **/
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup371: xcm::v2::multiasset::WildFungibility
   **/
  XcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup372: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup381: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight',
      },
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_threshold_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup382: orml_asset_registry::module::Call<T>
   **/
  OrmlAssetRegistryModuleCall: {
    _enum: {
      register_asset: {
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
        assetId: 'Option<ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass>',
      },
      update_asset: {
        assetId: 'ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass',
        decimals: 'Option<u32>',
        name: 'Option<Bytes>',
        symbol: 'Option<Bytes>',
        existentialDeposit: 'Option<u128>',
        location: 'Option<Option<XcmVersionedMultiLocation>>',
        additional: 'Option<ZeitgeistPrimitivesCustomMetadata>'
      }
    }
  },
  /**
   * Lookup387: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass',
        amount: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedMultiAsset',
        fee: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(ZeitgeistPrimitivesAssetsSubsetsXcmAssetsXcmAssetClass,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup388: xcm::VersionedMultiAsset
   **/
  XcmVersionedMultiAsset: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiAsset',
      __Unused2: 'Null',
      V3: 'XcmV3MultiAsset'
    }
  },
  /**
   * Lookup391: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
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
   * Lookup394: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup395: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup400: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup402: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup403: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup406: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup408: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup410: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup411: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup415: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup416: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup419: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup420: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup422: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup424: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup425: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup426: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u64',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u64'
      }
    }
  },
  /**
   * Lookup428: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup429: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletAssetsAssetDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    supply: 'u128',
    deposit: 'u128',
    minBalance: 'u128',
    isSufficient: 'bool',
    accounts: 'u32',
    sufficients: 'u32',
    approvals: 'u32',
    status: 'PalletAssetsAssetStatus'
  },
  /**
   * Lookup430: pallet_assets::types::AssetStatus
   **/
  PalletAssetsAssetStatus: {
    _enum: ['Live', 'Frozen', 'Destroying']
  },
  /**
   * Lookup432: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra>
   **/
  PalletAssetsAssetAccount: {
    balance: 'u128',
    isFrozen: 'bool',
    reason: 'PalletAssetsExistenceReason',
    extra: 'Null'
  },
  /**
   * Lookup433: pallet_assets::types::ExistenceReason<Balance>
   **/
  PalletAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null'
    }
  },
  /**
   * Lookup435: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PalletAssetsApproval: {
    amount: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup438: pallet_assets::pallet::Error<T, I>
   **/
  PalletAssetsError: {
    _enum: ['BalanceLow', 'NoAccount', 'NoPermission', 'Unknown', 'Frozen', 'InUse', 'BadWitness', 'MinBalanceZero', 'NoProvider', 'BadMetadata', 'Unapproved', 'WouldDie', 'AlreadyExists', 'NoDeposit', 'WouldBurn', 'LiveAsset', 'AssetNotLive', 'IncorrectStatus', 'NotFrozen']
  },
  /**
   * Lookup446: pallet_assets::types::AssetMetadata<DepositBalance, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetsAssetMetadata: {
    deposit: 'u128',
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    isFrozen: 'bool'
  },
  /**
   * Lookup453: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<battery_station_runtime::RuntimeCall>, Balance>
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
   * Lookup454: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<battery_station_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u64',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u64',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup455: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup456: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
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
   * Lookup460: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup461: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u64,u128)',
  /**
   * Lookup464: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow']
  },
  /**
   * Lookup466: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u64'
  },
  /**
   * Lookup467: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup469: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup478: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup486: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup488: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup489: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup492: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, zeitgeist_primitives::proxy_type::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'ZeitgeistPrimitivesProxyType',
    delay: 'u64'
  },
  /**
   * Lookup496: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u64'
  },
  /**
   * Lookup498: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup500: pallet_contracts::wasm::PrefabWasmModule<T>
   **/
  PalletContractsWasmPrefabWasmModule: {
    instructionWeightsVersion: 'Compact<u32>',
    initial: 'Compact<u32>',
    maximum: 'Compact<u32>',
    code: 'Bytes',
    determinism: 'PalletContractsWasmDeterminism'
  },
  /**
   * Lookup502: pallet_contracts::wasm::OwnerInfo<T>
   **/
  PalletContractsWasmOwnerInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>'
  },
  /**
   * Lookup503: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128'
  },
  /**
   * Lookup505: pallet_contracts::storage::DeletedContract
   **/
  PalletContractsStorageDeletedContract: {
    trieId: 'Bytes'
  },
  /**
   * Lookup507: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights',
    hostFnWeights: 'PalletContractsScheduleHostFnWeights'
  },
  /**
   * Lookup508: pallet_contracts::schedule::Limits
   **/
  PalletContractsScheduleLimits: {
    eventTopics: 'u32',
    globals: 'u32',
    locals: 'u32',
    parameters: 'u32',
    memoryPages: 'u32',
    tableSize: 'u32',
    brTableSize: 'u32',
    subjectLen: 'u32',
    payloadLen: 'u32'
  },
  /**
   * Lookup509: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PalletContractsScheduleInstructionWeights: {
    _alias: {
      r_if: 'r#if'
    },
    version: 'u32',
    fallback: 'u32',
    i64const: 'u32',
    i64load: 'u32',
    i64store: 'u32',
    select: 'u32',
    r_if: 'u32',
    br: 'u32',
    brIf: 'u32',
    brTable: 'u32',
    brTablePerEntry: 'u32',
    call: 'u32',
    callIndirect: 'u32',
    callIndirectPerParam: 'u32',
    callPerLocal: 'u32',
    localGet: 'u32',
    localSet: 'u32',
    localTee: 'u32',
    globalGet: 'u32',
    globalSet: 'u32',
    memoryCurrent: 'u32',
    memoryGrow: 'u32',
    i64clz: 'u32',
    i64ctz: 'u32',
    i64popcnt: 'u32',
    i64eqz: 'u32',
    i64extendsi32: 'u32',
    i64extendui32: 'u32',
    i32wrapi64: 'u32',
    i64eq: 'u32',
    i64ne: 'u32',
    i64lts: 'u32',
    i64ltu: 'u32',
    i64gts: 'u32',
    i64gtu: 'u32',
    i64les: 'u32',
    i64leu: 'u32',
    i64ges: 'u32',
    i64geu: 'u32',
    i64add: 'u32',
    i64sub: 'u32',
    i64mul: 'u32',
    i64divs: 'u32',
    i64divu: 'u32',
    i64rems: 'u32',
    i64remu: 'u32',
    i64and: 'u32',
    i64or: 'u32',
    i64xor: 'u32',
    i64shl: 'u32',
    i64shrs: 'u32',
    i64shru: 'u32',
    i64rotl: 'u32',
    i64rotr: 'u32'
  },
  /**
   * Lookup510: pallet_contracts::schedule::HostFnWeights<T>
   **/
  PalletContractsScheduleHostFnWeights: {
    _alias: {
      r_return: 'r#return'
    },
    caller: 'SpWeightsWeightV2Weight',
    isContract: 'SpWeightsWeightV2Weight',
    codeHash: 'SpWeightsWeightV2Weight',
    ownCodeHash: 'SpWeightsWeightV2Weight',
    callerIsOrigin: 'SpWeightsWeightV2Weight',
    address: 'SpWeightsWeightV2Weight',
    gasLeft: 'SpWeightsWeightV2Weight',
    balance: 'SpWeightsWeightV2Weight',
    valueTransferred: 'SpWeightsWeightV2Weight',
    minimumBalance: 'SpWeightsWeightV2Weight',
    blockNumber: 'SpWeightsWeightV2Weight',
    now: 'SpWeightsWeightV2Weight',
    weightToFee: 'SpWeightsWeightV2Weight',
    gas: 'SpWeightsWeightV2Weight',
    input: 'SpWeightsWeightV2Weight',
    inputPerByte: 'SpWeightsWeightV2Weight',
    r_return: 'SpWeightsWeightV2Weight',
    returnPerByte: 'SpWeightsWeightV2Weight',
    terminate: 'SpWeightsWeightV2Weight',
    random: 'SpWeightsWeightV2Weight',
    depositEvent: 'SpWeightsWeightV2Weight',
    depositEventPerTopic: 'SpWeightsWeightV2Weight',
    depositEventPerByte: 'SpWeightsWeightV2Weight',
    debugMessage: 'SpWeightsWeightV2Weight',
    setStorage: 'SpWeightsWeightV2Weight',
    setStoragePerNewByte: 'SpWeightsWeightV2Weight',
    setStoragePerOldByte: 'SpWeightsWeightV2Weight',
    setCodeHash: 'SpWeightsWeightV2Weight',
    clearStorage: 'SpWeightsWeightV2Weight',
    clearStoragePerByte: 'SpWeightsWeightV2Weight',
    containsStorage: 'SpWeightsWeightV2Weight',
    containsStoragePerByte: 'SpWeightsWeightV2Weight',
    getStorage: 'SpWeightsWeightV2Weight',
    getStoragePerByte: 'SpWeightsWeightV2Weight',
    takeStorage: 'SpWeightsWeightV2Weight',
    takeStoragePerByte: 'SpWeightsWeightV2Weight',
    transfer: 'SpWeightsWeightV2Weight',
    call: 'SpWeightsWeightV2Weight',
    delegateCall: 'SpWeightsWeightV2Weight',
    callTransferSurcharge: 'SpWeightsWeightV2Weight',
    callPerClonedByte: 'SpWeightsWeightV2Weight',
    instantiate: 'SpWeightsWeightV2Weight',
    instantiateTransferSurcharge: 'SpWeightsWeightV2Weight',
    instantiatePerInputByte: 'SpWeightsWeightV2Weight',
    instantiatePerSaltByte: 'SpWeightsWeightV2Weight',
    hashSha2256: 'SpWeightsWeightV2Weight',
    hashSha2256PerByte: 'SpWeightsWeightV2Weight',
    hashKeccak256: 'SpWeightsWeightV2Weight',
    hashKeccak256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2256: 'SpWeightsWeightV2Weight',
    hashBlake2256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2128: 'SpWeightsWeightV2Weight',
    hashBlake2128PerByte: 'SpWeightsWeightV2Weight',
    ecdsaRecover: 'SpWeightsWeightV2Weight',
    ecdsaToEthAddress: 'SpWeightsWeightV2Weight',
    reentranceCount: 'SpWeightsWeightV2Weight',
    accountReentranceCount: 'SpWeightsWeightV2Weight',
    instantiationNonce: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup511: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidScheduleVersion', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'NoChainExtension', 'DeletionQueueFull', 'DuplicateContract', 'TerminatedInConstructor', 'DebugMessageInvalidUTF8', 'ReentranceDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic']
  },
  /**
   * Lookup512: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup515: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup517: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup519: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup521: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup522: zrml_market_commons::pallet::Error<T>
   **/
  ZrmlMarketCommonsError: {
    _enum: ['MarketDoesNotExist', 'MarketPoolDoesNotExist', 'NoMarketHasBeenCreated', 'NoReport', 'PoolAlreadyExists']
  },
  /**
   * Lookup523: zeitgeist_primitives::market::AuthorityReport<BlockNumber>
   **/
  ZeitgeistPrimitivesMarketAuthorityReport: {
    resolveAt: 'u64',
    outcome: 'ZeitgeistPrimitivesOutcomeReport'
  },
  /**
   * Lookup524: zrml_authorized::pallet::Error<T>
   **/
  ZrmlAuthorizedError: {
    _enum: ['MarketDoesNotHaveDisputeMechanismAuthorized', 'MarketIsNotDisputed', 'OutcomeMismatch']
  },
  /**
   * Lookup526: zrml_court::types::CourtPoolItem<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  ZrmlCourtCourtPoolItem: {
    stake: 'u128',
    courtParticipant: 'AccountId32',
    consumedStake: 'u128',
    joinedAt: 'u64',
    uneligibleIndex: 'u64',
    uneligibleStake: 'u128'
  },
  /**
   * Lookup528: zrml_court::types::CourtParticipantInfo<Balance, BlockNumber, sp_core::bounded::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  ZrmlCourtCourtParticipantInfo: {
    stake: 'u128',
    activeLock: 'u128',
    prepareExitAt: 'Option<u64>',
    delegations: 'Option<Vec<AccountId32>>'
  },
  /**
   * Lookup533: zrml_court::types::Draw<sp_core::crypto::AccountId32, Balance, primitive_types::H256, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  ZrmlCourtDraw: {
    courtParticipant: 'AccountId32',
    weight: 'u32',
    vote: 'ZrmlCourtVote',
    slashable: 'u128'
  },
  /**
   * Lookup536: zrml_court::types::Vote<primitive_types::H256, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  ZrmlCourtVote: {
    _enum: {
      Delegated: {
        delegatedStakes: 'Vec<(AccountId32,u128)>',
      },
      Drawn: 'Null',
      Secret: {
        commitment: 'H256',
      },
      Revealed: {
        commitment: 'H256',
        voteItem: 'ZrmlCourtVoteItem',
        salt: 'H256',
      },
      Denounced: {
        commitment: 'H256',
        voteItem: 'ZrmlCourtVoteItem',
        salt: 'H256'
      }
    }
  },
  /**
   * Lookup538: zrml_court::pallet::Error<T>
   **/
  ZrmlCourtError: {
    _enum: {
      JurorDoesNotExist: 'Null',
      MarketDoesNotHaveCourtMechanism: 'Null',
      MarketIsNotDisputed: 'Null',
      CallerIsNotACourtParticipant: 'Null',
      VoteAlreadyRevealed: 'Null',
      CommitmentHashMismatch: 'Null',
      CourtNotFound: 'Null',
      NotInVotingPeriod: 'Null',
      NotInAggregationPeriod: 'Null',
      MaxAppealsReached: 'Null',
      NotInAppealPeriod: 'Null',
      InvalidVoteState: 'Null',
      BelowMinJurorStake: 'Null',
      MaxCourtParticipantsReached: 'Null',
      AlreadyPreparedExit: 'Null',
      JurorNotDrawn: 'Null',
      JurorDidNotVote: 'Null',
      VoteAlreadyDenounced: 'Null',
      CallerDenouncedItself: 'Null',
      CourtNotClosed: 'Null',
      CourtAlreadyReassigned: 'Null',
      NotEnoughJurorsAndDelegatorsStake: 'Null',
      MarketReportNotFound: 'Null',
      MaxCourtIdReached: 'Null',
      AmountExceedsBalance: 'Null',
      AmountBelowLastJoin: 'Null',
      AmountBelowLowestJuror: 'Null',
      CourtParticipantTwiceInPool: 'Null',
      CallerNotInSelectedDraws: 'Null',
      AppealBondExceedsBalance: 'Null',
      PrematureExit: 'Null',
      PrepareExitAtNotPresent: 'Null',
      MaxDelegationsReached: 'Null',
      JurorDelegated: 'Null',
      SelfDelegationNotAllowed: 'Null',
      IdenticalDelegationsNotAllowed: 'Null',
      NoDelegations: 'Null',
      DelegatedToInvalidJuror: 'Null',
      MarketIdToCourtIdNotFound: 'Null',
      CourtIdToMarketIdNotFound: 'Null',
      InvalidVoteItemForOutcomeCourt: 'Null',
      InvalidVoteItemForBinaryCourt: 'Null',
      AppealedVoteItemIsNoOutcome: 'Null',
      WinnerVoteItemIsNoOutcome: 'Null',
      OutcomeMismatch: 'Null',
      VoteItemIsNoOutcome: 'Null',
      Unexpected: 'ZrmlCourtUnexpectedError',
      InflationExceedsMaxYearlyInflation: 'Null'
    }
  },
  /**
   * Lookup539: zrml_court::pallet::UnexpectedError
   **/
  ZrmlCourtUnexpectedError: {
    _enum: ['BinarySearchByKeyFailed', 'InflationPeriodIsZero']
  },
  /**
   * Lookup541: zrml_liquidity_mining::owned_values_params::OwnedValuesParams<BA, BN>
   **/
  ZrmlLiquidityMiningOwnedValuesParams: {
    participatedBlocks: 'u64',
    perpetualIncentives: 'u128',
    totalIncentives: 'u128',
    totalShares: 'u128'
  },
  /**
   * Lookup542: zrml_liquidity_mining::pallet::Error<T>
   **/
  ZrmlLiquidityMiningError: {
    _enum: ['FundDoesNotHaveEnoughBalance']
  },
  /**
   * Lookup543: zrml_rikiddo::types::rikiddo_sigmoid_mv::RikiddoSigmoidMV<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>, substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>, zrml_rikiddo::types::sigmoid_fee::FeeSigmoid<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>, zrml_rikiddo::types::ema_market_volume::EmaMarketVolume<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>>
   **/
  ZrmlRikiddoRikiddoSigmoidMV: {
    config: 'ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig',
    fees: 'ZrmlRikiddoSigmoidFeeFeeSigmoid',
    maShort: 'ZrmlRikiddoEmaMarketVolume',
    maLong: 'ZrmlRikiddoEmaMarketVolume'
  },
  /**
   * Lookup544: substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>
   **/
  SubstrateFixedFixedU128: {
    bits: 'u128'
  },
  /**
   * Lookup549: typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>
   **/
  TypenumUIntUInt: {
    msb: 'TypenumUIntUTerm',
    lsb: 'TypenumBitB0'
  },
  /**
   * Lookup550: typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>
   **/
  TypenumUIntUTerm: {
    msb: 'TypenumUintUTerm',
    lsb: 'TypenumBitB1'
  },
  /**
   * Lookup551: typenum::uint::UTerm
   **/
  TypenumUintUTerm: 'Null',
  /**
   * Lookup552: typenum::bit::B1
   **/
  TypenumBitB1: 'Null',
  /**
   * Lookup553: typenum::bit::B0
   **/
  TypenumBitB0: 'Null',
  /**
   * Lookup554: substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>
   **/
  SubstrateFixedFixedI128: {
    bits: 'i128'
  },
  /**
   * Lookup555: zrml_rikiddo::types::sigmoid_fee::FeeSigmoid<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoSigmoidFeeFeeSigmoid: {
    config: 'ZrmlRikiddoSigmoidFeeFeeSigmoidConfig'
  },
  /**
   * Lookup556: zrml_rikiddo::types::sigmoid_fee::FeeSigmoidConfig<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoSigmoidFeeFeeSigmoidConfig: {
    m: 'SubstrateFixedFixedI128',
    p: 'SubstrateFixedFixedI128',
    n: 'SubstrateFixedFixedI128',
    initialFee: 'SubstrateFixedFixedI128',
    minRevenue: 'SubstrateFixedFixedI128'
  },
  /**
   * Lookup557: zrml_rikiddo::types::ema_market_volume::EmaMarketVolume<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
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
   * Lookup558: zrml_rikiddo::types::ema_market_volume::EmaConfig<substrate_fixed::FixedU128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoEmaMarketVolumeEmaConfig: {
    emaPeriod: 'ZrmlRikiddoTimespan',
    emaPeriodEstimateAfter: 'Option<ZrmlRikiddoTimespan>',
    smoothing: 'SubstrateFixedFixedU128'
  },
  /**
   * Lookup559: zrml_rikiddo::types::Timespan
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
   * Lookup561: zrml_rikiddo::types::ema_market_volume::MarketVolumeState
   **/
  ZrmlRikiddoEmaMarketVolumeMarketVolumeState: {
    _enum: ['Uninitialized', 'DataCollectionStarted', 'DataCollected']
  },
  /**
   * Lookup562: zrml_rikiddo::types::rikiddo_sigmoid_mv::RikiddoConfig<substrate_fixed::FixedI128<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UInt<typenum::uint::UTerm, typenum::bit::B1>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B0>, typenum::bit::B1>>>
   **/
  ZrmlRikiddoRikiddoSigmoidMvRikiddoConfig: {
    initialFee: 'SubstrateFixedFixedI128',
    log2E: 'SubstrateFixedFixedI128'
  },
  /**
   * Lookup563: zrml_rikiddo::pallet::Error<T, I>
   **/
  ZrmlRikiddoError: {
    _enum: ['FixedConversionImpossible', 'RikiddoNotFoundForPool', 'RikiddoAlreadyExistsForPool']
  },
  /**
   * Lookup566: zrml_simple_disputes::pallet::Error<T>
   **/
  ZrmlSimpleDisputesError: {
    _enum: ['InvalidMarketStatus', 'MarketDoesNotHaveSimpleDisputesMechanism', 'StorageOverflow', 'OutcomeMismatch', 'CannotDisputeSameOutcome', 'MarketIsNotReported', 'MaxDisputesReached']
  },
  /**
   * Lookup567: zrml_swaps::pallet::Error<T>
   **/
  ZrmlSwapsError: {
    _enum: {
      AboveMaximumWeight: 'Null',
      __Unused1: 'Null',
      AssetNotInPool: 'Null',
      __Unused3: 'Null',
      BadLimitPrice: 'Null',
      BelowMinimumWeight: 'Null',
      InsufficientBalance: 'Null',
      InsufficientLiquidity: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      InvalidPoolStatus: 'Null',
      InvalidStateTransition: 'Null',
      __Unused12: 'Null',
      LimitIn: 'Null',
      __Unused14: 'Null',
      LimitMissing: 'Null',
      LimitOut: 'Null',
      MathApproximation: 'Null',
      MaxInRatio: 'Null',
      MaxOutRatio: 'Null',
      MaxTotalWeight: 'Null',
      PoolDoesNotExist: 'Null',
      PoolDrain: 'Null',
      PoolIsNotActive: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      ProvidedValuesLenMustEqualAssetsLen: 'Null',
      __Unused28: 'Null',
      SwapFeeTooHigh: 'Null',
      TooFewAssets: 'Null',
      TooManyAssets: 'Null',
      SomeIdenticalAssets: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      ZeroAmount: 'Null',
      Unexpected: 'ZrmlSwapsUnexpectedError'
    }
  },
  /**
   * Lookup568: zrml_swaps::pallet::UnexpectedError
   **/
  ZrmlSwapsUnexpectedError: {
    _enum: ['StorageOverflow']
  },
  /**
   * Lookup570: zrml_prediction_markets::pallet::Error<T>
   **/
  ZrmlPredictionMarketsError: {
    _enum: ['CannotDisputeSameOutcome', 'EditorNotCreator', 'EditReasonLengthExceedsMaxEditReasonLen', 'InsufficientFundsInMarketAccount', 'InsufficientShareBalance', 'InvalidMultihash', 'InvalidMarketType', 'InvalidScoringRule', 'NotEnoughBalance', 'MarketAlreadyReported', 'MarketDurationTooLong', 'MarketEditRequestAlreadyInProgress', 'MarketEditNotRequested', 'MarketIsNotActive', 'MarketIsNotClosed', 'MarketIsNotCollectingSubsidy', 'MarketIsNotProposed', 'MarketIsNotReported', 'MarketIsNotDisputed', 'MarketIsNotResolved', 'MarketStartTooSoon', 'MarketStartTooLate', 'MarketDisputeMechanismNotFailed', 'MissingBond', 'NotEnoughCategories', 'NoWinningBalance', 'OutcomeMismatch', 'RejectReasonLengthExceedsMaxRejectReasonLen', 'ReporterNotOracle', 'StorageOverflow', 'TooManyCategories', 'InvalidDisputeMechanism', 'InvalidMarketStatus', 'UnexpectedNoneInPostInfo', 'ZeroAmount', 'InvalidMarketPeriod', 'InvalidOutcomeRange', 'NotAllowedToReportYet', 'DisputeDurationSmallerThanMinDisputeDuration', 'OracleDurationSmallerThanMinOracleDuration', 'DisputeDurationGreaterThanMaxDisputeDuration', 'GracePeriodGreaterThanMaxGracePeriod', 'OracleDurationGreaterThanMaxOracleDuration', 'WeightsLenMustEqualAssetsLen', 'InvalidBaseAsset', 'UnregisteredForeignAsset', 'GlobalDisputeExistsAlready', 'NoDisputeMechanism', 'NonZeroDisputePeriodOnTrustedMarket', 'FeeTooHigh', 'InvalidResolutionMechanism', 'RequesterNotCreator', 'EarlyCloseRequestTooLate', 'InvalidEarlyCloseState', 'NoEarlyCloseScheduled', 'OnlyAuthorizedCanScheduleEarlyClose', 'CallerNotMarketCreator', 'MarketIsNotTrusted', 'NotAllowedForBlockBasedMarkets', 'MarketNotInCloseTimeFrameList', 'MarketPeriodEndNotAlreadyReachedYet']
  },
  /**
   * Lookup571: zrml_styx::pallet::Error<T>
   **/
  ZrmlStyxError: {
    _enum: ['FundDoesNotHaveEnoughFreeBalance', 'HasAlreadyCrossed']
  },
  /**
   * Lookup576: zrml_global_disputes::types::OutcomeInfo<sp_core::crypto::AccountId32, Balance, sp_core::bounded::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  ZrmlGlobalDisputesOutcomeInfo: {
    outcomeSum: 'u128',
    possession: 'ZrmlGlobalDisputesPossession'
  },
  /**
   * Lookup578: zrml_global_disputes::types::Possession<sp_core::crypto::AccountId32, Balance, sp_core::bounded::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  ZrmlGlobalDisputesPossession: {
    _enum: {
      Paid: {
        owner: 'AccountId32',
        fee: 'u128',
      },
      Shared: {
        owners: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup579: zrml_global_disputes::types::GlobalDisputeInfo<sp_core::crypto::AccountId32, Balance, sp_core::bounded::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>, BlockNumber>
   **/
  ZrmlGlobalDisputesGlobalDisputeInfo: {
    winnerOutcome: 'ZeitgeistPrimitivesOutcomeReport',
    outcomeInfo: 'ZrmlGlobalDisputesOutcomeInfo',
    status: 'ZrmlGlobalDisputesGdStatus'
  },
  /**
   * Lookup580: zrml_global_disputes::types::GdStatus<BlockNumber>
   **/
  ZrmlGlobalDisputesGdStatus: {
    _enum: {
      Active: {
        addOutcomeEnd: 'u64',
        voteEnd: 'u64',
      },
      Finished: 'Null',
      Destroyed: 'Null'
    }
  },
  /**
   * Lookup581: zrml_global_disputes::types::OldWinnerInfo<Balance, sp_core::bounded::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  ZrmlGlobalDisputesOldWinnerInfo: {
    outcome: 'ZeitgeistPrimitivesOutcomeReport',
    outcomeInfo: 'ZrmlGlobalDisputesOldOutcomeInfo',
    isFinished: 'bool'
  },
  /**
   * Lookup582: zrml_global_disputes::types::OldOutcomeInfo<Balance, sp_core::bounded::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  ZrmlGlobalDisputesOldOutcomeInfo: {
    outcomeSum: 'u128',
    owners: 'Vec<AccountId32>'
  },
  /**
   * Lookup583: zrml_global_disputes::pallet::Error<T>
   **/
  ZrmlGlobalDisputesError: {
    _enum: ['AmountTooLow', 'InvalidGlobalDisputeStatus', 'InsufficientAmount', 'MaxOwnersReached', 'MaxVotesReached', 'NoFundsToReward', 'GlobalDisputeNotFound', 'OutcomeAlreadyExists', 'OutcomeDoesNotExist', 'OutcomeMismatch', 'OutcomesNotFullyCleaned', 'SharedPossessionRequired', 'UnfinishedGlobalDispute', 'AddOutcomePeriodIsOver', 'NotInGdVotingPeriod', 'GlobalDisputeNotDestroyed', 'GlobalDisputeAlreadyExists']
  },
  /**
   * Lookup584: zrml_neo_swaps::types::pool::Pool<T, zrml_neo_swaps::liquidity_tree::types::liquidity_tree::LiquidityTree<T, U>>
   **/
  ZrmlNeoSwapsPool: {
    accountId: 'AccountId32',
    reserves: 'BTreeMap<ZeitgeistPrimitivesAssetsAllAssetsAsset, u128>',
    collateral: 'ZeitgeistPrimitivesAssetsAllAssetsAsset',
    liquidityParameter: 'u128',
    liquiditySharesManager: 'ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree',
    swapFee: 'u128'
  },
  /**
   * Lookup585: zrml_neo_swaps::liquidity_tree::types::liquidity_tree::LiquidityTree<T, U>
   **/
  ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree: {
    nodes: 'Vec<ZrmlNeoSwapsLiquidityTreeTypesNode>',
    accountToIndex: 'BTreeMap<AccountId32, u32>',
    abandonedNodes: 'Vec<u32>'
  },
  /**
   * Lookup587: zrml_neo_swaps::liquidity_tree::types::node::Node<T>
   **/
  ZrmlNeoSwapsLiquidityTreeTypesNode: {
    account: 'Option<AccountId32>',
    stake: 'u128',
    fees: 'u128',
    descendantStake: 'u128',
    lazyFees: 'u128'
  },
  /**
   * Lookup594: zrml_neo_swaps::pallet::Error<T>
   **/
  ZrmlNeoSwapsError: {
    _enum: {
      AssetCountAboveMax: 'Null',
      AmountInAboveMax: 'Null',
      AmountOutBelowMin: 'Null',
      AssetNotFound: 'Null',
      DuplicatePool: 'Null',
      IncorrectAssetCount: 'Null',
      IncorrectVecLen: 'Null',
      InsufficientPoolShares: 'Null',
      LiquidityTooLow: 'Null',
      InvalidSpotPrices: 'Null',
      InvalidTradingMechanism: 'Null',
      MarketNotActive: 'Null',
      MathError: 'Null',
      NotAllowed: 'Null',
      NotImplemented: 'Null',
      NumericalLimits: 'ZrmlNeoSwapsNumericalLimitsError',
      OutstandingFees: 'Null',
      PoolNotFound: 'Null',
      SpotPriceAboveMax: 'Null',
      SpotPriceBelowMin: 'Null',
      SwapFeeAboveMax: 'Null',
      SwapFeeBelowMin: 'Null',
      Unexpected: 'Null',
      ZeroAmount: 'Null',
      LiquidityTreeError: 'ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError',
      MinRelativeLiquidityThresholdViolated: 'Null'
    }
  },
  /**
   * Lookup595: zrml_neo_swaps::pallet::NumericalLimitsError
   **/
  ZrmlNeoSwapsNumericalLimitsError: {
    _enum: ['SpotPriceTooLow', 'SpotPriceSlippedTooLow', 'MaxAmountExceeded', 'MinAmountNotMet']
  },
  /**
   * Lookup596: zrml_neo_swaps::liquidity_tree::types::liquidity_tree_error::LiquidityTreeError
   **/
  ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeError: {
    _enum: {
      AccountNotFound: 'Null',
      NodeNotFound: 'Null',
      UnwithdrawnFees: 'Null',
      TreeIsFull: 'Null',
      InsufficientStake: 'Null',
      MaxIterationsReached: 'Null',
      StorageOverflow: 'ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError'
    }
  },
  /**
   * Lookup597: zrml_neo_swaps::liquidity_tree::types::liquidity_tree_error::StorageOverflowError
   **/
  ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError: {
    _enum: ['Nodes', 'AccountToIndex', 'AbandonedNodes']
  },
  /**
   * Lookup598: zrml_orderbook::pallet::Error<T>
   **/
  ZrmlOrderbookError: {
    _enum: ['NotOrderCreator', 'OrderDoesNotExist', 'MarketIsNotActive', 'InvalidScoringRule', 'AmountTooHighForOrder', 'InvalidOutcomeAsset', 'PartialFillNearFullFillNotAllowed', 'MarketBaseAssetNotPresent', 'BelowMinimumBalance']
  },
  /**
   * Lookup599: zrml_parimutuel::pallet::Error<T>
   **/
  ZrmlParimutuelError: {
    _enum: {
      NoRewardShareOutstanding: 'Null',
      MarketIsNotActive: 'Null',
      AmountBelowMinimumBetSize: 'Null',
      __Unused3: 'Null',
      InvalidOutcomeAsset: 'Null',
      InvalidScoringRule: 'Null',
      InsufficientBalance: 'Null',
      MarketIsNotResolvedYet: 'Null',
      Unexpected: 'Null',
      NoResolvedOutcome: 'Null',
      RefundNotAllowed: 'Null',
      RefundableBalanceIsZero: 'Null',
      NoWinningShares: 'Null',
      NotCategorical: 'Null',
      NoRewardToDistribute: 'Null',
      InconsistentState: 'ZrmlParimutuelInconsistentStateError'
    }
  },
  /**
   * Lookup600: zrml_parimutuel::pallet::InconsistentStateError
   **/
  ZrmlParimutuelInconsistentStateError: {
    _enum: ['InsufficientFundsInPotAccount', 'OutcomeIssuanceGreaterCollateral']
  },
  /**
   * Lookup601: zrml_asset_router::pallet::Error<T>
   **/
  ZrmlAssetRouterError: {
    _enum: ['AmountIntoBalanceFailed', 'AssetIndestructible', 'DestructionInProgress', 'TooManyManagedDestroys', 'UnknownAsset', 'Unsupported']
  },
  /**
   * Lookup603: polkadot_primitives::v2::UpgradeRestriction
   **/
  PolkadotPrimitivesV2UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup604: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueSize: '(u32,u32)',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
  },
  /**
   * Lookup608: polkadot_primitives::v2::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV2AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup610: polkadot_primitives::v2::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV2AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32'
  },
  /**
   * Lookup616: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup617: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup618: pallet_parachain_staking::types::ParachainBondConfig<sp_core::crypto::AccountId32>
   **/
  PalletParachainStakingParachainBondConfig: {
    account: 'AccountId32',
    percent: 'Percent'
  },
  /**
   * Lookup619: pallet_parachain_staking::types::RoundInfo<BlockNumber>
   **/
  PalletParachainStakingRoundInfo: {
    current: 'u32',
    first: 'u64',
    length: 'u32'
  },
  /**
   * Lookup620: pallet_parachain_staking::types::Delegator<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingDelegator: {
    id: 'AccountId32',
    delegations: 'PalletParachainStakingSetOrderedSet',
    total: 'u128',
    lessTotal: 'u128',
    status: 'PalletParachainStakingDelegatorStatus'
  },
  /**
   * Lookup621: pallet_parachain_staking::set::OrderedSet<pallet_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>>
   **/
  PalletParachainStakingSetOrderedSet: 'Vec<PalletParachainStakingBond>',
  /**
   * Lookup622: pallet_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingBond: {
    owner: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup624: pallet_parachain_staking::types::DelegatorStatus
   **/
  PalletParachainStakingDelegatorStatus: {
    _enum: {
      Active: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup625: pallet_parachain_staking::types::CandidateMetadata<Balance>
   **/
  PalletParachainStakingCandidateMetadata: {
    bond: 'u128',
    delegationCount: 'u32',
    totalCounted: 'u128',
    lowestTopDelegationAmount: 'u128',
    highestBottomDelegationAmount: 'u128',
    lowestBottomDelegationAmount: 'u128',
    topCapacity: 'PalletParachainStakingCapacityStatus',
    bottomCapacity: 'PalletParachainStakingCapacityStatus',
    request: 'Option<PalletParachainStakingCandidateBondLessRequest>',
    status: 'PalletParachainStakingCollatorStatus'
  },
  /**
   * Lookup626: pallet_parachain_staking::types::CapacityStatus
   **/
  PalletParachainStakingCapacityStatus: {
    _enum: ['Full', 'Empty', 'Partial']
  },
  /**
   * Lookup628: pallet_parachain_staking::types::CandidateBondLessRequest<Balance>
   **/
  PalletParachainStakingCandidateBondLessRequest: {
    amount: 'u128',
    whenExecutable: 'u32'
  },
  /**
   * Lookup629: pallet_parachain_staking::types::CollatorStatus
   **/
  PalletParachainStakingCollatorStatus: {
    _enum: {
      Active: 'Null',
      Idle: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup631: pallet_parachain_staking::delegation_requests::ScheduledRequest<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingDelegationRequestsScheduledRequest: {
    delegator: 'AccountId32',
    whenExecutable: 'u32',
    action: 'PalletParachainStakingDelegationRequestsDelegationAction'
  },
  /**
   * Lookup633: pallet_parachain_staking::auto_compound::AutoCompoundConfig<sp_core::crypto::AccountId32>
   **/
  PalletParachainStakingAutoCompoundAutoCompoundConfig: {
    delegator: 'AccountId32',
    value: 'Percent'
  },
  /**
   * Lookup634: pallet_parachain_staking::types::Delegations<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingDelegations: {
    delegations: 'Vec<PalletParachainStakingBond>',
    total: 'u128'
  },
  /**
   * Lookup636: pallet_parachain_staking::types::CollatorSnapshot<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingCollatorSnapshot: {
    bond: 'u128',
    delegations: 'Vec<PalletParachainStakingBondWithAutoCompound>',
    total: 'u128'
  },
  /**
   * Lookup638: pallet_parachain_staking::types::BondWithAutoCompound<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingBondWithAutoCompound: {
    owner: 'AccountId32',
    amount: 'u128',
    autoCompound: 'Percent'
  },
  /**
   * Lookup639: pallet_parachain_staking::types::DelayedPayout<Balance>
   **/
  PalletParachainStakingDelayedPayout: {
    roundIssuance: 'u128',
    totalStakingReward: 'u128',
    collatorCommission: 'Perbill'
  },
  /**
   * Lookup640: pallet_parachain_staking::inflation::InflationInfo<Balance>
   **/
  PalletParachainStakingInflationInflationInfo: {
    expect: {
      min: 'u128',
      ideal: 'u128',
      max: 'u128'
    },
    annual: {
      min: 'Perbill',
      ideal: 'Perbill',
      max: 'Perbill'
    },
    round: {
      min: 'Perbill',
      ideal: 'Perbill',
      max: 'Perbill'
    }
  },
  /**
   * Lookup641: pallet_parachain_staking::pallet::Error<T>
   **/
  PalletParachainStakingError: {
    _enum: ['DelegatorDNE', 'DelegatorDNEinTopNorBottom', 'DelegatorDNEInDelegatorSet', 'CandidateDNE', 'DelegationDNE', 'DelegatorExists', 'CandidateExists', 'CandidateBondBelowMin', 'InsufficientBalance', 'DelegatorBondBelowMin', 'DelegationBelowMin', 'AlreadyOffline', 'AlreadyActive', 'DelegatorAlreadyLeaving', 'DelegatorNotLeaving', 'DelegatorCannotLeaveYet', 'CannotDelegateIfLeaving', 'CandidateAlreadyLeaving', 'CandidateNotLeaving', 'CandidateCannotLeaveYet', 'CannotGoOnlineIfLeaving', 'ExceedMaxDelegationsPerDelegator', 'AlreadyDelegatedCandidate', 'InvalidSchedule', 'CannotSetBelowMin', 'RoundLengthMustBeGreaterThanTotalSelectedCollators', 'NoWritingSameValue', 'TooLowCandidateCountWeightHintJoinCandidates', 'TooLowCandidateCountWeightHintCancelLeaveCandidates', 'TooLowCandidateCountToLeaveCandidates', 'TooLowDelegationCountToDelegate', 'TooLowCandidateDelegationCountToDelegate', 'TooLowCandidateDelegationCountToLeaveCandidates', 'TooLowDelegationCountToLeaveDelegators', 'PendingCandidateRequestsDNE', 'PendingCandidateRequestAlreadyExists', 'PendingCandidateRequestNotDueYet', 'PendingDelegationRequestDNE', 'PendingDelegationRequestAlreadyExists', 'PendingDelegationRequestNotDueYet', 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull', 'PendingDelegationRevoke', 'TooLowDelegationCountToAutoCompound', 'TooLowCandidateAutoCompoundingDelegationCountToAutoCompound', 'TooLowCandidateAutoCompoundingDelegationCountToDelegate']
  },
  /**
   * Lookup642: pallet_author_inherent::pallet::Error<T>
   **/
  PalletAuthorInherentError: {
    _enum: ['AuthorAlreadySet', 'NoAccountId', 'CannotBeAuthor']
  },
  /**
   * Lookup643: pallet_author_mapping::pallet::RegistrationInfo<T>
   **/
  PalletAuthorMappingRegistrationInfo: {
    _alias: {
      keys_: 'keys'
    },
    account: 'AccountId32',
    deposit: 'u128',
    keys_: 'SessionKeysPrimitivesVrfVrfCryptoPublic'
  },
  /**
   * Lookup644: pallet_author_mapping::pallet::Error<T>
   **/
  PalletAuthorMappingError: {
    _enum: ['AssociationNotFound', 'NotYourAssociation', 'CannotAffordSecurityDeposit', 'AlreadyAssociated', 'OldAuthorIdNotFound', 'WrongKeySize', 'DecodeNimbusFailed', 'DecodeKeysFailed']
  },
  /**
   * Lookup645: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup646: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup647: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup650: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup651: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<XcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u64',
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u64'
      }
    }
  },
  /**
   * Lookup654: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Response',
      V3: 'XcmV3Response'
    }
  },
  /**
   * Lookup660: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup662: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup663: pallet_xcm::pallet::RemoteLockedFungibleRecord
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedMultiLocation',
    locker: 'XcmVersionedMultiLocation',
    users: 'u32'
  },
  /**
   * Lookup667: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup669: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup670: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup673: polkadot_parachain::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup676: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup677: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup679: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup681: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
   * Lookup682: orml_asset_registry::module::Error<T>
   **/
  OrmlAssetRegistryModuleError: {
    _enum: ['AssetNotFound', 'BadVersion', 'InvalidAssetId', 'ConflictingLocation', 'ConflictingAssetId']
  },
  /**
   * Lookup685: orml_unknown_tokens::module::Error<T>
   **/
  OrmlUnknownTokensModuleError: {
    _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
  },
  /**
   * Lookup686: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup687: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup689: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup690: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup692: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup693: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup696: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup697: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup698: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup699: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup702: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u64>',
  /**
   * Lookup703: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup704: pallet_asset_tx_payment::ChargeAssetTxPayment<T>
   **/
  PalletAssetTxPaymentChargeAssetTxPayment: {
    tip: 'Compact<u128>',
    assetId: 'Option<ZeitgeistPrimitivesAssetsAllAssetsAsset>'
  },
  /**
   * Lookup705: battery_station_runtime::Runtime
   **/
  BatteryStationRuntimeRuntime: 'Null'
};
