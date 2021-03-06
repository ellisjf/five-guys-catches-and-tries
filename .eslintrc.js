// This handles js libraries?
// Update 11-17-21 Documentation
// Update 10-27-21 Original Creation
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off'
  },
};
