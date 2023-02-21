[sdk-v2](../README.md) / [Modules](../modules.md) / @zeitgeistpm/indexer

# Module: @zeitgeistpm/indexer

## Table of contents

### Enumerations

- [AccountBalanceOrderByInput](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md)
- [AccountOrderByInput](../enums/zeitgeistpm_indexer.AccountOrderByInput.md)
- [AssetOrderByInput](../enums/zeitgeistpm_indexer.AssetOrderByInput.md)
- [HistoricalAccountBalanceOrderByInput](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md)
- [HistoricalAssetOrderByInput](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md)
- [HistoricalMarketOrderByInput](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md)
- [HistoricalPoolOrderByInput](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md)
- [MarketOrderByInput](../enums/zeitgeistpm_indexer.MarketOrderByInput.md)
- [MarketStatus](../enums/zeitgeistpm_indexer.MarketStatus.md)
- [PoolOrderByInput](../enums/zeitgeistpm_indexer.PoolOrderByInput.md)

### Type Aliases

- [Account](zeitgeistpm_indexer.md#account)
- [AccountBalance](zeitgeistpm_indexer.md#accountbalance)
- [AccountBalanceEdge](zeitgeistpm_indexer.md#accountbalanceedge)
- [AccountBalanceWhereInput](zeitgeistpm_indexer.md#accountbalancewhereinput)
- [AccountBalancesConnection](zeitgeistpm_indexer.md#accountbalancesconnection)
- [AccountBalancesQuery](zeitgeistpm_indexer.md#accountbalancesquery)
- [AccountBalancesQueryVariables](zeitgeistpm_indexer.md#accountbalancesqueryvariables)
- [AccountEdge](zeitgeistpm_indexer.md#accountedge)
- [AccountWhereInput](zeitgeistpm_indexer.md#accountwhereinput)
- [AccountsConnection](zeitgeistpm_indexer.md#accountsconnection)
- [Asset](zeitgeistpm_indexer.md#asset)
- [AssetEdge](zeitgeistpm_indexer.md#assetedge)
- [AssetWhereInput](zeitgeistpm_indexer.md#assetwhereinput)
- [AssetsConnection](zeitgeistpm_indexer.md#assetsconnection)
- [AssetsQuery](zeitgeistpm_indexer.md#assetsquery)
- [AssetsQueryVariables](zeitgeistpm_indexer.md#assetsqueryvariables)
- [CategoryMetadata](zeitgeistpm_indexer.md#categorymetadata)
- [Config](zeitgeistpm_indexer.md#config)
- [Exact](zeitgeistpm_indexer.md#exact)
- [FullAccountBalanceFragment](zeitgeistpm_indexer.md#fullaccountbalancefragment)
- [FullAssetFragment](zeitgeistpm_indexer.md#fullassetfragment)
- [FullHistoricalAccountBalanceFragment](zeitgeistpm_indexer.md#fullhistoricalaccountbalancefragment)
- [FullHistoricalAssetsFragment](zeitgeistpm_indexer.md#fullhistoricalassetsfragment)
- [FullMarketFragment](zeitgeistpm_indexer.md#fullmarketfragment)
- [FullPoolFragment](zeitgeistpm_indexer.md#fullpoolfragment)
- [GQLSdk](zeitgeistpm_indexer.md#gqlsdk)
- [HistoricalAccountBalance](zeitgeistpm_indexer.md#historicalaccountbalance)
- [HistoricalAccountBalanceEdge](zeitgeistpm_indexer.md#historicalaccountbalanceedge)
- [HistoricalAccountBalanceWhereInput](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)
- [HistoricalAccountBalancesConnection](zeitgeistpm_indexer.md#historicalaccountbalancesconnection)
- [HistoricalAccountBalancesQuery](zeitgeistpm_indexer.md#historicalaccountbalancesquery)
- [HistoricalAccountBalancesQueryVariables](zeitgeistpm_indexer.md#historicalaccountbalancesqueryvariables)
- [HistoricalAsset](zeitgeistpm_indexer.md#historicalasset)
- [HistoricalAssetEdge](zeitgeistpm_indexer.md#historicalassetedge)
- [HistoricalAssetWhereInput](zeitgeistpm_indexer.md#historicalassetwhereinput)
- [HistoricalAssetsConnection](zeitgeistpm_indexer.md#historicalassetsconnection)
- [HistoricalAssetsQuery](zeitgeistpm_indexer.md#historicalassetsquery)
- [HistoricalAssetsQueryVariables](zeitgeistpm_indexer.md#historicalassetsqueryvariables)
- [HistoricalMarket](zeitgeistpm_indexer.md#historicalmarket)
- [HistoricalMarketEdge](zeitgeistpm_indexer.md#historicalmarketedge)
- [HistoricalMarketWhereInput](zeitgeistpm_indexer.md#historicalmarketwhereinput)
- [HistoricalMarketsConnection](zeitgeistpm_indexer.md#historicalmarketsconnection)
- [HistoricalMarketsQuery](zeitgeistpm_indexer.md#historicalmarketsquery)
- [HistoricalMarketsQueryVariables](zeitgeistpm_indexer.md#historicalmarketsqueryvariables)
- [HistoricalPool](zeitgeistpm_indexer.md#historicalpool)
- [HistoricalPoolEdge](zeitgeistpm_indexer.md#historicalpooledge)
- [HistoricalPoolWhereInput](zeitgeistpm_indexer.md#historicalpoolwhereinput)
- [HistoricalPoolsConnection](zeitgeistpm_indexer.md#historicalpoolsconnection)
- [HistoricalPoolsQuery](zeitgeistpm_indexer.md#historicalpoolsquery)
- [HistoricalPoolsQueryVariables](zeitgeistpm_indexer.md#historicalpoolsqueryvariables)
- [InputMaybe](zeitgeistpm_indexer.md#inputmaybe)
- [MakeMaybe](zeitgeistpm_indexer.md#makemaybe)
- [MakeOptional](zeitgeistpm_indexer.md#makeoptional)
- [Market](zeitgeistpm_indexer.md#market)
- [MarketBond](zeitgeistpm_indexer.md#marketbond)
- [MarketBondWhereInput](zeitgeistpm_indexer.md#marketbondwhereinput)
- [MarketBonds](zeitgeistpm_indexer.md#marketbonds)
- [MarketBondsWhereInput](zeitgeistpm_indexer.md#marketbondswhereinput)
- [MarketDeadlines](zeitgeistpm_indexer.md#marketdeadlines)
- [MarketDeadlinesWhereInput](zeitgeistpm_indexer.md#marketdeadlineswhereinput)
- [MarketEdge](zeitgeistpm_indexer.md#marketedge)
- [MarketPeriod](zeitgeistpm_indexer.md#marketperiod)
- [MarketPeriodWhereInput](zeitgeistpm_indexer.md#marketperiodwhereinput)
- [MarketReport](zeitgeistpm_indexer.md#marketreport)
- [MarketReportWhereInput](zeitgeistpm_indexer.md#marketreportwhereinput)
- [MarketStats](zeitgeistpm_indexer.md#marketstats)
- [MarketStatusCountQuery](zeitgeistpm_indexer.md#marketstatuscountquery)
- [MarketStatusCountQueryVariables](zeitgeistpm_indexer.md#marketstatuscountqueryvariables)
- [MarketType](zeitgeistpm_indexer.md#markettype)
- [MarketTypeWhereInput](zeitgeistpm_indexer.md#markettypewhereinput)
- [MarketWhereInput](zeitgeistpm_indexer.md#marketwhereinput)
- [MarketsConnection](zeitgeistpm_indexer.md#marketsconnection)
- [MarketsQuery](zeitgeistpm_indexer.md#marketsquery)
- [MarketsQueryVariables](zeitgeistpm_indexer.md#marketsqueryvariables)
- [Maybe](zeitgeistpm_indexer.md#maybe)
- [OutcomeReport](zeitgeistpm_indexer.md#outcomereport)
- [OutcomeReportWhereInput](zeitgeistpm_indexer.md#outcomereportwhereinput)
- [PageInfo](zeitgeistpm_indexer.md#pageinfo)
- [PingQueryQuery](zeitgeistpm_indexer.md#pingqueryquery)
- [PingQueryQueryVariables](zeitgeistpm_indexer.md#pingqueryqueryvariables)
- [Pool](zeitgeistpm_indexer.md#pool)
- [PoolEdge](zeitgeistpm_indexer.md#pooledge)
- [PoolWhereInput](zeitgeistpm_indexer.md#poolwhereinput)
- [PoolsConnection](zeitgeistpm_indexer.md#poolsconnection)
- [PoolsQuery](zeitgeistpm_indexer.md#poolsquery)
- [PoolsQueryVariables](zeitgeistpm_indexer.md#poolsqueryvariables)
- [Query](zeitgeistpm_indexer.md#query)
- [QueryAccountBalanceByIdArgs](zeitgeistpm_indexer.md#queryaccountbalancebyidargs)
- [QueryAccountBalanceByUniqueInputArgs](zeitgeistpm_indexer.md#queryaccountbalancebyuniqueinputargs)
- [QueryAccountBalancesArgs](zeitgeistpm_indexer.md#queryaccountbalancesargs)
- [QueryAccountBalancesConnectionArgs](zeitgeistpm_indexer.md#queryaccountbalancesconnectionargs)
- [QueryAccountByIdArgs](zeitgeistpm_indexer.md#queryaccountbyidargs)
- [QueryAccountByUniqueInputArgs](zeitgeistpm_indexer.md#queryaccountbyuniqueinputargs)
- [QueryAccountsArgs](zeitgeistpm_indexer.md#queryaccountsargs)
- [QueryAccountsConnectionArgs](zeitgeistpm_indexer.md#queryaccountsconnectionargs)
- [QueryAssetByIdArgs](zeitgeistpm_indexer.md#queryassetbyidargs)
- [QueryAssetByUniqueInputArgs](zeitgeistpm_indexer.md#queryassetbyuniqueinputargs)
- [QueryAssetsArgs](zeitgeistpm_indexer.md#queryassetsargs)
- [QueryAssetsConnectionArgs](zeitgeistpm_indexer.md#queryassetsconnectionargs)
- [QueryHistoricalAccountBalanceByIdArgs](zeitgeistpm_indexer.md#queryhistoricalaccountbalancebyidargs)
- [QueryHistoricalAccountBalanceByUniqueInputArgs](zeitgeistpm_indexer.md#queryhistoricalaccountbalancebyuniqueinputargs)
- [QueryHistoricalAccountBalancesArgs](zeitgeistpm_indexer.md#queryhistoricalaccountbalancesargs)
- [QueryHistoricalAccountBalancesConnectionArgs](zeitgeistpm_indexer.md#queryhistoricalaccountbalancesconnectionargs)
- [QueryHistoricalAssetByIdArgs](zeitgeistpm_indexer.md#queryhistoricalassetbyidargs)
- [QueryHistoricalAssetByUniqueInputArgs](zeitgeistpm_indexer.md#queryhistoricalassetbyuniqueinputargs)
- [QueryHistoricalAssetsArgs](zeitgeistpm_indexer.md#queryhistoricalassetsargs)
- [QueryHistoricalAssetsConnectionArgs](zeitgeistpm_indexer.md#queryhistoricalassetsconnectionargs)
- [QueryHistoricalMarketByIdArgs](zeitgeistpm_indexer.md#queryhistoricalmarketbyidargs)
- [QueryHistoricalMarketByUniqueInputArgs](zeitgeistpm_indexer.md#queryhistoricalmarketbyuniqueinputargs)
- [QueryHistoricalMarketsArgs](zeitgeistpm_indexer.md#queryhistoricalmarketsargs)
- [QueryHistoricalMarketsConnectionArgs](zeitgeistpm_indexer.md#queryhistoricalmarketsconnectionargs)
- [QueryHistoricalPoolByIdArgs](zeitgeistpm_indexer.md#queryhistoricalpoolbyidargs)
- [QueryHistoricalPoolByUniqueInputArgs](zeitgeistpm_indexer.md#queryhistoricalpoolbyuniqueinputargs)
- [QueryHistoricalPoolsArgs](zeitgeistpm_indexer.md#queryhistoricalpoolsargs)
- [QueryHistoricalPoolsConnectionArgs](zeitgeistpm_indexer.md#queryhistoricalpoolsconnectionargs)
- [QueryMarketByIdArgs](zeitgeistpm_indexer.md#querymarketbyidargs)
- [QueryMarketByUniqueInputArgs](zeitgeistpm_indexer.md#querymarketbyuniqueinputargs)
- [QueryMarketStatsArgs](zeitgeistpm_indexer.md#querymarketstatsargs)
- [QueryMarketsArgs](zeitgeistpm_indexer.md#querymarketsargs)
- [QueryMarketsConnectionArgs](zeitgeistpm_indexer.md#querymarketsconnectionargs)
- [QueryPoolByIdArgs](zeitgeistpm_indexer.md#querypoolbyidargs)
- [QueryPoolByUniqueInputArgs](zeitgeistpm_indexer.md#querypoolbyuniqueinputargs)
- [QueryPoolsArgs](zeitgeistpm_indexer.md#querypoolsargs)
- [QueryPoolsConnectionArgs](zeitgeistpm_indexer.md#querypoolsconnectionargs)
- [Scalars](zeitgeistpm_indexer.md#scalars)
- [Sdk](zeitgeistpm_indexer.md#sdk)
- [SdkFunctionWrapper](zeitgeistpm_indexer.md#sdkfunctionwrapper)
- [SquidStatus](zeitgeistpm_indexer.md#squidstatus)
- [SquidStatusQuery](zeitgeistpm_indexer.md#squidstatusquery)
- [SquidStatusQueryVariables](zeitgeistpm_indexer.md#squidstatusqueryvariables)
- [Stats](zeitgeistpm_indexer.md#stats)
- [StatsQuery](zeitgeistpm_indexer.md#statsquery)
- [StatsQueryVariables](zeitgeistpm_indexer.md#statsqueryvariables)
- [Subscription](zeitgeistpm_indexer.md#subscription)
- [SubscriptionAccountBalanceByIdArgs](zeitgeistpm_indexer.md#subscriptionaccountbalancebyidargs)
- [SubscriptionAccountBalancesArgs](zeitgeistpm_indexer.md#subscriptionaccountbalancesargs)
- [SubscriptionAccountByIdArgs](zeitgeistpm_indexer.md#subscriptionaccountbyidargs)
- [SubscriptionAccountsArgs](zeitgeistpm_indexer.md#subscriptionaccountsargs)
- [SubscriptionAssetByIdArgs](zeitgeistpm_indexer.md#subscriptionassetbyidargs)
- [SubscriptionAssetsArgs](zeitgeistpm_indexer.md#subscriptionassetsargs)
- [SubscriptionHistoricalAccountBalanceByIdArgs](zeitgeistpm_indexer.md#subscriptionhistoricalaccountbalancebyidargs)
- [SubscriptionHistoricalAccountBalancesArgs](zeitgeistpm_indexer.md#subscriptionhistoricalaccountbalancesargs)
- [SubscriptionHistoricalAssetByIdArgs](zeitgeistpm_indexer.md#subscriptionhistoricalassetbyidargs)
- [SubscriptionHistoricalAssetsArgs](zeitgeistpm_indexer.md#subscriptionhistoricalassetsargs)
- [SubscriptionHistoricalMarketByIdArgs](zeitgeistpm_indexer.md#subscriptionhistoricalmarketbyidargs)
- [SubscriptionHistoricalMarketsArgs](zeitgeistpm_indexer.md#subscriptionhistoricalmarketsargs)
- [SubscriptionHistoricalPoolByIdArgs](zeitgeistpm_indexer.md#subscriptionhistoricalpoolbyidargs)
- [SubscriptionHistoricalPoolsArgs](zeitgeistpm_indexer.md#subscriptionhistoricalpoolsargs)
- [SubscriptionMarketByIdArgs](zeitgeistpm_indexer.md#subscriptionmarketbyidargs)
- [SubscriptionMarketsArgs](zeitgeistpm_indexer.md#subscriptionmarketsargs)
- [SubscriptionPoolByIdArgs](zeitgeistpm_indexer.md#subscriptionpoolbyidargs)
- [SubscriptionPoolsArgs](zeitgeistpm_indexer.md#subscriptionpoolsargs)
- [Weight](zeitgeistpm_indexer.md#weight)
- [WhereIdInput](zeitgeistpm_indexer.md#whereidinput)
- [ZeitgeistIndexer](zeitgeistpm_indexer.md#zeitgeistindexer)

### Variables

- [AccountBalancesDocument](zeitgeistpm_indexer.md#accountbalancesdocument)
- [AssetsDocument](zeitgeistpm_indexer.md#assetsdocument)
- [FullAccountBalanceFragmentDoc](zeitgeistpm_indexer.md#fullaccountbalancefragmentdoc)
- [FullAssetFragmentDoc](zeitgeistpm_indexer.md#fullassetfragmentdoc)
- [FullHistoricalAccountBalanceFragmentDoc](zeitgeistpm_indexer.md#fullhistoricalaccountbalancefragmentdoc)
- [FullHistoricalAssetsFragmentDoc](zeitgeistpm_indexer.md#fullhistoricalassetsfragmentdoc)
- [FullMarketFragmentDoc](zeitgeistpm_indexer.md#fullmarketfragmentdoc)
- [FullPoolFragmentDoc](zeitgeistpm_indexer.md#fullpoolfragmentdoc)
- [HistoricalAccountBalancesDocument](zeitgeistpm_indexer.md#historicalaccountbalancesdocument)
- [HistoricalAssetsDocument](zeitgeistpm_indexer.md#historicalassetsdocument)
- [HistoricalMarketsDocument](zeitgeistpm_indexer.md#historicalmarketsdocument)
- [HistoricalPoolsDocument](zeitgeistpm_indexer.md#historicalpoolsdocument)
- [MarketStatusCountDocument](zeitgeistpm_indexer.md#marketstatuscountdocument)
- [MarketsDocument](zeitgeistpm_indexer.md#marketsdocument)
- [PingQueryDocument](zeitgeistpm_indexer.md#pingquerydocument)
- [PoolsDocument](zeitgeistpm_indexer.md#poolsdocument)
- [SquidStatusDocument](zeitgeistpm_indexer.md#squidstatusdocument)
- [StatsDocument](zeitgeistpm_indexer.md#statsdocument)

### Functions

- [create](zeitgeistpm_indexer.md#create)
- [getSdk](zeitgeistpm_indexer.md#getsdk)

## Type Aliases

### Account

Ƭ **Account**: `Object`

A type that has ss58 address format of the account. As soon as the chain
encounters any new address, they get registered here as user/pool/market account.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Account"`` | - |
| `accountId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Account address |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Unique identifier of the object |
| `marketId?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | Zeitgeist's identifier for market. Valid only for market account. |
| `poolId?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | Zeitgeist's identifier for pool. Valid only for pool account. |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:24](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L24)

___

### AccountBalance

Ƭ **AccountBalance**: `Object`

Balance of a particular asset denoted by assetId present in the account

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"AccountBalance"`` | - |
| `account` | [`Account`](zeitgeistpm_indexer.md#account) | Connected account |
| `assetId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Zeitgeist's identifier for asset |
| `balance` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Balance of the asset |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Unique identifier of the object |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:37](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L37)

___

### AccountBalanceEdge

Ƭ **AccountBalanceEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"AccountBalanceEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`AccountBalance`](zeitgeistpm_indexer.md#accountbalance) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:49](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L49)

___

### AccountBalanceWhereInput

Ƭ **AccountBalanceWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceWhereInput`](zeitgeistpm_indexer.md#accountbalancewhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceWhereInput`](zeitgeistpm_indexer.md#accountbalancewhereinput)[]\> |
| `account?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountWhereInput`](zeitgeistpm_indexer.md#accountwhereinput)\> |
| `account_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `assetId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `assetId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `balance_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `balance_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `balance_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:72](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L72)

___

### AccountBalancesConnection

Ƭ **AccountBalancesConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"AccountBalancesConnection"`` |
| `edges` | [`AccountBalanceEdge`](zeitgeistpm_indexer.md#accountbalanceedge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:122](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L122)

___

### AccountBalancesQuery

Ƭ **AccountBalancesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `accountBalances` | { `__typename?`: ``"AccountBalance"`` ; `account`: { `__typename?`: ``"Account"`` ; `accountId`: `string` ; `id`: `string` ; `marketId?`: `number` \| ``null`` ; `poolId?`: `number` \| ``null``  } ; `assetId`: `string` ; `balance`: `any` ; `id`: `string`  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2506](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2506)

___

### AccountBalancesQueryVariables

Ƭ **AccountBalancesQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md)[] \| [`AccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceWhereInput`](zeitgeistpm_indexer.md#accountbalancewhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2498](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2498)

___

### AccountEdge

Ƭ **AccountEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"AccountEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`Account`](zeitgeistpm_indexer.md#account) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:129](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L129)

___

### AccountWhereInput

Ƭ **AccountWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountWhereInput`](zeitgeistpm_indexer.md#accountwhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountWhereInput`](zeitgeistpm_indexer.md#accountwhereinput)[]\> |
| `accountId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `accountId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `marketId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `marketId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `marketId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `poolId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:146](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L146)

___

### AccountsConnection

Ƭ **AccountsConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"AccountsConnection"`` |
| `edges` | [`AccountEdge`](zeitgeistpm_indexer.md#accountedge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:203](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L203)

___

### Asset

Ƭ **Asset**: `Object`

A type that has detail of the outcome asset. It is initialised as soon as the
market is created and price is assigned when pool is deployed for the market.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Asset"`` | - |
| `amountInPool?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | Balance of the asset present in the pool account |
| `assetId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Zeitgeist's identifier for asset |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Unique identifier of the object |
| `poolId?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | Zeitgeist's identifier for pool |
| `price?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> | Spot price of the asset in the pool |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:214](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L214)

___

### AssetEdge

Ƭ **AssetEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"AssetEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`Asset`](zeitgeistpm_indexer.md#asset) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:228](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L228)

___

### AssetWhereInput

Ƭ **AssetWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetWhereInput`](zeitgeistpm_indexer.md#assetwhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetWhereInput`](zeitgeistpm_indexer.md#assetwhereinput)[]\> |
| `amountInPool_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `amountInPool_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `amountInPool_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `amountInPool_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `amountInPool_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `amountInPool_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `amountInPool_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `amountInPool_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `amountInPool_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `assetId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `assetId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `poolId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `price_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `price_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `price_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `price_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``][]\> |
| `price_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `price_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `price_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `price_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `price_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:247](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L247)

___

### AssetsConnection

Ƭ **AssetsConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"AssetsConnection"`` |
| `edges` | [`AssetEdge`](zeitgeistpm_indexer.md#assetedge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:313](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L313)

___

### AssetsQuery

Ƭ **AssetsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `assets` | { `__typename?`: ``"Asset"`` ; `amountInPool?`: `any` \| ``null`` ; `assetId`: `string` ; `id`: `string` ; `poolId?`: `number` \| ``null`` ; `price?`: `number` \| ``null``  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2518](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2518)

___

### AssetsQueryVariables

Ƭ **AssetsQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetOrderByInput`](../enums/zeitgeistpm_indexer.AssetOrderByInput.md)[] \| [`AssetOrderByInput`](../enums/zeitgeistpm_indexer.AssetOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetWhereInput`](zeitgeistpm_indexer.md#assetwhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2510](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2510)

___

### CategoryMetadata

Ƭ **CategoryMetadata**: `Object`

Market's share details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"CategoryMetadata"`` | - |
| `color?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Color identifier |
| `img?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Image identifier |
| `name?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Title ex. `Locomotiv will not be defeated` |
| `ticker?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Short abbreviation ex. `LMDRAW` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:321](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L321)

___

### Config

Ƭ **Config**: `Object`

Config for the zeitgeist indexer.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Defined in

[packages/indexer/src/types.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/types.ts#L8)

___

### Exact

Ƭ **Exact**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L6)

___

### FullAccountBalanceFragment

Ƭ **FullAccountBalanceFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"AccountBalance"`` |
| `account` | { `__typename?`: ``"Account"`` ; `accountId`: `string` ; `id`: `string` ; `marketId?`: `number` \| ``null`` ; `poolId?`: `number` \| ``null``  } |
| `account.__typename?` | ``"Account"`` |
| `account.accountId` | `string` |
| `account.id` | `string` |
| `account.marketId?` | `number` \| ``null`` |
| `account.poolId?` | `number` \| ``null`` |
| `assetId` | `string` |
| `balance` | `any` |
| `id` | `string` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2508](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2508)

___

### FullAssetFragment

Ƭ **FullAssetFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Asset"`` |
| `amountInPool?` | `any` \| ``null`` |
| `assetId` | `string` |
| `id` | `string` |
| `poolId?` | `number` \| ``null`` |
| `price?` | `number` \| ``null`` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2520](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2520)

___

### FullHistoricalAccountBalanceFragment

Ƭ **FullHistoricalAccountBalanceFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalAccountBalance"`` |
| `accountId` | `string` |
| `assetId` | `string` |
| `balance` | `any` |
| `blockNumber` | `number` |
| `dBalance` | `any` |
| `event` | `string` |
| `id` | `string` |
| `timestamp` | `any` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2532](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2532)

___

### FullHistoricalAssetsFragment

Ƭ **FullHistoricalAssetsFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalAsset"`` |
| `accountId?` | `string` \| ``null`` |
| `assetId` | `string` |
| `blockNumber` | `number` |
| `dAmountInPool?` | `any` \| ``null`` |
| `dPrice?` | `number` \| ``null`` |
| `event` | `string` |
| `id` | `string` |
| `newAmountInPool?` | `any` \| ``null`` |
| `newPrice?` | `number` \| ``null`` |
| `timestamp` | `any` |
| `ztgTraded?` | `any` \| ``null`` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2544](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2544)

___

### FullMarketFragment

Ƭ **FullMarketFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Market"`` |
| `bonds?` | { `__typename?`: ``"MarketBonds"`` ; `creation?`: { `__typename?`: ``"MarketBond"`` ; `isSettled`: `boolean` ; `value`: `any` ; `who`: `string`  } \| ``null`` ; `oracle?`: { `__typename?`: ``"MarketBond"`` ; `isSettled`: `boolean` ; `value`: `any` ; `who`: `string`  } \| ``null``  } \| ``null`` |
| `categories?` | ({ `__typename?`: ``"CategoryMetadata"`` ; `color?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `ticker?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` |
| `creation` | `string` |
| `creator` | `string` |
| `creatorFee?` | `number` \| ``null`` |
| `deadlines?` | { `__typename?`: ``"MarketDeadlines"`` ; `disputeDuration`: `any` ; `gracePeriod`: `any` ; `oracleDuration`: `any`  } \| ``null`` |
| `description?` | `string` \| ``null`` |
| `disputeMechanism` | `string` |
| `id` | `string` |
| `img?` | `string` \| ``null`` |
| `marketId` | `number` |
| `marketType` | { `__typename?`: ``"MarketType"`` ; `categorical?`: `string` \| ``null`` ; `scalar?`: (`string` \| ``null``)[] \| ``null``  } |
| `marketType.__typename?` | ``"MarketType"`` |
| `marketType.categorical?` | `string` \| ``null`` |
| `marketType.scalar?` | (`string` \| ``null``)[] \| ``null`` |
| `oracle` | `string` |
| `outcomeAssets` | (`string` \| ``null``)[] |
| `period` | { `__typename?`: ``"MarketPeriod"`` ; `block?`: (`any` \| ``null``)[] \| ``null`` ; `end`: `any` ; `start`: `any` ; `timestamp?`: (`any` \| ``null``)[] \| ``null``  } |
| `period.__typename?` | ``"MarketPeriod"`` |
| `period.block?` | (`any` \| ``null``)[] \| ``null`` |
| `period.end` | `any` |
| `period.start` | `any` |
| `period.timestamp?` | (`any` \| ``null``)[] \| ``null`` |
| `pool?` | { `__typename?`: ``"Pool"`` ; `accountId?`: `string` \| ``null`` ; `baseAsset`: `string` ; `createdAt`: `any` ; `id`: `string` ; `marketId`: `number` ; `poolId`: `number` ; `poolStatus`: `string` ; `scoringRule`: `string` ; `swapFee`: `string` ; `totalSubsidy`: `string` ; `totalWeight`: `string` ; `volume`: `any` ; `weights`: ({ `__typename?`: ``"Weight"`` ; `assetId`: `string` ; `len`: `any`  } \| ``null``)[] ; `ztgQty`: `any`  } \| ``null`` |
| `question?` | `string` \| ``null`` |
| `rejectReason?` | `string` \| ``null`` |
| `report?` | { `__typename?`: ``"MarketReport"`` ; `at?`: `number` \| ``null`` ; `by?`: `string` \| ``null`` ; `outcome`: { `__typename?`: ``"OutcomeReport"`` ; `categorical?`: `number` \| ``null`` ; `scalar?`: `any` \| ``null``  }  } \| ``null`` |
| `resolvedOutcome?` | `string` \| ``null`` |
| `scalarType?` | `string` \| ``null`` |
| `scoringRule` | `string` |
| `slug?` | `string` \| ``null`` |
| `status` | [`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md) |
| `tags?` | (`string` \| ``null``)[] \| ``null`` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2563](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2563)

___

### FullPoolFragment

Ƭ **FullPoolFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Pool"`` |
| `accountId?` | `string` \| ``null`` |
| `baseAsset` | `string` |
| `createdAt` | `any` |
| `id` | `string` |
| `marketId` | `number` |
| `poolId` | `number` |
| `poolStatus` | `string` |
| `scoringRule` | `string` |
| `swapFee` | `string` |
| `totalSubsidy` | `string` |
| `totalWeight` | `string` |
| `volume` | `any` |
| `weights` | ({ `__typename?`: ``"Weight"`` ; `assetId`: `string` ; `len`: `any`  } \| ``null``)[] |
| `ztgQty` | `any` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2590](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2590)

___

### GQLSdk

Ƭ **GQLSdk**: `ReturnType`<typeof [`getSdk`](zeitgeistpm_indexer.md#getsdk)\>

Type of the generated gql sdk generated by codege.

#### Defined in

[packages/indexer/src/types.ts:24](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/types.ts#L24)

___

### HistoricalAccountBalance

Ƭ **HistoricalAccountBalance**: `Object`

Balance history of a particular asset in an account. Records all transactions
associated with the account.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"HistoricalAccountBalance"`` | - |
| `accountId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Account address |
| `assetId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Zeitgeist's identifier for asset |
| `balance` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Balance of the asset |
| `blockNumber` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Height of the block |
| `dBalance` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Balance difference |
| `event` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Event method which initiated this change |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Unique identifier of the object |
| `timestamp` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``] | Timestamp of the block |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:337](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L337)

___

### HistoricalAccountBalanceEdge

Ƭ **HistoricalAccountBalanceEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalAccountBalanceEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`HistoricalAccountBalance`](zeitgeistpm_indexer.md#historicalaccountbalance) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:357](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L357)

___

### HistoricalAccountBalanceWhereInput

Ƭ **HistoricalAccountBalanceWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceWhereInput`](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceWhereInput`](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)[]\> |
| `accountId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `accountId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `assetId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `balance_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `balance_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `balance_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `balance_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `blockNumber_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `blockNumber_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `blockNumber_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `dBalance_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dBalance_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dBalance_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dBalance_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `dBalance_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `dBalance_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dBalance_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dBalance_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dBalance_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `event_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `event_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `timestamp_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `timestamp_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `timestamp_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:382](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L382)

___

### HistoricalAccountBalancesConnection

Ƭ **HistoricalAccountBalancesConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalAccountBalancesConnection"`` |
| `edges` | [`HistoricalAccountBalanceEdge`](zeitgeistpm_indexer.md#historicalaccountbalanceedge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:491](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L491)

___

### HistoricalAccountBalancesQuery

Ƭ **HistoricalAccountBalancesQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `historicalAccountBalances` | { `__typename?`: ``"HistoricalAccountBalance"`` ; `accountId`: `string` ; `assetId`: `string` ; `balance`: `any` ; `blockNumber`: `number` ; `dBalance`: `any` ; `event`: `string` ; `id`: `string` ; `timestamp`: `any`  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2530](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2530)

___

### HistoricalAccountBalancesQueryVariables

Ƭ **HistoricalAccountBalancesQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md)[] \| [`HistoricalAccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceWhereInput`](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2522](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2522)

___

### HistoricalAsset

Ƭ **HistoricalAsset**: `Object`

A type that records the price history of an outcome asset and
trade history of an account

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"HistoricalAsset"`` | - |
| `accountId?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Account which executed the trade |
| `assetId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Zeitgeist's identifier for asset |
| `blockNumber` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Height of the block |
| `dAmountInPool?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | Units of asset user bought (-ve) or sold (+ve) |
| `dPrice?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> | Price of the asset has decreased if -ve and +ve if increased |
| `event` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Event method which initiated this change |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Unique identifier of the object |
| `newAmountInPool?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | Units of asset present in the pool account |
| `newPrice?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> | Price of the asset after trade execution/market resolution |
| `timestamp` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``] | Timestamp of the block |
| `ztgTraded?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | Amount of ZTG which user spent/redeemed for swap trade |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:502](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L502)

___

### HistoricalAssetEdge

Ƭ **HistoricalAssetEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalAssetEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`HistoricalAsset`](zeitgeistpm_indexer.md#historicalasset) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:528](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L528)

___

### HistoricalAssetWhereInput

Ƭ **HistoricalAssetWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetWhereInput`](zeitgeistpm_indexer.md#historicalassetwhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetWhereInput`](zeitgeistpm_indexer.md#historicalassetwhereinput)[]\> |
| `accountId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `accountId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `assetId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `assetId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `assetId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `blockNumber_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `blockNumber_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `blockNumber_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `dAmountInPool_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dAmountInPool_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dAmountInPool_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dAmountInPool_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `dAmountInPool_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `dAmountInPool_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dAmountInPool_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dAmountInPool_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dAmountInPool_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `dPrice_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `dPrice_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `dPrice_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `dPrice_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``][]\> |
| `dPrice_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `dPrice_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `dPrice_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `dPrice_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `dPrice_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``][]\> |
| `event_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `event_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `newAmountInPool_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `newAmountInPool_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `newAmountInPool_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `newAmountInPool_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `newAmountInPool_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `newAmountInPool_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `newAmountInPool_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `newAmountInPool_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `newAmountInPool_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `newPrice_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `newPrice_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `newPrice_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `newPrice_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``][]\> |
| `newPrice_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `newPrice_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `newPrice_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `newPrice_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``]\> |
| `newPrice_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``][]\> |
| `timestamp_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `timestamp_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `timestamp_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `ztgTraded_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgTraded_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgTraded_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgTraded_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `ztgTraded_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `ztgTraded_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgTraded_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgTraded_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgTraded_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:559](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L559)

___

### HistoricalAssetsConnection

Ƭ **HistoricalAssetsConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalAssetsConnection"`` |
| `edges` | [`HistoricalAssetEdge`](zeitgeistpm_indexer.md#historicalassetedge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:695](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L695)

___

### HistoricalAssetsQuery

Ƭ **HistoricalAssetsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `historicalAssets` | { `__typename?`: ``"HistoricalAsset"`` ; `accountId?`: `string` \| ``null`` ; `assetId`: `string` ; `blockNumber`: `number` ; `dAmountInPool?`: `any` \| ``null`` ; `dPrice?`: `number` \| ``null`` ; `event`: `string` ; `id`: `string` ; `newAmountInPool?`: `any` \| ``null`` ; `newPrice?`: `number` \| ``null`` ; `timestamp`: `any` ; `ztgTraded?`: `any` \| ``null``  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2542](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2542)

___

### HistoricalAssetsQueryVariables

Ƭ **HistoricalAssetsQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md)[] \| [`HistoricalAssetOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetWhereInput`](zeitgeistpm_indexer.md#historicalassetwhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2534](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2534)

___

### HistoricalMarket

Ƭ **HistoricalMarket**: `Object`

Market history of a particular market. Records all transactions
associated with the market.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"HistoricalMarket"`` | - |
| `blockNumber` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Height of the block |
| `event` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Event method which initiated this change |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | - |
| `marketId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Zeitgeist's identifier for market |
| `poolId?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | Zeitgeist's identifier for pool |
| `resolvedOutcome?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Latest resolved outcome |
| `status` | [`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md) | Latest market status |
| `timestamp` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``] | Timestamp of the block |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:706](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L706)

___

### HistoricalMarketEdge

Ƭ **HistoricalMarketEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalMarketEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`HistoricalMarket`](zeitgeistpm_indexer.md#historicalmarket) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:725](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L725)

___

### HistoricalMarketWhereInput

Ƭ **HistoricalMarketWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketWhereInput`](zeitgeistpm_indexer.md#historicalmarketwhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketWhereInput`](zeitgeistpm_indexer.md#historicalmarketwhereinput)[]\> |
| `blockNumber_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `blockNumber_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `blockNumber_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `event_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `event_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `marketId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `marketId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `marketId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `poolId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `resolvedOutcome_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `resolvedOutcome_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `resolvedOutcome_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `resolvedOutcome_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `status_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)\> |
| `status_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)[]\> |
| `status_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `status_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)\> |
| `status_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)[]\> |
| `timestamp_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `timestamp_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `timestamp_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:750](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L750)

___

### HistoricalMarketsConnection

Ƭ **HistoricalMarketsConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalMarketsConnection"`` |
| `edges` | [`HistoricalMarketEdge`](zeitgeistpm_indexer.md#historicalmarketedge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:847](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L847)

___

### HistoricalMarketsQuery

Ƭ **HistoricalMarketsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `historicalMarkets` | { `__typename?`: ``"HistoricalMarket"`` ; `blockNumber`: `number` ; `event`: `string` ; `id`: `string` ; `marketId`: `number` ; `poolId?`: `number` \| ``null`` ; `resolvedOutcome?`: `string` \| ``null`` ; `status`: [`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md) ; `timestamp`: `any`  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2573](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2573)

___

### HistoricalMarketsQueryVariables

Ƭ **HistoricalMarketsQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md)[] \| [`HistoricalMarketOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketWhereInput`](zeitgeistpm_indexer.md#historicalmarketwhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2565](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2565)

___

### HistoricalPool

Ƭ **HistoricalPool**: `Object`

Liquidity history of a particular pool. Records all transactions
associated with the pool.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"HistoricalPool"`` | - |
| `blockNumber` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Height of the block |
| `dVolume?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | Volume difference |
| `event` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Event method which initiated this change |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | - |
| `poolId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Zeitgeist's identifier for pool |
| `poolStatus` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Current status of the pool |
| `timestamp` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``] | Timestamp of the block |
| `volume?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | New updated volume |
| `ztgQty?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | New amount of ZTG present in the pool |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:858](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L858)

___

### HistoricalPoolEdge

Ƭ **HistoricalPoolEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalPoolEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`HistoricalPool`](zeitgeistpm_indexer.md#historicalpool) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:879](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L879)

___

### HistoricalPoolWhereInput

Ƭ **HistoricalPoolWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolWhereInput`](zeitgeistpm_indexer.md#historicalpoolwhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolWhereInput`](zeitgeistpm_indexer.md#historicalpoolwhereinput)[]\> |
| `blockNumber_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `blockNumber_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `blockNumber_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `blockNumber_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `dVolume_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dVolume_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dVolume_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dVolume_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `dVolume_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `dVolume_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dVolume_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dVolume_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `dVolume_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `event_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `event_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `event_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `event_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `poolId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolStatus_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `poolStatus_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `poolStatus_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `poolStatus_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `timestamp_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `timestamp_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `timestamp_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `timestamp_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `volume_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `volume_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `volume_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `ztgQty_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `ztgQty_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `ztgQty_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:906](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L906)

___

### HistoricalPoolsConnection

Ƭ **HistoricalPoolsConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"HistoricalPoolsConnection"`` |
| `edges` | [`HistoricalPoolEdge`](zeitgeistpm_indexer.md#historicalpooledge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1016](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1016)

___

### HistoricalPoolsQuery

Ƭ **HistoricalPoolsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `historicalPools` | { `__typename?`: ``"HistoricalPool"`` ; `blockNumber`: `number` ; `dVolume?`: `any` \| ``null`` ; `event`: `string` ; `id`: `string` ; `poolId`: `number` ; `poolStatus`: `string` ; `timestamp`: `any` ; `volume?`: `any` \| ``null`` ; `ztgQty?`: `any` \| ``null``  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2600](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2600)

___

### HistoricalPoolsQueryVariables

Ƭ **HistoricalPoolsQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md)[] \| [`HistoricalPoolOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolWhereInput`](zeitgeistpm_indexer.md#historicalpoolwhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2592](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2592)

___

### InputMaybe

Ƭ **InputMaybe**<`T`\>: [`Maybe`](zeitgeistpm_indexer.md#maybe)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:5](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L5)

___

### MakeMaybe

Ƭ **MakeMaybe**<`T`, `K`\>: `Omit`<`T`, `K`\> & { [SubKey in K]: Maybe<T[SubKey]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L8)

___

### MakeOptional

Ƭ **MakeOptional**<`T`, `K`\>: `Omit`<`T`, `K`\> & { [SubKey in K]?: Maybe<T[SubKey]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L7)

___

### Market

Ƭ **Market**: `Object`

Prediction market details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Market"`` | - |
| `authorizedAddress?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Address responsible for authorizing disputes. Null if Adv Comm is the authority |
| `baseAsset` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | The base asset in the market swap pool (usually a currency) |
| `bonds?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`MarketBonds`](zeitgeistpm_indexer.md#marketbonds)\> | Tracks the status of the advisory, oracle and validity bonds |
| `categories?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Maybe`](zeitgeistpm_indexer.md#maybe)<[`CategoryMetadata`](zeitgeistpm_indexer.md#categorymetadata)\>[]\> | Share details |
| `creation` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Can be `Permissionless` or `Advised` |
| `creator` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Account address of the market creator |
| `creatorFee?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | The creator's fee |
| `deadlines?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`MarketDeadlines`](zeitgeistpm_indexer.md#marketdeadlines)\> | Deadlines for the market represented in blocks |
| `description?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Description of the market |
| `disputeMechanism` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Can be `Authorized` or `Court` or `SimpleDisputes` |
| `disputes?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Maybe`](zeitgeistpm_indexer.md#maybe)<[`MarketReport`](zeitgeistpm_indexer.md#marketreport)\>[]\> | The dispute information for each dispute that's been issued |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Unique identifier of the object |
| `img?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Image for the market |
| `marketId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Zeitgeist's identifier for market |
| `marketType` | [`MarketType`](zeitgeistpm_indexer.md#markettype) | Type of the market |
| `metadata` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | IPFS cid for market metadata |
| `oracle` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Account designated to report on the market |
| `outcomeAssets` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[] | Share identifiers |
| `period` | [`MarketPeriod`](zeitgeistpm_indexer.md#marketperiod) | Time period expressed in block numbers or timestamps |
| `pool?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Pool`](zeitgeistpm_indexer.md#pool)\> | Market's liquidity pool details |
| `question?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Market question |
| `rejectReason?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Reasoning for market rejection |
| `report?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`MarketReport`](zeitgeistpm_indexer.md#marketreport)\> | Reported outcome of the market. Null if the market is not reported yet |
| `resolvedOutcome?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Resolved outcome for the market |
| `scalarType?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Type of scalar range if market is of type scalar |
| `scoringRule` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Scoring rule used for the market |
| `slug?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Short name for the market |
| `status` | [`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md) | Status of the market |
| `tags?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> | Market tags |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1024](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1024)

___

### MarketBond

Ƭ **MarketBond**: `Object`

Market's bond details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"MarketBond"`` | - |
| `isSettled` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``] | The flag which determines if the bond was already unreserved and/or (partially) slashed |
| `value` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Amount reserved |
| `who` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | The account that reserved the bond |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1087](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1087)

___

### MarketBondWhereInput

Ƭ **MarketBondWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isSettled_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `isSettled_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `isSettled_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `value_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `value_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `value_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `value_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `value_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `value_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `value_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `value_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `value_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `who_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `who_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `who_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `who_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `who_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1097](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1097)

___

### MarketBonds

Ƭ **MarketBonds**: `Object`

Amount reserved for creation of markets, selecting oracles, joining the council,
making treasury proposals, setting on-chain identities, voting,
creating DAOs, and other parts of the protocol.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"MarketBonds"`` | - |
| `creation?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`MarketBond`](zeitgeistpm_indexer.md#marketbond)\> | Bond associated with creation of markets |
| `oracle?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`MarketBond`](zeitgeistpm_indexer.md#marketbond)\> | Bond associated with oracle selection |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1134](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1134)

___

### MarketBondsWhereInput

Ƭ **MarketBondsWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `creation?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketBondWhereInput`](zeitgeistpm_indexer.md#marketbondwhereinput)\> |
| `creation_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `oracle?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketBondWhereInput`](zeitgeistpm_indexer.md#marketbondwhereinput)\> |
| `oracle_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1142](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1142)

___

### MarketDeadlines

Ƭ **MarketDeadlines**: `Object`

Deadlines for the market represented in blocks

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"MarketDeadlines"`` |
| `disputeDuration` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] |
| `gracePeriod` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] |
| `oracleDuration` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1150](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1150)

___

### MarketDeadlinesWhereInput

Ƭ **MarketDeadlinesWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disputeDuration_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `disputeDuration_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `disputeDuration_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `disputeDuration_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `disputeDuration_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `disputeDuration_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `disputeDuration_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `disputeDuration_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `disputeDuration_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `gracePeriod_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `gracePeriod_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `gracePeriod_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `gracePeriod_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `gracePeriod_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `gracePeriod_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `gracePeriod_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `gracePeriod_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `gracePeriod_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `oracleDuration_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `oracleDuration_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `oracleDuration_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `oracleDuration_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `oracleDuration_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `oracleDuration_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `oracleDuration_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `oracleDuration_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `oracleDuration_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1157](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1157)

___

### MarketEdge

Ƭ **MarketEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"MarketEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`Market`](zeitgeistpm_indexer.md#market) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1187](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1187)

___

### MarketPeriod

Ƭ **MarketPeriod**: `Object`

Time period of the market

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"MarketPeriod"`` | - |
| `block?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> | start & end block numbers |
| `end` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Timestamp at which market should end |
| `start` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Timestamp at which market should start |
| `timestamp?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> | start & end timestamps |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1277](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1277)

___

### MarketPeriodWhereInput

Ƭ **MarketPeriodWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block_containsAll?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> |
| `block_containsAny?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> |
| `block_containsNone?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> |
| `block_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `end_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `end_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `end_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `end_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `end_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `end_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `end_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `end_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `end_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `start_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `start_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `start_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `start_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `start_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `start_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `start_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `start_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `start_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `timestamp_containsAll?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> |
| `timestamp_containsAny?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> |
| `timestamp_containsNone?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\>[]\> |
| `timestamp_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1289](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1289)

___

### MarketReport

Ƭ **MarketReport**: `Object`

Market's report details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"MarketReport"`` | - |
| `at?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | Block number |
| `by?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Account which reported |
| `outcome` | [`OutcomeReport`](zeitgeistpm_indexer.md#outcomereport) | Outcome details |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1319](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1319)

___

### MarketReportWhereInput

Ƭ **MarketReportWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `at_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `at_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `at_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `at_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `at_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `at_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `at_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `at_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `at_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `by_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `by_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `by_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `by_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `by_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `outcome?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`OutcomeReportWhereInput`](zeitgeistpm_indexer.md#outcomereportwhereinput)\> |
| `outcome_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1329](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1329)

___

### MarketStats

Ƭ **MarketStats**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"MarketStats"`` |
| `liquidity` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] |
| `marketId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``] |
| `participants` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Float"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1360](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1360)

___

### MarketStatusCountQuery

Ƭ **MarketStatusCountQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `markets` | { `__typename?`: ``"Market"`` ; `id`: `string`  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2561](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2561)

___

### MarketStatusCountQueryVariables

Ƭ **MarketStatusCountQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `status`: [`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2556](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2556)

___

### MarketType

Ƭ **MarketType**: `Object`

Market's types

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"MarketType"`` | - |
| `categorical?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Number of categories if categorical market |
| `scalar?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> | Range of values if scalar market |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1384](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1384)

___

### MarketTypeWhereInput

Ƭ **MarketTypeWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categorical_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `categorical_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `categorical_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `categorical_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `categorical_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalar_containsAll?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `scalar_containsAny?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `scalar_containsNone?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `scalar_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1392](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1392)

___

### MarketWhereInput

Ƭ **MarketWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketWhereInput`](zeitgeistpm_indexer.md#marketwhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketWhereInput`](zeitgeistpm_indexer.md#marketwhereinput)[]\> |
| `authorizedAddress_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `authorizedAddress_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `authorizedAddress_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `authorizedAddress_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `authorizedAddress_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `baseAsset_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `baseAsset_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `baseAsset_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `bonds?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketBondsWhereInput`](zeitgeistpm_indexer.md#marketbondswhereinput)\> |
| `bonds_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `categories_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `creation_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `creation_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `creation_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `creation_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creation_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creatorFee_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `creatorFee_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `creatorFee_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `creatorFee_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `creatorFee_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `creatorFee_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `creatorFee_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `creatorFee_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `creatorFee_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `creator_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `creator_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `creator_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `creator_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `creator_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `deadlines?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketDeadlinesWhereInput`](zeitgeistpm_indexer.md#marketdeadlineswhereinput)\> |
| `deadlines_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `description_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `description_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `description_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `description_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `description_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `disputeMechanism_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `disputeMechanism_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `disputeMechanism_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputeMechanism_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `disputes_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `img_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `img_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `img_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `img_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `marketId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `marketId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `marketId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `marketType?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketTypeWhereInput`](zeitgeistpm_indexer.md#markettypewhereinput)\> |
| `marketType_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `metadata_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `metadata_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `metadata_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `metadata_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `metadata_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `oracle_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `oracle_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `oracle_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `oracle_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `outcomeAssets_containsAll?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `outcomeAssets_containsAny?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `outcomeAssets_containsNone?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `outcomeAssets_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `period?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketPeriodWhereInput`](zeitgeistpm_indexer.md#marketperiodwhereinput)\> |
| `period_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `pool?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)\> |
| `pool_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `question_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `question_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `question_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `question_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `question_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `rejectReason_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `rejectReason_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `rejectReason_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `rejectReason_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `report?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketReportWhereInput`](zeitgeistpm_indexer.md#marketreportwhereinput)\> |
| `report_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `resolvedOutcome_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `resolvedOutcome_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `resolvedOutcome_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `resolvedOutcome_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `resolvedOutcome_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `scalarType_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `scalarType_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `scalarType_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scalarType_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `scoringRule_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `scoringRule_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `scoringRule_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `slug_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `slug_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `slug_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `slug_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `status_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)\> |
| `status_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)[]\> |
| `status_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `status_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)\> |
| `status_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)[]\> |
| `tags_containsAll?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `tags_containsAny?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `tags_containsNone?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\>[]\> |
| `tags_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1416](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1416)

___

### MarketsConnection

Ƭ **MarketsConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"MarketsConnection"`` |
| `edges` | [`MarketEdge`](zeitgeistpm_indexer.md#marketedge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1738](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1738)

___

### MarketsQuery

Ƭ **MarketsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `markets` | { `__typename?`: ``"Market"`` ; `bonds?`: { `__typename?`: ``"MarketBonds"`` ; `creation?`: { `__typename?`: ``"MarketBond"`` ; `isSettled`: `boolean` ; `value`: `any` ; `who`: `string`  } \| ``null`` ; `oracle?`: { `__typename?`: ``"MarketBond"`` ; `isSettled`: `boolean` ; `value`: `any` ; `who`: `string`  } \| ``null``  } \| ``null`` ; `categories?`: ({ `__typename?`: ``"CategoryMetadata"`` ; `color?`: `string` \| ``null`` ; `name?`: `string` \| ``null`` ; `ticker?`: `string` \| ``null``  } \| ``null``)[] \| ``null`` ; `creation`: `string` ; `creator`: `string` ; `creatorFee?`: `number` \| ``null`` ; `deadlines?`: { `__typename?`: ``"MarketDeadlines"`` ; `disputeDuration`: `any` ; `gracePeriod`: `any` ; `oracleDuration`: `any`  } \| ``null`` ; `description?`: `string` \| ``null`` ; `disputeMechanism`: `string` ; `id`: `string` ; `img?`: `string` \| ``null`` ; `marketId`: `number` ; `marketType`: { `__typename?`: ``"MarketType"`` ; `categorical?`: `string` \| ``null`` ; `scalar?`: (`string` \| ``null``)[] \| ``null``  } ; `oracle`: `string` ; `outcomeAssets`: (`string` \| ``null``)[] ; `period`: { `__typename?`: ``"MarketPeriod"`` ; `block?`: (`any` \| ``null``)[] \| ``null`` ; `end`: `any` ; `start`: `any` ; `timestamp?`: (`any` \| ``null``)[] \| ``null``  } ; `pool?`: { `__typename?`: ``"Pool"`` ; `accountId?`: `string` \| ``null`` ; `baseAsset`: `string` ; `createdAt`: `any` ; `id`: `string` ; `marketId`: `number` ; `poolId`: `number` ; `poolStatus`: `string` ; `scoringRule`: `string` ; `swapFee`: `string` ; `totalSubsidy`: `string` ; `totalWeight`: `string` ; `volume`: `any` ; `weights`: ({ `__typename?`: ``"Weight"`` ; `assetId`: `string` ; `len`: `any`  } \| ``null``)[] ; `ztgQty`: `any`  } \| ``null`` ; `question?`: `string` \| ``null`` ; `rejectReason?`: `string` \| ``null`` ; `report?`: { `__typename?`: ``"MarketReport"`` ; `at?`: `number` \| ``null`` ; `by?`: `string` \| ``null`` ; `outcome`: { `__typename?`: ``"OutcomeReport"`` ; `categorical?`: `number` \| ``null`` ; `scalar?`: `any` \| ``null``  }  } \| ``null`` ; `resolvedOutcome?`: `string` \| ``null`` ; `scalarType?`: `string` \| ``null`` ; `scoringRule`: `string` ; `slug?`: `string` \| ``null`` ; `status`: [`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md) ; `tags?`: (`string` \| ``null``)[] \| ``null``  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2554](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2554)

___

### MarketsQueryVariables

Ƭ **MarketsQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketOrderByInput`](../enums/zeitgeistpm_indexer.MarketOrderByInput.md)[] \| [`MarketOrderByInput`](../enums/zeitgeistpm_indexer.MarketOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketWhereInput`](zeitgeistpm_indexer.md#marketwhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2546](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2546)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:4](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L4)

___

### OutcomeReport

Ƭ **OutcomeReport**: `Object`

Market's outcome details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"OutcomeReport"`` | - |
| `categorical?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | Index of the categories. Null if market is scalar |
| `scalar?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> | Resultant value from the scalar range. Null if market is categorical |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1746](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1746)

___

### OutcomeReportWhereInput

Ƭ **OutcomeReportWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categorical_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `categorical_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `categorical_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `categorical_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `categorical_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `categorical_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `categorical_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `categorical_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `categorical_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `scalar_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `scalar_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `scalar_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `scalar_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `scalar_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `scalar_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `scalar_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `scalar_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `scalar_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1754](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1754)

___

### PageInfo

Ƭ **PageInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"PageInfo"`` |
| `endCursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `hasNextPage` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``] |
| `hasPreviousPage` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``] |
| `startCursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1775](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1775)

___

### PingQueryQuery

Ƭ **PingQueryQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `markets` | { `__typename?`: ``"Market"`` ; `id`: `string`  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2578](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2578)

___

### PingQueryQueryVariables

Ƭ **PingQueryQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `[key: string]`: `never`;  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2575](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2575)

___

### Pool

Ƭ **Pool**: `Object`

Liquidity pool details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Pool"`` | - |
| `accountId?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> | Zeitgeist's identifier for account |
| `baseAsset` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | The base asset in the market swap pool (usually a currency) |
| `createdAt` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``] | Timestamp of pool creation |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | - |
| `marketId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | - |
| `poolId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] | Zeitgeist's identifier for pool |
| `poolStatus` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Status of the pool |
| `scoringRule` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Scoring rule used for the pool |
| `swapFee` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Fee applied to each swap |
| `totalSubsidy` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Subsidy gathered for the market |
| `totalWeight` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Sum of `weights` |
| `volume` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Total amount of ZTG that has moved through a market's liquidity pool |
| `weights` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Weight`](zeitgeistpm_indexer.md#weight)\>[] | List of lengths for each asset |
| `ztgQty` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Amount of ZTG present in the pool |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1784](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1784)

___

### PoolEdge

Ƭ **PoolEdge**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"PoolEdge"`` |
| `cursor` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |
| `node` | [`Pool`](zeitgeistpm_indexer.md#pool) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1814](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1814)

___

### PoolWhereInput

Ƭ **PoolWhereInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AND?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)[]\> |
| `OR?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)[]\> |
| `accountId_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `accountId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `accountId_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `accountId_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `baseAsset_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `baseAsset_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `baseAsset_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `baseAsset_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `createdAt_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `createdAt_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `createdAt_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `createdAt_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `createdAt_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `createdAt_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `createdAt_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `createdAt_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``]\> |
| `createdAt_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"DateTime"``][]\> |
| `id_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `id_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `id_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `id_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `marketId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `marketId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `marketId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `marketId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolId_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `poolId_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `poolId_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``][]\> |
| `poolStatus_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `poolStatus_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `poolStatus_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `poolStatus_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `poolStatus_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `scoringRule_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `scoringRule_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `scoringRule_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `scoringRule_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `swapFee_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `swapFee_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `swapFee_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `swapFee_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `totalSubsidy_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `totalSubsidy_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `totalSubsidy_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalSubsidy_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `totalWeight_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `totalWeight_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_not_contains?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_not_containsInsensitive?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_not_endsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][]\> |
| `totalWeight_not_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `totalWeight_startsWith?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `volume_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `volume_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `volume_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `volume_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `weights_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `ztgQty_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_gt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_gte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |
| `ztgQty_isNull?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Boolean"``]\> |
| `ztgQty_lt?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_lte?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_not_eq?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``]\> |
| `ztgQty_not_in?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``][]\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:1849](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L1849)

___

### PoolsConnection

Ƭ **PoolsConnection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"PoolsConnection"`` |
| `edges` | [`PoolEdge`](zeitgeistpm_indexer.md#pooledge)[] |
| `pageInfo` | [`PageInfo`](zeitgeistpm_indexer.md#pageinfo) |
| `totalCount` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2036](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2036)

___

### PoolsQuery

Ƭ **PoolsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `pools` | { `__typename?`: ``"Pool"`` ; `accountId?`: `string` \| ``null`` ; `baseAsset`: `string` ; `createdAt`: `any` ; `id`: `string` ; `marketId`: `number` ; `poolId`: `number` ; `poolStatus`: `string` ; `scoringRule`: `string` ; `swapFee`: `string` ; `totalSubsidy`: `string` ; `totalWeight`: `string` ; `volume`: `any` ; `weights`: ({ `__typename?`: ``"Weight"`` ; `assetId`: `string` ; `len`: `any`  } \| ``null``)[] ; `ztgQty`: `any`  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2588](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2588)

___

### PoolsQueryVariables

Ƭ **PoolsQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolOrderByInput`](../enums/zeitgeistpm_indexer.PoolOrderByInput.md)[] \| [`PoolOrderByInput`](../enums/zeitgeistpm_indexer.PoolOrderByInput.md)\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)\>  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2580](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2580)

___

### Query

Ƭ **Query**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Query"`` | - |
| `accountBalanceById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`AccountBalance`](zeitgeistpm_indexer.md#accountbalance)\> | - |
| `accountBalanceByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`AccountBalance`](zeitgeistpm_indexer.md#accountbalance)\> | **`Deprecated`** Use accountBalanceById |
| `accountBalances` | [`AccountBalance`](zeitgeistpm_indexer.md#accountbalance)[] | - |
| `accountBalancesConnection` | [`AccountBalancesConnection`](zeitgeistpm_indexer.md#accountbalancesconnection) | - |
| `accountById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Account`](zeitgeistpm_indexer.md#account)\> | - |
| `accountByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Account`](zeitgeistpm_indexer.md#account)\> | **`Deprecated`** Use accountById |
| `accounts` | [`Account`](zeitgeistpm_indexer.md#account)[] | - |
| `accountsConnection` | [`AccountsConnection`](zeitgeistpm_indexer.md#accountsconnection) | - |
| `assetById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Asset`](zeitgeistpm_indexer.md#asset)\> | - |
| `assetByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Asset`](zeitgeistpm_indexer.md#asset)\> | **`Deprecated`** Use assetById |
| `assets` | [`Asset`](zeitgeistpm_indexer.md#asset)[] | - |
| `assetsConnection` | [`AssetsConnection`](zeitgeistpm_indexer.md#assetsconnection) | - |
| `historicalAccountBalanceById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalAccountBalance`](zeitgeistpm_indexer.md#historicalaccountbalance)\> | - |
| `historicalAccountBalanceByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalAccountBalance`](zeitgeistpm_indexer.md#historicalaccountbalance)\> | **`Deprecated`** Use historicalAccountBalanceById |
| `historicalAccountBalances` | [`HistoricalAccountBalance`](zeitgeistpm_indexer.md#historicalaccountbalance)[] | - |
| `historicalAccountBalancesConnection` | [`HistoricalAccountBalancesConnection`](zeitgeistpm_indexer.md#historicalaccountbalancesconnection) | - |
| `historicalAssetById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalAsset`](zeitgeistpm_indexer.md#historicalasset)\> | - |
| `historicalAssetByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalAsset`](zeitgeistpm_indexer.md#historicalasset)\> | **`Deprecated`** Use historicalAssetById |
| `historicalAssets` | [`HistoricalAsset`](zeitgeistpm_indexer.md#historicalasset)[] | - |
| `historicalAssetsConnection` | [`HistoricalAssetsConnection`](zeitgeistpm_indexer.md#historicalassetsconnection) | - |
| `historicalMarketById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalMarket`](zeitgeistpm_indexer.md#historicalmarket)\> | - |
| `historicalMarketByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalMarket`](zeitgeistpm_indexer.md#historicalmarket)\> | **`Deprecated`** Use historicalMarketById |
| `historicalMarkets` | [`HistoricalMarket`](zeitgeistpm_indexer.md#historicalmarket)[] | - |
| `historicalMarketsConnection` | [`HistoricalMarketsConnection`](zeitgeistpm_indexer.md#historicalmarketsconnection) | - |
| `historicalPoolById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalPool`](zeitgeistpm_indexer.md#historicalpool)\> | - |
| `historicalPoolByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalPool`](zeitgeistpm_indexer.md#historicalpool)\> | **`Deprecated`** Use historicalPoolById |
| `historicalPools` | [`HistoricalPool`](zeitgeistpm_indexer.md#historicalpool)[] | - |
| `historicalPoolsConnection` | [`HistoricalPoolsConnection`](zeitgeistpm_indexer.md#historicalpoolsconnection) | - |
| `marketById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Market`](zeitgeistpm_indexer.md#market)\> | - |
| `marketByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Market`](zeitgeistpm_indexer.md#market)\> | **`Deprecated`** Use marketById |
| `marketStats` | [`MarketStats`](zeitgeistpm_indexer.md#marketstats)[] | - |
| `markets` | [`Market`](zeitgeistpm_indexer.md#market)[] | - |
| `marketsConnection` | [`MarketsConnection`](zeitgeistpm_indexer.md#marketsconnection) | - |
| `poolById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Pool`](zeitgeistpm_indexer.md#pool)\> | - |
| `poolByUniqueInput?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Pool`](zeitgeistpm_indexer.md#pool)\> | **`Deprecated`** Use poolById |
| `pools` | [`Pool`](zeitgeistpm_indexer.md#pool)[] | - |
| `poolsConnection` | [`PoolsConnection`](zeitgeistpm_indexer.md#poolsconnection) | - |
| `squidStatus?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`SquidStatus`](zeitgeistpm_indexer.md#squidstatus)\> | - |
| `stats` | [`Stats`](zeitgeistpm_indexer.md#stats)[] | - |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2043](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2043)

___

### QueryAccountBalanceByIdArgs

Ƭ **QueryAccountBalanceByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2096](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2096)

___

### QueryAccountBalanceByUniqueInputArgs

Ƭ **QueryAccountBalanceByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2101](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2101)

___

### QueryAccountBalancesArgs

Ƭ **QueryAccountBalancesArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceWhereInput`](zeitgeistpm_indexer.md#accountbalancewhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2106](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2106)

___

### QueryAccountBalancesConnectionArgs

Ƭ **QueryAccountBalancesConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`AccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceWhereInput`](zeitgeistpm_indexer.md#accountbalancewhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2114](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2114)

___

### QueryAccountByIdArgs

Ƭ **QueryAccountByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2122](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2122)

___

### QueryAccountByUniqueInputArgs

Ƭ **QueryAccountByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2127](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2127)

___

### QueryAccountsArgs

Ƭ **QueryAccountsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountOrderByInput`](../enums/zeitgeistpm_indexer.AccountOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountWhereInput`](zeitgeistpm_indexer.md#accountwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2132](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2132)

___

### QueryAccountsConnectionArgs

Ƭ **QueryAccountsConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`AccountOrderByInput`](../enums/zeitgeistpm_indexer.AccountOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountWhereInput`](zeitgeistpm_indexer.md#accountwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2140](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2140)

___

### QueryAssetByIdArgs

Ƭ **QueryAssetByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2148](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2148)

___

### QueryAssetByUniqueInputArgs

Ƭ **QueryAssetByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2153](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2153)

___

### QueryAssetsArgs

Ƭ **QueryAssetsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetOrderByInput`](../enums/zeitgeistpm_indexer.AssetOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetWhereInput`](zeitgeistpm_indexer.md#assetwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2158](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2158)

___

### QueryAssetsConnectionArgs

Ƭ **QueryAssetsConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`AssetOrderByInput`](../enums/zeitgeistpm_indexer.AssetOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetWhereInput`](zeitgeistpm_indexer.md#assetwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2166](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2166)

___

### QueryHistoricalAccountBalanceByIdArgs

Ƭ **QueryHistoricalAccountBalanceByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2174](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2174)

___

### QueryHistoricalAccountBalanceByUniqueInputArgs

Ƭ **QueryHistoricalAccountBalanceByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2179](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2179)

___

### QueryHistoricalAccountBalancesArgs

Ƭ **QueryHistoricalAccountBalancesArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceWhereInput`](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2184](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2184)

___

### QueryHistoricalAccountBalancesConnectionArgs

Ƭ **QueryHistoricalAccountBalancesConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`HistoricalAccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceWhereInput`](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2192](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2192)

___

### QueryHistoricalAssetByIdArgs

Ƭ **QueryHistoricalAssetByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2200](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2200)

___

### QueryHistoricalAssetByUniqueInputArgs

Ƭ **QueryHistoricalAssetByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2205](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2205)

___

### QueryHistoricalAssetsArgs

Ƭ **QueryHistoricalAssetsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetWhereInput`](zeitgeistpm_indexer.md#historicalassetwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2210](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2210)

___

### QueryHistoricalAssetsConnectionArgs

Ƭ **QueryHistoricalAssetsConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`HistoricalAssetOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetWhereInput`](zeitgeistpm_indexer.md#historicalassetwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2218](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2218)

___

### QueryHistoricalMarketByIdArgs

Ƭ **QueryHistoricalMarketByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2226](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2226)

___

### QueryHistoricalMarketByUniqueInputArgs

Ƭ **QueryHistoricalMarketByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2231](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2231)

___

### QueryHistoricalMarketsArgs

Ƭ **QueryHistoricalMarketsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketWhereInput`](zeitgeistpm_indexer.md#historicalmarketwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2236](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2236)

___

### QueryHistoricalMarketsConnectionArgs

Ƭ **QueryHistoricalMarketsConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`HistoricalMarketOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketWhereInput`](zeitgeistpm_indexer.md#historicalmarketwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2244](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2244)

___

### QueryHistoricalPoolByIdArgs

Ƭ **QueryHistoricalPoolByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2252](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2252)

___

### QueryHistoricalPoolByUniqueInputArgs

Ƭ **QueryHistoricalPoolByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2257](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2257)

___

### QueryHistoricalPoolsArgs

Ƭ **QueryHistoricalPoolsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolWhereInput`](zeitgeistpm_indexer.md#historicalpoolwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2262](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2262)

___

### QueryHistoricalPoolsConnectionArgs

Ƭ **QueryHistoricalPoolsConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`HistoricalPoolOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolWhereInput`](zeitgeistpm_indexer.md#historicalpoolwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2270](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2270)

___

### QueryMarketByIdArgs

Ƭ **QueryMarketByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2278](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2278)

___

### QueryMarketByUniqueInputArgs

Ƭ **QueryMarketByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2283](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2283)

___

### QueryMarketStatsArgs

Ƭ **QueryMarketStatsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ids` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``][] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2288](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2288)

___

### QueryMarketsArgs

Ƭ **QueryMarketsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketOrderByInput`](../enums/zeitgeistpm_indexer.MarketOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketWhereInput`](zeitgeistpm_indexer.md#marketwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2293](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2293)

___

### QueryMarketsConnectionArgs

Ƭ **QueryMarketsConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`MarketOrderByInput`](../enums/zeitgeistpm_indexer.MarketOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketWhereInput`](zeitgeistpm_indexer.md#marketwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2301](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2301)

___

### QueryPoolByIdArgs

Ƭ **QueryPoolByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2309](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2309)

___

### QueryPoolByUniqueInputArgs

Ƭ **QueryPoolByUniqueInputArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `where` | [`WhereIdInput`](zeitgeistpm_indexer.md#whereidinput) |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2314](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2314)

___

### QueryPoolsArgs

Ƭ **QueryPoolsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolOrderByInput`](../enums/zeitgeistpm_indexer.PoolOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2319](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2319)

___

### QueryPoolsConnectionArgs

Ƭ **QueryPoolsConnectionArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``]\> |
| `first?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy` | [`PoolOrderByInput`](../enums/zeitgeistpm_indexer.PoolOrderByInput.md)[] |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2327](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2327)

___

### Scalars

Ƭ **Scalars**: `Object`

All built-in and custom scalars, mapped to their actual values

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BigInt` | `any` |
| `Boolean` | `boolean` |
| `DateTime` | `any` |
| `Float` | `number` |
| `ID` | `string` |
| `Int` | `number` |
| `String` | `string` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:10](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L10)

___

### Sdk

Ƭ **Sdk**: `ReturnType`<typeof [`getSdk`](zeitgeistpm_indexer.md#getsdk)\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2903](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2903)

___

### SdkFunctionWrapper

Ƭ **SdkFunctionWrapper**: <T\>(`action`: (`requestHeaders?`: `Record`<`string`, `string`\>) => `Promise`<`T`\>, `operationName`: `string`, `operationType?`: `string`) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`action`, `operationName`, `operationType?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | (`requestHeaders?`: `Record`<`string`, `string`\>) => `Promise`<`T`\> |
| `operationName` | `string` |
| `operationType?` | `string` |

##### Returns

`Promise`<`T`\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2858](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2858)

___

### SquidStatus

Ƭ **SquidStatus**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"SquidStatus"`` | - |
| `height?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> | The height of the processed part of the chain |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2334](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2334)

___

### SquidStatusQuery

Ƭ **SquidStatusQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `squidStatus?` | { `__typename?`: ``"SquidStatus"`` ; `height?`: `number` \| ``null``  } \| ``null`` |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2605](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2605)

___

### SquidStatusQueryVariables

Ƭ **SquidStatusQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `[key: string]`: `never`;  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2602](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2602)

___

### Stats

Ƭ **Stats**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Stats"`` |
| `totalLiquidity` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] |
| `totalVolume` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2340](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2340)

___

### StatsQuery

Ƭ **StatsQuery**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Query"`` |
| `stats` | { `__typename?`: ``"Stats"`` ; `totalLiquidity`: `any` ; `totalVolume`: `any`  }[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2610](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2610)

___

### StatsQueryVariables

Ƭ **StatsQueryVariables**: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `[key: string]`: `never`;  }\>

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2607](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2607)

___

### Subscription

Ƭ **Subscription**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__typename?` | ``"Subscription"`` |
| `accountBalanceById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`AccountBalance`](zeitgeistpm_indexer.md#accountbalance)\> |
| `accountBalances` | [`AccountBalance`](zeitgeistpm_indexer.md#accountbalance)[] |
| `accountById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Account`](zeitgeistpm_indexer.md#account)\> |
| `accounts` | [`Account`](zeitgeistpm_indexer.md#account)[] |
| `assetById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Asset`](zeitgeistpm_indexer.md#asset)\> |
| `assets` | [`Asset`](zeitgeistpm_indexer.md#asset)[] |
| `historicalAccountBalanceById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalAccountBalance`](zeitgeistpm_indexer.md#historicalaccountbalance)\> |
| `historicalAccountBalances` | [`HistoricalAccountBalance`](zeitgeistpm_indexer.md#historicalaccountbalance)[] |
| `historicalAssetById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalAsset`](zeitgeistpm_indexer.md#historicalasset)\> |
| `historicalAssets` | [`HistoricalAsset`](zeitgeistpm_indexer.md#historicalasset)[] |
| `historicalMarketById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalMarket`](zeitgeistpm_indexer.md#historicalmarket)\> |
| `historicalMarkets` | [`HistoricalMarket`](zeitgeistpm_indexer.md#historicalmarket)[] |
| `historicalPoolById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`HistoricalPool`](zeitgeistpm_indexer.md#historicalpool)\> |
| `historicalPools` | [`HistoricalPool`](zeitgeistpm_indexer.md#historicalpool)[] |
| `marketById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Market`](zeitgeistpm_indexer.md#market)\> |
| `markets` | [`Market`](zeitgeistpm_indexer.md#market)[] |
| `poolById?` | [`Maybe`](zeitgeistpm_indexer.md#maybe)<[`Pool`](zeitgeistpm_indexer.md#pool)\> |
| `pools` | [`Pool`](zeitgeistpm_indexer.md#pool)[] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2346](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2346)

___

### SubscriptionAccountBalanceByIdArgs

Ƭ **SubscriptionAccountBalanceByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2369](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2369)

___

### SubscriptionAccountBalancesArgs

Ƭ **SubscriptionAccountBalancesArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceWhereInput`](zeitgeistpm_indexer.md#accountbalancewhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2374](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2374)

___

### SubscriptionAccountByIdArgs

Ƭ **SubscriptionAccountByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2382](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2382)

___

### SubscriptionAccountsArgs

Ƭ **SubscriptionAccountsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountOrderByInput`](../enums/zeitgeistpm_indexer.AccountOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountWhereInput`](zeitgeistpm_indexer.md#accountwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2387](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2387)

___

### SubscriptionAssetByIdArgs

Ƭ **SubscriptionAssetByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2395](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2395)

___

### SubscriptionAssetsArgs

Ƭ **SubscriptionAssetsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetOrderByInput`](../enums/zeitgeistpm_indexer.AssetOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetWhereInput`](zeitgeistpm_indexer.md#assetwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2400](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2400)

___

### SubscriptionHistoricalAccountBalanceByIdArgs

Ƭ **SubscriptionHistoricalAccountBalanceByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2408](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2408)

___

### SubscriptionHistoricalAccountBalancesArgs

Ƭ **SubscriptionHistoricalAccountBalancesArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceWhereInput`](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2413](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2413)

___

### SubscriptionHistoricalAssetByIdArgs

Ƭ **SubscriptionHistoricalAssetByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2421](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2421)

___

### SubscriptionHistoricalAssetsArgs

Ƭ **SubscriptionHistoricalAssetsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetWhereInput`](zeitgeistpm_indexer.md#historicalassetwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2426](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2426)

___

### SubscriptionHistoricalMarketByIdArgs

Ƭ **SubscriptionHistoricalMarketByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2434](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2434)

___

### SubscriptionHistoricalMarketsArgs

Ƭ **SubscriptionHistoricalMarketsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketWhereInput`](zeitgeistpm_indexer.md#historicalmarketwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2439](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2439)

___

### SubscriptionHistoricalPoolByIdArgs

Ƭ **SubscriptionHistoricalPoolByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2447](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2447)

___

### SubscriptionHistoricalPoolsArgs

Ƭ **SubscriptionHistoricalPoolsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolWhereInput`](zeitgeistpm_indexer.md#historicalpoolwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2452](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2452)

___

### SubscriptionMarketByIdArgs

Ƭ **SubscriptionMarketByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2460](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2460)

___

### SubscriptionMarketsArgs

Ƭ **SubscriptionMarketsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketOrderByInput`](../enums/zeitgeistpm_indexer.MarketOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketWhereInput`](zeitgeistpm_indexer.md#marketwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2465](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2465)

___

### SubscriptionPoolByIdArgs

Ƭ **SubscriptionPoolByIdArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2473](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2473)

___

### SubscriptionPoolsArgs

Ƭ **SubscriptionPoolsArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `offset?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`Scalars`](zeitgeistpm_indexer.md#scalars)[``"Int"``]\> |
| `orderBy?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolOrderByInput`](../enums/zeitgeistpm_indexer.PoolOrderByInput.md)[]\> |
| `where?` | [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2478](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2478)

___

### Weight

Ƭ **Weight**: `Object`

Asset weightage details

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `__typename?` | ``"Weight"`` | - |
| `assetId` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] | Zeitgeist's identifier for asset |
| `len` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"BigInt"``] | Length or weight of the asset |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2486](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2486)

___

### WhereIdInput

Ƭ **WhereIdInput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Scalars`](zeitgeistpm_indexer.md#scalars)[``"String"``] |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2494](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2494)

___

### ZeitgeistIndexer

Ƭ **ZeitgeistIndexer**: [`GQLSdk`](zeitgeistpm_indexer.md#gqlsdk) & `Augments` & { `client`: `GraphQLClient`  }

The zeitgeist indexer client.

#### Defined in

[packages/indexer/src/types.ts:16](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/types.ts#L16)

## Variables

### AccountBalancesDocument

• `Const` **AccountBalancesDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2747](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2747)

___

### AssetsDocument

• `Const` **AssetsDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2754](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2754)

___

### FullAccountBalanceFragmentDoc

• `Const` **FullAccountBalanceFragmentDoc**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2612](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2612)

___

### FullAssetFragmentDoc

• `Const` **FullAssetFragmentDoc**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2625](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2625)

___

### FullHistoricalAccountBalanceFragmentDoc

• `Const` **FullHistoricalAccountBalanceFragmentDoc**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2634](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2634)

___

### FullHistoricalAssetsFragmentDoc

• `Const` **FullHistoricalAssetsFragmentDoc**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2646](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2646)

___

### FullMarketFragmentDoc

• `Const` **FullMarketFragmentDoc**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2682](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2682)

___

### FullPoolFragmentDoc

• `Const` **FullPoolFragmentDoc**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2661](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2661)

___

### HistoricalAccountBalancesDocument

• `Const` **HistoricalAccountBalancesDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2761](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2761)

___

### HistoricalAssetsDocument

• `Const` **HistoricalAssetsDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2773](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2773)

___

### HistoricalMarketsDocument

• `Const` **HistoricalMarketsDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2794](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2794)

___

### HistoricalPoolsDocument

• `Const` **HistoricalPoolsDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2827](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2827)

___

### MarketStatusCountDocument

• `Const` **MarketStatusCountDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2787](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2787)

___

### MarketsDocument

• `Const` **MarketsDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2780](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2780)

___

### PingQueryDocument

• `Const` **PingQueryDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2813](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2813)

___

### PoolsDocument

• `Const` **PoolsDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2820](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2820)

___

### SquidStatusDocument

• `Const` **SquidStatusDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2842](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2842)

___

### StatsDocument

• `Const` **StatsDocument**: `DocumentNode`

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2849](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2849)

## Functions

### create

▸ **create**(`config`): [`ZeitgeistIndexer`](zeitgeistpm_indexer.md#zeitgeistindexer)

Create a zeitgeist indexer client.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`Config`](zeitgeistpm_indexer.md#config) | Config |

#### Returns

[`ZeitgeistIndexer`](zeitgeistpm_indexer.md#zeitgeistindexer)

ZeitgeistIndexer

#### Defined in

[packages/indexer/src/index.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/index.ts#L15)

___

### getSdk

▸ **getSdk**(`client`, `withWrapper?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `client` | `GraphQLClient` | `undefined` |
| `withWrapper` | [`SdkFunctionWrapper`](zeitgeistpm_indexer.md#sdkfunctionwrapper) | `defaultWrapper` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accountBalances` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md) \| [`AccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.AccountBalanceOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AccountBalanceWhereInput`](zeitgeistpm_indexer.md#accountbalancewhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`AccountBalancesQuery`](zeitgeistpm_indexer.md#accountbalancesquery)\> |
| `assets` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetOrderByInput`](../enums/zeitgeistpm_indexer.AssetOrderByInput.md) \| [`AssetOrderByInput`](../enums/zeitgeistpm_indexer.AssetOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`AssetWhereInput`](zeitgeistpm_indexer.md#assetwhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`AssetsQuery`](zeitgeistpm_indexer.md#assetsquery)\> |
| `historicalAccountBalances` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md) \| [`HistoricalAccountBalanceOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAccountBalanceOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAccountBalanceWhereInput`](zeitgeistpm_indexer.md#historicalaccountbalancewhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`HistoricalAccountBalancesQuery`](zeitgeistpm_indexer.md#historicalaccountbalancesquery)\> |
| `historicalAssets` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md) \| [`HistoricalAssetOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalAssetOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalAssetWhereInput`](zeitgeistpm_indexer.md#historicalassetwhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`HistoricalAssetsQuery`](zeitgeistpm_indexer.md#historicalassetsquery)\> |
| `historicalMarkets` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md) \| [`HistoricalMarketOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalMarketOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalMarketWhereInput`](zeitgeistpm_indexer.md#historicalmarketwhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`HistoricalMarketsQuery`](zeitgeistpm_indexer.md#historicalmarketsquery)\> |
| `historicalPools` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md) \| [`HistoricalPoolOrderByInput`](../enums/zeitgeistpm_indexer.HistoricalPoolOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`HistoricalPoolWhereInput`](zeitgeistpm_indexer.md#historicalpoolwhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`HistoricalPoolsQuery`](zeitgeistpm_indexer.md#historicalpoolsquery)\> |
| `marketStatusCount` | (`variables`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `status`: [`MarketStatus`](../enums/zeitgeistpm_indexer.MarketStatus.md)  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`MarketStatusCountQuery`](zeitgeistpm_indexer.md#marketstatuscountquery)\> |
| `markets` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketOrderByInput`](../enums/zeitgeistpm_indexer.MarketOrderByInput.md) \| [`MarketOrderByInput`](../enums/zeitgeistpm_indexer.MarketOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`MarketWhereInput`](zeitgeistpm_indexer.md#marketwhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`MarketsQuery`](zeitgeistpm_indexer.md#marketsquery)\> |
| `pingQuery` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `[key: string]`: `never`;  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`PingQueryQuery`](zeitgeistpm_indexer.md#pingqueryquery)\> |
| `pools` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `limit?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `offset?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<`number`\> ; `order?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolOrderByInput`](../enums/zeitgeistpm_indexer.PoolOrderByInput.md) \| [`PoolOrderByInput`](../enums/zeitgeistpm_indexer.PoolOrderByInput.md)[]\> ; `where?`: [`InputMaybe`](zeitgeistpm_indexer.md#inputmaybe)<[`PoolWhereInput`](zeitgeistpm_indexer.md#poolwhereinput)\>  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`PoolsQuery`](zeitgeistpm_indexer.md#poolsquery)\> |
| `squidStatus` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `[key: string]`: `never`;  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`SquidStatusQuery`](zeitgeistpm_indexer.md#squidstatusquery)\> |
| `stats` | (`variables?`: [`Exact`](zeitgeistpm_indexer.md#exact)<{ `[key: string]`: `never`;  }\>, `requestHeaders?`: `HeadersInit`) => `Promise`<[`StatsQuery`](zeitgeistpm_indexer.md#statsquery)\> |

#### Defined in

[packages/indexer/src/graphql/sdk.ts:2863](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/indexer/src/graphql/sdk.ts#L2863)
