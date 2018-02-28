const {ifAnyDep} = require('../utils')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    ifAnyDep('react', 'plugin:react/recommended'),
    'prettier',
  ].filter(Boolean),
  rules: {},
}
