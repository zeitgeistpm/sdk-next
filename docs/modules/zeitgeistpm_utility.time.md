[sdk-v2](../README.md) / [Modules](../modules.md) / [@zeitgeistpm/utility](zeitgeistpm_utility.md) / time

# Namespace: time

[@zeitgeistpm/utility](zeitgeistpm_utility.md).time

## Table of contents

### Type Aliases

- [BlockTimespan](zeitgeistpm_utility.time.md#blocktimespan)
- [ChainTime](zeitgeistpm_utility.time.md#chaintime)
- [DateTimespan](zeitgeistpm_utility.time.md#datetimespan)
- [Duration](zeitgeistpm_utility.time.md#duration)
- [DurationPeriod](zeitgeistpm_utility.time.md#durationperiod)
- [Timespan](zeitgeistpm_utility.time.md#timespan)

### Functions

- [asBlock](zeitgeistpm_utility.time.md#asblock)
- [asBlocks](zeitgeistpm_utility.time.md#asblocks)
- [asMs](zeitgeistpm_utility.time.md#asms)
- [blockDate](zeitgeistpm_utility.time.md#blockdate)
- [blocksToDates](zeitgeistpm_utility.time.md#blockstodates)
- [dateBlock](zeitgeistpm_utility.time.md#dateblock)
- [datesToBlocks](zeitgeistpm_utility.time.md#datestoblocks)
- [from](zeitgeistpm_utility.time.md#from)
- [isBlocks](zeitgeistpm_utility.time.md#isblocks)
- [isDates](zeitgeistpm_utility.time.md#isdates)
- [isDuration](zeitgeistpm_utility.time.md#isduration)
- [toMs](zeitgeistpm_utility.time.md#toms)

## Type Aliases

### BlockTimespan

Ƭ **BlockTimespan**: `Object`

A timespan represented as blocks

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `end` | `number` | The end block. |
| `start` | `number` | The start block. |

#### Defined in

[packages/utility/src/time/timespan.ts:12](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L12)

___

### ChainTime

Ƭ **ChainTime**: `Object`

Chain time data.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `number` | Current finalized block. |
| `now` | `number` | Current on chain timestamp. |
| `period` | `number` | Block production time. |

#### Defined in

[packages/utility/src/time/time.ts:8](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/time.ts#L8)

___

### DateTimespan

Ƭ **DateTimespan**: `Object`

A timespan represented as dates.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `end` | `Date` | End Date. |
| `start` | `Date` | Start date. |

#### Defined in

[packages/utility/src/time/timespan.ts:26](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L26)

___

### Duration

Ƭ **Duration**: \`${"-" \| ""}${number} ${DurationPeriod}${"s" \| ""}\`

Duration represented as a typed string

**`Example`**

```ts
const twoHours: Duration = "2 hours"
```

#### Defined in

[packages/utility/src/time/duration.ts:10](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/duration.ts#L10)

___

### DurationPeriod

Ƭ **DurationPeriod**: ``"second"`` \| ``"minute"`` \| ``"hour"`` \| ``"day"`` \| ``"week"`` \| ``"month"`` \| ``"year"``

Duration period, ca be second, minutes, hours etc

#### Defined in

[packages/utility/src/time/duration.ts:15](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/duration.ts#L15)

___

### Timespan

Ƭ **Timespan**: [`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan) \| [`DateTimespan`](zeitgeistpm_utility.time.md#datetimespan)

Union type of timespan dealing with blocknumbers or dates.

#### Defined in

[packages/utility/src/time/timespan.ts:7](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L7)

## Functions

### asBlock

▸ **asBlock**(`time`, `instant`): `number`

Get instant as blocknumber.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | ChainTime |
| `instant` | `number` \| \`${number} second\` \| \`${number} seconds\` \| \`${number} minute\` \| \`${number} minutes\` \| \`${number} hour\` \| \`${number} hours\` \| \`${number} day\` \| \`${number} days\` \| \`${number} week\` \| \`${number} weeks\` \| \`${number} month\` \| \`${number} months\` \| \`${number} year\` \| \`${number} years\` \| \`-${number} second\` \| \`-${number} seconds\` \| \`-${number} minute\` \| \`-${number} minutes\` \| \`-${number} hour\` \| \`-${number} hours\` \| \`-${number} day\` \| \`-${number} days\` \| \`-${number} week\` \| \`-${number} weeks\` \| \`-${number} month\` \| \`-${number} months\` \| \`-${number} year\` \| \`-${number} years\` \| `Date` | Date \| BlockNumber |

#### Returns

`number`

BlockNumber

#### Defined in

[packages/utility/src/time/time.ts:54](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/time.ts#L54)

___

### asBlocks

▸ **asBlocks**(`now`, `timespan`): [`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan)

Convert timespan to blocks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `now` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | - |
| `timespan` | [`Timespan`](zeitgeistpm_utility.time.md#timespan) | Timespan |

#### Returns

[`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan)

Promise<BlockTimespan>

#### Defined in

[packages/utility/src/time/timespan.ts:82](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L82)

___

### asMs

▸ **asMs**(`duration`): `number`

Get duration in milliseconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | \`${number} second\` \| \`${number} seconds\` \| \`${number} minute\` \| \`${number} minutes\` \| \`${number} hour\` \| \`${number} hours\` \| \`${number} day\` \| \`${number} days\` \| \`${number} week\` \| \`${number} weeks\` \| \`${number} month\` \| \`${number} months\` \| \`${number} year\` \| \`${number} years\` \| \`-${number} second\` \| \`-${number} seconds\` \| \`-${number} minute\` \| \`-${number} minutes\` \| \`-${number} hour\` \| \`-${number} hours\` \| \`-${number} day\` \| \`-${number} days\` \| \`-${number} week\` \| \`-${number} weeks\` \| \`-${number} month\` \| \`-${number} months\` \| \`-${number} year\` \| \`-${number} years\` | Duration |

#### Returns

`number`

number

#### Defined in

[packages/utility/src/time/duration.ts:39](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/duration.ts#L39)

___

### blockDate

▸ **blockDate**(`time`, `block`): `Date`

Get projected Date of blocknumber.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | ChainTime |
| `block` | `number` | number |

#### Returns

`Date`

Date

#### Defined in

[packages/utility/src/time/time.ts:42](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/time.ts#L42)

___

### blocksToDates

▸ **blocksToDates**(`now`, `dates`): [`DateTimespan`](zeitgeistpm_utility.time.md#datetimespan)

Convert a timespan of dates to block range.

**`Note`**

Is approximate based on chain block production time and not exact.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `now` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | - |
| `dates` | [`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan) | DateTimespan |

#### Returns

[`DateTimespan`](zeitgeistpm_utility.time.md#datetimespan)

Promise<BlockTimespan>

#### Defined in

[packages/utility/src/time/timespan.ts:110](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L110)

___

### dateBlock

▸ **dateBlock**(`time`, `date`): `number`

Get projected blocknumber of date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | ChainTime |
| `date` | `Date` | Date |

#### Returns

`number`

number

#### Defined in

[packages/utility/src/time/time.ts:30](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/time.ts#L30)

___

### datesToBlocks

▸ **datesToBlocks**(`now`, `dates`): [`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan)

Convert a timespan of dates to block range.

**`Note`**

Is approximate based on chain block production time and not exact.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `now` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | - |
| `dates` | [`DateTimespan`](zeitgeistpm_utility.time.md#datetimespan) | DateTimespan |

#### Returns

[`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan)

Promise<BlockTimespan>

#### Defined in

[packages/utility/src/time/timespan.ts:94](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L94)

___

### from

▸ **from**(`now`, `timespan`): [`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan)

Convert DateTimespan to BlockTimespan

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `now` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | - |
| `timespan` | [`DateTimespan`](zeitgeistpm_utility.time.md#datetimespan) | DateTimespan |

#### Returns

[`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan)

Promise<BlockTimespan>

#### Defined in

[packages/utility/src/time/timespan.ts:62](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L62)

▸ **from**(`now`, `timespan`): [`DateTimespan`](zeitgeistpm_utility.time.md#datetimespan)

Convert BlockTimespan to DateTimespan

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `now` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | - |
| `timespan` | [`BlockTimespan`](zeitgeistpm_utility.time.md#blocktimespan) | BlockTimespan |

#### Returns

[`DateTimespan`](zeitgeistpm_utility.time.md#datetimespan)

Promise<DateTimespan>

#### Defined in

[packages/utility/src/time/timespan.ts:70](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L70)

___

### isBlocks

▸ **isBlocks**(`timespan`): timespan is BlockTimespan

Typeguard for BlockTimespan

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timespan` | [`Timespan`](zeitgeistpm_utility.time.md#timespan) | Timespan |

#### Returns

timespan is BlockTimespan

timespan is BlockTimespan

#### Defined in

[packages/utility/src/time/timespan.ts:43](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L43)

___

### isDates

▸ **isDates**(`timespan`): timespan is DateTimespan

Typeguard for DateTimespan

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timespan` | [`Timespan`](zeitgeistpm_utility.time.md#timespan) | Timespan |

#### Returns

timespan is DateTimespan

timespan is DateTimespan

#### Defined in

[packages/utility/src/time/timespan.ts:52](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L52)

___

### isDuration

▸ **isDuration**(`duration`): duration is \`${number} second\` \| \`${number} seconds\` \| \`${number} minute\` \| \`${number} minutes\` \| \`${number} hour\` \| \`${number} hours\` \| \`${number} day\` \| \`${number} days\` \| \`${number} week\` \| \`${number} weeks\` \| \`${number} month\` \| \`${number} months\` \| \`${number} year\` \| \`${number} years\` \| \`-${number} second\` \| \`-${number} seconds\` \| \`-${number} minute\` \| \`-${number} minutes\` \| \`-${number} hour\` \| \`-${number} hours\` \| \`-${number} day\` \| \`-${number} days\` \| \`-${number} week\` \| \`-${number} weeks\` \| \`-${number} month\` \| \`-${number} months\` \| \`-${number} year\` \| \`-${number} years\`

Typeguard for duration strings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `unknown` |

#### Returns

duration is \`${number} second\` \| \`${number} seconds\` \| \`${number} minute\` \| \`${number} minutes\` \| \`${number} hour\` \| \`${number} hours\` \| \`${number} day\` \| \`${number} days\` \| \`${number} week\` \| \`${number} weeks\` \| \`${number} month\` \| \`${number} months\` \| \`${number} year\` \| \`${number} years\` \| \`-${number} second\` \| \`-${number} seconds\` \| \`-${number} minute\` \| \`-${number} minutes\` \| \`-${number} hour\` \| \`-${number} hours\` \| \`-${number} day\` \| \`-${number} days\` \| \`-${number} week\` \| \`-${number} weeks\` \| \`-${number} month\` \| \`-${number} months\` \| \`-${number} year\` \| \`-${number} years\`

duration is Duration

#### Defined in

[packages/utility/src/time/duration.ts:30](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/duration.ts#L30)

___

### toMs

▸ **toMs**(`time`, `timeSpan`): `number`

Get the duration of a timespan in milliseconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | [`ChainTime`](zeitgeistpm_utility.time.md#chaintime) | ChainTime |
| `timeSpan` | [`Timespan`](zeitgeistpm_utility.time.md#timespan) | Timespan |

#### Returns

`number`

number

#### Defined in

[packages/utility/src/time/timespan.ts:124](https://github.com/zeitgeistpm/sdk-next/blob/80e59d4/packages/utility/src/time/timespan.ts#L124)
