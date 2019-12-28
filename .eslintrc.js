module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier',
    'plugin:prettier/recommended',
    'plugin:prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    browser: false,
  },
  rules: {},
};
