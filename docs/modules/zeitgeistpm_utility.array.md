[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / array

# Namespace: array

[@zeitgeistpm/utility](zeitgeistpm_utility.md).array

## Table of contents

### Type Aliases

- [Unpacked](zeitgeistpm_utility.array.md#unpacked)

### Functions

- [project](zeitgeistpm_utility.array.md#project)
- [range](zeitgeistpm_utility.array.md#range)
- [zip](zeitgeistpm_utility.array.md#zip)

## Type Aliases

### Unpacked

Ƭ **Unpacked**<`T`\>: `T` extends infer U[] ? `U` : `T`

Unpack the item type of an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/utility/src/array/index.ts:4](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/array/index.ts#L4)

## Functions

### project

▸ **project**<`A`\>(`array`, `step`): `A`[]

Project every N item of an array based on a step.

**`Generic`**

A - item type of array

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `A`[] | A[] |
| `step` | `number` | number |

#### Returns

`A`[]

A[]

#### Defined in

[packages/utility/src/array/index.ts:37](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/array/index.ts#L37)

___

### range

▸ **range**(`start`, `end`): `number`[]

Create a range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | number |
| `end` | `number` | number |

#### Returns

`number`[]

number[]

#### Defined in

[packages/utility/src/array/index.ts:13](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/array/index.ts#L13)

___

### zip

▸ **zip**<`A`, `B`\>(`as`, `bs`): [`A`, `B`][]

Zip two arrays.

**`Generic`**

A - item type of fst placement array

**`Generic`**

B - item type of snd placement array

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `as` | `A`[] | A[] |
| `bs` | `B`[] | B[] |

#### Returns

[`A`, `B`][]

[A, B][]

#### Defined in

[packages/utility/src/array/index.ts:27](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/array/index.ts#L27)
