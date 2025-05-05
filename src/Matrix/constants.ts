import { Matrix } from './base'

export function IDENTITY(dimension: number): Matrix {
  const result = new Matrix(dimension, dimension)
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      result.set(i, j, i === j ? 1 : 0)
    }
  }
  return result
}

export function ZERO(dimension: number): Matrix {
  return new Matrix(dimension, dimension)
}
