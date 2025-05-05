export class Matrix {
  private data: number[][]

  constructor(rows: number, cols: number)
  constructor(data: number[][]) // Overloaded constructor

  constructor(rowsOrData: number | number[][], cols?: number) {
    if (Array.isArray(rowsOrData)) {
      this.data = rowsOrData // If the first argument is an array, use it directly
      return
    }
    this.data = Array.from({ length: rowsOrData }, () => Array(cols).fill(0))
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
}
