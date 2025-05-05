import { Matrix } from './base'

// Function to multiply two matrices
function product(this: Matrix, b: Matrix): Matrix {
  if (this.cols !== b.rows) {
    throw new Error('Matrices must have compatible dimensions for multiplication.')
  }

  const result = new Matrix(this.rows, b.cols)
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < b.cols; j++) {
      let sum = 0
      for (let k = 0; k < this.cols; k++) {
        sum += this.get(i, k) * b.get(k, j)
      }
      result.set(i, j, sum)
    }
  }
  return result
}

declare module './base' {
  // Extend the Matrix interface to include the add method`
  interface Matrix {
    product(b: Matrix): Matrix
  }
}

Matrix.prototype.product = product // Add the add method to the Matrix prototype
