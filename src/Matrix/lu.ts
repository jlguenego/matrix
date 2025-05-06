import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    lu(): { L: Matrix; U: Matrix }
  }
}

Matrix.prototype.lu = function (this: Matrix): { L: Matrix; U: Matrix } {
  if (this.rows !== this.cols) {
    throw new Error('LU decomposition only works with square matrices')
  }

  const n = this.rows
  const L = new Matrix(n, n)
  const U = this.clone()

  // Initialize L diagonal to 1
  for (let i = 0; i < n; i++) {
    L.set(i, i, 1)
  }

  for (let k = 0; k < n - 1; k++) {
    if (Math.abs(U.get(k, k)) < 1e-10) {
      throw new Error('LU decomposition not possible: zero pivot encountered')
    }

    for (let i = k + 1; i < n; i++) {
      const factor = U.get(i, k) / U.get(k, k)
      L.set(i, k, factor)

      for (let j = k; j < n; j++) {
        U.set(i, j, U.get(i, j) - factor * U.get(k, j))
      }
    }
  }

  return { L, U }
}
