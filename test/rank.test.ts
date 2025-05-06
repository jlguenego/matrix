import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'
import '../src/Matrix/rank'

describe('Matrix rank', () => {
  it('should compute rank of full rank matrix', () => {
    const matrix = new Matrix([
      [1, 0],
      [0, 1],
    ])
    expect(matrix.rank()).toBe(2)
  })

  it('should compute rank of rank-1 matrix', () => {
    const matrix = new Matrix([
      [1, 2],
      [2, 4],
    ])
    expect(matrix.rank()).toBe(1)
  })

  it('should compute rank of zero matrix', () => {
    const matrix = new Matrix(2, 2, 0)
    expect(matrix.rank()).toBe(0)
  })
})
