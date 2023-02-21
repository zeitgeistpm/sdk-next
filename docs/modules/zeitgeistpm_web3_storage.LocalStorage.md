[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/web3.storage](zeitgeistpm_web3_storage.md) / LocalStorage

# Namespace: LocalStorage

[@zeitgeistpm/web3.storage](zeitgeistpm_web3_storage.md).LocalStorage

## Table of contents

### Functions

- [storage](zeitgeistpm_web3_storage.LocalStorage.md#storage)

## Functions

### storage

▸ **storage**<`T`\>(`codec?`): [`Storage`](zeitgeistpm_web3_storage.md#storage)<`T`, `string`\>

Create a MetadataStorage object that can store data to localstorage.
Only meant for local development on dev nodes with ephemeral block storage.

**`Generic`**

T - type of metadata

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `codec` | `Codec`<`string`, `T`, `Error`\> |

#### Returns

[`Storage`](zeitgeistpm_web3_storage.md#storage)<`T`, `string`\>

#### Defined in

[packages/web3.storage/src/storage/providers/localstorage/index.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/web3.storage/src/storage/providers/localstorage/index.ts#L15)
