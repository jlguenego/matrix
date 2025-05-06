# @jlguenego/matrix

A TypeScript library for matrix operations in JavaScript.

## Installation

```bash
npm install @jlguenego/matrix
```

## Usage

```typescript
import { Matrix } from '@jlguenego/matrix'

// Create an empty 2x3 matrix
const matrix = new Matrix(2, 3)

// Create a matrix from an array
const matrix = new Matrix([
  [1, 2],
  [3, 4],
])
```

## API

### Creation

- `new Matrix(rows: number, cols: number)` - Creates an empty matrix with given dimensions
- `new Matrix(data: number[][])` - Creates a matrix from a 2D array

### Methods

#### Matrix Operations

- `add(other: Matrix)` - Matrix addition
- `minus(other: Matrix)` - Matrix subtraction
- `product(other: Matrix)` - Matrix multiplication
- `transpose()` - Transposes the matrix

#### Accessors

- `get(row: number, col: number)` - Gets value at position
- `set(row: number, col: number, value: number)` - Sets a value
- `get rows` - Number of rows
- `get cols` - Number of columns

#### Comparison

- `equals(other: Matrix)` - Compares two matrices

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
