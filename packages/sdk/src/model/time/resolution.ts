import { isString } from '@polkadot/util'

export type Resolution = `${'-' | ''}${number} ${ResolutionCategory}`
export type ResolutionCategory = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month'

export const isResolution = (resolution: unknown): resolution is Resolution =>
  Boolean(isString(resolution) && resolution.match(/[1-9]+ second|minute|hour|day|week|month/))
