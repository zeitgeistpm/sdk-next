export { default as court } from './court';
export { default as orderbook } from './orderbook';
export { default as predictionMarkets } from './predictionMarkets';
export { default as rikkido } from './rikkido';
export { default as swaps } from './swaps';
export declare const index: {
    rpc: {};
    typesAlias: {
        tokens: {
            AccountData: {
                free: string;
                reserved: string;
                miscFrozen: string;
                feeFrozen: string;
            };
        };
    };
    types: {
        Address: string;
        Amount: string;
        AmountOf: string;
        Asset: {
            _enum: {
                CategoricalOutcome: string;
                ScalarOutcome: string;
                CombinatorialOutcome: null;
                PoolShare: string;
                Ztg: null;
            };
        };
        AuthorId: string;
        SerdeWrapper: string;
        BlockNumber: string;
        Bond: {
            owner: string;
            amount: string;
        };
        CategoryIndex: string;
        Collator2: {
            id: string;
            bond: string;
            nominators: string;
            topNominators: string;
            bottomNominators: string;
            totalCounted: string;
            totalBacking: string;
            state: string;
        };
        CollatorSnapshot: {
            bond: string;
            delegations: string;
            total: string;
        };
        CollatorStatus: {
            _enum: {
                Active: null;
                Idle: null;
                Leaving: string;
            };
        };
        Currency: string;
        CurrencyIdOf: string;
        CurrencyId: string;
        DelegatorStatus: {
            _enum: {
                Active: null;
                Leaving: string;
            };
        };
        ExitQ: {
            candidates: string;
            nominatorsLeaving: string;
            candidateSchedule: string;
            nominatorSchedule: string;
        };
        Index: string;
        InflationInfo: {
            expect: string;
            annual: string;
            round: string;
        };
        Lookup: string;
        MarketIdOf: string;
        MaxRuntimeUsize: string;
        Moment: string;
        MultiHash: {
            _enum: {
                Sha3_384: string;
            };
        };
        Nominator2: {
            delegations: string;
            revocations: string;
            total: string;
            scheduledRevocationsCount: string;
            scheduledRevocationsTotal: string;
            status: string;
        };
        NominatorAdded: {
            _enum: {
                AddedToTop: string;
                AddedToBottom: null;
            };
        };
        OrderedSet: string;
        OwnedValuesParams: {
            participatedBlocks: string;
            perpetualIncentives: string;
            totalIncentives: string;
            totalShares: string;
        };
        ParachainBondConfig: {
            account: string;
            percent: string;
        };
        RangeBalance: {
            min: string;
            ideal: string;
            max: string;
        };
        RangePerbill: {
            min: string;
            ideal: string;
            max: string;
        };
        RelayChainAccountId: string;
        RewardInfo: {
            totalReward: string;
            claimedReward: string;
        };
        RoundIndex: string;
        RoundInfo: {
            current: string;
            first: string;
            length: string;
        };
        ScalarPosition: {
            _enum: string[];
        };
        VestingBlockNumber: string;
    };
};
