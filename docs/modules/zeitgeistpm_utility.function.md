[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / function

# Namespace: function

[@zeitgeistpm/utility](zeitgeistpm_utility.md).function

## Table of contents

### Functions

- [compose](zeitgeistpm_utility.function.md#compose)
- [identity](zeitgeistpm_utility.function.md#identity)

## Functions

### compose

▸ **compose**<`A`, `B`\>(`ab`): (...`a`: `A`) => `B`

Compose functions.

**`Example`**

```typescript
const add = (a: number) => (b: number) => b + a
const sub = (a: number) => (b: number) => b - a

const addTwoSubOne = compose(add(2), sub(1))

addTwoSubOne(10) === 11
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |

#### Returns

`fn`

▸ (`...a`): `B`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`B`

#### Defined in

[packages/utility/src/function/index.ts:22](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L22)

▸ **compose**<`A`, `B`, `C`\>(`ab`, `bc`): (...`a`: `A`) => `C`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |

#### Returns

`fn`

▸ (`...a`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`C`

#### Defined in

[packages/utility/src/function/index.ts:23](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L23)

▸ **compose**<`A`, `B`, `C`, `D`\>(`ab`, `bc`, `cd`): (...`a`: `A`) => `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |

#### Returns

`fn`

▸ (`...a`): `D`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`D`

#### Defined in

[packages/utility/src/function/index.ts:27](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L27)

▸ **compose**<`A`, `B`, `C`, `D`, `E`\>(`ab`, `bc`, `cd`, `de`): (...`a`: `A`) => `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |

#### Returns

`fn`

▸ (`...a`): `E`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`E`

#### Defined in

[packages/utility/src/function/index.ts:32](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L32)

▸ **compose**<`A`, `B`, `C`, `D`, `E`, `F`\>(`ab`, `bc`, `cd`, `de`, `ef`): (...`a`: `A`) => `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |

#### Returns

`fn`

▸ (`...a`): `F`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`F`

#### Defined in

[packages/utility/src/function/index.ts:38](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L38)

▸ **compose**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`): (...`a`: `A`) => `G`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |

#### Returns

`fn`

▸ (`...a`): `G`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`G`

#### Defined in

[packages/utility/src/function/index.ts:45](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L45)

▸ **compose**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): (...`a`: `A`) => `H`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |
| `H` | `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |

#### Returns

`fn`

▸ (`...a`): `H`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`H`

#### Defined in

[packages/utility/src/function/index.ts:53](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L53)

▸ **compose**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): (...`a`: `A`) => `I`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |
| `H` | `H` |
| `I` | `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |

#### Returns

`fn`

▸ (`...a`): `I`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`I`

#### Defined in

[packages/utility/src/function/index.ts:62](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L62)

▸ **compose**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): (...`a`: `A`) => `J`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends readonly `unknown`[] |
| `B` | `B` |
| `C` | `C` |
| `D` | `D` |
| `E` | `E` |
| `F` | `F` |
| `G` | `G` |
| `H` | `H` |
| `I` | `I` |
| `J` | `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ab` | (...`a`: `A`) => `B` |
| `bc` | (`b`: `B`) => `C` |
| `cd` | (`c`: `C`) => `D` |
| `de` | (`d`: `D`) => `E` |
| `ef` | (`e`: `E`) => `F` |
| `fg` | (`f`: `F`) => `G` |
| `gh` | (`g`: `G`) => `H` |
| `hi` | (`h`: `H`) => `I` |
| `ij` | (`i`: `I`) => `J` |

#### Returns

`fn`

▸ (`...a`): `J`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `A` |

##### Returns

`J`

#### Defined in

[packages/utility/src/function/index.ts:72](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L72)

___

### identity

▸ **identity**<`A`\>(`a`): `A`

Identity utility.

**`Generic`**

A - type of the identity

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`A`

#### Defined in

[packages/utility/src/function/index.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/utility/src/function/index.ts#L6)
