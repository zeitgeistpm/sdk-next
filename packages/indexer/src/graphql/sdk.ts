import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
};

/**
 * A type that has ss58 address format of the account. As soon as the chain
 * encounters any new address, they get registered here as user/pool/market account.
 */
export type Account = {
  __typename?: 'Account';
  /** Account address */
  accountId: Scalars['String'];
  /** List of balances connected to the account */
  balances: Array<AccountBalance>;
  /** Unique identifier of the object */
  id: Scalars['String'];
  /** Zeitgeist's identifier for market. Valid only for market account. */
  marketId?: Maybe<Scalars['Int']>;
};


/**
 * A type that has ss58 address format of the account. As soon as the chain
 * encounters any new address, they get registered here as user/pool/market account.
 */
export type AccountBalancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountBalanceOrderByInput>>;
  where?: InputMaybe<AccountBalanceWhereInput>;
};

/** Balance of a particular asset denoted by assetId present in the account */
export type AccountBalance = {
  __typename?: 'AccountBalance';
  /** Connected account */
  account: Account;
  /** Zeitgeist's identifier for asset */
  assetId: Scalars['String'];
  /** Balance of the asset */
  balance: Scalars['BigInt'];
  /** Unique identifier of the object */
  id: Scalars['String'];
};

export type AccountBalanceEdge = {
  __typename?: 'AccountBalanceEdge';
  cursor: Scalars['String'];
  node: AccountBalance;
};

export enum AccountBalanceOrderByInput {
  AccountAccountIdAsc = 'account_accountId_ASC',
  AccountAccountIdDesc = 'account_accountId_DESC',
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountMarketIdAsc = 'account_marketId_ASC',
  AccountMarketIdDesc = 'account_marketId_DESC',
  AssetIdAsc = 'assetId_ASC',
  AssetIdDesc = 'assetId_DESC',
  BalanceAsc = 'balance_ASC',
  BalanceDesc = 'balance_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AccountBalanceWhereInput = {
  AND?: InputMaybe<Array<AccountBalanceWhereInput>>;
  OR?: InputMaybe<Array<AccountBalanceWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']>;
  assetId_contains?: InputMaybe<Scalars['String']>;
  assetId_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_endsWith?: InputMaybe<Scalars['String']>;
  assetId_eq?: InputMaybe<Scalars['String']>;
  assetId_gt?: InputMaybe<Scalars['String']>;
  assetId_gte?: InputMaybe<Scalars['String']>;
  assetId_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_isNull?: InputMaybe<Scalars['Boolean']>;
  assetId_lt?: InputMaybe<Scalars['String']>;
  assetId_lte?: InputMaybe<Scalars['String']>;
  assetId_not_contains?: InputMaybe<Scalars['String']>;
  assetId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_not_endsWith?: InputMaybe<Scalars['String']>;
  assetId_not_eq?: InputMaybe<Scalars['String']>;
  assetId_not_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_not_startsWith?: InputMaybe<Scalars['String']>;
  assetId_startsWith?: InputMaybe<Scalars['String']>;
  balance_eq?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_isNull?: InputMaybe<Scalars['Boolean']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not_eq?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
};

export type AccountBalancesConnection = {
  __typename?: 'AccountBalancesConnection';
  edges: Array<AccountBalanceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  cursor: Scalars['String'];
  node: Account;
};

export enum AccountOrderByInput {
  AccountIdAsc = 'accountId_ASC',
  AccountIdDesc = 'accountId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MarketIdAsc = 'marketId_ASC',
  MarketIdDesc = 'marketId_DESC'
}

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  accountId_contains?: InputMaybe<Scalars['String']>;
  accountId_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_endsWith?: InputMaybe<Scalars['String']>;
  accountId_eq?: InputMaybe<Scalars['String']>;
  accountId_gt?: InputMaybe<Scalars['String']>;
  accountId_gte?: InputMaybe<Scalars['String']>;
  accountId_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_isNull?: InputMaybe<Scalars['Boolean']>;
  accountId_lt?: InputMaybe<Scalars['String']>;
  accountId_lte?: InputMaybe<Scalars['String']>;
  accountId_not_contains?: InputMaybe<Scalars['String']>;
  accountId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_not_endsWith?: InputMaybe<Scalars['String']>;
  accountId_not_eq?: InputMaybe<Scalars['String']>;
  accountId_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_not_startsWith?: InputMaybe<Scalars['String']>;
  accountId_startsWith?: InputMaybe<Scalars['String']>;
  balances_every?: InputMaybe<AccountBalanceWhereInput>;
  balances_none?: InputMaybe<AccountBalanceWhereInput>;
  balances_some?: InputMaybe<AccountBalanceWhereInput>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  marketId_eq?: InputMaybe<Scalars['Int']>;
  marketId_gt?: InputMaybe<Scalars['Int']>;
  marketId_gte?: InputMaybe<Scalars['Int']>;
  marketId_in?: InputMaybe<Array<Scalars['Int']>>;
  marketId_isNull?: InputMaybe<Scalars['Boolean']>;
  marketId_lt?: InputMaybe<Scalars['Int']>;
  marketId_lte?: InputMaybe<Scalars['Int']>;
  marketId_not_eq?: InputMaybe<Scalars['Int']>;
  marketId_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/**
 * A type that has detail of the outcome asset. It is initialised as soon as the
 * market is created and price is assigned when pool is deployed for the market.
 */
export type Asset = {
  __typename?: 'Asset';
  /** Balance of the asset present in the pool account */
  amountInPool: Scalars['BigInt'];
  /** Zeitgeist's identifier for asset */
  assetId: Scalars['String'];
  /** Unique identifier of the object */
  id: Scalars['String'];
  /** Connected pool */
  pool: Pool;
  /** Spot price of the asset in the pool */
  price: Scalars['Float'];
};

export type AssetEdge = {
  __typename?: 'AssetEdge';
  cursor: Scalars['String'];
  node: Asset;
};

/** Kind of asset */
export enum AssetKind {
  CategoricalOutcome = 'CategoricalOutcome',
  ForeignAsset = 'ForeignAsset',
  PoolShare = 'PoolShare',
  ScalarOutcome = 'ScalarOutcome',
  Ztg = 'Ztg'
}

export type AssetKindValue = {
  kind: AssetKind;
  value?: InputMaybe<Scalars['String']>;
};

export enum AssetOrderByInput {
  AmountInPoolAsc = 'amountInPool_ASC',
  AmountInPoolDesc = 'amountInPool_DESC',
  AssetIdAsc = 'assetId_ASC',
  AssetIdDesc = 'assetId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PoolBaseAssetAsc = 'pool_baseAsset_ASC',
  PoolBaseAssetDesc = 'pool_baseAsset_DESC',
  PoolCreatedAtAsc = 'pool_createdAt_ASC',
  PoolCreatedAtDesc = 'pool_createdAt_DESC',
  PoolIdAsc = 'pool_id_ASC',
  PoolIdDesc = 'pool_id_DESC',
  PoolMarketIdAsc = 'pool_marketId_ASC',
  PoolMarketIdDesc = 'pool_marketId_DESC',
  PoolPoolIdAsc = 'pool_poolId_ASC',
  PoolPoolIdDesc = 'pool_poolId_DESC',
  PoolScoringRuleAsc = 'pool_scoringRule_ASC',
  PoolScoringRuleDesc = 'pool_scoringRule_DESC',
  PoolStatusAsc = 'pool_status_ASC',
  PoolStatusDesc = 'pool_status_DESC',
  PoolSwapFeeAsc = 'pool_swapFee_ASC',
  PoolSwapFeeDesc = 'pool_swapFee_DESC',
  PoolTotalSubsidyAsc = 'pool_totalSubsidy_ASC',
  PoolTotalSubsidyDesc = 'pool_totalSubsidy_DESC',
  PoolTotalWeightAsc = 'pool_totalWeight_ASC',
  PoolTotalWeightDesc = 'pool_totalWeight_DESC',
  PoolVolumeAsc = 'pool_volume_ASC',
  PoolVolumeDesc = 'pool_volume_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC'
}

export type AssetWhereInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  amountInPool_eq?: InputMaybe<Scalars['BigInt']>;
  amountInPool_gt?: InputMaybe<Scalars['BigInt']>;
  amountInPool_gte?: InputMaybe<Scalars['BigInt']>;
  amountInPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountInPool_isNull?: InputMaybe<Scalars['Boolean']>;
  amountInPool_lt?: InputMaybe<Scalars['BigInt']>;
  amountInPool_lte?: InputMaybe<Scalars['BigInt']>;
  amountInPool_not_eq?: InputMaybe<Scalars['BigInt']>;
  amountInPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_contains?: InputMaybe<Scalars['String']>;
  assetId_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_endsWith?: InputMaybe<Scalars['String']>;
  assetId_eq?: InputMaybe<Scalars['String']>;
  assetId_gt?: InputMaybe<Scalars['String']>;
  assetId_gte?: InputMaybe<Scalars['String']>;
  assetId_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_isNull?: InputMaybe<Scalars['Boolean']>;
  assetId_lt?: InputMaybe<Scalars['String']>;
  assetId_lte?: InputMaybe<Scalars['String']>;
  assetId_not_contains?: InputMaybe<Scalars['String']>;
  assetId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_not_endsWith?: InputMaybe<Scalars['String']>;
  assetId_not_eq?: InputMaybe<Scalars['String']>;
  assetId_not_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_not_startsWith?: InputMaybe<Scalars['String']>;
  assetId_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<PoolWhereInput>;
  pool_isNull?: InputMaybe<Scalars['Boolean']>;
  price_eq?: InputMaybe<Scalars['Float']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<Scalars['Float']>>;
  price_isNull?: InputMaybe<Scalars['Boolean']>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not_eq?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

export type AssetsConnection = {
  __typename?: 'AssetsConnection';
  edges: Array<AssetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BalanceInfo = {
  __typename?: 'BalanceInfo';
  assetId: Scalars['String'];
  balance: Scalars['BigInt'];
};

/** Market's share details */
export type CategoryMetadata = {
  __typename?: 'CategoryMetadata';
  /** Color identifier */
  color?: Maybe<Scalars['String']>;
  /** Image identifier */
  img?: Maybe<Scalars['String']>;
  /** Title ex. `Locomotiv will not be defeated` */
  name?: Maybe<Scalars['String']>;
  /** Short abbreviation ex. `LMDRAW` */
  ticker?: Maybe<Scalars['String']>;
};

/** Markets' dispute options */
export enum DisputeMechanism {
  Authorized = 'Authorized',
  Court = 'Court',
  SimpleDisputes = 'SimpleDisputes'
}

/** Extrinsic data */
export type Extrinsic = {
  __typename?: 'Extrinsic';
  /** Extrinsic hash */
  hash: Scalars['String'];
  /** Name of the extrinsic */
  name: Scalars['String'];
};

export type ExtrinsicWhereInput = {
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_containsInsensitive?: InputMaybe<Scalars['String']>;
  hash_endsWith?: InputMaybe<Scalars['String']>;
  hash_eq?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_isNull?: InputMaybe<Scalars['Boolean']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  hash_not_endsWith?: InputMaybe<Scalars['String']>;
  hash_not_eq?: InputMaybe<Scalars['String']>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_startsWith?: InputMaybe<Scalars['String']>;
  hash_startsWith?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_endsWith?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_not_endsWith?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']>;
  name_startsWith?: InputMaybe<Scalars['String']>;
};

/**
 * Balance history of a particular asset in an account. Records all transactions
 * associated with the account.
 */
export type HistoricalAccountBalance = {
  __typename?: 'HistoricalAccountBalance';
  /** Account address */
  accountId: Scalars['String'];
  /** Zeitgeist's identifier for asset */
  assetId: Scalars['String'];
  /** Height of the block */
  blockNumber: Scalars['Int'];
  /** Balance difference */
  dBalance: Scalars['BigInt'];
  /** Event method which initiated this change */
  event: Scalars['String'];
  /** Extrinsic responsible for this change */
  extrinsic?: Maybe<Extrinsic>;
  /** Unique identifier of the object */
  id: Scalars['String'];
  /** Timestamp of the block */
  timestamp: Scalars['DateTime'];
};

export type HistoricalAccountBalanceEdge = {
  __typename?: 'HistoricalAccountBalanceEdge';
  cursor: Scalars['String'];
  node: HistoricalAccountBalance;
};

export enum HistoricalAccountBalanceOrderByInput {
  AccountIdAsc = 'accountId_ASC',
  AccountIdDesc = 'accountId_DESC',
  AssetIdAsc = 'assetId_ASC',
  AssetIdDesc = 'assetId_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DBalanceAsc = 'dBalance_ASC',
  DBalanceDesc = 'dBalance_DESC',
  EventAsc = 'event_ASC',
  EventDesc = 'event_DESC',
  ExtrinsicHashAsc = 'extrinsic_hash_ASC',
  ExtrinsicHashDesc = 'extrinsic_hash_DESC',
  ExtrinsicNameAsc = 'extrinsic_name_ASC',
  ExtrinsicNameDesc = 'extrinsic_name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type HistoricalAccountBalanceWhereInput = {
  AND?: InputMaybe<Array<HistoricalAccountBalanceWhereInput>>;
  OR?: InputMaybe<Array<HistoricalAccountBalanceWhereInput>>;
  accountId_contains?: InputMaybe<Scalars['String']>;
  accountId_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_endsWith?: InputMaybe<Scalars['String']>;
  accountId_eq?: InputMaybe<Scalars['String']>;
  accountId_gt?: InputMaybe<Scalars['String']>;
  accountId_gte?: InputMaybe<Scalars['String']>;
  accountId_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_isNull?: InputMaybe<Scalars['Boolean']>;
  accountId_lt?: InputMaybe<Scalars['String']>;
  accountId_lte?: InputMaybe<Scalars['String']>;
  accountId_not_contains?: InputMaybe<Scalars['String']>;
  accountId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_not_endsWith?: InputMaybe<Scalars['String']>;
  accountId_not_eq?: InputMaybe<Scalars['String']>;
  accountId_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_not_startsWith?: InputMaybe<Scalars['String']>;
  accountId_startsWith?: InputMaybe<Scalars['String']>;
  assetId_contains?: InputMaybe<Scalars['String']>;
  assetId_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_endsWith?: InputMaybe<Scalars['String']>;
  assetId_eq?: InputMaybe<Scalars['String']>;
  assetId_gt?: InputMaybe<Scalars['String']>;
  assetId_gte?: InputMaybe<Scalars['String']>;
  assetId_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_isNull?: InputMaybe<Scalars['Boolean']>;
  assetId_lt?: InputMaybe<Scalars['String']>;
  assetId_lte?: InputMaybe<Scalars['String']>;
  assetId_not_contains?: InputMaybe<Scalars['String']>;
  assetId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_not_endsWith?: InputMaybe<Scalars['String']>;
  assetId_not_eq?: InputMaybe<Scalars['String']>;
  assetId_not_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_not_startsWith?: InputMaybe<Scalars['String']>;
  assetId_startsWith?: InputMaybe<Scalars['String']>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dBalance_eq?: InputMaybe<Scalars['BigInt']>;
  dBalance_gt?: InputMaybe<Scalars['BigInt']>;
  dBalance_gte?: InputMaybe<Scalars['BigInt']>;
  dBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dBalance_isNull?: InputMaybe<Scalars['Boolean']>;
  dBalance_lt?: InputMaybe<Scalars['BigInt']>;
  dBalance_lte?: InputMaybe<Scalars['BigInt']>;
  dBalance_not_eq?: InputMaybe<Scalars['BigInt']>;
  dBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  event_contains?: InputMaybe<Scalars['String']>;
  event_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_endsWith?: InputMaybe<Scalars['String']>;
  event_eq?: InputMaybe<Scalars['String']>;
  event_gt?: InputMaybe<Scalars['String']>;
  event_gte?: InputMaybe<Scalars['String']>;
  event_in?: InputMaybe<Array<Scalars['String']>>;
  event_isNull?: InputMaybe<Scalars['Boolean']>;
  event_lt?: InputMaybe<Scalars['String']>;
  event_lte?: InputMaybe<Scalars['String']>;
  event_not_contains?: InputMaybe<Scalars['String']>;
  event_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_not_endsWith?: InputMaybe<Scalars['String']>;
  event_not_eq?: InputMaybe<Scalars['String']>;
  event_not_in?: InputMaybe<Array<Scalars['String']>>;
  event_not_startsWith?: InputMaybe<Scalars['String']>;
  event_startsWith?: InputMaybe<Scalars['String']>;
  extrinsic?: InputMaybe<ExtrinsicWhereInput>;
  extrinsic_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type HistoricalAccountBalancesConnection = {
  __typename?: 'HistoricalAccountBalancesConnection';
  edges: Array<HistoricalAccountBalanceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A type that records the price history of an outcome asset. */
export type HistoricalAsset = {
  __typename?: 'HistoricalAsset';
  /** Account which executed the trade */
  accountId?: Maybe<Scalars['String']>;
  /** Zeitgeist's identifier for asset */
  assetId: Scalars['String'];
  /** Amount of base asset which user spent/redeemed for swap trade */
  baseAssetTraded?: Maybe<Scalars['BigInt']>;
  /** Height of the block */
  blockNumber: Scalars['Int'];
  /** Units of asset user bought (-ve) or sold (+ve) */
  dAmountInPool?: Maybe<Scalars['BigInt']>;
  /** Price of the asset has decreased if -ve and +ve if increased */
  dPrice?: Maybe<Scalars['Float']>;
  /** Event method which initiated this change */
  event: Scalars['String'];
  /** Unique identifier of the object */
  id: Scalars['String'];
  /** Units of asset present in the pool account */
  newAmountInPool?: Maybe<Scalars['BigInt']>;
  /** Price of the asset after trade execution/market resolution */
  newPrice?: Maybe<Scalars['Float']>;
  /** Timestamp of the block */
  timestamp: Scalars['DateTime'];
};

export type HistoricalAssetEdge = {
  __typename?: 'HistoricalAssetEdge';
  cursor: Scalars['String'];
  node: HistoricalAsset;
};

export enum HistoricalAssetOrderByInput {
  AccountIdAsc = 'accountId_ASC',
  AccountIdDesc = 'accountId_DESC',
  AssetIdAsc = 'assetId_ASC',
  AssetIdDesc = 'assetId_DESC',
  BaseAssetTradedAsc = 'baseAssetTraded_ASC',
  BaseAssetTradedDesc = 'baseAssetTraded_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DAmountInPoolAsc = 'dAmountInPool_ASC',
  DAmountInPoolDesc = 'dAmountInPool_DESC',
  DPriceAsc = 'dPrice_ASC',
  DPriceDesc = 'dPrice_DESC',
  EventAsc = 'event_ASC',
  EventDesc = 'event_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NewAmountInPoolAsc = 'newAmountInPool_ASC',
  NewAmountInPoolDesc = 'newAmountInPool_DESC',
  NewPriceAsc = 'newPrice_ASC',
  NewPriceDesc = 'newPrice_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type HistoricalAssetWhereInput = {
  AND?: InputMaybe<Array<HistoricalAssetWhereInput>>;
  OR?: InputMaybe<Array<HistoricalAssetWhereInput>>;
  accountId_contains?: InputMaybe<Scalars['String']>;
  accountId_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_endsWith?: InputMaybe<Scalars['String']>;
  accountId_eq?: InputMaybe<Scalars['String']>;
  accountId_gt?: InputMaybe<Scalars['String']>;
  accountId_gte?: InputMaybe<Scalars['String']>;
  accountId_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_isNull?: InputMaybe<Scalars['Boolean']>;
  accountId_lt?: InputMaybe<Scalars['String']>;
  accountId_lte?: InputMaybe<Scalars['String']>;
  accountId_not_contains?: InputMaybe<Scalars['String']>;
  accountId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_not_endsWith?: InputMaybe<Scalars['String']>;
  accountId_not_eq?: InputMaybe<Scalars['String']>;
  accountId_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_not_startsWith?: InputMaybe<Scalars['String']>;
  accountId_startsWith?: InputMaybe<Scalars['String']>;
  assetId_contains?: InputMaybe<Scalars['String']>;
  assetId_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_endsWith?: InputMaybe<Scalars['String']>;
  assetId_eq?: InputMaybe<Scalars['String']>;
  assetId_gt?: InputMaybe<Scalars['String']>;
  assetId_gte?: InputMaybe<Scalars['String']>;
  assetId_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_isNull?: InputMaybe<Scalars['Boolean']>;
  assetId_lt?: InputMaybe<Scalars['String']>;
  assetId_lte?: InputMaybe<Scalars['String']>;
  assetId_not_contains?: InputMaybe<Scalars['String']>;
  assetId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetId_not_endsWith?: InputMaybe<Scalars['String']>;
  assetId_not_eq?: InputMaybe<Scalars['String']>;
  assetId_not_in?: InputMaybe<Array<Scalars['String']>>;
  assetId_not_startsWith?: InputMaybe<Scalars['String']>;
  assetId_startsWith?: InputMaybe<Scalars['String']>;
  baseAssetTraded_eq?: InputMaybe<Scalars['BigInt']>;
  baseAssetTraded_gt?: InputMaybe<Scalars['BigInt']>;
  baseAssetTraded_gte?: InputMaybe<Scalars['BigInt']>;
  baseAssetTraded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  baseAssetTraded_isNull?: InputMaybe<Scalars['Boolean']>;
  baseAssetTraded_lt?: InputMaybe<Scalars['BigInt']>;
  baseAssetTraded_lte?: InputMaybe<Scalars['BigInt']>;
  baseAssetTraded_not_eq?: InputMaybe<Scalars['BigInt']>;
  baseAssetTraded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dAmountInPool_eq?: InputMaybe<Scalars['BigInt']>;
  dAmountInPool_gt?: InputMaybe<Scalars['BigInt']>;
  dAmountInPool_gte?: InputMaybe<Scalars['BigInt']>;
  dAmountInPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dAmountInPool_isNull?: InputMaybe<Scalars['Boolean']>;
  dAmountInPool_lt?: InputMaybe<Scalars['BigInt']>;
  dAmountInPool_lte?: InputMaybe<Scalars['BigInt']>;
  dAmountInPool_not_eq?: InputMaybe<Scalars['BigInt']>;
  dAmountInPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dPrice_eq?: InputMaybe<Scalars['Float']>;
  dPrice_gt?: InputMaybe<Scalars['Float']>;
  dPrice_gte?: InputMaybe<Scalars['Float']>;
  dPrice_in?: InputMaybe<Array<Scalars['Float']>>;
  dPrice_isNull?: InputMaybe<Scalars['Boolean']>;
  dPrice_lt?: InputMaybe<Scalars['Float']>;
  dPrice_lte?: InputMaybe<Scalars['Float']>;
  dPrice_not_eq?: InputMaybe<Scalars['Float']>;
  dPrice_not_in?: InputMaybe<Array<Scalars['Float']>>;
  event_contains?: InputMaybe<Scalars['String']>;
  event_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_endsWith?: InputMaybe<Scalars['String']>;
  event_eq?: InputMaybe<Scalars['String']>;
  event_gt?: InputMaybe<Scalars['String']>;
  event_gte?: InputMaybe<Scalars['String']>;
  event_in?: InputMaybe<Array<Scalars['String']>>;
  event_isNull?: InputMaybe<Scalars['Boolean']>;
  event_lt?: InputMaybe<Scalars['String']>;
  event_lte?: InputMaybe<Scalars['String']>;
  event_not_contains?: InputMaybe<Scalars['String']>;
  event_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_not_endsWith?: InputMaybe<Scalars['String']>;
  event_not_eq?: InputMaybe<Scalars['String']>;
  event_not_in?: InputMaybe<Array<Scalars['String']>>;
  event_not_startsWith?: InputMaybe<Scalars['String']>;
  event_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  newAmountInPool_eq?: InputMaybe<Scalars['BigInt']>;
  newAmountInPool_gt?: InputMaybe<Scalars['BigInt']>;
  newAmountInPool_gte?: InputMaybe<Scalars['BigInt']>;
  newAmountInPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newAmountInPool_isNull?: InputMaybe<Scalars['Boolean']>;
  newAmountInPool_lt?: InputMaybe<Scalars['BigInt']>;
  newAmountInPool_lte?: InputMaybe<Scalars['BigInt']>;
  newAmountInPool_not_eq?: InputMaybe<Scalars['BigInt']>;
  newAmountInPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newPrice_eq?: InputMaybe<Scalars['Float']>;
  newPrice_gt?: InputMaybe<Scalars['Float']>;
  newPrice_gte?: InputMaybe<Scalars['Float']>;
  newPrice_in?: InputMaybe<Array<Scalars['Float']>>;
  newPrice_isNull?: InputMaybe<Scalars['Boolean']>;
  newPrice_lt?: InputMaybe<Scalars['Float']>;
  newPrice_lte?: InputMaybe<Scalars['Float']>;
  newPrice_not_eq?: InputMaybe<Scalars['Float']>;
  newPrice_not_in?: InputMaybe<Array<Scalars['Float']>>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type HistoricalAssetsConnection = {
  __typename?: 'HistoricalAssetsConnection';
  edges: Array<HistoricalAssetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/**
 * Market history of a particular market. Records all transactions
 * associated with the market.
 */
export type HistoricalMarket = {
  __typename?: 'HistoricalMarket';
  /** Height of the block */
  blockNumber: Scalars['Int'];
  /** The account that reported or disputed */
  by?: Maybe<Scalars['String']>;
  /** Event method which initiated this change */
  event: MarketEvent;
  id: Scalars['String'];
  /** Details of the connected market */
  market: Market;
  /** Reported or disputed outcome for the market */
  outcome?: Maybe<OutcomeReport>;
  /** Latest resolved outcome */
  resolvedOutcome?: Maybe<Scalars['String']>;
  /** Latest market status */
  status: MarketStatus;
  /** Timestamp of the block */
  timestamp: Scalars['DateTime'];
};

export type HistoricalMarketEdge = {
  __typename?: 'HistoricalMarketEdge';
  cursor: Scalars['String'];
  node: HistoricalMarket;
};

export enum HistoricalMarketOrderByInput {
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  ByAsc = 'by_ASC',
  ByDesc = 'by_DESC',
  EventAsc = 'event_ASC',
  EventDesc = 'event_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MarketAuthorizedAddressAsc = 'market_authorizedAddress_ASC',
  MarketAuthorizedAddressDesc = 'market_authorizedAddress_DESC',
  MarketBaseAssetAsc = 'market_baseAsset_ASC',
  MarketBaseAssetDesc = 'market_baseAsset_DESC',
  MarketCreationAsc = 'market_creation_ASC',
  MarketCreationDesc = 'market_creation_DESC',
  MarketCreatorFeeAsc = 'market_creatorFee_ASC',
  MarketCreatorFeeDesc = 'market_creatorFee_DESC',
  MarketCreatorAsc = 'market_creator_ASC',
  MarketCreatorDesc = 'market_creator_DESC',
  MarketDescriptionAsc = 'market_description_ASC',
  MarketDescriptionDesc = 'market_description_DESC',
  MarketDisputeMechanismAsc = 'market_disputeMechanism_ASC',
  MarketDisputeMechanismDesc = 'market_disputeMechanism_DESC',
  MarketHasValidMetaCategoriesAsc = 'market_hasValidMetaCategories_ASC',
  MarketHasValidMetaCategoriesDesc = 'market_hasValidMetaCategories_DESC',
  MarketIdAsc = 'market_id_ASC',
  MarketIdDesc = 'market_id_DESC',
  MarketImgAsc = 'market_img_ASC',
  MarketImgDesc = 'market_img_DESC',
  MarketMarketIdAsc = 'market_marketId_ASC',
  MarketMarketIdDesc = 'market_marketId_DESC',
  MarketMetadataAsc = 'market_metadata_ASC',
  MarketMetadataDesc = 'market_metadata_DESC',
  MarketOracleAsc = 'market_oracle_ASC',
  MarketOracleDesc = 'market_oracle_DESC',
  MarketQuestionAsc = 'market_question_ASC',
  MarketQuestionDesc = 'market_question_DESC',
  MarketRejectReasonAsc = 'market_rejectReason_ASC',
  MarketRejectReasonDesc = 'market_rejectReason_DESC',
  MarketResolvedOutcomeAsc = 'market_resolvedOutcome_ASC',
  MarketResolvedOutcomeDesc = 'market_resolvedOutcome_DESC',
  MarketScalarTypeAsc = 'market_scalarType_ASC',
  MarketScalarTypeDesc = 'market_scalarType_DESC',
  MarketScoringRuleAsc = 'market_scoringRule_ASC',
  MarketScoringRuleDesc = 'market_scoringRule_DESC',
  MarketSlugAsc = 'market_slug_ASC',
  MarketSlugDesc = 'market_slug_DESC',
  MarketStatusAsc = 'market_status_ASC',
  MarketStatusDesc = 'market_status_DESC',
  OutcomeCategoricalAsc = 'outcome_categorical_ASC',
  OutcomeCategoricalDesc = 'outcome_categorical_DESC',
  OutcomeScalarAsc = 'outcome_scalar_ASC',
  OutcomeScalarDesc = 'outcome_scalar_DESC',
  ResolvedOutcomeAsc = 'resolvedOutcome_ASC',
  ResolvedOutcomeDesc = 'resolvedOutcome_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type HistoricalMarketWhereInput = {
  AND?: InputMaybe<Array<HistoricalMarketWhereInput>>;
  OR?: InputMaybe<Array<HistoricalMarketWhereInput>>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_containsInsensitive?: InputMaybe<Scalars['String']>;
  by_endsWith?: InputMaybe<Scalars['String']>;
  by_eq?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_isNull?: InputMaybe<Scalars['Boolean']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  by_not_endsWith?: InputMaybe<Scalars['String']>;
  by_not_eq?: InputMaybe<Scalars['String']>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_startsWith?: InputMaybe<Scalars['String']>;
  by_startsWith?: InputMaybe<Scalars['String']>;
  event_eq?: InputMaybe<MarketEvent>;
  event_in?: InputMaybe<Array<MarketEvent>>;
  event_isNull?: InputMaybe<Scalars['Boolean']>;
  event_not_eq?: InputMaybe<MarketEvent>;
  event_not_in?: InputMaybe<Array<MarketEvent>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  market?: InputMaybe<MarketWhereInput>;
  market_isNull?: InputMaybe<Scalars['Boolean']>;
  outcome?: InputMaybe<OutcomeReportWhereInput>;
  outcome_isNull?: InputMaybe<Scalars['Boolean']>;
  resolvedOutcome_contains?: InputMaybe<Scalars['String']>;
  resolvedOutcome_containsInsensitive?: InputMaybe<Scalars['String']>;
  resolvedOutcome_endsWith?: InputMaybe<Scalars['String']>;
  resolvedOutcome_eq?: InputMaybe<Scalars['String']>;
  resolvedOutcome_gt?: InputMaybe<Scalars['String']>;
  resolvedOutcome_gte?: InputMaybe<Scalars['String']>;
  resolvedOutcome_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedOutcome_isNull?: InputMaybe<Scalars['Boolean']>;
  resolvedOutcome_lt?: InputMaybe<Scalars['String']>;
  resolvedOutcome_lte?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_contains?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_endsWith?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_eq?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedOutcome_not_startsWith?: InputMaybe<Scalars['String']>;
  resolvedOutcome_startsWith?: InputMaybe<Scalars['String']>;
  status_eq?: InputMaybe<MarketStatus>;
  status_in?: InputMaybe<Array<MarketStatus>>;
  status_isNull?: InputMaybe<Scalars['Boolean']>;
  status_not_eq?: InputMaybe<MarketStatus>;
  status_not_in?: InputMaybe<Array<MarketStatus>>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type HistoricalMarketsConnection = {
  __typename?: 'HistoricalMarketsConnection';
  edges: Array<HistoricalMarketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/**
 * Liquidity history of a particular pool. Records all transactions
 * associated with the pool.
 */
export type HistoricalPool = {
  __typename?: 'HistoricalPool';
  /** Height of the block */
  blockNumber: Scalars['Int'];
  /** Volume difference */
  dVolume?: Maybe<Scalars['BigInt']>;
  /** Event method which initiated this change */
  event: Scalars['String'];
  id: Scalars['String'];
  /** Zeitgeist's identifier for pool */
  poolId: Scalars['Int'];
  /** Current status of the pool */
  status: PoolStatus;
  /** Timestamp of the block */
  timestamp: Scalars['DateTime'];
  /** New updated volume */
  volume?: Maybe<Scalars['BigInt']>;
};

export type HistoricalPoolEdge = {
  __typename?: 'HistoricalPoolEdge';
  cursor: Scalars['String'];
  node: HistoricalPool;
};

export enum HistoricalPoolOrderByInput {
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DVolumeAsc = 'dVolume_ASC',
  DVolumeDesc = 'dVolume_DESC',
  EventAsc = 'event_ASC',
  EventDesc = 'event_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PoolIdAsc = 'poolId_ASC',
  PoolIdDesc = 'poolId_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  VolumeAsc = 'volume_ASC',
  VolumeDesc = 'volume_DESC'
}

export type HistoricalPoolWhereInput = {
  AND?: InputMaybe<Array<HistoricalPoolWhereInput>>;
  OR?: InputMaybe<Array<HistoricalPoolWhereInput>>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dVolume_eq?: InputMaybe<Scalars['BigInt']>;
  dVolume_gt?: InputMaybe<Scalars['BigInt']>;
  dVolume_gte?: InputMaybe<Scalars['BigInt']>;
  dVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dVolume_isNull?: InputMaybe<Scalars['Boolean']>;
  dVolume_lt?: InputMaybe<Scalars['BigInt']>;
  dVolume_lte?: InputMaybe<Scalars['BigInt']>;
  dVolume_not_eq?: InputMaybe<Scalars['BigInt']>;
  dVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  event_contains?: InputMaybe<Scalars['String']>;
  event_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_endsWith?: InputMaybe<Scalars['String']>;
  event_eq?: InputMaybe<Scalars['String']>;
  event_gt?: InputMaybe<Scalars['String']>;
  event_gte?: InputMaybe<Scalars['String']>;
  event_in?: InputMaybe<Array<Scalars['String']>>;
  event_isNull?: InputMaybe<Scalars['Boolean']>;
  event_lt?: InputMaybe<Scalars['String']>;
  event_lte?: InputMaybe<Scalars['String']>;
  event_not_contains?: InputMaybe<Scalars['String']>;
  event_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_not_endsWith?: InputMaybe<Scalars['String']>;
  event_not_eq?: InputMaybe<Scalars['String']>;
  event_not_in?: InputMaybe<Array<Scalars['String']>>;
  event_not_startsWith?: InputMaybe<Scalars['String']>;
  event_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  poolId_eq?: InputMaybe<Scalars['Int']>;
  poolId_gt?: InputMaybe<Scalars['Int']>;
  poolId_gte?: InputMaybe<Scalars['Int']>;
  poolId_in?: InputMaybe<Array<Scalars['Int']>>;
  poolId_isNull?: InputMaybe<Scalars['Boolean']>;
  poolId_lt?: InputMaybe<Scalars['Int']>;
  poolId_lte?: InputMaybe<Scalars['Int']>;
  poolId_not_eq?: InputMaybe<Scalars['Int']>;
  poolId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  status_eq?: InputMaybe<PoolStatus>;
  status_in?: InputMaybe<Array<PoolStatus>>;
  status_isNull?: InputMaybe<Scalars['Boolean']>;
  status_not_eq?: InputMaybe<PoolStatus>;
  status_not_in?: InputMaybe<Array<PoolStatus>>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  volume_eq?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_isNull?: InputMaybe<Scalars['Boolean']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not_eq?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type HistoricalPoolsConnection = {
  __typename?: 'HistoricalPoolsConnection';
  edges: Array<HistoricalPoolEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A type that records the trade history of an account. */
export type HistoricalSwap = {
  __typename?: 'HistoricalSwap';
  /** Account which executed the trade */
  accountId: Scalars['String'];
  /** Units of asset user sold */
  assetAmountIn: Scalars['BigInt'];
  /** Units of asset user bought */
  assetAmountOut: Scalars['BigInt'];
  /** Asset sold by the user */
  assetIn: Scalars['String'];
  /** Asset bought by the user */
  assetOut: Scalars['String'];
  /** Height of the block */
  blockNumber: Scalars['Int'];
  /** Event method which initiated this swap */
  event: Scalars['String'];
  /** Extrinsic responsible for this change */
  extrinsic?: Maybe<Extrinsic>;
  /** Unique identifier of the object */
  id: Scalars['String'];
  /** Timestamp of the block */
  timestamp: Scalars['DateTime'];
};

export type HistoricalSwapEdge = {
  __typename?: 'HistoricalSwapEdge';
  cursor: Scalars['String'];
  node: HistoricalSwap;
};

export enum HistoricalSwapOrderByInput {
  AccountIdAsc = 'accountId_ASC',
  AccountIdDesc = 'accountId_DESC',
  AssetAmountInAsc = 'assetAmountIn_ASC',
  AssetAmountInDesc = 'assetAmountIn_DESC',
  AssetAmountOutAsc = 'assetAmountOut_ASC',
  AssetAmountOutDesc = 'assetAmountOut_DESC',
  AssetInAsc = 'assetIn_ASC',
  AssetInDesc = 'assetIn_DESC',
  AssetOutAsc = 'assetOut_ASC',
  AssetOutDesc = 'assetOut_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  EventAsc = 'event_ASC',
  EventDesc = 'event_DESC',
  ExtrinsicHashAsc = 'extrinsic_hash_ASC',
  ExtrinsicHashDesc = 'extrinsic_hash_DESC',
  ExtrinsicNameAsc = 'extrinsic_name_ASC',
  ExtrinsicNameDesc = 'extrinsic_name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type HistoricalSwapWhereInput = {
  AND?: InputMaybe<Array<HistoricalSwapWhereInput>>;
  OR?: InputMaybe<Array<HistoricalSwapWhereInput>>;
  accountId_contains?: InputMaybe<Scalars['String']>;
  accountId_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_endsWith?: InputMaybe<Scalars['String']>;
  accountId_eq?: InputMaybe<Scalars['String']>;
  accountId_gt?: InputMaybe<Scalars['String']>;
  accountId_gte?: InputMaybe<Scalars['String']>;
  accountId_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_isNull?: InputMaybe<Scalars['Boolean']>;
  accountId_lt?: InputMaybe<Scalars['String']>;
  accountId_lte?: InputMaybe<Scalars['String']>;
  accountId_not_contains?: InputMaybe<Scalars['String']>;
  accountId_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  accountId_not_endsWith?: InputMaybe<Scalars['String']>;
  accountId_not_eq?: InputMaybe<Scalars['String']>;
  accountId_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountId_not_startsWith?: InputMaybe<Scalars['String']>;
  accountId_startsWith?: InputMaybe<Scalars['String']>;
  assetAmountIn_eq?: InputMaybe<Scalars['BigInt']>;
  assetAmountIn_gt?: InputMaybe<Scalars['BigInt']>;
  assetAmountIn_gte?: InputMaybe<Scalars['BigInt']>;
  assetAmountIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetAmountIn_isNull?: InputMaybe<Scalars['Boolean']>;
  assetAmountIn_lt?: InputMaybe<Scalars['BigInt']>;
  assetAmountIn_lte?: InputMaybe<Scalars['BigInt']>;
  assetAmountIn_not_eq?: InputMaybe<Scalars['BigInt']>;
  assetAmountIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetAmountOut_eq?: InputMaybe<Scalars['BigInt']>;
  assetAmountOut_gt?: InputMaybe<Scalars['BigInt']>;
  assetAmountOut_gte?: InputMaybe<Scalars['BigInt']>;
  assetAmountOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetAmountOut_isNull?: InputMaybe<Scalars['Boolean']>;
  assetAmountOut_lt?: InputMaybe<Scalars['BigInt']>;
  assetAmountOut_lte?: InputMaybe<Scalars['BigInt']>;
  assetAmountOut_not_eq?: InputMaybe<Scalars['BigInt']>;
  assetAmountOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetIn_contains?: InputMaybe<Scalars['String']>;
  assetIn_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetIn_endsWith?: InputMaybe<Scalars['String']>;
  assetIn_eq?: InputMaybe<Scalars['String']>;
  assetIn_gt?: InputMaybe<Scalars['String']>;
  assetIn_gte?: InputMaybe<Scalars['String']>;
  assetIn_in?: InputMaybe<Array<Scalars['String']>>;
  assetIn_isNull?: InputMaybe<Scalars['Boolean']>;
  assetIn_lt?: InputMaybe<Scalars['String']>;
  assetIn_lte?: InputMaybe<Scalars['String']>;
  assetIn_not_contains?: InputMaybe<Scalars['String']>;
  assetIn_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetIn_not_endsWith?: InputMaybe<Scalars['String']>;
  assetIn_not_eq?: InputMaybe<Scalars['String']>;
  assetIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  assetIn_not_startsWith?: InputMaybe<Scalars['String']>;
  assetIn_startsWith?: InputMaybe<Scalars['String']>;
  assetOut_contains?: InputMaybe<Scalars['String']>;
  assetOut_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetOut_endsWith?: InputMaybe<Scalars['String']>;
  assetOut_eq?: InputMaybe<Scalars['String']>;
  assetOut_gt?: InputMaybe<Scalars['String']>;
  assetOut_gte?: InputMaybe<Scalars['String']>;
  assetOut_in?: InputMaybe<Array<Scalars['String']>>;
  assetOut_isNull?: InputMaybe<Scalars['Boolean']>;
  assetOut_lt?: InputMaybe<Scalars['String']>;
  assetOut_lte?: InputMaybe<Scalars['String']>;
  assetOut_not_contains?: InputMaybe<Scalars['String']>;
  assetOut_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  assetOut_not_endsWith?: InputMaybe<Scalars['String']>;
  assetOut_not_eq?: InputMaybe<Scalars['String']>;
  assetOut_not_in?: InputMaybe<Array<Scalars['String']>>;
  assetOut_not_startsWith?: InputMaybe<Scalars['String']>;
  assetOut_startsWith?: InputMaybe<Scalars['String']>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  event_contains?: InputMaybe<Scalars['String']>;
  event_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_endsWith?: InputMaybe<Scalars['String']>;
  event_eq?: InputMaybe<Scalars['String']>;
  event_gt?: InputMaybe<Scalars['String']>;
  event_gte?: InputMaybe<Scalars['String']>;
  event_in?: InputMaybe<Array<Scalars['String']>>;
  event_isNull?: InputMaybe<Scalars['Boolean']>;
  event_lt?: InputMaybe<Scalars['String']>;
  event_lte?: InputMaybe<Scalars['String']>;
  event_not_contains?: InputMaybe<Scalars['String']>;
  event_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  event_not_endsWith?: InputMaybe<Scalars['String']>;
  event_not_eq?: InputMaybe<Scalars['String']>;
  event_not_in?: InputMaybe<Array<Scalars['String']>>;
  event_not_startsWith?: InputMaybe<Scalars['String']>;
  event_startsWith?: InputMaybe<Scalars['String']>;
  extrinsic?: InputMaybe<ExtrinsicWhereInput>;
  extrinsic_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type HistoricalSwapsConnection = {
  __typename?: 'HistoricalSwapsConnection';
  edges: Array<HistoricalSwapEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IntervalArgs = {
  unit: Unit;
  value: Scalars['Int'];
};

/** Prediction market details */
export type Market = {
  __typename?: 'Market';
  /** Address responsible for authorizing disputes. Null if Adv Comm is the authority */
  authorizedAddress?: Maybe<Scalars['String']>;
  /** The base asset in the market swap pool (usually a currency) */
  baseAsset: Scalars['String'];
  /** Tracks the status of the advisory, oracle and validity bonds */
  bonds?: Maybe<MarketBonds>;
  /** Share details */
  categories?: Maybe<Array<CategoryMetadata>>;
  /** Can be `Permissionless` or `Advised` */
  creation: MarketCreation;
  /** Account address of the market creator */
  creator: Scalars['String'];
  /** The creator's fee */
  creatorFee?: Maybe<Scalars['Int']>;
  /** Deadlines for the market represented in blocks */
  deadlines?: Maybe<MarketDeadlines>;
  /** Description of the market */
  description?: Maybe<Scalars['String']>;
  /** Can be `Authorized` or `Court` or `SimpleDisputes` */
  disputeMechanism: DisputeMechanism;
  /** The dispute information for each dispute that's been issued */
  disputes?: Maybe<Array<Maybe<MarketReport>>>;
  /** Checks if each category has a name for display on UI */
  hasValidMetaCategories: Scalars['Boolean'];
  id: Scalars['String'];
  /** Image for the market */
  img?: Maybe<Scalars['String']>;
  /** Zeitgeist's identifier for market */
  marketId: Scalars['Int'];
  /** Type of the market */
  marketType: MarketType;
  /** IPFS cid for market metadata */
  metadata: Scalars['String'];
  /** Account designated to report on the market */
  oracle: Scalars['String'];
  /** Share identifiers */
  outcomeAssets: Array<Scalars['String']>;
  /** Time period expressed in block numbers or timestamps */
  period: MarketPeriod;
  /** Market's liquidity pool details */
  pool?: Maybe<Pool>;
  /** Market question */
  question?: Maybe<Scalars['String']>;
  /** Reasoning for market rejection */
  rejectReason?: Maybe<Scalars['String']>;
  /** Reported outcome of the market. Null if the market is not reported yet */
  report?: Maybe<MarketReport>;
  /** Resolved outcome for the market */
  resolvedOutcome?: Maybe<Scalars['String']>;
  /** Type of scalar range if market is of type scalar */
  scalarType?: Maybe<Scalars['String']>;
  /** Scoring rule used for the market */
  scoringRule: ScoringRule;
  /** Short name for the market */
  slug?: Maybe<Scalars['String']>;
  /** Status of the market */
  status: MarketStatus;
  /** Market tags */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Market's bond details */
export type MarketBond = {
  __typename?: 'MarketBond';
  /** The flag which determines if the bond was already unreserved and/or (partially) slashed */
  isSettled: Scalars['Boolean'];
  /** Amount reserved */
  value: Scalars['BigInt'];
  /** The account that reserved the bond */
  who: Scalars['String'];
};

export type MarketBondWhereInput = {
  isSettled_eq?: InputMaybe<Scalars['Boolean']>;
  isSettled_isNull?: InputMaybe<Scalars['Boolean']>;
  isSettled_not_eq?: InputMaybe<Scalars['Boolean']>;
  value_eq?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_isNull?: InputMaybe<Scalars['Boolean']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_not_eq?: InputMaybe<Scalars['BigInt']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  who_contains?: InputMaybe<Scalars['String']>;
  who_containsInsensitive?: InputMaybe<Scalars['String']>;
  who_endsWith?: InputMaybe<Scalars['String']>;
  who_eq?: InputMaybe<Scalars['String']>;
  who_gt?: InputMaybe<Scalars['String']>;
  who_gte?: InputMaybe<Scalars['String']>;
  who_in?: InputMaybe<Array<Scalars['String']>>;
  who_isNull?: InputMaybe<Scalars['Boolean']>;
  who_lt?: InputMaybe<Scalars['String']>;
  who_lte?: InputMaybe<Scalars['String']>;
  who_not_contains?: InputMaybe<Scalars['String']>;
  who_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  who_not_endsWith?: InputMaybe<Scalars['String']>;
  who_not_eq?: InputMaybe<Scalars['String']>;
  who_not_in?: InputMaybe<Array<Scalars['String']>>;
  who_not_startsWith?: InputMaybe<Scalars['String']>;
  who_startsWith?: InputMaybe<Scalars['String']>;
};

/**
 * Amount reserved for creation of markets, selecting oracles, joining the council,
 * making treasury proposals, setting on-chain identities, voting,
 * creating DAOs, and other parts of the protocol.
 */
export type MarketBonds = {
  __typename?: 'MarketBonds';
  /** Bond associated with creation of markets */
  creation: MarketBond;
  /** Bond associated with oracle selection */
  oracle: MarketBond;
  /** A bond for an outcome reporter, who is not the oracle */
  outsider?: Maybe<MarketBond>;
};

export type MarketBondsWhereInput = {
  creation?: InputMaybe<MarketBondWhereInput>;
  creation_isNull?: InputMaybe<Scalars['Boolean']>;
  oracle?: InputMaybe<MarketBondWhereInput>;
  oracle_isNull?: InputMaybe<Scalars['Boolean']>;
  outsider?: InputMaybe<MarketBondWhereInput>;
  outsider_isNull?: InputMaybe<Scalars['Boolean']>;
};

/** Markets' creation options */
export enum MarketCreation {
  Advised = 'Advised',
  Permissionless = 'Permissionless'
}

/** Deadlines for the market represented in blocks */
export type MarketDeadlines = {
  __typename?: 'MarketDeadlines';
  disputeDuration: Scalars['BigInt'];
  gracePeriod: Scalars['BigInt'];
  oracleDuration: Scalars['BigInt'];
};

export type MarketDeadlinesWhereInput = {
  disputeDuration_eq?: InputMaybe<Scalars['BigInt']>;
  disputeDuration_gt?: InputMaybe<Scalars['BigInt']>;
  disputeDuration_gte?: InputMaybe<Scalars['BigInt']>;
  disputeDuration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeDuration_isNull?: InputMaybe<Scalars['Boolean']>;
  disputeDuration_lt?: InputMaybe<Scalars['BigInt']>;
  disputeDuration_lte?: InputMaybe<Scalars['BigInt']>;
  disputeDuration_not_eq?: InputMaybe<Scalars['BigInt']>;
  disputeDuration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gracePeriod_eq?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_gt?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_gte?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gracePeriod_isNull?: InputMaybe<Scalars['Boolean']>;
  gracePeriod_lt?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_lte?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_not_eq?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oracleDuration_eq?: InputMaybe<Scalars['BigInt']>;
  oracleDuration_gt?: InputMaybe<Scalars['BigInt']>;
  oracleDuration_gte?: InputMaybe<Scalars['BigInt']>;
  oracleDuration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  oracleDuration_isNull?: InputMaybe<Scalars['Boolean']>;
  oracleDuration_lt?: InputMaybe<Scalars['BigInt']>;
  oracleDuration_lte?: InputMaybe<Scalars['BigInt']>;
  oracleDuration_not_eq?: InputMaybe<Scalars['BigInt']>;
  oracleDuration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type MarketEdge = {
  __typename?: 'MarketEdge';
  cursor: Scalars['String'];
  node: Market;
};

/** Markets' event options */
export enum MarketEvent {
  GlobalDisputeStarted = 'GlobalDisputeStarted',
  MarketApproved = 'MarketApproved',
  MarketClosed = 'MarketClosed',
  MarketCreated = 'MarketCreated',
  MarketDestroyed = 'MarketDestroyed',
  MarketDisputed = 'MarketDisputed',
  MarketExpired = 'MarketExpired',
  MarketRejected = 'MarketRejected',
  MarketReported = 'MarketReported',
  MarketResolved = 'MarketResolved',
  PoolCreate = 'PoolCreate'
}

export type MarketMetadata = {
  __typename?: 'MarketMetadata';
  decoded?: Maybe<Scalars['String']>;
  encoded: Scalars['String'];
  marketId: Scalars['Int'];
};

export enum MarketOrderByInput {
  AuthorizedAddressAsc = 'authorizedAddress_ASC',
  AuthorizedAddressDesc = 'authorizedAddress_DESC',
  BaseAssetAsc = 'baseAsset_ASC',
  BaseAssetDesc = 'baseAsset_DESC',
  CreationAsc = 'creation_ASC',
  CreationDesc = 'creation_DESC',
  CreatorFeeAsc = 'creatorFee_ASC',
  CreatorFeeDesc = 'creatorFee_DESC',
  CreatorAsc = 'creator_ASC',
  CreatorDesc = 'creator_DESC',
  DeadlinesDisputeDurationAsc = 'deadlines_disputeDuration_ASC',
  DeadlinesDisputeDurationDesc = 'deadlines_disputeDuration_DESC',
  DeadlinesGracePeriodAsc = 'deadlines_gracePeriod_ASC',
  DeadlinesGracePeriodDesc = 'deadlines_gracePeriod_DESC',
  DeadlinesOracleDurationAsc = 'deadlines_oracleDuration_ASC',
  DeadlinesOracleDurationDesc = 'deadlines_oracleDuration_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DisputeMechanismAsc = 'disputeMechanism_ASC',
  DisputeMechanismDesc = 'disputeMechanism_DESC',
  HasValidMetaCategoriesAsc = 'hasValidMetaCategories_ASC',
  HasValidMetaCategoriesDesc = 'hasValidMetaCategories_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImgAsc = 'img_ASC',
  ImgDesc = 'img_DESC',
  MarketIdAsc = 'marketId_ASC',
  MarketIdDesc = 'marketId_DESC',
  MarketTypeCategoricalAsc = 'marketType_categorical_ASC',
  MarketTypeCategoricalDesc = 'marketType_categorical_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  OracleAsc = 'oracle_ASC',
  OracleDesc = 'oracle_DESC',
  PeriodEndAsc = 'period_end_ASC',
  PeriodEndDesc = 'period_end_DESC',
  PeriodStartAsc = 'period_start_ASC',
  PeriodStartDesc = 'period_start_DESC',
  PoolBaseAssetAsc = 'pool_baseAsset_ASC',
  PoolBaseAssetDesc = 'pool_baseAsset_DESC',
  PoolCreatedAtAsc = 'pool_createdAt_ASC',
  PoolCreatedAtDesc = 'pool_createdAt_DESC',
  PoolIdAsc = 'pool_id_ASC',
  PoolIdDesc = 'pool_id_DESC',
  PoolMarketIdAsc = 'pool_marketId_ASC',
  PoolMarketIdDesc = 'pool_marketId_DESC',
  PoolPoolIdAsc = 'pool_poolId_ASC',
  PoolPoolIdDesc = 'pool_poolId_DESC',
  PoolScoringRuleAsc = 'pool_scoringRule_ASC',
  PoolScoringRuleDesc = 'pool_scoringRule_DESC',
  PoolStatusAsc = 'pool_status_ASC',
  PoolStatusDesc = 'pool_status_DESC',
  PoolSwapFeeAsc = 'pool_swapFee_ASC',
  PoolSwapFeeDesc = 'pool_swapFee_DESC',
  PoolTotalSubsidyAsc = 'pool_totalSubsidy_ASC',
  PoolTotalSubsidyDesc = 'pool_totalSubsidy_DESC',
  PoolTotalWeightAsc = 'pool_totalWeight_ASC',
  PoolTotalWeightDesc = 'pool_totalWeight_DESC',
  PoolVolumeAsc = 'pool_volume_ASC',
  PoolVolumeDesc = 'pool_volume_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  RejectReasonAsc = 'rejectReason_ASC',
  RejectReasonDesc = 'rejectReason_DESC',
  ReportAtAsc = 'report_at_ASC',
  ReportAtDesc = 'report_at_DESC',
  ReportByAsc = 'report_by_ASC',
  ReportByDesc = 'report_by_DESC',
  ResolvedOutcomeAsc = 'resolvedOutcome_ASC',
  ResolvedOutcomeDesc = 'resolvedOutcome_DESC',
  ScalarTypeAsc = 'scalarType_ASC',
  ScalarTypeDesc = 'scalarType_DESC',
  ScoringRuleAsc = 'scoringRule_ASC',
  ScoringRuleDesc = 'scoringRule_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

/** Time period of the market */
export type MarketPeriod = {
  __typename?: 'MarketPeriod';
  /** start & end block numbers */
  block?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  /** Timestamp at which market should end */
  end: Scalars['BigInt'];
  /** Timestamp at which market should start */
  start: Scalars['BigInt'];
  /** start & end timestamps */
  timestamp?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
};

export type MarketPeriodWhereInput = {
  block_containsAll?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  block_containsAny?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  block_containsNone?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  block_isNull?: InputMaybe<Scalars['Boolean']>;
  end_eq?: InputMaybe<Scalars['BigInt']>;
  end_gt?: InputMaybe<Scalars['BigInt']>;
  end_gte?: InputMaybe<Scalars['BigInt']>;
  end_in?: InputMaybe<Array<Scalars['BigInt']>>;
  end_isNull?: InputMaybe<Scalars['Boolean']>;
  end_lt?: InputMaybe<Scalars['BigInt']>;
  end_lte?: InputMaybe<Scalars['BigInt']>;
  end_not_eq?: InputMaybe<Scalars['BigInt']>;
  end_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_eq?: InputMaybe<Scalars['BigInt']>;
  start_gt?: InputMaybe<Scalars['BigInt']>;
  start_gte?: InputMaybe<Scalars['BigInt']>;
  start_in?: InputMaybe<Array<Scalars['BigInt']>>;
  start_isNull?: InputMaybe<Scalars['Boolean']>;
  start_lt?: InputMaybe<Scalars['BigInt']>;
  start_lte?: InputMaybe<Scalars['BigInt']>;
  start_not_eq?: InputMaybe<Scalars['BigInt']>;
  start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_containsAll?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  timestamp_containsAny?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  timestamp_containsNone?: InputMaybe<Array<InputMaybe<Scalars['BigInt']>>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
};

/** Market's report details */
export type MarketReport = {
  __typename?: 'MarketReport';
  /** Block number */
  at?: Maybe<Scalars['Int']>;
  /** Account which reported */
  by?: Maybe<Scalars['String']>;
  /** Outcome details */
  outcome?: Maybe<OutcomeReport>;
};

export type MarketReportWhereInput = {
  at_eq?: InputMaybe<Scalars['Int']>;
  at_gt?: InputMaybe<Scalars['Int']>;
  at_gte?: InputMaybe<Scalars['Int']>;
  at_in?: InputMaybe<Array<Scalars['Int']>>;
  at_isNull?: InputMaybe<Scalars['Boolean']>;
  at_lt?: InputMaybe<Scalars['Int']>;
  at_lte?: InputMaybe<Scalars['Int']>;
  at_not_eq?: InputMaybe<Scalars['Int']>;
  at_not_in?: InputMaybe<Array<Scalars['Int']>>;
  by_contains?: InputMaybe<Scalars['String']>;
  by_containsInsensitive?: InputMaybe<Scalars['String']>;
  by_endsWith?: InputMaybe<Scalars['String']>;
  by_eq?: InputMaybe<Scalars['String']>;
  by_gt?: InputMaybe<Scalars['String']>;
  by_gte?: InputMaybe<Scalars['String']>;
  by_in?: InputMaybe<Array<Scalars['String']>>;
  by_isNull?: InputMaybe<Scalars['Boolean']>;
  by_lt?: InputMaybe<Scalars['String']>;
  by_lte?: InputMaybe<Scalars['String']>;
  by_not_contains?: InputMaybe<Scalars['String']>;
  by_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  by_not_endsWith?: InputMaybe<Scalars['String']>;
  by_not_eq?: InputMaybe<Scalars['String']>;
  by_not_in?: InputMaybe<Array<Scalars['String']>>;
  by_not_startsWith?: InputMaybe<Scalars['String']>;
  by_startsWith?: InputMaybe<Scalars['String']>;
  outcome?: InputMaybe<OutcomeReportWhereInput>;
  outcome_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type MarketStats = {
  __typename?: 'MarketStats';
  liquidity: Scalars['BigInt'];
  marketId: Scalars['Int'];
  participants: Scalars['Int'];
};

export type MarketStatsWithOrder = {
  __typename?: 'MarketStatsWithOrder';
  liquidity: Scalars['BigInt'];
  marketId: Scalars['Int'];
  participants: Scalars['Int'];
  volume: Scalars['BigInt'];
};

/** Markets' status options */
export enum MarketStatus {
  Active = 'Active',
  Closed = 'Closed',
  CollectingSubsidy = 'CollectingSubsidy',
  Destroyed = 'Destroyed',
  Disputed = 'Disputed',
  Expired = 'Expired',
  InsufficientSubsidy = 'InsufficientSubsidy',
  Proposed = 'Proposed',
  Rejected = 'Rejected',
  Reported = 'Reported',
  Resolved = 'Resolved',
  Suspended = 'Suspended'
}

/** Market's types */
export type MarketType = {
  __typename?: 'MarketType';
  /** Number of categories if categorical market */
  categorical?: Maybe<Scalars['String']>;
  /** Range of values if scalar market */
  scalar?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MarketTypeWhereInput = {
  categorical_contains?: InputMaybe<Scalars['String']>;
  categorical_containsInsensitive?: InputMaybe<Scalars['String']>;
  categorical_endsWith?: InputMaybe<Scalars['String']>;
  categorical_eq?: InputMaybe<Scalars['String']>;
  categorical_gt?: InputMaybe<Scalars['String']>;
  categorical_gte?: InputMaybe<Scalars['String']>;
  categorical_in?: InputMaybe<Array<Scalars['String']>>;
  categorical_isNull?: InputMaybe<Scalars['Boolean']>;
  categorical_lt?: InputMaybe<Scalars['String']>;
  categorical_lte?: InputMaybe<Scalars['String']>;
  categorical_not_contains?: InputMaybe<Scalars['String']>;
  categorical_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  categorical_not_endsWith?: InputMaybe<Scalars['String']>;
  categorical_not_eq?: InputMaybe<Scalars['String']>;
  categorical_not_in?: InputMaybe<Array<Scalars['String']>>;
  categorical_not_startsWith?: InputMaybe<Scalars['String']>;
  categorical_startsWith?: InputMaybe<Scalars['String']>;
  scalar_containsAll?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  scalar_containsAny?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  scalar_containsNone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  scalar_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type MarketWhereInput = {
  AND?: InputMaybe<Array<MarketWhereInput>>;
  OR?: InputMaybe<Array<MarketWhereInput>>;
  authorizedAddress_contains?: InputMaybe<Scalars['String']>;
  authorizedAddress_containsInsensitive?: InputMaybe<Scalars['String']>;
  authorizedAddress_endsWith?: InputMaybe<Scalars['String']>;
  authorizedAddress_eq?: InputMaybe<Scalars['String']>;
  authorizedAddress_gt?: InputMaybe<Scalars['String']>;
  authorizedAddress_gte?: InputMaybe<Scalars['String']>;
  authorizedAddress_in?: InputMaybe<Array<Scalars['String']>>;
  authorizedAddress_isNull?: InputMaybe<Scalars['Boolean']>;
  authorizedAddress_lt?: InputMaybe<Scalars['String']>;
  authorizedAddress_lte?: InputMaybe<Scalars['String']>;
  authorizedAddress_not_contains?: InputMaybe<Scalars['String']>;
  authorizedAddress_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  authorizedAddress_not_endsWith?: InputMaybe<Scalars['String']>;
  authorizedAddress_not_eq?: InputMaybe<Scalars['String']>;
  authorizedAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  authorizedAddress_not_startsWith?: InputMaybe<Scalars['String']>;
  authorizedAddress_startsWith?: InputMaybe<Scalars['String']>;
  baseAsset_contains?: InputMaybe<Scalars['String']>;
  baseAsset_containsInsensitive?: InputMaybe<Scalars['String']>;
  baseAsset_endsWith?: InputMaybe<Scalars['String']>;
  baseAsset_eq?: InputMaybe<Scalars['String']>;
  baseAsset_gt?: InputMaybe<Scalars['String']>;
  baseAsset_gte?: InputMaybe<Scalars['String']>;
  baseAsset_in?: InputMaybe<Array<Scalars['String']>>;
  baseAsset_isNull?: InputMaybe<Scalars['Boolean']>;
  baseAsset_lt?: InputMaybe<Scalars['String']>;
  baseAsset_lte?: InputMaybe<Scalars['String']>;
  baseAsset_not_contains?: InputMaybe<Scalars['String']>;
  baseAsset_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  baseAsset_not_endsWith?: InputMaybe<Scalars['String']>;
  baseAsset_not_eq?: InputMaybe<Scalars['String']>;
  baseAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  baseAsset_not_startsWith?: InputMaybe<Scalars['String']>;
  baseAsset_startsWith?: InputMaybe<Scalars['String']>;
  bonds?: InputMaybe<MarketBondsWhereInput>;
  bonds_isNull?: InputMaybe<Scalars['Boolean']>;
  categories_isNull?: InputMaybe<Scalars['Boolean']>;
  creation_eq?: InputMaybe<MarketCreation>;
  creation_in?: InputMaybe<Array<MarketCreation>>;
  creation_isNull?: InputMaybe<Scalars['Boolean']>;
  creation_not_eq?: InputMaybe<MarketCreation>;
  creation_not_in?: InputMaybe<Array<MarketCreation>>;
  creatorFee_eq?: InputMaybe<Scalars['Int']>;
  creatorFee_gt?: InputMaybe<Scalars['Int']>;
  creatorFee_gte?: InputMaybe<Scalars['Int']>;
  creatorFee_in?: InputMaybe<Array<Scalars['Int']>>;
  creatorFee_isNull?: InputMaybe<Scalars['Boolean']>;
  creatorFee_lt?: InputMaybe<Scalars['Int']>;
  creatorFee_lte?: InputMaybe<Scalars['Int']>;
  creatorFee_not_eq?: InputMaybe<Scalars['Int']>;
  creatorFee_not_in?: InputMaybe<Array<Scalars['Int']>>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_containsInsensitive?: InputMaybe<Scalars['String']>;
  creator_endsWith?: InputMaybe<Scalars['String']>;
  creator_eq?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_isNull?: InputMaybe<Scalars['Boolean']>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  creator_not_endsWith?: InputMaybe<Scalars['String']>;
  creator_not_eq?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_startsWith?: InputMaybe<Scalars['String']>;
  creator_startsWith?: InputMaybe<Scalars['String']>;
  deadlines?: InputMaybe<MarketDeadlinesWhereInput>;
  deadlines_isNull?: InputMaybe<Scalars['Boolean']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_endsWith?: InputMaybe<Scalars['String']>;
  description_eq?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_isNull?: InputMaybe<Scalars['Boolean']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  description_not_endsWith?: InputMaybe<Scalars['String']>;
  description_not_eq?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_startsWith?: InputMaybe<Scalars['String']>;
  description_startsWith?: InputMaybe<Scalars['String']>;
  disputeMechanism_eq?: InputMaybe<DisputeMechanism>;
  disputeMechanism_in?: InputMaybe<Array<DisputeMechanism>>;
  disputeMechanism_isNull?: InputMaybe<Scalars['Boolean']>;
  disputeMechanism_not_eq?: InputMaybe<DisputeMechanism>;
  disputeMechanism_not_in?: InputMaybe<Array<DisputeMechanism>>;
  disputes_isNull?: InputMaybe<Scalars['Boolean']>;
  hasValidMetaCategories_eq?: InputMaybe<Scalars['Boolean']>;
  hasValidMetaCategories_isNull?: InputMaybe<Scalars['Boolean']>;
  hasValidMetaCategories_not_eq?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  img_contains?: InputMaybe<Scalars['String']>;
  img_containsInsensitive?: InputMaybe<Scalars['String']>;
  img_endsWith?: InputMaybe<Scalars['String']>;
  img_eq?: InputMaybe<Scalars['String']>;
  img_gt?: InputMaybe<Scalars['String']>;
  img_gte?: InputMaybe<Scalars['String']>;
  img_in?: InputMaybe<Array<Scalars['String']>>;
  img_isNull?: InputMaybe<Scalars['Boolean']>;
  img_lt?: InputMaybe<Scalars['String']>;
  img_lte?: InputMaybe<Scalars['String']>;
  img_not_contains?: InputMaybe<Scalars['String']>;
  img_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  img_not_endsWith?: InputMaybe<Scalars['String']>;
  img_not_eq?: InputMaybe<Scalars['String']>;
  img_not_in?: InputMaybe<Array<Scalars['String']>>;
  img_not_startsWith?: InputMaybe<Scalars['String']>;
  img_startsWith?: InputMaybe<Scalars['String']>;
  marketId_eq?: InputMaybe<Scalars['Int']>;
  marketId_gt?: InputMaybe<Scalars['Int']>;
  marketId_gte?: InputMaybe<Scalars['Int']>;
  marketId_in?: InputMaybe<Array<Scalars['Int']>>;
  marketId_isNull?: InputMaybe<Scalars['Boolean']>;
  marketId_lt?: InputMaybe<Scalars['Int']>;
  marketId_lte?: InputMaybe<Scalars['Int']>;
  marketId_not_eq?: InputMaybe<Scalars['Int']>;
  marketId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  marketType?: InputMaybe<MarketTypeWhereInput>;
  marketType_isNull?: InputMaybe<Scalars['Boolean']>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadata_endsWith?: InputMaybe<Scalars['String']>;
  metadata_eq?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_isNull?: InputMaybe<Scalars['Boolean']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadata_not_endsWith?: InputMaybe<Scalars['String']>;
  metadata_not_eq?: InputMaybe<Scalars['String']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_startsWith?: InputMaybe<Scalars['String']>;
  metadata_startsWith?: InputMaybe<Scalars['String']>;
  oracle_contains?: InputMaybe<Scalars['String']>;
  oracle_containsInsensitive?: InputMaybe<Scalars['String']>;
  oracle_endsWith?: InputMaybe<Scalars['String']>;
  oracle_eq?: InputMaybe<Scalars['String']>;
  oracle_gt?: InputMaybe<Scalars['String']>;
  oracle_gte?: InputMaybe<Scalars['String']>;
  oracle_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_isNull?: InputMaybe<Scalars['Boolean']>;
  oracle_lt?: InputMaybe<Scalars['String']>;
  oracle_lte?: InputMaybe<Scalars['String']>;
  oracle_not_contains?: InputMaybe<Scalars['String']>;
  oracle_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  oracle_not_endsWith?: InputMaybe<Scalars['String']>;
  oracle_not_eq?: InputMaybe<Scalars['String']>;
  oracle_not_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_not_startsWith?: InputMaybe<Scalars['String']>;
  oracle_startsWith?: InputMaybe<Scalars['String']>;
  outcomeAssets_containsAll?: InputMaybe<Array<Scalars['String']>>;
  outcomeAssets_containsAny?: InputMaybe<Array<Scalars['String']>>;
  outcomeAssets_containsNone?: InputMaybe<Array<Scalars['String']>>;
  outcomeAssets_isNull?: InputMaybe<Scalars['Boolean']>;
  period?: InputMaybe<MarketPeriodWhereInput>;
  period_isNull?: InputMaybe<Scalars['Boolean']>;
  pool?: InputMaybe<PoolWhereInput>;
  pool_isNull?: InputMaybe<Scalars['Boolean']>;
  question_contains?: InputMaybe<Scalars['String']>;
  question_containsInsensitive?: InputMaybe<Scalars['String']>;
  question_endsWith?: InputMaybe<Scalars['String']>;
  question_eq?: InputMaybe<Scalars['String']>;
  question_gt?: InputMaybe<Scalars['String']>;
  question_gte?: InputMaybe<Scalars['String']>;
  question_in?: InputMaybe<Array<Scalars['String']>>;
  question_isNull?: InputMaybe<Scalars['Boolean']>;
  question_lt?: InputMaybe<Scalars['String']>;
  question_lte?: InputMaybe<Scalars['String']>;
  question_not_contains?: InputMaybe<Scalars['String']>;
  question_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  question_not_endsWith?: InputMaybe<Scalars['String']>;
  question_not_eq?: InputMaybe<Scalars['String']>;
  question_not_in?: InputMaybe<Array<Scalars['String']>>;
  question_not_startsWith?: InputMaybe<Scalars['String']>;
  question_startsWith?: InputMaybe<Scalars['String']>;
  rejectReason_contains?: InputMaybe<Scalars['String']>;
  rejectReason_containsInsensitive?: InputMaybe<Scalars['String']>;
  rejectReason_endsWith?: InputMaybe<Scalars['String']>;
  rejectReason_eq?: InputMaybe<Scalars['String']>;
  rejectReason_gt?: InputMaybe<Scalars['String']>;
  rejectReason_gte?: InputMaybe<Scalars['String']>;
  rejectReason_in?: InputMaybe<Array<Scalars['String']>>;
  rejectReason_isNull?: InputMaybe<Scalars['Boolean']>;
  rejectReason_lt?: InputMaybe<Scalars['String']>;
  rejectReason_lte?: InputMaybe<Scalars['String']>;
  rejectReason_not_contains?: InputMaybe<Scalars['String']>;
  rejectReason_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  rejectReason_not_endsWith?: InputMaybe<Scalars['String']>;
  rejectReason_not_eq?: InputMaybe<Scalars['String']>;
  rejectReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  rejectReason_not_startsWith?: InputMaybe<Scalars['String']>;
  rejectReason_startsWith?: InputMaybe<Scalars['String']>;
  report?: InputMaybe<MarketReportWhereInput>;
  report_isNull?: InputMaybe<Scalars['Boolean']>;
  resolvedOutcome_contains?: InputMaybe<Scalars['String']>;
  resolvedOutcome_containsInsensitive?: InputMaybe<Scalars['String']>;
  resolvedOutcome_endsWith?: InputMaybe<Scalars['String']>;
  resolvedOutcome_eq?: InputMaybe<Scalars['String']>;
  resolvedOutcome_gt?: InputMaybe<Scalars['String']>;
  resolvedOutcome_gte?: InputMaybe<Scalars['String']>;
  resolvedOutcome_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedOutcome_isNull?: InputMaybe<Scalars['Boolean']>;
  resolvedOutcome_lt?: InputMaybe<Scalars['String']>;
  resolvedOutcome_lte?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_contains?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_endsWith?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_eq?: InputMaybe<Scalars['String']>;
  resolvedOutcome_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedOutcome_not_startsWith?: InputMaybe<Scalars['String']>;
  resolvedOutcome_startsWith?: InputMaybe<Scalars['String']>;
  scalarType_contains?: InputMaybe<Scalars['String']>;
  scalarType_containsInsensitive?: InputMaybe<Scalars['String']>;
  scalarType_endsWith?: InputMaybe<Scalars['String']>;
  scalarType_eq?: InputMaybe<Scalars['String']>;
  scalarType_gt?: InputMaybe<Scalars['String']>;
  scalarType_gte?: InputMaybe<Scalars['String']>;
  scalarType_in?: InputMaybe<Array<Scalars['String']>>;
  scalarType_isNull?: InputMaybe<Scalars['Boolean']>;
  scalarType_lt?: InputMaybe<Scalars['String']>;
  scalarType_lte?: InputMaybe<Scalars['String']>;
  scalarType_not_contains?: InputMaybe<Scalars['String']>;
  scalarType_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  scalarType_not_endsWith?: InputMaybe<Scalars['String']>;
  scalarType_not_eq?: InputMaybe<Scalars['String']>;
  scalarType_not_in?: InputMaybe<Array<Scalars['String']>>;
  scalarType_not_startsWith?: InputMaybe<Scalars['String']>;
  scalarType_startsWith?: InputMaybe<Scalars['String']>;
  scoringRule_eq?: InputMaybe<ScoringRule>;
  scoringRule_in?: InputMaybe<Array<ScoringRule>>;
  scoringRule_isNull?: InputMaybe<Scalars['Boolean']>;
  scoringRule_not_eq?: InputMaybe<ScoringRule>;
  scoringRule_not_in?: InputMaybe<Array<ScoringRule>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_containsInsensitive?: InputMaybe<Scalars['String']>;
  slug_endsWith?: InputMaybe<Scalars['String']>;
  slug_eq?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_isNull?: InputMaybe<Scalars['Boolean']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  slug_not_endsWith?: InputMaybe<Scalars['String']>;
  slug_not_eq?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_startsWith?: InputMaybe<Scalars['String']>;
  slug_startsWith?: InputMaybe<Scalars['String']>;
  status_eq?: InputMaybe<MarketStatus>;
  status_in?: InputMaybe<Array<MarketStatus>>;
  status_isNull?: InputMaybe<Scalars['Boolean']>;
  status_not_eq?: InputMaybe<MarketStatus>;
  status_not_in?: InputMaybe<Array<MarketStatus>>;
  tags_containsAll?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_containsAny?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_containsNone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type MarketsConnection = {
  __typename?: 'MarketsConnection';
  edges: Array<MarketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Ordering stats */
export enum OrderBy {
  LiquidityAsc = 'liquidity_ASC',
  LiquidityDesc = 'liquidity_DESC',
  ParticipantsAsc = 'participants_ASC',
  ParticipantsDesc = 'participants_DESC',
  VolumeAsc = 'volume_ASC',
  VolumeDesc = 'volume_DESC'
}

/** Market's outcome details */
export type OutcomeReport = {
  __typename?: 'OutcomeReport';
  /** Index of the categories. Null if market is scalar */
  categorical?: Maybe<Scalars['Int']>;
  /** Resultant value from the scalar range. Null if market is categorical */
  scalar?: Maybe<Scalars['BigInt']>;
};

export type OutcomeReportWhereInput = {
  categorical_eq?: InputMaybe<Scalars['Int']>;
  categorical_gt?: InputMaybe<Scalars['Int']>;
  categorical_gte?: InputMaybe<Scalars['Int']>;
  categorical_in?: InputMaybe<Array<Scalars['Int']>>;
  categorical_isNull?: InputMaybe<Scalars['Boolean']>;
  categorical_lt?: InputMaybe<Scalars['Int']>;
  categorical_lte?: InputMaybe<Scalars['Int']>;
  categorical_not_eq?: InputMaybe<Scalars['Int']>;
  categorical_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scalar_eq?: InputMaybe<Scalars['BigInt']>;
  scalar_gt?: InputMaybe<Scalars['BigInt']>;
  scalar_gte?: InputMaybe<Scalars['BigInt']>;
  scalar_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scalar_isNull?: InputMaybe<Scalars['Boolean']>;
  scalar_lt?: InputMaybe<Scalars['BigInt']>;
  scalar_lte?: InputMaybe<Scalars['BigInt']>;
  scalar_not_eq?: InputMaybe<Scalars['BigInt']>;
  scalar_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** Liquidity pool details */
export type Pool = {
  __typename?: 'Pool';
  /** Account for the pool */
  account: Account;
  /** List of assets connected to the pool */
  assets: Array<Asset>;
  /** The base asset in the market swap pool (usually a currency) */
  baseAsset: Scalars['String'];
  /** Timestamp of pool creation */
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  /** Zeitgeist's identifier for market connected to the pool */
  marketId: Scalars['Int'];
  /** Zeitgeist's identifier for pool */
  poolId: Scalars['Int'];
  /** Scoring rule used for the pool */
  scoringRule: ScoringRule;
  /** Status of the pool */
  status: PoolStatus;
  /** Fee applied to each swap */
  swapFee?: Maybe<Scalars['String']>;
  /** Subsidy gathered for the market */
  totalSubsidy?: Maybe<Scalars['String']>;
  /** Sum of `weights` */
  totalWeight: Scalars['String'];
  /** Total amount of ZTG that has moved through a market's liquidity pool */
  volume: Scalars['BigInt'];
  /** List of lengths for each asset */
  weights: Array<Weight>;
};


/** Liquidity pool details */
export type PoolAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AssetOrderByInput>>;
  where?: InputMaybe<AssetWhereInput>;
};

export type PoolEdge = {
  __typename?: 'PoolEdge';
  cursor: Scalars['String'];
  node: Pool;
};

export enum PoolOrderByInput {
  AccountAccountIdAsc = 'account_accountId_ASC',
  AccountAccountIdDesc = 'account_accountId_DESC',
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountMarketIdAsc = 'account_marketId_ASC',
  AccountMarketIdDesc = 'account_marketId_DESC',
  BaseAssetAsc = 'baseAsset_ASC',
  BaseAssetDesc = 'baseAsset_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MarketIdAsc = 'marketId_ASC',
  MarketIdDesc = 'marketId_DESC',
  PoolIdAsc = 'poolId_ASC',
  PoolIdDesc = 'poolId_DESC',
  ScoringRuleAsc = 'scoringRule_ASC',
  ScoringRuleDesc = 'scoringRule_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  SwapFeeAsc = 'swapFee_ASC',
  SwapFeeDesc = 'swapFee_DESC',
  TotalSubsidyAsc = 'totalSubsidy_ASC',
  TotalSubsidyDesc = 'totalSubsidy_DESC',
  TotalWeightAsc = 'totalWeight_ASC',
  TotalWeightDesc = 'totalWeight_DESC',
  VolumeAsc = 'volume_ASC',
  VolumeDesc = 'volume_DESC'
}

/** Pools' status options */
export enum PoolStatus {
  Active = 'Active',
  Clean = 'Clean',
  Closed = 'Closed',
  CollectingSubsidy = 'CollectingSubsidy',
  Destroyed = 'Destroyed',
  Initialized = 'Initialized'
}

export type PoolWhereInput = {
  AND?: InputMaybe<Array<PoolWhereInput>>;
  OR?: InputMaybe<Array<PoolWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']>;
  assets_every?: InputMaybe<AssetWhereInput>;
  assets_none?: InputMaybe<AssetWhereInput>;
  assets_some?: InputMaybe<AssetWhereInput>;
  baseAsset_contains?: InputMaybe<Scalars['String']>;
  baseAsset_containsInsensitive?: InputMaybe<Scalars['String']>;
  baseAsset_endsWith?: InputMaybe<Scalars['String']>;
  baseAsset_eq?: InputMaybe<Scalars['String']>;
  baseAsset_gt?: InputMaybe<Scalars['String']>;
  baseAsset_gte?: InputMaybe<Scalars['String']>;
  baseAsset_in?: InputMaybe<Array<Scalars['String']>>;
  baseAsset_isNull?: InputMaybe<Scalars['Boolean']>;
  baseAsset_lt?: InputMaybe<Scalars['String']>;
  baseAsset_lte?: InputMaybe<Scalars['String']>;
  baseAsset_not_contains?: InputMaybe<Scalars['String']>;
  baseAsset_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  baseAsset_not_endsWith?: InputMaybe<Scalars['String']>;
  baseAsset_not_eq?: InputMaybe<Scalars['String']>;
  baseAsset_not_in?: InputMaybe<Array<Scalars['String']>>;
  baseAsset_not_startsWith?: InputMaybe<Scalars['String']>;
  baseAsset_startsWith?: InputMaybe<Scalars['String']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  marketId_eq?: InputMaybe<Scalars['Int']>;
  marketId_gt?: InputMaybe<Scalars['Int']>;
  marketId_gte?: InputMaybe<Scalars['Int']>;
  marketId_in?: InputMaybe<Array<Scalars['Int']>>;
  marketId_isNull?: InputMaybe<Scalars['Boolean']>;
  marketId_lt?: InputMaybe<Scalars['Int']>;
  marketId_lte?: InputMaybe<Scalars['Int']>;
  marketId_not_eq?: InputMaybe<Scalars['Int']>;
  marketId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  poolId_eq?: InputMaybe<Scalars['Int']>;
  poolId_gt?: InputMaybe<Scalars['Int']>;
  poolId_gte?: InputMaybe<Scalars['Int']>;
  poolId_in?: InputMaybe<Array<Scalars['Int']>>;
  poolId_isNull?: InputMaybe<Scalars['Boolean']>;
  poolId_lt?: InputMaybe<Scalars['Int']>;
  poolId_lte?: InputMaybe<Scalars['Int']>;
  poolId_not_eq?: InputMaybe<Scalars['Int']>;
  poolId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scoringRule_eq?: InputMaybe<ScoringRule>;
  scoringRule_in?: InputMaybe<Array<ScoringRule>>;
  scoringRule_isNull?: InputMaybe<Scalars['Boolean']>;
  scoringRule_not_eq?: InputMaybe<ScoringRule>;
  scoringRule_not_in?: InputMaybe<Array<ScoringRule>>;
  status_eq?: InputMaybe<PoolStatus>;
  status_in?: InputMaybe<Array<PoolStatus>>;
  status_isNull?: InputMaybe<Scalars['Boolean']>;
  status_not_eq?: InputMaybe<PoolStatus>;
  status_not_in?: InputMaybe<Array<PoolStatus>>;
  swapFee_contains?: InputMaybe<Scalars['String']>;
  swapFee_containsInsensitive?: InputMaybe<Scalars['String']>;
  swapFee_endsWith?: InputMaybe<Scalars['String']>;
  swapFee_eq?: InputMaybe<Scalars['String']>;
  swapFee_gt?: InputMaybe<Scalars['String']>;
  swapFee_gte?: InputMaybe<Scalars['String']>;
  swapFee_in?: InputMaybe<Array<Scalars['String']>>;
  swapFee_isNull?: InputMaybe<Scalars['Boolean']>;
  swapFee_lt?: InputMaybe<Scalars['String']>;
  swapFee_lte?: InputMaybe<Scalars['String']>;
  swapFee_not_contains?: InputMaybe<Scalars['String']>;
  swapFee_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  swapFee_not_endsWith?: InputMaybe<Scalars['String']>;
  swapFee_not_eq?: InputMaybe<Scalars['String']>;
  swapFee_not_in?: InputMaybe<Array<Scalars['String']>>;
  swapFee_not_startsWith?: InputMaybe<Scalars['String']>;
  swapFee_startsWith?: InputMaybe<Scalars['String']>;
  totalSubsidy_contains?: InputMaybe<Scalars['String']>;
  totalSubsidy_containsInsensitive?: InputMaybe<Scalars['String']>;
  totalSubsidy_endsWith?: InputMaybe<Scalars['String']>;
  totalSubsidy_eq?: InputMaybe<Scalars['String']>;
  totalSubsidy_gt?: InputMaybe<Scalars['String']>;
  totalSubsidy_gte?: InputMaybe<Scalars['String']>;
  totalSubsidy_in?: InputMaybe<Array<Scalars['String']>>;
  totalSubsidy_isNull?: InputMaybe<Scalars['Boolean']>;
  totalSubsidy_lt?: InputMaybe<Scalars['String']>;
  totalSubsidy_lte?: InputMaybe<Scalars['String']>;
  totalSubsidy_not_contains?: InputMaybe<Scalars['String']>;
  totalSubsidy_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  totalSubsidy_not_endsWith?: InputMaybe<Scalars['String']>;
  totalSubsidy_not_eq?: InputMaybe<Scalars['String']>;
  totalSubsidy_not_in?: InputMaybe<Array<Scalars['String']>>;
  totalSubsidy_not_startsWith?: InputMaybe<Scalars['String']>;
  totalSubsidy_startsWith?: InputMaybe<Scalars['String']>;
  totalWeight_contains?: InputMaybe<Scalars['String']>;
  totalWeight_containsInsensitive?: InputMaybe<Scalars['String']>;
  totalWeight_endsWith?: InputMaybe<Scalars['String']>;
  totalWeight_eq?: InputMaybe<Scalars['String']>;
  totalWeight_gt?: InputMaybe<Scalars['String']>;
  totalWeight_gte?: InputMaybe<Scalars['String']>;
  totalWeight_in?: InputMaybe<Array<Scalars['String']>>;
  totalWeight_isNull?: InputMaybe<Scalars['Boolean']>;
  totalWeight_lt?: InputMaybe<Scalars['String']>;
  totalWeight_lte?: InputMaybe<Scalars['String']>;
  totalWeight_not_contains?: InputMaybe<Scalars['String']>;
  totalWeight_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  totalWeight_not_endsWith?: InputMaybe<Scalars['String']>;
  totalWeight_not_eq?: InputMaybe<Scalars['String']>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['String']>>;
  totalWeight_not_startsWith?: InputMaybe<Scalars['String']>;
  totalWeight_startsWith?: InputMaybe<Scalars['String']>;
  volume_eq?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_isNull?: InputMaybe<Scalars['Boolean']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not_eq?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weights_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type PoolsConnection = {
  __typename?: 'PoolsConnection';
  edges: Array<PoolEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Price = {
  __typename?: 'Price';
  assetId: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
};

export type PriceHistory = {
  __typename?: 'PriceHistory';
  prices: Array<Price>;
  timestamp: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  accountBalanceById?: Maybe<AccountBalance>;
  /** @deprecated Use accountBalanceById */
  accountBalanceByUniqueInput?: Maybe<AccountBalance>;
  accountBalances: Array<AccountBalance>;
  accountBalancesConnection: AccountBalancesConnection;
  accountById?: Maybe<Account>;
  /** @deprecated Use accountById */
  accountByUniqueInput?: Maybe<Account>;
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  assetById?: Maybe<Asset>;
  /** @deprecated Use assetById */
  assetByUniqueInput?: Maybe<Asset>;
  assets: Array<Asset>;
  assetsConnection: AssetsConnection;
  balanceInfo?: Maybe<BalanceInfo>;
  historicalAccountBalanceById?: Maybe<HistoricalAccountBalance>;
  /** @deprecated Use historicalAccountBalanceById */
  historicalAccountBalanceByUniqueInput?: Maybe<HistoricalAccountBalance>;
  historicalAccountBalances: Array<HistoricalAccountBalance>;
  historicalAccountBalancesConnection: HistoricalAccountBalancesConnection;
  historicalAssetById?: Maybe<HistoricalAsset>;
  /** @deprecated Use historicalAssetById */
  historicalAssetByUniqueInput?: Maybe<HistoricalAsset>;
  historicalAssets: Array<HistoricalAsset>;
  historicalAssetsConnection: HistoricalAssetsConnection;
  historicalMarketById?: Maybe<HistoricalMarket>;
  /** @deprecated Use historicalMarketById */
  historicalMarketByUniqueInput?: Maybe<HistoricalMarket>;
  historicalMarkets: Array<HistoricalMarket>;
  historicalMarketsConnection: HistoricalMarketsConnection;
  historicalPoolById?: Maybe<HistoricalPool>;
  /** @deprecated Use historicalPoolById */
  historicalPoolByUniqueInput?: Maybe<HistoricalPool>;
  historicalPools: Array<HistoricalPool>;
  historicalPoolsConnection: HistoricalPoolsConnection;
  historicalSwapById?: Maybe<HistoricalSwap>;
  /** @deprecated Use historicalSwapById */
  historicalSwapByUniqueInput?: Maybe<HistoricalSwap>;
  historicalSwaps: Array<HistoricalSwap>;
  historicalSwapsConnection: HistoricalSwapsConnection;
  marketById?: Maybe<Market>;
  /** @deprecated Use marketById */
  marketByUniqueInput?: Maybe<Market>;
  marketMetadata: Array<MarketMetadata>;
  marketStats: Array<MarketStats>;
  marketStatsWithOrder: Array<MarketStatsWithOrder>;
  markets: Array<Market>;
  marketsConnection: MarketsConnection;
  poolById?: Maybe<Pool>;
  /** @deprecated Use poolById */
  poolByUniqueInput?: Maybe<Pool>;
  pools: Array<Pool>;
  poolsConnection: PoolsConnection;
  priceHistory?: Maybe<Array<PriceHistory>>;
  squidStatus?: Maybe<SquidStatus>;
  stats: Array<Stats>;
};


export type QueryAccountBalanceByIdArgs = {
  id: Scalars['String'];
};


export type QueryAccountBalanceByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountBalancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountBalanceOrderByInput>>;
  where?: InputMaybe<AccountBalanceWhereInput>;
};


export type QueryAccountBalancesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AccountBalanceOrderByInput>;
  where?: InputMaybe<AccountBalanceWhereInput>;
};


export type QueryAccountByIdArgs = {
  id: Scalars['String'];
};


export type QueryAccountByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AccountOrderByInput>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAssetByIdArgs = {
  id: Scalars['String'];
};


export type QueryAssetByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AssetOrderByInput>>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AssetOrderByInput>;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBalanceInfoArgs = {
  accountId: Scalars['String'];
  assetId: AssetKindValue;
  blockNumber: Scalars['String'];
};


export type QueryHistoricalAccountBalanceByIdArgs = {
  id: Scalars['String'];
};


export type QueryHistoricalAccountBalanceByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryHistoricalAccountBalancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalAccountBalanceOrderByInput>>;
  where?: InputMaybe<HistoricalAccountBalanceWhereInput>;
};


export type QueryHistoricalAccountBalancesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<HistoricalAccountBalanceOrderByInput>;
  where?: InputMaybe<HistoricalAccountBalanceWhereInput>;
};


export type QueryHistoricalAssetByIdArgs = {
  id: Scalars['String'];
};


export type QueryHistoricalAssetByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryHistoricalAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalAssetOrderByInput>>;
  where?: InputMaybe<HistoricalAssetWhereInput>;
};


export type QueryHistoricalAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<HistoricalAssetOrderByInput>;
  where?: InputMaybe<HistoricalAssetWhereInput>;
};


export type QueryHistoricalMarketByIdArgs = {
  id: Scalars['String'];
};


export type QueryHistoricalMarketByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryHistoricalMarketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalMarketOrderByInput>>;
  where?: InputMaybe<HistoricalMarketWhereInput>;
};


export type QueryHistoricalMarketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<HistoricalMarketOrderByInput>;
  where?: InputMaybe<HistoricalMarketWhereInput>;
};


export type QueryHistoricalPoolByIdArgs = {
  id: Scalars['String'];
};


export type QueryHistoricalPoolByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryHistoricalPoolsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalPoolOrderByInput>>;
  where?: InputMaybe<HistoricalPoolWhereInput>;
};


export type QueryHistoricalPoolsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<HistoricalPoolOrderByInput>;
  where?: InputMaybe<HistoricalPoolWhereInput>;
};


export type QueryHistoricalSwapByIdArgs = {
  id: Scalars['String'];
};


export type QueryHistoricalSwapByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryHistoricalSwapsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalSwapOrderByInput>>;
  where?: InputMaybe<HistoricalSwapWhereInput>;
};


export type QueryHistoricalSwapsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<HistoricalSwapOrderByInput>;
  where?: InputMaybe<HistoricalSwapWhereInput>;
};


export type QueryMarketByIdArgs = {
  id: Scalars['String'];
};


export type QueryMarketByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMarketMetadataArgs = {
  marketId: Array<Scalars['Int']>;
};


export type QueryMarketStatsArgs = {
  marketId: Array<Scalars['Int']>;
};


export type QueryMarketStatsWithOrderArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  marketId?: InputMaybe<Array<Scalars['Int']>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrderBy>;
};


export type QueryMarketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketOrderByInput>>;
  where?: InputMaybe<MarketWhereInput>;
};


export type QueryMarketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<MarketOrderByInput>;
  where?: InputMaybe<MarketWhereInput>;
};


export type QueryPoolByIdArgs = {
  id: Scalars['String'];
};


export type QueryPoolByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryPoolsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PoolOrderByInput>>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryPoolsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<PoolOrderByInput>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryPriceHistoryArgs = {
  endTime?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<IntervalArgs>;
  marketId: Scalars['Int'];
  startTime?: InputMaybe<Scalars['String']>;
};

/** Markets' scoring rule options */
export enum ScoringRule {
  Cpmm = 'CPMM',
  Lmsr = 'Lmsr',
  Orderbook = 'Orderbook',
  RikiddoSigmoidFeeMarketEma = 'RikiddoSigmoidFeeMarketEma'
}

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']>;
};

export type Stats = {
  __typename?: 'Stats';
  totalLiquidity: Scalars['BigInt'];
  totalVolume: Scalars['BigInt'];
};

export type Subscription = {
  __typename?: 'Subscription';
  accountBalanceById?: Maybe<AccountBalance>;
  accountBalances: Array<AccountBalance>;
  accountById?: Maybe<Account>;
  accounts: Array<Account>;
  assetById?: Maybe<Asset>;
  assets: Array<Asset>;
  historicalAccountBalanceById?: Maybe<HistoricalAccountBalance>;
  historicalAccountBalances: Array<HistoricalAccountBalance>;
  historicalAssetById?: Maybe<HistoricalAsset>;
  historicalAssets: Array<HistoricalAsset>;
  historicalMarketById?: Maybe<HistoricalMarket>;
  historicalMarkets: Array<HistoricalMarket>;
  historicalPoolById?: Maybe<HistoricalPool>;
  historicalPools: Array<HistoricalPool>;
  historicalSwapById?: Maybe<HistoricalSwap>;
  historicalSwaps: Array<HistoricalSwap>;
  marketById?: Maybe<Market>;
  markets: Array<Market>;
  poolById?: Maybe<Pool>;
  pools: Array<Pool>;
};


export type SubscriptionAccountBalanceByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionAccountBalancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountBalanceOrderByInput>>;
  where?: InputMaybe<AccountBalanceWhereInput>;
};


export type SubscriptionAccountByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type SubscriptionAssetByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AssetOrderByInput>>;
  where?: InputMaybe<AssetWhereInput>;
};


export type SubscriptionHistoricalAccountBalanceByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionHistoricalAccountBalancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalAccountBalanceOrderByInput>>;
  where?: InputMaybe<HistoricalAccountBalanceWhereInput>;
};


export type SubscriptionHistoricalAssetByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionHistoricalAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalAssetOrderByInput>>;
  where?: InputMaybe<HistoricalAssetWhereInput>;
};


export type SubscriptionHistoricalMarketByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionHistoricalMarketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalMarketOrderByInput>>;
  where?: InputMaybe<HistoricalMarketWhereInput>;
};


export type SubscriptionHistoricalPoolByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionHistoricalPoolsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalPoolOrderByInput>>;
  where?: InputMaybe<HistoricalPoolWhereInput>;
};


export type SubscriptionHistoricalSwapByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionHistoricalSwapsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HistoricalSwapOrderByInput>>;
  where?: InputMaybe<HistoricalSwapWhereInput>;
};


export type SubscriptionMarketByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionMarketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MarketOrderByInput>>;
  where?: InputMaybe<MarketWhereInput>;
};


export type SubscriptionPoolByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionPoolsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PoolOrderByInput>>;
  where?: InputMaybe<PoolWhereInput>;
};

/** Unit for the interval */
export enum Unit {
  Day = 'Day',
  Hour = 'Hour',
  Minute = 'Minute',
  Second = 'Second'
}

/** Asset weightage details */
export type Weight = {
  __typename?: 'Weight';
  /** Zeitgeist's identifier for asset */
  assetId: Scalars['String'];
  /** Weight of the asset */
  weight: Scalars['BigInt'];
};

export type WhereIdInput = {
  id: Scalars['String'];
};

export type AccountBalancesQueryVariables = Exact<{
  where?: InputMaybe<AccountBalanceWhereInput>;
  order?: InputMaybe<Array<AccountBalanceOrderByInput> | AccountBalanceOrderByInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type AccountBalancesQuery = { __typename?: 'Query', accountBalances: Array<{ __typename?: 'AccountBalance', assetId: string, balance: any, id: string, account: { __typename?: 'Account', accountId: string, id: string, marketId?: number | null } }> };

export type FullAccountBalanceFragment = { __typename?: 'AccountBalance', assetId: string, balance: any, id: string, account: { __typename?: 'Account', accountId: string, id: string, marketId?: number | null } };

export type AssetsQueryVariables = Exact<{
  where?: InputMaybe<AssetWhereInput>;
  order?: InputMaybe<Array<AssetOrderByInput> | AssetOrderByInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type AssetsQuery = { __typename?: 'Query', assets: Array<{ __typename?: 'Asset', id: string, assetId: string, amountInPool: any, price: number, pool: { __typename?: 'Pool', baseAsset: string, createdAt: any, id: string, marketId: number, poolId: number, status: PoolStatus, swapFee?: string | null, totalSubsidy?: string | null, totalWeight: string, volume: any, account: { __typename?: 'Account', accountId: string, balances: Array<{ __typename?: 'AccountBalance', assetId: string, balance: any }> }, assets: Array<{ __typename?: 'Asset', amountInPool: any, assetId: string, id: string, price: number }>, weights: Array<{ __typename?: 'Weight', assetId: string, weight: any }> } }> };

export type FullAssetFragment = { __typename?: 'Asset', id: string, assetId: string, amountInPool: any, price: number, pool: { __typename?: 'Pool', baseAsset: string, createdAt: any, id: string, marketId: number, poolId: number, status: PoolStatus, swapFee?: string | null, totalSubsidy?: string | null, totalWeight: string, volume: any, account: { __typename?: 'Account', accountId: string, balances: Array<{ __typename?: 'AccountBalance', assetId: string, balance: any }> }, assets: Array<{ __typename?: 'Asset', amountInPool: any, assetId: string, id: string, price: number }>, weights: Array<{ __typename?: 'Weight', assetId: string, weight: any }> } };

export type HistoricalAccountBalancesQueryVariables = Exact<{
  where?: InputMaybe<HistoricalAccountBalanceWhereInput>;
  order?: InputMaybe<Array<HistoricalAccountBalanceOrderByInput> | HistoricalAccountBalanceOrderByInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type HistoricalAccountBalancesQuery = { __typename?: 'Query', historicalAccountBalances: Array<{ __typename?: 'HistoricalAccountBalance', accountId: string, assetId: string, blockNumber: number, dBalance: any, event: string, id: string, extrinsic?: { __typename?: 'Extrinsic', hash: string, name: string } | null }> };

export type FullHistoricalAccountBalanceFragment = { __typename?: 'HistoricalAccountBalance', accountId: string, assetId: string, blockNumber: number, dBalance: any, event: string, id: string, extrinsic?: { __typename?: 'Extrinsic', hash: string, name: string } | null };

export type HistoricalAssetsQueryVariables = Exact<{
  where?: InputMaybe<HistoricalAssetWhereInput>;
  order?: InputMaybe<Array<HistoricalAssetOrderByInput> | HistoricalAssetOrderByInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type HistoricalAssetsQuery = { __typename?: 'Query', historicalAssets: Array<{ __typename?: 'HistoricalAsset', accountId?: string | null, assetId: string, baseAssetTraded?: any | null, blockNumber: number, dAmountInPool?: any | null, dPrice?: number | null, event: string, id: string, newAmountInPool?: any | null, newPrice?: number | null, timestamp: any }> };

export type FullHistoricalAssetsFragment = { __typename?: 'HistoricalAsset', accountId?: string | null, assetId: string, baseAssetTraded?: any | null, blockNumber: number, dAmountInPool?: any | null, dPrice?: number | null, event: string, id: string, newAmountInPool?: any | null, newPrice?: number | null, timestamp: any };

export type HistoricalSwapsQueryVariables = Exact<{
  where?: InputMaybe<HistoricalSwapWhereInput>;
  order?: InputMaybe<Array<HistoricalSwapOrderByInput> | HistoricalSwapOrderByInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type HistoricalSwapsQuery = { __typename?: 'Query', historicalSwaps: Array<{ __typename?: 'HistoricalSwap', id: string, event: string, blockNumber: number, timestamp: any, accountId: string, assetAmountIn: any, assetAmountOut: any, assetIn: string, assetOut: string, extrinsic?: { __typename?: 'Extrinsic', hash: string, name: string } | null }> };

export type FullHistoricalSwapFragment = { __typename?: 'HistoricalSwap', id: string, event: string, blockNumber: number, timestamp: any, accountId: string, assetAmountIn: any, assetAmountOut: any, assetIn: string, assetOut: string, extrinsic?: { __typename?: 'Extrinsic', hash: string, name: string } | null };

export type MarketMetadataQueryVariables = Exact<{
  marketId: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type MarketMetadataQuery = { __typename?: 'Query', marketMetadata: Array<{ __typename?: 'MarketMetadata', decoded?: string | null, encoded: string, marketId: number }> };

export type FullMarketMetadataFragment = { __typename?: 'MarketMetadata', decoded?: string | null, encoded: string, marketId: number };

export type MarketStatsQueryVariables = Exact<{
  ids: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type MarketStatsQuery = { __typename?: 'Query', marketStats: Array<{ __typename?: 'MarketStats', liquidity: any, marketId: number, participants: number }> };

export type MarketsQueryVariables = Exact<{
  where?: InputMaybe<MarketWhereInput>;
  order?: InputMaybe<Array<MarketOrderByInput> | MarketOrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type MarketsQuery = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', authorizedAddress?: string | null, baseAsset: string, creation: MarketCreation, creator: string, creatorFee?: number | null, description?: string | null, disputeMechanism: DisputeMechanism, id: string, img?: string | null, marketId: number, metadata: string, hasValidMetaCategories: boolean, oracle: string, outcomeAssets: Array<string>, question?: string | null, rejectReason?: string | null, resolvedOutcome?: string | null, scalarType?: string | null, scoringRule: ScoringRule, slug?: string | null, status: MarketStatus, tags?: Array<string | null> | null, bonds?: { __typename?: 'MarketBonds', creation: { __typename?: 'MarketBond', isSettled: boolean, value: any, who: string }, oracle: { __typename?: 'MarketBond', isSettled: boolean, value: any, who: string } } | null, categories?: Array<{ __typename?: 'CategoryMetadata', color?: string | null, img?: string | null, name?: string | null, ticker?: string | null }> | null, deadlines?: { __typename?: 'MarketDeadlines', disputeDuration: any, gracePeriod: any, oracleDuration: any } | null, disputes?: Array<{ __typename?: 'MarketReport', at?: number | null, by?: string | null, outcome?: { __typename?: 'OutcomeReport', categorical?: number | null, scalar?: any | null } | null } | null> | null, marketType: { __typename?: 'MarketType', categorical?: string | null, scalar?: Array<string | null> | null }, period: { __typename?: 'MarketPeriod', block?: Array<any | null> | null, end: any, start: any, timestamp?: Array<any | null> | null }, pool?: { __typename?: 'Pool', baseAsset: string, createdAt: any, id: string, marketId: number, poolId: number, status: PoolStatus, swapFee?: string | null, totalSubsidy?: string | null, totalWeight: string, volume: any, account: { __typename?: 'Account', accountId: string, balances: Array<{ __typename?: 'AccountBalance', assetId: string, balance: any }> }, assets: Array<{ __typename?: 'Asset', amountInPool: any, assetId: string, id: string, price: number }>, weights: Array<{ __typename?: 'Weight', assetId: string, weight: any }> } | null, report?: { __typename?: 'MarketReport', at?: number | null, by?: string | null, outcome?: { __typename?: 'OutcomeReport', categorical?: number | null, scalar?: any | null } | null } | null }> };

export type MarketStatusCountQueryVariables = Exact<{
  status: MarketStatus;
}>;


export type MarketStatusCountQuery = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', id: string }> };

export type FullMarketFragment = { __typename?: 'Market', authorizedAddress?: string | null, baseAsset: string, creation: MarketCreation, creator: string, creatorFee?: number | null, description?: string | null, disputeMechanism: DisputeMechanism, id: string, img?: string | null, marketId: number, metadata: string, hasValidMetaCategories: boolean, oracle: string, outcomeAssets: Array<string>, question?: string | null, rejectReason?: string | null, resolvedOutcome?: string | null, scalarType?: string | null, scoringRule: ScoringRule, slug?: string | null, status: MarketStatus, tags?: Array<string | null> | null, bonds?: { __typename?: 'MarketBonds', creation: { __typename?: 'MarketBond', isSettled: boolean, value: any, who: string }, oracle: { __typename?: 'MarketBond', isSettled: boolean, value: any, who: string } } | null, categories?: Array<{ __typename?: 'CategoryMetadata', color?: string | null, img?: string | null, name?: string | null, ticker?: string | null }> | null, deadlines?: { __typename?: 'MarketDeadlines', disputeDuration: any, gracePeriod: any, oracleDuration: any } | null, disputes?: Array<{ __typename?: 'MarketReport', at?: number | null, by?: string | null, outcome?: { __typename?: 'OutcomeReport', categorical?: number | null, scalar?: any | null } | null } | null> | null, marketType: { __typename?: 'MarketType', categorical?: string | null, scalar?: Array<string | null> | null }, period: { __typename?: 'MarketPeriod', block?: Array<any | null> | null, end: any, start: any, timestamp?: Array<any | null> | null }, pool?: { __typename?: 'Pool', baseAsset: string, createdAt: any, id: string, marketId: number, poolId: number, status: PoolStatus, swapFee?: string | null, totalSubsidy?: string | null, totalWeight: string, volume: any, account: { __typename?: 'Account', accountId: string, balances: Array<{ __typename?: 'AccountBalance', assetId: string, balance: any }> }, assets: Array<{ __typename?: 'Asset', amountInPool: any, assetId: string, id: string, price: number }>, weights: Array<{ __typename?: 'Weight', assetId: string, weight: any }> } | null, report?: { __typename?: 'MarketReport', at?: number | null, by?: string | null, outcome?: { __typename?: 'OutcomeReport', categorical?: number | null, scalar?: any | null } | null } | null };

export type HistoricalMarketsQueryVariables = Exact<{
  where?: InputMaybe<HistoricalMarketWhereInput>;
  order?: InputMaybe<Array<HistoricalMarketOrderByInput> | HistoricalMarketOrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type HistoricalMarketsQuery = { __typename?: 'Query', historicalMarkets: Array<{ __typename?: 'HistoricalMarket', blockNumber: number, event: MarketEvent, id: string, resolvedOutcome?: string | null, status: MarketStatus, timestamp: any, market: { __typename?: 'Market', marketId: number } }> };

export type PingQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQueryQuery = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', id: string }> };

export type PoolsQueryVariables = Exact<{
  where?: InputMaybe<PoolWhereInput>;
  order?: InputMaybe<Array<PoolOrderByInput> | PoolOrderByInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type PoolsQuery = { __typename?: 'Query', pools: Array<{ __typename?: 'Pool', baseAsset: string, createdAt: any, id: string, marketId: number, poolId: number, status: PoolStatus, swapFee?: string | null, totalSubsidy?: string | null, totalWeight: string, volume: any, account: { __typename?: 'Account', accountId: string, balances: Array<{ __typename?: 'AccountBalance', assetId: string, balance: any }> }, assets: Array<{ __typename?: 'Asset', amountInPool: any, assetId: string, id: string, price: number }>, weights: Array<{ __typename?: 'Weight', assetId: string, weight: any }> }> };

export type FullPoolFragment = { __typename?: 'Pool', baseAsset: string, createdAt: any, id: string, marketId: number, poolId: number, status: PoolStatus, swapFee?: string | null, totalSubsidy?: string | null, totalWeight: string, volume: any, account: { __typename?: 'Account', accountId: string, balances: Array<{ __typename?: 'AccountBalance', assetId: string, balance: any }> }, assets: Array<{ __typename?: 'Asset', amountInPool: any, assetId: string, id: string, price: number }>, weights: Array<{ __typename?: 'Weight', assetId: string, weight: any }> };

export type HistoricalPoolsQueryVariables = Exact<{
  where?: InputMaybe<HistoricalPoolWhereInput>;
  order?: InputMaybe<Array<HistoricalPoolOrderByInput> | HistoricalPoolOrderByInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type HistoricalPoolsQuery = { __typename?: 'Query', historicalPools: Array<{ __typename?: 'HistoricalPool', blockNumber: number, dVolume?: any | null, event: string, id: string, poolId: number, status: PoolStatus, timestamp: any, volume?: any | null }> };

export type SquidStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type SquidStatusQuery = { __typename?: 'Query', squidStatus?: { __typename?: 'SquidStatus', height?: number | null } | null };

export type StatsQueryVariables = Exact<{ [key: string]: never; }>;


export type StatsQuery = { __typename?: 'Query', stats: Array<{ __typename?: 'Stats', totalLiquidity: any, totalVolume: any }> };

export const FullAccountBalanceFragmentDoc = gql`
    fragment FullAccountBalance on AccountBalance {
  account {
    accountId
    id
    marketId
  }
  assetId
  balance
  id
}
    `;
export const FullPoolFragmentDoc = gql`
    fragment FullPool on Pool {
  account {
    accountId
    balances {
      assetId
      balance
    }
  }
  assets {
    amountInPool
    assetId
    id
    price
  }
  baseAsset
  createdAt
  id
  marketId
  poolId
  status
  swapFee
  totalSubsidy
  totalWeight
  volume
  weights {
    assetId
    weight
  }
}
    `;
export const FullAssetFragmentDoc = gql`
    fragment FullAsset on Asset {
  id
  assetId
  amountInPool
  price
  pool {
    ...FullPool
  }
}
    ${FullPoolFragmentDoc}`;
export const FullHistoricalAccountBalanceFragmentDoc = gql`
    fragment FullHistoricalAccountBalance on HistoricalAccountBalance {
  accountId
  assetId
  blockNumber
  dBalance
  event
  id
  extrinsic {
    hash
    name
  }
}
    `;
export const FullHistoricalAssetsFragmentDoc = gql`
    fragment FullHistoricalAssets on HistoricalAsset {
  accountId
  assetId
  baseAssetTraded
  blockNumber
  dAmountInPool
  dPrice
  event
  id
  newAmountInPool
  newPrice
  timestamp
}
    `;
export const FullHistoricalSwapFragmentDoc = gql`
    fragment FullHistoricalSwap on HistoricalSwap {
  id
  event
  blockNumber
  timestamp
  accountId
  assetAmountIn
  assetAmountOut
  assetIn
  assetOut
  extrinsic {
    hash
    name
  }
}
    `;
export const FullMarketMetadataFragmentDoc = gql`
    fragment FullMarketMetadata on MarketMetadata {
  decoded
  encoded
  marketId
}
    `;
export const FullMarketFragmentDoc = gql`
    fragment FullMarket on Market {
  authorizedAddress
  baseAsset
  bonds {
    creation {
      isSettled
      value
      who
    }
    oracle {
      isSettled
      value
      who
    }
  }
  categories {
    color
    img
    name
    ticker
  }
  creation
  creator
  creatorFee
  deadlines {
    disputeDuration
    gracePeriod
    oracleDuration
  }
  description
  disputeMechanism
  disputes {
    at
    by
    outcome {
      categorical
      scalar
    }
  }
  id
  img
  marketId
  marketType {
    categorical
    scalar
  }
  metadata
  hasValidMetaCategories
  oracle
  outcomeAssets
  period {
    block
    end
    start
    timestamp
  }
  pool {
    ...FullPool
  }
  question
  rejectReason
  report {
    at
    by
    outcome {
      categorical
      scalar
    }
  }
  resolvedOutcome
  scalarType
  scoringRule
  slug
  status
  tags
}
    ${FullPoolFragmentDoc}`;
export const AccountBalancesDocument = gql`
    query accountBalances($where: AccountBalanceWhereInput, $order: [AccountBalanceOrderByInput!], $offset: Int, $limit: Int) {
  accountBalances(where: $where, orderBy: $order, offset: $offset, limit: $limit) {
    ...FullAccountBalance
  }
}
    ${FullAccountBalanceFragmentDoc}`;
export const AssetsDocument = gql`
    query assets($where: AssetWhereInput, $order: [AssetOrderByInput!], $offset: Int, $limit: Int) {
  assets(where: $where, orderBy: $order, offset: $offset, limit: $limit) {
    ...FullAsset
  }
}
    ${FullAssetFragmentDoc}`;
export const HistoricalAccountBalancesDocument = gql`
    query historicalAccountBalances($where: HistoricalAccountBalanceWhereInput, $order: [HistoricalAccountBalanceOrderByInput!], $offset: Int, $limit: Int) {
  historicalAccountBalances(
    where: $where
    orderBy: $order
    offset: $offset
    limit: $limit
  ) {
    ...FullHistoricalAccountBalance
  }
}
    ${FullHistoricalAccountBalanceFragmentDoc}`;
export const HistoricalAssetsDocument = gql`
    query historicalAssets($where: HistoricalAssetWhereInput, $order: [HistoricalAssetOrderByInput!], $offset: Int, $limit: Int) {
  historicalAssets(where: $where, orderBy: $order, offset: $offset, limit: $limit) {
    ...FullHistoricalAssets
  }
}
    ${FullHistoricalAssetsFragmentDoc}`;
export const HistoricalSwapsDocument = gql`
    query historicalSwaps($where: HistoricalSwapWhereInput, $order: [HistoricalSwapOrderByInput!], $offset: Int, $limit: Int) {
  historicalSwaps(where: $where, orderBy: $order, offset: $offset, limit: $limit) {
    ...FullHistoricalSwap
  }
}
    ${FullHistoricalSwapFragmentDoc}`;
export const MarketMetadataDocument = gql`
    query marketMetadata($marketId: [Int!]!) {
  marketMetadata(marketId: $marketId) {
    ...FullMarketMetadata
  }
}
    ${FullMarketMetadataFragmentDoc}`;
export const MarketStatsDocument = gql`
    query marketStats($ids: [Int!]!) {
  marketStats(marketId: $ids) {
    liquidity
    marketId
    participants
  }
}
    `;
export const MarketsDocument = gql`
    query markets($where: MarketWhereInput, $order: [MarketOrderByInput!], $limit: Int, $offset: Int) {
  markets(where: $where, limit: $limit, offset: $offset, orderBy: $order) {
    ...FullMarket
  }
}
    ${FullMarketFragmentDoc}`;
export const MarketStatusCountDocument = gql`
    query marketStatusCount($status: MarketStatus!) {
  markets(where: {status_eq: $status}) {
    id
  }
}
    `;
export const HistoricalMarketsDocument = gql`
    query historicalMarkets($where: HistoricalMarketWhereInput, $order: [HistoricalMarketOrderByInput!], $limit: Int, $offset: Int) {
  historicalMarkets(
    where: $where
    limit: $limit
    offset: $offset
    orderBy: $order
  ) {
    blockNumber
    event
    id
    market {
      marketId
    }
    resolvedOutcome
    status
    timestamp
  }
}
    `;
export const PingQueryDocument = gql`
    query pingQuery {
  markets(limit: 1) {
    id
  }
}
    `;
export const PoolsDocument = gql`
    query pools($where: PoolWhereInput, $order: [PoolOrderByInput!], $offset: Int, $limit: Int) {
  pools(where: $where, orderBy: $order, offset: $offset, limit: $limit) {
    ...FullPool
  }
}
    ${FullPoolFragmentDoc}`;
export const HistoricalPoolsDocument = gql`
    query historicalPools($where: HistoricalPoolWhereInput, $order: [HistoricalPoolOrderByInput!], $offset: Int, $limit: Int) {
  historicalPools {
    blockNumber
    dVolume
    event
    id
    poolId
    status
    timestamp
    volume
  }
}
    `;
export const SquidStatusDocument = gql`
    query squidStatus {
  squidStatus {
    height
  }
}
    `;
export const StatsDocument = gql`
    query stats {
  stats {
    totalLiquidity
    totalVolume
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    accountBalances(variables?: AccountBalancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AccountBalancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AccountBalancesQuery>(AccountBalancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'accountBalances', 'query');
    },
    assets(variables?: AssetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AssetsQuery>(AssetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'assets', 'query');
    },
    historicalAccountBalances(variables?: HistoricalAccountBalancesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HistoricalAccountBalancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HistoricalAccountBalancesQuery>(HistoricalAccountBalancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'historicalAccountBalances', 'query');
    },
    historicalAssets(variables?: HistoricalAssetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HistoricalAssetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HistoricalAssetsQuery>(HistoricalAssetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'historicalAssets', 'query');
    },
    historicalSwaps(variables?: HistoricalSwapsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HistoricalSwapsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HistoricalSwapsQuery>(HistoricalSwapsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'historicalSwaps', 'query');
    },
    marketMetadata(variables: MarketMetadataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketMetadataQuery>(MarketMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'marketMetadata', 'query');
    },
    marketStats(variables: MarketStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketStatsQuery>(MarketStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'marketStats', 'query');
    },
    markets(variables?: MarketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketsQuery>(MarketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markets', 'query');
    },
    marketStatusCount(variables: MarketStatusCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketStatusCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketStatusCountQuery>(MarketStatusCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'marketStatusCount', 'query');
    },
    historicalMarkets(variables?: HistoricalMarketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HistoricalMarketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HistoricalMarketsQuery>(HistoricalMarketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'historicalMarkets', 'query');
    },
    pingQuery(variables?: PingQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PingQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PingQueryQuery>(PingQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pingQuery', 'query');
    },
    pools(variables?: PoolsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PoolsQuery>(PoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pools', 'query');
    },
    historicalPools(variables?: HistoricalPoolsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HistoricalPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HistoricalPoolsQuery>(HistoricalPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'historicalPools', 'query');
    },
    squidStatus(variables?: SquidStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SquidStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SquidStatusQuery>(SquidStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'squidStatus', 'query');
    },
    stats(variables?: StatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StatsQuery>(StatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'stats', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;