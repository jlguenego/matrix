import { Matrix } from './base'

// Function to transpose a matrix
function transpose(this: Matrix): Matrix {
  const rows = this.rows // Get the number of rows in the original matrix
  const cols = this.cols // Get the number of columns in the original matrix
  const transposed = new Matrix(cols, rows) // Create a new Matrix with swapped dimensions
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed.set(j, i, this.get(i, j)) // Set the transposed value
    }
  }
  return transposed // Return the new transposed matrix
}

declare module './base' {
  interface Matrix {
    transpose(): Matrix
  }
}

Matrix.prototype.transpose = transpose // Add the add method to the Matrix prototype
