module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'prettier/@typescript-eslint', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    browser: false,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 1,
    'no-unused-vars': 2,
    semi: [2, 'always', { omitLastInOneLineBlock: true }],
  },
};
