# @jlguenego/matrix

A TypeScript library for matrix operations in JavaScript.

## Installation

```bash
npm install @jlguenego/matrix
```

## Usage

```typescript
import { Matrix } from '@jlguenego/matrix'

// Create a 2x3 matrix filled with zeros
const zeros = new Matrix(2, 3)

// Create a 2x3 matrix filled with ones
const ones = new Matrix(2, 3, 1)

// Create a matrix from an array
const matrix = new Matrix([
  [1, 2],
  [3, 4],
])

// Calculate eigenvalues of a 2x2 matrix
const eigen = new Matrix([
  [4, 1],
  [1, 1],
])
const eigenvalues = eigen.eigenvalues() // returns [4.30278, 0.69722]

// Calculate matrix rank
const rank = matrix.rank() // returns 2
```

## API

### Creation

- `new Matrix(rows: number, cols: number)` - Creates an empty matrix with given dimensions (filled with zeros)
- `new Matrix(rows: number, cols: number, constant: number)` - Creates a matrix filled with the specified constant value
- `new Matrix(data: number[][])` - Creates a matrix from a 2D array

### Methods

#### Matrix Operations

- `add(other: Matrix)` - Matrix addition
- `minus(other: Matrix)` - Matrix subtraction
- `product(other: Matrix)` - Matrix multiplication
- `transpose()` - Transposes the matrix
- `inverse()` - Returns the inverse of the matrix (if it exists)
- `determinant()` - Calculates the determinant of the matrix
- `rank()` - Calculates the rank of the matrix
- `eigenvalues()` - Returns eigenvalues of a 2x2 matrix (throws error for complex eigenvalues)
- `clone()` - Creates a deep copy of the matrix

#### Accessors

- `get(row: number, col: number)` - Gets value at position
- `set(row: number, col: number, value: number)` - Sets a value
- `get rows` - Number of rows
- `get cols` - Number of columns
- `toArray()` - Returns a deep copy of the matrix data

#### Comparison

- `equals(other: Matrix)` - Compares two matrices

#### Static Methods

- `Matrix.IDENTITY(n: number)` - Creates an n×n identity matrix
- `Matrix.ZERO(rows: number, cols: number)` - Creates a zero matrix

## Development

```bash
# Installation
pnpm install

# Tests
pnpm test

# Build
pnpm build
```

## License

ISC

## Author

Jean-Louis GUENEGO
