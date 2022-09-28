import { RpcContext } from '../../context'

export type ChainTime = {
  now: number
  block: number
  period: number
}

export const time = async (ctx: RpcContext): Promise<ChainTime> => {
  const [now, head] = await Promise.all([
    ctx.api.query.timestamp.now().then(now => now.toNumber()),
    ctx.api.rpc.chain.getHeader(),
  ])

  const block = head.number.toNumber()
  const period = ctx.api.consts.timestamp.minimumPeriod.toNumber() * 2

  return {
    now,
    block,
    period,
  }
}

export const dateBlock = (time: ChainTime, date: Date) => {
  const delta = date.getTime() - time.now
  return Math.floor(time.block + delta / time.period)
}

export const blockDate = (time: ChainTime, block: number) => {
  const delta = block - time.block
  return new Date(time.now + delta * time.period)
}
