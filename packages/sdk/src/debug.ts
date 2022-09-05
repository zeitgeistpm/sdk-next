const __debugsymbol = `%c@zeitgeistpm/sdk`

export const debug = (
  str: string,
  opts: { debug?: boolean; color?: string },
  level: 'debug' | 'warn' | 'log' | 'error' = 'log',
) =>
  (opts.debug ?? true) &&
  console[level](
    `${__debugsymbol}: %c${str}`,
    'color: #a343a0;',
    `color: ${opts.color || 'black'};`,
  )
