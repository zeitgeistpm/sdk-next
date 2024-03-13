import { ChildProcessWithoutNullStreams, spawn } from 'node:child_process'
import * as path from 'node:path'

export const initChopsticks = async () => {
  return new Promise<{
    process: ChildProcessWithoutNullStreams
    port: number
  }>(async (resolve, reject) => {
    const scriptPath = path.resolve('./../../', 'node_modules/.bin/chopsticks')

    const chopsticks = spawn(`${scriptPath}`, ['-c', 'zeitgeist'], {
      detached: false,
    })

    let timeout = setTimeout(() => {
      reject('Chopsticks failed to start')
    }, 25 * 1000)

    chopsticks.stdout.on('data', message => {
      const match = message.toString().match(/RPC listening on port ([0-9]+)/)
      if (match && match[1]) {
        clearTimeout(timeout)
        console.debug('Chopsticks started on port', match[1])
        resolve({
          process: chopsticks as ChildProcessWithoutNullStreams,
          port: parseInt(match[1], 10),
        })
      }
    })
  })
}
