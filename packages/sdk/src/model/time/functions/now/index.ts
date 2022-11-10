import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Observable } from 'rxjs'
import { RpcContext } from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { BlockNumber } from '../../../../primitives/blocknumber'

/**
 * Get current chain time.
 *
 * @param ctx RpcContext
 * @returns Promise<ChainTime>
 */
export const now = async <MS extends MetadataStorage>(
  ctx: RpcContext<MS>,
): Promise<ChainTime> => {
  const [now, head] = await Promise.all([
    ctx.api.query.timestamp.now().then(now => now.toNumber()),
    ctx.api.rpc.chain.getHeader(),
  ])

  const block = head.number.toNumber() as BlockNumber
  const period = ctx.api.consts.timestamp.minimumPeriod.toNumber() * 2

  return {
    now,
    block,
    period,
  }
}

/**
 * Stream the current chain time pr block.
 *
 * @param ctx RpcContext
 * @returns Observable<ChainTime>
 */
export const now$ = <MS extends MetadataStorage>(
  ctx: RpcContext<MS>,
): Observable<ChainTime> =>
  new Observable(sub => {
    now(ctx).then(time => sub.next(time))

    const period = ctx.api.consts.timestamp.minimumPeriod.toNumber() * 2
    const unsub = ctx.api.rpc.chain.subscribeFinalizedHeads(async head => {
      const now = await ctx.api.query.timestamp.now().then(now => now.toNumber())
      const block = head.number.toNumber() as BlockNumber
      sub.next({
        now,
        block,
        period,
      })
    })

    return () => {
      unsub.then(unsub => unsub())
      sub.unsubscribe()
    }
  })
