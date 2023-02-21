[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / aeither

# Namespace: aeither

[@zeitgeistpm/utility](zeitgeistpm_utility.md).aeither

## Table of contents

### Type Aliases

- [AEither](zeitgeistpm_utility.aeither.md#aeither)
- [IAEither](zeitgeistpm_utility.aeither.md#iaeither)
- [OrHandler](zeitgeistpm_utility.aeither.md#orhandler)

### Functions

- [aeither](zeitgeistpm_utility.aeither.md#aeither-1)
- [bind](zeitgeistpm_utility.aeither.md#bind)
- [from](zeitgeistpm_utility.aeither.md#from)
- [map](zeitgeistpm_utility.aeither.md#map)
- [unleft](zeitgeistpm_utility.aeither.md#unleft)
- [unleftOr](zeitgeistpm_utility.aeither.md#unleftor)
- [unright](zeitgeistpm_utility.aeither.md#unright)
- [unrightOr](zeitgeistpm_utility.aeither.md#unrightor)
- [unwrap](zeitgeistpm_utility.aeither.md#unwrap)
- [unwrapLeft](zeitgeistpm_utility.aeither.md#unwrapleft)

## Type Aliases

### AEither

Ƭ **AEither**<`L`, `R`\>: `Promise`<[`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\>\>

Async Either type.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

[packages/utility/src/aeither/index.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L8)

___

### IAEither

Ƭ **IAEither**<`L`, `R`\>: { `asEither`: () => `Promise`<[`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\>\> ; `bind`: <B\>(`f`: (`a`: `R`) => [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `B`\> \| `Promise`<`B`\>) => [`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `B`\> ; `isLeft`: () => `Promise`<``null`` \| [`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\>\> ; `isRight`: () => `Promise`<``null`` \| [`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\>\> ; `map`: <B\>(`f`: (`a`: `R`) => `B`) => [`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `B`\> ; `unleft`: () => `Promise`<[`IOption`](zeitgeistpm_utility.option.md#ioption)<`L`\>\> ; `unleftOr`: (`or`: [`OrHandler`](zeitgeistpm_utility.aeither.md#orhandler)<`R`, `L`\>) => `Promise`<`L`\> ; `unright`: () => `Promise`<[`IOption`](zeitgeistpm_utility.option.md#ioption)<`R`\>\> ; `unrightOr`: (`or`: [`OrHandler`](zeitgeistpm_utility.aeither.md#orhandler)<`L`, `R`\>) => `Promise`<`R`\> ; `unwrap`: () => `Promise`<`R`\> ; `unwrapLeft`: () => `Promise`<`L`\>  } & `Promise`<`R`\>

Interface over AEither to call methods directly on Either objects that implements it.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Defined in

[packages/utility/src/aeither/index.ts:113](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L113)

___

### OrHandler

Ƭ **OrHandler**<`P`, `A`\>: `A` \| (`value`: `P`) => `A`

Or handler for async either values.

**`Generic`**

P - the input value, in case of Left it will be R and vice versa.

#### Type parameters

| Name |
| :------ |
| `P` |
| `A` |

#### Defined in

[packages/utility/src/aeither/index.ts:192](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L192)

## Functions

### aeither

▸ **aeither**<`L`, `R`\>(`_either`): [`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `R`\>

Bind methods to a AEither object for utility and "syntactic" sugar over async eithers..

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> | AEither<L, R> |

#### Returns

[`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `R`\>

IAEither<L, R>

#### Defined in

[packages/utility/src/aeither/index.ts:200](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L200)

___

### bind

▸ **bind**<`L`, `R`, `B`\>(`f`, `either`): [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `B`\>

Chains eithers where it returns out a Left if one of the composed functions returns left
or the Right value if all succeedes.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `R`) => [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `B`\> \| `Promise`<`B`\> |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

[`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `B`\>

IAEither<L, B>

#### Defined in

[packages/utility/src/aeither/index.ts:99](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L99)

___

### from

▸ **from**<`L`, `R`\>(`f`): [`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `R`\>

Convert a promise to an async either.

**`Generic`**

L - left type

**`Generic`**

R - right type

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `Promise`<`R`\> |

#### Returns

[`IAEither`](zeitgeistpm_utility.aeither.md#iaeither)<`L`, `R`\>

AEither<L, R>

#### Defined in

[packages/utility/src/aeither/index.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L17)

___

### map

▸ **map**<`L`, `R`, `B`\>(`f`, `either`): [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `B`\>

Maps the right value if present with the mapping function.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `R`) => `B` |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

[`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `B`\>

IAEither<L, B>

#### Defined in

[packages/utility/src/aeither/index.ts:90](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L90)

___

### unleft

▸ **unleft**<`L`, `R`\>(`either`): `Promise`<[`IOption`](zeitgeistpm_utility.option.md#ioption)<`L`\>\>

Unwraps a the left value into an optional value ignoring rights by returning `none`

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

`Promise`<[`IOption`](zeitgeistpm_utility.option.md#ioption)<`L`\>\>

Promise<O.IOption<L>>

#### Defined in

[packages/utility/src/aeither/index.ts:60](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L60)

___

### unleftOr

▸ **unleftOr**<`L`, `R`\>(`or`, `either`): `Promise`<`L`\>

Tries to unwrap the left value or uses the default value or lazy function
to produce the correct result.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `or` | [`OrHandler`](zeitgeistpm_utility.aeither.md#orhandler)<`R`, `L`\> |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

`Promise`<`L`\>

Promise<L>

#### Defined in

[packages/utility/src/aeither/index.ts:80](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L80)

___

### unright

▸ **unright**<`L`, `R`\>(`either`): `Promise`<[`IOption`](zeitgeistpm_utility.option.md#ioption)<`R`\>\>

Unwraps a the right value into an optional value ignoring lefts by returning `none`

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

`Promise`<[`IOption`](zeitgeistpm_utility.option.md#ioption)<`R`\>\>

Promise<O.IOption<R>>

#### Defined in

[packages/utility/src/aeither/index.ts:52](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L52)

___

### unrightOr

▸ **unrightOr**<`L`, `R`\>(`or`, `either`): `Promise`<`R`\>

Tries to unwrap the right value or uses the default value or lazy function
to produce the correct result(or throw error).

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `or` | [`OrHandler`](zeitgeistpm_utility.aeither.md#orhandler)<`L`, `R`\> |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

`Promise`<`R`\>

Promise<R>

#### Defined in

[packages/utility/src/aeither/index.ts:69](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L69)

___

### unwrap

▸ **unwrap**<`L`, `R`\>(`either`): `Promise`<`R`\>

Tries to unwrap the right value into a promised right value. Throws error if value is left.

**`Throws`**

Error

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

`Promise`<`R`\>

Promise<R>

#### Defined in

[packages/utility/src/aeither/index.ts:35](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L35)

___

### unwrapLeft

▸ **unwrapLeft**<`L`, `R`\>(`either`): `Promise`<`L`\>

Tries to unwrap the left value into a promised left value. Throws error if value is right.

**`Throws`**

Error

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`AEither`](zeitgeistpm_utility.aeither.md#aeither)<`L`, `R`\> |

#### Returns

`Promise`<`L`\>

Promise<L>

#### Defined in

[packages/utility/src/aeither/index.ts:44](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/aeither/index.ts#L44)
