import { Matrix } from './base'

// Function to multiply one matrix by a scalar
function times(this: Matrix, scalar: number): Matrix {
  const result = new Matrix(this.rows, this.cols)
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      result.set(i, j, this.get(i, j) * scalar)
    }
  }
  return result
}

declare module './base' {
  interface Matrix {
    times(scalar: number): Matrix
  }
}

Matrix.prototype.times = times
