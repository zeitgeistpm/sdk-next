[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / na

# Namespace: na

[@zeitgeistpm/utility](zeitgeistpm_utility.md).na

## Table of contents

### Type Aliases

- [NA](zeitgeistpm_utility.na.md#na)

### Variables

- [NA](zeitgeistpm_utility.na.md#na-1)

### Functions

- [isAvailable](zeitgeistpm_utility.na.md#isavailable)
- [isNA](zeitgeistpm_utility.na.md#isna)
- [na](zeitgeistpm_utility.na.md#na-2)

## Type Aliases

### NA

Ƭ **NA**: `Object`

Type representing values that are not available.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__type` | typeof `sym` |
| `reason` | `string` |

#### Defined in

[packages/utility/src/na/index.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/na/index.ts#L6)

[packages/utility/src/na/index.ts:27](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/na/index.ts#L27)

## Variables

### NA

• **NA**: [`NA`](zeitgeistpm_utility.na.md#na-1)

Const symbold representing a not available value.

#### Defined in

[packages/utility/src/na/index.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/na/index.ts#L6)

[packages/utility/src/na/index.ts:27](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/na/index.ts#L27)

## Functions

### isAvailable

▸ **isAvailable**<`T`\>(`value`): value is T

Typeguard to check if a value is available

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`NA`](zeitgeistpm_utility.na.md#na-1) \| `T` | T \| NA |

#### Returns

value is T

value is T

#### Defined in

[packages/utility/src/na/index.ts:47](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/na/index.ts#L47)

___

### isNA

▸ **isNA**(`value`): value is NA

Typeguard for NA values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | unknown |

#### Returns

value is NA

value is NA

#### Defined in

[packages/utility/src/na/index.ts:35](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/na/index.ts#L35)

___

### na

▸ **na**(`reason`): [`NA`](zeitgeistpm_utility.na.md#na-1)

Create a NA value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | `string` | string |

#### Returns

[`NA`](zeitgeistpm_utility.na.md#na-1)

NA

#### Defined in

[packages/utility/src/na/index.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/na/index.ts#L17)
