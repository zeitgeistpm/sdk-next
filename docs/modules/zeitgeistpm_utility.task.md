[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / task

# Namespace: task

[@zeitgeistpm/utility](zeitgeistpm_utility.md).task

## Table of contents

### Type Aliases

- [Task](zeitgeistpm_utility.task.md#task)

## Type Aliases

### Task

Ƭ **Task**<`T`, `Args`\>: (...`args`: `Args`) => `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Args` | extends `ReadonlyArray`<`unknown`\> = [] |

#### Type declaration

▸ (`...args`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args` |

##### Returns

`Promise`<`T`\>

#### Defined in

[packages/utility/src/task/index.ts:1](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/task/index.ts#L1)
