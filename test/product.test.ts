import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'

describe('Matrix Product', () => {
  it('doit multiplier deux matrices', () => {
    const matrixA = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const matrixB = new Matrix([
      [5, 6],
      [7, 8],
    ])
    const result = matrixA.product(matrixB)
    expect(result.get(0, 0)).toBe(19)
    expect(result.get(0, 1)).toBe(22)
    expect(result.get(1, 0)).toBe(43)
    expect(result.get(1, 1)).toBe(50)
  })

  it('doit lancer une erreur si les dimensions ne correspondent pas pour la multiplication', () => {
    const matrixA = new Matrix(2, 3)
    const matrixB = new Matrix(2, 2)
    expect(() => matrixA.product(matrixB)).toThrow(
      'Matrices must have compatible dimensions for multiplication.'
    )
  })

  it('doit transposer une matrice', () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const transposed = matrix.transpose()
    expect(transposed.get(0, 0)).toBe(1)
    expect(transposed.get(0, 1)).toBe(3)
    expect(transposed.get(1, 0)).toBe(2)
    expect(transposed.get(1, 1)).toBe(4)
  })
})
