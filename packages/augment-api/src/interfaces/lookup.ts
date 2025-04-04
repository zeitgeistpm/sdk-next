// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u64',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup9: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup10: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
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
   * Lookup19: frame_system::EventRecord<zeitgeist_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
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
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
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
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: pallet_scheduler::pallet::Event<T>
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
   * Lookup35: pallet_preimage::pallet::Event<T>
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
   * Lookup36: pallet_balances::pallet::Event<T, I>
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
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup37: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup38: pallet_transaction_payment::pallet::Event<T>
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
   * Lookup39: pallet_treasury::pallet::Event<T, I>
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
   * Lookup40: pallet_vesting::pallet::Event<T>
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
   * Lookup41: pallet_multisig::pallet::Event<T>
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
   * Lookup42: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u64',
    index: 'u32'
  },
  /**
   * Lookup43: pallet_bounties::pallet::Event<T, I>
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
   * Lookup44: pallet_asset_tx_payment::pallet::Event<T>
   **/
  PalletAssetTxPaymentEvent: {
    _enum: {
      AssetTxFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128',
        assetId: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup46: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV3Junctions'
  },
  /**
   * Lookup47: staging_xcm::v3::junctions::Junctions
   **/
  StagingXcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV3Junction',
      X2: '(StagingXcmV3Junction,StagingXcmV3Junction)',
      X3: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X4: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X5: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X6: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X7: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)',
      X8: '(StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction,StagingXcmV3Junction)'
    }
  },
  /**
   * Lookup48: staging_xcm::v3::junction::Junction
   **/
  StagingXcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<StagingXcmV3JunctionNetworkId>',
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
        id: 'StagingXcmV3JunctionBodyId',
        part: 'StagingXcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'StagingXcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup51: staging_xcm::v3::junction::NetworkId
   **/
  StagingXcmV3JunctionNetworkId: {
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
   * Lookup54: staging_xcm::v3::junction::BodyId
   **/
  StagingXcmV3JunctionBodyId: {
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
   * Lookup55: staging_xcm::v3::junction::BodyPart
   **/
  StagingXcmV3JunctionBodyPart: {
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
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
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
   * Lookup60: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup61: pallet_collective::pallet::Event<T, I>
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
   * Lookup63: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup68: pallet_identity::pallet::Event<T>
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
   * Lookup69: pallet_utility::pallet::Event
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
   * Lookup70: pallet_proxy::pallet::Event<T>
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
   * Lookup71: zeitgeist_primitives::proxy_type::ProxyType
   **/
  ZeitgeistPrimitivesProxyType: {
    _enum: ['Any', 'CancelProxy', 'Governance', 'Staking', 'CreateEditMarket', 'ReportOutcome', 'Dispute', 'ProvideLiquidity', 'BuySellCompleteSets', 'Trading', 'HandleAssets']
  },
  /**
   * Lookup73: orml_tokens::module::Event<T>
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
        who: 'AccountId32',
      },
      Locked: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        who: 'AccountId32',
        amount: 'u128',
      },
      Issued: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        amount: 'u128',
      },
      Rescinded: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup74: zeitgeist_primitives::asset::Asset<MarketId>
   **/
  ZeitgeistPrimitivesAsset: {
    _enum: {
      CategoricalOutcome: '(u128,u16)',
      ScalarOutcome: '(u128,ZeitgeistPrimitivesAssetScalarPosition)',
      CombinatorialOutcomeLegacy: 'Null',
      PoolShare: 'u128',
      Ztg: 'Null',
      ForeignAsset: 'u32',
      ParimutuelShare: '(u128,u16)',
      CombinatorialToken: '[u8;32]'
    }
  },
  /**
   * Lookup75: zeitgeist_primitives::asset::ScalarPosition
   **/
  ZeitgeistPrimitivesAssetScalarPosition: {
    _enum: ['Long', 'Short']
  },
  /**
   * Lookup77: zrml_authorized::pallet::Event<T>
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
   * Lookup78: zeitgeist_primitives::outcome_report::OutcomeReport
   **/
  ZeitgeistPrimitivesOutcomeReport: {
    _enum: {
      Categorical: 'u16',
      Scalar: 'u128'
    }
  },
  /**
   * Lookup79: zrml_court::pallet::Event<T>
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
   * Lookup80: zrml_court::types::CourtInfo<BlockNumber, bounded_collections::bounded_vec::BoundedVec<zrml_court::types::AppealInfo<sp_core::crypto::AccountId32, Balance>, S>>
   **/
  ZrmlCourtCourtInfo: {
    status: 'ZrmlCourtCourtStatus',
    appeals: 'Vec<ZrmlCourtAppealInfo>',
    roundEnds: 'ZrmlCourtRoundTiming',
    voteItemType: 'ZrmlCourtVoteItemType'
  },
  /**
   * Lookup82: zrml_court::types::AppealInfo<sp_core::crypto::AccountId32, Balance>
   **/
  ZrmlCourtAppealInfo: {
    backer: 'AccountId32',
    bond: 'u128',
    appealedVoteItem: 'ZrmlCourtVoteItem'
  },
  /**
   * Lookup83: zrml_court::types::VoteItem
   **/
  ZrmlCourtVoteItem: {
    _enum: {
      Outcome: 'ZeitgeistPrimitivesOutcomeReport',
      Binary: 'bool'
    }
  },
  /**
   * Lookup85: zrml_court::types::CourtStatus
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
   * Lookup86: zrml_court::types::RoundTiming<BlockNumber>
   **/
  ZrmlCourtRoundTiming: {
    preVote: 'u64',
    vote: 'u64',
    aggregation: 'u64',
    appeal: 'u64'
  },
  /**
   * Lookup87: zrml_court::types::VoteItemType
   **/
  ZrmlCourtVoteItemType: {
    _enum: ['Outcome', 'Binary']
  },
  /**
   * Lookup91: zrml_swaps::pallet::Event<T>
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
   * Lookup92: zrml_swaps::events::CommonPoolEventParams<sp_core::crypto::AccountId32>
   **/
  ZrmlSwapsEventsCommonPoolEventParams: {
    poolId: 'u128',
    who: 'AccountId32'
  },
  /**
   * Lookup93: zrml_swaps::types::pool::Pool<zeitgeist_primitives::asset::Asset<MarketId>, Balance>
   **/
  ZrmlSwapsPool: {
    assets: 'Vec<ZeitgeistPrimitivesAsset>',
    status: 'ZrmlSwapsPoolPoolStatus',
    swapFee: 'u128',
    totalWeight: 'u128',
    weights: 'BTreeMap<ZeitgeistPrimitivesAsset, u128>'
  },
  /**
   * Lookup96: zrml_swaps::types::pool::PoolStatus
   **/
  ZrmlSwapsPoolPoolStatus: {
    _enum: ['Open', 'Closed']
  },
  /**
   * Lookup101: zrml_swaps::events::PoolAssetsEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::asset::Asset<MarketId>, B>
   **/
  ZrmlSwapsEventsPoolAssetsEvent: {
    assets: 'Vec<ZeitgeistPrimitivesAsset>',
    bounds: 'Vec<u128>',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    transferred: 'Vec<u128>',
    poolAmount: 'u128'
  },
  /**
   * Lookup103: zrml_swaps::events::PoolAssetEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::asset::Asset<MarketId>, B>
   **/
  ZrmlSwapsEventsPoolAssetEvent: {
    asset: 'ZeitgeistPrimitivesAsset',
    bound: 'u128',
    cpep: 'ZrmlSwapsEventsCommonPoolEventParams',
    transferred: 'u128',
    poolAmount: 'u128'
  },
  /**
   * Lookup104: zrml_swaps::events::SwapEvent<sp_core::crypto::AccountId32, zeitgeist_primitives::asset::Asset<MarketId>, B>
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
   * Lookup106: zrml_prediction_markets::pallet::Event<T>
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
      TokensRedeemed: '(u128,ZeitgeistPrimitivesAsset,u128,u128,AccountId32)',
      GlobalDisputeStarted: 'u128',
      RecoveryLimitReached: {
        lastTimeFrame: 'u64',
        limitTimeFrame: 'u64'
      }
    }
  },
  /**
   * Lookup107: zeitgeist_primitives::market::MarketStatus
   **/
  ZeitgeistPrimitivesMarketMarketStatus: {
    _enum: ['Proposed', 'Active', 'Closed', 'Reported', 'Disputed', 'Resolved']
  },
  /**
   * Lookup108: zeitgeist_primitives::market::Market<sp_core::crypto::AccountId32, Balance, BlockNumber, Moment, MarketId>
   **/
  ZeitgeistPrimitivesMarket: {
    marketId: 'u128',
    baseAsset: 'ZeitgeistPrimitivesAsset',
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
   * Lookup109: zeitgeist_primitives::market::MarketCreation
   **/
  ZeitgeistPrimitivesMarketMarketCreation: {
    _enum: ['Permissionless', 'Advised']
  },
  /**
   * Lookup110: zeitgeist_primitives::market::MarketType
   **/
  ZeitgeistPrimitivesMarketMarketType: {
    _enum: {
      Categorical: 'u16',
      Scalar: 'RangeInclusive<u128>'
    }
  },
  /**
   * Lookup112: zeitgeist_primitives::market::MarketPeriod<BlockNumber, Moment>
   **/
  ZeitgeistPrimitivesMarketMarketPeriod: {
    _enum: {
      Block: 'Range<u64>',
      Timestamp: 'Range<u64>'
    }
  },
  /**
   * Lookup114: zeitgeist_primitives::market::Deadlines<BlockNumber>
   **/
  ZeitgeistPrimitivesMarketDeadlines: {
    gracePeriod: 'u64',
    oracleDuration: 'u64',
    disputeDuration: 'u64'
  },
  /**
   * Lookup115: zeitgeist_primitives::market::ScoringRule
   **/
  ZeitgeistPrimitivesMarketScoringRule: {
    _enum: ['AmmCdaHybrid', 'Parimutuel']
  },
  /**
   * Lookup117: zeitgeist_primitives::market::Report<sp_core::crypto::AccountId32, BlockNumber>
   **/
  ZeitgeistPrimitivesMarketReport: {
    at: 'u64',
    by: 'AccountId32',
    outcome: 'ZeitgeistPrimitivesOutcomeReport'
  },
  /**
   * Lookup120: zeitgeist_primitives::market::MarketDisputeMechanism
   **/
  ZeitgeistPrimitivesMarketMarketDisputeMechanism: {
    _enum: ['Authorized', 'Court']
  },
  /**
   * Lookup121: zeitgeist_primitives::market::MarketBonds<sp_core::crypto::AccountId32, Balance>
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
   * Lookup123: zeitgeist_primitives::market::Bond<sp_core::crypto::AccountId32, Balance>
   **/
  ZeitgeistPrimitivesMarketBond: {
    who: 'AccountId32',
    value: 'u128',
    isSettled: 'bool'
  },
  /**
   * Lookup125: zeitgeist_primitives::market::EarlyClose<BlockNumber, Moment>
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
   * Lookup126: zeitgeist_primitives::market::EarlyCloseState
   **/
  ZeitgeistPrimitivesMarketEarlyCloseState: {
    _enum: ['ScheduledAsMarketCreator', 'ScheduledAsOther', 'Disputed', 'Rejected']
  },
  /**
   * Lookup129: zrml_styx::pallet::Event<T>
   **/
  ZrmlStyxEvent: {
    _enum: {
      AccountCrossed: '(AccountId32,u128)',
      CrossingFeeChanged: 'u128'
    }
  },
  /**
   * Lookup130: zrml_global_disputes::pallet::Event<T>
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
   * Lookup131: zrml_neo_swaps::pallet::Event<T>
   **/
  ZrmlNeoSwapsEvent: {
    _enum: {
      BuyExecuted: {
        who: 'AccountId32',
        poolId: 'u128',
        assetOut: 'ZeitgeistPrimitivesAsset',
        amountIn: 'u128',
        amountOut: 'u128',
        swapFeeAmount: 'u128',
        externalFeeAmount: 'u128',
      },
      SellExecuted: {
        who: 'AccountId32',
        poolId: 'u128',
        assetIn: 'ZeitgeistPrimitivesAsset',
        amountIn: 'u128',
        amountOut: 'u128',
        swapFeeAmount: 'u128',
        externalFeeAmount: 'u128',
      },
      FeesWithdrawn: {
        who: 'AccountId32',
        poolId: 'u128',
        amount: 'u128',
      },
      JoinExecuted: {
        who: 'AccountId32',
        poolId: 'u128',
        poolSharesAmount: 'u128',
        amountsIn: 'Vec<u128>',
        newLiquidityParameter: 'u128',
      },
      ExitExecuted: {
        who: 'AccountId32',
        poolId: 'u128',
        poolSharesAmount: 'u128',
        amountsOut: 'Vec<u128>',
        newLiquidityParameter: 'u128',
      },
      PoolDeployed: {
        who: 'AccountId32',
        marketId: 'u128',
        poolId: 'u128',
        accountId: 'AccountId32',
        reserves: 'BTreeMap<ZeitgeistPrimitivesAsset, u128>',
        collateral: 'ZeitgeistPrimitivesAsset',
        liquidityParameter: 'u128',
        poolSharesAmount: 'u128',
        swapFee: 'u128',
      },
      PoolDestroyed: {
        who: 'AccountId32',
        poolId: 'u128',
        amountsOut: 'Vec<u128>',
      },
      ComboBuyExecuted: {
        who: 'AccountId32',
        poolId: 'u128',
        buy: 'Vec<ZeitgeistPrimitivesAsset>',
        sell: 'Vec<ZeitgeistPrimitivesAsset>',
        amountIn: 'u128',
        amountOut: 'u128',
        swapFeeAmount: 'u128',
        externalFeeAmount: 'u128',
      },
      ComboSellExecuted: {
        who: 'AccountId32',
        poolId: 'u128',
        buy: 'Vec<ZeitgeistPrimitivesAsset>',
        keep: 'Vec<ZeitgeistPrimitivesAsset>',
        sell: 'Vec<ZeitgeistPrimitivesAsset>',
        amountBuy: 'u128',
        amountKeep: 'u128',
        amountOut: 'u128',
        swapFeeAmount: 'u128',
        externalFeeAmount: 'u128',
      },
      CombinatorialPoolDeployed: {
        who: 'AccountId32',
        marketIds: 'Vec<u128>',
        poolId: 'u128',
        accountId: 'AccountId32',
        reserves: 'BTreeMap<ZeitgeistPrimitivesAsset, u128>',
        collateral: 'ZeitgeistPrimitivesAsset',
        liquidityParameter: 'u128',
        poolSharesAmount: 'u128',
        swapFee: 'u128'
      }
    }
  },
  /**
   * Lookup132: zrml_orderbook::pallet::Event<T>
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
        externalFee: 'ZeitgeistPrimitivesHybridRouterApiTypesExternalFee',
      },
      OrderPlaced: {
        orderId: 'u128',
        order: 'ZeitgeistPrimitivesOrderbookOrder',
      },
      OrderRemoved: {
        orderId: 'u128',
        maker: 'AccountId32'
      }
    }
  },
  /**
   * Lookup133: zeitgeist_primitives::hybrid_router_api_types::ExternalFee<sp_core::crypto::AccountId32, Balance>
   **/
  ZeitgeistPrimitivesHybridRouterApiTypesExternalFee: {
    account: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup134: zeitgeist_primitives::orderbook::Order<sp_core::crypto::AccountId32, Balance, MarketId>
   **/
  ZeitgeistPrimitivesOrderbookOrder: {
    marketId: 'u128',
    maker: 'AccountId32',
    makerAsset: 'ZeitgeistPrimitivesAsset',
    makerAmount: 'u128',
    takerAsset: 'ZeitgeistPrimitivesAsset',
    takerAmount: 'u128'
  },
  /**
   * Lookup135: zrml_parimutuel::pallet::Event<T>
   **/
  ZrmlParimutuelEvent: {
    _enum: {
      OutcomeBought: {
        marketId: 'u128',
        buyer: 'AccountId32',
        asset: 'ZeitgeistPrimitivesAsset',
        amountMinusFees: 'u128',
        fees: 'u128',
      },
      RewardsClaimed: {
        marketId: 'u128',
        asset: 'ZeitgeistPrimitivesAsset',
        withdrawnAssetBalance: 'u128',
        baseAssetPayoff: 'u128',
        sender: 'AccountId32',
      },
      BalanceRefunded: {
        marketId: 'u128',
        asset: 'ZeitgeistPrimitivesAsset',
        refundedBalance: 'u128',
        sender: 'AccountId32'
      }
    }
  },
  /**
   * Lookup136: zrml_hybrid_router::pallet::Event<T>
   **/
  ZrmlHybridRouterEvent: {
    _enum: {
      HybridRouterExecuted: {
        txType: 'ZrmlHybridRouterTxType',
        who: 'AccountId32',
        marketId: 'u128',
        priceLimit: 'u128',
        assetIn: 'ZeitgeistPrimitivesAsset',
        amountIn: 'u128',
        assetOut: 'ZeitgeistPrimitivesAsset',
        amountOut: 'u128',
        externalFeeAmount: 'u128',
        swapFeeAmount: 'u128'
      }
    }
  },
  /**
   * Lookup137: zrml_hybrid_router::types::TxType
   **/
  ZrmlHybridRouterTxType: {
    _enum: ['Buy', 'Sell']
  },
  /**
   * Lookup138: zrml_combinatorial_tokens::pallet::Event<T>
   **/
  ZrmlCombinatorialTokensEvent: {
    _enum: {
      TokenSplit: {
        who: 'AccountId32',
        parentCollectionId: 'Option<[u8;32]>',
        marketId: 'u128',
        partition: 'Vec<Vec<bool>>',
        assetIn: 'ZeitgeistPrimitivesAsset',
        assetsOut: 'Vec<ZeitgeistPrimitivesAsset>',
        collectionIds: 'Vec<[u8;32]>',
        amount: 'u128',
      },
      TokenMerged: {
        who: 'AccountId32',
        parentCollectionId: 'Option<[u8;32]>',
        marketId: 'u128',
        partition: 'Vec<Vec<bool>>',
        assetOut: 'ZeitgeistPrimitivesAsset',
        assetsIn: 'Vec<ZeitgeistPrimitivesAsset>',
        amount: 'u128',
      },
      TokenRedeemed: {
        who: 'AccountId32',
        parentCollectionId: 'Option<[u8;32]>',
        marketId: 'u128',
        indexSet: 'Vec<bool>',
        assetIn: 'ZeitgeistPrimitivesAsset',
        amountIn: 'u128',
        assetOut: 'ZeitgeistPrimitivesAsset',
        amountOut: 'u128'
      }
    }
  },
  /**
   * Lookup142: zrml_futarchy::pallet::Event<T>
   **/
  ZrmlFutarchyEvent: {
    _enum: {
      Submitted: {
        duration: 'u64',
        proposal: 'ZrmlFutarchyProposal',
      },
      Rejected: {
        proposal: 'ZrmlFutarchyProposal',
      },
      Scheduled: {
        proposal: 'ZrmlFutarchyProposal',
      },
      UnexpectedSchedulerError: 'Null'
    }
  },
  /**
   * Lookup143: zrml_futarchy::types::proposal::Proposal<T>
   **/
  ZrmlFutarchyProposal: {
    when: 'u64',
    call: 'FrameSupportPreimagesBounded',
    oracle: 'ZrmlNeoSwapsDecisionMarketOracle'
  },
  /**
   * Lookup144: frame_support::traits::preimages::Bounded<zeitgeist_runtime::RuntimeCall>
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
   * Lookup146: frame_system::pallet::Call<T>
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
   * Lookup150: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup151: pallet_scheduler::pallet::Call<T>
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
   * Lookup153: pallet_preimage::pallet::Call<T>
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
   * Lookup154: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance_deprecated: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        oldReserved: 'Compact<u128>',
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
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup157: pallet_treasury::pallet::Call<T, I>
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
   * Lookup158: pallet_vesting::pallet::Call<T>
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
   * Lookup159: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u64'
  },
  /**
   * Lookup160: pallet_multisig::pallet::Call<T>
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
   * Lookup162: pallet_bounties::pallet::Call<T, I>
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
   * Lookup163: pallet_democracy::pallet::Call<T>
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
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup164: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup167: pallet_collective::pallet::Call<T, I>
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
      __Unused4: 'Null',
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
   * Lookup169: pallet_membership::pallet::Call<T, I>
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
   * Lookup174: pallet_identity::pallet::Call<T>
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
   * Lookup175: pallet_identity::types::IdentityInfo<FieldLimit>
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
   * Lookup212: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
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
   * Lookup213: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup214: pallet_identity::types::Judgement<Balance>
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
   * Lookup215: pallet_utility::pallet::Call<T>
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
        asOrigin: 'ZeitgeistRuntimeOriginCaller',
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
   * Lookup217: zeitgeist_runtime::OriginCaller
   **/
  ZeitgeistRuntimeOriginCaller: {
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
   * Lookup218: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup219: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup222: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup224: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV3MultiLocation',
      Response: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup225: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup226: pallet_proxy::pallet::Call<T>
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
   * Lookup228: orml_currencies::module::Call<T>
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
   * Lookup230: zrml_authorized::pallet::Call<T>
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
   * Lookup231: zrml_court::pallet::Call<T>
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
   * Lookup232: zrml_swaps::pallet::Call<T>
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
        assetOut: 'ZeitgeistPrimitivesAsset',
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
      __Unused6: 'Null',
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
   * Lookup233: zrml_prediction_markets::pallet::Call<T>
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
        baseAsset: 'ZeitgeistPrimitivesAsset',
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
        baseAsset: 'ZeitgeistPrimitivesAsset',
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
        baseAsset: 'ZeitgeistPrimitivesAsset',
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
   * Lookup234: zeitgeist_primitives::types::MultiHash
   **/
  ZeitgeistPrimitivesMultiHash: {
    _enum: {
      Sha3_384: '[u8;50]'
    }
  },
  /**
   * Lookup236: zrml_styx::pallet::Call<T>
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
   * Lookup237: zrml_global_disputes::pallet::Call<T>
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
   * Lookup238: zrml_neo_swaps::pallet::Call<T>
   **/
  ZrmlNeoSwapsCall: {
    _enum: {
      buy: {
        poolId: 'Compact<u128>',
        assetCount: 'u16',
        assetOut: 'ZeitgeistPrimitivesAsset',
        amountIn: 'Compact<u128>',
        minAmountOut: 'Compact<u128>',
      },
      sell: {
        poolId: 'Compact<u128>',
        assetCount: 'u16',
        assetIn: 'ZeitgeistPrimitivesAsset',
        amountIn: 'Compact<u128>',
        minAmountOut: 'Compact<u128>',
      },
      join: {
        poolId: 'Compact<u128>',
        poolSharesAmount: 'Compact<u128>',
        maxAmountsIn: 'Vec<u128>',
      },
      exit: {
        poolId: 'Compact<u128>',
        poolSharesAmountOut: 'Compact<u128>',
        minAmountsOut: 'Vec<u128>',
      },
      withdraw_fees: {
        poolId: 'Compact<u128>',
      },
      deploy_pool: {
        marketId: 'Compact<u128>',
        amount: 'Compact<u128>',
        spotPrices: 'Vec<u128>',
        swapFee: 'Compact<u128>',
      },
      combo_buy: {
        poolId: 'Compact<u128>',
        assetCount: 'u16',
        buy: 'Vec<ZeitgeistPrimitivesAsset>',
        sell: 'Vec<ZeitgeistPrimitivesAsset>',
        amountIn: 'Compact<u128>',
        minAmountOut: 'Compact<u128>',
      },
      combo_sell: {
        poolId: 'Compact<u128>',
        assetCount: 'u16',
        buy: 'Vec<ZeitgeistPrimitivesAsset>',
        keep: 'Vec<ZeitgeistPrimitivesAsset>',
        sell: 'Vec<ZeitgeistPrimitivesAsset>',
        amountBuy: 'Compact<u128>',
        amountKeep: 'Compact<u128>',
        minAmountOut: 'Compact<u128>',
      },
      deploy_combinatorial_pool: {
        assetCount: 'u16',
        marketIds: 'Vec<u128>',
        amount: 'u128',
        spotPrices: 'Vec<u128>',
        swapFee: 'u128',
        fuel: 'ZrmlCombinatorialTokensCryptographicIdManagerFuel'
      }
    }
  },
  /**
   * Lookup239: zrml_combinatorial_tokens::types::cryptographic_id_manager::Fuel
   **/
  ZrmlCombinatorialTokensCryptographicIdManagerFuel: {
    total: 'u32',
    consumeAll: 'bool'
  },
  /**
   * Lookup240: zrml_orderbook::pallet::Call<T>
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
        makerAsset: 'ZeitgeistPrimitivesAsset',
        makerAmount: 'Compact<u128>',
        takerAsset: 'ZeitgeistPrimitivesAsset',
        takerAmount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup241: zrml_parimutuel::pallet::Call<T>
   **/
  ZrmlParimutuelCall: {
    _enum: {
      buy: {
        asset: 'ZeitgeistPrimitivesAsset',
        amount: 'Compact<u128>',
      },
      claim_rewards: {
        marketId: 'u128',
      },
      claim_refunds: {
        refundAsset: 'ZeitgeistPrimitivesAsset'
      }
    }
  },
  /**
   * Lookup242: zrml_hybrid_router::pallet::Call<T>
   **/
  ZrmlHybridRouterCall: {
    _enum: {
      buy: {
        marketId: 'u128',
        assetCount: 'Compact<u16>',
        asset: 'ZeitgeistPrimitivesAsset',
        amountIn: 'Compact<u128>',
        maxPrice: 'Compact<u128>',
        orders: 'Vec<u128>',
        strategy: 'ZrmlHybridRouterStrategy',
      },
      sell: {
        marketId: 'u128',
        assetCount: 'Compact<u16>',
        asset: 'ZeitgeistPrimitivesAsset',
        amountIn: 'Compact<u128>',
        minPrice: 'Compact<u128>',
        orders: 'Vec<u128>',
        strategy: 'ZrmlHybridRouterStrategy'
      }
    }
  },
  /**
   * Lookup244: zrml_hybrid_router::types::Strategy
   **/
  ZrmlHybridRouterStrategy: {
    _enum: ['ImmediateOrCancel', 'LimitOrder']
  },
  /**
   * Lookup245: zrml_combinatorial_tokens::pallet::Call<T>
   **/
  ZrmlCombinatorialTokensCall: {
    _enum: {
      split_position: {
        parentCollectionId: 'Option<[u8;32]>',
        marketId: 'u128',
        partition: 'Vec<Vec<bool>>',
        amount: 'u128',
        fuel: 'ZrmlCombinatorialTokensCryptographicIdManagerFuel',
      },
      merge_position: {
        parentCollectionId: 'Option<[u8;32]>',
        marketId: 'u128',
        partition: 'Vec<Vec<bool>>',
        amount: 'u128',
        fuel: 'ZrmlCombinatorialTokensCryptographicIdManagerFuel',
      },
      redeem_position: {
        parentCollectionId: 'Option<[u8;32]>',
        marketId: 'u128',
        indexSet: 'Vec<bool>',
        fuel: 'ZrmlCombinatorialTokensCryptographicIdManagerFuel'
      }
    }
  },
  /**
   * Lookup246: zrml_futarchy::pallet::Call<T>
   **/
  ZrmlFutarchyCall: {
    _enum: {
      submit_proposal: {
        duration: 'u64',
        proposal: 'ZrmlFutarchyProposal'
      }
    }
  },
  /**
   * Lookup247: cumulus_pallet_parachain_system::pallet::Call<T>
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
        checkVersion: 'bool',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup248: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV5PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup249: polkadot_primitives::v5::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV5PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup251: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup254: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup257: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup260: pallet_parachain_staking::pallet::Call<T>
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
      removed_call_19: 'Null',
      removed_call_20: 'Null',
      removed_call_21: 'Null',
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
        candidates: 'Vec<AccountId32>',
      },
      notify_inactive_collator: {
        collator: 'AccountId32',
      },
      enable_marking_offline: {
        value: 'bool',
      },
      force_join_candidates: {
        account: 'AccountId32',
        bond: 'u128',
        candidateCount: 'u32'
      }
    }
  },
  /**
   * Lookup264: pallet_author_inherent::pallet::Call<T>
   **/
  PalletAuthorInherentCall: {
    _enum: ['kick_off_authorship_validation']
  },
  /**
   * Lookup265: pallet_author_slot_filter::pallet::Call<T>
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
   * Lookup267: pallet_author_mapping::pallet::Call<T>
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
   * Lookup268: nimbus_primitives::nimbus_crypto::Public
   **/
  NimbusPrimitivesNimbusCryptoPublic: 'SpCoreSr25519Public',
  /**
   * Lookup269: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup270: cumulus_pallet_dmp_queue::pallet::Call<T>
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
   * Lookup271: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'StagingXcmVersionedMultiLocation',
        message: 'StagingXcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'StagingXcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'StagingXcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'StagingXcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'StagingXcmVersionedMultiLocation',
        beneficiary: 'StagingXcmVersionedMultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup272: staging_xcm::VersionedMultiLocation
   **/
  StagingXcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup273: staging_xcm::v2::multilocation::MultiLocation
   **/
  StagingXcmV2MultiLocation: {
    parents: 'u8',
    interior: 'StagingXcmV2MultilocationJunctions'
  },
  /**
   * Lookup274: staging_xcm::v2::multilocation::Junctions
   **/
  StagingXcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'StagingXcmV2Junction',
      X2: '(StagingXcmV2Junction,StagingXcmV2Junction)',
      X3: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X4: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X5: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X6: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X7: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)',
      X8: '(StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction,StagingXcmV2Junction)'
    }
  },
  /**
   * Lookup275: staging_xcm::v2::junction::Junction
   **/
  StagingXcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'StagingXcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'StagingXcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'StagingXcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'StagingXcmV2BodyId',
        part: 'StagingXcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup276: staging_xcm::v2::NetworkId
   **/
  StagingXcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup278: staging_xcm::v2::BodyId
   **/
  StagingXcmV2BodyId: {
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
   * Lookup279: staging_xcm::v2::BodyPart
   **/
  StagingXcmV2BodyPart: {
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
   * Lookup280: staging_xcm::VersionedXcm<RuntimeCall>
   **/
  StagingXcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'StagingXcmV2Xcm',
      V3: 'StagingXcmV3Xcm'
    }
  },
  /**
   * Lookup281: staging_xcm::v2::Xcm<RuntimeCall>
   **/
  StagingXcmV2Xcm: 'Vec<StagingXcmV2Instruction>',
  /**
   * Lookup283: staging_xcm::v2::Instruction<RuntimeCall>
   **/
  StagingXcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'StagingXcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'StagingXcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        beneficiary: 'StagingXcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      Transact: {
        originType: 'StagingXcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'StagingXcmDoubleEncoded',
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
      DescendOrigin: 'StagingXcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'StagingXcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'StagingXcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV2MultiassetMultiAssetFilter',
        receive: 'StagingXcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        dest: 'StagingXcmV2MultiLocation',
        xcm: 'StagingXcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'StagingXcmV2MultiLocation',
        assets: 'StagingXcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'StagingXcmV2MultiAsset',
        weightLimit: 'StagingXcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV2Xcm',
      SetAppendix: 'StagingXcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV2MultiassetMultiAssets',
        ticket: 'StagingXcmV2MultiLocation',
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
   * Lookup284: staging_xcm::v2::multiasset::MultiAssets
   **/
  StagingXcmV2MultiassetMultiAssets: 'Vec<StagingXcmV2MultiAsset>',
  /**
   * Lookup286: staging_xcm::v2::multiasset::MultiAsset
   **/
  StagingXcmV2MultiAsset: {
    id: 'StagingXcmV2MultiassetAssetId',
    fun: 'StagingXcmV2MultiassetFungibility'
  },
  /**
   * Lookup287: staging_xcm::v2::multiasset::AssetId
   **/
  StagingXcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup288: staging_xcm::v2::multiasset::Fungibility
   **/
  StagingXcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup289: staging_xcm::v2::multiasset::AssetInstance
   **/
  StagingXcmV2MultiassetAssetInstance: {
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
   * Lookup290: staging_xcm::v2::Response
   **/
  StagingXcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,StagingXcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup293: staging_xcm::v2::traits::Error
   **/
  StagingXcmV2TraitsError: {
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
   * Lookup294: staging_xcm::v2::OriginKind
   **/
  StagingXcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup295: staging_xcm::double_encoded::DoubleEncoded<T>
   **/
  StagingXcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup296: staging_xcm::v2::multiasset::MultiAssetFilter
   **/
  StagingXcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV2MultiassetMultiAssets',
      Wild: 'StagingXcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup297: staging_xcm::v2::multiasset::WildMultiAsset
   **/
  StagingXcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV2MultiassetAssetId',
        fun: 'StagingXcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup298: staging_xcm::v2::multiasset::WildFungibility
   **/
  StagingXcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup299: staging_xcm::v2::WeightLimit
   **/
  StagingXcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup300: staging_xcm::v3::Xcm<Call>
   **/
  StagingXcmV3Xcm: 'Vec<StagingXcmV3Instruction>',
  /**
   * Lookup302: staging_xcm::v3::Instruction<Call>
   **/
  StagingXcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'StagingXcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'StagingXcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'StagingXcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'StagingXcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      Transact: {
        originKind: 'StagingXcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'StagingXcmDoubleEncoded',
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
      DescendOrigin: 'StagingXcmV3Junctions',
      ReportError: 'StagingXcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'StagingXcmV3MultiassetMultiAssetFilter',
        want: 'StagingXcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'StagingXcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'StagingXcmV3QueryResponseInfo',
        assets: 'StagingXcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'StagingXcmV3MultiAsset',
        weightLimit: 'StagingXcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'StagingXcmV3Xcm',
      SetAppendix: 'StagingXcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'StagingXcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'StagingXcmV3MultiassetMultiAssets',
      ExpectAsset: 'StagingXcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,StagingXcmV3TraitsError)>',
      ExpectTransactStatus: 'StagingXcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'StagingXcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'StagingXcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'StagingXcmV3Junction',
      ExportMessage: {
        network: 'StagingXcmV3JunctionNetworkId',
        destination: 'StagingXcmV3Junctions',
        xcm: 'StagingXcmV3Xcm',
      },
      LockAsset: {
        asset: 'StagingXcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'StagingXcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'StagingXcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'StagingXcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'StagingXcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup303: staging_xcm::v3::multiasset::MultiAssets
   **/
  StagingXcmV3MultiassetMultiAssets: 'Vec<StagingXcmV3MultiAsset>',
  /**
   * Lookup305: staging_xcm::v3::multiasset::MultiAsset
   **/
  StagingXcmV3MultiAsset: {
    id: 'StagingXcmV3MultiassetAssetId',
    fun: 'StagingXcmV3MultiassetFungibility'
  },
  /**
   * Lookup306: staging_xcm::v3::multiasset::AssetId
   **/
  StagingXcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup307: staging_xcm::v3::multiasset::Fungibility
   **/
  StagingXcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'StagingXcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup308: staging_xcm::v3::multiasset::AssetInstance
   **/
  StagingXcmV3MultiassetAssetInstance: {
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
   * Lookup309: staging_xcm::v3::Response
   **/
  StagingXcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'StagingXcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,StagingXcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<StagingXcmV3PalletInfo>',
      DispatchResult: 'StagingXcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup312: staging_xcm::v3::traits::Error
   **/
  StagingXcmV3TraitsError: {
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
   * Lookup314: staging_xcm::v3::PalletInfo
   **/
  StagingXcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup317: staging_xcm::v3::MaybeErrorCode
   **/
  StagingXcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup319: staging_xcm::v3::QueryResponseInfo
   **/
  StagingXcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup320: staging_xcm::v3::multiasset::MultiAssetFilter
   **/
  StagingXcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'StagingXcmV3MultiassetMultiAssets',
      Wild: 'StagingXcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup321: staging_xcm::v3::multiasset::WildMultiAsset
   **/
  StagingXcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'StagingXcmV3MultiassetAssetId',
        fun: 'StagingXcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'StagingXcmV3MultiassetAssetId',
        fun: 'StagingXcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup322: staging_xcm::v3::multiasset::WildFungibility
   **/
  StagingXcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup323: staging_xcm::v3::WeightLimit
   **/
  StagingXcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup324: staging_xcm::VersionedMultiAssets
   **/
  StagingXcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup333: cumulus_pallet_xcmp_queue::pallet::Call<T>
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
   * Lookup334: orml_asset_registry::module::Call<T>
   **/
  OrmlAssetRegistryModuleCall: {
    _enum: {
      register_asset: {
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
        assetId: 'Option<ZeitgeistPrimitivesAsset>',
      },
      update_asset: {
        assetId: 'ZeitgeistPrimitivesAsset',
        decimals: 'Option<u32>',
        name: 'Option<Bytes>',
        symbol: 'Option<Bytes>',
        existentialDeposit: 'Option<u128>',
        location: 'Option<Option<StagingXcmVersionedMultiLocation>>',
        additional: 'Option<ZeitgeistPrimitivesCustomMetadata>'
      }
    }
  },
  /**
   * Lookup335: orml_traits::asset_registry::AssetMetadata<Balance, zeitgeist_primitives::types::CustomMetadata, StringLimit>
   **/
  OrmlTraitsAssetRegistryAssetMetadata: {
    decimals: 'u32',
    name: 'Bytes',
    symbol: 'Bytes',
    existentialDeposit: 'u128',
    location: 'Option<StagingXcmVersionedMultiLocation>',
    additional: 'ZeitgeistPrimitivesCustomMetadata'
  },
  /**
   * Lookup336: zeitgeist_primitives::types::CustomMetadata
   **/
  ZeitgeistPrimitivesCustomMetadata: {
    xcm: 'ZeitgeistPrimitivesXcmMetadata',
    allowAsBaseAsset: 'bool'
  },
  /**
   * Lookup337: zeitgeist_primitives::types::XcmMetadata
   **/
  ZeitgeistPrimitivesXcmMetadata: {
    feeFactor: 'Option<u128>'
  },
  /**
   * Lookup344: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        amount: 'u128',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'StagingXcmVersionedMultiAsset',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'ZeitgeistPrimitivesAsset',
        amount: 'u128',
        fee: 'u128',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'StagingXcmVersionedMultiAsset',
        fee: 'StagingXcmVersionedMultiAsset',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(ZeitgeistPrimitivesAsset,u128)>',
        feeItem: 'u32',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'StagingXcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'StagingXcmVersionedMultiLocation',
        destWeightLimit: 'StagingXcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup345: staging_xcm::VersionedMultiAsset
   **/
  StagingXcmVersionedMultiAsset: {
    _enum: {
      __Unused0: 'Null',
      V2: 'StagingXcmV2MultiAsset',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiAsset'
    }
  },
  /**
   * Lookup347: zrml_neo_swaps::types::decision_market_oracle::DecisionMarketOracle<zeitgeist_runtime::Runtime>
   **/
  ZrmlNeoSwapsDecisionMarketOracle: {
    poolId: 'u128',
    positiveOutcome: 'ZeitgeistPrimitivesAsset',
    negativeOutcome: 'ZeitgeistPrimitivesAsset',
    scoreboard: 'ZrmlNeoSwapsDecisionMarketOracleScoreboard'
  },
  /**
   * Lookup348: zeitgeist_runtime::Runtime
   **/
  ZeitgeistRuntimeRuntime: 'Null',
  /**
   * Lookup349: zrml_neo_swaps::types::decision_market_oracle_scoreboard::DecisionMarketOracleScoreboard<zeitgeist_runtime::Runtime>
   **/
  ZrmlNeoSwapsDecisionMarketOracleScoreboard: {
    start: 'u64',
    victoryMargin: 'u128',
    priceMarginAbs: 'u128',
    priceMarginRel: 'u128',
    passScore: 'u128',
    rejectScore: 'u128'
  },
  /**
   * Lookup350: cumulus_pallet_parachain_system::pallet::Event<T>
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
   * Lookup351: pallet_parachain_staking::pallet::Event<T>
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
   * Lookup352: pallet_parachain_staking::delegation_requests::CancelledScheduledRequest<Balance>
   **/
  PalletParachainStakingDelegationRequestsCancelledScheduledRequest: {
    whenExecutable: 'u32',
    action: 'PalletParachainStakingDelegationRequestsDelegationAction'
  },
  /**
   * Lookup353: pallet_parachain_staking::delegation_requests::DelegationAction<Balance>
   **/
  PalletParachainStakingDelegationRequestsDelegationAction: {
    _enum: {
      Revoke: 'u128',
      Decrease: 'u128'
    }
  },
  /**
   * Lookup354: pallet_parachain_staking::types::DelegatorAdded<B>
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
   * Lookup355: pallet_author_slot_filter::pallet::Event
   **/
  PalletAuthorSlotFilterEvent: {
    _enum: {
      EligibleUpdated: 'u32'
    }
  },
  /**
   * Lookup356: pallet_author_mapping::pallet::Event<T>
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
   * Lookup357: session_keys_primitives::vrf::vrf_crypto::Public
   **/
  SessionKeysPrimitivesVrfVrfCryptoPublic: 'SpCoreSr25519Public',
  /**
   * Lookup358: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],StagingXcmV3TraitsOutcome)'
    }
  },
  /**
   * Lookup359: staging_xcm::v3::traits::Outcome
   **/
  StagingXcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,StagingXcmV3TraitsError)',
      Error: 'StagingXcmV3TraitsError'
    }
  },
  /**
   * Lookup360: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageHash: '[u8;32]',
      },
      UnsupportedVersion: {
        messageHash: '[u8;32]',
      },
      ExecutedDownward: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        outcome: 'StagingXcmV3TraitsOutcome',
      },
      WeightExhausted: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight',
      },
      MaxMessagesExhausted: {
        messageHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup361: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'StagingXcmV3TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV3MultiLocation',
        destination: 'StagingXcmV3MultiLocation',
        message: 'StagingXcmV3Xcm',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'StagingXcmV3Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV3MultiLocation>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'StagingXcmVersionedMultiAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV3MultiLocation',
        result: 'u32',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        error: 'StagingXcmV3TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'StagingXcmVersionedMultiLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV3MultiLocation',
        maybeActualQuerier: 'Option<StagingXcmV3MultiLocation>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'StagingXcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV3MultiLocation',
        fees: 'StagingXcmV3MultiassetMultiAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'StagingXcmVersionedMultiAssets'
      }
    }
  },
  /**
   * Lookup362: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: '[u8;32]',
        messageId: '[u8;32]',
        error: 'StagingXcmV3TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: '[u8;32]',
      },
      BadFormat: {
        messageHash: '[u8;32]',
      },
      XcmpMessageSent: {
        messageHash: '[u8;32]',
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
   * Lookup363: orml_asset_registry::module::Event<T>
   **/
  OrmlAssetRegistryModuleEvent: {
    _enum: {
      RegisteredAsset: {
        assetId: 'ZeitgeistPrimitivesAsset',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
      },
      UpdatedAsset: {
        assetId: 'ZeitgeistPrimitivesAsset',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata'
      }
    }
  },
  /**
   * Lookup364: orml_unknown_tokens::module::Event
   **/
  OrmlUnknownTokensModuleEvent: {
    _enum: {
      Deposited: {
        asset: 'StagingXcmV3MultiAsset',
        who: 'StagingXcmV3MultiLocation',
      },
      Withdrawn: {
        asset: 'StagingXcmV3MultiAsset',
        who: 'StagingXcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup365: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'StagingXcmV3MultiassetMultiAssets',
        fee: 'StagingXcmV3MultiAsset',
        dest: 'StagingXcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup366: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup369: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup371: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup372: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup373: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup375: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup376: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup377: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup378: sp_version::RuntimeVersion
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
   * Lookup382: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup386: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<zeitgeist_runtime::RuntimeCall>, BlockNumber, zeitgeist_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u64,u32)>',
    origin: 'ZeitgeistRuntimeOriginCaller'
  },
  /**
   * Lookup388: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup389: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
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
   * Lookup394: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup396: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup397: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup400: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup404: zeitgeist_runtime::RuntimeHoldReason
   **/
  ZeitgeistRuntimeRuntimeHoldReason: 'Null',
  /**
   * Lookup407: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup409: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup411: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup412: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup416: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup417: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup420: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup421: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup423: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup425: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup426: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup427: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
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
   * Lookup429: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup434: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<zeitgeist_runtime::RuntimeCall>, Balance>
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
   * Lookup435: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<zeitgeist_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u64',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u64',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup436: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup437: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
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
   * Lookup441: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup442: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u64,u128)',
  /**
   * Lookup445: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup447: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u64'
  },
  /**
   * Lookup448: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember']
  },
  /**
   * Lookup450: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup459: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup467: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup469: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup470: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup473: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, zeitgeist_primitives::proxy_type::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'ZeitgeistPrimitivesProxyType',
    delay: 'u64'
  },
  /**
   * Lookup477: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u64'
  },
  /**
   * Lookup479: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup480: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup483: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup485: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup487: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup489: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup490: zrml_market_commons::pallet::Error<T>
   **/
  ZrmlMarketCommonsError: {
    _enum: ['MarketDoesNotExist', 'MarketPoolDoesNotExist', 'NoMarketHasBeenCreated', 'NoReport', 'PoolAlreadyExists', 'IncompleteMarketBuilder']
  },
  /**
   * Lookup491: zeitgeist_primitives::market::AuthorityReport<BlockNumber>
   **/
  ZeitgeistPrimitivesMarketAuthorityReport: {
    resolveAt: 'u64',
    outcome: 'ZeitgeistPrimitivesOutcomeReport'
  },
  /**
   * Lookup492: zrml_authorized::pallet::Error<T>
   **/
  ZrmlAuthorizedError: {
    _enum: ['MarketDoesNotHaveDisputeMechanismAuthorized', 'MarketIsNotDisputed', 'OutcomeMismatch']
  },
  /**
   * Lookup494: zrml_court::types::CourtPoolItem<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup496: zrml_court::types::CourtParticipantInfo<Balance, BlockNumber, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  ZrmlCourtCourtParticipantInfo: {
    stake: 'u128',
    activeLock: 'u128',
    prepareExitAt: 'Option<u64>',
    delegations: 'Option<Vec<AccountId32>>'
  },
  /**
   * Lookup501: zrml_court::types::Draw<sp_core::crypto::AccountId32, Balance, primitive_types::H256, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  ZrmlCourtDraw: {
    courtParticipant: 'AccountId32',
    weight: 'u32',
    vote: 'ZrmlCourtVote',
    slashable: 'u128'
  },
  /**
   * Lookup504: zrml_court::types::Vote<primitive_types::H256, bounded_collections::bounded_vec::BoundedVec<T, S>>
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
   * Lookup506: zrml_court::pallet::Error<T>
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
   * Lookup507: zrml_court::pallet::UnexpectedError
   **/
  ZrmlCourtUnexpectedError: {
    _enum: ['BinarySearchByKeyFailed', 'InflationPeriodIsZero']
  },
  /**
   * Lookup508: zrml_swaps::pallet::Error<T>
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
   * Lookup509: zrml_swaps::pallet::UnexpectedError
   **/
  ZrmlSwapsUnexpectedError: {
    _enum: ['StorageOverflow']
  },
  /**
   * Lookup511: zrml_prediction_markets::pallet::Error<T>
   **/
  ZrmlPredictionMarketsError: {
    _enum: ['CannotDisputeSameOutcome', 'EditorNotCreator', 'EditReasonLengthExceedsMaxEditReasonLen', 'InsufficientFundsInMarketAccount', 'InsufficientShareBalance', 'InvalidMultihash', 'InvalidMarketType', 'InvalidScoringRule', 'NotEnoughBalance', 'MarketAlreadyReported', 'MarketDurationTooLong', 'MarketEditRequestAlreadyInProgress', 'MarketEditNotRequested', 'MarketIsNotActive', 'MarketIsNotClosed', 'MarketIsNotCollectingSubsidy', 'MarketIsNotProposed', 'MarketIsNotReported', 'MarketIsNotDisputed', 'MarketIsNotResolved', 'MarketStartTooSoon', 'MarketStartTooLate', 'MarketDisputeMechanismNotFailed', 'MissingBond', 'NotEnoughCategories', 'NoWinningBalance', 'OutcomeMismatch', 'RejectReasonLengthExceedsMaxRejectReasonLen', 'ReporterNotOracle', 'StorageOverflow', 'TooManyCategories', 'InvalidDisputeMechanism', 'InvalidMarketStatus', 'UnexpectedNoneInPostInfo', 'ZeroAmount', 'InvalidMarketPeriod', 'InvalidOutcomeRange', 'NotAllowedToReportYet', 'DisputeDurationSmallerThanMinDisputeDuration', 'OracleDurationSmallerThanMinOracleDuration', 'DisputeDurationGreaterThanMaxDisputeDuration', 'GracePeriodGreaterThanMaxGracePeriod', 'OracleDurationGreaterThanMaxOracleDuration', 'WeightsLenMustEqualAssetsLen', 'InvalidBaseAsset', 'UnregisteredForeignAsset', 'GlobalDisputeExistsAlready', 'NoDisputeMechanism', 'NonZeroDisputePeriodOnTrustedMarket', 'FeeTooHigh', 'InvalidResolutionMechanism', 'RequesterNotCreator', 'EarlyCloseRequestTooLate', 'InvalidEarlyCloseState', 'NoEarlyCloseScheduled', 'OnlyAuthorizedCanScheduleEarlyClose', 'CallerNotMarketCreator', 'MarketIsNotTrusted', 'NotAllowedForBlockBasedMarkets', 'MarketNotInCloseTimeFrameList', 'MarketPeriodEndNotAlreadyReachedYet']
  },
  /**
   * Lookup512: zrml_styx::pallet::Error<T>
   **/
  ZrmlStyxError: {
    _enum: ['FundDoesNotHaveEnoughFreeBalance', 'HasAlreadyCrossed']
  },
  /**
   * Lookup517: zrml_global_disputes::types::OutcomeInfo<sp_core::crypto::AccountId32, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  ZrmlGlobalDisputesOutcomeInfo: {
    outcomeSum: 'u128',
    possession: 'ZrmlGlobalDisputesPossession'
  },
  /**
   * Lookup519: zrml_global_disputes::types::Possession<sp_core::crypto::AccountId32, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
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
   * Lookup520: zrml_global_disputes::types::GlobalDisputeInfo<sp_core::crypto::AccountId32, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>, BlockNumber>
   **/
  ZrmlGlobalDisputesGlobalDisputeInfo: {
    winnerOutcome: 'ZeitgeistPrimitivesOutcomeReport',
    outcomeInfo: 'ZrmlGlobalDisputesOutcomeInfo',
    status: 'ZrmlGlobalDisputesGdStatus'
  },
  /**
   * Lookup521: zrml_global_disputes::types::GdStatus<BlockNumber>
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
   * Lookup522: zrml_global_disputes::pallet::Error<T>
   **/
  ZrmlGlobalDisputesError: {
    _enum: ['AmountTooLow', 'InvalidGlobalDisputeStatus', 'InsufficientAmount', 'MaxOwnersReached', 'MaxVotesReached', 'NoFundsToReward', 'GlobalDisputeNotFound', 'OutcomeAlreadyExists', 'OutcomeDoesNotExist', 'OutcomeMismatch', 'OutcomesNotFullyCleaned', 'SharedPossessionRequired', 'UnfinishedGlobalDispute', 'AddOutcomePeriodIsOver', 'NotInGdVotingPeriod', 'GlobalDisputeNotDestroyed', 'GlobalDisputeAlreadyExists']
  },
  /**
   * Lookup523: zrml_neo_swaps::types::pool::Pool<T, zrml_neo_swaps::liquidity_tree::types::liquidity_tree::LiquidityTree<T, U>, S>
   **/
  ZrmlNeoSwapsPool: {
    accountId: 'AccountId32',
    assets: 'Vec<ZeitgeistPrimitivesAsset>',
    reserves: 'BTreeMap<ZeitgeistPrimitivesAsset, u128>',
    collateral: 'ZeitgeistPrimitivesAsset',
    liquidityParameter: 'u128',
    liquiditySharesManager: 'ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree',
    swapFee: 'u128',
    poolType: 'ZrmlNeoSwapsPoolType'
  },
  /**
   * Lookup524: zrml_neo_swaps::liquidity_tree::types::liquidity_tree::LiquidityTree<T, U>
   **/
  ZrmlNeoSwapsLiquidityTreeTypesLiquidityTree: {
    nodes: 'Vec<ZrmlNeoSwapsLiquidityTreeTypesNode>',
    accountToIndex: 'BTreeMap<AccountId32, u32>',
    abandonedNodes: 'Vec<u32>'
  },
  /**
   * Lookup526: zrml_neo_swaps::liquidity_tree::types::node::Node<T>
   **/
  ZrmlNeoSwapsLiquidityTreeTypesNode: {
    account: 'Option<AccountId32>',
    stake: 'u128',
    fees: 'u128',
    descendantStake: 'u128',
    lazyFees: 'u128'
  },
  /**
   * Lookup535: zrml_neo_swaps::types::pool_type::PoolType<MarketId, MaxMarkets>
   **/
  ZrmlNeoSwapsPoolType: {
    _enum: {
      Standard: 'u128',
      Combinatorial: 'Vec<u128>'
    }
  },
  /**
   * Lookup537: zrml_neo_swaps::pallet::Error<T>
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
      MinRelativeLiquidityThresholdViolated: 'Null',
      NarrowingConversion: 'Null',
      InvalidPartition: 'Null',
      InvalidAmountKeep: 'Null',
      InvalidMarketCount: 'Null',
      MaxSplitsExceeded: 'Null',
      CollateralMismatch: 'Null',
      InvalidPoolType: 'Null'
    }
  },
  /**
   * Lookup538: zrml_neo_swaps::pallet::NumericalLimitsError
   **/
  ZrmlNeoSwapsNumericalLimitsError: {
    _enum: ['SpotPriceTooLow', 'SpotPriceSlippedTooLow', 'MaxAmountExceeded', 'MinAmountNotMet', 'SpotPriceSlippedTooHigh']
  },
  /**
   * Lookup539: zrml_neo_swaps::liquidity_tree::types::liquidity_tree_error::LiquidityTreeError
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
   * Lookup540: zrml_neo_swaps::liquidity_tree::types::liquidity_tree_error::StorageOverflowError
   **/
  ZrmlNeoSwapsLiquidityTreeTypesLiquidityTreeErrorStorageOverflowError: {
    _enum: ['Nodes', 'AccountToIndex', 'AbandonedNodes']
  },
  /**
   * Lookup541: zrml_orderbook::pallet::Error<T>
   **/
  ZrmlOrderbookError: {
    _enum: ['NotOrderCreator', 'OrderDoesNotExist', 'MarketIsNotActive', 'InvalidScoringRule', 'AmountTooHighForOrder', 'InvalidOutcomeAsset', 'PartialFillNearFullFillNotAllowed', 'MarketBaseAssetNotPresent', 'BelowMinimumBalance']
  },
  /**
   * Lookup542: zrml_parimutuel::pallet::Error<T>
   **/
  ZrmlParimutuelError: {
    _enum: {
      NoRewardShareOutstanding: 'Null',
      MarketIsNotActive: 'Null',
      AmountBelowMinimumBetSize: 'Null',
      NotParimutuelOutcome: 'Null',
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
   * Lookup543: zrml_parimutuel::pallet::InconsistentStateError
   **/
  ZrmlParimutuelInconsistentStateError: {
    _enum: ['InsufficientFundsInPotAccount', 'OutcomeIssuanceGreaterCollateral']
  },
  /**
   * Lookup544: zrml_hybrid_router::pallet::Error<T>
   **/
  ZrmlHybridRouterError: {
    _enum: ['AmountIsZero', 'PriceLimitTooHigh', 'OrderPriceAboveMaxPrice', 'OrderPriceBelowMinPrice', 'AssetNotEqualToOrderbookMakerAsset', 'AssetNotEqualToOrderbookTakerAsset', 'CancelStrategyApplied', 'AssetCountMismatch', 'MaxOrdersExceeded']
  },
  /**
   * Lookup545: zrml_combinatorial_tokens::pallet::Error<T>
   **/
  ZrmlCombinatorialTokensError: {
    _enum: {
      CollectionIdRetrievalFailed: 'ZrmlCombinatorialTokensCollectionIdError',
      InvalidIndexSet: 'Null',
      InvalidPartition: 'Null',
      PayoutVectorNotFound: 'Null',
      NoTokensFound: 'Null',
      TokenHasNoValue: 'Null',
      UnexpectedError: 'Null'
    }
  },
  /**
   * Lookup546: zrml_combinatorial_tokens::types::collection_id_error::CollectionIdError
   **/
  ZrmlCombinatorialTokensCollectionIdError: {
    _enum: ['InvalidParentCollectionId', 'EllipticCurvePointNotFoundWithFuel', 'EllipticCurvePointXToBytesConversionFailed']
  },
  /**
   * Lookup549: zrml_futarchy::pallet::Error<T>
   **/
  ZrmlFutarchyError: {
    _enum: ['CacheFull', 'DurationTooShort', 'UnexpectedStorageFailure']
  },
  /**
   * Lookup551: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentAncestor: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    paraHeadHash: 'Option<H256>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
  },
  /**
   * Lookup552: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
   **/
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
    umpMsgCount: 'u32',
    umpTotalBytes: 'u32',
    hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>'
  },
  /**
   * Lookup554: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
   **/
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
    msgCount: 'u32',
    totalBytes: 'u32'
  },
  /**
   * Lookup558: polkadot_primitives::v5::UpgradeGoAhead
   **/
  PolkadotPrimitivesV5UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup559: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
   **/
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
    usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
    hrmpWatermark: 'Option<u32>',
    consumedGoAheadSignal: 'Option<PolkadotPrimitivesV5UpgradeGoAhead>'
  },
  /**
   * Lookup561: polkadot_primitives::v5::UpgradeRestriction
   **/
  PolkadotPrimitivesV5UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup562: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueRemainingCapacity: 'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV5AbridgedHrmpChannel)>'
  },
  /**
   * Lookup563: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
   **/
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
    remainingCount: 'u32',
    remainingSize: 'u32'
  },
  /**
   * Lookup566: polkadot_primitives::v5::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV5AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup567: polkadot_primitives::v5::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV5AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesVstagingAsyncBackingParams'
  },
  /**
   * Lookup568: polkadot_primitives::vstaging::AsyncBackingParams
   **/
  PolkadotPrimitivesVstagingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup574: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup575: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
   **/
  CumulusPalletParachainSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup576: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup577: pallet_parachain_staking::types::ParachainBondConfig<sp_core::crypto::AccountId32>
   **/
  PalletParachainStakingParachainBondConfig: {
    account: 'AccountId32',
    percent: 'Percent'
  },
  /**
   * Lookup578: pallet_parachain_staking::types::RoundInfo<BlockNumber>
   **/
  PalletParachainStakingRoundInfo: {
    current: 'u32',
    first: 'u64',
    length: 'u32'
  },
  /**
   * Lookup579: pallet_parachain_staking::types::Delegator<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingDelegator: {
    id: 'AccountId32',
    delegations: 'PalletParachainStakingSetOrderedSet',
    total: 'u128',
    lessTotal: 'u128',
    status: 'PalletParachainStakingDelegatorStatus'
  },
  /**
   * Lookup580: pallet_parachain_staking::set::OrderedSet<pallet_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>>
   **/
  PalletParachainStakingSetOrderedSet: 'Vec<PalletParachainStakingBond>',
  /**
   * Lookup581: pallet_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingBond: {
    owner: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup583: pallet_parachain_staking::types::DelegatorStatus
   **/
  PalletParachainStakingDelegatorStatus: {
    _enum: {
      Active: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup584: pallet_parachain_staking::types::CandidateMetadata<Balance>
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
   * Lookup585: pallet_parachain_staking::types::CapacityStatus
   **/
  PalletParachainStakingCapacityStatus: {
    _enum: ['Full', 'Empty', 'Partial']
  },
  /**
   * Lookup587: pallet_parachain_staking::types::CandidateBondLessRequest<Balance>
   **/
  PalletParachainStakingCandidateBondLessRequest: {
    amount: 'u128',
    whenExecutable: 'u32'
  },
  /**
   * Lookup588: pallet_parachain_staking::types::CollatorStatus
   **/
  PalletParachainStakingCollatorStatus: {
    _enum: {
      Active: 'Null',
      Idle: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup590: pallet_parachain_staking::delegation_requests::ScheduledRequest<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingDelegationRequestsScheduledRequest: {
    delegator: 'AccountId32',
    whenExecutable: 'u32',
    action: 'PalletParachainStakingDelegationRequestsDelegationAction'
  },
  /**
   * Lookup593: pallet_parachain_staking::auto_compound::AutoCompoundConfig<sp_core::crypto::AccountId32>
   **/
  PalletParachainStakingAutoCompoundAutoCompoundConfig: {
    delegator: 'AccountId32',
    value: 'Percent'
  },
  /**
   * Lookup595: pallet_parachain_staking::types::Delegations<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingDelegations: {
    delegations: 'Vec<PalletParachainStakingBond>',
    total: 'u128'
  },
  /**
   * Lookup597: pallet_parachain_staking::set::BoundedOrderedSet<pallet_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>, S>
   **/
  PalletParachainStakingSetBoundedOrderedSet: 'Vec<PalletParachainStakingBond>',
  /**
   * Lookup600: pallet_parachain_staking::types::CollatorSnapshot<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingCollatorSnapshot: {
    bond: 'u128',
    delegations: 'Vec<PalletParachainStakingBondWithAutoCompound>',
    total: 'u128'
  },
  /**
   * Lookup602: pallet_parachain_staking::types::BondWithAutoCompound<sp_core::crypto::AccountId32, Balance>
   **/
  PalletParachainStakingBondWithAutoCompound: {
    owner: 'AccountId32',
    amount: 'u128',
    autoCompound: 'Percent'
  },
  /**
   * Lookup603: pallet_parachain_staking::types::DelayedPayout<Balance>
   **/
  PalletParachainStakingDelayedPayout: {
    roundIssuance: 'u128',
    totalStakingReward: 'u128',
    collatorCommission: 'Perbill'
  },
  /**
   * Lookup604: pallet_parachain_staking::inflation::InflationInfo<Balance>
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
   * Lookup605: pallet_parachain_staking::pallet::Error<T>
   **/
  PalletParachainStakingError: {
    _enum: ['DelegatorDNE', 'DelegatorDNEinTopNorBottom', 'DelegatorDNEInDelegatorSet', 'CandidateDNE', 'DelegationDNE', 'DelegatorExists', 'CandidateExists', 'CandidateBondBelowMin', 'InsufficientBalance', 'DelegatorBondBelowMin', 'DelegationBelowMin', 'AlreadyOffline', 'AlreadyActive', 'DelegatorAlreadyLeaving', 'DelegatorNotLeaving', 'DelegatorCannotLeaveYet', 'CannotDelegateIfLeaving', 'CandidateAlreadyLeaving', 'CandidateNotLeaving', 'CandidateCannotLeaveYet', 'CannotGoOnlineIfLeaving', 'ExceedMaxDelegationsPerDelegator', 'AlreadyDelegatedCandidate', 'InvalidSchedule', 'CannotSetBelowMin', 'RoundLengthMustBeGreaterThanTotalSelectedCollators', 'NoWritingSameValue', 'TooLowCandidateCountWeightHintJoinCandidates', 'TooLowCandidateCountWeightHintCancelLeaveCandidates', 'TooLowCandidateCountToLeaveCandidates', 'TooLowDelegationCountToDelegate', 'TooLowCandidateDelegationCountToDelegate', 'TooLowCandidateDelegationCountToLeaveCandidates', 'TooLowDelegationCountToLeaveDelegators', 'PendingCandidateRequestsDNE', 'PendingCandidateRequestAlreadyExists', 'PendingCandidateRequestNotDueYet', 'PendingDelegationRequestDNE', 'PendingDelegationRequestAlreadyExists', 'PendingDelegationRequestNotDueYet', 'CannotDelegateLessThanOrEqualToLowestBottomWhenFull', 'PendingDelegationRevoke', 'TooLowDelegationCountToAutoCompound', 'TooLowCandidateAutoCompoundingDelegationCountToAutoCompound', 'TooLowCandidateAutoCompoundingDelegationCountToDelegate', 'TooLowCollatorCountToNotifyAsInactive', 'CannotBeNotifiedAsInactive', 'TooLowCandidateAutoCompoundingDelegationCountToLeaveCandidates', 'TooLowCandidateCountWeightHint', 'TooLowCandidateCountWeightHintGoOffline', 'CandidateLimitReached', 'CannotSetAboveMaxCandidates', 'RemovedCall', 'MarkingOfflineNotEnabled', 'CurrentRoundTooLow']
  },
  /**
   * Lookup606: pallet_author_inherent::pallet::Error<T>
   **/
  PalletAuthorInherentError: {
    _enum: ['AuthorAlreadySet', 'NoAccountId', 'CannotBeAuthor']
  },
  /**
   * Lookup607: pallet_author_mapping::pallet::RegistrationInfo<T>
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
   * Lookup608: pallet_author_mapping::pallet::Error<T>
   **/
  PalletAuthorMappingError: {
    _enum: ['AssociationNotFound', 'NotYourAssociation', 'CannotAffordSecurityDeposit', 'AlreadyAssociated', 'OldAuthorIdNotFound', 'WrongKeySize', 'DecodeNimbusFailed', 'DecodeKeysFailed']
  },
  /**
   * Lookup609: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup610: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup611: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup614: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup615: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'StagingXcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<StagingXcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u64',
      },
      VersionNotifier: {
        origin: 'StagingXcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'StagingXcmVersionedResponse',
        at: 'u64'
      }
    }
  },
  /**
   * Lookup618: staging_xcm::VersionedResponse
   **/
  StagingXcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'StagingXcmV2Response',
      V3: 'StagingXcmV3Response'
    }
  },
  /**
   * Lookup624: pallet_xcm::pallet::VersionMigrationStage
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
   * Lookup627: staging_xcm::VersionedAssetId
   **/
  StagingXcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup628: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'StagingXcmVersionedMultiLocation',
    locker: 'StagingXcmVersionedMultiLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup635: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup637: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup638: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup641: polkadot_parachain_primitives::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup644: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup645: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup647: cumulus_pallet_xcmp_queue::QueueConfigData
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
   * Lookup649: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
   * Lookup650: orml_asset_registry::module::Error<T>
   **/
  OrmlAssetRegistryModuleError: {
    _enum: ['AssetNotFound', 'BadVersion', 'InvalidAssetId', 'ConflictingLocation', 'ConflictingAssetId', 'InvalidAssetString']
  },
  /**
   * Lookup653: orml_unknown_tokens::module::Error<T>
   **/
  OrmlUnknownTokensModuleError: {
    _enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset']
  },
  /**
   * Lookup654: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup656: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup657: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup659: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup660: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup663: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup664: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup665: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup666: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup669: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u64>',
  /**
   * Lookup670: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup671: pallet_asset_tx_payment::ChargeAssetTxPayment<T>
   **/
  PalletAssetTxPaymentChargeAssetTxPayment: {
    tip: 'Compact<u128>',
    assetId: 'Option<StagingXcmV3MultiLocation>'
  }
};
