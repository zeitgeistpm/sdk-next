[sdk-v2](../README.md) / [Modules](../modules.md) / @zeitgeistpm/web3.storage

# Module: @zeitgeistpm/web3.storage

## Table of contents

### Namespaces

- [IPFS](zeitgeistpm_web3_storage.IPFS.md)
- [LocalStorage](zeitgeistpm_web3_storage.LocalStorage.md)
- [Memory](zeitgeistpm_web3_storage.Memory.md)

### Type Aliases

- [IPFSClusterConfiguration](zeitgeistpm_web3_storage.md#ipfsclusterconfiguration)
- [IPFSConfiguration](zeitgeistpm_web3_storage.md#ipfsconfiguration)
- [IPFSNodeConfiguration](zeitgeistpm_web3_storage.md#ipfsnodeconfiguration)
- [Storage](zeitgeistpm_web3_storage.md#storage)

## Type Aliases

### IPFSClusterConfiguration

Ƭ **IPFSClusterConfiguration**: `Object`

Cluster configuration

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `auth?` | { `password`: `string` ; `username`: `string`  } | Authentication for the ipfs cluster REST api |
| `auth.password` | `string` | - |
| `auth.username` | `string` | - |
| `url` | `string` | Uri for the ipfs cluster |

#### Defined in

[packages/web3.storage/src/storage/providers/ipfs/types.ts:29](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/web3.storage/src/storage/providers/ipfs/types.ts#L29)

___

### IPFSConfiguration

Ƭ **IPFSConfiguration**: `Object`

Configuration for the IPFS layer.
Must sepcify a node, but can also specify a cluster to pin data to.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cluster?` | [`IPFSClusterConfiguration`](zeitgeistpm_web3_storage.md#ipfsclusterconfiguration) |
| `hashAlg?` | `string` |
| `node` | [`IPFSNodeConfiguration`](zeitgeistpm_web3_storage.md#ipfsnodeconfiguration) |

#### Defined in

[packages/web3.storage/src/storage/providers/ipfs/types.ts:5](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/web3.storage/src/storage/providers/ipfs/types.ts#L5)

___

### IPFSNodeConfiguration

Ƭ **IPFSNodeConfiguration**: `Object`

Singel node configuration

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pin?` | `boolean` | Should it also pin when adding. **`Default`** true |
| `url` | `string` | Uri for the ipfs node |

#### Defined in

[packages/web3.storage/src/storage/providers/ipfs/types.ts:14](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/web3.storage/src/storage/providers/ipfs/types.ts#L14)

___

### Storage

Ƭ **Storage**<`A`, `ID`\>: `Object`

A generic metadata type for on chain objects that
has metadata stored in some external storage like IPFS.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `ID` | `CID` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `del` | `TaskEither`<`Error`, `void`, [`ID`]\> | delete item from storage **`Generic`** ID - id type |
| `get` | `TaskEither`<`Error`, `IOption`<`A`\>, [`ID`]\> | Get item from storage **`Generic`** ID - id type **`Generic`** T - type of data |
| `put` | `TaskEither`<`Error`, `ID`, [data: A]\> | Put item to storage **`Generic`** ID - id type **`Generic`** T - type of data |

#### Defined in

[packages/web3.storage/src/storage/types.ts:11](https://github.com/zeitgeistpm/sdk-next/blob/037ec07/packages/web3.storage/src/storage/types.ts#L11)
