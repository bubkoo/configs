import { config } from '@bubkoo/eslint-config'

export default config([
  {
    files: ['**/*.js', '**/*.ts'],
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
])
