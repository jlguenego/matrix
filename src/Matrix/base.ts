import { IDENTITY, ZERO } from './constants'

export class Matrix {
  private data: number[][]

  constructor(rowsOrData: number | number[][], cols?: number, constant: number = 0) {
    if (Array.isArray(rowsOrData)) {
      this.data = rowsOrData.map((row) => [...row])
      return
    }

    const rows = rowsOrData
    if (typeof cols !== 'number') {
      throw new Error('When first argument is a number, cols must be specified')
    }

    this.data = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(constant))
  }

  get(row: number, col: number): number {
    return this.data[row][col]
  }

  set(row: number, col: number, value: number): void {
    this.data[row][col] = value
  }

  get rows(): number {
    return this.data.length
  }

  get cols(): number {
    return this.data[0].length
  }

  static IDENTITY = IDENTITY
  static ZERO = ZERO
}
