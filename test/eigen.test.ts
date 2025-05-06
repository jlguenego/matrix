import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'
import '../src/Matrix/eigen'

describe('Matrix eigenvalues', () => {
  it('should compute eigenvalues of 2x2 matrix', () => {
    const matrix = new Matrix([
      [4, 1],
      [1, 1],
    ])
    const eigenvalues = matrix.eigenvalues()
    eigenvalues.sort((a, b) => b - a)

    // Eigenvalues should be (5 ± √13)/2
    expect(eigenvalues[0]).toBeCloseTo(4.30278)
    expect(eigenvalues[1]).toBeCloseTo(0.69722)
  })

  it('should throw error for complex eigenvalues', () => {
    const matrix = new Matrix([
      [3, -2],
      [1, 4],
    ])
    expect(() => matrix.eigenvalues()).toThrow('Matrix has complex eigenvalues')
  })

  it('should throw error for non-2x2 matrix', () => {
    const matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ])
    expect(() => matrix.eigenvalues()).toThrow('only implemented for 2x2 matrices')
  })
})
