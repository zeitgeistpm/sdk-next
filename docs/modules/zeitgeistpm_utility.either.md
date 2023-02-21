[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / either

# Namespace: either

[@zeitgeistpm/utility](zeitgeistpm_utility.md).either

## Table of contents

### Type Aliases

- [Either](zeitgeistpm_utility.either.md#either)
- [IEither](zeitgeistpm_utility.either.md#ieither)
- [Left](zeitgeistpm_utility.either.md#left)
- [OrHandler](zeitgeistpm_utility.either.md#orhandler)
- [Right](zeitgeistpm_utility.either.md#right)

### Functions

- [bind](zeitgeistpm_utility.either.md#bind)
- [either](zeitgeistpm_utility.either.md#either-1)
- [isEither](zeitgeistpm_utility.either.md#iseither)
- [isLeft](zeitgeistpm_utility.either.md#isleft)
- [isRight](zeitgeistpm_utility.either.md#isright)
- [left](zeitgeistpm_utility.either.md#left-1)
- [map](zeitgeistpm_utility.either.md#map)
- [right](zeitgeistpm_utility.either.md#right-1)
- [tryCatch](zeitgeistpm_utility.either.md#trycatch)
- [unleft](zeitgeistpm_utility.either.md#unleft)
- [unleftOr](zeitgeistpm_utility.either.md#unleftor)
- [unright](zeitgeistpm_utility.either.md#unright)
- [unrightOr](zeitgeistpm_utility.either.md#unrightor)
- [unwrap](zeitgeistpm_utility.either.md#unwrap)
- [unwrapLeft](zeitgeistpm_utility.either.md#unwrapleft)

## Type Aliases

### Either

Ƭ **Either**<`L`, `R`\>: [`Left`](zeitgeistpm_utility.either.md#left)<`L`\> \| [`Right`](zeitgeistpm_utility.either.md#right)<`R`\>

Either type.

Can represent either a left or a right value. Used often in
error handling where something can either succeede(R) or fail(L).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `L` | the left value type |
| `R` | the right value type |

#### Defined in

[packages/utility/src/either/index.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L15)

___

### IEither

Ƭ **IEither**<`L`, `R`\>: [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> & { `bind`: <B\>(`f`: (`a`: `R`) => [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `B`\> \| `B`) => [`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `B`\> ; `isLeft`: () => ``null`` \| [`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\> ; `isRight`: () => ``null`` \| [`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\> ; `map`: <B\>(`f`: (`a`: `R`) => `B`) => [`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `B`\> ; `unleft`: () => [`IOption`](zeitgeistpm_utility.option.md#ioption)<`L`\> ; `unleftOr`: (`or`: [`OrHandler`](zeitgeistpm_utility.either.md#orhandler)<`R`, `L`\>) => `L` ; `unright`: () => [`IOption`](zeitgeistpm_utility.option.md#ioption)<`R`\> ; `unrightOr`: (`or`: [`OrHandler`](zeitgeistpm_utility.either.md#orhandler)<`L`, `R`\>) => `R` ; `unwrap`: () => `R` ; `unwrapLeft`: () => `L`  }

Interface over either to call either methods directly on Either objects that implements it.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `L` | the left value type |
| `R` | the right value type |

#### Defined in

[packages/utility/src/either/index.ts:176](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L176)

___

### Left

Ƭ **Left**<`L`\>: `Object`

Left type

#### Type parameters

| Name | Description |
| :------ | :------ |
| `L` | the left value type |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left` | `L` |

#### Defined in

[packages/utility/src/either/index.ts:27](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L27)

___

### OrHandler

Ƭ **OrHandler**<`P`, `A`\>: `A` \| (`value`: `P`) => `A`

**`Generic`**

P - the input value, in case of Left it will be R and vice versa.

#### Type parameters

| Name |
| :------ |
| `P` |
| `A` |

#### Defined in

[packages/utility/src/either/index.ts:138](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L138)

___

### Right

Ƭ **Right**<`R`\>: `Object`

Right type

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | the right value type |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `right` | `R` |

#### Defined in

[packages/utility/src/either/index.ts:21](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L21)

## Functions

### bind

▸ **bind**<`L`, `R`, `B`\>(`f`, `either`): [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `B`\>

Chains eithers, where it returns out a Left if one of the composed functions returns left.
Or return the Right value if all succeedes with the composed value from the last chain computation.

**`Example`**

```typescript
const validate = (str: string) =>
  str === 'correct' ? right(1) : left(new Error('string has to be "correct"'))

chain(validate, right('correct'))
  .unrightOr(throws) // -> 1

chain(validate, left('error'))
  .unrightOr(throws) // -> throws error
```
```

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `R`) => `B` \| [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `B`\> |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

[`Either`](zeitgeistpm_utility.either.md#either)<`L`, `B`\>

#### Defined in

[packages/utility/src/either/index.ts:96](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L96)

___

### either

▸ **either**<`L`, `R`\>(`_either`): [`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\>

Bind methods to a Either object for utility and "syntactic" sugar.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> | Either<L, R> |

#### Returns

[`IEither`](zeitgeistpm_utility.either.md#ieither)<`L`, `R`\>

EitherInterface<L, R>

#### Defined in

[packages/utility/src/either/index.ts:234](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L234)

___

### isEither

▸ **isEither**(`obj`): obj is Either<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is Either<any, any\>

#### Defined in

[packages/utility/src/either/index.ts:45](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L45)

___

### isLeft

▸ **isLeft**<`L`, `R`\>(`either`): either is Left<L\>

Typeguard for left values

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

either is Left<L\>

#### Defined in

[packages/utility/src/either/index.ts:56](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L56)

___

### isRight

▸ **isRight**<`L`, `R`\>(`either`): either is Right<R\>

Typeguard for right values

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

either is Right<R\>

#### Defined in

[packages/utility/src/either/index.ts:51](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L51)

___

### left

▸ **left**<`A`\>(`left`): [`Left`](zeitgeistpm_utility.either.md#left)<`A`\>

Left type constructor

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `A` |

#### Returns

[`Left`](zeitgeistpm_utility.either.md#left)<`A`\>

#### Defined in

[packages/utility/src/either/index.ts:41](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L41)

___

### map

▸ **map**<`L`, `R`, `B`\>(`f`, `either`): [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `B`\>

Maps the right value if present with the mapping function.

**`Example`**

```typescript
map(right(1), num => num + 1) === right(2)
map(left("error"), num => num + 1) === left("error")
```

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
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

[`Either`](zeitgeistpm_utility.either.md#either)<`L`, `B`\>

#### Defined in

[packages/utility/src/either/index.ts:76](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L76)

___

### right

▸ **right**<`A`\>(`right`): [`Right`](zeitgeistpm_utility.either.md#right)<`A`\>

Right type constructor

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `right` | `A` |

#### Returns

[`Right`](zeitgeistpm_utility.either.md#right)<`A`\>

#### Defined in

[packages/utility/src/either/index.ts:33](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L33)

___

### tryCatch

▸ **tryCatch**<`Error`, `R`\>(`fn`): [`IEither`](zeitgeistpm_utility.either.md#ieither)<`Error`, `R`\>

Tries a function and converts the caught error to Left or returned value to Right.

#### Type parameters

| Name |
| :------ |
| `Error` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `R` | () => R - function to try catch |

#### Returns

[`IEither`](zeitgeistpm_utility.either.md#ieither)<`Error`, `R`\>

Either<Error, R>

#### Defined in

[packages/utility/src/either/index.ts:254](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L254)

___

### unleft

▸ **unleft**<`L`, `R`\>(`either`): [`IOption`](zeitgeistpm_utility.option.md#ioption)<`L`\>

Unwraps a the left value into an Option<L>

**`Example`**

```typescript
unleft(right(1)).unwrapOr(2) === 2
unleft(left(NaN)).unwrapOr(2) === NaN
```

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

[`IOption`](zeitgeistpm_utility.option.md#ioption)<`L`\>

#### Defined in

[packages/utility/src/either/index.ts:132](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L132)

___

### unleftOr

▸ **unleftOr**<`L`, `R`\>(`or`, `either`): `L`

Tries to unwrap the left value or uses the default value or lazy function
to produce the correct result.

**`Example`**

```typescript
  unleftOr(right(1), 2) // -> 2
  unleftOr(left(NaN), 2) // -> NaN
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `L` | the left value type |
| `R` | the right value type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `or` | [`OrHandler`](zeitgeistpm_utility.either.md#orhandler)<`R`, `L`\> |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

`L`

#### Defined in

[packages/utility/src/either/index.ts:167](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L167)

___

### unright

▸ **unright**<`L`, `R`\>(`either`): [`IOption`](zeitgeistpm_utility.option.md#ioption)<`R`\>

Unwraps a the right value into an Option<R>

**`Example`**

```typescript
unright(right(1)).unwrapOr(2) === 1
unright(left(NaN)).unwrapOr(2) === 2
```

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

[`IOption`](zeitgeistpm_utility.option.md#ioption)<`R`\>

#### Defined in

[packages/utility/src/either/index.ts:121](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L121)

___

### unrightOr

▸ **unrightOr**<`L`, `R`\>(`or`, `either`): `R`

Tries to unwrap the right value or uses the default value or lazy function
to produce the correct result.

**`Example`**

```typescript
  unrightOr(right(1), 2) // -> 1
  unrightOr(left(NaN), 2) // -> 2
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `L` | the left value type |
| `R` | the right value type |

#### Parameters

| Name | Type |
| :------ | :------ |
| `or` | [`OrHandler`](zeitgeistpm_utility.either.md#orhandler)<`L`, `R`\> |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

`R`

#### Defined in

[packages/utility/src/either/index.ts:152](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L152)

___

### unwrap

▸ **unwrap**<`L`, `R`\>(`either`): `R`

Unwrap the right value. Throws if the either is a left.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

`R`

#### Defined in

[packages/utility/src/either/index.ts:61](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L61)

___

### unwrapLeft

▸ **unwrapLeft**<`L`, `R`\>(`either`): `L`

Unwrap the right value. Throws if the either is a left.

#### Type parameters

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `either` | [`Either`](zeitgeistpm_utility.either.md#either)<`L`, `R`\> |

#### Returns

`L`

#### Defined in

[packages/utility/src/either/index.ts:66](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/either/index.ts#L66)
