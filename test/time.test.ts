import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'

describe('Matrix Times', () => {
  it('doit multiplier une matrice avec un scalaire', () => {
    const matrixA = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const scalar = 2
    const result = matrixA.times(scalar)
    expect(
      result.equals(
        new Matrix([
          [2, 4],
          [6, 8],
        ])
      )
    ).toBe(true)
  })
})
