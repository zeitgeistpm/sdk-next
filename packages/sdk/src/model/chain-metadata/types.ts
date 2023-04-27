import type { IOption } from '@zeitgeistpm/utility/dist/option'
import { Context, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'

/**
 * Zeitgeist ChainMetadata model.
 * Fetch error and pallet tables.
 */
export type ChainMetadata<
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = {
  /**
   * Fetch error and pallet tables.
   */
  fetchTables: C extends RpcContext<MS> ? () => Promise<IOption<ChanMetadataTable>> : never
}

export type ChanMetadataTable = {
  errorTable: ErrorTablePopulated
  palletTable: PalletTablePopulated
  getErrorEntry: (palletIndex: number, errorIndex: number) => ErrorTableEntry | null
}

export type ErrorTableEntry = {
  errorName: string
  documentation: string
}

export const getMessageFromError = ({
  documentation,
  errorName,
}: ErrorTableEntry): string => {
  return documentation.length > 0
    ? documentation
    : `Transaction failed, error code: ${errorName}`
}

export type ErrorTablePopulated = {
  [key: number]: {
    [key: number]: ErrorTableEntry
  }
}

export type PalletTablePopulated = {
  [key: number]: number
}
