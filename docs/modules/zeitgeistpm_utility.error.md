[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / error

# Namespace: error

[@zeitgeistpm/utility](zeitgeistpm_utility.md).error

## Table of contents

### Functions

- [throws](zeitgeistpm_utility.error.md#throws)
- [throwsC](zeitgeistpm_utility.error.md#throwsc)

## Functions

### throws

▸ **throws**<`A`, `E`\>(`error`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `E` | `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `E` |

#### Returns

`A`

#### Defined in

[packages/utility/src/error/index.ts:1](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/error/index.ts#L1)

___

### throwsC

▸ **throwsC**<`A`, `E`\>(`error`): () => `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `E` | `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `E` |

#### Returns

`fn`

▸ (): `A`

##### Returns

`A`

#### Defined in

[packages/utility/src/error/index.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/error/index.ts#L6)
