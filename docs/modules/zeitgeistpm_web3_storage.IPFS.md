[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/web3.storage](zeitgeistpm_web3_storage.md) / IPFS

# Namespace: IPFS

[@zeitgeistpm/web3.storage](zeitgeistpm_web3_storage.md).IPFS

## Table of contents

### Functions

- [storage](zeitgeistpm_web3_storage.IPFS.md#storage)

## Functions

### storage

▸ **storage**<`T`\>(`config`, `codec?`): [`Storage`](zeitgeistpm_web3_storage.md#storage)<`T`, `CID`<`unknown`, `number`, `number`, `Version`\>\>

Create a MetadataStorage object that can store data on an IPFS node
and cluster if configured to do so.

**`Generic`**

T - type of metadata

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IPFSConfiguration`](zeitgeistpm_web3_storage.md#ipfsconfiguration) |
| `codec` | `Codec`<`string`, `T`, `Error`\> |

#### Returns

[`Storage`](zeitgeistpm_web3_storage.md#storage)<`T`, `CID`<`unknown`, `number`, `number`, `Version`\>\>

#### Defined in

[packages/web3.storage/src/storage/providers/ipfs/index.ts:18](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/web3.storage/src/storage/providers/ipfs/index.ts#L18)
