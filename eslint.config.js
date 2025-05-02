// @ts-check

import { globalIgnores } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  globalIgnores(['dist/']),
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  }
)
