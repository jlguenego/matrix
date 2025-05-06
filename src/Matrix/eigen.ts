import { Matrix } from './base'

declare module './base' {
  interface Matrix {
    eigenvalues(): number[]
  }
}

Matrix.prototype.eigenvalues = function (this: Matrix): number[] {
  if (this.rows !== 2 || this.cols !== 2) {
    throw new Error('Eigenvalues currently only implemented for 2x2 matrices')
  }

  // For matrix [[a, b], [c, d]]
  const a = this.get(0, 0)
  const b = this.get(0, 1)
  const c = this.get(1, 0)
  const d = this.get(1, 1)

  // Calculate characteristic equation coefficients: λ² - (a+d)λ + (ad-bc) = 0
  const trace = a + d
  const determinant = a * d - b * c

  // Calculate eigenvalues using quadratic formula: (-b ± √(b² - 4ac))/2a
  // where b = -trace and ac = determinant
  const discriminantValue = trace * trace - 4 * determinant
  if (discriminantValue < 0) {
    throw new Error('Matrix has complex eigenvalues')
  }
  const discriminant = Math.sqrt(discriminantValue)

  const lambda1 = (trace + discriminant) / 2
  const lambda2 = (trace - discriminant) / 2

  return [lambda1, lambda2].sort((a, b) => b - a)
}
