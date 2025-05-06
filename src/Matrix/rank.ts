import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    rank(): number
  }
}

Matrix.prototype.rank = function (this: Matrix): number {
  const tolerance = 1e-10
  const m = this.rows
  const n = this.cols
  const data = this.toArray()

  // Using Gaussian elimination to compute rank
  let rank = 0
  const rowUsed = new Array(m).fill(false)

  for (let j = 0; j < n; j++) {
    let i
    for (i = 0; i < m; i++) {
      if (!rowUsed[i] && Math.abs(data[i][j]) > tolerance) {
        break
      }
    }

    if (i < m) {
      rank++
      rowUsed[i] = true
      for (let p = i + 1; p < m; p++) {
        if (!rowUsed[p]) {
          const factor = data[p][j] / data[i][j]
          for (let k = j; k < n; k++) {
            data[p][k] -= factor * data[i][k]
          }
        }
      }
    }
  }

  return rank
}
