module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./functions/tsconfig.json', './functions/tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '/generated/**/*', // Ignore generated files.
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'quote-props': 0,
    'object-curly-spacing': ['error', 'always'],
    'import/no-unresolved': 0,
    indent: ['error', 2],
    semi: ['error', 'never'],
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    'linebreak-style': 0,
    'require-jsdoc': 0,
  },
}