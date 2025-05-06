import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'

describe('Matrix toArray', () => {
  it('should return a deep copy of matrix data', () => {
    const initialData = [
      [1, 2],
      [3, 4],
    ]
    const matrix = new Matrix(initialData)
    const array = matrix.toArray()

    // Check if arrays are equal
    expect(array).toEqual(initialData)

    // Check if it's a deep copy
    array[0][0] = 99
    expect(matrix.get(0, 0)).toBe(1)
  })
})
