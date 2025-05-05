import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'

describe('Matrix Minus', () => {
  it('doit soustraire deux matrices', () => {
    const matrixA = new Matrix(2, 2)
    const matrixB = new Matrix(2, 2)
    matrixA.set(0, 0, 1)
    matrixA.set(0, 1, 2)
    matrixA.set(1, 0, 3)
    matrixA.set(1, 1, 4)
    matrixB.set(0, 0, 5)
    matrixB.set(0, 1, 6)
    matrixB.set(1, 0, 7)
    matrixB.set(1, 1, 8)
    const result = matrixA.minus(matrixB)
    expect(
      result.equals(
        new Matrix([
          [-4, -4],
          [-4, -4],
        ])
      )
    ).toBe(true)
  })

  it('doit lancer une erreur si les dimensions ne correspondent pas', () => {
    const matrixA = new Matrix(2, 2)
    const matrixB = new Matrix(2, 3)
    expect(() => matrixA.minus(matrixB)).toThrow(
      'Matrices must have the same dimensions for substraction.'
    )
  })
})
