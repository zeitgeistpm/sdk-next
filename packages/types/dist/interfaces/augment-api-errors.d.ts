import type { ApiTypes } from '@polkadot/api-base/types';
declare module '@polkadot/api-base/types/errors' {
    interface AugmentedErrors<ApiType extends ApiTypes> {
        advisoryCommittee: {
            AlreadyInitialized: AugmentedError<ApiType>;
            DuplicateProposal: AugmentedError<ApiType>;
            DuplicateVote: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            ProposalMissing: AugmentedError<ApiType>;
            TooEarly: AugmentedError<ApiType>;
            TooManyProposals: AugmentedError<ApiType>;
            WrongIndex: AugmentedError<ApiType>;
            WrongProposalLength: AugmentedError<ApiType>;
            WrongProposalWeight: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        advisoryCommitteeMembership: {
            AlreadyMember: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        assetManager: {
            AmountIntoBalanceFailed: AugmentedError<ApiType>;
            BalanceTooLow: AugmentedError<ApiType>;
            DepositFailed: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        authorized: {
            MarketDoesNotHaveDisputeMechanismAuthorized: AugmentedError<ApiType>;
            MarketIsNotDisputed: AugmentedError<ApiType>;
            NotAuthorizedForThisMarket: AugmentedError<ApiType>;
            OutcomeMismatch: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        balances: {
            DeadAccount: AugmentedError<ApiType>;
            ExistentialDeposit: AugmentedError<ApiType>;
            ExistingVestingSchedule: AugmentedError<ApiType>;
            InsufficientBalance: AugmentedError<ApiType>;
            KeepAlive: AugmentedError<ApiType>;
            LiquidityRestrictions: AugmentedError<ApiType>;
            TooManyReserves: AugmentedError<ApiType>;
            VestingBalance: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        council: {
            AlreadyInitialized: AugmentedError<ApiType>;
            DuplicateProposal: AugmentedError<ApiType>;
            DuplicateVote: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            ProposalMissing: AugmentedError<ApiType>;
            TooEarly: AugmentedError<ApiType>;
            TooManyProposals: AugmentedError<ApiType>;
            WrongIndex: AugmentedError<ApiType>;
            WrongProposalLength: AugmentedError<ApiType>;
            WrongProposalWeight: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        councilMembership: {
            AlreadyMember: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        court: {
            JurorAlreadyExists: AugmentedError<ApiType>;
            JurorDoesNotExists: AugmentedError<ApiType>;
            MarketDoesNotHaveCourtMechanism: AugmentedError<ApiType>;
            NoVotes: AugmentedError<ApiType>;
            OnlyJurorsCanVote: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        democracy: {
            AlreadyCanceled: AugmentedError<ApiType>;
            AlreadyDelegating: AugmentedError<ApiType>;
            AlreadyVetoed: AugmentedError<ApiType>;
            DuplicatePreimage: AugmentedError<ApiType>;
            DuplicateProposal: AugmentedError<ApiType>;
            Imminent: AugmentedError<ApiType>;
            InstantNotAllowed: AugmentedError<ApiType>;
            InsufficientFunds: AugmentedError<ApiType>;
            InvalidHash: AugmentedError<ApiType>;
            MaxVotesReached: AugmentedError<ApiType>;
            NoneWaiting: AugmentedError<ApiType>;
            Nonsense: AugmentedError<ApiType>;
            NoPermission: AugmentedError<ApiType>;
            NoProposal: AugmentedError<ApiType>;
            NotDelegating: AugmentedError<ApiType>;
            NotImminent: AugmentedError<ApiType>;
            NotSimpleMajority: AugmentedError<ApiType>;
            NotVoter: AugmentedError<ApiType>;
            PreimageInvalid: AugmentedError<ApiType>;
            PreimageMissing: AugmentedError<ApiType>;
            ProposalBlacklisted: AugmentedError<ApiType>;
            ProposalMissing: AugmentedError<ApiType>;
            ReferendumInvalid: AugmentedError<ApiType>;
            TooEarly: AugmentedError<ApiType>;
            TooManyProposals: AugmentedError<ApiType>;
            ValueLow: AugmentedError<ApiType>;
            VotesExist: AugmentedError<ApiType>;
            WrongUpperBound: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        grandpa: {
            ChangePending: AugmentedError<ApiType>;
            DuplicateOffenceReport: AugmentedError<ApiType>;
            InvalidEquivocationProof: AugmentedError<ApiType>;
            InvalidKeyOwnershipProof: AugmentedError<ApiType>;
            PauseFailed: AugmentedError<ApiType>;
            ResumeFailed: AugmentedError<ApiType>;
            TooSoon: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        identity: {
            AlreadyClaimed: AugmentedError<ApiType>;
            EmptyIndex: AugmentedError<ApiType>;
            FeeChanged: AugmentedError<ApiType>;
            InvalidIndex: AugmentedError<ApiType>;
            InvalidJudgement: AugmentedError<ApiType>;
            InvalidTarget: AugmentedError<ApiType>;
            JudgementGiven: AugmentedError<ApiType>;
            NoIdentity: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            NotNamed: AugmentedError<ApiType>;
            NotOwned: AugmentedError<ApiType>;
            NotSub: AugmentedError<ApiType>;
            StickyJudgement: AugmentedError<ApiType>;
            TooManyFields: AugmentedError<ApiType>;
            TooManyRegistrars: AugmentedError<ApiType>;
            TooManySubAccounts: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        liquidityMining: {
            FundDoesNotHaveEnoughBalance: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        marketCommons: {
            MarketDoesNotExist: AugmentedError<ApiType>;
            MarketPoolDoesNotExist: AugmentedError<ApiType>;
            NoMarketHasBeenCreated: AugmentedError<ApiType>;
            NoReport: AugmentedError<ApiType>;
            PoolAlreadyExists: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        multiSig: {
            AlreadyApproved: AugmentedError<ApiType>;
            AlreadyStored: AugmentedError<ApiType>;
            MaxWeightTooLow: AugmentedError<ApiType>;
            MinimumThreshold: AugmentedError<ApiType>;
            NoApprovalsNeeded: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            NoTimepoint: AugmentedError<ApiType>;
            NotOwner: AugmentedError<ApiType>;
            SenderInSignatories: AugmentedError<ApiType>;
            SignatoriesOutOfOrder: AugmentedError<ApiType>;
            TooFewSignatories: AugmentedError<ApiType>;
            TooManySignatories: AugmentedError<ApiType>;
            UnexpectedTimepoint: AugmentedError<ApiType>;
            WrongTimepoint: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        predictionMarkets: {
            CannotDisputeSameOutcome: AugmentedError<ApiType>;
            InsufficientFundsInMarketAccount: AugmentedError<ApiType>;
            InsufficientShareBalance: AugmentedError<ApiType>;
            InvalidMarketPeriod: AugmentedError<ApiType>;
            InvalidMarketStatus: AugmentedError<ApiType>;
            InvalidMarketType: AugmentedError<ApiType>;
            InvalidMultihash: AugmentedError<ApiType>;
            InvalidOutcomeRange: AugmentedError<ApiType>;
            InvalidScoringRule: AugmentedError<ApiType>;
            MarketAlreadyReported: AugmentedError<ApiType>;
            MarketIsNotActive: AugmentedError<ApiType>;
            MarketIsNotClosed: AugmentedError<ApiType>;
            MarketIsNotCollectingSubsidy: AugmentedError<ApiType>;
            MarketIsNotProposed: AugmentedError<ApiType>;
            MarketIsNotReported: AugmentedError<ApiType>;
            MarketIsNotResolved: AugmentedError<ApiType>;
            MarketStartTooLate: AugmentedError<ApiType>;
            MarketStartTooSoon: AugmentedError<ApiType>;
            MaxDisputesReached: AugmentedError<ApiType>;
            NotEnoughBalance: AugmentedError<ApiType>;
            NotEnoughCategories: AugmentedError<ApiType>;
            NoWinningBalance: AugmentedError<ApiType>;
            OutcomeMismatch: AugmentedError<ApiType>;
            ReporterNotOracle: AugmentedError<ApiType>;
            StorageOverflow: AugmentedError<ApiType>;
            TooManyCategories: AugmentedError<ApiType>;
            ZeroAmount: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        preimage: {
            AlreadyNoted: AugmentedError<ApiType>;
            NotAuthorized: AugmentedError<ApiType>;
            NotNoted: AugmentedError<ApiType>;
            NotRequested: AugmentedError<ApiType>;
            Requested: AugmentedError<ApiType>;
            TooLarge: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        proxy: {
            Duplicate: AugmentedError<ApiType>;
            NoPermission: AugmentedError<ApiType>;
            NoSelfProxy: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            NotProxy: AugmentedError<ApiType>;
            TooMany: AugmentedError<ApiType>;
            Unannounced: AugmentedError<ApiType>;
            Unproxyable: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        rikiddoSigmoidFeeMarketEma: {
            FixedConversionImpossible: AugmentedError<ApiType>;
            RikiddoAlreadyExistsForPool: AugmentedError<ApiType>;
            RikiddoNotFoundForPool: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        scheduler: {
            FailedToSchedule: AugmentedError<ApiType>;
            NotFound: AugmentedError<ApiType>;
            RescheduleNoChange: AugmentedError<ApiType>;
            TargetBlockNumberInPast: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        simpleDisputes: {
            InvalidMarketStatus: AugmentedError<ApiType>;
            MarketDoesNotHaveSimpleDisputesMechanism: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        sudo: {
            RequireSudo: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        swaps: {
            AboveMaximumWeight: AugmentedError<ApiType>;
            AssetNotBound: AugmentedError<ApiType>;
            AssetNotInPool: AugmentedError<ApiType>;
            BadLimitPrice: AugmentedError<ApiType>;
            BaseAssetNotFound: AugmentedError<ApiType>;
            BelowMinimumWeight: AugmentedError<ApiType>;
            InsufficientBalance: AugmentedError<ApiType>;
            InsufficientLiquidity: AugmentedError<ApiType>;
            InsufficientSubsidy: AugmentedError<ApiType>;
            InvalidAmountArgument: AugmentedError<ApiType>;
            InvalidFeeArgument: AugmentedError<ApiType>;
            InvalidPoolStatus: AugmentedError<ApiType>;
            InvalidScoringRule: AugmentedError<ApiType>;
            InvalidStateTransition: AugmentedError<ApiType>;
            InvalidSubsidyAmount: AugmentedError<ApiType>;
            InvalidWeightArgument: AugmentedError<ApiType>;
            LimitIn: AugmentedError<ApiType>;
            LimitMissing: AugmentedError<ApiType>;
            LimitOut: AugmentedError<ApiType>;
            MathApproximation: AugmentedError<ApiType>;
            MaxInRatio: AugmentedError<ApiType>;
            MaxOutRatio: AugmentedError<ApiType>;
            MaxTotalWeight: AugmentedError<ApiType>;
            NoSubsidyProvided: AugmentedError<ApiType>;
            PoolDoesNotExist: AugmentedError<ApiType>;
            PoolIsNotActive: AugmentedError<ApiType>;
            PoolMissingFee: AugmentedError<ApiType>;
            PoolMissingSubsidy: AugmentedError<ApiType>;
            PoolMissingWeight: AugmentedError<ApiType>;
            ProvidedValuesLenMustEqualAssetsLen: AugmentedError<ApiType>;
            SomeIdenticalAssets: AugmentedError<ApiType>;
            SwapFeeMissing: AugmentedError<ApiType>;
            SwapFeeTooHigh: AugmentedError<ApiType>;
            TooFewAssets: AugmentedError<ApiType>;
            TooManyAssets: AugmentedError<ApiType>;
            UnsupportedTrade: AugmentedError<ApiType>;
            WinningAssetNotFound: AugmentedError<ApiType>;
            ZeroAmount: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        system: {
            CallFiltered: AugmentedError<ApiType>;
            FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
            InvalidSpecName: AugmentedError<ApiType>;
            NonDefaultComposite: AugmentedError<ApiType>;
            NonZeroRefCount: AugmentedError<ApiType>;
            SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        technicalCommittee: {
            AlreadyInitialized: AugmentedError<ApiType>;
            DuplicateProposal: AugmentedError<ApiType>;
            DuplicateVote: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            ProposalMissing: AugmentedError<ApiType>;
            TooEarly: AugmentedError<ApiType>;
            TooManyProposals: AugmentedError<ApiType>;
            WrongIndex: AugmentedError<ApiType>;
            WrongProposalLength: AugmentedError<ApiType>;
            WrongProposalWeight: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        technicalCommitteeMembership: {
            AlreadyMember: AugmentedError<ApiType>;
            NotMember: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        tokens: {
            AmountIntoBalanceFailed: AugmentedError<ApiType>;
            BalanceTooLow: AugmentedError<ApiType>;
            DeadAccount: AugmentedError<ApiType>;
            ExistentialDeposit: AugmentedError<ApiType>;
            KeepAlive: AugmentedError<ApiType>;
            LiquidityRestrictions: AugmentedError<ApiType>;
            MaxLocksExceeded: AugmentedError<ApiType>;
            TooManyReserves: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        treasury: {
            InsufficientProposersBalance: AugmentedError<ApiType>;
            InvalidIndex: AugmentedError<ApiType>;
            TooManyApprovals: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        utility: {
            TooManyCalls: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
        vesting: {
            AmountLow: AugmentedError<ApiType>;
            AtMaxVestingSchedules: AugmentedError<ApiType>;
            InvalidScheduleParams: AugmentedError<ApiType>;
            NotVesting: AugmentedError<ApiType>;
            ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
            [key: string]: AugmentedError<ApiType>;
        };
    }
}
