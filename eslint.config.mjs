import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import storybook from 'eslint-plugin-storybook'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['generators/**', 'storybook-static/**']
  },
  ...nextCoreWebVitals,
  ...storybook.configs['flat/recommended'],
  prettier,
  {
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-anonymous-default-export': 'off'
    }
  }
]
