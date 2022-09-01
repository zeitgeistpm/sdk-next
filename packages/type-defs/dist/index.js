"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = exports.swaps = exports.rikkido = exports.predictionMarkets = exports.orderbook = exports.court = void 0;
var court_1 = require("./court");
Object.defineProperty(exports, "court", { enumerable: true, get: function () { return __importDefault(court_1).default; } });
var orderbook_1 = require("./orderbook");
Object.defineProperty(exports, "orderbook", { enumerable: true, get: function () { return __importDefault(orderbook_1).default; } });
var predictionMarkets_1 = require("./predictionMarkets");
Object.defineProperty(exports, "predictionMarkets", { enumerable: true, get: function () { return __importDefault(predictionMarkets_1).default; } });
var rikkido_1 = require("./rikkido");
Object.defineProperty(exports, "rikkido", { enumerable: true, get: function () { return __importDefault(rikkido_1).default; } });
var swaps_1 = require("./swaps");
Object.defineProperty(exports, "swaps", { enumerable: true, get: function () { return __importDefault(swaps_1).default; } });
exports.index = {
    rpc: {},
    typesAlias: {
        tokens: {
            AccountData: {
                free: "Balance",
                reserved: "Balance",
                miscFrozen: "Balance",
                feeFrozen: "Balance",
            },
        },
    },
    types: {
        Address: "MultiAddress",
        Amount: "i128",
        AmountOf: "i128",
        Asset: {
            _enum: {
                CategoricalOutcome: "(MarketId, CategoryIndex)",
                ScalarOutcome: "(MarketId, ScalarPosition)",
                CombinatorialOutcome: null,
                PoolShare: "u128",
                Ztg: null,
            },
        },
        AuthorId: "AccountId",
        SerdeWrapper: "Balance",
        BlockNumber: "u64",
        Bond: {
            owner: "AccountId",
            amount: "Balance",
        },
        CategoryIndex: "u16",
        Collator2: {
            id: "AccountId",
            bond: "Balance",
            nominators: "Vec<AccountId>",
            topNominators: "Vec<Bond>",
            bottomNominators: "Vec<Bond>",
            totalCounted: "Balance",
            totalBacking: "Balance",
            state: "CollatorStatus",
        },
        CollatorSnapshot: {
            bond: "Balance",
            delegations: "Vec<Bond>",
            total: "Balance",
        },
        CollatorStatus: {
            _enum: {
                Active: null,
                Idle: null,
                Leaving: "RoundIndex",
            },
        },
        Currency: "Asset",
        CurrencyIdOf: "Asset",
        CurrencyId: "Asset",
        DelegatorStatus: {
            _enum: {
                Active: null,
                Leaving: "RoundIndex",
            },
        },
        ExitQ: {
            candidates: "Vec<AccountId>",
            nominatorsLeaving: "Vec<AccountId>",
            candidateSchedule: "Vec<(AccountId, RoundIndex)>",
            nominatorSchedule: "Vec<(AccountId, Option<AccountId>, RoundIndex)>",
        },
        Index: "u64",
        InflationInfo: {
            expect: "RangeBalance",
            annual: "RangePerbill",
            round: "RangePerbill",
        },
        Lookup: "MultiAddress",
        MarketIdOf: "u128",
        MaxRuntimeUsize: "u64",
        Moment: "u64",
        MultiHash: {
            _enum: {
                Sha3_384: "[u8; 50]",
            },
        },
        Nominator2: {
            delegations: "Vec<Bond>",
            revocations: "Vec<AccountId>",
            total: "Balance",
            scheduledRevocationsCount: "u32",
            scheduledRevocationsTotal: "Balance",
            status: "DelegatorStatus",
        },
        NominatorAdded: {
            _enum: {
                AddedToTop: "Balance",
                AddedToBottom: null,
            },
        },
        OrderedSet: "Vec<Bond>",
        OwnedValuesParams: {
            participatedBlocks: "BlockNumber",
            perpetualIncentives: "Balance",
            totalIncentives: "Balance",
            totalShares: "Balance",
        },
        ParachainBondConfig: {
            account: "AccountId",
            percent: "Percent",
        },
        RangeBalance: {
            min: "Balance",
            ideal: "Balance",
            max: "Balance",
        },
        RangePerbill: {
            min: "Perbill",
            ideal: "Perbill",
            max: "Perbill",
        },
        RelayChainAccountId: "AccountId32",
        RewardInfo: {
            totalReward: "Balance",
            claimedReward: "Balance",
        },
        RoundIndex: "u32",
        RoundInfo: {
            current: "RoundIndex",
            first: "BlockNumber",
            length: "u32",
        },
        ScalarPosition: {
            _enum: ["Long", "Short"],
        },
        VestingBlockNumber: "u32",
    },
};
