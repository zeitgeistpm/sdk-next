[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / pfunc

# Namespace: pfunc

[@zeitgeistpm/utility](zeitgeistpm_utility.md).pfunc

## Table of contents

### Type Aliases

- [PFunc](zeitgeistpm_utility.pfunc.md#pfunc)

### Functions

- [pfunc](zeitgeistpm_utility.pfunc.md#pfunc-1)

## Type Aliases

### PFunc

Ƭ **PFunc**<`F`, `P`\>: `F` extends (...`args`: `any`[]) => `any` ? `F` & `P` : `never`

Function with added properties.

**`Generic`**

F extends (...args: any[]) => any - function to augment

**`Generic`**

P - properties to augments function with.

#### Type parameters

| Name |
| :------ |
| `F` |
| `P` |

#### Defined in

[packages/utility/src/pfunc/index.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/pfunc/index.ts#L7)

## Functions

### pfunc

▸ **pfunc**<`F`, `P`\>(`f`, `props`): [`PFunc`](zeitgeistpm_utility.pfunc.md#pfunc)<`F`, `P`\>

Augment a function with properties.

**`Generic`**

F extends (...args: any[]) => any - function to augment

**`Generic`**

P - properties to augments function with.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[]) => `any` |
| `P` | `P` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `F` | F |
| `props` | `P` | P |

#### Returns

[`PFunc`](zeitgeistpm_utility.pfunc.md#pfunc)<`F`, `P`\>

Functor<F, P>

#### Defined in

[packages/utility/src/pfunc/index.ts:18](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/pfunc/index.ts#L18)
