[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / ztg

# Namespace: ztg

[@zeitgeistpm/utility](zeitgeistpm_utility.md).ztg

## Table of contents

### Type Aliases

- [ZTGPriceInfo](zeitgeistpm_utility.ztg.md#ztgpriceinfo)
- [Ztg](zeitgeistpm_utility.ztg.md#ztg)

### Variables

- [ZTG](zeitgeistpm_utility.ztg.md#ztg-1)

### Functions

- [fetchZTGInfo](zeitgeistpm_utility.ztg.md#fetchztginfo)
- [fetchZTGInfoFromCoingecko](zeitgeistpm_utility.ztg.md#fetchztginfofromcoingecko)
- [fetchZTGInfoFromSubscan](zeitgeistpm_utility.ztg.md#fetchztginfofromsubscan)
- [fromNumber](zeitgeistpm_utility.ztg.md#fromnumber)
- [isZtg](zeitgeistpm_utility.ztg.md#isztg)
- [mempty](zeitgeistpm_utility.ztg.md#mempty)
- [wrap](zeitgeistpm_utility.ztg.md#wrap)

## Type Aliases

### ZTGPriceInfo

Ƭ **ZTGPriceInfo**: `Object`

Ztg info with price in usd and 24 hour change

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change` | `Decimal` |
| `price` | `Decimal` |

#### Defined in

[packages/utility/src/ztg/index.ts:56](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L56)

___

### Ztg

Ƭ **Ztg**: `Decimal` & { `__ztg`: typeof `Ztg`  }

#### Defined in

[packages/utility/src/ztg/index.ts:13](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L13)

## Variables

### ZTG

• `Const` **ZTG**: `Decimal`

Decimal point in a native ztg

#### Defined in

[packages/utility/src/ztg/index.ts:18](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L18)

## Functions

### fetchZTGInfo

▸ **fetchZTGInfo**(): `Promise`<[`ZTGPriceInfo`](zeitgeistpm_utility.ztg.md#ztgpriceinfo)\>

Fetch latest ztg price info.

#### Returns

`Promise`<[`ZTGPriceInfo`](zeitgeistpm_utility.ztg.md#ztgpriceinfo)\>

Promise<ZTGInfo>

#### Defined in

[packages/utility/src/ztg/index.ts:66](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L66)

___

### fetchZTGInfoFromCoingecko

▸ **fetchZTGInfoFromCoingecko**(): `Promise`<[`ZTGPriceInfo`](zeitgeistpm_utility.ztg.md#ztgpriceinfo)\>

#### Returns

`Promise`<[`ZTGPriceInfo`](zeitgeistpm_utility.ztg.md#ztgpriceinfo)\>

#### Defined in

[packages/utility/src/ztg/index.ts:69](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L69)

___

### fetchZTGInfoFromSubscan

▸ **fetchZTGInfoFromSubscan**(): `Promise`<[`ZTGPriceInfo`](zeitgeistpm_utility.ztg.md#ztgpriceinfo)\>

#### Returns

`Promise`<[`ZTGPriceInfo`](zeitgeistpm_utility.ztg.md#ztgpriceinfo)\>

#### Defined in

[packages/utility/src/ztg/index.ts:82](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L82)

___

### fromNumber

▸ **fromNumber**(`value`): [`Ztg`](zeitgeistpm_utility.ztg.md#ztg)

Convert a integer or float to Ztg at the 10th decimal place

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Ztg`](zeitgeistpm_utility.ztg.md#ztg)

Ztg

#### Defined in

[packages/utility/src/ztg/index.ts:51](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L51)

___

### isZtg

▸ **isZtg**(`value`): value is Ztg

Typeguard for Ztg values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | unknown |

#### Returns

value is Ztg

value is Ztg

#### Defined in

[packages/utility/src/ztg/index.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L26)

___

### mempty

▸ **mempty**(): [`Ztg`](zeitgeistpm_utility.ztg.md#ztg)

Create a empty Ztg value

#### Returns

[`Ztg`](zeitgeistpm_utility.ztg.md#ztg)

Ztg

#### Defined in

[packages/utility/src/ztg/index.ts:43](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L43)

___

### wrap

▸ **wrap**(`value`): [`Ztg`](zeitgeistpm_utility.ztg.md#ztg)

Wrap a bignumber to Ztg type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Decimal` | Decimal |

#### Returns

[`Ztg`](zeitgeistpm_utility.ztg.md#ztg)

Ztg

#### Defined in

[packages/utility/src/ztg/index.ts:35](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/ztg/index.ts#L35)
