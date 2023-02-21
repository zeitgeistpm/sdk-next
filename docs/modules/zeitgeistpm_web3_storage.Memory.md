[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/web3.storage](zeitgeistpm_web3_storage.md) / Memory

# Namespace: Memory

[@zeitgeistpm/web3.storage](zeitgeistpm_web3_storage.md).Memory

## Table of contents

### Functions

- [storage](zeitgeistpm_web3_storage.Memory.md#storage)

## Functions

### storage

▸ **storage**<`T`\>(`codec?`): [`Storage`](zeitgeistpm_web3_storage.md#storage)<`T`, `Uint8Array`\>

Create a MetadataStorage object that can store data to ephemeral memory
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

[`Storage`](zeitgeistpm_web3_storage.md#storage)<`T`, `Uint8Array`\>

#### Defined in

[packages/web3.storage/src/storage/providers/memory/index.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/web3.storage/src/storage/providers/memory/index.ts#L15)
