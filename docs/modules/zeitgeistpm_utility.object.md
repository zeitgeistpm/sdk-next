[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / object

# Namespace: object

[@zeitgeistpm/utility](zeitgeistpm_utility.md).object

## Table of contents

### Type Aliases

- [MappedUndefined](zeitgeistpm_utility.object.md#mappedundefined)
- [Unpartial](zeitgeistpm_utility.object.md#unpartial)

### Functions

- [upperFirstObjectKeys](zeitgeistpm_utility.object.md#upperfirstobjectkeys)

## Type Aliases

### MappedUndefined

Ƭ **MappedUndefined**<`T`\>: { [K in keyof T]?: undefined }

Map over an object and set all key values to undefined type

**`Generic`**

T extends object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[packages/utility/src/object/index.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/object/index.ts#L7)

___

### Unpartial

Ƭ **Unpartial**<`T`\>: [`MappedUndefined`](zeitgeistpm_utility.object.md#mappedundefined)<`T`\> \| `T`

Create a type from an objec that can be either whole or all values undefined.
Usefull for parameter objects that needs all values set or none of them.

**`Generic`**

T extends object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Defined in

[packages/utility/src/object/index.ts:17](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/object/index.ts#L17)

## Functions

### upperFirstObjectKeys

▸ **upperFirstObjectKeys**(`obj`): `Object`

Uppercase the first letter of all object keyes

**`Note`**

This is a shallow operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Record`<`any`, `any`\> | Record<any, any> |

#### Returns

`Object`

Record<any, any>

#### Defined in

[packages/utility/src/object/index.ts:27](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/object/index.ts#L27)
