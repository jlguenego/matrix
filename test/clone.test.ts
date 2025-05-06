import { describe, expect, it } from 'vitest'
import { Matrix } from '../src/Matrix'
import '../src/Matrix/clone'

describe('Matrix clone', () => {
  it('should create a deep copy of the matrix', () => {
    const original = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const cloned = original.clone()

    // Check if values are equal
    expect(cloned.equals(original)).toBe(true)

    // Modify cloned matrix
    cloned.set(0, 0, 99)

    // Original should remain unchanged
    expect(original.get(0, 0)).toBe(1)
    expect(cloned.get(0, 0)).toBe(99)
  })
})
