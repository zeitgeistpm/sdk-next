[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / btreemap

# Namespace: btreemap

[@zeitgeistpm/utility](zeitgeistpm_utility.md).btreemap

## Table of contents

### Functions

- [mapget](zeitgeistpm_utility.btreemap.md#mapget)

## Functions

### mapget

▸ **mapget**<`K`, `V`\>(`map`, `key`): ``null`` \| `V`

Get a value from a BTreeMap for a key.

**`Note`**

fix for BTreeMap.get as it seems broken.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `Codec` |
| `V` | extends `Codec` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `BTreeMap`<`K`, `V`\> | BTreeMap<K, V> |
| `key` | `K` | K |

#### Returns

``null`` \| `V`

V | null

#### Defined in

[packages/utility/src/btreemap/index.ts:14](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/btreemap/index.ts#L14)
