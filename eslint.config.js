const nextCoreWebVitals = require('eslint-config-next/core-web-vitals')
const storybook = require('eslint-plugin-storybook')
const prettier = require('eslint-config-prettier')

module.exports = [
  {
    ignores: ['generators/**', 'storybook-static/**']
  },
  ...nextCoreWebVitals,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      ...prettier.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-anonymous-default-export': 'off'
    }
  }
]
