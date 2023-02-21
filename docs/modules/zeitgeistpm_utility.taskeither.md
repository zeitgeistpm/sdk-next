[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / taskeither

# Namespace: taskeither

[@zeitgeistpm/utility](zeitgeistpm_utility.md).taskeither

## Table of contents

### Type Aliases

- [TaskEither](zeitgeistpm_utility.taskeither.md#taskeither)

### Functions

- [from](zeitgeistpm_utility.taskeither.md#from)

## Type Aliases

### TaskEither

Ƭ **TaskEither**<`L`, `R`, `Args`\>: (...`args`: `Args`) => [`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | `L` |
| `R` | `R` |
| `Args` | extends `ReadonlyArray`<`unknown`\> |

#### Type declaration

▸ (`...args`): [`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `R`\>

A task that returns an EitherInterface type with syntactic sugar for async unwrapping.

**`Generic`**

L - left type

**`Generic`**

R - right type

**`Generic`**

Args extends ReadonlyArray<unknown>> - args passed to the task

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args` |

##### Returns

[`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `R`\>

#### Defined in

[packages/utility/src/taskeither/index.ts:10](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/taskeither/index.ts#L10)

## Functions

### from

▸ **from**<`R`, `L`, `Args`\>(`fn`): [`TaskEither`](zeitgeistpm_utility.taskeither.md#taskeither)<`L`, `R`, `Args`\>

Create a TaskEither from an async function.

**`Generic`**

R - right value and return type of function

**`Generic`**

L - left value and the error type of the function if it throws

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `L` | `Error` |
| `Args` | extends readonly `unknown`[] = [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (...`args`: `Args`) => `Promise`<`R`\> | (...args: Args) => Promise<R> |

#### Returns

[`TaskEither`](zeitgeistpm_utility.taskeither.md#taskeither)<`L`, `R`, `Args`\>

TaskEither<L, R, Args>

#### Defined in

[packages/utility/src/taskeither/index.ts:22](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/taskeither/index.ts#L22)
