[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / codec

# Namespace: codec

[@zeitgeistpm/utility](zeitgeistpm_utility.md).codec

## Table of contents

### Type Aliases

- [Codec](zeitgeistpm_utility.codec.md#codec)

### Functions

- [Base64Codec](zeitgeistpm_utility.codec.md#base64codec)
- [JsonCodec](zeitgeistpm_utility.codec.md#jsoncodec)
- [codec](zeitgeistpm_utility.codec.md#codec-1)
- [compose](zeitgeistpm_utility.codec.md#compose)
- [flip](zeitgeistpm_utility.codec.md#flip)

## Type Aliases

### Codec

Ƭ **Codec**<`I`, `O`, `E`\>: `Object`

A encoder and decoder of metadata objects.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `I` |
| `O` | `O` |
| `E` | `Error` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decode` | (`data`: `O`) => [`IEither`](zeitgeistpm_utility.either.md#ieither)<`E`, `I`\> |
| `encode` | (`data`: `I`) => [`IEither`](zeitgeistpm_utility.either.md#ieither)<`E`, `O`\> |

#### Defined in

[packages/utility/src/codec/types.ts:6](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/codec/types.ts#L6)

## Functions

### Base64Codec

▸ **Base64Codec**(): [`Codec`](zeitgeistpm_utility.codec.md#codec)<`string`, `string`, `Error`\>

Encode and decode objects from json strings.
Simple wrapper around JSON.parse|stringify

#### Returns

[`Codec`](zeitgeistpm_utility.codec.md#codec)<`string`, `string`, `Error`\>

#### Defined in

[packages/utility/src/codec/impl/base64.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/codec/impl/base64.ts#L7)

___

### JsonCodec

▸ **JsonCodec**<`T`\>(): [`Codec`](zeitgeistpm_utility.codec.md#codec)<`string`, `T`, `Error`\>

Encode and decode objects from json strings.
Simple wrapper around JSON.parse|stringify

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Codec`](zeitgeistpm_utility.codec.md#codec)<`string`, `T`, `Error`\>

#### Defined in

[packages/utility/src/codec/impl/json.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/codec/impl/json.ts#L7)

___

### codec

▸ **codec**<`I`, `O`\>(`config`): [`Codec`](zeitgeistpm_utility.codec.md#codec)<`I`, `O`, `Error`\>

Construct a Codec<I, O> from functions that either returns the encoded/decoded as a Right value
or throws an error that will result in a Left value

**`Generic`**

I - type of input

**`Generic`**

O - type of output

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.decode` | (`input`: `O`) => `I` |
| `config.encode` | (`input`: `I`) => `O` |

#### Returns

[`Codec`](zeitgeistpm_utility.codec.md#codec)<`I`, `O`, `Error`\>

#### Defined in

[packages/utility/src/codec/index.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/codec/index.ts#L15)

___

### compose

▸ **compose**<`I`, `IO`, `O`\>(`codeca`, `codecb`): [`Codec`](zeitgeistpm_utility.codec.md#codec)<`I`, `O`, `Error`\>

Compose two codecs.

**`Generic`**

I - original input

**`Generic`**

IO - output of first codec, input for the second.

**`Generic`**

O - output of last codec

#### Type parameters

| Name |
| :------ |
| `I` |
| `IO` |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeca` | [`Codec`](zeitgeistpm_utility.codec.md#codec)<`I`, `IO`, `Error`\> |
| `codecb` | [`Codec`](zeitgeistpm_utility.codec.md#codec)<`IO`, `O`, `Error`\> |

#### Returns

[`Codec`](zeitgeistpm_utility.codec.md#codec)<`I`, `O`, `Error`\>

#### Defined in

[packages/utility/src/codec/index.ts:30](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/codec/index.ts#L30)

___

### flip

▸ **flip**<`I`, `O`\>(`codec`): [`Codec`](zeitgeistpm_utility.codec.md#codec)<`I`, `O`, `Error`\>

Flip the encoding decoding of a codec.

**`Generic`**

I - type of input

**`Generic`**

O - type of output

#### Type parameters

| Name |
| :------ |
| `I` |
| `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `codec` | [`Codec`](zeitgeistpm_utility.codec.md#codec)<`O`, `I`, `Error`\> |

#### Returns

[`Codec`](zeitgeistpm_utility.codec.md#codec)<`I`, `O`, `Error`\>

#### Defined in

[packages/utility/src/codec/index.ts:42](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/codec/index.ts#L42)
