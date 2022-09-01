import type { BTreeMap, Enum, Option, Struct, Vec, u128 } from '@polkadot/types-codec';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
import type { Asset } from '@zeitgeistpm/types/interfaces/index';
import type { MarketId, MarketPeriod, ScoringRule } from '@zeitgeistpm/types/interfaces/predictionMarkets';
export interface CommonPoolEventParams extends Struct {
    readonly poolId: u128;
    readonly who: AccountId;
}
export interface Pool extends Struct {
    readonly assets: Vec<Asset>;
    readonly baseAsset: Asset;
    readonly marketId: MarketId;
    readonly poolStatus: PoolStatus;
    readonly scoringRule: ScoringRule;
    readonly swapFee: Option<Balance>;
    readonly totalSubsidy: Option<Balance>;
    readonly totalWeight: Option<u128>;
    readonly weights: Option<BTreeMap<Asset, u128>>;
}
export interface PoolAssetEvent extends Struct {
    readonly asset: Asset;
    readonly bound: Balance;
    readonly cpep: CommonPoolEventParams;
    readonly transferred: Balance;
}
export interface PoolAssetsEvent extends Struct {
    readonly assets: Vec<Asset>;
    readonly bounds: Vec<Balance>;
    readonly cpep: CommonPoolEventParams;
    readonly transferred: Vec<Balance>;
}
export interface PoolId extends u128 {
}
export interface PoolStatus extends Enum {
    readonly isActive: boolean;
    readonly isCollectingSubsidy: boolean;
    readonly isClosed: boolean;
    readonly isClean: boolean;
    readonly isInitialized: boolean;
    readonly type: 'Active' | 'CollectingSubsidy' | 'Closed' | 'Clean' | 'Initialized';
}
export interface SubsidyUntil extends Struct {
    readonly marketId: MarketId;
    readonly period: MarketPeriod;
}
export interface SwapEvent extends Struct {
    readonly assetAmountIn: Balance;
    readonly assetAmountOut: Balance;
    readonly assetBound: Balance;
    readonly assetIn: Asset;
    readonly assetOut: Asset;
    readonly cpep: CommonPoolEventParams;
    readonly maxPrice: Balance;
}
export declare type PHANTOM_SWAPS = 'swaps';
