[sdk-v2](../README.md) / [Modules](../modules.md) / @zeitgeistpm/rpc

# Module: @zeitgeistpm/rpc

## Table of contents

### Classes

- [RetractedError](../classes/zeitgeistpm_rpc.RetractedError.md)
- [UnknownDispatchError](../classes/zeitgeistpm_rpc.UnknownDispatchError.md)

### Type Aliases

- [ExtSigner](zeitgeistpm_rpc.md#extsigner)
- [ExtractableResult](zeitgeistpm_rpc.md#extractableresult)
- [KeyringPairOrExtSigner](zeitgeistpm_rpc.md#keyringpairorextsigner)
- [TransactionError](zeitgeistpm_rpc.md#transactionerror)
- [TransactionHooks](zeitgeistpm_rpc.md#transactionhooks)
- [ZeitgeistApiOptions](zeitgeistpm_rpc.md#zeitgeistapioptions)

### Functions

- [isExtSigner](zeitgeistpm_rpc.md#isextsigner)
- [options](zeitgeistpm_rpc.md#options)
- [signAndSend](zeitgeistpm_rpc.md#signandsend)
- [transactionErrorToString](zeitgeistpm_rpc.md#transactionerrortostring)

## Type Aliases

### ExtSigner

Ƭ **ExtSigner**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signer` | `Signer` |

#### Defined in

[packages/rpc/src/lib/keyring/types.ts:4](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/keyring/types.ts#L4)

___

### ExtractableResult

Ƭ **ExtractableResult**<`R`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `R` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `raw` | `ISubmittableResult` | Raw response from the node. |
| `saturate` | () => `R` | Lazy function to saturate response with extracted event data. |

#### Defined in

[packages/rpc/src/lib/transactions/types.ts:4](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/transactions/types.ts#L4)

___

### KeyringPairOrExtSigner

Ƭ **KeyringPairOrExtSigner**: `KeyringPair` \| [`ExtSigner`](zeitgeistpm_rpc.md#extsigner)

#### Defined in

[packages/rpc/src/lib/keyring/types.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/keyring/types.ts#L6)

___

### TransactionError

Ƭ **TransactionError**: `RpcError` \| `RegistryError` \| [`RetractedError`](../classes/zeitgeistpm_rpc.RetractedError.md) \| [`UnknownDispatchError`](../classes/zeitgeistpm_rpc.UnknownDispatchError.md)

#### Defined in

[packages/rpc/src/lib/transactions/types.ts:25](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/transactions/types.ts#L25)

___

### TransactionHooks

Ƭ **TransactionHooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hooks?` | { `inBlock?`: (`result`: `ISubmittableResult`) => `void` ; `isFinalized?`: (`result`: `ISubmittableResult`) => `void` ; `retracted?`: () => `void`  } |
| `hooks.inBlock?` | (`result`: `ISubmittableResult`) => `void` |
| `hooks.isFinalized?` | (`result`: `ISubmittableResult`) => `void` |
| `hooks.retracted?` | () => `void` |

#### Defined in

[packages/rpc/src/lib/transactions/types.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/transactions/types.ts#L17)

___

### ZeitgeistApiOptions

Ƭ **ZeitgeistApiOptions**: `Object`

Configuration for provider.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `provider` | `WsProvider` |

#### Defined in

[packages/rpc/src/index.ts:12](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/index.ts#L12)

## Functions

### isExtSigner

▸ **isExtSigner**(`signer`): signer is ExtSigner

Typeguard if the signer sources from an extension.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | [`KeyringPairOrExtSigner`](zeitgeistpm_rpc.md#keyringpairorextsigner) | KeyringPairOrExtSigner |

#### Returns

signer is ExtSigner

signer is ExtSigner

#### Defined in

[packages/rpc/src/lib/keyring/index.ts:11](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/keyring/index.ts#L11)

___

### options

▸ **options**(`opts`): `ApiOptions`

Create options including types and typedefs for the zeitgeist rpc api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`ZeitgeistApiOptions`](zeitgeistpm_rpc.md#zeitgeistapioptions) | ZeitgeistApiOptions |

#### Returns

`ApiOptions`

ApiOptions

#### Defined in

[packages/rpc/src/index.ts:22](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/index.ts#L22)

___

### signAndSend

▸ **signAndSend**(`...args`): `IAEither`<[`TransactionError`](zeitgeistpm_rpc.md#transactionerror), `ISubmittableResult`\>

A task that returns an EitherInterface type with syntactic sugar for async unwrapping.

**`Generic`**

L - left type

**`Generic`**

R - right type

**`Generic`**

Args extends ReadonlyArray<unknown>> - args passed to the task

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [{ `api`: `ApiPromise` ; `signer`: [`KeyringPairOrExtSigner`](zeitgeistpm_rpc.md#keyringpairorextsigner) ; `tx`: `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> ; `waitForFinalization?`: `boolean`  } & [`TransactionHooks`](zeitgeistpm_rpc.md#transactionhooks)] |

#### Returns

`IAEither`<[`TransactionError`](zeitgeistpm_rpc.md#transactionerror), `ISubmittableResult`\>

#### Defined in

packages/utility/dist/taskeither/index.d.ts:9

___

### transactionErrorToString

▸ **transactionErrorToString**(`error`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`TransactionError`](zeitgeistpm_rpc.md#transactionerror) |

#### Returns

`string`

#### Defined in

[packages/rpc/src/lib/transactions/types.ts:45](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/transactions/types.ts#L45)
