import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    clone(): Matrix
  }
}

Matrix.prototype.clone = function (this: Matrix): Matrix {
  return new Matrix(this.toArray())
}
