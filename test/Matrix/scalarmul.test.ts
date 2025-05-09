import { describe, it, expect } from 'vitest'
import { Matrix } from '../../src/Matrix/base'
import '../../src/Matrix/scalarmul'

describe('Matrix.scalarmul', () => {
  it('should multiply all elements by the scalar', () => {
    const m = new Matrix([
      [1, 2],
      [3, 4],
    ])
    const result = m.scalarmul(3)
    expect(result.toArray()).toEqual([
      [3, 6],
      [9, 12],
    ])
  })

  it('should work with zero scalar', () => {
    const m = new Matrix([
      [5, -2],
      [0, 7],
    ])
    const result = m.scalarmul(0)
    const normalized = result.toArray().map((row) => row.map((x) => (Object.is(x, -0) ? 0 : x)))
    expect(normalized).toEqual([
      [0, 0],
      [0, 0],
    ])
  })

  it('should not mutate the original matrix', () => {
    const m = new Matrix([[1, 2]])
    m.scalarmul(10)
    expect(m.toArray()).toEqual([[1, 2]])
  })
})
