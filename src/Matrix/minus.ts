import { Matrix } from './base'

function minus(this: Matrix, b: Matrix): Matrix {
  if (this.rows !== b.rows || this.cols !== b.cols) {
    throw new Error('Matrices must have the same dimensions for substraction.')
  }

  const result = new Matrix(this.rows, this.cols)
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      result.set(i, j, this.get(i, j) - b.get(i, j))
    }
  }
  return result
}

declare module './base' {
  // Extend the Matrix interface to include the add method`
  interface Matrix {
    minus(b: Matrix): Matrix
  }
}

Matrix.prototype.minus = minus
