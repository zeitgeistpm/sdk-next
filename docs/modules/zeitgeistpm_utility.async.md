[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / async

# Namespace: async

[@zeitgeistpm/utility](zeitgeistpm_utility.md).async

## Table of contents

### Type Aliases

- [Channel](zeitgeistpm_utility.async.md#channel)
- [ChannelBuffer](zeitgeistpm_utility.async.md#channelbuffer)
- [Deferred](zeitgeistpm_utility.async.md#deferred)
- [Returned](zeitgeistpm_utility.async.md#returned)

### Variables

- [returned](zeitgeistpm_utility.async.md#returned-1)

### Functions

- [channel](zeitgeistpm_utility.async.md#channel-1)
- [deferred](zeitgeistpm_utility.async.md#deferred-1)
- [delay](zeitgeistpm_utility.async.md#delay)
- [isDeferred](zeitgeistpm_utility.async.md#isdeferred)
- [isReturned](zeitgeistpm_utility.async.md#isreturned)

## Type Aliases

### Channel

Ƭ **Channel**<`T`\>: `PromiseLike`<`T`\> & `AsyncIterable`<`T`\> & { `end`: (`value`: `T`) => `void` ; `put`: (`value`: `T`) => `void` ; `take`: () => `Promise`<`T`\>  }

Async Channel ala Go

**`Generic`**

T - type of values in the channel

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/utility/src/async/channel.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/channel.ts#L7)

___

### ChannelBuffer

Ƭ **ChannelBuffer**<`T`\>: (`T` \| [`Deferred`](zeitgeistpm_utility.async.md#deferred)<`T`\> \| [`Returned`](zeitgeistpm_utility.async.md#returned)<`T`\>)[]

Channel buffers can be concrete values, return values or deferred waiters.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/utility/src/async/channel.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/channel.ts#L26)

___

### Deferred

Ƭ **Deferred**<`T`\>: `Object`

A deffered value that can be resolved at a later time outside of its closure.

**`Generic`**

T - value of the deffered

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reject` | (`reason?`: `any`) => `void` |
| `resolve` | (`value`: `T` \| `PromiseLike`<`T`\>) => `void` |
| `value` | `Promise`<`T`\> |

#### Defined in

[packages/utility/src/async/deferred.ts:5](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/deferred.ts#L5)

___

### Returned

Ƭ **Returned**<`R`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `R` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[returned]` | `R` |

#### Defined in

[packages/utility/src/async/channel.ts:32](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/channel.ts#L32)

## Variables

### returned

• `Const` **returned**: typeof [`returned`](zeitgeistpm_utility.async.md#returned-1)

A returned value type. Terminates the channel.

#### Defined in

[packages/utility/src/async/channel.ts:31](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/channel.ts#L31)

## Functions

### channel

▸ **channel**<`T`\>(`buffer?`): [`Channel`](zeitgeistpm_utility.async.md#channel)<`T`\>

Create a new channel of type T

**`Generic`**

T - value type of channel

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `buffer` | [`ChannelBuffer`](zeitgeistpm_utility.async.md#channelbuffer)<`T`\> | `[]` | Array<T \| Deferred<T> \| Returned<T>> |

#### Returns

[`Channel`](zeitgeistpm_utility.async.md#channel)<`T`\>

Channel<T>

#### Defined in

[packages/utility/src/async/channel.ts:51](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/channel.ts#L51)

___

### deferred

▸ **deferred**<`T`\>(): [`Deferred`](zeitgeistpm_utility.async.md#deferred)<`T`\>

Create a new Deffered

**`Generic`**

T - value of the deffered

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Deferred`](zeitgeistpm_utility.async.md#deferred)<`T`\>

Deferred<T>

#### Defined in

[packages/utility/src/async/deferred.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/deferred.ts#L17)

___

### delay

▸ **delay**(`ms`): `Promise`<`unknown`\>

Promise based delay

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | number |

#### Returns

`Promise`<`unknown`\>

Promise<void>

#### Defined in

[packages/utility/src/async/delay.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/delay.ts#L7)

___

### isDeferred

▸ **isDeferred**<`T`\>(`value`): value is Deferred<T\>

Type guard for Deffered values.

**`Generic`**

T - value of the deffered

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | any |

#### Returns

value is Deferred<T\>

value is Deferred<T>

#### Defined in

[packages/utility/src/async/deferred.ts:40](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/deferred.ts#L40)

___

### isReturned

▸ **isReturned**<`T`\>(`value`): value is Returned<T\>

Type guard for returned values.

**`Generic`**

T - value type of channel

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | unknwon |

#### Returns

value is Returned<T\>

value is Returned<T>

#### Defined in

[packages/utility/src/async/channel.ts:41](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/async/channel.ts#L41)
