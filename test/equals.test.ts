import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'

describe('Matrix Equality', () => {
  it('doit dire si deux matrices sont égales', () => {
    const matrixA = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const matrixB = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const matrixC = new Matrix([
      [5, 6],
      [7, 8],
    ])
    expect(matrixA.equals(matrixB)).toBe(true)
    expect(matrixA.equals(matrixC)).toBe(false)
  })
})
