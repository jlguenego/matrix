import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    inverse(): Matrix
  }
}

Matrix.prototype.inverse = function (this: Matrix): Matrix {
  if (this.rows !== this.cols) {
    throw new Error('Only square matrices can be inverted')
  }

  const det = this.determinant()
  if (Math.abs(det) < 1e-10) {
    throw new Error('Matrix is not invertible (determinant is zero)')
  }

  if (this.rows === 2) {
    const a = this.get(0, 0)
    const b = this.get(0, 1)
    const c = this.get(1, 0)
    const d = this.get(1, 1)
    return new Matrix([
      [d / det, -b / det],
      [-c / det, a / det],
    ])
  }

  const cofactorMatrix = new Matrix(this.rows, this.cols)
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      const minor = this.minor(i, j)
      const cofactor = Math.pow(-1, i + j) * minor.determinant()
      cofactorMatrix.set(i, j, cofactor)
    }
  }

  return cofactorMatrix.transpose().times(1 / det)
}
