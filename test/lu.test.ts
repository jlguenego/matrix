import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'
import '../src/Matrix/lu'

describe('Matrix LU decomposition', () => {
  it('should decompose 2x2 matrix', () => {
    const matrix = new Matrix([
      [4, 3],
      [6, 3],
    ])

    const { L, U } = matrix.lu()

    // Check L is lower triangular with ones on diagonal
    expect(L.get(0, 0)).toBe(1)
    expect(L.get(1, 0)).toBe(1.5)
    expect(L.get(0, 1)).toBe(0)
    expect(L.get(1, 1)).toBe(1)

    // Check U is upper triangular
    expect(U.get(0, 0)).toBe(4)
    expect(U.get(0, 1)).toBe(3)
    expect(U.get(1, 0)).toBeCloseTo(0, 10)
    expect(U.get(1, 1)).toBe(-1.5)

    // Verify A = LU
    const product = L.product(U)
    expect(product.equals(matrix)).toBe(true)
  })

  it('should throw for non-square matrix', () => {
    const matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ])
    expect(() => matrix.lu()).toThrow('only works with square matrices')
  })

  it('should throw when decomposition is impossible', () => {
    const matrix = new Matrix([
      [0, 1],
      [1, 1],
    ])
    expect(() => matrix.lu()).toThrow('zero pivot encountered')
  })
})
