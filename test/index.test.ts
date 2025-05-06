import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'

describe('Matrix base', () => {
  it('doit créer une matrice de dimensions données', () => {
    const matrix = new Matrix(2, 3)
    expect(matrix.rows).toBe(2)
    expect(matrix.cols).toBe(3)
  })

  it("doit créer une matrice à partir d'un tableau", () => {
    const matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ])
    expect(matrix.rows).toBe(2)
    expect(matrix.cols).toBe(3)
  })

  it('doit définir et obtenir des valeurs', () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ])
    expect(matrix.get(0, 0)).toBe(1)
    expect(matrix.get(0, 1)).toBe(2)
    expect(matrix.get(1, 0)).toBe(3)
    expect(matrix.get(1, 1)).toBe(4)
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

  it('should create a matrix filled with a constant value', () => {
    const matrix = new Matrix(2, 3, 1)
    expect(matrix.rows).toBe(2)
    expect(matrix.cols).toBe(3)
    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        expect(matrix.get(i, j)).toBe(1)
      }
    }

    // Test default value (0)
    const zeroMatrix = new Matrix(2, 2)
    for (let i = 0; i < zeroMatrix.rows; i++) {
      for (let j = 0; j < zeroMatrix.cols; j++) {
        expect(zeroMatrix.get(i, j)).toBe(0)
      }
    }
  })
})
