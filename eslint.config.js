const nextVitals = require('eslint-config-next/core-web-vitals')
const prettier = require('eslint-plugin-prettier/recommended')

module.exports = [
  { ignores: ['node_modules/**', '.next/**', 'out/**'] },
  ...nextVitals,
  prettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'no-unused-vars': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]
