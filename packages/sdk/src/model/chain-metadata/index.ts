import * as O from '@zeitgeistpm/utility/dist/option'
import { Context, isRpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import {
  PalletTablePopulated,
  ErrorTablePopulated,
  ChainMetadata,
  ErrorTableEntry,
} from './types'

export const model = <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
): ChainMetadata<C, MS> => {
  const errors: ChainMetadata<C, MS> = {
    fetchTables: (isRpcContext<MS>(ctx)
      ? async () => {
          const metadata = await ctx.api.rpc.state.getMetadata()
          const inner: any = metadata.get('metadata')?.toJSON()

          if (!inner) return O.option(O.none())

          const palletTable: PalletTablePopulated = inner.v14.pallets.reduce(
            (table: PalletTablePopulated, pallet: any) => {
              return pallet.errors
                ? { ...table, [pallet.index]: pallet.errors.type }
                : table
            },
            {},
          )

          const errorTable: ErrorTablePopulated = [...inner.v14.lookup.types].reduce(
            (table: ErrorTablePopulated, module: any) => {
              if (module.type.path.includes('Error') && module.type.def.variant) {
                const errors = module.type.def.variant.variants
                const index = module.id

                return {
                  ...table,
                  [index]: errors.reduce((entries: any, error: any, index: number) => {
                    return {
                      ...entries,
                      [index]: {
                        errorName: error.name,
                        documentation: error.docs.join(' ').trim(),
                      },
                    }
                  }, table[index]),
                }
              }

              return table
            },
            {},
          )

          const getErrorEntry = (
            palletIndex: number,
            errorIndex: number,
          ): ErrorTableEntry | null => {
            if (!palletTable[palletIndex]) {
              return null
            }
            const key = palletTable[palletIndex]
            if (!errorTable[key][errorIndex]) {
              return null
            }
            return errorTable[key][errorIndex]
          }

          return O.option(
            O.some({
              errorTable,
              palletTable,
              getErrorEntry,
            }),
          )
        }
      : undefined) as ChainMetadata<typeof ctx, MS>['fetchTables'],
  }

  return errors
}
