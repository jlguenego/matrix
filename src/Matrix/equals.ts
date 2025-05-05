import { Matrix } from './base'

function equals(this: Matrix, b: Matrix): boolean {
  if (this.rows !== b.rows || this.cols !== b.cols) {
    return false // Matrices have different dimensions
  }

  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      if (this.get(i, j) !== b.get(i, j)) {
        return false // Found a mismatch
      }
    }
  }

  return true // All elements are equal
}

declare module './base' {
  // Extend the Matrix interface to include the add method`
  interface Matrix {
    equals(b: Matrix): boolean
  }
}

Matrix.prototype.equals = equals
