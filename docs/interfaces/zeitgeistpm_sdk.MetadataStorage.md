[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/sdk](../modules/zeitgeistpm_sdk.md) / MetadataStorage

# Interface: MetadataStorage<M, C\>

[@zeitgeistpm/sdk](../modules/zeitgeistpm_sdk.md).MetadataStorage

Generic metadata storage type.

**`Generic`**

M = MarketMetadata

**`Generic`**

C = Comment

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`TaggedMetadata`](../modules/zeitgeistpm_sdk.md#taggedmetadata)<``"markets"``\> = [`MarketMetadata`](../modules/zeitgeistpm_sdk.md#marketmetadata) |
| `C` | extends [`TaggedMetadata`](../modules/zeitgeistpm_sdk.md#taggedmetadata)<``"comments"``\> = [`CommentMetadata`](../modules/zeitgeistpm_sdk.md#commentmetadata) |

## Table of contents

### Properties

- [comments](zeitgeistpm_sdk.MetadataStorage.md#comments)
- [markets](zeitgeistpm_sdk.MetadataStorage.md#markets)

### Methods

- [of](zeitgeistpm_sdk.MetadataStorage.md#of)

## Properties

### comments

• `Readonly` **comments**: `Storage`<`C`, [`TaggedID`](../modules/zeitgeistpm_sdk.md#taggedid)<``"comments"``\>\>

Storage for Market comments.

**`Notes`**

not in use, just testing type narrowing.

#### Defined in

[packages/sdk/src/meta/types.ts:25](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/sdk/src/meta/types.ts#L25)

___

### markets

• `Readonly` **markets**: `Storage`<`M`, [`TaggedID`](../modules/zeitgeistpm_sdk.md#taggedid)<``"markets"``\>\>

Storage for Market metadata.

#### Defined in

[packages/sdk/src/meta/types.ts:20](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/sdk/src/meta/types.ts#L20)

## Methods

### of

▸ **of**<`K`\>(`key`): `Storage`<[`StorageTypeOf`](../modules/zeitgeistpm_sdk.md#storagetypeof)<[`MetadataStorage`](zeitgeistpm_sdk.MetadataStorage.md)<`M`, `C`\>[`K`]\>, [`StorageIdTypeOf`](../modules/zeitgeistpm_sdk.md#storageidtypeof)<[`MetadataStorage`](zeitgeistpm_sdk.MetadataStorage.md)<`M`, `C`\>[`K`]\>\>

Use storage narrowed to a sub storage type.

**`Note`**

for internal usage.

**`Generic`**

K extends keyof this

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MetadataStorage`](zeitgeistpm_sdk.MetadataStorage.md)<`M`, `C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | K |

#### Returns

`Storage`<[`StorageTypeOf`](../modules/zeitgeistpm_sdk.md#storagetypeof)<[`MetadataStorage`](zeitgeistpm_sdk.MetadataStorage.md)<`M`, `C`\>[`K`]\>, [`StorageIdTypeOf`](../modules/zeitgeistpm_sdk.md#storageidtypeof)<[`MetadataStorage`](zeitgeistpm_sdk.MetadataStorage.md)<`M`, `C`\>[`K`]\>\>

#### Defined in

[packages/sdk/src/meta/types.ts:34](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/sdk/src/meta/types.ts#L34)
