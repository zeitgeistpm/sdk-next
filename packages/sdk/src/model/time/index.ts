import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { Context, isRpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { now, now$ } from './functions/now'
import { Time } from './types'

export const time = <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
): Time<C, MS> => {
  if (isRpcContext<MS>(ctx)) {
    return {
      now: pfunc(() => now(ctx), {
        $: () => now$(ctx),
      }),
    } as Time<typeof ctx, MS>
  }
  return {} as Time<typeof ctx, MS>
}
