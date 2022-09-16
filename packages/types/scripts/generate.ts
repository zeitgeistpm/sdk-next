import { generateTsDef } from '@polkadot/typegen/generate/tsDef'
import {
  generateInterfaceTypes,
  generateDefaultInterface,
} from '@polkadot/typegen/generate/interfaceRegistry'
import { generateDefaultEvents } from '@polkadot/typegen/generate/events'
import { generateDefaultErrors } from '@polkadot/typegen/generate/errors'
import { generateDefaultLookup } from '@polkadot/typegen/generate/lookup'

// import {
//   generateDefaultConsts,
//   generateDefaultQuery,
//   generateDefaultTx,
//   generateDefaultRpc
// } from '@polkadot/typegen/generate';
import metadata from '../src/metadata/static-latest'

import * as defaultDefinitions from '@polkadot/types/interfaces/definitions'
import * as zgDefinitions from '../src/interfaces/definitions'

const { ...substrateDefinitions } = defaultDefinitions

const definitions = {
  '@polkadot/types/interfaces': substrateDefinitions,
  '@zeitgeistpm/types/interfaces': zgDefinitions,
} as any

generateDefaultLookup('./src/interfaces')

generateTsDef(definitions, './src/interfaces', '@zeitgeistpm/types/interfaces')
generateInterfaceTypes(definitions, './src/interfaces/augment-types.ts')
generateDefaultErrors(
  './src/interfaces/augment-api-errors.ts',
  metadata,
  definitions,
  false,
)

generateDefaultEvents('./src/interfaces/augment-events.ts', metadata, definitions)
// generateDefaultConsts('packages/types/src/interfaces/augment-api-consts.ts', metadata, definitions);

// generateDefaultTx('packages/types/src/interfaces/augment-api-tx.ts', metadata, definitions);
// generateDefaultQuery('packages/types/src/interfaces/augment-api-query.ts', metadata, definitions);
// generateDefaultRpc('packages/types/src/interfaces/augment-api-rpc.ts', definitions);
