import contrast from 'font-color-contrast'
import { range } from 'lodash'

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255
  return (
    'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
  )
}

const colors = range(0, 1000).map(random_rgba)

console.time('contrast')

for (let i = 0; i < colors.length; i++) {
  contrast(colors[i])
}

console.timeEnd('contrast')
