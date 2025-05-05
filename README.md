# @jlguenego/matrix

Une bibliothèque TypeScript pour manipuler les matrices en JavaScript.

## Installation

```bash
npm install @jlguenego/matrix
```

## Utilisation

```typescript
import { Matrix } from '@jlguenego/matrix'

// Créer une matrice vide 2x3
const matrix = new Matrix(2, 3)

// Créer une matrice à partir d'un tableau
const matrix = new Matrix([
  [1, 2],
  [3, 4],
])
```

## API

### Création

- `new Matrix(rows: number, cols: number)` - Crée une matrice vide de dimensions données
- `new Matrix(data: number[][])` - Crée une matrice à partir d'un tableau 2D

### Méthodes

#### Opérations matricielles

- `add(other: Matrix)` - Addition de matrices
- `minus(other: Matrix)` - Soustraction de matrices
- `product(other: Matrix)` - Multiplication de matrices
- `transpose()` - Transpose la matrice

#### Accesseurs

- `get(row: number, col: number)` - Obtient la valeur à une position
- `set(row: number, col: number, value: number)` - Définit une valeur
- `get rows` - Nombre de lignes
- `get cols` - Nombre de colonnes

#### Comparaison

- `equals(other: Matrix)` - Compare deux matrices

## Développement

```bash
# Installation
pnpm install

# Tests
pnpm test

# Build
pnpm build
```

## Licence

ISC

## Auteur

Jean-Louis GUENEGO
