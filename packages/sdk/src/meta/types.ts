import { Infer, union } from 'superstruct'
import { IOMarketMetadata } from './market'

/**
 * Union type for the official zeitgeist.pm metadata super type.
 */
export type Metadata = Infer<typeof IOMetadata>

/**
 * Union IO type for the official zeitgeist.pm metadata super type.
 */
export const IOMetadata = union([IOMarketMetadata])
