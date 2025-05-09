import { Matrix } from './base'
import './clone' // Ensure clone is available

declare module './base' {
  interface Matrix {
    scalarmul(scalar: number): Matrix
  }
}

Matrix.prototype.scalarmul = function (scalar: number): Matrix {
  const result = this.clone()
  for (let i = 0; i < result.rows; i++) {
    for (let j = 0; j < result.cols; j++) {
      result.set(i, j, result.get(i, j) * scalar)
    }
  }
  return result
}
