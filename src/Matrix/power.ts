import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    power(n: number): Matrix
  }
}

Matrix.prototype.power = function (this: Matrix, n: number): Matrix {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Power must be a non-negative integer')
  }
  if (this.rows !== this.cols) {
    throw new Error('Matrix must be square')
  }
  if (n === 0) return Matrix.IDENTITY(this.rows)
  if (n === 1) return new Matrix(this.data)

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  let result = this
  for (let i = 1; i < n; i++) {
    result = result.product(this)
  }
  return result
}
