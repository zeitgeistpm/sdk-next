[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / option

# Namespace: option

[@zeitgeistpm/utility](zeitgeistpm_utility.md).option

## Table of contents

### Type Aliases

- [IOption](zeitgeistpm_utility.option.md#ioption)
- [None](zeitgeistpm_utility.option.md#none)
- [Option](zeitgeistpm_utility.option.md#option)
- [OrHandler](zeitgeistpm_utility.option.md#orhandler)
- [Some](zeitgeistpm_utility.option.md#some)

### Functions

- [bind](zeitgeistpm_utility.option.md#bind)
- [from](zeitgeistpm_utility.option.md#from)
- [fromNullable](zeitgeistpm_utility.option.md#fromnullable)
- [isNone](zeitgeistpm_utility.option.md#isnone)
- [isSome](zeitgeistpm_utility.option.md#issome)
- [map](zeitgeistpm_utility.option.md#map)
- [none](zeitgeistpm_utility.option.md#none-1)
- [option](zeitgeistpm_utility.option.md#option-1)
- [some](zeitgeistpm_utility.option.md#some-1)
- [tryCatch](zeitgeistpm_utility.option.md#trycatch)
- [unwrap](zeitgeistpm_utility.option.md#unwrap)
- [unwrapOr](zeitgeistpm_utility.option.md#unwrapor)

## Type Aliases

### IOption

Ƭ **IOption**<`A`\>: [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> & { `bind`: <B\>(`f`: (`a`: `A`) => [`Option`](zeitgeistpm_utility.option.md#option)<`B`\>) => [`IOption`](zeitgeistpm_utility.option.md#ioption)<`B`\> ; `isNone`: () => `boolean` ; `isSome`: () => `boolean` ; `map`: <B\>(`f`: (`a`: `A`) => `B`) => [`IOption`](zeitgeistpm_utility.option.md#ioption)<`B`\> ; `unwrap`: () => ``null`` \| `A` ; `unwrapOr`: (`or`: [`OrHandler`](zeitgeistpm_utility.option.md#orhandler)<`A`\>) => `A`  }

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[packages/utility/src/option/index.ts:49](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L49)

___

### None

Ƭ **None**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__option` | ``"none"`` |

#### Defined in

[packages/utility/src/option/index.ts:11](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L11)

___

### Option

Ƭ **Option**<`A`\>: [`Some`](zeitgeistpm_utility.option.md#some)<`A`\> \| [`None`](zeitgeistpm_utility.option.md#none)

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[packages/utility/src/option/index.ts:4](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L4)

___

### OrHandler

Ƭ **OrHandler**<`A`\>: `A` \| (`e?`: `Error`) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Defined in

[packages/utility/src/option/index.ts:24](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L24)

___

### Some

Ƭ **Some**<`A`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__option` | ``"some"`` |
| `value` | `A` |

#### Defined in

[packages/utility/src/option/index.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L6)

## Functions

### bind

▸ **bind**<`A`, `B`\>(`f`, `option`): [`Option`](zeitgeistpm_utility.option.md#option)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => [`Option`](zeitgeistpm_utility.option.md#option)<`B`\> |
| `option` | [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> |

#### Returns

[`Option`](zeitgeistpm_utility.option.md#option)<`B`\>

#### Defined in

[packages/utility/src/option/index.ts:34](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L34)

___

### from

▸ **from**<`A`\>(`value`): [`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `A` |

#### Returns

[`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Defined in

[packages/utility/src/option/index.ts:37](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L37)

___

### fromNullable

▸ **fromNullable**<`A`\>(`value`): [`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `A` |

#### Returns

[`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Defined in

[packages/utility/src/option/index.ts:68](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L68)

___

### isNone

▸ **isNone**<`A`\>(`option`): option is None

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> |

#### Returns

option is None

#### Defined in

[packages/utility/src/option/index.ts:29](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L29)

___

### isSome

▸ **isSome**<`A`\>(`option`): option is Some<A\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> |

#### Returns

option is Some<A\>

#### Defined in

[packages/utility/src/option/index.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L26)

___

### map

▸ **map**<`A`, `B`\>(`f`, `option`): [`Option`](zeitgeistpm_utility.option.md#option)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `B` |
| `option` | [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> |

#### Returns

[`Option`](zeitgeistpm_utility.option.md#option)<`B`\>

#### Defined in

[packages/utility/src/option/index.ts:31](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L31)

___

### none

▸ **none**(): [`None`](zeitgeistpm_utility.option.md#none)

#### Returns

[`None`](zeitgeistpm_utility.option.md#none)

#### Defined in

[packages/utility/src/option/index.ts:20](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L20)

___

### option

▸ **option**<`A`\>(`_option`): [`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_option` | [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> |

#### Returns

[`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Defined in

[packages/utility/src/option/index.ts:58](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L58)

___

### some

▸ **some**<`A`\>(`value`): [`Some`](zeitgeistpm_utility.option.md#some)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` |

#### Returns

[`Some`](zeitgeistpm_utility.option.md#some)<`A`\>

#### Defined in

[packages/utility/src/option/index.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L15)

___

### tryCatch

▸ **tryCatch**<`A`\>(`f`): [`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `A` |

#### Returns

[`IOption`](zeitgeistpm_utility.option.md#ioption)<`A`\>

#### Defined in

[packages/utility/src/option/index.ts:73](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L73)

___

### unwrap

▸ **unwrap**<`A`\>(`option`): ``null`` \| `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> |

#### Returns

``null`` \| `A`

#### Defined in

[packages/utility/src/option/index.ts:40](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L40)

___

### unwrapOr

▸ **unwrapOr**<`A`\>(`or`, `option`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `or` | [`OrHandler`](zeitgeistpm_utility.option.md#orhandler)<`A`\> |
| `option` | [`Option`](zeitgeistpm_utility.option.md#option)<`A`\> |

#### Returns

`A`

#### Defined in

[packages/utility/src/option/index.ts:43](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/option/index.ts#L43)
