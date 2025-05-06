import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    determinant(): number
    minor(row: number, col: number): Matrix
  }
}

Matrix.prototype.minor = function (this: Matrix, row: number, col: number): Matrix {
  const result = new Matrix(this.rows - 1, this.cols - 1)
  let r = 0
  for (let i = 0; i < this.rows; i++) {
    if (i === row) continue
    let c = 0
    for (let j = 0; j < this.cols; j++) {
      if (j === col) continue
      result.set(r, c, this.get(i, j))
      c++
    }
    r++
  }
  return result
}

Matrix.prototype.determinant = function (this: Matrix): number {
  if (this.rows !== this.cols) {
    throw new Error('Determinant can only be calculated for square matrices')
  }
  if (this.rows === 1) return this.get(0, 0)
  if (this.rows === 2) {
    return this.get(0, 0) * this.get(1, 1) - this.get(0, 1) * this.get(1, 0)
  }
  let det = 0
  for (let j = 0; j < this.cols; j++) {
    det += Math.pow(-1, j) * this.get(0, j) * this.minor(0, j).determinant()
  }
  return det
}
