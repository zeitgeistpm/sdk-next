[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/rpc](../modules/zeitgeistpm_rpc.md) / UnknownDispatchError

# Class: UnknownDispatchError

[@zeitgeistpm/rpc](../modules/zeitgeistpm_rpc.md).UnknownDispatchError

## Hierarchy

- `Error`

  ↳ **`UnknownDispatchError`**

## Table of contents

### Constructors

- [constructor](zeitgeistpm_rpc.UnknownDispatchError.md#constructor)

### Properties

- [message](zeitgeistpm_rpc.UnknownDispatchError.md#message)
- [name](zeitgeistpm_rpc.UnknownDispatchError.md#name)
- [stack](zeitgeistpm_rpc.UnknownDispatchError.md#stack)
- [prepareStackTrace](zeitgeistpm_rpc.UnknownDispatchError.md#preparestacktrace)
- [stackTraceLimit](zeitgeistpm_rpc.UnknownDispatchError.md#stacktracelimit)

### Methods

- [captureStackTrace](zeitgeistpm_rpc.UnknownDispatchError.md#capturestacktrace)

## Constructors

### constructor

• **new UnknownDispatchError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[packages/rpc/src/lib/transactions/types.ts:39](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/rpc/src/lib/transactions/types.ts#L39)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
