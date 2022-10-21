const __debugsymbol = `%c@zeitgeistpm/sdk`

/**
 * Helper for debugging and verbose logging in the sdk.
 *
 * @param str string to log
 * @param opts options
 * @param level log level
 * @returns void
 */
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
