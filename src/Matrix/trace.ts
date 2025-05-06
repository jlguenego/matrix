import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    trace(): number
  }
}

Matrix.prototype.trace = function (): number {
  if (this.rows !== this.cols) {
    throw new Error('Trace is only defined for square matrices')
  }
  let sum = 0
  for (let i = 0; i < this.rows; i++) {
    sum += this.get(i, i)
  }
  return sum
}
