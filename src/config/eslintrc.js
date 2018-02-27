const {ifAnyDep} = require('../utils')

module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    ifAnyDep('react', 'plugin:react/recommended'),
    'prettier',
  ].filter(Boolean),
  rules: {},
}
