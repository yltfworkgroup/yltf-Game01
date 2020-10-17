module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'key-spacing': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'indent': 0,
    'quotes': 0,
    'semi': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-multiple-empty-lines':[2,{"max":10}],
    'space-before-function-paren':0,
    'prefer-const':0,
    'space-before-blocks':0,
    'comma-spacing':0,
    'padded-blocks':0,
    'spaced-comment':0,
  }
}
