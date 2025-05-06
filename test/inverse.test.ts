import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'
import '../src/Matrix/inverse'

describe('Matrix inverse', () => {
  it('should compute inverse of 2x2 matrix', () => {
    const matrix = new Matrix([
      [4, 7],
      [2, 6],
    ])
    const inverse = matrix.inverse()

    // Test that M * M^-1 = I
    const product = matrix.product(inverse)
    expect(product.get(0, 0)).toBeCloseTo(1)
    expect(product.get(0, 1)).toBeCloseTo(0)
    expect(product.get(1, 0)).toBeCloseTo(0)
    expect(product.get(1, 1)).toBeCloseTo(1)
  })

  it('should throw error for non-square matrix', () => {
    const matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ])
    expect(() => matrix.inverse()).toThrow('Only square matrices can be inverted')
  })

  it('should throw error for non-invertible matrix', () => {
    const matrix = new Matrix([
      [1, 2],
      [2, 4],
    ])
    expect(() => matrix.inverse()).toThrow('Matrix is not invertible')
  })
})
