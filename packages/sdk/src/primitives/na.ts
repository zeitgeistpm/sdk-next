export type NA = symbol

export const NA: NA = Symbol('Not Available')

export const isNA = (value: unknown): value is NA => value === NA
